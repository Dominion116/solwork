'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockJobs } from '@/lib/mockData';
import { Briefcase, DollarSign, Users, TrendingUp, Plus, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function ClientDashboard() {
  const [showCreateJob, setShowCreateJob] = useState(false);
  
  // Mock client data
  const clientAddress = '7xKX...9mP4';
  const myPostedJobs = mockJobs.filter(j => j.client === clientAddress || j.client === '3aYN...2kL9');
  
  const stats = {
    activeJobs: myPostedJobs.filter(j => j.status === 'open' || j.status === 'in-progress').length,
    totalSpent: 28.5,
    totalHires: 18,
    avgRating: 4.8,
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Client Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and find talent</p>
          </div>
          <button 
            onClick={() => setShowCreateJob(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <Plus className="h-5 w-5" />
            Post a Job
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Active Jobs</p>
              <Briefcase className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold">{stats.activeJobs}</p>
            <p className="text-sm text-muted-foreground">In progress</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total Spent</p>
              <DollarSign className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold">{stats.totalSpent} SOL</p>
            <p className="text-sm text-muted-foreground">≈ ${(stats.totalSpent * 180).toLocaleString()}</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Total Hires</p>
              <Users className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold">{stats.totalHires}</p>
            <p className="text-sm text-green-400">+3 this month</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Avg Rating</p>
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold">{stats.avgRating} ⭐</p>
            <p className="text-sm text-green-400">Excellent</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Posted Jobs */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Your Posted Jobs</h2>
                <Link href="/jobs" className="text-sm text-primary hover:underline">
                  View all jobs
                </Link>
              </div>

              {myPostedJobs.length > 0 ? (
                <div className="space-y-4">
                  {myPostedJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="block border border-border rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-3">
                              <h3 className="font-semibold">{job.title}</h3>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                job.status === 'open' ? 'bg-green-500/10 text-green-400' :
                                job.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400' :
                                job.status === 'completed' ? 'bg-purple-500/10 text-purple-400' :
                                'bg-red-500/10 text-red-400'
                              }`}>
                                {job.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1">{job.description}</p>
                          </div>
                          <span className="text-sm font-semibold text-nowrap">{job.budget} SOL</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="h-4 w-4" />
                            <span>{job.bidsCount} proposals</span>
                          </div>
                          {job.freelancer ? (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-400" />
                              <span>Freelancer hired</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>Awaiting hire</span>
                            </div>
                          )}
                          {job.deadline && (
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>Due {job.deadline.toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>

                        {job.status === 'in-progress' && (
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${(job.milestones.filter(m => m.status === 'approved').length / job.milestones.length) * 100}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">No jobs posted yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Post your first job to find talented freelancers
                  </p>
                  <button 
                    onClick={() => setShowCreateJob(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    Post a Job
                  </button>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Milestone approved</p>
                    <p className="text-sm text-muted-foreground">Content Writer for Crypto Blog • 2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New proposal received</p>
                    <p className="text-sm text-muted-foreground">Smart Contract Development • 5 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Job posted successfully</p>
                    <p className="text-sm text-muted-foreground">Frontend Development for DeFi Dashboard • 1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Your Profile</h3>
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                <div>
                  <p className="font-medium">{clientAddress}</p>
                  <p className="text-sm text-muted-foreground">Client</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-semibold">Jan 2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Verified</p>
                  <p className="font-semibold text-green-400">Yes ✓</p>
                </div>
              </div>
              <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Budget Overview */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">In Escrow</h3>
                <DollarSign className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-3xl font-bold">8.5 SOL</p>
                <p className="text-sm text-muted-foreground">≈ $1,530 USD</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Locked for active milestones
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6 space-y-4">
              <h3 className="font-semibold">Quick Actions</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setShowCreateJob(true)}
                  className="w-full px-4 py-2 text-left bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Post New Job
                </button>
                <Link 
                  href="/jobs"
                  className="block w-full px-4 py-2 text-left border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Browse Freelancers
                </Link>
                <button className="w-full px-4 py-2 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                  View Contracts
                </button>
                <button className="w-full px-4 py-2 text-left border border-border rounded-lg hover:bg-accent transition-colors">
                  Payment History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Job Modal Placeholder */}
      {showCreateJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setShowCreateJob(false)}>
          <div className="bg-card border border-border rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-6">Create New Job</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Job Title</label>
                <input type="text" className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g., Smart Contract Developer Needed" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea rows={4} className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Describe your project..." />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget (SOL)</label>
                <input type="number" className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Development</option>
                  <option>Design</option>
                  <option>Content Writing</option>
                  <option>Video Editing</option>
                </select>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Create Job
                </button>
                <button onClick={() => setShowCreateJob(false)} className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
