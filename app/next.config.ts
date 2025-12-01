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
  serverExternalPackages: [
    'pino-pretty', 
    'lokijs', 
    'encoding', 
    'thread-stream',
    '@walletconnect/logger',
    'pino',
  ],
  webpack: (config) => {
    config.externals.push(
      'pino-pretty', 
      'lokijs', 
      'encoding',
      'thread-stream',
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
    
    config.resolve.fallback = {
      ...config.resolve.fallback,
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
    
    return config;
  },
  // Explicitly acknowledge both webpack and turbopack
  turbopack: {},
};

export default nextConfig;



