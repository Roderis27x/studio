
'use client';

import { ArrowRight, CheckCircle, Scale, PiggyBank, Briefcase, Boxes, Factory, Gem, FileText, HandCoins, Users, BarChart, Banknote, Building } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="bg-card border-none shadow-none">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
       <div className="bg-primary/10 text-primary p-3 rounded-full">
        {icon}
      </div>
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);

const ModuleItem = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-border transition-transform hover:-translate-y-1 hover:shadow-md">
        <div className="text-primary">{icon}</div>
        <span className="font-medium text-foreground">{name}</span>
    </div>
);


export default function ERPPage() {
  const modules = [
    { name: 'Contabilidad', icon: <Scale className="w-5 h-5"/> },
    { name: 'Cuentas por Pagar', icon: <Banknote className="w-5 h-5"/> },
    { name: 'Banco (Tesorería)', icon: <PiggyBank className="w-5 h-5"/> },
    { name: 'Caja Menuda', icon: <Briefcase className="w-5 h-5"/> },
    { name: 'Activos Fijos', icon: <Building className="w-5 h-5"/> },
    { name: 'Compras', icon: <HandCoins className="w-5 h-5"/> },
    { name: 'Inventario', icon: <Boxes className="w-5 h-5"/> },
    { name: 'Manufactura', icon: <Factory className="w-5 h-5"/> },
    { name: 'Control de Calidad', icon: <Gem className="w-5 h-5"/> },
    { name: 'Facturación Electrónica', icon: <FileText className="w-5 h-5"/> },
    { name: 'Cuentas por Cobrar - Caja', icon: <HandCoins className="w-5 h-5"/> },
    { name: 'Planilla', icon: <Users className="w-5 h-5"/> },
    { name: 'Reportes y Dashboards', icon: <BarChart className="w-5 h-5"/> },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <FadeIn>
          <section className="bg-white">
            <div className="container mx-auto px-6 py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="text-primary font-semibold uppercase tracking-wider">CPT-SOFT ERP</span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                    La Solución Integral para la Cadena de Valor de tu Negocio
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Integra toda la cadena de valor de su organización hasta la generación de la información financiera, permitiendo a los administradores y analistas tomar decisiones precisas y oportunas.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <Button asChild size="lg">
                      <Link href="#contact">
                        Solicitar una Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                 <div className="bg-slate-50 p-4 rounded-lg">
                    <Image
                        src="https://picsum.photos/seed/erp-dashboard/800/600"
                        alt="Dashboard de CPT-SOFT ERP"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-xl"
                        data-ai-hint="erp dashboard"
                    />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section id="benefits" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios Clave para tu Empresa</h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                        Nuestro ERP está diseñado para generar un impacto medible en cada área de tu organización.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                   <BenefitCard icon={<Scale className="h-6 w-6"/>} title="Optimización de Costos">
                        Al estandarizar procesos y reducir errores, se minimizan los costos operativos y de inventario (Ej: menos stock-outs o exceso de inventario).
                   </BenefitCard>
                   <BenefitCard icon={<BarChart className="h-6 w-6"/>} title="Agilidad Empresarial">
                        La información en tiempo real, dashboards y reportería permiten a la gerencia reaccionar rápidamente a los cambios del mercado o a desviaciones operacionales.
                   </BenefitCard>
                   <BenefitCard icon={<CheckCircle className="h-6 w-6"/>} title="Mejora Regulatoria y Cumplimiento">
                        El sistema ayuda a asegurar que los procesos (ej. contabilidad, impuestos) cumplan con las regulaciones locales e internacionales.
                   </BenefitCard>
                   <BenefitCard icon={<Users className="h-6 w-6"/>} title="Mejor Experiencia del Cliente">
                        Al tener una visión completa (pedidos, inventario, facturación) se mejora la precisión de las promesas de entrega y el servicio postventa.
                   </BenefitCard>
                </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="modules" className="py-20 md:py-24 bg-card">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Módulos Integrados</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Una suite completa de herramientas para gestionar cada aspecto de tu operación desde una única plataforma.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto text-left">
                {modules.map(module => (
                    <ModuleItem key={module.name} icon={module.icon} name={module.name} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
