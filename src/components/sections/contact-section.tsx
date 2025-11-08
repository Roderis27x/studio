
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="bg-primary text-white rounded-lg shadow-xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
            Hable con un experto para ver cómo CPT-SOFT puede adaptarse a tus necesidades específicas.
          </p>
          <Link href="/contacto" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-all duration-300 shadow-md transform hover:scale-105 inline-flex items-center">
            Ponerse en Contacto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
