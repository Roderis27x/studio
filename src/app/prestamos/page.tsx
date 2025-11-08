'use client';

import { ArrowRight, Landmark, FileCheck, ClipboardSignature, HandCoins, BookUser, Banknote, Scale, Library } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 text-center shadow-sm hover:shadow-lg transition-shadow">
        <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const ProcessStep = ({ icon, title, description, isLast = false }: { icon: React.ReactNode, title: string, description: string, isLast?: boolean }) => (
    <div className="relative flex items-start">
        <div className="flex flex-col items-center mr-6">
            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center">
                {icon}
            </div>
            {!isLast && <div className="w-px h-24 bg-border mt-4"></div>}
        </div>
        <div className="pt-2">
            <h4 className="text-lg font-semibold text-foreground">{title}</h4>
            <p className="text-muted-foreground mt-1">{description}</p>
        </div>
    </div>
);

export default function PrestamosPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="relative bg-gray-900 text-white py-20 md:py-32">
                         <div
                            className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-transparent opacity-80"
                         />
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
                                        Gestión de Préstamos
                                    </h1>
                                    <p className="text-lg text-slate-300 max-w-xl">
                                        Nuestra solución contempla desde la definición de las políticas o parámetros de uso hasta el proceso de aprobación del crédito.
                                    </p>
                                    <div className="flex space-x-4 pt-4">
                                        <Button asChild size="lg" variant="secondary">
                                            <Link href="#contact">
                                                Solicitar una Demo
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="relative h-64 md:h-auto">
                                    <Image
                                        src="https://picsum.photos/seed/finance-growth/800/600"
                                        alt="Gráficos de crecimiento financiero"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-2xl object-cover w-full h-full"
                                        data-ai-hint="finance growth"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="process" className="py-20 md:py-28">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Un Proceso de Crédito Optimizado</h2>
                                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                                    Desde la cotización hasta el desembolso, cada etapa está diseñada para ser eficiente, transparente y segura.
                                </p>
                            </div>
                            <div className="max-w-2xl mx-auto">
                                <ProcessStep
                                    icon={<FileCheck className="w-6 h-6" />}
                                    title="1. Cotización y Solicitud"
                                    description="Genere cotizaciones precisas y permita que los clientes inicien solicitudes de crédito de forma sencilla."
                                />
                                <ProcessStep
                                    icon={<ClipboardSignature className="w-6 h-6" />}
                                    title="2. Aprobación de Crédito"
                                    description="Defina flujos de aprobación multinivel basados en sus políticas, asegurando un análisis de riesgo riguroso."
                                />
                                <ProcessStep
                                    icon={<HandCoins className="w-6 h-6" />}
                                    title="3. Generación del Desembolso"
                                    description="Una vez aprobado, el sistema gestiona la creación del desembolso de manera automática y segura."
                                    isLast={true}
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="integrations" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Interfaces Clave para una Gestión Completa</h2>
                                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                                    Nuestro sistema se integra de forma nativa con herramientas esenciales para una operación sin fisuras.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                <FeatureCard
                                    icon={<BookUser className="h-8 w-8" />}
                                    title="Debida Diligencia"
                                    description="Una interfaz dedicada para el manejo de la debida diligencia, asegurando el cumplimiento normativo."
                                />
                                <FeatureCard
                                    icon={<Scale className="h-8 w-8" />}
                                    title="Contabilidad Integral"
                                    description="Integración completa con el módulo de contabilidad para un registro financiero preciso y en tiempo real."
                                />
                                <FeatureCard
                                    icon={<Banknote className="h-8 w-8" />}
                                    title="Gestión de Cobros"
                                    description="Conexión directa con el sistema de gestión de cobros para automatizar y optimizar la recuperación de cartera."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Optimice su Gestión de Créditos Hoy</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo nuestra solución puede adaptarse a las necesidades específicas de su institución financiera.
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
