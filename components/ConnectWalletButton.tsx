'use client';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

/**
 * ConnectWalletButton Component
 * Displays connection status and allows users to connect/disconnect wallet
 */
export function ConnectWalletButton() {
  return (
    <div className="flex items-center">
      <WalletMultiButton className="wallet-adapter-button-override" />
    </div>
  );
}
