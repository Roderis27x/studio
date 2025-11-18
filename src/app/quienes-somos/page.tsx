
'use client';

import { ArrowRight, BarChart, CheckCircle, Layers, Rocket, SlidersHorizontal, TrendingUp } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const LevelCard = ({
  icon,
  title,
  apps,
  accentColor,
}: {
  icon: React.ReactNode;
  title: string;
  apps: string[];
  accentColor: string;
}) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 overflow-hidden">
    <div className={`absolute top-0 left-0 w-1.5 h-full ${accentColor} transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className={`inline-flex p-3 rounded-xl ${accentColor} bg-opacity-10 group-hover:scale-105 transition-transform duration-300`}>
          <div className="text-primary">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{title}</h3>
      </div>
      <ul className="space-y-2 pl-1">
        {apps.map((app, index) => (
          <li 
            key={app} 
            className="flex items-start gap-2.5 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
          >
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{app}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function QuienesSomosPage() {
  const operativeApps = ['Aplicaciones Contables Financieras', 'Logística', 'CRM', 'Gestión de Cobros', 'Help Desk', 'Apps Móviles', 'Portales', 'Producción'];
  const tacticalApps = ['Herramientas de Explotación de Datos'];
  const strategicApps = ['Inteligencia de Negocios', 'Paneles de Control'];

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .decorative-grid {
          background-image: 
            linear-gradient(to right, rgb(209 213 219 / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(209 213 219 / 0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section ref={heroRef} className="relative bg-gradient-to-br from-white via-slate-50 to-white py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 decorative-grid opacity-40"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold uppercase tracking-wider text-sm mb-6">
                    Quienes Somos
                  </span>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 bg-clip-text">
                    Más de 20 Años Creando Ventaja Competitiva
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    CPT-SOFT es una empresa de Consultoría de Negocios y tecnología dedicada al desarrollo e implementación de aplicaciones, con clientes a nivel nacional e internacional. Nuestro principal objetivo es proveer servicios y productos de innovación tecnológica, sustentados en la calidad y el aprendizaje continuo para generar a nuestros clientes una ventaja competitiva sostenible y escalable.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Nuestro Enfoque en Aplicaciones
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Cubrimos todos los niveles de la organización para una transformación digital completa.
                </p>
              </div>
              
              <div className="max-w-7xl mx-auto">
                {/* Nivel Operativo - Destacado */}
                <div className="mb-8">
                  <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl p-8 border border-primary/20 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-primary text-white shadow-lg">
                        <Layers className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Nivel Operativo</h3>
                        <p className="text-sm text-muted-foreground">Aplicaciones que impulsan las operaciones diarias</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {operativeApps.map((app) => (
                        <div key={app} className="flex items-center gap-2 bg-white rounded-lg p-3 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm text-foreground font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Nivel Táctico y Estratégico - Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Nivel Táctico */}
                  <div className="bg-gradient-to-br from-accent/5 via-white to-accent/5 rounded-2xl p-8 border border-accent/20 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-accent text-white shadow-lg">
                        <SlidersHorizontal className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Nivel Táctico</h3>
                        <p className="text-sm text-muted-foreground">Análisis y gestión de información</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {tacticalApps.map((app) => (
                        <div key={app} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-sm text-foreground font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nivel Estratégico */}
                  <div className="bg-gradient-to-br from-green-50 via-white to-green-50 rounded-2xl p-8 border border-green-200 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-green-600 text-white shadow-lg">
                        <BarChart className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Nivel Estratégico</h3>
                        <p className="text-sm text-muted-foreground">Toma de decisiones ejecutivas</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {strategicApps.map((app) => (
                        <div key={app} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-border/50 hover:border-green-500/50 hover:bg-green-50 transition-all duration-200">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-foreground font-medium">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
        
        <FadeIn>
          <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 decorative-grid opacity-20"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="space-y-10">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                            <Rocket className="h-8 w-8" />
                          </div>
                          <h3 className="text-3xl font-extrabold text-foreground pt-2">Misión</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Proveer a nuestros clientes servicios y productos de vanguardia e innovación tecnológica que retornen a sus empresas Crecimiento, Sistematización y Optimización, a partir del continuo aprendizaje y satisfacción de nuestro personal y la modernización de las herramientas e infraestructura de desarrollo.
                        </p>
                      </div>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-start gap-6 mb-6">
                          <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg">
                            <TrendingUp className="h-8 w-8" />
                          </div>
                          <h3 className="text-3xl font-extrabold text-foreground pt-2">Visión</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Ser una empresa líder y rentable en el Desarrollo e implementación de soluciones tecnológicas. Considerando la innovación como base del desarrollo Empresarial. Para así transferirles a nuestros clientes competitividad y mejoramiento continuo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-10 rounded-3xl border border-primary/20">
                      <h4 className="text-2xl font-bold text-foreground mb-6">Nuestros Valores</h4>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-foreground">Innovación Continua:</span>
                            <span className="text-muted-foreground"> Buscamos constantemente nuevas formas de mejorar y evolucionar.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-foreground">Calidad y Excelencia:</span>
                            <span className="text-muted-foreground"> Cada proyecto refleja nuestro compromiso con los más altos estándares.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-foreground">Aprendizaje Continuo:</span>
                            <span className="text-muted-foreground"> Invertimos en el desarrollo de nuestro equipo para mantenernos a la vanguardia.</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <span className="font-semibold text-foreground">Compromiso con el Cliente:</span>
                            <span className="text-muted-foreground"> Su éxito es nuestra máxima prioridad y motivación.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                    Industrias
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Nuestro conocimiento y aplicaciones han sido ejecutados en diferentes áreas de las siguientes industrias:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Telecomunicaciones',
                    'Televisión por Cable',
                    'Educación (Escuelas - Universidades)',
                    'Industria del Plástico',
                    'Industria de Aluminio',
                    'Industria de Embutidos',
                    'Industria de Envases',
                    'Constructoras - Inmobiliarias',
                    'Hoteles',
                    'Bancos – Financieras',
                    'Aseguradoras',
                    'Distribuidores de Equipos Médicos',
                    'Distribuidores de Hardware',
                    'Distribuidores de Modulares',
                    'Distribuidores de Rodamiento',
                    'Distribuidores de Materiales y Equipos Industriales',
                    'Abogados',
                    'Industria Farmacéutica',
                    'Financieras',
                  ].map((industria) => (
                    <div
                      key={industria}
                      className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground font-medium">{industria}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Iniciemos su Transformación Digital
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                Contáctenos para descubrir cómo nuestra experiencia y tecnología pueden crear una ventaja competitiva para su negocio.
              </p>
              <Button asChild size="lg" variant="secondary" className="shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <Link href="/contacto">
                  Hable con un Experto
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
