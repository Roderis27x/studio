'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-primary pt-32 pb-20 md:pt-48 md:pb-32 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          El ERP Todo en Uno para <span className="text-blue-300">Optimizar</span> tu Negocio
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
          CPT-SOFT integra tus ventas, finanzas, operaciones y recursos humanos en una única plataforma inteligente. Toma decisiones más inteligentes, más rápido.
        </p>
        <div className="flex justify-center items-center">
          <a href="#products" className="flex items-center text-primary font-semibold text-lg group bg-white hover:bg-slate-200 px-8 py-4 rounded-lg transition-all duration-300">
            Saber Más
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-16 max-w-5xl mx-auto p-4 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20">
          <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
            <p className="text-slate-300">Maqueta de tu Panel ERP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
