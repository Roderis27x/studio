'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Briefcase, BookOpen, Building } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Definimos los contenidos de los menús aquí para más claridad
const menuContents = {
  software: {
    id: 'software',
    width: 520,
    height: 300,
    content: (
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 p-6">
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
    width: 250,
    height: 200,
    content: (
        <div className="p-6">
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
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // State for stripe-like menu
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [menuDimensions, setMenuDimensions] = useState<{ [key: string]: { width: number; height: number; x: number; arrowX: number } }>({});
    const navRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    const navLinks = [
        { name: 'Software', dropdownId: 'software' },
        { name: 'Testimonios', href: '#testimonials' },
        { name: 'Recursos', dropdownId: 'recursos' },
        { name: 'Contacto', href: '#contact' },
    ];

    useEffect(() => {
        if (navRef.current) {
            const dimensions: { [key: string]: any } = {};
            const popoverContainer = navRef.current.parentElement;
            if (!popoverContainer) return;
            const popoverLeft = popoverContainer.getBoundingClientRect().x;

            navRef.current.querySelectorAll('button[data-nav]').forEach((el) => {
                const navId = el.getAttribute('data-nav');
                const rect = el.getBoundingClientRect();

                if (navId && menuContents[navId as keyof typeof menuContents]) {
                    dimensions[navId] = {
                        width: menuContents[navId as keyof typeof menuContents].width,
                        height: menuContents[navId as keyof typeof menuContents].height,
                        x: rect.left - popoverLeft,
                        arrowX: rect.left + (rect.width / 2) - popoverLeft,
                    };
                }
            });
            setMenuDimensions(dimensions);
        }
    }, []);

    const handleMouseEnter = (menuId: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setActiveMenu(menuId);
    };

    const handleNavMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 150);
    };
    
    const handlePopoverMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };
    
    const popoverWidth = activeMenu ? menuDimensions[activeMenu]?.width : 0;
    const popoverHeight = activeMenu ? menuDimensions[activeMenu]?.height : 0;
    const popoverX = activeMenu ? (menuDimensions[activeMenu]?.x ?? 0) : 0;
    const arrowX = activeMenu ? (menuDimensions[activeMenu]?.arrowX ?? 0) : 0;

    const currentContent = activeMenu ? menuContents[activeMenu as keyof typeof menuContents]?.content : null;

    return (
        <header 
            className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200"
            onMouseLeave={handleNavMouseLeave}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center" ref={navRef}>
                <a href="#" className="flex items-center text-3xl font-bold">
                    <span className="text-slate-800 tracking-tight">CPT</span>
                    <span className="text-slate-500 tracking-tight">SOFT</span>
                </a>
                
                <nav className="hidden lg:flex items-center space-x-2">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative">
                        {link.href ? (
                            <a href={link.href} className="text-slate-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
                                {link.name}
                            </a>
                        ) : (
                            <button
                                data-nav={link.dropdownId}
                                onMouseEnter={() => handleMouseEnter(link.dropdownId!)}
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
                        <motion.div
                            initial={{ opacity: 0, rotateX: -15, y: -20 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            exit={{ opacity: 0, rotateX: -15, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="absolute top-full left-0 right-0"
                            style={{ perspective: '2000px' }}
                            onMouseEnter={handlePopoverMouseEnter}
                            onMouseLeave={handleNavMouseLeave}
                        >
                            <motion.div
                                className="absolute top-0 left-0 bg-white rounded-lg shadow-xl border border-slate-100"
                                style={{ transformOrigin: '0 0' }}
                                animate={{
                                    transform: `translateX(${popoverX}px) scaleX(${popoverWidth / (menuDimensions['software']?.width || 1)}) scaleY(${popoverHeight / (menuDimensions['software']?.height || 1)})`
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute top-0 left-0 overflow-hidden"
                                style={{ originX: 0, originY: 0 }}
                                animate={{
                                    width: popoverWidth,
                                    height: popoverHeight,
                                    x: popoverX,
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="relative w-full h-full bg-white">
                                    {Object.entries(menuContents).map(([key, { content }]) => (
                                        <motion.div
                                            key={key}
                                            className="absolute inset-0"
                                            animate={{
                                                opacity: activeMenu === key ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {content}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                className="absolute top-[-6px] h-3 w-3 bg-white transform rotate-45 rounded-sm"
                                style={{ willChange: 'transform' }}
                                animate={{
                                    x: arrowX,
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="hidden lg:flex items-center space-x-4">
                    <a href="#" className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm text-sm">
                        Solicitar una Demo
                    </a>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-dark">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-slate-200">
                <div className="container mx-auto px-6 py-4 flex flex-col">
                    {navLinks.map((link) => (
                    <div key={link.name} className="py-1">
                        {link.dropdownId ? (
                        <>
                            <button
                            onClick={() => setOpenDropdown(openDropdown === link.dropdownId ? null : link.dropdownId)}
                            className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                            >
                            <span>{link.name}</span>
                            <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === link.dropdownId ? 'rotate-180' : ''}`} />
                            </button>
                            {openDropdown === link.dropdownId && (
                            <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-slate-200 ml-2">
                                {/* Mobile dropdown content can be mapped here if needed */}
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
                        <a href="#" className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 shadow-sm">
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
