// Solana ecosystem logos with company names
export const SolanaLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 397.7 311.7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="solana-a" x1="360.88" x2="141.21" y1="351.46" y2="-69.29" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="solana-b" x1="264.83" x2="45.16" y1="401.6" y2="-19.15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="solana-c" x1="312.55" x2="92.88" y1="376.69" y2="-44.07" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <path d="m64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1z" fill="url(#solana-a)"/>
      <path d="m64.6 3.8c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1z" fill="url(#solana-b)"/>
      <path d="m333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8h-317.4c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1z" fill="url(#solana-c)"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Solana</span>
  </div>
);

export const PhantomLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#AB9FF2"/>
      <path d="M95.43 47.86c-2.42-12.83-12.74-22.41-25.5-24.43-16.43-2.6-30.91 8.12-34.52 24.16-2.31 10.26.83 20.32 7.66 27.47 2.38 2.49 1.79 6.56-1.15 8.34-4.92 2.98-8.23 8.45-8.23 14.6 0 .94.76 1.7 1.7 1.7h67.62c.94 0 1.7-.76 1.7-1.7 0-6.15-3.31-11.62-8.23-14.6-2.94-1.78-3.53-5.85-1.15-8.34 6.83-7.15 9.97-17.21 7.66-27.47z" fill="#ffffff"/>
      <ellipse cx="60" cy="65" rx="5" ry="8" fill="#AB9FF2"/>
      <ellipse cx="76" cy="65" rx="5" ry="8" fill="#AB9FF2"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Phantom</span>
  </div>
);

export const MetaplexLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#000000"/>
      <path d="M30 45L64 30L98 45V85L64 100L30 85V45Z" fill="url(#metaplex-grad)"/>
      <defs>
        <linearGradient id="metaplex-grad" x1="30" y1="30" x2="98" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF00FF"/>
          <stop offset="0.5" stopColor="#00D4FF"/>
          <stop offset="1" stopColor="#FFD700"/>
        </linearGradient>
      </defs>
    </svg>
    <span className="text-lg font-semibold text-foreground">Metaplex</span>
  </div>
);

export const MagicEdenLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#E42575"/>
      <path d="M64 35L45 50V78L64 93L83 78V50L64 35Z" fill="white" opacity="0.9"/>
      <path d="M64 50L55 58V70L64 78L73 70V58L64 50Z" fill="#E42575"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Magic Eden</span>
  </div>
);

export const SerumLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#00D4AA"/>
      <circle cx="64" cy="64" r="35" fill="none" stroke="white" strokeWidth="6"/>
      <path d="M45 64h38M64 45v38" stroke="white" strokeWidth="6" strokeLinecap="round"/>
      <circle cx="64" cy="64" r="5" fill="white"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Serum</span>
  </div>
);

export const RaydiumLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="url(#raydium-grad)"/>
      <defs>
        <linearGradient id="raydium-grad" x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C200FB"/>
          <stop offset="1" stopColor="#3772FF"/>
        </linearGradient>
      </defs>
      <circle cx="64" cy="55" r="15" fill="white"/>
      <path d="M40 85c0-13.25 10.75-24 24-24s24 10.75 24 24" stroke="white" strokeWidth="8" strokeLinecap="round"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Raydium</span>
  </div>
);

export const OrcaLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#FFD15C"/>
      <ellipse cx="64" cy="70" rx="30" ry="35" fill="#1C1C1C"/>
      <ellipse cx="64" cy="55" rx="24" ry="28" fill="white"/>
      <circle cx="58" cy="55" r="5" fill="#1C1C1C"/>
      <circle cx="70" cy="55" r="5" fill="#1C1C1C"/>
      <path d="M50 75c0-8 6-12 14-12s14 4 14 12" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Orca</span>
  </div>
);

export const StepFinanceLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#00FFAA"/>
      <path d="M35 80l18-18 15 15 20-22" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="35" cy="80" r="4" fill="white"/>
      <circle cx="53" cy="62" r="4" fill="white"/>
      <circle cx="68" cy="77" r="4" fill="white"/>
      <circle cx="88" cy="55" r="4" fill="white"/>
    </svg>
    <span className="text-lg font-semibold text-foreground">Step Finance</span>
  </div>
);
