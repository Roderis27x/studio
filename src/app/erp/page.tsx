import { ArrowRight, CheckCircle, Database, BarChart2, Users, Settings, DollarSign, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg border transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const BenefitItem = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start">
        <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-3 mt-1" />
        <span className="text-lg text-muted-foreground">{children}</span>
    </li>
);

export default function ERPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 text-center">
              <span className="text-primary font-semibold uppercase tracking-wider">ERP Core</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-dark leading-tight mt-2 mb-4">
                El Núcleo Digital de tu Empresa
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Integra finanzas, inventario, cadena de suministro y más en una única plataforma poderosa. Obtén una visión 360° de tu operación y toma decisiones basadas en datos.
              </p>
              <Button asChild size="lg">
                <Link href="#contact">
                  Solicitar una Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.4}>
            <div className="container mx-auto px-6 -mt-16">
                <div className="max-w-5xl mx-auto p-4 bg-white rounded-xl shadow-2xl border border-slate-100">
                    <Image
                        src="https://picsum.photos/seed/erp-dashboard/1200/675"
                        alt="Panel de control del ERP"
                        width={1200}
                        height={675}
                        className="rounded-lg object-cover"
                        data-ai-hint="erp dashboard"
                    />
                </div>
            </div>
        </FadeIn>

        <FadeIn>
          <section id="erp-features" className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Funcionalidades Integradas</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Un conjunto de herramientas completo para unificar y optimizar cada aspecto de tu negocio.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard icon={<DollarSign className="h-6 w-6" />} title="Gestión Financiera" description="Contabilidad, facturación, y reportes financieros en tiempo real." />
                <FeatureCard icon={<Briefcase className="h-6 w-6" />} title="Cadena de Suministro" description="Optimiza el inventario, las compras y las operaciones de almacén." />
                <FeatureCard icon={<Users className="h-6 w-6" />} title="Recursos Humanos" description="Gestiona la nómina, empleados y procesos de RRHH de forma centralizada." />
                <FeatureCard icon={<BarChart2 className="h-6 w-6" />} title="Analítica Avanzada" description="Dashboards personalizables e informes para una toma de decisiones inteligente." />
                <FeatureCard icon={<Database className="h-6 w-6" />} title="Gestión de Proyectos" description="Planifica, ejecuta y monitorea proyectos para cumplir plazos y presupuestos." />
                <FeatureCard icon={<Settings className="h-6 w-6" />} title="Plataforma Flexible" description="Adapta el sistema a tus flujos de trabajo con módulos personalizables e integraciones." />
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                             <Image
                                src="https://picsum.photos/seed/team-working/800/600"
                                alt="Equipo colaborando con el ERP"
                                width={800}
                                height={600}
                                className="rounded-lg shadow-xl"
                                data-ai-hint="team collaboration"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Transforma tu Operación, <span className="text-primary">No Solo tus Herramientas</span></h2>
                            <p className="text-lg text-muted-foreground">CPT-SOFT ERP Core va más allá del software. Se trata de unificar a tus equipos, optimizar tus procesos y desbloquear un nuevo nivel de eficiencia.</p>
                            <ul className="space-y-4">
                                <BenefitItem>Centraliza toda tu información para una única fuente de verdad.</BenefitItem>
                                <BenefitItem>Reduce costos operativos al automatizar tareas manuales.</BenefitItem>
                                <BenefitItem>Obtén visibilidad completa de tu negocio para tomar decisiones proactivas.</BenefitItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
