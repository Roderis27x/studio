
'use client';

import React, { useState, useEffect, ReactNode } from 'react';
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
  Shield,
  Database,
  Cloud,
  Code2,
  LifeBuoy,
  LogIn
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useChatbot } from '@/context/ChatbotContext';

// Main Header Component
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginNubLeft, setLoginNubLeft] = useState<number | null>(null);
  const { openChatbot } = useChatbot();

  const computeLoginNubLeftAndOpen = () => {
    const btn = document.getElementById('login-button');
    if (!btn) {
      setIsLoginOpen(true);
      return;
    }
    const parent = btn.parentElement;
    if (!parent) {
      setIsLoginOpen(true);
      return;
    }

    const btnRect = btn.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    // Tailwind w-44 is 11rem; convert rem to px
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize || '16');
    const overlayWidth = 11 * rootFontSize; // 11rem

    const overlayLeft = parentRect.left + parentRect.width - overlayWidth;
    const btnCenter = btnRect.left + btnRect.width / 2;
    const left = btnCenter - overlayLeft;
    setLoginNubLeft(left);
    setIsLoginOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      )}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden lg:flex items-center gap-4">
           <Link
            href="/"
            className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
          >
            Inicio
          </Link>
          <Tabs />
          <Link
            href="/blog"
            className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
          >
            Blog
          </Link>
          <Link
            href="/quienes-somos"
            className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
          >
            Quienes Somos
          </Link>
          <Link
            href="/contacto"
            className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
          >
            Contacto
          </Link>
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative w-fit">
            <button
              id="login-button"
              onClick={() => {
                if (isLoginOpen) return setIsLoginOpen(false);
                computeLoginNubLeftAndOpen();
              }}
              onMouseEnter={() => {
                if (!isLoginOpen) computeLoginNubLeftAndOpen();
              }}
              aria-expanded={isLoginOpen}
              className="text-slate-600 hover:text-primary px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm w-full"
            >
              <LogIn className="w-4 h-4" />
              Iniciar Sesión
              <ChevronDown className={cn("w-4 h-4 transition-transform", isLoginOpen ? "rotate-180" : "")} />
            </button>
            <AnimatePresence>
              {isLoginOpen && (
                <motion.div
                  id="login-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="absolute right-0 top-[calc(100%_+_24px)] bg-gradient-to-b from-white via-white to-slate-50 rounded-lg shadow-lg border border-slate-200 min-w-max w-44"
                  onMouseLeave={() => setIsLoginOpen(false)}
                >
                  <Bridge />
                  <LoginNub buttonId="login-button" overlayId="login-overlay" initialLeft={loginNubLeft} />
                  <a
                    href="https://demo.cpt-soft.com:9443/cptsoft-erp/index.jsp"
                    className="block px-3 py-2 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 hover:text-primary border-b border-slate-100 text-center"
                  >
                    Distribuidora
                  </a>
                  <a
                    href="https://demo.cpt-soft.com:9443/cptsoft-erp-fi/index.jsp"
                    className="block px-3 py-2 hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 hover:text-primary text-center"
                    style={{ borderBottom: 'none' }}
                  >
                    Financiera
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => openChatbot()}
            className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm text-sm"
          >
            Solicitar una Demo
          </button>
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col">
              <Link
                href="/"
                className="py-2 text-slate-700 hover:text-primary font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inicio
              </Link>

              {/* Software Menu Item */}
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'software' ? null : 'software')}
                className="py-2 text-slate-700 hover:text-primary font-semibold flex items-center justify-between"
              >
                <span>Software</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'transition-transform',
                    expandedMenu === 'software' ? 'rotate-180' : ''
                  )}
                />
              </button>
              <AnimatePresence>
                {expandedMenu === 'software' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-50 rounded-lg p-3 my-2 space-y-3"
                  >
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">ERP</h4>
                      <Link
                        href="/erp"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        ERP Core
                      </Link>
                      <Link
                        href="/planilla"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Planilla
                      </Link>
                      <Link
                        href="/reportes"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Reportes
                      </Link>
                    </div>
                    <div className="border-t border-slate-200 pt-2 space-y-2">
                      <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Financiero</h4>
                      <Link
                        href="/prestamos"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Préstamos
                      </Link>
                      <Link
                        href="/gestion-de-cobros"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Gestión de cobros
                      </Link>
                      <Link
                        href="/perfil"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Perfil
                      </Link>
                    </div>
                    <div className="border-t border-slate-200 pt-2 space-y-2">
                      <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Clientes</h4>
                      <Link
                        href="/crm"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        CRM
                      </Link>
                      <Link
                        href="/help-desk"
                        className="block py-1 text-slate-600 hover:text-primary text-sm"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Help Desk
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Servicios Menu Item */}
              <button
                onClick={() => setExpandedMenu(expandedMenu === 'servicios' ? null : 'servicios')}
                className="py-2 text-slate-700 hover:text-primary font-semibold flex items-center justify-between"
              >
                <span>Servicios</span>
                <ChevronDown
                  size={18}
                  className={cn(
                    'transition-transform',
                    expandedMenu === 'servicios' ? 'rotate-180' : ''
                  )}
                />
              </button>
              <AnimatePresence>
                {expandedMenu === 'servicios' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-slate-50 rounded-lg p-3 my-2 space-y-2"
                  >
                    <Link
                      href="/alquiler-de-nube"
                      className="block py-1 text-slate-600 hover:text-primary text-sm"
                      onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                    >
                      Alquiler de Nube
                    </Link>
                    <Link
                      href="/consultoria-implementacion"
                      className="block py-1 text-slate-600 hover:text-primary text-sm"
                      onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                    >
                      Consultoría de Implementación
                    </Link>
                    <Link
                      href="/desarrollos-a-la-medida"
                      className="block py-1 text-slate-600 hover:text-primary text-sm"
                      onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                    >
                      Desarrollos a la Medida
                    </Link>
                    <Link
                      href="/soporte-tecnico"
                      className="block py-1 text-slate-600 hover:text-primary text-sm"
                      onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                    >
                      Soporte Técnico
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/blog"
                className="py-2 text-slate-700 hover:text-primary font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/quienes-somos"
                className="py-2 text-slate-700 hover:text-primary font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Quienes Somos
              </Link>
              <Link
                href="/contacto"
                className="py-2 text-slate-700 hover:text-primary font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link
                href="/carreras"
                className="py-2 text-slate-700 hover:text-primary font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Carreras
              </Link>
              <div className="border-t border-slate-200 pt-4 mt-4 space-y-2">
                <div
                  onClick={() => setExpandedMenu(expandedMenu === 'login' ? null : 'login')}
                  className="py-2 text-slate-700 hover:text-primary font-semibold flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Iniciar Sesión
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'transition-transform',
                      expandedMenu === 'login' ? 'rotate-180' : ''
                    )}
                  />
                </div>
                <AnimatePresence>
                  {expandedMenu === 'login' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-slate-50 rounded-lg p-2 space-y-2"
                    >
                      <a
                        href="https://demo.cpt-soft.com:9443/cptsoft-erp/index.jsp"
                        className="block py-1 px-2 text-slate-600 hover:text-primary text-sm rounded hover:bg-slate-100"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Distribuidora
                      </a>
                      <a
                        href="https://demo.cpt-soft.com:9443/cptsoft-erp-fi/index.jsp"
                        className="block py-1 px-2 text-slate-600 hover:text-primary text-sm rounded hover:bg-slate-100"
                        onClick={() => { setExpandedMenu(null); setIsMobileMenuOpen(false); }}
                      >
                        Financiera
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => { openChatbot(); setIsMobileMenuOpen(false); }}
                  className="bg-primary text-white text-center block w-full px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm"
                >
                  Solicitar una Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Shifting Dropdown Components (replicated from example) ---

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);



  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2"
    >
      {TABS_DATA.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && (
          <Content dir={dir} selected={selected} />
        )}
      </AnimatePresence>
    </div>
  );
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
      className={cn(
          'flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
          selected === tab
            ? 'bg-slate-100 text-slate-900'
            : 'text-slate-600 hover:text-slate-700'
        )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          'h-4 w-4 transition-transform',
          selected === tab ? 'rotate-180' : ''
        )}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number;
  dir: null | 'l' | 'r';
}) => {
  const selectedTab = TABS_DATA.find((t) => t.id === selected);

  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        width: selectedTab?.width,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeInOut',
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] rounded-lg border border-slate-200 bg-gradient-to-b from-white via-white to-slate-50 p-4 shadow-lg"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS_DATA.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');
      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();
      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)',
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl-sm border-l border-t border-slate-200 bg-white shadow-sm"
    />
  );
};

