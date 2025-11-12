
'use client';

import { ArrowRight, Check, Cloud, Server, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const PlanFeature = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-center gap-3">
        <Check className="w-5 h-5 text-primary flex-shrink-0" />
        <span className="text-muted-foreground">{children}</span>
    </li>
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

export default function AlquilerNubePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="relative bg-white py-20 md:py-32">
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
                                        Hosting en la Nube: Potencia, Seguridad y Escalabilidad
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Ofrecemos una infraestructura de nube robusta y segura, diseñada específicamente para nuestras aplicaciones. Elija entre configuraciones estándar o de alta disponibilidad para garantizar el rendimiento y la continuidad de su negocio.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Contactar a un Especialista
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/hosting.png"
                                            alt="Red de servidores en la nube"
                                            width={384}
                                            height={288}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="cloud infrastructure network"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="plans" className="py-20 md:py-24">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Planes a su Medida</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Ya sea que esté comenzando o necesite una solución de misión crítica, tenemos la configuración perfecta para usted.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                                <Card className="flex flex-col border-2 border-border hover:border-primary transition-all duration-300 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                            <Cloud className="w-7 h-7 text-primary"/>
                                            Configuración Estándar
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">Ideal para pequeñas y medianas empresas que buscan una solución confiable y rentable.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-4">
                                            <PlanFeature>Rendimiento optimizado para nuestras aplicaciones.</PlanFeature>
                                            <PlanFeature>Seguridad robusta con firewall y monitoreo.</PlanFeature>
                                            <PlanFeature>Backups diarios automáticos.</PlanFeature>
                                            <PlanFeature>Escalabilidad flexible según sus necesidades.</PlanFeature>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                         <Button variant="outline" className="w-full">
                                            Más Información
                                        </Button>
                                    </CardFooter>
                                </Card>

                                <Card className="flex flex-col border-2 border-primary ring-4 ring-primary/10 shadow-2xl">
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                            <Server className="w-7 h-7 text-primary"/>
                                            Alta Disponibilidad
                                        </CardTitle>
                                        <CardDescription className="text-base pt-2">Para operaciones de misión crítica que no pueden permitirse tiempos de inactividad.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <ul className="space-y-4">
                                            <PlanFeature>Infraestructura redundante en múltiples zonas.</PlanFeature>
                                            <PlanFeature>Balanceo de carga y failover automático.</PlanFeature>
                                            <PlanFeature>Seguridad avanzada y protección contra DDoS.</PlanFeature>
                                            <PlanFeature>Backups geográficamente distribuidos.</PlanFeature>
                                            <PlanFeature>Soporte prioritario 24/7.</PlanFeature>
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full">
                                            Solicitar Cotización
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios de Nuestra Nube</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Más que un simple hosting, es una solución integral para el éxito de sus aplicaciones.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitCard
                                    icon={<Zap className="h-8 w-8" />}
                                    title="Rendimiento Optimizado"
                                    description="Nuestros servidores están afinados específicamente para nuestras aplicaciones, garantizando la máxima velocidad y eficiencia."
                                />
                                <BenefitCard
                                    icon={<ShieldCheck className="h-8 w-8" />}
                                    title="Seguridad de Nivel Empresarial"
                                    description="Protegemos su información con múltiples capas de seguridad, monitoreo proactivo y cumplimiento de estándares."
                                />
                                 <BenefitCard
                                    icon={<Server className="h-8 w-8" />}
                                    title="Tranquilidad Garantizada"
                                    description="Nos encargamos de la gestión, mantenimiento y backups de la infraestructura para que usted pueda enfocarse en su negocio."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="contact" className="py-20 bg-background">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Diseñemos su Solución Ideal</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Hable con uno de nuestros especialistas en infraestructura para encontrar la configuración perfecta que se adapte a sus necesidades y presupuesto.
                            </p>
                            <Button asChild size="lg">
                                <a href="#">
                                    Contactar a un Especialista
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
