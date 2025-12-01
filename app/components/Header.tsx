'use client';

import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { Button } from "@/components/ui/button";
import { useAppKit } from '@reown/appkit/react';

export default function Header() {
  const { open } = useAppKit();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-md border border-border/40 max-w-7xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button 
            variant="default"
            size="default"
            className="rounded-full font-sans"
            onClick={() => open()}
          >
            Connect Wallet
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
