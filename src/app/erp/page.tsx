
'use client';

import { ArrowRight, CheckCircle, Database, BarChart2, Users, Settings, DollarSign, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-card p-6 rounded-lg border text-center">
    <p className="text-4xl font-extrabold text-primary">{value}</p>
    <p className="text-muted-foreground mt-1">{label}</p>
  </div>
);


export default function ERPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        
        <FadeIn>
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <span className="text-primary font-semibold uppercase tracking-wider">ERP Core</span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                    La Única Fuente de Verdad para tu Negocio
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    Unifica tus finanzas, cadena de suministro, RRHH y más. CPT-SOFT ERP Core centraliza tus datos para darte una visión 360° y potenciar decisiones inteligentes.
                  </p>
                  <div className="flex space-x-4">
                    <Button asChild size="lg">
                      <Link href="#contact">
                        Solicitar una Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <Link href="#modules">
                        Ver Módulos
                      </Link>
                    </Button>
                  </div>
                </div>
                 <div>
                    <Image
                        src="https://picsum.photos/seed/erp-ui/800/600"
                        alt="Interfaz de ERP Core"
                        width={800}
                        height={600}
                        className="rounded-lg shadow-2xl"
                        data-ai-hint="erp ui"
                    />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section id="modules" className="py-20 bg-card">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Módulos Integrados para una Gestión Completa</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Haz clic en cada módulo para descubrir cómo puede transformar un área clave de tu negocio.
                </p>
              </div>

              <Tabs defaultValue="finance" className="w-full max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                  <TabsTrigger value="finance">
                    <DollarSign className="mr-2"/>Finanzas
                  </TabsTrigger>
                  <TabsTrigger value="supply_chain">
                    <Briefcase className="mr-2"/>Suministro
                  </TabsTrigger>
                  <TabsTrigger value="hr">
                    <Users className="mr-2"/>RRHH
                  </TabsTrigger>
                  <TabsTrigger value="analytics">
                    <BarChart2 className="mr-2"/>Analítica
                  </TabsTrigger>
                </TabsList>
                <Card className="mt-4">
                  <CardContent className="p-6">
                    <TabsContent value="finance">
                        <h3 className="text-xl font-bold mb-2">Gestión Financiera Centralizada</h3>
                        <p className="text-muted-foreground">Automatiza la contabilidad, gestiona facturas, controla presupuestos y obtén informes financieros en tiempo real para una visión clara de la salud de tu empresa.</p>
                    </TabsContent>
                    <TabsContent value="supply_chain">
                        <h3 className="text-xl font-bold mb-2">Optimización de la Cadena de Suministro</h3>
                        <p className="text-muted-foreground">Controla tu inventario desde la compra hasta la entrega. Optimiza los niveles de stock, gestiona proveedores y agiliza las operaciones de almacén para reducir costos.</p>
                    </TabsContent>
                    <TabsContent value="hr">
                        <h3 className="text-xl font-bold mb-2">Administración Eficiente de Recursos Humanos</h3>
                        <p className="text-muted-foreground">Simplifica la gestión de nóminas, el seguimiento de empleados, y los procesos de onboarding y evaluación desde una única plataforma integrada.</p>
                    </TabsContent>
                    <TabsContent value="analytics">
                        <h3 className="text-xl font-bold mb-2">Analítica y Business Intelligence</h3>
                        <p className="text-muted-foreground">Transforma tus datos en decisiones. Crea dashboards personalizados, genera informes detallados y descubre insights para impulsar el crecimiento de tu negocio.</p>
                    </TabsContent>
                  </CardContent>
                </Card>
              </Tabs>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-20">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Resultados que Puedes Medir</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Nuestros clientes experimentan mejoras significativas en eficiencia y rentabilidad.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                <StatCard value="+30%" label="Aumento de Eficiencia Operativa" />
                <StatCard value="-15%" label="Reducción de Costos de Inventario" />
                <StatCard value="2x" label="Toma de Decisiones más Rápida" />
              </div>
            </div>
          </section>
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
