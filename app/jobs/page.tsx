'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockJobs } from '@/lib/mockData';
import { Search, Filter, Clock, DollarSign, Users, ChevronRight } from 'lucide-react';

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentDate] = useState(() => Date.now());

  const categories = ['all', 'Development', 'Design', 'Content Writing', 'Video Editing'];

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    return matchesSearch && matchesCategory && job.status === 'open';
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Browse Jobs</h1>
          <p className="text-muted-foreground text-lg">
            Find your next opportunity in the decentralized workspace
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-card border border-border hover:bg-primary/10'
                }`}
              >
                {category === 'all' ? 'All Jobs' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-6">
          {filteredJobs.map((job) => (
            <Link 
              href={`/jobs/${job.id}`} 
              key={job.id}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-2">
                      {job.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                      +{job.skills.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold text-foreground">{job.budget} SOL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{job.bidsCount} proposals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Posted {Math.floor((currentDate - job.createdAt.getTime()) / (1000 * 60 * 60 * 24))} days ago</span>
                  </div>
                  {job.deadline && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Due {job.deadline.toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-linear-to-br from-purple-500 to-pink-500" />
                    <span className="text-sm text-muted-foreground">{job.client}</span>
                  </div>
                  <span className="text-sm px-3 py-1 bg-muted rounded-full">
                    {job.milestones.length} milestones
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
