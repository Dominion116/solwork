'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockJobs, mockBids } from '@/lib/mockData';
import { Briefcase, DollarSign, Star, TrendingUp, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function FreelancerDashboard() {
  const [currentDate] = useState(() => Date.now());
  // Mock freelancer data
  const freelancerAddress = '5hUV...3nK8';
  const myJobs = mockJobs.filter(j => j.freelancer === freelancerAddress);
  const myBids = mockBids.filter(b => b.freelancer === '6vLK...3pM2' || b.freelancer === '9tQN...7kR4');
  
  const stats = {
    activeJobs: myJobs.filter(j => j.status === 'in-progress').length,
    completedJobs: 24,
    totalEarned: 45.8,
    rating: 4.9,
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Freelancer Dashboard</h1>
          <p className="text-muted-foreground">Manage your jobs and track your earnings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Active Jobs</p>
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl font-bold">{stats.activeJobs}</p>
            <p className="text-sm text-green-400">In progress</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Completed</p>
              <CheckCircle className="h-5 w-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{stats.completedJobs}</p>
            <p className="text-sm text-green-400">+2 this month</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total Earned</p>
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl font-bold">{stats.totalEarned} SOL</p>
            <p className="text-sm text-muted-foreground">≈ ${(stats.totalEarned * 180).toLocaleString()}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Rating</p>
              <Star className="h-5 w-5 text-accent" />
            </div>
            <p className="text-3xl font-bold">{stats.rating} ⭐</p>
            <p className="text-sm text-green-400">Excellent</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Jobs */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Active Jobs</h2>
                <Link href="/jobs" className="text-sm text-primary hover:underline">
                  Find more jobs
                </Link>
              </div>

              {myJobs.length > 0 ? (
                <div className="space-y-4">
                  {myJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="block border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <h3 className="font-semibold">{job.title}</h3>
                            <p className="text-sm text-muted-foreground">Client: {job.client}</p>
                          </div>
                          <span className="text-sm font-semibold text-nowrap">{job.budget} SOL</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4" />
                            <span>{job.milestones.filter(m => m.status === 'approved').length}/{job.milestones.length} milestones</span>
                          </div>
                          {job.deadline && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>Due {job.deadline.toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>

                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(job.milestones.filter(m => m.status === 'approved').length / job.milestones.length) * 100}%` }}
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No active jobs</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start browsing available jobs to find your next project
                  </p>
                  <Link 
                    href="/jobs"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-lg shadow-primary/50"
                  >
                    Browse Jobs
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* My Proposals */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold">My Proposals ({myBids.length})</h2>
              
              {myBids.length > 0 ? (
                <div className="space-y-4">
                  {myBids.map((bid) => {
                    const job = mockJobs.find(j => j.id === bid.jobId);
                    if (!job) return null;
                    
                    return (
                      <div key={bid.id} className="border border-border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <Link href={`/jobs/${job.id}`} className="font-semibold hover:text-primary">
                              {job.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">Submitted {Math.floor((currentDate - bid.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">{bid.proposedPrice} SOL</p>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              bid.status === 'accepted' ? 'bg-green-500/10 text-green-400' :
                              bid.status === 'rejected' ? 'bg-red-500/10 text-red-400' :
                              'bg-yellow-500/10 text-yellow-400'
                            }`}>
                              {bid.status}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{bid.proposal}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No proposals submitted yet
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Your Profile</h3>
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-linear-to-br from-primary to-accent" />
                <div>
                  <p className="font-medium">{freelancerAddress}</p>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="font-semibold">98%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-semibold">2 hours</p>
                </div>
              </div>
              <button className="w-full px-6 py-2.5 border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-colors font-medium">
                Edit Profile
              </button>
            </div>

            {/* Earnings Overview */}
            <div className="bg-linear-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">This Month</h3>
                <TrendingUp className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <p className="text-3xl font-bold">12.5 SOL</p>
                <p className="text-sm text-muted-foreground">≈ $2,250 USD</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-green-400">
                <TrendingUp className="h-4 w-4" />
                <span>+24% from last month</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="space-y-2">
                <Link 
                  href="/jobs"
                  className="block w-full px-6 py-2.5 text-center border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-colors font-medium"
                >
                  Browse Jobs
                </Link>
                <button className="w-full px-6 py-2.5 text-center border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  Withdraw Earnings
                </button>
                <button className="w-full px-6 py-2.5 text-center border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  View Statistics
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
