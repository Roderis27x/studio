'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [popoverStyle, setPopoverStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});

  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const navLinks = [
    {
      id: 'software',
      name: 'Software',
      content: (
        <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4 w-[490px]">
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
      )
    },
    {
      id: 'recursos',
      name: 'Recursos',
      content: (
        <div className="p-6 grid grid-cols-1 gap-4 w-[280px]">
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
      )
    },
    { id: 'testimonios', name: 'Testimonios', href: '#testimonials' },
    { id: 'contacto', name: 'Contacto', href: '#contact' },
  ];

  const handleMouseEnter = (menuId: string) => {
    const button = buttonRefs.current[menuId];
    const nav = navRef.current;
    if (!button || !nav) return;

    setActiveMenu(menuId);

    const link = navLinks.find(l => l.id === menuId);
    if (!link || !link.content) return;

    // A bit of a hack to get the width and height from the JSX
    const widthMatch = (link.content.props.className.match(/w-\[(\d+)px\]/) || [])[1];
    const width = widthMatch ? parseInt(widthMatch) : 300;
    
    // We can't get height from className, so let's estimate or set a fixed one.
    // This is a limitation compared to the pure JS version.
    // Let's manually define heights for better control.
    const dimensions: Record<string, {width: number; height: number}> = {
      software: { width: 490, height: 280 },
      recursos: { width: 280, height: 180 },
    }
    
    const menuDimensions = dimensions[menuId];

    const buttonRect = button.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    const popoverX = buttonRect.left - navRect.left;
    const arrowX = buttonRect.left + buttonRect.width / 2 - navRect.left;
    
    setPopoverStyle({
      width: menuDimensions.width,
      height: menuDimensions.height,
      x: popoverX,
    });

    setArrowStyle({
      x: arrowX,
    });
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuLinks = navLinks.filter(link => link.content);

  return (
    <header 
      className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav
          ref={navRef}
          className="hidden lg:flex items-center space-x-1 relative"
        >
          {navLinks.map((link) => (
            link.href ? (
              <a
                key={link.id}
                href={link.href}
                className="text-slate-600 hover:text-primary transition-colors px-4 py-2 font-medium rounded-md"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.id}
                ref={el => buttonRefs.current[link.id] = el}
                onMouseEnter={() => handleMouseEnter(link.id)}
                className="flex items-center text-slate-600 hover:text-primary transition-colors focus:outline-none px-4 py-2 font-medium rounded-md"
              >
                <span>{link.name}</span>
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    activeMenu === link.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
            )
          ))}
          
          <AnimatePresence>
            {activeMenu && (
              <motion.div
                initial={{ opacity: 0, rotateX: -15, y: -20 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -15, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute top-full mt-2"
                style={{ perspective: '2000px', left: 0 }}
              >
                <motion.div
                  className="absolute top-0 left-0 bg-white rounded-lg shadow-xl border border-slate-100"
                  animate={popoverStyle}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute -top-1.5 w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100 rounded-tl-sm"
                  style={{ transformOrigin: 'center' }}
                  animate={arrowStyle}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <motion.div 
                  className="relative z-10 overflow-hidden"
                  animate={{
                    width: (popoverStyle as any).width,
                    height: (popoverStyle as any).height
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <AnimatePresence exitBeforeEnter>
                    {menuLinks.map(link => (
                      activeMenu === link.id && (
                        <motion.div
                          key={link.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-0"
                          style={{ x: (popoverStyle as any).x }}
                        >
                          {link.content}
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#"
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm"
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
                {link.content ? (
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
                        {React.cloneElement(link.content, {
                          className: 'p-0 grid-cols-1 !w-full'
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
                className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm"
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
