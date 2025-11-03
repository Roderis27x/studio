'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mb-4 h-24 md:h-36">
          El ERP Todo en Uno para{' '}
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                'Optimizar tu Negocio',
                2000,
                'Automatizar tus Ventas',
                2000,
                'Gestionar tus Finanzas',
                2000,
                'Controlar tu Inventario',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          CPT-SOFT integra tus ventas, finanzas, operaciones y recursos humanos en una única plataforma inteligente. Toma decisiones más inteligentes, más rápido.
        </p>
        <div className="flex justify-center items-center">
          <a href="#" className="flex items-center text-primary font-semibold text-lg group bg-slate-100 hover:bg-slate-200 px-8 py-4 rounded-lg transition-all duration-300">
            Saber Más
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-16 max-w-5xl mx-auto p-4 bg-white rounded-xl shadow-2xl border border-slate-100">
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
            <p className="text-slate-400">Maqueta de tu Panel ERP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
