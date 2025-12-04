import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';
import { ArrowRight, CheckCircle, Scale, PiggyBank, Briefcase, Boxes, Factory, Gem, FileText, HandCoins, Users, BarChart, Banknote, Building } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DemoButton } from '@/components/demo-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import IntegratedModules from '@/components/sections/integrated-modules';

export const metadata: Metadata = generatePageMetadata('erp');

const BenefitCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <Card className="bg-card border-none shadow-none text-center items-center flex flex-col">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div className="bg-primary/10 text-primary p-3 rounded-full mx-auto">
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
      <p className="text-muted-foreground">{children}</p>
    </CardContent>
  </Card>
);



export default function ERPPage() {


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">

        <FadeIn>
          <section className="bg-white">
            <div className="container mx-auto px-6 py-20 md:py-28">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-tight">
                    ERP
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">La Solución Integral para la Cadena de Valor de su Negocio</h2>
                  <p className="text-lg text-muted-foreground">
                    Integra toda la cadena de valor de su organización hasta la generación de la información financiera, permitiendo a los administradores y analistas tomar decisiones precisas y oportunas.
                  </p>
                  <div className="flex space-x-4 pt-4">
                    <DemoButton size="lg">
                      Solicitar una Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </DemoButton>
                    <Button asChild size="lg" variant="outline">
                      <Link href="#modules">
                        Ver Módulos
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="p-4 rounded-lg flex items-center justify-center">
                  <Image
                    src="/img/erp.png"
                    alt="Dashboard de CPT-SOFT ERP"
                    width={512}
                    height={384}
                    className="rounded-lg max-w-full h-auto"
                    quality={90}
                    priority
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
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Beneficios Clave para su Empresa</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                  Nuestro ERP está diseñado para generar un impacto medible en cada área de su organización.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                <BenefitCard icon={<Scale className="h-8 w-8" />} title="Optimización de Costos">
                  Al estandarizar procesos y reducir errores, se minimizan los costos operativos y de inventario.
                </BenefitCard>
                <BenefitCard icon={<BarChart className="h-8 w-8" />} title="Agilidad Empresarial">
                  La información en tiempo real y dashboards permiten reaccionar rápidamente a los cambios del mercado.
                </BenefitCard>
                <BenefitCard icon={<CheckCircle className="h-8 w-8" />} title="Mejora Regulatoria">
                  Asegura que los procesos contables y fiscales cumplan con las regulaciones locales e internacionales.
                </BenefitCard>
                <BenefitCard icon={<Users className="h-8 w-8" />} title="Experiencia del Cliente">
                  Una visión 360 mejora la precisión de las entregas y el servicio postventa.
                </BenefitCard>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <IntegratedModules />
        </FadeIn>



      </main>
      <Footer />
    </div>
  );
}
