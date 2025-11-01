import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <a href="#" className={cn("flex items-center gap-1 text-2xl font-bold", className)}>
    <span className="text-foreground tracking-tight">CPT</span>
    <span className="text-muted-foreground tracking-tight">SOFT</span>
  </a>
);

export default Logo;