const LoginNub = ({ buttonId, overlayId, initialLeft }: { buttonId: string; overlayId: string; initialLeft?: number | null }) => {
  const [left, setLeft] = useState(initialLeft ?? 0);

  useEffect(() => {
    const moveNub = () => {
      const btn = document.getElementById(buttonId);
      const overlay = document.getElementById(overlayId);
      if (!btn || !overlay) return;
      const btnRect = btn.getBoundingClientRect();
      const overlayRect = overlay.getBoundingClientRect();
      const tabCenter = btnRect.left + btnRect.width / 2 - overlayRect.left;
      setLeft(tabCenter);
    };

    // Move on mount
    if (typeof initialLeft === 'number') {
      setLeft(initialLeft);
    } else {
      moveNub();
    }
    // Update on resize in case layout changes
    window.addEventListener('resize', moveNub);
    return () => window.removeEventListener('resize', moveNub);
  }, [buttonId, overlayId, initialLeft]);

  return (
    <motion.span
      initial={{ left }}
      animate={{ left }}
      transition={{ duration: 0.15, ease: 'easeInOut' }}
      style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)' }}
      className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl-sm border-l border-t border-slate-200 bg-white shadow-sm pointer-events-none"
    />
  );
};

// --- Menu Content Components ---

const MenuItem = ({
  icon,
  title,
  description,
  href = '#',
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}) => (
  <Link
    href={href}
    className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
  >
    <div className="w-9 h-9 flex-shrink-0 bg-slate-100 rounded-md flex items-center justify-center text-primary">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
      <p className="text-xs text-slate-600 leading-snug">{description}</p>
    </div>
  </Link>
);

