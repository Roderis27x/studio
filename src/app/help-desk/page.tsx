
'use client';

import { ArrowRight, Ticket, LifeBuoy, Bot, Timer, BarChartHorizontal, Smile, Zap, Library } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
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
    <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
            {icon}
        </div>
        <h4 className="text-xl font-bold text-foreground">{title}</h4>
        <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
);

export default function HelpDeskPage() {
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
                                        Soporte al Cliente, Simplificado y Eficiente
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Nuestra plataforma Help Desk organiza, automatiza y resuelve las solicitudes de sus clientes con una eficiencia y empatía sin precedentes.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <DemoButton size="lg">
                                            Ver en Acción
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </DemoButton>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/helpdesk.png"
                                            alt="Interfaz de Help Desk"
                                            width={384}
                                            height={288}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="helpdesk interface ticketing"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="features" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Una Plataforma para Dominar el Soporte</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Todas las herramientas que su equipo necesita para ofrecer un servicio excepcional, en un solo lugar.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <FeatureCard
                                    icon={<Ticket className="w-6 h-6"/>}
                                    title="Gestión Centralizada de Tickets"
                                    description="Registre, clasifique, priorice y asigne todas las solicitudes (vía email, teléfono, chat, web) como tickets únicos para un control total."
                                />
                                <FeatureCard
                                    icon={<LifeBuoy className="w-6 h-6"/>}
                                    title="Ciclo de Vida Completo"
                                    description="Facilita el seguimiento del ciclo de vida de una incidencia, desde su apertura hasta su cierre, asegurando que ninguna solicitud se pierda."
                                />
                                <FeatureCard
                                    icon={<Bot className="w-6 h-6"/>}
                                    title="Automatización Inteligente"
                                    description="Enrute tickets, envíe notificaciones de estado y cierre incidencias para que su equipo se centre en lo importante."
                                />
                                <FeatureCard
                                    icon={<Timer className="w-6 h-6"/>}
                                    title="Gestión de SLAs"
                                    description="Defina y monitoree Acuerdos de Nivel de Servicio (SLAs) para asegurar tiempos de respuesta y resolución, con alertas proactivas."
                                />
                                 <FeatureCard
                                    icon={<BarChartHorizontal className="w-6 h-6"/>}
                                    title="Analítica y Reportes"
                                    description="Identifique tendencias, problemas recurrentes y evalúe el rendimiento del equipo con dashboards y datos accionables en tiempo real."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="benefits-helpdesk" className="py-20 md:py-24 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios que se Sienten</h2>
                                 <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                                    Más que un software, es una estrategia para construir lealtad y eficiencia.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <BenefitItem
                                    icon={<Smile className="w-8 h-8" />}
                                    title="Mejora la Satisfacción del Cliente"
                                    description="Resoluciones más rápidas y una comunicación transparente se traducen en clientes más felices y leales."
                                />
                                <BenefitItem
                                    icon={<Zap className="w-8 h-8" />}
                                    title="Aumenta la Productividad del Equipo"
                                    description="La automatización de tareas repetitivas libera a sus agentes para que se concentren en resolver los problemas complejos."
                                />
                                <BenefitItem
                                    icon={<BarChartHorizontal className="w-8 h-8" />}
                                    title="Decisiones Basadas en Datos"
                                    description="Use los datos para entender los puntos débiles de sus clientes y mejorar sus productos o servicios."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20 bg-card">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Listo para Revolucionar su Soporte?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo nuestro Help Desk puede transformar la experiencia de sus clientes y la eficiencia de su equipo.
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
