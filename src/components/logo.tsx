import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <a href="#" className={cn("flex items-center text-3xl font-bold", className)}>
    <span className="text-slate-800 tracking-tight">CPT</span>
    <span className="text-slate-500 tracking-tight">SOFT</span>
  </a>
);

export default Logo;
