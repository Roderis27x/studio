
'use client';

import { ArrowRight, BrainCircuit, Code, Rocket, Handshake, Brush, Database, Server, Smartphone, Layers } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';

const ProcessStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="relative pl-12 pb-12 last:pb-0">
        <div className="absolute left-0 top-1">
            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center">
                {icon}
            </div>
        </div>
        <div className="absolute left-5 top-12 h-full w-px bg-border"></div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
);

const TechCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-card p-6 rounded-lg border border-border/50 text-center">
        <div className="inline-block p-3 bg-primary/10 text-primary rounded-full mb-4">
            {icon}
        </div>
        <h4 className="font-semibold text-lg mb-1 text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
);

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
    </div>
);


export default function DesarrollosMedidaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">

                <FadeIn>
                    <section className="bg-white py-20 md:py-28">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                                        Soluciones a su Medida: Transformamos sus Ideas en Realidad
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Desde la evaluación del requerimiento hasta la puesta en producción, nuestro equipo lo acompaña para construir la solución de software que su negocio realmente necesita.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Cuéntenos su Proyecto
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/codigo.png"
                                            alt="Equipo de desarrollo trabajando en una solución a medida"
                                            width={384}
                                            height={288}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="software development team"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="process" className="py-20 md:py-24">
                        <div className="container mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="max-w-md">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Nuestro Proceso Colaborativo</h2>
                                    <p className="text-lg text-muted-foreground">
                                        Seguimos un proceso estructurado y transparente para garantizar que el resultado final cumpla y supere sus expectativas.
                                    </p>
                                </div>
                                <div className="relative">
                                    <ProcessStep
                                        icon={<BrainCircuit className="w-5 h-5" />}
                                        title="1. Evaluación y Definición"
                                        description="Analizamos a fondo sus necesidades, objetivos y contexto para definir juntos el alcance y la hoja de ruta del proyecto."
                                    />
                                    <ProcessStep
                                        icon={<Brush className="w-5 h-5" />}
                                        title="2. Diseño y Planificación"
                                        description="Creamos prototipos y diseñamos la arquitectura técnica, eligiendo las herramientas adecuadas para su solución."
                                    />
                                    <ProcessStep
                                        icon={<Code className="w-5 h-5" />}
                                        title="3. Desarrollo e Integración"
                                        description="Nuestros desarrolladores construyen la aplicación siguiendo las mejores prácticas, con revisiones periódicas para asegurar el alineamiento."
                                    />
                                    <ProcessStep
                                        icon={<Rocket className="w-5 h-5" />}
                                        title="4. Puesta en Producción y Soporte"
                                        description="Desplegamos la solución en su entorno y proporcionamos el soporte necesario para una transición exitosa y una operación continua."
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="technology" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Tecnología Flexible para Soluciones Robustas</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                   Dependiendo del tipo de desarrollo, sugerimos y utilizamos las herramientas más adecuadas para garantizar escalabilidad, seguridad y rendimiento.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                <TechCard icon={<Layers className="w-6 h-6" />} title="Aplicaciones Web" description="Desarrollamos aplicaciones web modernas y responsivas." />
                                <TechCard icon={<Smartphone className="w-6 h-6" />} title="Soluciones Móviles" description="Creamos apps nativas e híbridas." />
                                <TechCard icon={<Database className="w-6 h-6" />} title="Bases de Datos" description="Diseñamos y optimizamos bases de datos relacionales." />
                                <TechCard icon={<Server className="w-6 h-6" />} title="APIs e Integraciones" description="Conectamos sus sistemas para un flujo de datos unificado." />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                     <section id="benefits-custom" className="py-20 md:py-24 bg-background">
                        <div className="container mx-auto px-6">
                             <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">¿Por Qué un Desarrollo a Medida?</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitItem
                                    icon={<Handshake className="h-8 w-8" />}
                                    title="Solución 100% Adaptada"
                                    description="Obtenga una herramienta que se ajusta a sus procesos, y no al revés. Maximice la eficiencia y elimine flujos de trabajo innecesarios."
                                />
                                <BenefitItem
                                    icon={<Rocket className="h-8 w-8" />}
                                    title="Ventaja Competitiva"
                                    description="Innove con soluciones únicas que sus competidores no tienen, ofreciendo un valor diferencial a sus clientes y en su operación."
                                />
                                <BenefitItem
                                    icon={<Layers className="h-8 w-8" />}
                                    title="Escalabilidad y Evolución"
                                    description="Invierta en una plataforma que puede crecer y adaptarse junto a su negocio, sin las limitaciones del software estándar."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>


                 <FadeIn>
                    <section id="contact" className="py-20 bg-card">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">¿Tiene una Idea o un Reto?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Hablemos. Nuestro equipo está listo para escuchar sus requerimientos y proponerle una solución tecnológica que impulse su negocio.
                            </p>
                            <DemoButton size="lg">
                                Contactar a un Consultor
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </DemoButton>
                        </div>
                    </section>
                </FadeIn>

            </main>
            <Footer />
        </div>
    );
}
