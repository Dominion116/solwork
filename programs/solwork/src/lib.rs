use anchor_lang::prelude::*;
use anchor_lang::system_program;

declare_id!("FxDJohpwPhJ5CnALDjFKqgfyxZMt7av5WU7JrLkvnv4h");

#[program]
pub mod solwork {
    use super::*;

    pub fn create_job(
        ctx: Context<CreateJob>,
        title: String,
        description: String,
        total_amount: u64,
        milestones: Vec<MilestoneData>,
    ) -> Result<()> {
        require!(milestones.len() > 0 && milestones.len() <= 10, ErrorCode::InvalidMilestoneCount);
        require!(total_amount > 0, ErrorCode::InvalidAmount);

        // Transfer funds to escrow first
        let cpi_context = CpiContext::new(
            ctx.accounts.system_program.to_account_info(),
            system_program::Transfer {
                from: ctx.accounts.client.to_account_info(),
                to: ctx.accounts.job.to_account_info(),
            },
        );
        system_program::transfer(cpi_context, total_amount)?;

        // Now initialize job data
        let job = &mut ctx.accounts.job;
        job.client = ctx.accounts.client.key();
        job.freelancer = Pubkey::default();
        job.title = title;
        job.description = description;
        job.total_amount = total_amount;
        job.status = JobStatus::Open;
        job.created_at = Clock::get()?.unix_timestamp;
        job.milestones = milestones.iter().map(|m| Milestone {
            description: m.description.clone(),
            amount: m.amount,
            status: MilestoneStatus::Pending,
            submitted_at: 0,
            approved_at: 0,
        }).collect();
        job.bump = ctx.bumps.job;

        msg!("Job created: {}", job.key());
        Ok(())
    }

    pub fn apply_for_job(ctx: Context<ApplyForJob>) -> Result<()> {
        let job = &mut ctx.accounts.job;
        require!(job.status == JobStatus::Open, ErrorCode::JobNotOpen);
        require!(job.freelancer == Pubkey::default(), ErrorCode::JobAlreadyAssigned);

        job.freelancer = ctx.accounts.freelancer.key();
        job.status = JobStatus::InProgress;

        msg!("Freelancer {} applied for job {}", ctx.accounts.freelancer.key(), job.key());
        Ok(())
    }

    pub fn submit_milestone(ctx: Context<SubmitMilestone>, milestone_index: u8) -> Result<()> {
        let job = &mut ctx.accounts.job;
        require!(job.status == JobStatus::InProgress, ErrorCode::JobNotInProgress);
        require!(job.freelancer == ctx.accounts.freelancer.key(), ErrorCode::Unauthorized);
        
        let milestone_idx = milestone_index as usize;
        require!(milestone_idx < job.milestones.len(), ErrorCode::InvalidMilestoneIndex);
        
        let milestone = &mut job.milestones[milestone_idx];
        require!(milestone.status == MilestoneStatus::Pending, ErrorCode::MilestoneAlreadySubmitted);

        milestone.status = MilestoneStatus::Submitted;
        milestone.submitted_at = Clock::get()?.unix_timestamp;

        msg!("Milestone {} submitted for job {}", milestone_index, job.key());
        Ok(())
    }

    pub fn approve_milestone(ctx: Context<ApproveMilestone>, milestone_index: u8) -> Result<()> {
        let job = &mut ctx.accounts.job;
        require!(job.client == ctx.accounts.client.key(), ErrorCode::Unauthorized);
        require!(job.status == JobStatus::InProgress, ErrorCode::JobNotInProgress);
        
        let milestone_idx = milestone_index as usize;
        require!(milestone_idx < job.milestones.len(), ErrorCode::InvalidMilestoneIndex);
        
        let milestone = &mut job.milestones[milestone_idx];
        require!(milestone.status == MilestoneStatus::Submitted, ErrorCode::MilestoneNotSubmitted);

        milestone.status = MilestoneStatus::Approved;
        milestone.approved_at = Clock::get()?.unix_timestamp;

        // Transfer milestone payment to freelancer
        let amount = milestone.amount;
        **job.to_account_info().try_borrow_mut_lamports()? -= amount;
        **ctx.accounts.freelancer.to_account_info().try_borrow_mut_lamports()? += amount;

        // Check if all milestones are approved
        let all_approved = job.milestones.iter().all(|m| m.status == MilestoneStatus::Approved);
        if all_approved {
            job.status = JobStatus::Completed;
        }

        msg!("Milestone {} approved for job {}", milestone_index, job.key());
        Ok(())
    }

    pub fn cancel_job(ctx: Context<CancelJob>) -> Result<()> {
        let job = &mut ctx.accounts.job;
        require!(job.client == ctx.accounts.client.key(), ErrorCode::Unauthorized);
        require!(job.status == JobStatus::Open || job.status == JobStatus::InProgress, ErrorCode::CannotCancelJob);

        // Calculate refund amount (total - approved milestones)
        let approved_amount: u64 = job.milestones.iter()
            .filter(|m| m.status == MilestoneStatus::Approved)
            .map(|m| m.amount)
            .sum();
        let refund_amount = job.total_amount - approved_amount;

        if refund_amount > 0 {
            **job.to_account_info().try_borrow_mut_lamports()? -= refund_amount;
            **ctx.accounts.client.to_account_info().try_borrow_mut_lamports()? += refund_amount;
        }

        job.status = JobStatus::Cancelled;

        msg!("Job {} cancelled, refunded {} lamports", job.key(), refund_amount);
        Ok(())
    }

