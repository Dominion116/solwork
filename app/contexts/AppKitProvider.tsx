'use client';

import { ReactNode } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

// Initialize AppKit at module level
if (projectId) {
  // Set up the Solana Adapter
  const solanaAdapter = new SolanaAdapter({
    wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
  });

  // Create the modal
  const metadata = {
    name: 'SolWork',
    description: 'Decentralized Freelance Marketplace on Solana',
    url: 'https://solwork.app',
    icons: ['https://solwork.app/icon.png']
  };

  createAppKit({
    adapters: [solanaAdapter],
    projectId,
    networks: [solana, solanaTestnet, solanaDevnet],
    defaultNetwork: solanaDevnet,
    metadata,
    features: {
      analytics: true,
    },
    themeMode: 'dark',
    themeVariables: {
      '--w3m-accent': 'hsl(240, 35.48%, 18.24%)',
      '--wui-color-accent-100': 'hsl(240, 35.48%, 18.24%)',
      '--wui-color-fg-100': 'hsl(217.5, 26.67%, 94.12%)',
    }
  });
} else {
  console.warn(
    'Reown AppKit: NEXT_PUBLIC_REOWN_PROJECT_ID is not configured. ' +
    'Get your project ID at https://dashboard.reown.com'
  );
}

export function AppKitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
