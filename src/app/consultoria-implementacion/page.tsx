
'use client';

import { ArrowRight, CheckCircle, Rocket, Wrench, Users, Cog, UploadCloud, TestTube2, Building2 } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';

const StepCard = ({ number, icon, title, description }: { number: number; icon: React.ReactNode; title: string; description: string; }) => (
    <div className="relative flex items-start space-x-6">
        <div className="flex flex-col items-center">
            <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                {number}
            </div>
            <div className="h-24 w-0.5 bg-border mt-4"></div>
        </div>
        <div className="pt-3">
            <div className="flex items-center gap-3 mb-2">
                <div className="text-primary">{icon}</div>
                <h3 className="text-xl font-bold text-foreground">{title}</h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
        </div>
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


export default function ConsultoriaImplementacionPage() {
    
    const implementationSteps = [
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Instalación",
            description: "Desplegamos la infraestructura y el software base en su entorno, ya sea en la nube o en sus servidores locales."
        },
        {
            icon: <Wrench className="w-6 h-6" />,
            title: "Modificaciones al Aplicativo",
            description: "Adaptamos y personalizamos la solución para que se ajuste perfectamente a sus procesos de negocio únicos (si es requerido)."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Capacitación",
            description: "Formamos a sus equipos para asegurar una adopción rápida y un uso eficiente de todas las funcionalidades de la plataforma."
        },
        {
            icon: <Cog className="w-6 h-6" />,
            title: "Configuración de Parámetros",
            description: "Definimos y ajustamos todas las variables y reglas del sistema para que operen según sus políticas internas."
        },
        {
            icon: <UploadCloud className="w-6 h-6" />,
            title: "Carga de Datos",
            description: "Migramos su información histórica y maestra de forma segura y estructurada a la nueva plataforma."
        },
        {
            icon: <TestTube2 className="w-6 h-6" />,
            title: "Modelación y Pruebas",
            description: "Simulamos escenarios reales y realizamos pruebas exhaustivas para garantizar un funcionamiento sin errores."
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Puesta en Producción",
            description: "Coordinamos el lanzamiento final y proporcionamos soporte directo durante los primeros días de operación en vivo."
        },
    ];

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
                                        Garantizamos su Éxito: Consultoría de Implementación de Principio a Fin
                                    </h1>
                                    <p className="text-lg text-muted-foreground">
                                        Consideramos todas las etapas para el proceso de implementación desde la instalación de la solución hasta la puesta en producción, asegurando una transición fluida y resultados exitosos.
                                    </p>
                                    <div className="flex space-x-4 pt-2">
                                        <Button asChild size="lg">
                                            <Link href="#contact">
                                                Hable con un Experto
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex items-center justify-center group">
                                    <div className="relative">
                                        <Image
                                            src="/img/consulta.png"
                                            alt="Equipo planeando una implementación"
                                            width={384}
                                            height={288}
                                            className="rounded-xl max-w-full h-auto group-hover:scale-105 transition-transform duration-300"
                                            quality={90}
                                            priority
                                            data-ai-hint="team planning implementation"
                                        />
                                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="methodology" className="py-20 md:py-24">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Nuestra Metodología Comprobada</h2>
                                <p className="text-lg text-muted-foreground mt-4">
                                    Seguimos un proceso estructurado que garantiza que cada fase de la implementación se complete con los más altos estándares de calidad.
                                </p>
                            </div>
                            <div className="max-w-3xl mx-auto">
                               {implementationSteps.map((step, index) => (
                                   <StepCard 
                                      key={step.title}
                                      number={index + 1}
                                      icon={step.icon}
                                      title={step.title}
                                      description={step.description}
                                   />
                               ))}
                            </div>
                        </div>
                    </section>
                </FadeIn>
                
                <FadeIn>
                    <section id="benefits" className="py-20 md:py-24 bg-card">
                        <div className="container mx-auto px-6">
                            <div className="text-center mb-16 max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Valor que Aportamos a su Proyecto</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <BenefitCard
                                    icon={<Users className="h-8 w-8" />}
                                    title="Acompañamiento Experto"
                                    description="Tendrá un equipo de expertos a su lado en cada paso, asegurando que se sigan las mejores prácticas."
                                />
                                <BenefitCard
                                    icon={<CheckCircle className="h-8 w-8" />}
                                    title="Transición sin Contratiempos"
                                    description="Minimizamos los riesgos y las interrupciones en su operación durante el proceso de cambio."
                                />
                                 <BenefitCard
                                    icon={<Wrench className="h-8 w-8" />}
                                    title="Máximo Retorno de Inversión"
                                    description="Aseguramos que la solución se configure para maximizar su eficiencia y generar el mayor valor para su negocio."
                                />
                            </div>
                        </div>
                    </section>
                </FadeIn>

                 <FadeIn>
                    <section id="contact" className="py-20 bg-background">
                        <div className="container mx-auto px-6 text-center">
                             <h2 className="text-3xl font-extrabold text-foreground mb-4">¿Listo para Iniciar su Transformación?</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                                Hable con nuestros consultores para diseñar un plan de implementación adaptado a sus objetivos y cronograma.
                            </p>
                            <DemoButton size="lg">
                                Contactar Ahora
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
