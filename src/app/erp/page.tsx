'use client';

import { ArrowRight, CheckCircle, Scale, PiggyBank, Briefcase, Boxes, Factory, Gem, FileText, HandCoins, Users, BarChart, Banknote, Building } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';


const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="bg-card border-none shadow-none text-center items-center flex flex-col">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
       <div className="bg-primary/10 text-primary p-3 rounded-full mx-auto">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
       <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
      <p className="text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

const ModuleItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className="flex items-center gap-3 bg-white/50 p-4 rounded-lg shadow-sm border border-border transition-transform hover:-translate-y-1 hover:shadow-md backdrop-blur-sm">
        <div className="text-primary">{icon}</div>
        <span className="font-medium text-foreground">{name}</span>
    </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; title: string; avatarUrl?: string; avatarHint?: string; avatarDescription?: string;}> = ({ quote, author, title, avatarUrl, avatarHint, avatarDescription}) => (
    <Card className="flex flex-col h-full overflow-hidden bg-white">
      <CardContent className="p-8 text-left flex flex-col flex-grow">
        <blockquote className="text-muted-foreground text-base md:text-lg mb-6 flex-grow">
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


export default function ERPPage() {
  const modules = [
    { name: 'Contabilidad', icon: <Scale className="w-5 h-5"/> },
    { name: 'Cuentas por Pagar', icon: <Banknote className="w-5 h-5"/> },
    { name: 'Banco (Tesorería)', icon: <PiggyBank className="w-5 h-5"/> },
    { name: 'Caja Menuda', icon: <Briefcase className="w-5 h-5"/> },
    { name: 'Activos Fijos', icon: <Building className="w-5 h-5"/> },
    { name: 'Compras', icon: <HandCoins className="w-5 h-5"/> },
    { name: 'Inventario', icon: <Boxes className="w-5 h-5"/> },
    { name: 'Manufactura', icon: <Factory className="w-5 h-5"/> },
    { name: 'Control de Calidad', icon: <Gem className="w-5 h-5"/> },
    { name: 'Facturación Electrónica', icon: <FileText className="w-5 h-5"/> },
    { name: 'Facturacion', icon: <FileText className="w-5 h-5"/> },
    { name: 'Cuentas por Cobrar - Caja', icon: <HandCoins className="w-5 h-5"/> },
    { name: 'Planilla', icon: <Users className="w-5 h-5"/> },
    { name: 'Reportes y Dashboards', icon: <BarChart className="w-5 h-5"/> },
    { name: 'Carga de datos', icon: <FileText className="w-5 h-5"/> },
    { name: 'Globales', icon: <Building className="w-5 h-5"/> },
    { name: 'Portal', icon: <Briefcase className="w-5 h-5"/> },
    { name: 'Mensajería', icon: <FileText className="w-5 h-5"/> },
    { name: 'Actividades', icon: <CheckCircle className="w-5 h-5"/> },
    { name: 'Sala de Mando', icon: <BarChart className="w-5 h-5"/> },
  ]
  
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: "El ERP de CPT-SOFT ha revolucionado nuestra gestión de inventario. Hemos reducido los costos de mantenimiento en un 20% y nuestro equipo es más eficiente que nunca.",
      author: 'Sarah Johnson',
      title: 'Directora de Operaciones, Innovate Solutions',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-1'),
    },
    {
      id: 'testimonial-2',
      quote: "Las herramientas de informes financieros son revolucionarias. Obtengo una visión clara de nuestras finanzas en segundos, algo que antes nos tomaba horas.",
      author: 'David Chen',
      title: 'Director General, Quantum Dynamics',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-2'),
    },
    {
      id: 'testimonial-3',
      quote: "La implementación fue fluida y el tener una visión completa de pedidos, inventario y facturación ha mejorado drásticamente nuestra promesa de entrega y servicio postventa.",
      author: 'Maria Garcia',
      title: 'Fundadora, Stellar Goods',
      image: PlaceHolderImages.find(p => p.id === 'testimonial-3'),
    },
     {
      id: 'testimonial-4',
      quote: "Gracias al módulo de cumplimiento, estamos seguros de que nuestros procesos contables y fiscales cumplen con todas las regulaciones locales. Nos da una tranquilidad inmensa.",
      author: 'Carlos Rodriguez',
      title: 'CFO, Nexus Enterprises',
      image: {
        id: 'testimonial-4',
        imageUrl: 'https://picsum.photos/seed/cfo/100/100',
        imageHint: 'male cfo',
        description: 'Portrait of a male CFO'
      }
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <FadeIn>
          <section className="bg-white">
            <div className="container mx-auto px-6 py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-tight">
                    ERP
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">La Solución Integral para la Cadena de Valor de su Negocio</h2>
                  <p className="text-lg text-muted-foreground">
                    Integra toda la cadena de valor de su organización hasta la generación de la información financiera, permitiendo a los administradores y analistas tomar decisiones precisas y oportunas.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <DemoButton size="lg">
                        Solicitar una Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </DemoButton>
                     <Button asChild size="lg" variant="outline">
                      <Link href="#modules">
                        Ver Módulos
                      </Link>
                    </Button>
                  </div>
                </div>
                 <div className="p-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/img/erp.png"
                    alt="Dashboard de CPT-SOFT ERP"
                    width={512}
                    height={384}
                    className="rounded-lg max-w-full h-auto"
                    quality={90}
                    priority
                    data-ai-hint="erp dashboard"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section id="benefits" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios Clave para su Empresa</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Nuestro ERP está diseñado para generar un impacto medible en cada área de su organización.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                   <BenefitCard icon={<Scale className="h-8 w-8"/>} title="Optimización de Costos">
                        Al estandarizar procesos y reducir errores, se minimizan los costos operativos y de inventario.
                   </BenefitCard>
                   <BenefitCard icon={<BarChart className="h-8 w-8"/>} title="Agilidad Empresarial">
                        La información en tiempo real y dashboards permiten reaccionar rápidamente a los cambios del mercado.
                   </BenefitCard>
                   <BenefitCard icon={<CheckCircle className="h-8 w-8"/>} title="Mejora Regulatoria">
                        Asegura que los procesos contables y fiscales cumplan con las regulaciones locales e internacionales.
                   </BenefitCard>
                   <BenefitCard icon={<Users className="h-8 w-8"/>} title="Experiencia del Cliente">
                        Una visión 360 mejora la precisión de las entregas y el servicio postventa.
                   </BenefitCard>
                </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="modules" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Módulos Integrados para una Gestión 360°</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Una suite completa de herramientas para gestionar cada aspecto de su operación desde una única plataforma.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto text-left">
                {modules.map(module => (
                    <ModuleItem key={module.name} icon={module.icon} name={module.name} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
           <section id="testimonials-erp" className="py-20 md:py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Lo que dicen nuestros clientes sobre el ERP</h2>
                        <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                           Descubra cómo empresas como la suya han transformado sus operaciones.
                        </p>
                    </div>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <TestimonialCard
                                        quote={testimonial.quote}
                                        author={testimonial.author}
                                        title={testimonial.title}
                                        avatarUrl={testimonial.image?.imageUrl}
                                        avatarHint={testimonial.image?.imageHint}
                                        avatarDescription={testimonial.image?.description}
                                    />
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-8" />
                        <CarouselNext className="mr-8" />
                    </Carousel>
                </div>
           </section>
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
