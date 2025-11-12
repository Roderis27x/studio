'use client';

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-slate-50 to-white py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
          <Zap className="h-4 w-4" />
          Solución Empresarial Integral
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-foreground leading-tight mb-6 min-h-20 sm:min-h-24 md:min-h-32">
          El ERP Todo en Uno para{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <TypeAnimation
              sequence={[
                'Optimizar su Negocio',
                2000,
                'Automatizar sus Ventas',
                2000,
                'Gestionar sus Finanzas',
                2000,
                'Controlar su Inventario',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          CPT-SOFT integra sus ventas, finanzas, operaciones y recursos humanos en una única plataforma inteligente. Toma decisiones precisas, más rápido.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="#caracteristicas" className="px-8 py-6 text-lg h-auto rounded-xl border-2 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors duration-300 flex items-center justify-center font-medium bg-white">
            Ver Características
          </a>
        </div>

        {/* Image Container */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 md:p-4">
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-xl overflow-hidden">
              <img
                src="/img/imagen.png"
                alt="Dashboard de CPT-SOFT ERP
                "
                className="rounded-lg w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
