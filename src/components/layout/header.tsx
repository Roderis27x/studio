'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverWidth, setPopoverWidth] = useState<number | null>(null);

  const refs = useRef<(HTMLElement | null)[]>([]);

  const navLinks = [
    {
      id: 'software',
      name: 'Software',
      menu: (
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">ERP</div>
              <div className="text-sm text-slate-500">Gestión empresarial</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Préstamos</div>
              <div className="text-sm text-slate-500">Administración de créditos</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Gestión de cobros</div>
              <div className="text-sm text-slate-500">Sistema de recaudación</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Perfil</div>
              <div className="text-sm text-slate-500">Gestión de identidad</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">CRM</div>
              <div className="text-sm text-slate-500">Relación con clientes</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Help Desk</div>
              <div className="text-sm text-slate-500">Atención al cliente</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Reports</div>
              <div className="text-sm text-slate-500">Análisis y reportes</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Planilla</div>
              <div className="text-sm text-slate-500">Nómina y RRHH</div>
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'recursos',
      name: 'Recursos',
      menu: (
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Blog</div>
              <div className="text-sm text-slate-500">Artículos y noticias</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Casos de Éxito</div>
              <div className="text-sm text-slate-500">Historias de clientes</div>
            </a>
            <a href="#" className="group">
              <div className="font-semibold text-slate-900 group-hover:text-primary transition-colors">Documentación</div>
              <div className="text-sm text-slate-500">Guías y referencias</div>
            </a>
          </div>
        </div>
      )
    },
    { id: 'testimonios', name: 'Testimonios', href: '#testimonials' },
    { id: 'contacto', name: 'Contacto', href: '#contact' },
  ];

  const focusMenu = (index: number, el: HTMLElement) => {
    setHovering(index);
    const menuElement = refs.current[index];
    if (menuElement) {
        const menuWidth = menuElement.offsetWidth;
        const triggerCenter = el.offsetLeft + el.offsetWidth / 2;
        setPopoverLeft(triggerCenter - menuWidth / 2);
        setPopoverWidth(menuWidth);
    }
  };

  const menuLinks = navLinks.filter(link => link.menu);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-8 relative"
          onMouseLeave={() => setHovering(null)}
        >
          {navLinks.map((link, index) => (
            link.href ? (
              <a
                key={link.id}
                href={link.href}
                className="text-slate-600 hover:text-primary transition-colors py-2 font-medium"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.id}
                onMouseEnter={(event) => focusMenu(menuLinks.indexOf(link), event.currentTarget)}
                className="flex items-center text-slate-600 hover:text-primary transition-colors focus:outline-none py-2 font-medium"
              >
                <span>{link.name}</span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    hovering === menuLinks.indexOf(link) ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )
          ))}

          {/* Popover Container */}
          {typeof hovering === 'number' && (
            <div
              className="absolute top-full mt-2 bg-white rounded-xl shadow-lg border border-slate-100 transition-all duration-300 z-40"
              style={{
                left: `${popoverLeft}px`,
                width: `${popoverWidth}px`,
                pointerEvents: 'auto'
              }}
              onMouseLeave={() => setHovering(null)}
            >
              {/* Arrow */}
              <div
                className="absolute -top-[6px] w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100"
                style={{
                  left: `calc(50% - 6px)`
                }}
              />

              {/* Menu Items */}
              {menuLinks.map((link, index) => (
                <div
                  key={link.id}
                  ref={(el) => {
                    if (el) refs.current[index] = el;
                  }}
                  className={`transition-opacity duration-300 ${
                    hovering === index ? 'opacity-100' : 'opacity-0 invisible'
                  }`}
                  style={{
                    position: hovering !== index ? 'absolute' : 'relative',
                  }}
                >
                  {link.menu}
                </div>
              ))}
            </div>
          )}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#"
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm"
          >
            Solicitar una Demo
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.id} className="py-1">
                {link.menu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.id ? null : link.id)
                      }
                      className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === link.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === link.id && (
                      <div className="pl-4 pt-2 pb-2 border-l-2 border-slate-200 ml-2">
                        {React.cloneElement(link.menu, {
                          // This is a bit of a trick to make the links inside mobile menu look better
                          className: 'p-0 grid-cols-1'
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block py-2 text-slate-700 hover:text-primary font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="border-t border-slate-200 pt-4 mt-4">
              <a
                href="#"
                className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm"
              >
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