    pub fn rate_freelancer(ctx: Context<RateFreelancer>, rating: u8, review: String) -> Result<()> {
        require!(rating >= 1 && rating <= 5, ErrorCode::InvalidRating);
        require!(review.len() <= 500, ErrorCode::ReviewTooLong);

        let job = &ctx.accounts.job;
        require!(job.client == ctx.accounts.client.key(), ErrorCode::Unauthorized);
        require!(job.status == JobStatus::Completed, ErrorCode::JobNotCompleted);

        let profile = &mut ctx.accounts.freelancer_profile;
        profile.total_jobs += 1;
        profile.total_rating += rating as u64;
        profile.average_rating = (profile.total_rating as f64 / profile.total_jobs as f64) as u8;

        msg!("Freelancer {} rated {} stars", job.freelancer, rating);
        Ok(())
    }

    pub fn initialize_profile(ctx: Context<InitializeProfile>) -> Result<()> {
        let profile = &mut ctx.accounts.profile;
        profile.owner = ctx.accounts.owner.key();
        profile.total_jobs = 0;
        profile.total_rating = 0;
        profile.average_rating = 0;
        profile.bump = ctx.bumps.profile;

        msg!("Profile initialized for {}", ctx.accounts.owner.key());
        Ok(())
    }
}

// Account Structures
#[account]
pub struct Job {
    pub client: Pubkey,
    pub freelancer: Pubkey,
    pub title: String,
    pub description: String,
    pub total_amount: u64,
    pub status: JobStatus,
    pub milestones: Vec<Milestone>,
    pub created_at: i64,
    pub bump: u8,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct Milestone {
    pub description: String,
    pub amount: u64,
    pub status: MilestoneStatus,
    pub submitted_at: i64,
    pub approved_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct MilestoneData {
    pub description: String,
    pub amount: u64,
}

#[account]
pub struct FreelancerProfile {
    pub owner: Pubkey,
    pub total_jobs: u32,
    pub total_rating: u64,
    pub average_rating: u8,
    pub bump: u8,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum JobStatus {
    Open,
    InProgress,
    Completed,
    Cancelled,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, PartialEq, Eq)]
pub enum MilestoneStatus {
    Pending,
    Submitted,
    Approved,
}

// Context Structures
#[derive(Accounts)]
#[instruction(title: String, description: String)]
pub struct CreateJob<'info> {
    #[account(
        init,
        payer = client,
        space = 8 + 32 + 32 + (4 + title.len()) + (4 + description.len()) + 8 + 1 + (4 + 10 * 200) + 8 + 1,
        seeds = [b"job", client.key().as_ref(), &Clock::get()?.unix_timestamp.to_le_bytes()],
        bump
    )]
    pub job: Account<'info, Job>,
    #[account(mut)]
    pub client: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ApplyForJob<'info> {
    #[account(mut)]
    pub job: Account<'info, Job>,
    pub freelancer: Signer<'info>,
}

#[derive(Accounts)]
pub struct SubmitMilestone<'info> {
    #[account(mut)]
    pub job: Account<'info, Job>,
    pub freelancer: Signer<'info>,
}

#[derive(Accounts)]
pub struct ApproveMilestone<'info> {
    #[account(mut)]
    pub job: Account<'info, Job>,
    #[account(mut)]
    pub client: Signer<'info>,
    /// CHECK: Freelancer account to receive payment
    #[account(mut)]
    pub freelancer: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct CancelJob<'info> {
    #[account(mut)]
    pub job: Account<'info, Job>,
    #[account(mut)]
    pub client: Signer<'info>,
}

#[derive(Accounts)]
pub struct RateFreelancer<'info> {
    pub job: Account<'info, Job>,
    pub client: Signer<'info>,
    #[account(
        mut,
        seeds = [b"profile", job.freelancer.as_ref()],
        bump = freelancer_profile.bump
    )]
    pub freelancer_profile: Account<'info, FreelancerProfile>,
}

#[derive(Accounts)]
pub struct InitializeProfile<'info> {
    #[account(
        init,
        payer = owner,
        space = 8 + 32 + 4 + 8 + 1 + 1,
        seeds = [b"profile", owner.key().as_ref()],
        bump
    )]
    pub profile: Account<'info, FreelancerProfile>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

// Error Codes
#[error_code]
pub enum ErrorCode {
    #[msg("Invalid milestone count. Must be between 1 and 10")]
    InvalidMilestoneCount,
    #[msg("Invalid amount. Must be greater than 0")]
    InvalidAmount,
    #[msg("Job is not open for applications")]
    JobNotOpen,
    #[msg("Job already assigned to a freelancer")]
    JobAlreadyAssigned,
    #[msg("Job is not in progress")]
    JobNotInProgress,
    #[msg("Unauthorized action")]
    Unauthorized,
    #[msg("Invalid milestone index")]
    InvalidMilestoneIndex,
    #[msg("Milestone already submitted")]
    MilestoneAlreadySubmitted,
    #[msg("Milestone not submitted yet")]
    MilestoneNotSubmitted,
    #[msg("Cannot cancel job in current state")]
    CannotCancelJob,
    #[msg("Job not completed yet")]
    JobNotCompleted,
    #[msg("Invalid rating. Must be between 1 and 5")]
    InvalidRating,
    #[msg("Review text too long. Maximum 500 characters")]
    ReviewTooLong,
}

