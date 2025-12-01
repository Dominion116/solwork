import Link from "next/link";
import { Briefcase } from "lucide-react";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-lg bg-[#2d3142] flex items-center justify-center">
        <Briefcase className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-[#e8eaed] tracking-tight">
        solwork
      </span>
    </Link>
  );
};
