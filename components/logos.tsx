import Image from 'next/image';

// Solana ecosystem logos with company names
export const SolanaLogo = () => (
  <div className="flex items-center gap-3">
    <Image 
      src="https://cryptologos.cc/logos/solana-sol-logo.svg" 
      alt="Solana"
      width={40}
      height={40}
      className="object-contain"
    />
    <span className="text-lg font-semibold text-foreground">Solana</span>
  </div>
);

export const PhantomLogo = () => (
  <div className="flex items-center gap-3">
    <Image 
      src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" 
      alt="Phantom"
      width={40}
      height={40}
      className="object-contain rounded-lg"
      unoptimized
    />
    <span className="text-lg font-semibold text-foreground">Phantom</span>
  </div>
);

export const MetaplexLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">M</span>
    </div>
    <span className="text-lg font-semibold text-foreground">Metaplex</span>
  </div>
);

export const MagicEdenLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">ME</span>
    </div>
    <span className="text-lg font-semibold text-foreground">Magic Eden</span>
  </div>
);

export const SerumLogo = () => (
  <div className="flex items-center gap-3">
    <Image 
      src="https://cryptologos.cc/logos/serum-srm-logo.svg" 
      alt="Serum"
      width={40}
      height={40}
      className="object-contain"
    />
    <span className="text-lg font-semibold text-foreground">Serum</span>
  </div>
);

export const RaydiumLogo = () => (
  <div className="flex items-center gap-3">
    <Image 
      src="https://cryptologos.cc/logos/raydium-ray-logo.svg" 
      alt="Raydium"
      width={40}
      height={40}
      className="object-contain"
    />
    <span className="text-lg font-semibold text-foreground">Raydium</span>
  </div>
);

export const OrcaLogo = () => (
  <div className="flex items-center gap-3">
    <Image 
      src="https://cryptologos.cc/logos/orca-orca-logo.svg" 
      alt="Orca"
      width={40}
      height={40}
      className="object-contain"
    />
    <span className="text-lg font-semibold text-foreground">Orca</span>
  </div>
);

export const StepFinanceLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">$</span>
    </div>
    <span className="text-lg font-semibold text-foreground">Step Finance</span>
  </div>
);
