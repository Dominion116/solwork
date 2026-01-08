import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cryptologos.cc',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  transpilePackages: [
    '@reown/appkit',
    '@reown/appkit-adapter-solana',
    '@walletconnect/logger',
  ],
  serverExternalPackages: [
    'pino-pretty', 
    'lokijs', 
    'encoding', 
    'pino',
  ],
  // Set environment variable to skip the problematic code
  env: {
    SKIP_PROCESS_EXIT_CHECK: 'true',
  },
  webpack: (config, { isServer }) => {
    config.externals.push(
      'pino-pretty', 
      'lokijs', 
      'encoding',
      'pino'
    );
    
    // Use IgnorePlugin to completely exclude test files and directories
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\/test\//,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /\.test\.(js|ts|jsx|tsx)$/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /why-is-node-running/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /tap/,
      }),
    );
    
    // Add resolve fallback for the missing module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'why-is-node-running': false,
      fs: false,
      net: false,
      tls: false,
      crypto: false,
      stream: false,
      http: false,
      https: false,
      zlib: false,
      path: false,
      os: false,
    };

    // Add alias to prevent resolution of the module
    config.resolve.alias = {
      ...config.resolve.alias,
      'why-is-node-running': false,
    };
    
    return config;
  },
  // Explicitly acknowledge both webpack and turbopack
  turbopack: {
  },
};

export default nextConfig;