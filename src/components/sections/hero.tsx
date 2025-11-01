'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-4">
          El ERP Todo en Uno para <span className="text-primary">Optimizar</span> tu Negocio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          CPT-SOFT integra tus ventas, finanzas, operaciones y recursos humanos en una única plataforma inteligente. Toma decisiones más inteligentes, más rápido.
        </p>
        <div className="flex justify-center items-center">
          <Button size="lg" asChild className="bg-slate-100 hover:bg-slate-200 text-primary">
            <a href="#products">
              Saber Más
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        <div className="mt-16 max-w-5xl mx-auto p-4 bg-card rounded-xl shadow-2xl border border-border">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Maqueta de tu Panel ERP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
