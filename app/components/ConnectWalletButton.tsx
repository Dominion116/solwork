'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { Button } from '@/components/ui/button';

/**
 * ConnectWalletButton Component
 * Displays connection status and allows users to connect/disconnect wallet
 */
export function ConnectWalletButton() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const truncateAddress = (addr: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <Button
      onClick={() => open()}
      variant={isConnected ? 'secondary' : 'default'}
      className="font-medium"
    >
      {isConnected ? truncateAddress(address || '') : 'Connect Wallet'}
    </Button>
  );
}
