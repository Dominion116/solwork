'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { mockJobs, mockBids } from '@/lib/mockData';
import { ArrowLeft, Clock, Users, CheckCircle, Calendar } from 'lucide-react';

export default function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [currentDate] = useState(() => Date.now());
  const job = mockJobs.find(j => j.id === id);
  const jobBids = mockBids.filter(b => b.jobId === id);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Job not found</h1>
          <Link href="/jobs" className="text-primary hover:underline">
                Back to jobs
              </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/jobs"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl font-bold">{job.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    job.status === 'open' ? 'bg-green-500/10 text-green-400' :
                    job.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' :
                    job.status === 'completed' ? 'bg-primary/10 text-primary' :
                    'bg-red-500/10 text-red-400'
                  }`}>
                    {job.status}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Posted {Math.floor((currentDate - job.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{job.bidsCount} proposals</span>
                  </div>
                  {job.deadline && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Due {job.deadline.toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {job.description}
              </p>
            </div>

            {/* Milestones */}
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <h2 className="text-xl font-semibold">Milestones</h2>
              <div className="space-y-4">
                {job.milestones.map((milestone, index) => (
                  <div key={milestone.id} className="border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                          milestone.status === 'paid' ? 'bg-green-500/20 text-green-400' :
                          milestone.status === 'approved' ? 'bg-blue-500/20 text-blue-400' :
                          milestone.status === 'submitted' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {milestone.status === 'paid' || milestone.status === 'approved' ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-semibold">{index + 1}</span>
                          )}
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            milestone.status === 'paid' ? 'bg-green-500/10 text-green-400' :
                            milestone.status === 'approved' ? 'bg-blue-500/10 text-blue-400' :
                            milestone.status === 'submitted' ? 'bg-yellow-500/10 text-yellow-400' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {milestone.status}
                          </span>
                        </div>
                      </div>
                      <span className="font-semibold text-nowrap">{milestone.amount} SOL</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Proposals */}
            {jobBids.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-semibold">Recent Proposals ({jobBids.length})</h2>
                <div className="space-y-4">
                  {jobBids.map((bid) => (
                    <div key={bid.id} className="border border-border rounded-lg p-4 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-linear-to-br from-primary to-accent" />
                          <div>
                            <p className="font-medium">{bid.freelancer}</p>
                            <p className="text-sm text-muted-foreground">Posted {Math.floor((currentDate - bid.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{bid.proposedPrice} SOL</p>
                          <p className="text-sm text-muted-foreground">{bid.timeline}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{bid.proposal}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Card */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="text-3xl font-bold">{job.budget} SOL</p>
                <p className="text-sm text-muted-foreground">≈ ${(job.budget * 180).toLocaleString()} USD</p>
              </div>
            </div>

            {/* Client Info */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Client</h3>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary to-accent" />
                <div>
                  <p className="font-medium">{job.client}</p>
                  <p className="text-sm text-muted-foreground">Active since 2024</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Jobs Posted</p>
                  <p className="font-semibold">12</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="font-semibold">4.9 ⭐</p>
                </div>
              </div>
            </div>

            {/* Action Card */}
            {job.status === 'open' && (
              <div className="bg-linear-to-br from-primary/10 to-accent/10 border border-border rounded-xl p-6 space-y-4">
                <h3 className="font-semibold">Interested?</h3>
                <p className="text-sm text-muted-foreground">
                  Connect your wallet to submit a proposal for this job
                </p>
                <appkit-button />
                <button className="w-full px-6 py-2.5 border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-colors font-medium">
                  Submit Proposal
                </button>
              </div>
            )}

            {/* Category */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Category</h3>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                {job.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
