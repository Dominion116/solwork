import type { NextConfig } from "next";

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
  serverExternalPackages: ['pino-pretty', 'lokijs', 'encoding', 'thread-stream'],
  webpack: (config, { isServer }) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    
    // Exclude test files from being bundled
    config.module.rules.push({
      test: /\.test\.(js|ts|jsx|tsx)$/,
      loader: 'ignore-loader',
    });
    
    config.module.rules.push({
      test: /node_modules\/.*\/test\/.*\.(js|ts|jsx|tsx)$/,
      loader: 'ignore-loader',
    });
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      };
    }
    
    return config;
  },
  // Explicitly acknowledge both webpack and turbopack
  turbopack: {},
};

export default nextConfig;



