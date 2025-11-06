'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Briefcase, BookOpen, Building, Users, CreditCard, Headphones, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/logo';

const MenuItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <a href="#" className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
        <div className="w-10 h-10 flex-shrink-0 bg-slate-100 rounded-md flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-slate-800">{title}</h4>
            <p className="text-sm text-slate-500">{description}</p>
        </div>
    </a>
);


const menuContents = {
  software: {
    id: 'software',
    content: (
        <div className="w-[720px] p-6">
            <div className="grid grid-cols-3 gap-x-6">
                <div className="space-y-1">
                    <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">ERP</h3>
                    <div className="flex flex-col">
                        <MenuItem icon={<Building className="w-5 h-5 text-slate-600"/>} title="ERP Core" description="Gestión de recursos empresariales." />
                        <MenuItem icon={<FileText className="w-5 h-5 text-slate-600"/>} title="Planilla" description="Gestión de nóminas y empleados." />
                    </div>
                </div>
                <div className="space-y-1">
                    <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Financiero</h3>
                     <div className="flex flex-col">
                        <MenuItem icon={<CreditCard className="w-5 h-5 text-slate-600"/>} title="Préstamos" description="Gestión de préstamos y créditos." />
                        <MenuItem icon={<Briefcase className="w-5 h-5 text-slate-600"/>} title="Gestión de cobros" description="Seguimiento y gestión de cobros." />
                    </div>
                </div>
                <div className="space-y-1">
                    <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Clientes</h3>
                     <div className="flex flex-col">
                        <MenuItem icon={<Users className="w-5 h-5 text-slate-600"/>} title="CRM" description="Relaciones con los clientes." />
                        <MenuItem icon={<Headphones className="w-5 h-5 text-slate-600"/>} title="Help Desk" description="Soporte y tickets de ayuda." />
                    </div>
                </div>
            </div>
        </div>
    ),
  },
  recursos: {
    id: 'recursos',
    content: (
        <div className="w-[250px] p-6">
            <ul className="space-y-3">
                <li className="p-2 rounded-md hover:bg-slate-50"><a href="#" className="flex items-center space-x-3"><BookOpen className="w-5 h-5 text-slate-400"/> <span className="text-slate-700">Blog</span></a></li>
                <li className="p-2 rounded-md hover:bg-slate-50"><a href="#" className="flex items-center space-x-3"><BookOpen className="w-5 h-5 text-slate-400"/> <span className="text-slate-700">Casos de Éxito</span></a></li>
                <li className="p-2 rounded-md hover:bg-slate-50"><a href="#" className="flex items-center space-x-3"><BookOpen className="w-5 h-5 text-slate-400"/> <span className="text-slate-700">Documentación</span></a></li>
            </ul>
        </div>
    ),
  },
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); 
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Software', dropdownId: 'software' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Recursos', dropdownId: 'recursos' },
        { name: 'Contacto', href: '#contact' },
    ];
    
    const handleMouseEnter = (menuId: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveMenu(menuId);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };

    const handlePopoverEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };
    
    return (
        <header 
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'}`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center" onMouseLeave={handleMouseLeave}>
                <Logo />
                
                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <div 
                            key={link.name} 
                            className="relative"
                            onMouseEnter={() => link.dropdownId && handleMouseEnter(link.dropdownId)}
                        >
                            {link.href ? (
                                <a href={link.href} className="text-slate-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                    {link.name}
                                </a>
                            ) : (
                                <button
                                    className="flex items-center text-slate-600 hover:text-primary transition-colors focus:outline-none px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMenu === link.dropdownId ? 'rotate-180' : ''}`} />
                                </button>
                            )}
                        </div>
                    ))}
                </nav>

                <AnimatePresence>
                    {activeMenu && (
                        <div
                            className="absolute top-full left-0 w-full flex justify-center"
                            onMouseEnter={handlePopoverEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                pointerEvents: activeMenu ? 'auto' : 'none',
                            }}
                        >
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.98, y: -5 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -5 }}
                                transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                                className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden mt-2"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeMenu}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        {menuContents[activeMenu as keyof typeof menuContents].content}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <div className="hidden lg:flex items-center space-x-4">
                    <a href="#" className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm">
                        Solicitar una Demo
                    </a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-dark">
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white border-t border-slate-200">
                    <div className="container mx-auto px-6 py-4 flex flex-col">
                        {navLinks.map((link) => (
                        <div key={link.name} className="py-1">
                            {link.dropdownId ? (
                            <>
                                <button
                                onClick={() => setOpenMobileDropdown(openMobileDropdown === link.dropdownId ? null : link.dropdownId)}
                                className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                                >
                                <span>{link.name}</span>
                                <ChevronDown className={`h-5 w-5 transition-transform ${openMobileDropdown === link.dropdownId ? 'rotate-180' : ''}`} />
                                </button>
                                {openMobileDropdown === link.dropdownId && (
                                <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-slate-200 ml-2">
                                     {/* This can be mapped to simple links for mobile */}
                                     <a href="#" className="text-slate-600 py-1">ERP</a>
                                     <a href="#" className="text-slate-600 py-1">Préstamos</a>
                                     <a href="#" className="text-slate-600 py-1">CRM</a>
                                </div>
                                )}
                            </>
                            ) : (
                            <a href={link.href} className="block py-2 text-slate-700 hover:text-primary font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                                {link.name}
                            </a>
                            )}
                        </div>
                        ))}
                        <div className="border-t border-slate-200 pt-4 mt-4">
                            <a href="#" className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm">
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
