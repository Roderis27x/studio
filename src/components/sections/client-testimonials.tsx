import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    company: 'Directora de Operaciones, Innovate Solutions',
    quote: "CPT-SOFT ha revolucionado nuestra gestión de inventario. Hemos reducido los costos de mantenimiento en un 20% y nuestro equipo es más eficiente que nunca.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    id: 'testimonial-2',
    name: 'David Chen',
    company: 'Director General, Quantum Dynamics',
    quote: "Las herramientas de informes financieros son revolucionarias. Puedo obtener una instantánea clara de nuestras pérdidas y ganancias en segundos, lo que antes llevaba horas de trabajo en hojas de cálculo.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
  {
    id: 'testimonial-3',
    name: 'Maria Garcia',
    company: 'Fundadora, Stellar Goods',
    quote: "Como fundador sin conocimientos técnicos, la interfaz fácil de usar fue clave. La implementación fue fluida y el equipo de soporte es increíblemente receptivo.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
];

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
            Con la Confianza de Empresas en Crecimiento
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Escucha lo que nuestros clientes tienen que decir sobre la transformación de sus operaciones con CPT-SOFT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-8 text-left flex flex-col">
                  <blockquote className="text-muted-foreground text-lg mb-6 flex-grow">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                  <figcaption className="flex items-center">
                    {testimonial.image && (
                        <Image
                        src={testimonial.image.imageUrl}
                        alt={testimonial.image.description}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonial.image.imageHint}
                        />
                    )}
                    <div className="ml-4">
                        <div className="font-bold text-foreground">{testimonial.name}</div>
                        <div className="text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
