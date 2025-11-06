'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/logo';

const menuContents = {
  software: {
    id: 'software',
    content: (
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-6 w-[520px]">
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">ERP</h4>
                    <p className="text-sm text-slate-500">Gestión de recursos empresariales.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">Préstamos</h4>
                    <p className="text-sm text-slate-500">Gestión de préstamos y créditos.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">Gestión de cobros</h4>
                    <p className="text-sm text-slate-500">Seguimiento y gestión de cobros.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">CRM</h4>
                    <p className="text-sm text-slate-500">Relaciones con los clientes.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">Help Desk</h4>
                    <p className="text-sm text-slate-500">Soporte y tickets de ayuda.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-semibold text-slate-800">Planilla</h4>
                    <p className="text-sm text-slate-500">Gestión de nóminas y empleados.</p>
                </div>
            </div>
        </div>
    ),
  },
  recursos: {
    id: 'recursos',
    content: (
        <div className="p-6 w-[250px]">
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
            className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200"
            onMouseLeave={handleMouseLeave}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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

                            <AnimatePresence>
                                {activeMenu === link.dropdownId && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.97, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.97, y: -10 }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2"
                                        onMouseEnter={handlePopoverEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden">
                                            {menuContents[activeMenu as keyof typeof menuContents].content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

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
