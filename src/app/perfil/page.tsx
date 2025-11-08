'use client';

import { ArrowRight, ShieldCheck, Search, Sliders, Bell, BarChart, TrendingUp, Filter, CheckSquare } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm transition-all hover:border-primary hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400">{description}</p>
    </div>
);

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default function PerfilPage() {
     useEffect(() => {
        const css = `
        .bg-grid-slate-800 {
            background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px);
            background-size: 2rem 2rem;
            background-color: transparent;
            opacity: 0.1;
        }`;
        const style = document.createElement('style');
        style.innerHTML = css;
        document.head.appendChild(style);
        
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="relative bg-slate-900 text-white py-20 md:py-32">
                        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                    Plataforma de Cumplimiento y Riesgo
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-slate-300">
                                    Identifique, evalúe y mitigue riesgos de manera proactiva. Nuestra solución centraliza la gestión de perfiles de clientes, asegurando el cumplimiento normativo y fortaleciendo sus operaciones.
                                </p>
                                <div className="mt-8">
                                    <Button asChild size="lg">
                                        <Link href="#contact">
                                            Conozca más
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features" className="py-20 md:py-28 bg-slate-900">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white">Pilares de una Gestión de Riesgo Sólida</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-3xl mx-auto">
                                    Herramientas integradas para un control total sobre el ciclo de vida del riesgo del cliente.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <FeatureCard
                                    icon={<Filter className="w-6 h-6" />}
                                    title="Clasificación de Riesgo"
                                    description="Segmente a sus clientes automáticamente según niveles de riesgo configurables, permitiendo un enfoque diferenciado y eficiente."
                                />
                                <FeatureCard
                                    icon={<Search className="w-6 h-6" />}
                                    title="Verificación en Listas"
                                    description="Realice búsquedas automáticas y periódicas en listas de sanciones, PEPs y otras fuentes de vigilancia para garantizar el cumplimiento."
                                />
                                <FeatureCard
                                    icon={<Sliders className="w-6 h-6" />}
                                    title="Motor de Reglas Configurable"
                                    description="Adapte el software a sus políticas internas a través de parámetros y reglas de negocio flexibles, sin necesidad de código."
                                />
                                <FeatureCard
                                    icon={<Bell className="w-6 h-6" />}
                                    title="Alertas y Monitoreo Continuo"
                                    description="Reciba notificaciones en tiempo real sobre transacciones o comportamientos inusuales que requieran su atención inmediata."
                                />
                                <FeatureCard
                                    icon={<BarChart className="w-6 h-6" />}
                                    title="Dashboards e Informes"
                                    description="Genere dashboards interactivos e informes regulatorios listos para presentar, facilitando la auditoría y la toma de decisiones."
                                />
                                <FeatureCard
                                    icon={<ShieldCheck className="w-6 h-6" />}
                                    title="Debida Diligencia Centralizada"
                                    description="Gestione todo el proceso de debida diligencia, desde la recopilación de documentos hasta la aprobación final, en un solo lugar."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24">
                        <div className="container mx-auto px-6">
                             <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Transforme el Riesgo en una Ventaja Estratégica</h2>
                                    <p className="text-lg text-muted-foreground">
                                        Nuestra plataforma no solo protege su negocio, sino que lo impulsa, permitiéndole operar con mayor confianza y eficiencia.
                                    </p>
                                    <ul className="space-y-6">
                                        <BenefitItem 
                                            icon={<TrendingUp className="w-5 h-5" />} 
                                            title="Decisiones Basadas en Datos" 
                                            description="Tome decisiones de negocio más seguras con perfiles de riesgo claros y actualizados."
                                        />
                                        <BenefitItem 
                                            icon={<CheckSquare className="w-5 h-5" />}
                                            title="Cumplimiento Simplificado"
                                            description="Reduzca la carga del cumplimiento normativo con procesos automatizados y auditorías sencillas."
                                        />
                                        <BenefitItem 
                                            icon={<ShieldCheck className="w-5 h-5" />}
                                            title="Reducción de Pérdidas"
                                            description="Identifique y actúe sobre posibles amenazas de fraude o incumplimiento antes de que impacten sus finanzas."
                                        />
                                    </ul>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-lg">
                                    <Image
                                        src="https://picsum.photos/seed/risk-analysis/800/600"
                                        alt="Análisis de riesgo en un dashboard"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-xl"
                                        data-ai-hint="risk analysis dashboard"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="contact" className="py-20 bg-card">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Fortalezca su Marco de Cumplimiento Hoy</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo nuestra plataforma puede adaptarse a sus políticas de riesgo y simplificar sus operaciones.
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
