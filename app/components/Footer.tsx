import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SolWork
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Decentralized freelance marketplace powered by Solana blockchain.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/jobs" className="hover:text-foreground transition-colors">Browse Jobs</Link></li>
              <li><Link href="/dashboard/client" className="hover:text-foreground transition-colors">Post a Job</Link></li>
              <li><Link href="/dashboard/freelancer" className="hover:text-foreground transition-colors">Find Work</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">API</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Discord</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">GitHub</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SolWork. Built on Solana.</p>
        </div>
      </div>
    </footer>
  );
}
