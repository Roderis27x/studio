import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={cn("flex items-center text-3xl font-bold", className)}>
    <span className="text-slate-800 tracking-tight">CPT</span>
    <span className="text-slate-500 tracking-tight">SOFT</span>
  </Link>
);

export default Logo;
