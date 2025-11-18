'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo se vende el aplicativo?',
    answer: 'Es licenciado por usuario.',
  },
  {
    id: 'faq-2',
    question: '¿El licenciamiento puede ser modular?',
    answer: 'Sí, se pueden implementar los aplicativos por módulos.',
  },
  {
    id: 'faq-3',
    question: '¿Cómo se lleva a cabo la consultoría de implementación?',
    answer: 'Dependiendo de la preferencia del cliente, puede optar de manera presencial, virtual o mixta.',
  },
  {
    id: 'faq-4',
    question: '¿El modelo de licenciamiento es en nube, on-premise o mixto?',
    answer: 'Dependiendo de la necesidad del cliente, se establece la propuesta de valor en el modelo requerido.',
  },
  {
    id: 'faq-5',
    question: '¿En qué tecnologías están basadas las aplicaciones?',
    answer: 'Se soportan en un servidor Apache Tomcat, repositorio de datos MySQL y la herramienta de desarrollo Java. Sin embargo, se puede efectuar el despliegue en WebLogic; ciertas aplicaciones pueden tener como repositorio Oracle.',
  },
  {
    id: 'faq-6',
    question: '¿Qué tipo de sistema operativo pueden utilizar los servidores?',
    answer: 'Preferiblemente en Linux, también en Windows.',
  },
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onToggle: () => void }> = ({
  item,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors text-left"
      >
        <span className="font-semibold text-foreground text-lg">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200"
          >
            <div className="px-6 py-4 bg-slate-50 text-muted-foreground leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
            Preguntas Frecuentes
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Resolvemos Sus Dudas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre CPT-SOFT, nuestros modelos de licenciamiento y servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleOpen(item.id)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg mb-6">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/30"
          >
            Contacta con nosotros
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
