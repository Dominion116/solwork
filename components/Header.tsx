'use client';

import { Logo } from "@/components/logo";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-border/40 max-w-7xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        <div className="flex items-center gap-3">
          <div id="primary-wallet-button">
            <WalletMultiButton className="wallet-adapter-button-override" />
          </div>
        </div>
      </div>
    </nav>
  );
}
