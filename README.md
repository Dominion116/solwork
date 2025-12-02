# SolWork - Decentralized Freelance Marketplace on Solana

> A trustless, blockchain-powered platform connecting clients and freelancers with smart contract escrow, milestone-based payments, and on-chain reputation.

[![Solana](https://img.shields.io/badge/Solana-Devnet-14F195?logo=solana&logoColor=white)](https://solana.com)
[![Anchor](https://img.shields.io/badge/Anchor-0.32.1-8A63D2)](https://www.anchor-lang.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.5-000000?logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 🌟 Overview

SolWork is a decentralized freelance marketplace built on Solana that eliminates trust issues through smart contract automation. Clients post jobs with funds locked in escrow, freelancers deliver work in milestones, and payments are released automatically upon approval—all secured by on-chain verification.

**Key Benefits:**
- 🔒 **Zero Trust Required** - Smart contracts handle all payments
- ⚡ **Lightning Fast** - Powered by Solana's high-speed blockchain
- 💰 **Low Fees** - Minimal transaction costs compared to Web2 platforms
- 🌐 **Global Access** - No geographical restrictions or bank accounts needed
- 📊 **Transparent Reputation** - Immutable on-chain ratings and reviews

## 🏗️ Project Structure

```
solwork/
├── app/                          # Next.js frontend application
│   ├── app/                      # App Router pages
│   │   ├── page.tsx             # Landing page with features
│   │   ├── layout.tsx           # Root layout + wallet provider
│   │   ├── jobs/                # Job browsing & details
│   │   └── dashboard/           # Freelancer & client dashboards
│   ├── components/              # React components
│   │   ├── Header.tsx           # Navigation with wallet button
│   │   ├── logos.tsx            # Solana ecosystem logos
│   │   ├── testimonials.tsx     # User testimonials
│   │   ├── faq.tsx              # FAQ accordion
│   │   └── ui/                  # shadcn/ui components
│   ├── contexts/                # React Context providers
│   │   └── AppKitProvider.tsx   # Reown AppKit wallet setup
│   └── lib/                     # Utilities & mock data
│
├── programs/solwork/            # Anchor smart contract
│   └── src/
│       └── lib.rs               # Solana program (Rust)
│
├── tests/                       # Smart contract tests
│   └── solwork.ts              # TypeScript integration tests
│
├── Anchor.toml                  # Anchor configuration
└── package.json                 # Root dependencies
```

## 🚀 Features

### Smart Contract (Solana Program)

Built with Anchor Framework, the on-chain program provides:

- **`create_job`** - Client posts job with milestones, funds locked in escrow
- **`apply_for_job`** - Freelancer applies and job status moves to InProgress
- **`submit_milestone`** - Freelancer submits completed work for review
- **`approve_milestone`** - Client approves and payment releases automatically
- **`cancel_job`** - Client cancels with automatic refund calculation
- **`rate_freelancer`** - On-chain reputation system (1-5 stars)
- **`initialize_profile`** - Create freelancer profile for stats tracking

**Security Features:**
- ✅ Escrow holds funds until milestone approval
- ✅ Authorization checks (only client can approve, only assigned freelancer can submit)
- ✅ Input validation (ratings 1-5, milestone count 1-10, positive amounts)
- ✅ PDA (Program Derived Address) seeds for deterministic account generation
- ✅ Automatic payment releases with lamport transfers

### Frontend Application

Modern Next.js 16 app with:

- 🎨 **Cyberpunk Theme** - Dark mode with magenta/cyan accents
- 🔗 **Multi-Wallet Support** - Phantom, Solflare, and more via Reown AppKit
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Turbopack** - Lightning-fast dev server
- 🎭 **Animations** - Smooth marquees, gradients, and transitions
- 🧩 **shadcn/ui** - Beautiful, accessible component library

**Pages:**
- Landing page with logo cloud, testimonials, features, FAQ, CTA
- Job browsing with search and category filters
- Job detail pages with milestone breakdown
- Freelancer dashboard (active jobs, proposals, earnings)
- Client dashboard (posted jobs, proposal review, milestone approval)

## 🛠️ Tech Stack

### Blockchain
- **Solana** - Layer 1 blockchain (Devnet)
- **Anchor** 0.32.1 - Solana smart contract framework
- **Rust** - Smart contract language
- **@solana/web3.js** - JavaScript SDK for Solana

### Frontend
- **Next.js** 16.0.5 - React framework with App Router
- **React** 19.2.0 - UI library
- **TypeScript** 5.7.3 - Type-safe development
- **Tailwind CSS** v4 - Utility-first styling
- **Reown AppKit** 1.8.14 - Wallet connection
- **shadcn/ui** - Component library (Badge, Button, Accordion, Avatar, Marquee)
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites

- **Node.js** 18+ and npm/yarn
- **Rust** 1.75+ and Cargo
- **Solana CLI** 1.18+
- **Anchor CLI** 0.32.1
- **Solana Wallet** (Phantom, Solflare, etc.)

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Dominion116/solwork.git
cd solwork
```

2. **Install dependencies:**
```bash
# Root dependencies (Anchor)
npm install

# Frontend dependencies
cd app
npm install
cd ..
```

3. **Configure environment variables:**

Create `app/.env.local`:
```env
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
```

Get your free project ID from [Reown Cloud](https://cloud.reown.com).

4. **Build the smart contract:**
```bash
anchor build
```

5. **Run tests:**
```bash
anchor test
```

6. **Deploy to Devnet:**
```bash
anchor deploy --provider.cluster devnet
```

7. **Start the frontend:**
```bash
cd app
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## 🧪 Testing

### Smart Contract Tests
```bash
# Run all Anchor tests
anchor test

# Run with logs
anchor test -- --nocapture
```

### Frontend Development
```bash
cd app
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🎨 Theme Customization

The app uses a cyberpunk color scheme defined in `app/app/globals.css`:

```css
--background: 240 41.46% 8.04%      /* Dark navy */
--primary: 312.9412 100% 50%        /* Magenta #FF00FF */
--accent: 168 100% 50%              /* Cyan #00FFAA */
```

Fonts:
- **Outfit** - Sans-serif UI font
- **Fira Code** - Monospace code font

## 📝 Smart Contract Details

**Program ID:** `FxDJohpwPhJ5CnALDjFKqgfyxZMt7av5WU7JrLkvnv4h`

### Account Structures

**Job Account:**
- Client & freelancer public keys
- Title, description, total amount
- Status (Open, InProgress, Completed, Cancelled)
- Milestones array with descriptions, amounts, statuses
- Created timestamp

**FreelancerProfile Account:**
- Owner public key
- Total jobs completed
- Total rating points
- Average rating (1-5 stars)

**Milestone:**
- Description
- Amount (lamports)
- Status (Pending, Submitted, Approved)
- Submission & approval timestamps

### Workflow Example

1. **Client creates job:**
   ```typescript
   await program.methods
     .createJob(title, description, amount, milestones)
     .accounts({ client, job, systemProgram })
     .rpc();
   ```

2. **Freelancer applies:**
   ```typescript
   await program.methods
     .applyForJob()
     .accounts({ job, freelancer })
     .rpc();
   ```

3. **Freelancer submits milestone:**
   ```typescript
   await program.methods
     .submitMilestone(milestoneIndex)
     .accounts({ job, freelancer })
     .rpc();
   ```

4. **Client approves & payment released:**
   ```typescript
   await program.methods
     .approveMilestone(milestoneIndex)
     .accounts({ job, client, freelancer })
     .rpc();
   // Payment automatically transferred to freelancer
   ```

5. **Client rates freelancer:**
   ```typescript
   await program.methods
     .rateFreelancer(rating, review)
     .accounts({ job, client, freelancerProfile })
     .rpc();
   ```

## 🔐 Security Considerations

- ✅ All payments held in PDA escrow until approval
- ✅ Only job client can approve milestones
- ✅ Only assigned freelancer can submit milestones
- ✅ Refunds calculated automatically on cancellation
- ✅ Input validation on all parameters
- ✅ No arbitrary code execution in contracts

**Note:** This is a demonstration project on Devnet. Additional audits recommended before mainnet deployment.

## 🗺️ Roadmap

- [x] Smart contract with escrow & milestones
- [x] Wallet connection via Reown AppKit
- [x] Landing page with features
- [x] Job browsing interface
- [ ] Connect frontend to smart contract
- [ ] Dispute resolution mechanism
- [ ] Multi-token support (USDC, USDT)
- [ ] Chat system for client-freelancer communication
- [ ] File upload for deliverables (IPFS/Arweave)
- [ ] Advanced search & filtering
- [ ] Freelancer portfolio pages
- [ ] Mobile app (React Native)
- [ ] Mainnet deployment

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

ISC License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Solana Foundation](https://solana.org) - Blockchain infrastructure
- [Anchor](https://www.anchor-lang.com/) - Smart contract framework
- [Reown (formerly WalletConnect)](https://reown.com) - Wallet connection
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Vercel](https://vercel.com) - Hosting platform

## 📞 Contact

**Project Link:** [https://github.com/Dominion116/solwork](https://github.com/Dominion116/solwork)

---

Built with ❤️ on Solana | Powered by Anchor, Next.js & TypeScript
