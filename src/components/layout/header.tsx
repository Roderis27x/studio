'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  BookOpen,
  Building,
  Users,
  CreditCard,
  Headphones,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/logo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <DesktopNav />
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#"
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm"
          >
            Solicitar una Demo
          </a>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 py-4 flex flex-col">
            <a
              href="#"
              className="py-2 text-slate-700 hover:text-primary font-semibold"
            >
              Software
            </a>
            <a
              href="#testimonials"
              className="py-2 text-slate-700 hover:text-primary font-semibold"
            >
              Testimonios
            </a>
            <a
              href="#"
              className="py-2 text-slate-700 hover:text-primary font-semibold"
            >
              Recursos
            </a>
            <a
              href="#contact"
              className="py-2 text-slate-700 hover:text-primary font-semibold"
            >
              Contacto
            </a>
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

const MenuItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <a
    href="#"
    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
  >
    <div className="w-10 h-10 flex-shrink-0 bg-slate-100 rounded-md flex items-center justify-center text-slate-600">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-slate-800">{title}</h4>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  </a>
);

const SoftwareContent = () => (
    <div className="w-full grid grid-cols-3 gap-6 p-4">
      <div>
        <h3 className="mb-2 text-sm font-medium text-slate-400 uppercase">
          ERP
        </h3>
        <MenuItem
          icon={<Building className="w-5 h-5" />}
          title="ERP Core"
          description="Gestión de recursos empresariales."
        />
        <MenuItem
          icon={<FileText className="w-5 h-5" />}
          title="Planilla"
          description="Gestión de nóminas y empleados."
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium text-slate-400 uppercase">
          Financiero
        </h3>
        <MenuItem
          icon={<CreditCard className="w-5 h-5" />}
          title="Préstamos"
          description="Gestión de préstamos y créditos."
        />
        <MenuItem
          icon={<Briefcase className="w-5 h-5" />}
          title="Gestión de cobros"
          description="Seguimiento y gestión de cobros."
        />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium text-slate-400 uppercase">
          Clientes
        </h3>
        <MenuItem
          icon={<Users className="w-5 h-5" />}
          title="CRM"
          description="Relaciones con los clientes."
        />
        <MenuItem
          icon={<Headphones className="w-5 h-5" />}
          title="Help Desk"
          description="Soporte y tickets de ayuda."
        />
      </div>
    </div>
);

const ResourcesContent = () => (
  <div className="w-full p-2">
    <ul className="space-y-1">
      <li className="p-2 rounded-md hover:bg-slate-50">
        <a href="#" className="flex items-center space-x-3">
          <BookOpen className="w-5 h-5 text-slate-500" />
          <span className="text-slate-700 font-medium">Blog</span>
        </a>
      </li>
      <li className="p-2 rounded-md hover:bg-slate-50">
        <a href="#" className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-slate-500" />
          <span className="text-slate-700 font-medium">Casos de Éxito</span>
        </a>
      </li>
      <li className="p-2 rounded-md hover:bg-slate-50">
        <a href="#" className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-slate-500" />
          <span className="text-slate-700 font-medium">Documentación</span>
        </a>
      </li>
    </ul>
  </div>
);

const TABS = [
  {
    id: 1,
    title: 'Software',
    Component: SoftwareContent,
  },
  {
    id: 2,
    title: 'Recursos',
    Component: ResourcesContent,
  },
];


const DesktopNav = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (val: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    handleSetSelected(val);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
        setIsHovering(false);
        handleSetSelected(null);
    }, 50); // Small delay to allow moving to the content
  };

  const handleContentMouseEnter = () => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
  };

  const handleContentMouseLeave = () => {
      handleMouseLeave();
  };

  return (
    <nav className="hidden lg:flex items-center space-x-2 relative" onMouseLeave={handleMouseLeave}>
      {TABS.map((t) => (
        <Tab
          key={t.id}
          handleSetSelected={handleMouseEnter}
          selected={selected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}
      <a
        href="#testimonials"
        className="text-slate-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
      >
        Testimonios
      </a>
      <a
        href="#contact"
        className="text-slate-600 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
      >
        Contacto
      </a>
      
      <AnimatePresence>
        {(selected || isHovering) && (
          <motion.div
            layoutId="nav-dropdown"
            className="absolute left-0 top-[calc(100%_+_10px)] rounded-lg border border-slate-200 bg-white shadow-lg"
            onMouseEnter={handleContentMouseEnter}
            onMouseLeave={handleContentMouseLeave}
            initial={{ opacity: 0, y: -5, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
             <AnimatePresence mode="wait" custom={dir}>
                {selected && (
                     <motion.div
                        key={selected}
                        custom={dir}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {TABS.find((t) => t.id === selected)?.Component()}
                    </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const contentVariants = {
    initial: (dir: 'l' | 'r' | null) => ({
      opacity: 0,
      x: dir === 'l' ? 20 : -20,
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.15, ease: 'easeOut' },
    },
    exit: (dir: 'l' | 'r' | null) => ({
      opacity: 0,
      x: dir === 'l' ? 20 : -20,
      transition: { duration: 0.15, ease: 'easeIn' },
    }),
  };


const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        selected === tab ? 'text-primary' : 'text-slate-600'
      } hover:text-primary`}
    >
      <span>{children}</span>
      <ChevronDown
        className={`transition-transform duration-200 ${
          selected === tab ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
};

export default Header;
