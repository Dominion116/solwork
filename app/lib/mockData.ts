export interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  status: 'open' | 'in-progress' | 'completed' | 'disputed';
  client: string;
  freelancer?: string;
  category: string;
  skills: string[];
  milestones: Milestone[];
  bidsCount: number;
  createdAt: Date;
  deadline?: Date;
}

export interface Milestone {
  id: string;
  jobId: string;
  number: number;
  title: string;
  description: string;
  amount: number;
  status: 'pending' | 'submitted' | 'approved' | 'paid';
  submissionDetails?: string;
  submittedAt?: Date;
  approvedAt?: Date;
}

export interface Bid {
  id: string;
  jobId: string;
  freelancer: string;
  proposedPrice: number;
  timeline: string;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: Date;
}

export interface Rating {
  id: string;
  jobId: string;
  rater: string;
  rated: string;
  score: number;
  review: string;
  createdAt: Date;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Smart Contract Development for NFT Marketplace',
    description: 'Need an experienced Solana developer to build smart contracts for an NFT marketplace. The project includes creating minting contracts, marketplace logic, and royalty distribution mechanisms.',
    budget: 5000,
    status: 'open',
    client: '7xKX...9mP4',
    category: 'Development',
    skills: ['Solana', 'Rust', 'Smart Contracts', 'Anchor'],
    milestones: [
      {
        id: 'm1',
        jobId: '1',
        number: 1,
        title: 'Contract Architecture & Design',
        description: 'Complete technical specification and contract architecture',
        amount: 1500,
        status: 'pending',
      },
      {
        id: 'm2',
        jobId: '1',
        number: 2,
        title: 'Development & Testing',
        description: 'Implement contracts and complete unit tests',
        amount: 2500,
        status: 'pending',
      },
      {
        id: 'm3',
        jobId: '1',
        number: 3,
        title: 'Deployment & Documentation',
        description: 'Deploy to mainnet and provide documentation',
        amount: 1000,
        status: 'pending',
      },
    ],
    bidsCount: 7,
    createdAt: new Date('2025-11-25'),
    deadline: new Date('2025-12-30'),
  },
  {
    id: '2',
    title: 'Frontend Development for DeFi Dashboard',
    description: 'Looking for a React/Next.js developer to build a beautiful, responsive dashboard for our DeFi protocol. Must have experience with Web3 integration and real-time data.',
    budget: 3500,
    status: 'open',
    client: '3aYN...2kL9',
    category: 'Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Web3', 'TailwindCSS'],
    milestones: [
      {
        id: 'm4',
        jobId: '2',
        number: 1,
        title: 'UI/UX Implementation',
        description: 'Build core dashboard components',
        amount: 1500,
        status: 'pending',
      },
      {
        id: 'm5',
        jobId: '2',
        number: 2,
        title: 'Web3 Integration',
        description: 'Integrate wallet connection and smart contract interactions',
        amount: 2000,
        status: 'pending',
      },
    ],
    bidsCount: 12,
    createdAt: new Date('2025-11-28'),
    deadline: new Date('2025-12-25'),
  },
  {
    id: '3',
    title: 'Content Writer for Crypto Blog',
    description: 'Seeking an experienced crypto content writer to create educational blog posts about Solana ecosystem, DeFi, and blockchain technology. 10 articles needed.',
    budget: 1200,
    status: 'in-progress',
    client: '9pQM...7tR2',
    freelancer: '5hUV...3nK8',
    category: 'Content Writing',
    skills: ['Content Writing', 'Crypto', 'SEO', 'Research'],
    milestones: [
      {
        id: 'm6',
        jobId: '3',
        number: 1,
        title: 'First 5 Articles',
        description: '5 blog posts (1500+ words each)',
        amount: 600,
        status: 'approved',
        approvedAt: new Date('2025-11-20'),
      },
      {
        id: 'm7',
        jobId: '3',
        number: 2,
        title: 'Remaining 5 Articles',
        description: 'Final 5 blog posts',
        amount: 600,
        status: 'submitted',
        submittedAt: new Date('2025-11-29'),
      },
    ],
    bidsCount: 15,
    createdAt: new Date('2025-11-10'),
    deadline: new Date('2025-12-10'),
  },
  {
    id: '4',
    title: 'UI/UX Design for Mobile Wallet App',
    description: 'Design a modern, intuitive mobile wallet interface for Solana. Need complete UI kit, user flows, and prototype. Must understand crypto wallet UX patterns.',
    budget: 2800,
    status: 'open',
    client: '4bRT...6pL3',
    category: 'Design',
    skills: ['UI/UX Design', 'Figma', 'Mobile Design', 'Prototyping'],
    milestones: [
      {
        id: 'm8',
        jobId: '4',
        number: 1,
        title: 'Research & Wireframes',
        description: 'User research and low-fidelity wireframes',
        amount: 800,
        status: 'pending',
      },
      {
        id: 'm9',
        jobId: '4',
        number: 2,
        title: 'High-Fidelity Design',
        description: 'Complete UI design and component library',
        amount: 1500,
        status: 'pending',
      },
      {
        id: 'm10',
        jobId: '4',
        number: 3,
        title: 'Prototype & Handoff',
        description: 'Interactive prototype and developer handoff',
        amount: 500,
        status: 'pending',
      },
    ],
    bidsCount: 9,
    createdAt: new Date('2025-11-27'),
    deadline: new Date('2026-01-15'),
  },
  {
    id: '5',
    title: 'Solana Trading Bot Development',
    description: 'Build an automated trading bot for Solana DEXs. Should include strategy customization, risk management, and real-time monitoring dashboard.',
    budget: 8000,
    status: 'open',
    client: '8mKL...4pQ7',
    category: 'Development',
    skills: ['Solana', 'Python', 'Trading', 'API Integration', 'Web3'],
    milestones: [
      {
        id: 'm11',
        jobId: '5',
        number: 1,
        title: 'Core Bot Logic',
        description: 'Implement trading strategies and execution engine',
        amount: 3500,
        status: 'pending',
      },
      {
        id: 'm12',
        jobId: '5',
        number: 2,
        title: 'Dashboard Development',
        description: 'Build monitoring and control dashboard',
        amount: 2500,
        status: 'pending',
      },
      {
        id: 'm13',
        jobId: '5',
        number: 3,
        title: 'Testing & Optimization',
        description: 'Complete testing and performance optimization',
        amount: 2000,
        status: 'pending',
      },
    ],
    bidsCount: 5,
    createdAt: new Date('2025-11-29'),
    deadline: new Date('2026-02-28'),
  },
  {
    id: '6',
    title: 'Video Editor for YouTube Crypto Channel',
    description: 'Need a skilled video editor for weekly crypto market analysis videos. Should be able to add graphics, animations, and maintain consistent branding.',
    budget: 1500,
    status: 'open',
    client: '2cXY...9mN5',
    category: 'Video Editing',
    skills: ['Video Editing', 'Motion Graphics', 'After Effects', 'Premiere Pro'],
    milestones: [
      {
        id: 'm14',
        jobId: '6',
        number: 1,
        title: 'First 4 Videos',
        description: 'Edit and deliver first month of content',
        amount: 750,
        status: 'pending',
      },
      {
        id: 'm15',
        jobId: '6',
        number: 2,
        title: 'Second 4 Videos',
        description: 'Edit and deliver second month of content',
        amount: 750,
        status: 'pending',
      },
    ],
    bidsCount: 18,
    createdAt: new Date('2025-11-26'),
    deadline: new Date('2026-01-31'),
  },
];

export const mockBids: Bid[] = [
  {
    id: 'b1',
    jobId: '1',
    freelancer: '6vLK...3pM2',
    proposedPrice: 4800,
    timeline: '3 weeks',
    proposal: 'I have 5+ years of Solana development experience and have built multiple NFT marketplaces...',
    status: 'pending',
    createdAt: new Date('2025-11-26'),
  },
  {
    id: 'b2',
    jobId: '2',
    freelancer: '9tQN...7kR4',
    proposedPrice: 3200,
    timeline: '2 weeks',
    proposal: 'Frontend specialist with extensive Web3 integration experience. Portfolio: ...',
    status: 'pending',
    createdAt: new Date('2025-11-28'),
  },
];
