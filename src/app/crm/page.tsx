
'use client';

import { ArrowRight, Users, Target, BarChart3, Mail, Calendar, FileText, ShoppingCart, Locate, Bot, TrendingUp, Sparkles, Handshake } from 'lucide-react';
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

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 text-center">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
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
                                        Unifique su Marketing y Ventas
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        La plataforma CRM que centraliza su marketing, ventas y servicio para construir relaciones que impulsan el crecimiento.
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
                    <section id="benefits-crm" className="py-20 md:py-24 bg-slate-50">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios que Impulsan Resultados</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Nuestro CRM está diseñado para generar un impacto real y medible en su negocio.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitCard
                                    icon={<TrendingUp className="h-8 w-8" />}
                                    title="Aumento de Productividad"
                                    description="Automatice tareas repetitivas y permita que su equipo de ventas se concentre en lo que mejor sabe hacer: vender."
                                />
                                <BenefitCard
                                    icon={<Sparkles className="h-8 w-8" />}
                                    title="Marketing más Inteligente"
                                    description="Segmente su audiencia, personalice sus mensajes y mida el ROI de cada campaña con precisión."
                                />
                                 <BenefitCard
                                    icon={<Handshake className="h-8 w-8" />}
                                    title="Retención y Lealtad"
                                    description="Ofrezca una experiencia de cliente consistente y memorable que convierte a los compradores en embajadores de su marca."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features-crm" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                             <Tabs defaultValue="sfa" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto h-auto">
                                    <TabsTrigger value="sfa" className="py-3 text-base">Ventas (SFA)</TabsTrigger>
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
                                                title="Gestión de Leads y Prospectos"
                                                description="Capture, califique y asigne nuevos prospectos automáticamente para asegurar que ninguna oportunidad se pierda en el camino."
                                            />
                                            <SfaFeature 
                                                icon={<BarChart3 className="w-5 h-5"/>}
                                                title="Gestión de Oportunidades y Pipeline"
                                                description="Visualice todo su embudo de ventas, desde el primer contacto hasta el cierre, con un sistema intuitivo de arrastrar y soltar."
                                            />
                                            <SfaFeature 
                                                icon={<Calendar className="w-5 h-5"/>}
                                                title="Integración de Email y Calendario"
                                                description="Sincronice su correo y calendario para registrar actividades, agendar reuniones y dar seguimiento sin salir del CRM."
                                            />
                                            <SfaFeature 
                                                icon={<FileText className="w-5 h-5"/>}
                                                title="Gestión de Cotizaciones"
                                                description="Cree, envíe y dé seguimiento a cotizaciones profesionales directamente desde la oportunidad, agilizando el ciclo de venta."
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
                                                description="Registre el historial de compras, visitas web e interacciones para segmentar su audiencia con una precisión sin precedentes."
                                             />
                                             <MaFeature
                                                icon={<Bot className="w-6 h-6" />}
                                                title="Campañas"
                                                description="Cree campañas con flujos de trabajo automatizados para guiar a sus prospectos hacia la compra."
                                             />
                                             <MaFeature
                                                icon={<Locate className="w-6 h-6" />}
                                                title="Trazabilidad y Atribución"
                                                description="Rastree el origen de cada lead y su recorrido completo para entender qué canales de marketing realmente funcionan."
                                             />
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </section>
                </FadeIn>
                
                 <FadeIn>
                    <section id="unified-view" className="py-20 md:py-24 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                 <div className="bg-slate-50 p-4 rounded-lg">
                                    <Image
                                        src="https://picsum.photos/seed/crm-dashboard/800/600"
                                        alt="Dashboard de CRM"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-xl"
                                        data-ai-hint="crm dashboard interface"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">La Verdadera Visión 360°</h2>
                                    <p className="text-lg text-muted-foreground">
                                        Nuestro CRM no es solo un software; es su única fuente de verdad. Centralice cada interacción, desde el primer clic en una campaña de marketing hasta el soporte postventa.
                                    </p>
                                    <ul className="space-y-4 text-muted-foreground">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                            <span>Unifique los datos de marketing, ventas y servicio en un solo perfil de cliente.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                            <span>Obtenga informes consolidados que le brinden una visión completa del ciclo de vida del cliente.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0"/>
                                            <span>Mejore la colaboración entre sus equipos y elimine los silos de información.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20 bg-card">
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

// Add CheckCircle icon to the imports
import { CheckCircle } from 'lucide-react';
