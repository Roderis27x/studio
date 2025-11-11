
'use client';

import { ArrowRight, CheckCircle, Landmark, Calendar, FileText, Banknote, ShieldCheck, TrendingUp, Users, Wallet } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 text-center">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
    </div>
);

const FeatureListItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <li className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg h-10 w-10 flex items-center justify-center mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-foreground">{title}</h4>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    </li>
);

export default function PlanillaPage() {
    const payrollTypes = ["Regular", "Intermedia o extraordinaria", "Vacaciones", "XIII Mes", "Liquidaciones"];
    const complianceItems = ["SIPE", "Anexo 03", "Fondo de Cesantía"];

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
                                        Gestión de Planilla Precisa, Confiable y Adaptada a Panamá
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Nuestra solución automatiza el ciclo de vida de la planilla, desde el cálculo hasta el pago, asegurando el cumplimiento con las regulaciones locales y optimizando sus procesos de RR.HH.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Solicitar Demo
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-lg">
                                    <Image
                                        src="/img/planilla.png"
                                        alt="Gestión de Planilla"
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-xl"
                                        data-ai-hint="payroll management interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="features" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Funcionalidades para una Gestión Integral</h2>
                                    <ul className="space-y-8">
                                        <FeatureListItem
                                            icon={<Users className="w-5 h-5" />}
                                            title="Información del Colaborador Centralizada"
                                            description="Mantenga un registro completo y actualizado de cada colaborador, incluyendo datos personales, historial salarial y acumulados."
                                        />
                                        <FeatureListItem
                                            icon={<Calendar className="w-5 h-5" />}
                                            title="Manejo de Múltiples Tipos de Planilla"
                                            description="Gestione con flexibilidad planillas regulares, extraordinarias, vacaciones, XIII mes y liquidaciones, todo desde una misma plataforma."
                                        />
                                        <FeatureListItem
                                            icon={<FileText className="w-5 h-5" />}
                                            title="Cumplimiento Regulatorio Panameño"
                                            description="Genere automáticamente reportes clave como SIPE, Anexo 03 y gestione el Fondo de Cesantía para un cumplimiento sin esfuerzo."
                                        />
                                         <FeatureListItem
                                            icon={<Landmark className="w-5 h-5" />}
                                            title="Interfaz Contable y Acreedores"
                                            description="Integre la planilla con su ERP y gestione el pago a acreedores con control total sobre los saldos."
                                        />
                                    </ul>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                     <div className="p-8 bg-background rounded-lg border">
                                        <h4 className="font-bold text-lg text-foreground mb-4">Tipos de Planilla Soportados</h4>
                                        <ul className="space-y-2">
                                            {payrollTypes.map(type => (
                                                <li key={type} className="flex items-center gap-2 text-muted-foreground">
                                                    <CheckCircle className="w-4 h-4 text-primary"/>
                                                    <span>{type}</span>
                                                </li>
                                            ))}
                                        </ul>
                                     </div>
                                     <div className="p-8 bg-background rounded-lg border">
                                        <h4 className="font-bold text-lg text-foreground mb-4">Reportes de Cumplimiento</h4>
                                        <ul className="space-y-2">
                                            {complianceItems.map(item => (
                                                <li key={item} className="flex items-center gap-2 text-muted-foreground">
                                                    <CheckCircle className="w-4 h-4 text-primary"/>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-background">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios que Optimizan su Negocio</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Nuestra solución de planilla va más allá del cálculo. Le ofrece ventajas estratégicas.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitCard
                                    icon={<ShieldCheck className="h-8 w-8" />}
                                    title="Precisión y Cumplimiento"
                                    description="Reduzca el riesgo de errores y multas al automatizar los cálculos y mantenerse al día con la legislación panameña."
                                />
                                <BenefitCard
                                    icon={<TrendingUp className="h-8 w-8" />}
                                    title="Eficiencia Operativa"
                                    description="Ahorre tiempo valioso en tareas manuales y dedique sus recursos de RR.HH. a iniciativas estratégicas."
                                />
                                <BenefitCard
                                    icon={<Wallet className="h-8 w-8" />}
                                    title="Visibilidad Financiera"
                                    description="Obtenga una visión clara de los costos laborales con una integración contable perfecta y reportes detallados."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section id="contact" className="py-20 bg-card">
                        <div className="container mx-auto px-6 text-center">
                            <h2 className="text-3xl font-extrabold text-foreground mb-4">Modernice su Gestión de Planilla</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Descubra cómo podemos simplificar y potenciar la gestión de su recurso más valioso.
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
