'use client';

import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Briefcase } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SolWork
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Browse Jobs
            </Link>
            <Link href="/dashboard/client" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Post Job
            </Link>
            <Link href="/dashboard/freelancer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
          </nav>

          <WalletMultiButton className="!bg-primary hover:!bg-primary/90 !rounded-lg !h-10 !px-4 !text-sm" />
        </div>
      </div>
    </header>
  );
}
