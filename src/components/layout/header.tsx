'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown, BarChart3, Users, Briefcase, DollarSign, Settings, Shield, FileText, CheckCircle, HelpCircle, BookOpen } from 'lucide-react';
import Logo from '@/components/logo';
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link';

const softwareComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
  {
    title: "ERP",
    href: "#",
    description: "Gestión de recursos empresariales.",
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    title: "Préstamos",
    href: "#",
    description: "Administración y seguimiento de préstamos.",
    icon: <DollarSign className="h-4 w-4" />
  },
  {
    title: "Gestión de cobros",
    href: "#",
    description: "Optimiza tu proceso de cobranza.",
    icon: <CheckCircle className="h-4 w-4" />
  },
  {
    title: "Perfil",
    href: "#",
    description: "Administra perfiles de usuario y permisos.",
    icon: <Users className="h-4 w-4" />
  },
  {
    title: "CRM",
    href: "#",
    description: "Gestiona las relaciones con tus clientes.",
    icon: <Users className="h-4 w-4" />
  },
  {
    title: "Help Desk",
    href: "#",
    description: "Soporte y asistencia para tus clientes.",
    icon: <HelpCircle className="h-4 w-4" />
  },
  {
    title: "Reportes",
    href: "#",
    description: "Genera informes y análisis detallados.",
    icon: <BarChart3 className="h-4 w-4" />
  },
  {
    title: "Planilla",
    href: "#",
    description: "Gestión de nóminas y recursos humanos.",
    icon: <FileText className="h-4 w-4" />
  },
]

const resourcesComponents: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
      title: "Blog",
      href: "#",
      description: "Artículos y noticias sobre la industria.",
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      title: "Casos de Éxito",
      href: "#",
      description: "Descubre cómo nuestros clientes han triunfado.",
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      title: "Documentación",
      href: "#",
      description: "Guías y documentación técnica de nuestros productos.",
      icon: <FileText className="h-4 w-4" />
    },
]


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Software</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {softwareComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#testimonials" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Testimonios
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {resourcesComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Contacto
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-sm">
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
            <div className="py-1">
                <button
                    onClick={() => setOpenDropdown(openDropdown === 'Software' ? null : 'Software')}
                    className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                >
                    <span>Software</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === 'Software' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'Software' && (
                    <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-slate-200 ml-2">
                    {softwareComponents.map((item) => (
                        <a key={item.title} href={item.href} className="text-slate-600 hover:text-primary" onClick={() => setIsOpen(false)}>
                        {item.title}
                        </a>
                    ))}
                    </div>
                )}
            </div>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-slate-700 hover:text-primary font-semibold" onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
             <div className="py-1">
                <button
                    onClick={() => setOpenDropdown(openDropdown === 'Recursos' ? null : 'Recursos')}
                    className="w-full flex justify-between items-center py-2 text-slate-700 hover:text-primary font-semibold"
                >
                    <span>Recursos</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${openDropdown === 'Recursos' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'Recursos' && (
                    <div className="pl-4 pt-1 pb-2 flex flex-col space-y-2 border-l-2 border-slate-200 ml-2">
                    {resourcesComponents.map((item) => (
                        <a key={item.title} href={item.href} className="text-slate-600 hover:text-primary" onClick={() => setIsOpen(false)}>
                        {item.title}
                        </a>
                    ))}
                    </div>
                )}
            </div>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-x-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export default Header;
