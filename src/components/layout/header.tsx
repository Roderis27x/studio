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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-white border-b'
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
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
    className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-700 transition-colors"
  >
    <div className="w-10 h-10 flex-shrink-0 bg-slate-600/50 rounded-md flex items-center justify-center text-slate-300">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-slate-50">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
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
  <div className="w-64 p-2">
    <ul className="space-y-1">
      <li className="p-2 rounded-md hover:bg-slate-700">
        <a href="#" className="flex items-center space-x-3">
          <BookOpen className="w-5 h-5 text-slate-400" />
          <span className="text-slate-200 font-medium">Blog</span>
        </a>
      </li>
      <li className="p-2 rounded-md hover:bg-slate-700">
        <a href="#" className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-slate-400" />
          <span className="text-slate-200 font-medium">Casos de Éxito</span>
        </a>
      </li>
      <li className="p-2 rounded-md hover:bg-slate-700">
        <a href="#" className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-slate-400" />
          <span className="text-slate-200 font-medium">Documentación</span>
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
    return (
      <nav className="hidden lg:flex relative h-fit gap-2">
        <Tabs />
        <a
          href="#testimonials"
          className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
        >
          Testimonios
        </a>
        <a
          href="#contact"
          className="text-slate-600 hover:text-primary transition-colors px-3 py-1.5 rounded-md text-sm font-medium"
        >
          Contacto
        </a>
      </nav>
    );
};

const Tabs = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | "l" | "r">(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
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
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
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
      className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors ${
        selected === tab
          ? "bg-slate-200 text-slate-800"
          : "text-slate-600"
      }`}
    >
      <span>{children}</span>
      <ChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number | null;
  dir: null | "l" | "r";
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] rounded-lg border border-slate-700 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
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
      const overlayContent = document.getElementById("overlay-content");

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
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-slate-700 bg-slate-900"
    />
  );
};


export default Header;