const SoftwareContent = () => (
  <div className="grid grid-cols-3 gap-8">
    <div className="space-y-2">
      <h3 className="mb-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
        ERP
      </h3>
      <MenuItem
        icon={<Building className="w-4 h-4" />}
        title="ERP Core"
        description="Gestión de recursos empresariales."
        href="/erp"
      />
      <MenuItem
        icon={<FileText className="w-4 h-4" />}
        title="Planilla"
        description="Gestión de nóminas y empleados."
        href="/planilla"
      />
       <MenuItem
        icon={<Database className="w-4 h-4" />}
        title="Reportes"
        description="Inteligencia de negocios y analítica."
        href="/reportes"
      />
    </div>
    <div className="space-y-2">
      <h3 className="mb-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
        Financiero
      </h3>
      <MenuItem
        icon={<CreditCard className="w-4 h-4" />}
        title="Préstamos"
        description="Gestión de préstamos y créditos."
        href="/prestamos"
      />
      <MenuItem
        icon={<Briefcase className="w-4 h-4" />}
        title="Gestión de cobros"
        description="Seguimiento y gestión de cobros."
        href="/gestion-de-cobros"
      />
        <MenuItem
        icon={<Shield className="w-4 h-4" />}
        title="Perfil"
        description="Gestión de Riesgo y Cumplimiento."
        href="/perfil"
      />
    </div>
    <div className="space-y-2">
      <h3 className="mb-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">
        Clientes
      </h3>
      <MenuItem
        icon={<Users className="w-4 h-4" />}
        title="CRM"
        description="Relaciones con los clientes."
        href="/crm"
      />
      <MenuItem
        icon={<Headphones className="w-4 h-4" />}
        title="Help Desk"
        description="Soporte y tickets de ayuda."
        href="/help-desk"
      />
    </div>
  </div>
);

const ServicesContent = () => (
  <div className="grid grid-cols-2 gap-4">
    <MenuItem
      icon={<Cloud className="w-4 h-4" />}
      title="Alquiler de Nube"
      description="Hosting seguro y escalable."
      href="/alquiler-de-nube"
    />
    <MenuItem
      icon={<Users className="w-4 h-4" />}
      title="Consultoría de Implementación"
      description="Expertos para asegurar su éxito."
      href="/consultoria-implementacion"
    />
    <MenuItem
      icon={<Code2 className="w-4 h-4" />}
      title="Desarrollos a la Medida"
      description="Soluciones adaptadas a sus procesos."
      href="/desarrollos-a-la-medida"
    />
    <MenuItem
      icon={<LifeBuoy className="w-4 h-4" />}
      title="Soporte Técnico"
      description="Asistencia experta cuando la necesite."
      href="/soporte-tecnico"
    />
  </div>
);


const TABS_DATA = [
  {
    id: 1,
    title: 'Software',
    Component: SoftwareContent,
    width: '40rem',
  },
  {
    id: 2,
    title: 'Servicios',
    Component: ServicesContent,
    width: '28rem',
  },
];


export default Header;
