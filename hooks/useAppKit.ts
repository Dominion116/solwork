'use client';

import { useAppKit, useAppKitAccount } from '@reown/appkit/react';
import { useCallback } from 'react';

/**
 * Custom hook to access Reown AppKit wallet connection
 * Provides wallet address and connection methods
 */
export function useWalletConnection() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const connectWallet = useCallback(() => {
    open();
  }, [open]);

  return {
    address,
    isConnected,
    connectWallet,
  };
}
