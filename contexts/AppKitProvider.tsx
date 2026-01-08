
'use client';

import { ReactNode, useEffect, useState } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';


export function AppKitProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID?.trim();
    
    console.log('--- APP KIT STARTUP ---');
    console.log('Project ID Length:', projectId?.length || 0);
    console.log('Project ID Prefix:', projectId ? projectId.substring(0, 4) : 'NONE');

    if (!projectId || projectId === 'YOUR_PROJECT_ID') {
      console.error('[AppKit] Error: NEXT_PUBLIC_REOWN_PROJECT_ID is missing from .env.local');
      setReady(true);
      return;
    }

    if (!(window as any)._appkitInitialized) {
      try {
        const solanaAdapter = new SolanaAdapter({
          wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
        });

        const metadata = {
          name: 'SolWork',
          description: 'Decentralized Freelance Marketplace on Solana',
          url: 'https://solwork.app',
          icons: ['https://solwork.app/icon.png']
        };

        createAppKit({
          adapters: [solanaAdapter],
          networks: [solana, solanaTestnet, solanaDevnet],
          projectId: projectId!,
          metadata,
          features: {
            analytics: false,
            email: false,
            socials: [],
          },
          themeMode: 'dark',
          defaultNetwork: solanaDevnet, // Explicitly set default network
        });

        (window as any)._appkitInitialized = true;
        console.log('[AppKit] CreateAppKit call finished for Solana');
      } catch (err) {
        console.error('[AppKit] Initialization failed:', err);
      }
    }

    setReady(true);
  }, []);

  if (!ready) return null;

  return <>{children}</>;
}
