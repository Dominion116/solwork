'use client';

import Link from 'next/link';
import { ArrowRight, Shield, CheckCircle, Star, ArrowUpRight } from 'lucide-react';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppKit } from '@reown/appkit/react';
import { Marquee } from "@/components/ui/marquee";
import FAQ from "@/components/faq";
import {
  SolanaLogo,
  PhantomLogo,
  SerumLogo,
  RaydiumLogo,
  OrcaLogo,
} from "@/components/logos";

export default function Home() {
  const { open } = useAppKit();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12"
          )}
        />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge
              variant="secondary"
              className="rounded-full py-1 border-border"
              asChild
            >
              <Link href="/jobs">
                ✦ Browse Available Jobs <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
              Decentralized Freelance{' '}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Marketplace on Solana
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with top freelancers or find your next project. Secure escrow, milestone-based payments, and transparent ratings powered by blockchain.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/50"
              >
                Get Started <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Button 
                variant="secondary" 
                className="rounded-full px-10 h-auto py-3.5 text-base font-semibold"
                onClick={() => open()}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-16 px-6 bg-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="rounded-full py-1 border-border">
              ✦ Trusted Partners
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powered by the Solana Ecosystem
          </h2>
          <p className="text-center text-xl font-medium text-foreground/80 mb-14">
            Trusted by millions worldwide
          </p>

          <div className="space-y-8">
            <Marquee
              pauseOnHover
              className="[--duration:40s] [--gap:3rem]"
            >
              <SolanaLogo />
              <PhantomLogo />
              <SerumLogo />
              <RaydiumLogo />
              <OrcaLogo />
            </Marquee>
            <Marquee
              pauseOnHover
              reverse
              className="[--duration:40s] [--gap:3rem]"
            >
              <SolanaLogo />
              <PhantomLogo />
              <SerumLogo />
              <RaydiumLogo />
              <OrcaLogo />
            </Marquee>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="rounded-full py-1 border-border">
                ✦ Features
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why choose SolWork?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on Solana for speed, security, and transparency. A better way to work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative overflow-hidden">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-3 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Trustless Escrow</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Smart contracts hold funds securely. Payments release only when milestones are approved.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-3 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Milestone Payments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Break projects into stages. Pay as you go, ensuring quality delivery at every step.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 space-y-3 h-full transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center ring-1 ring-accent/20">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold">Transparent Ratings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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

      {/* FAQ Section */}
      <FAQ />

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
              <Button 
                variant="secondary" 
                size="lg"
                className="rounded-full px-10"
                onClick={() => open()}
              >
                Connect Wallet
              </Button>
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
