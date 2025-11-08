
'use client';

import { ArrowRight, Database, FileCog, ShieldCheck, FileDown, SlidersHorizontal, Share2, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:border-primary hover:-translate-y-1 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-lg h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400">{description}</p>
    </div>
);


const ProcessStep = ({ number, icon, title, description }: { number: string, icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
             <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary ring-8 ring-primary/5">
                {icon}
            </div>
            <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white">
                {number}
            </span>
        </div>
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <p className="mt-1 text-muted-foreground">{description}</p>
    </div>
);


const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-4 p-6 bg-card rounded-lg border">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-md h-10 w-10 flex items-center justify-center mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function ReportesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
                         <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter">
                                        Transforme Datos en Decisiones Estratégicas
                                    </h1>
                                    <p className="text-lg md:text-xl text-slate-300">
                                       Nuestra plataforma de Business Intelligence le permite conectar, visualizar y analizar toda su información en un solo lugar. Convierta datos crudos en insights claros y accionables.
                                    </p>
                                    <div className="mt-8">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Ver una Demo
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image
                                        src="https://picsum.photos/seed/bi-visualization/800/600"
                                        alt="Visualización de Business Intelligence"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-2xl"
                                        data-ai-hint="data visualization business intelligence"
                                    />
                                    <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
                                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features" className="py-20 md:py-28 bg-slate-900">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Capacidades de Análisis sin Límites</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                                    Herramientas flexibles y potentes para explorar sus datos desde cualquier ángulo.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <FeatureCard
                                    icon={<Database className="w-6 h-6" />}
                                    title="Conectividad Universal"
                                    description="Conéctese a diversas fuentes de datos como MySQL, Oracle, SQL Server y más para una visión unificada de su negocio."
                                />
                                <FeatureCard
                                    icon={<SlidersHorizontal className="w-6 h-6" />}
                                    title="Diseño Flexible de Reportes"
                                    description="Cree reportes tabulares y de tabla cruzada (cross-tab) con filtros, agrupaciones y ordenamiento para un análisis a su medida."
                                />
                                <FeatureCard
                                    icon={<FileCog className="w-6 h-6" />}
                                    title="Organización y Categorización"
                                    description="Defina categorías de reportes personalizadas para mantener su biblioteca de análisis organizada y accesible para todos los equipos."
                                />
                                <FeatureCard
                                    icon={<ShieldCheck className="w-6 h-6" />}
                                    title="Seguridad y Permisos"
                                    description="Controle quién ve qué con permisos granulares de consulta o edición por reporte, asegurando la confidencialidad de la información."
                                />
                                <FeatureCard
                                    icon={<FileDown className="w-6 h-6" />}
                                    title="Exportación Versátil"
                                    description="Exporte sus reportes e insights a formatos estándar como PDF y Excel para compartir y analizar fuera de la plataforma."
                                />
                                <FeatureCard
                                    icon={<Share2 className="w-6 h-6" />}
                                    title="Comparta sus Hallazgos"
                                    description="Distribuya dashboards interactivos y reportes programados automáticamente para mantener a todo su equipo informado."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="process" className="py-20 md:py-24">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Su Viaje de los Datos a la Decisión en 3 Pasos</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <ProcessStep 
                                    number="1"
                                    icon={<Database className="h-8 w-8"/>}
                                    title="Conecte sus Fuentes"
                                    description="Unifique sus bases de datos, hojas de cálculo y aplicaciones en la nube en una única fuente de verdad."
                                />
                                <ProcessStep 
                                    number="2"
                                    icon={<SlidersHorizontal className="h-8 w-8"/>}
                                    title="Diseñe sus Vistas"
                                    description="Arrastre y suelte para crear dashboards personalizados y reportes que respondan a sus preguntas de negocio."
                                />
                                <ProcessStep 
                                    number="3"
                                    icon={<TrendingUp className="h-8 w-8"/>}
                                    title="Descubra y Actúe"
                                    description="Identifique tendencias, oportunidades y riesgos para tomar decisiones más inteligentes y rápidas."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-card/50">
                         <div className="container mx-auto px-6">
                             <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios que Impulsan el Crecimiento</h2>
                            </div>
                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <BenefitItem 
                                    icon={<CheckCircle className="w-6 h-6" />}
                                    title="Visibilidad Total"
                                    description="Obtenga una visión 360° del rendimiento de su empresa con dashboards que consolidan la información clave."
                                />
                                <BenefitItem 
                                    icon={<Lightbulb className="w-6 h-6" />}
                                    title="Decisiones Informadas"
                                    description="Reemplace la intuición con datos concretos para tomar decisiones estratégicas con confianza."
                                />
                                <BenefitItem 
                                    icon={<TrendingUp className="w-6 h-6" />}
                                    title="Eficiencia Operativa"
                                    description="Ahorre cientos de horas de trabajo manual al automatizar la recopilación y presentación de informes."
                                />
                             </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="contact" className="py-20">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Descubra el Poder Oculto en sus Datos</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                ¿Listo para ver cómo nuestra plataforma de BI puede transformar su negocio? Solicite una demostración personalizada hoy mismo.
                            </p>
                            <Button asChild size="lg">
                                <a href="#">
                                    Solicitar una Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </section>
                </FadeIn>
            </main>
            <Footer />
        </div>
    );
}
