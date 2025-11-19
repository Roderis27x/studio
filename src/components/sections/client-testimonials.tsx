'use client';

import * as React from 'react';
import { User, X } from 'lucide-react';
import Marquee from '@/components/ui/marquee';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  onOpenModal: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, onOpenModal }) => (
  <div 
    onClick={onOpenModal}
    className="min-w-[480px] max-w-lg bg-white rounded-xl p-6 h-auto flex flex-col border border-slate-200 cursor-pointer hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-slate-200 text-foreground flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-medium">{author.charAt(0)}</span>
        </div>
        <div>
          <p className="text-lg font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
    <p className="text-[17px] leading-relaxed line-clamp-4">{quote}</p>
  </div>
);

interface ModalProps {
  isOpen: boolean;
  quote: string;
  author: string;
  title: string;
  onClose: () => void;
}

const TestimonialModal: React.FC<ModalProps> = ({ isOpen, quote, author, title, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-slate-200 text-foreground flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-medium">{author.charAt(0)}</span>
            </div>
            <div>
              <p className="text-2xl font-semibold">{author}</p>
              <p className="text-muted-foreground">{title}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-lg leading-relaxed text-foreground">{quote}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState<{
    quote: string;
    author: string;
    title: string;
  } | null>(null);

  const testimonials = [
    {
      id: 'testimonial-0',
      quote: "Deseamos expresar nuestra satisfacción con el servicio brindado por CPT-SOFT como proveedor de nuestro sistema ERP. Su plataforma nos ha permitido mejorar la organización interna y llevar un control más claro y eficiente de nuestras operaciones diarias. También valoramos el acompañamiento que hemos recibido en el proceso de implementación y uso del sistema. Cuando hemos necesitado apoyo, hemos contado con orientación adecuada para resolver las situaciones que se han presentado.",
      author: 'Sr. Arturo Veiga',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
    {
      id: 'testimonial-1',
      quote: "Trabajamos con nuestro proveedor de sistemas de inventario, facturación y contabilidad porque nos ofrece una plataforma confiable y completa que agiliza nuestros procesos y mantiene nuestra gestión ordenada. Su soporte eficiente y su experiencia nos permiten operar con seguridad y así enfocarnos en el crecimiento de nuestro negocio.",
      author: 'Sr. Efraín Ballesteros',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
    {
      id: 'testimonial-2',
      quote: "El trabajar con CPT-SOFT, ha sido un gran apoyo para nuestra empresa, ya que nos ha ayudado a administrar nuestras solicitudes como mesa de apoyo, en nuestro departamento de tecnología, donde podemos brindar con Help desk, un mejor servicio a nuestros clientes internos, obteniendo diferentes reportes y llevar una trazabilidad, que antes no teníamos.",
      author: 'Sra. Erika Murillo',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
    {
      id: 'testimonial-3',
      quote: "Con el sistema de Gestión de Cobros, hemos logrado automatizar un proceso que anteriormente era manual, en el que no teníamos evidencias sistemáticas de nuestros procesos de cobros realizados a los clientes. Actualmente, gracias a CPT-SOFT, obtenemos reportería, recordatorios y notificaciones automáticas por correos que han sido de gran ayuda para el departamento de cobros.",
      author: 'Sra. Erika Murillo',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
    {
      id: 'testimonial-4',
      quote: "Excelente herramienta para el desarrollo de tu negocio, crecimiento y sostenibilidad.",
      author: 'Sra. Gabriela Hernández',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
    {
      id: 'testimonial-5',
      quote: "Les quiero contar que durante varios años el Equipo de CPT-SOFT nos ha brindado soluciones a los distintos desarrollos tecnológicos. Desde el inicio, demostraron una buena atención, siempre dispuestos a escuchar nuestras necesidades y ofrecer soluciones claras y efectivas. La comunicación y atención a nuestras consultas es fluida y rápida, lo que nos permite avanzar en nuevos proyectos sin contratiempos. Destacamos su capacidad para cumplir los plazos acordados y entregar resultados de alta calidad con ejecución de pruebas y las inducciones necesarias. El equipo mantiene un amplio conocimiento técnico y una actitud proactiva para resolver cualquier duda, lo que nos ha generado confianza durante todo el proceso. Recomendamos ampliamente sus servicios.",
      author: 'Sra. Yamileth Bustamante',
      title: 'Cliente, CPT-SOFT',
      image: null,
    },
  ];

  const TestimonialList = () =>
    testimonials.map((testimonial) => (
      <TestimonialCard
        key={testimonial.id}
        quote={testimonial.quote}
        author={testimonial.author}
        title={testimonial.title}
        onOpenModal={() => setSelectedTestimonial(testimonial)}
      />
    ));

  return (
    <section id="testimonials" className="flex justify-center items-center py-20">
      <div className="h-full w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight px-6 mb-4">
            Con la Confianza de Empresas en Crecimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-6">
            Escuche lo que nuestros clientes tienen que decir sobre la transformación de sus operaciones con CPT-SOFT.
          </p>
        </div>
        <div className={`relative ${selectedTestimonial ? '[&_*]:[animation-play-state:paused]' : ''}`}>
          <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
          <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
          <Marquee pauseOnHover className="[--duration:20s]">
            <TestimonialList />
          </Marquee>
        </div>
      </div>
      
      {selectedTestimonial && (
        <TestimonialModal
          isOpen={true}
          quote={selectedTestimonial.quote}
          author={selectedTestimonial.author}
          title={selectedTestimonial.title}
          onClose={() => setSelectedTestimonial(null)}
        />
      )}
    </section>
  );
};

export default Testimonials;
