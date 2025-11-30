'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Zap, Globe, CheckCircle, Star } from 'lucide-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Decentralized freelance
                <span className="block bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  marketplace on Solana
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Connect with top freelancers or find your next project. Secure escrow, milestone-based payments, and transparent ratings powered by blockchain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/jobs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Browse Jobs
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  href="/dashboard/client"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
                >
                  Post a Job
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-accent rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Secure Escrow</h3>
                    <p className="text-sm text-muted-foreground">Funds locked until work approved</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Instant Payments</h3>
                    <p className="text-sm text-muted-foreground">Fast, low-cost transactions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Global Access</h3>
                    <p className="text-sm text-muted-foreground">No borders, no restrictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose SolWork?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on Solana for speed, security, and transparency. A better way to work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 h-full">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Trustless Escrow</h3>
                <p className="text-muted-foreground">
                  Smart contracts hold funds securely. Payments release only when milestones are approved, protecting both parties.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 h-full">
                <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Milestone Payments</h3>
                <p className="text-muted-foreground">
                  Break projects into stages. Pay as you go, ensuring quality delivery at every step.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl p-8 space-y-4 h-full">
                <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Star className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Transparent Ratings</h3>
                <p className="text-muted-foreground">
                  On-chain reviews and ratings build reputation. Find trusted partners with verified track records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-primary/10 via-card to-accent/10 border border-border/50 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  $2.5M+
                </div>
                <div className="text-muted-foreground">Total Paid Out</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  1,200+
                </div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  850+
                </div>
                <div className="text-muted-foreground">Jobs Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                  4.8/5
                </div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to start working on Solana?
            </h2>
            <p className="text-lg text-muted-foreground">
              Connect your wallet and join the decentralized future of work. No middlemen, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WalletMultiButton className="bg-primary! hover:bg-primary/90! rounded-lg! h-12! px-8! text-base!" />
              <Link 
                href="/jobs"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse available jobs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
