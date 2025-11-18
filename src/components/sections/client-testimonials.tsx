'use client';

import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, User } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
  avatarHint?: string;
  avatarDescription?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarUrl, avatarHint, avatarDescription }) => (
  <Card className="h-[700px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-slate-200 bg-white">
    <CardContent className="p-8 text-left flex flex-col flex-grow justify-between">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>

      <blockquote className="text-muted-foreground text-lg mb-6 leading-relaxed flex-1 overflow-y-auto">
        <p>"{quote}"</p>
      </blockquote>

      <figcaption className="flex items-center pt-4 border-t border-slate-100">
        {avatarUrl ? (
          <Image
            className="h-12 w-12 rounded-full object-cover"
            src={avatarUrl}
            alt={avatarDescription || `Avatar of ${author}`}
            width={48}
            height={48}
            data-ai-hint={avatarHint}
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User className="h-6 w-6 text-primary" />
          </div>
        )}
        <div className="ml-4">
          <div className="font-bold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{title}</div>
        </div>
      </figcaption>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

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
      quote: "Con el sistema de Gestión de Cobros, hemos logrado automatizar un proceso que anteriormente era manual, en el que no teníamos evidencias sistemáticas de nuestros procesos de cobros realizados a los clientes. Actualmente, gracias a CPT Soft, obtenemos reportería, recordatorios y notificaciones automáticas por correos que han sido de gran ayuda para el departamento de cobros.",
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
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
            Testimonios
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Con la Confianza de Empresas en Crecimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Escuche lo que nuestros clientes tienen que decir sobre la transformación de sus operaciones con CPT-SOFT.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4 min-h-[700px]">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  title={testimonial.title}
                  avatarUrl={testimonial.image?.imageUrl}
                  avatarHint={testimonial.image?.imageHint}
                  avatarDescription={testimonial.image?.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
