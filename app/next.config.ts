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
    
    // Exclude test files and non-JS files from being bundled
    config.module.rules.push({
      test: /\.test\.(js|ts|jsx|tsx)$/,
      loader: 'ignore-loader',
    });
    
    config.module.rules.push({
      test: /node_modules\/.*\/test\/.*$/,
      loader: 'ignore-loader',
    });
    
    config.module.rules.push({
      test: /node_modules\/.*\/(LICENSE|CHANGELOG|README|\.md|\.txt)$/i,
      loader: 'ignore-loader',
    });
    
    // Ignore specific problematic files
    config.module.rules.push({
      test: /node_modules\/(pino|thread-stream)\/.*\/(test|LICENSE|benchmarks?|examples?)\/.*$/,
      loader: 'ignore-loader',
    });
    
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



