
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

const PROJECT_ID = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID?.trim();

export function AppKitProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!PROJECT_ID) {
      console.warn('[AppKit] NEXT_PUBLIC_REOWN_PROJECT_ID is not configured. Skipping AppKit initialization.');
      setInitialized(true);
      return;
    }

    try {
      const solanaAdapter = new SolanaAdapter({
        wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
      });

      const metadata = {
        name: 'SolWork',
        description: 'Decentralized Freelance Marketplace on Solana',
        url: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://solwork.app',
        icons: ['https://solwork.app/icon.png']
      };

      createAppKit({
        adapters: [solanaAdapter],
        projectId: PROJECT_ID,
        networks: [solana, solanaTestnet, solanaDevnet],
        defaultNetwork: solanaDevnet,
        metadata,
        features: {
          analytics: process.env.NODE_ENV === 'production',
        },
        themeMode: 'dark',
        themeVariables: {
          '--w3m-accent': 'hsl(240, 35.48%, 18.24%)',
          '--wui-color-accent-100': 'hsl(240, 35.48%, 18.24%)',
          '--wui-color-fg-100': 'hsl(217.5, 26.67%, 94.12%)',
        } as unknown as Record<string, string>
      });

      // Mark initialized so children can safely call useAppKit
      setInitialized(true);
    } catch (err) {
      console.error('[AppKit] Initialization failed:', err);
      // allow app to continue; children may handle missing AppKit gracefully
      setInitialized(true);
    }
  }, []);

  // While initializing, don't render children to avoid useAppKit() usage before createAppKit
  if (!initialized) return null;

  return <>{children}</>;
}
