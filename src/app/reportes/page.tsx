
'use client';

import { ArrowRight, Database, FileCog, ShieldCheck, FileDown, SlidersHorizontal, Share2, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-primary hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
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
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="relative bg-gradient-to-br from-white via-slate-50 to-slate-100 text-foreground py-20 md:py-32 overflow-hidden">
                         <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
                        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
                        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                                    <p className="text-primary font-semibold text-sm">Inteligencia de Negocios</p>
                                    </div>
                                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
                                        Transforme Datos en Decisiones Estratégicas
                                    </h1>
                                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                       Nuestra plataforma de Business Intelligence le permite conectar, visualizar y analizar toda su información en un solo lugar. Convierta datos crudos en insights claros y accionables.
                                    </p>
                                    <div className="mt-8 flex gap-4">
                                        <DemoButton size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all">
                                            Solicitar una Demostración
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </DemoButton>
                                        <Button asChild size="lg" variant="outline" className="border-slate-300 hover:bg-slate-200 hover:text-primary">
                                            <Link href="#features">
                                                Conocer Más
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/report.png"
                                            alt="Visualización de Business Intelligence"
                                            width={512}
                                            height={384}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="data visualization business intelligence"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features" className="py-20 md:py-28 bg-slate-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Capacidades de Análisis sin Límites</h2>
                                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
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
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="process" className="py-20 md:py-24 bg-white">
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
                                    title="Diseñe sus consultas"
                                    description="Cree sus reportes que respondan a las necesidades de su negocio."
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
                    <section id="benefits" className="py-20 md:py-24 bg-slate-50">
                         <div className="container mx-auto px-6">
                             <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios que Impulsan el Crecimiento</h2>
                            </div>
                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <BenefitItem 
                                    icon={<CheckCircle className="w-6 h-6" />}
                                    title="Visibilidad Total"
                                    description="Obtenga una visión 360° del rendimiento de su empresa con reportes que consolidan la información clave."
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
                    <section id="contact" className="py-20 bg-slate-50">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Descubra el Poder Oculto en sus Datos</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                ¿Listo para ver cómo nuestra plataforma de reportería puede transformar su negocio? Solicite una demostración personalizada hoy mismo.
                            </p>
                            <DemoButton size="lg">
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
