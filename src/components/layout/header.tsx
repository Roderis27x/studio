'use client';

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/logo';

const navLinks = [
  { name: 'Products', href: '#products' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resources', href: '#resources' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        <div className="flex flex-1 items-center justify-between">
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full py-6">
                  <div className="px-4 mb-8">
                    <Logo />
                  </div>
                  <nav className="flex flex-col gap-4 px-4">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto px-4">
                    <Button
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => setIsMenuOpen(false)}
                      asChild
                    >
                      <a href="#contact">Request a Demo</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:hidden">
            <Logo />
          </div>

          <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <a href="#contact">Log In</a>
            </Button>
            <Button className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <a href="#contact">Request a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
