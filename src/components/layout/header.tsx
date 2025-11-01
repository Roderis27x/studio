'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    {
      name: 'Producto',
      dropdown: [
        { name: 'Características', href: '#features' },
        { name: 'Integraciones', href: '#' },
        { name: 'Seguridad', href: '#' },
        { name: 'Hoja de Ruta', href: '#' },
      ]
    },
    { name: 'Precios', href: '#pricing' },
    { name: 'Testimonios', href: '#testimonials' },
    {
      name: 'Recursos',
      dropdown: [
        { name: 'Blog', href: '#' },
        { name: 'Casos de Éxito', href: '#' },
        { name: 'Documentación', href: '#' },
      ]
    },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.href ? (
                 <a href={link.href} className="text-slate-600 hover:text-primary transition-colors py-2">
                    {link.name}
                 </a>
              ) : (
                <button className="flex items-center text-slate-600 hover:text-primary transition-colors focus:outline-none py-2">
                  <span>{link.name}</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
              )}
              {link.dropdown && (
                 <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-100 hidden group-hover:block z-10">
                    <div className="py-2">
                        {link.dropdown.map((item) => (
                            <a key={item.name} href={item.href} className="block w-full text-left px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                                {item.name}
                            </a>
                        ))}
                    </div>
                 </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
            <a href="#contact" className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm">
                Solicitar una Demo
            </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="py-1">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-slate-200 ml-2">
                        {link.dropdown.map((item) => (
                          <a key={item.name} href={item.href} className="text-slate-600 hover:text-primary" onClick={() => setIsOpen(false)}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.href} className="block py-2 text-slate-700 hover:text-primary font-semibold" onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="border-t border-slate-200 pt-4 mt-4">
                <a href="#contact" className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm">
                    Solicitar una Demo
                </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
