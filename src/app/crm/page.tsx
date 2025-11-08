
'use client';

import { ArrowRight, Users, Target, BarChart3, Mail, Calendar, FileText, ShoppingCart, Locate, Bot } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const SfaFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50/50">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-10 w-10 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

const MaFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
     <div className="border border-border/50 rounded-lg p-6 text-center">
        <div className="inline-block bg-primary/10 text-primary p-3 rounded-full mb-4">
           {icon}
        </div>
        <h4 className="font-bold text-lg text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
    </div>
);


export default function CRMPage() {
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
                                        Una Visión 360° de sus Clientes
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Conecte con sus clientes, automatice sus ventas y personalice su marketing desde una única plataforma. Nuestro CRM es el motor que impulsa relaciones duraderas y rentables.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Iniciar Ahora
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                     <Image
                                        src="https://picsum.photos/seed/crm-network/800/600"
                                        alt="Red de conexiones de clientes"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-xl"
                                        data-ai-hint="customer network connections"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features-crm" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                             <Tabs defaultValue="sfa" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
                                    <TabsTrigger value="sfa" className="py-3 text-base">Fuerza de Ventas (SFA)</TabsTrigger>
                                    <TabsTrigger value="ma" className="py-3 text-base">Marketing (MA)</TabsTrigger>
                                </TabsList>
                                <TabsContent value="sfa" className="mt-12">
                                    <Card className="border-none bg-transparent shadow-none">
                                        <CardHeader className="text-center">
                                            <CardTitle className="text-3xl font-extrabold text-foreground">Automatización de la Fuerza de Ventas</CardTitle>
                                            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                                Empodere a su equipo de ventas con herramientas para cerrar más negocios en menos tiempo.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid md:grid-cols-2 gap-8 mt-6">
                                            <SfaFeature 
                                                icon={<Users className="w-5 h-5"/>}
                                                title="Gestión de Leads (Prospectos)"
                                                description="Capture, califique y asigne nuevos prospectos automáticamente para asegurar que ninguna oportunidad se pierda."
                                            />
                                            <SfaFeature 
                                                icon={<BarChart3 className="w-5 h-5"/>}
                                                title="Gestión del Pipeline/Oportunidades"
                                                description="Visualice todo su embudo de ventas en tiempo real, desde el primer contacto hasta el cierre, con un sistema de arrastrar y soltar."
                                            />
                                            <SfaFeature 
                                                icon={<Calendar className="w-5 h-5"/>}
                                                title="Email y Calendario Integrados"
                                                description="Envíe correos, agende reuniones y registre actividades automáticamente en el perfil del cliente, sin salir del CRM."
                                            />
                                            <SfaFeature 
                                                icon={<FileText className="w-5 h-5"/>}
                                                title="Gestión de Cotizaciones"
                                                description="Cree, envíe y dé seguimiento a cotizaciones profesionales directamente desde el sistema, asegurando precios consistentes."
                                            />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                <TabsContent value="ma" className="mt-12">
                                    <Card className="border-none bg-transparent shadow-none">
                                        <CardHeader className="text-center">
                                            <CardTitle className="text-3xl font-extrabold text-foreground">Automatización de Marketing</CardTitle>
                                            <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                                Cree experiencias personalizadas a escala y mida el verdadero retorno de la inversión (ROI) de sus campañas.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                                            <MaFeature
                                                icon={<ShoppingCart className="w-6 h-6" />}
                                                title="Análisis del Comportamiento"
                                                description="Registre automáticamente el historial de compras, visitas a la web y interacciones para segmentar a su audiencia con precisión."
                                             />
                                             <MaFeature
                                                icon={<Bot className="w-6 h-6" />}
                                                title="Diseño y Ejecución de Campañas"
                                                description="Cree campañas de email, SMS y redes sociales con herramientas intuitivas y flujos de trabajo automatizados (nutrición de leads)."
                                             />
                                             <MaFeature
                                                icon={<Locate className="w-6 h-6" />}
                                                title="Trazabilidad y Atribución"
                                                description="Rastree el origen de cada lead y su recorrido completo, desde la primera interacción hasta la venta, para entender qué canales funcionan."
                                             />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20 bg-white">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">Empiece a Construir Mejores Relaciones</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo nuestro CRM puede unificar sus equipos de ventas y marketing para impulsar el crecimiento.
                            </p>
                            <Button asChild size="lg">
                                <Link href="#">
                                    Solicitar una Demo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </section>
                </FadeIn>

            </main>
            <Footer />
        </div>
    );
}
