'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      {/* Logo para modo claro */}
      <Image
        src="/img/logo_icono_negro.svg"
        alt="CPT-SOFT Logo"
        width={40}
        height={40}
        priority
        className="dark:hidden block"
      />
      {/* Logo para modo oscuro */}
      <Image
        src="/img/logo_icono_blanco.svg"
        alt="CPT-SOFT Logo"
        width={40}
        height={40}
        priority
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
