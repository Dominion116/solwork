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
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern styling with dark theme
- **shadcn/ui** - Beautiful, accessible components
- **Lucide Icons** - Clean, consistent iconography

### Blockchain
- **Solana** - Fast, low-cost transactions
- **@solana/wallet-adapter** - Seamless wallet integration
- **Anchor Framework** - Smart contract development (coming soon)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

1. Install dependencies:
```bash
npm install --no-optional
```

2. Run the development server:
```bash
npx next dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Wallet Connection
- Click "Connect Wallet" in the header
- Select your preferred Solana wallet
- Approve the connection
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
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
├── contexts/                # React contexts
│   └── WalletContextProvider.tsx  # Solana wallet setup
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

The app uses a modern dark theme with purple accents:
- Background: `#1A1F2E` (dark blue-gray)
- Cards: `#232936` (slightly lighter)
- Primary: `#A855F7` (purple)
- Accent: `#EC4899` (pink)

## Development Notes

- Currently using mock data for development
- Wallet integration is functional (Devnet)
- Smart contracts are under development in `/programs/solwork`
- All pages are fully responsive and mobile-friendly

---

Built with ❤️ on Solana
