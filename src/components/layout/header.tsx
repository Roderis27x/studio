'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, Briefcase, Code, BarChart3, Users, DollarSign, Settings, Shield } from 'lucide-react';
import Logo from '@/components/logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // State for the popover
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [popoverStyle, setPopoverStyle] = useState({});
  const [arrowStyle, setArrowStyle] = useState({});
  const [contentStyle, setContentStyle] = useState({});

  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const navLinks = [
    {
      id: 'software',
      name: 'Software',
      content: (
        <div className="p-6 grid grid-cols-2 gap-x-8 gap-y-6 w-[490px]">
           <a href="#" className="group flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full"><BarChart3 className="h-5 w-5 text-blue-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">ERP</h3>
                <p className="text-sm text-slate-500">Gestión empresarial integral</p>
              </div>
            </a>
            <a href="#" className="group flex items-start gap-4">
              <div className="bg-green-100 p-2 rounded-full"><DollarSign className="h-5 w-5 text-green-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Préstamos</h3>
                <p className="text-sm text-slate-500">Administración de créditos</p>
              </div>
            </a>
            <a href="#" className="group flex items-start gap-4">
              <div className="bg-indigo-100 p-2 rounded-full"><Users className="h-5 w-5 text-indigo-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">CRM</h3>
                <p className="text-sm text-slate-500">Relación con clientes</p>
              </div>
            </a>
            <a href="#" className="group flex items-start gap-4">
               <div className="bg-sky-100 p-2 rounded-full"><Briefcase className="h-5 w-5 text-sky-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Planilla</h3>
                <p className="text-sm text-slate-500">Nómina y RRHH</p>
              </div>
            </a>
            <a href="#" className="group flex items-start gap-4">
              <div className="bg-rose-100 p-2 rounded-full"><Shield className="h-5 w-5 text-rose-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Gestión de cobros</h3>
                <p className="text-sm text-slate-500">Sistema de recaudación</p>
              </div>
            </a>
            <a href="#" className="group flex items-start gap-4">
               <div className="bg-purple-100 p-2 rounded-full"><Settings className="h-5 w-5 text-purple-500" /></div>
              <div>
                <h3 className="font-semibold text-slate-900 group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Help Desk</h3>
                <p className="text-sm text-slate-500">Atención al cliente</p>
              </div>
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

  const menuDimensions: Record<string, {width: number; height: number}> = {
      software: { width: 490, height: 280 },
      recursos: { width: 280, height: 180 },
  }

  const handleMouseEnter = (menuId: string) => {
    const button = buttonRefs.current[menuId];
    const nav = navRef.current;
    if (!button || !nav) return;

    setActiveMenu(menuId);

    const menuData = menuDimensions[menuId];
    if (!menuData) return;

    const navRect = nav.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const popoverX = buttonRect.left - navRect.left;
    const arrowX = buttonRect.left + buttonRect.width / 2 - navRect.left;

    setPopoverStyle({
      transform: `translateX(${popoverX}px)`,
      width: menuData.width,
      height: menuData.height,
    });
    
    setArrowStyle({
      transform: `translateX(${arrowX}px) rotate(45deg)`,
    });
    
    setContentStyle({
      width: menuData.width,
      height: menuData.height,
    });
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  
  const menuLinksWithContent = navLinks.filter(link => link.content);

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
                initial={{ opacity: 0, rotateX: -15, y: 10 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: -15, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute top-full mt-2 -translate-x-1/2"
                style={{ perspective: '2000px', left: "50%"}}
              >
                 <motion.div 
                  className="absolute top-0 left-0 bg-white rounded-lg shadow-xl border border-slate-100"
                  style={{transformOrigin: '0 0'}}
                  animate={popoverStyle}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <motion.div
                  className="absolute -top-[5px] w-3 h-3 bg-white rotate-45 border-l border-t border-slate-100 rounded-tl-sm -ml-[6px]"
                  animate={arrowStyle}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                
                <motion.div 
                  className="relative z-10 overflow-hidden"
                  animate={contentStyle}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {menuLinksWithContent.map(link => (
                    <motion.div
                      key={link.id}
                      className="absolute top-0 left-0"
                      animate={{
                        opacity: activeMenu === link.id ? 1 : 0,
                        x: (buttonRefs.current[link.id]?.getBoundingClientRect().left ?? 0) - (buttonRefs.current[activeMenu]?.getBoundingClientRect().left ?? 0)
                      }}
                      transition={{duration: 0.3, ease: 'easeOut'}}
                    >
                      {link.content}
                    </motion.div>
                  ))}
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
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-dark">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
        >
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
                    onClick={() => setMobileMenuOpen(false)}
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
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
