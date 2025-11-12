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
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 backdrop-blur-sm transition-all hover:border-primary hover:-translate-y-1">
        <div className="flex items-center gap-4 mb-4">
            <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200 backdrop-blur-sm hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary/20 text-primary rounded-lg h-12 w-12 flex items-center justify-center mt-1">
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-lg text-foreground">{title}</h4>
                <p className="text-muted-foreground mt-2">{description}</p>
            </div>
        </div>
    </div>
);

export default function PerfilPage() {
     useEffect(() => {
        const css = `
        .bg-grid-gray-200 {
            background-image: linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(to right, #e5e7eb 1px, transparent 1px);
            background-size: 2rem 2rem;
            background-color: transparent;
            opacity: 0.25;
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
                    <section className="relative bg-white text-foreground py-20 md:py-32">
                        <div className="absolute inset-0 bg-grid-gray-200 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto">
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter text-foreground">
                                    Plataforma de Cumplimiento y Riesgo
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
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
                    <section id="features" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Pilares de una Gestión de Riesgo Sólida</h2>
                                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
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
                                    title="Informes"
                                    description="Genere informes listos para presentar, facilitando la auditoría y la toma de decisiones."
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
                    <section id="benefits" className="py-20 md:py-28 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Transforme el Riesgo en una Ventaja Estratégica</h2>
                                <p className="text-lg text-muted-foreground">
                                    Nuestra plataforma no solo protege su negocio, sino que lo impulsa, permitiéndole operar con mayor confianza y eficiencia.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                <BenefitItem 
                                    icon={<TrendingUp className="w-6 h-6" />} 
                                    title="Decisiones Basadas en Datos" 
                                    description="Tome decisiones de negocio más seguras con perfiles de riesgo claros y actualizados."
                                />
                                <BenefitItem 
                                    icon={<CheckSquare className="w-6 h-6" />}
                                    title="Cumplimiento Simplificado"
                                    description="Reduzca la carga del cumplimiento normativo con procesos automatizados y auditorías sencillas."
                                />
                                <BenefitItem 
                                    icon={<ShieldCheck className="w-6 h-6" />}
                                    title="Reducción de Pérdidas"
                                    description="Identifique y actúe sobre posibles amenazas de fraude o incumplimiento antes de que impacten sus finanzas."
                                />
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
