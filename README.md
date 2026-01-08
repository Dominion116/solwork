# SolWork - Decentralized Freelance Marketplace

A trustless, blockchain-powered platform connecting clients and freelancers on the Solana network.

## Features

### 🔐 Secure & Trustless
- **Smart Contract Escrow**: Funds are locked in program-controlled accounts until milestones are approved
- **Milestone-Based Payments**: Break projects into stages and pay as you go
- **On-Chain Ratings**: Transparent, immutable reviews and ratings

### 💼 For Freelancers
- Browse available jobs across multiple categories
- Submit proposals with custom pricing and timelines
- Track active projects and milestone progress
- Build reputation with on-chain ratings
- Instant SOL payments upon milestone approval

### 👔 For Clients
- Post jobs with detailed requirements and budgets
- Review proposals from qualified freelancers
- Approve milestones and release payments
- Rate freelancers after project completion
- Full transparency throughout the process

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router and Turbopack
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern styling with cyberpunk theme
- **shadcn/ui** - Beautiful, accessible components
- **Lucide Icons** - Clean, consistent iconography
- **Reown AppKit** - Modern wallet connection with Solana support

### Blockchain
- **Solana** - Fast, low-cost transactions on Devnet
- **@solana/web3.js** - Solana blockchain interaction
- **Reown AppKit Solana Adapter** - Seamless multi-wallet support
- **Anchor Framework** - Smart contract development (coming soon)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory:
```bash
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id
```

Get your project ID from [Reown Cloud](https://cloud.reown.com) (free account required).

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Wallet Connection
- Click the wallet button in the header
- Choose from Phantom, Solflare, or other supported Solana wallets
- Approve the connection in your wallet
- Connected to Solana Devnet by default
- Start browsing jobs or posting projects!

## Project Structure

```
app/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout with wallet provider
│   ├── globals.css          # Global styles with custom theme
│   ├── jobs/                # Jobs pages
│   │   ├── page.tsx         # Browse jobs
│   │   └── [id]/page.tsx    # Job details
│   └── dashboard/           # Dashboard pages
│       ├── freelancer/      # Freelancer dashboard
│       └── client/          # Client dashboard
├── components/              # React components
│   ├── Header.tsx           # Navigation header with wallet button
│   └── Footer.tsx           # Site footer
├── contexts/                # React contexts
│   └── AppKitProvider.tsx   # Reown AppKit + Solana wallet setup
├── types/                   # TypeScript declarations
│   └── appkit.d.ts          # AppKit web component types
└── lib/                     # Utilities and data
    └── mockData.ts          # Mock data for development
```

## Features Overview

### Landing Page
- Hero section with value proposition
- Feature highlights (Trustless Escrow, Milestone Payments, Transparent Ratings)
- Platform statistics
- Call-to-action with wallet connection

### Browse Jobs
- Search and filter by category
- View job details including budget, skills, and milestones
- See proposal count and client information
- Submit proposals (wallet required)

### Job Details
- Complete job description
- Milestone breakdown with payment amounts
- Client profile and rating
- Submit proposal form
- View other proposals

### Freelancer Dashboard
- Active jobs overview with progress tracking
- Submitted proposals status
- Earnings statistics
- Profile and reputation metrics
- Quick actions

### Client Dashboard  
- Posted jobs management
- View and accept proposals
- Milestone approval workflow
- Budget and escrow tracking
- Recent activity feed

## Theme

The app uses a modern cyberpunk dark theme:
- Background: `hsl(240 41.46% 8.04%)` (dark navy)
- Primary: `hsl(312.94 100% 50%)` (magenta #FF00FF)
- Accent: `hsl(168 100% 50%)` (cyan #00FFAA)
- Fonts: Outfit (sans-serif), Fira Code (monospace)
- All buttons styled as rounded pills with shadow effects

## Development Notes

- Currently using mock data for development
- Wallet integration powered by Reown AppKit
- Connected to Solana Devnet
- Smart contracts under development in `/programs/solwork`
- All pages are fully responsive and mobile-friendly
- Zero compile errors, production-ready frontend

---

Built with ❤️ on Solana
