
'use client';

import { ArrowRight, Zap, Target, BarChart3, History, GitMerge, TrendingDown, Users, Shield } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureHighlight = ({ icon, title, description, imageUrl, imageHint, reverse = false }: { icon: React.ReactNode, title: string, description: string, imageUrl: string, imageHint: string, reverse?: boolean }) => (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`space-y-4 ${reverse ? 'md:col-start-2' : ''}`}>
            <div className="flex items-center gap-3">
                <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-10 w-10 flex items-center justify-center">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            </div>
            <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        <div className="p-4 rounded-2xl flex items-center justify-center group">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={384}
                    height={288}
                    className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                    quality={90}
                    priority
                    data-ai-hint={imageHint}
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
        </div>
    </div>
);

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
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


export default function GestionCobrosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">

                <FadeIn>
                    <section className="relative bg-white py-20 md:py-28">
                         <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-50 to-white"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight tracking-tighter">
                                    Inteligencia en Cobranza
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                                    Automatice, segmente y recupere su cartera de forma más eficiente que nunca. Nuestra plataforma transforma la gestión de cobros en un proceso proactivo e inteligente.
                                </p>
                                <div className="mt-8">
                                    <Button asChild size="lg">
                                        <Link href="#contact">
                                            Descubra cómo
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="features" className="py-20 md:py-24 space-y-20">
                        <div className="container mx-auto px-6">
                            <FeatureHighlight
                                icon={<Zap className="w-5 h-5" />}
                                title="Automatización de Flujos de Cobro"
                                description="Diseñe y ejecute secuencias de contacto programadas (emails, SMS, WhatsApp) que se disparan automáticamente en fechas clave (antes, en y después del vencimiento), asegurando una gestión a tiempo y constante."
                                imageUrl="/img/dinero.png"
                                imageHint="dinero automatización"
                            />
                        </div>
                         <div className="container mx-auto px-6">
                            <FeatureHighlight
                                icon={<Target className="w-5 h-5" />}
                                title="Segmentación Inteligente de Cartera"
                                description="Clasifique a los deudores en grupos (por antigüedad de mora, sucursal, tipo de cliente, etc.) para aplicar la estrategia de contacto más efectiva y menos costosa a cada segmento."
                                imageUrl="/img/cartera.png"
                                imageHint="segmentación cartera"
                                reverse={true}
                            />
                        </div>
                         <div className="container mx-auto px-6">
                             <FeatureHighlight
                                icon={<BarChart3 className="w-5 h-5" />}
                                title="Panel de Control y Analíticas"
                                description="Ofrece una visión en tiempo real del desempeño para la toma de decisiones informada y el ajuste continuo de estrategias."
                                imageUrl="/img/panel.png"
                                imageHint="panel de control analíticas"
                            />
                        </div>
                         <div className="container mx-auto px-6">
                            <FeatureHighlight
                                icon={<History className="w-5 h-5" />}
                                title="Historial de Interacciones (Visión 360°)"
                                description="Mantiene un registro cronológico de cada comunicación, lo cual es vital para el seguimiento y en caso de escalamiento legal, proporcionando un contexto completo de cada caso."
                                imageUrl="/img/historial-de-transacciones.png"
                                imageHint="historial de transacciones"
                                reverse={true}
                            />
                        </div>
                        <div className="container mx-auto px-6">
                            <FeatureHighlight
                                icon={<GitMerge className="w-5 h-5" />}
                                title="Integración con Sistemas (ERP)"
                                description="Se conecta de forma nativa con sistemas contables para obtener datos actualizados de facturas y pagos, evitando errores de duplicidad o contacto por deudas ya saldadas."
                                imageUrl="/img/sistema-informatico.png"
                                imageHint="sistema informático integración"
                            />
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios Directos para su Negocio</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Nuestra solución no solo optimiza procesos, sino que genera un impacto medible en su rentabilidad y relaciones con clientes.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitCard
                                    icon={<TrendingDown className="h-8 w-8" />}
                                    title="Reducción de la Morosidad"
                                    description="La automatización y segmentación permiten una recuperación de cartera más rápida y efectiva, disminuyendo los días de cobro."
                                />
                                <BenefitCard
                                    icon={<Users className="h-8 w-8" />}
                                    title="Mejora la Relación con Clientes"
                                    description="Al contactar a los clientes de manera oportuna y con el tono adecuado, se preserva la relación comercial a largo plazo."
                                />
                                 <BenefitCard
                                    icon={<Shield className="h-8 w-8" />}
                                    title="Decisiones Basadas en Datos"
                                    description="Los dashboards y analíticas le permiten entender qué estrategias funcionan mejor y optimizar sus recursos de cobranza."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="video" className="py-20 md:py-24 bg-gradient-to-b from-white to-slate-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                                    Vea en Acción Cómo Funciona
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Descubra en menos de 5 minutos cómo nuestra plataforma transforma la gestión de cobros y maximiza la recuperación de cartera.
                                </p>
                            </div>
                            
                            <Card className="overflow-hidden border-border/50 shadow-lg">
                                <div className="relative bg-black aspect-video">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/RaUOOQfbzlI"
                                        title="Demo Gestión de Cobros"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </Card>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="contact" className="py-20 bg-white">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Transforme su Proceso de Cobranza Hoy</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo nuestra solución puede adaptarse a las necesidades específicas de su empresa y mejorar sus resultados financieros.
                            </p>
                            <DemoButton size="lg" className="bg-primary hover:bg-primary/90">
                                Solicitar una Demo
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
