import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactSectionClient } from './contact-section.client';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative bg-gradient-to-br from-primary to-primary/95 text-white rounded-2xl shadow-2xl p-10 md:p-20 text-center border border-primary/30">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white mb-6 text-sm font-semibold border border-white/20 backdrop-blur-sm">
              <Zap className="h-4 w-4" />
              Transformación Digital
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ¿Listo para Transformar su Negocio?
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Hable con un experto y descubra cómo CPT-SOFT puede optimizar sus operaciones y aumentar la rentabilidad.
            </p>

            <ContactSectionClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
