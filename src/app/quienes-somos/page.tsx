
'use client';

import { ArrowRight, BarChart, CheckCircle, Cpu, Eye, Layers, Library, Rocket, SlidersHorizontal, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LevelCard = ({
  icon,
  title,
  apps,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  apps: string[];
  className?: string;
}) => (
  <div
    className={cn(
      'rounded-2xl border p-6 flex flex-col justify-between',
      className
    )}
  >
    <div>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <ul className="space-y-2 text-slate-400">
            {apps.map((app) => (
            <li key={app} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>{app}</span>
            </li>
            ))}
        </ul>
    </div>
  </div>
);

export default function QuienesSomosPage() {
  const operativeApps = ['Aplicaciones Contables Financieras', 'Logística', 'CRM', 'Gestión de Cobros', 'Help Desk', 'Apps Móviles', 'Portales', 'Producción'];
  const tacticalApps = ['Herramientas de Explotación de Datos'];
  const strategicApps = ['Inteligencia de Negocios', 'Paneles de Control'];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <span className="text-primary font-semibold uppercase tracking-wider">
                    Quienes Somos
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                    Más de 20 Años Creando Ventaja Competitiva
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    CPT-SOFT es una empresa de Consultoría de Negocios y tecnología dedicada al desarrollo, distribución e implementación de aplicaciones, con clientes a nivel nacional e internacional. Nuestro principal objetivo es proveer servicios y productos de innovación tecnológica, sustentados en la calidad y el aprendizaje continuo para generar a nuestros clientes una ventaja competitiva sostenible y escalable.
                  </p>
                </div>
                <div>
                  <Image
                    src="https://picsum.photos/seed/tech-innovation/800/600"
                    alt="Innovación Tecnológica Abstracta"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl"
                    data-ai-hint="abstract technology innovation"
                  />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-20 md:py-24 bg-slate-900">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  Nuestro Enfoque en Aplicaciones
                </h2>
                <p className="text-lg text-slate-400 mt-4">
                  Cubrimos todos los niveles de la organización para una transformación digital completa.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <LevelCard
                    icon={<Layers className="h-6 w-6" />}
                    title="Nivel Operativo"
                    apps={operativeApps}
                    className="border-primary/30 bg-primary/5 lg:col-span-2"
                />
                <LevelCard
                    icon={<SlidersHorizontal className="h-6 w-6" />}
                    title="Nivel Táctico"
                    apps={tacticalApps}
                    className="border-accent/30 bg-accent/5"
                />
                <LevelCard
                    icon={<BarChart className="h-6 w-6" />}
                    title="Nivel Estratégico"
                    apps={strategicApps}
                    className="border-green-500/30 bg-green-500/5 lg:col-span-3"
                />
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
            <section className="py-20 md:py-28 relative overflow-hidden bg-white">
                <div className="container mx-auto px-6">
                     <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-8">
                            <div className="bg-card p-8 rounded-2xl border shadow-sm">
                                 <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Rocket className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Misión</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Proveer a nuestros clientes servicios y productos de vanguardia e innovación tecnológica que retornen a sus empresas Crecimiento, Sistematización y Optimización, a partir del continuo aprendizaje y satisfacción de nuestro personal y la modernización de las herramientas e infraestructura de desarrollo.
                                </p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl border shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Visión</h3>
                                </div>
                                <p className="text-muted-foreground">
                                    Ser una empresa líder y rentable en el Desarrollo e implementación de soluciones tecnológicas. Considerando la innovación como base del desarrollo Empresarial. Para así transferirles a nuestros clientes competitividad y mejoramiento continuo.
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block relative">
                            <Image
                                src="https://picsum.photos/seed/business-growth/800/1000"
                                alt="Crecimiento Empresarial"
                                width={800}
                                height={1000}
                                className="rounded-lg shadow-2xl object-cover h-[600px]"
                                data-ai-hint="business growth abstract"
                            />
                        </div>
                     </div>
                </div>
            </section>
        </FadeIn>


        <FadeIn>
            <section id="contact" className="py-20 bg-card">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold text-foreground mb-4">
                        Iniciemos su Transformación Digital
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                        Contáctenos para descubrir cómo nuestra experiencia y tecnología pueden crear una ventaja competitiva para su negocio.
                    </p>
                    <Button asChild size="lg">
                        <Link href="#">
                            Hable con un Experto
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
