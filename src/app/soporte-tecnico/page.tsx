
'use client';

import { ArrowRight, LifeBuoy, Users, Zap, CheckCircle, Clock, Shield, Target } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 text-center">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const BenefitItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-10 w-10 flex items-center justify-center mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);


export default function SoporteTecnicoPage() {
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
                                       Su Aliado Tecnológico: Soporte Confiable Cuando Más lo Necesita
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Ofrecemos planes de soporte flexibles para nuestros aplicativos y para empresas que necesitan un departamento técnico de confianza.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <DemoButton size="lg">
                                            Conocer los Planes
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </DemoButton>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/comunicacion.png"
                                            alt="Equipo de soporte técnico"
                                            width={384}
                                            height={288}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="technical support team"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="coverage" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Nuestra Cobertura de Soporte</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Dos modalidades de servicio pensadas para adaptarse a sus necesidades específicas.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                <Card className="flex flex-col border-2 border-border hover:border-primary transition-all duration-300 shadow-lg p-4">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                            <Shield className="w-7 h-7 text-primary"/>
                                            Soporte de Aplicativos
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">Para los aplicativos que representamos o desarrollamos, asegurando su óptimo funcionamiento.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-4 text-muted-foreground">
                                            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Resolución de incidencias y dudas.</span></li>
                                            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Asistencia en configuración y uso.</span></li>
                                            <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Acceso a actualizaciones y mejoras.</span></li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="flex flex-col border-2 border-border hover:border-primary transition-all duration-300 shadow-lg p-4">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                            <Users className="w-7 h-7 text-primary"/>
                                            Soporte como Servicio
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">Para empresas que no cuentan con un departamento técnico y necesitan un socio confiable.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-4 text-muted-foreground">
                                             <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Gestión integral de su infraestructura en la nube.</span></li>
                                             <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Mantenimiento preventivo y monitoreo.</span></li>
                                             <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0"/><span>Asesoría estratégica y optimización.</span></li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-background">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios de Nuestro Soporte</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <FeatureCard
                                    icon={<Zap className="h-8 w-8" />}
                                    title="Continuidad Operativa"
                                    description="Minimizamos el tiempo de inactividad y aseguramos que sus sistemas funcionen sin interrupciones, protegiendo su productividad."
                                />
                                <FeatureCard
                                    icon={<Users className="h-8 w-8" />}
                                    title="Acceso a Expertise"
                                    description="Cuente con un equipo de profesionales experimentados sin los costos asociados a la contratación de personal a tiempo completo."
                                />
                                 <FeatureCard
                                    icon={<Target className="h-8 w-8" />}
                                    title="Enfoque en su Negocio"
                                    description="Delegue las complejidades técnicas en nosotros y libere a su equipo para que pueda concentrarse en las actividades que generan valor."
                                 />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20 bg-card">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">¿Necesita un Plan de Soporte a su Medida?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Hable con nuestros especialistas para diseñar un plan que se ajuste a sus requerimientos técnicos y presupuesto.
                            </p>
                            <DemoButton size="lg">
                                Contactar a un Experto
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
