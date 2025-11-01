import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah Johnson',
    company: 'CEO, Innovate Inc.',
    quote: "Synergy Solutions Hub transformed our operations. Their ERP is intuitive, powerful, and has been a game-changer for our growth.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
  },
  {
    id: 'testimonial-2',
    name: 'David Chen',
    company: 'CTO, TechFront Solutions',
    quote: "The level of customization and support we received was outstanding. The SynergyBI platform has given us insights we never thought possible.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  },
  {
    id: 'testimonial-3',
    name: 'Maria Garcia',
    company: 'COO, Logistics Pro',
    quote: "Implementing SynergySCM streamlined our entire supply chain. We've seen a 30% increase in efficiency and a significant reduction in costs.",
    image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
  },
];

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear what our clients have to say about their success with Synergy Hub.
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-4">
                  <Card className="overflow-hidden">
                    <CardContent className="p-8 text-center">
                      {testimonial.image && (
                         <Image
                            src={testimonial.image.imageUrl}
                            alt={testimonial.image.description}
                            width={80}
                            height={80}
                            className="rounded-full mx-auto mb-6"
                            data-ai-hint={testimonial.image.imageHint}
                        />
                      )}
                      <p className="text-lg font-medium italic mb-4">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
