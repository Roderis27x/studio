'use client';

import * as React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Logo from '@/components/logo';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  {
    name: 'Producto',
    dropdown: [
      { name: 'Características', href: '#features' },
      { name: 'Integraciones', href: '#' },
      { name: 'Seguridad', href: '#' },
      { name: 'Hoja de Ruta', href: '#' },
    ],
  },
  { name: 'Precios', href: '#pricing' },
  { name: 'Testimonios', href: '#testimonials' },
  {
    name: 'Recursos',
    dropdown: [
      { name: 'Blog', href: '#' },
      { name: 'Casos de Éxito', href: '#' },
      { name: 'Documentación', href: '#' },
    ],
  },
  { name: 'Contacto', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Logo />
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.href ? (
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      <span>{link.name}</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  {link.dropdown && (
                    <DropdownMenuContent className="w-48">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <a href={item.href}>{item.name}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  )}
                </DropdownMenu>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-8 hidden lg:flex">
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#contact">Solicitar una Demo</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col h-full py-6">
                <div className="px-4 mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col gap-2 px-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.dropdown ? (
                        <Collapsible>
                          <CollapsibleTrigger className="w-full flex justify-between items-center py-2 text-lg font-semibold text-foreground hover:text-primary transition-colors">
                            <span>{link.name}</span>
                            <ChevronDown className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-border ml-2">
                              {link.dropdown.map((item) => (
                                <SheetClose key={item.name} asChild>
                                  <a
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary"
                                  >
                                    {item.name}
                                  </a>
                                </SheetClose>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <SheetClose asChild>
                          <a
                            href={link.href}
                            className="block py-2 text-lg font-semibold text-foreground hover:text-primary"
                          >
                            {link.name}
                          </a>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto px-4">
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    asChild
                  >
                    <a href="#contact">Solicitar una Demo</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}