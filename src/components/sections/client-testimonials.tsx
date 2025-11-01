
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
  avatarHint?: string;
  avatarDescription?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarUrl, avatarHint, avatarDescription }) => (
  <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardContent className="p-8 text-left flex flex-col flex-grow">
      <blockquote className="text-muted-foreground text-lg mb-6 flex-grow">
        <p>"{quote}"</p>
      </blockquote>
      <figcaption className="flex items-center">
        {avatarUrl && (
          <Image
            className="h-12 w-12 rounded-full object-cover"
            src={avatarUrl}
            alt={avatarDescription || `Avatar of ${author}`}
            width={48}
            height={48}
            data-ai-hint={avatarHint}
          />
        )}
        <div className="ml-4">
          <div className="font-bold text-foreground">{author}</div>
          <div className="text-muted-foreground">{title}</div>
        </div>
      </figcaption>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: "CPT-SOFT ha revolucionado nuestra gestión de inventario. Hemos reducido los costos de mantenimiento en un 20% y nuestro equipo es más eficiente que nunca.",
      author: 'Sarah Johnson',
      title: 'Directora de Operaciones, Innovate Solutions',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
    },
    {
      id: 'testimonial-2',
      quote: "Las herramientas de informes financieros son revolucionarias. Puedo obtener una instantánea clara de nuestras pérdidas y ganancias en segundos, lo que antes llevaba horas de trabajo en hojas de cálculo.",
      author: 'David Chen',
      title: 'Director General, Quantum Dynamics',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
    },
    {
      id: 'testimonial-3',
      quote: "Como fundador sin conocimientos técnicos, la interfaz fácil de usar fue clave. La implementación fue fluida y el equipo de soporte es increíblemente receptivo.",
      author: 'Maria Garcia',
      title: 'Fundadora, Stellar Goods',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Con la Confianza de Empresas en Crecimiento</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Escucha lo que nuestros clientes tienen que decir sobre la transformación de sus operaciones con CPT-SOFT.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              avatarUrl={testimonial.image?.imageUrl}
              avatarHint={testimonial.image?.imageHint}
              avatarDescription={testimonial.image?.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
