'use client';

import { ArrowRight, Briefcase, Users, TrendingUp, Heart, Code, Rocket, CheckCircle, Upload, Mail, Phone, User } from 'lucide-react';
import { carrerasEmailTemplate } from '@/lib/email-templates';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useEffect, useRef, useState } from 'react';

const BenefitCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

export default function CarrerasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación básica
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const cv = formData.get('cv') as File;
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const mensaje = formData.get('mensaje') as string;

    if (!cv || cv.size === 0) {
      toast({
        title: "CV Requerido",
        description: "Por favor, adjunta tu CV para continuar.",
        variant: "destructive",
      });
      return;
    }

    if (cv.size > 5 * 1024 * 1024) {
      toast({
        title: "Archivo muy grande",
        description: "El archivo no debe superar los 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Enviar a través del API route
      const newFormData = new FormData();
      newFormData.append('nombre', nombre);
      newFormData.append('email', email);
      newFormData.append('telefono', telefono);
      newFormData.append('mensaje', mensaje);
      newFormData.append('cv', cv);

      const response = await fetch('/api/carreras', {
        method: 'POST',
        body: newFormData,
      });

      if (!response.ok) {
        throw new Error('Error al enviar la aplicación');
      }

      toast({
        title: "¡Aplicación Enviada!",
        description: "Gracias por tu interés. Te contactaremos pronto.",
      });
      form.reset();
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar la aplicación. Intente de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (heroRef.current) {
      const style = document.createElement('style');
      style.textContent = `
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
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 backdrop-blur-sm mb-6">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                  Únete a Nuestro Equipo
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Construye tu carrera con nosotros. Buscamos personas apasionadas por la tecnología y la innovación que quieran hacer la diferencia.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  ¿Por Qué CPT-SOFT?
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Somos más que una empresa de tecnología. Somos un equipo que cree en el crecimiento profesional y personal.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <BenefitCard
                  icon={<TrendingUp className="h-6 w-6" />}
                  title="Crecimiento Profesional"
                  description="Oportunidades de desarrollo y capacitación continua para impulsar tu carrera."
                />
                <BenefitCard
                  icon={<Users className="h-6 w-6" />}
                  title="Equipo Colaborativo"
                  description="Trabaja con profesionales talentosos en un ambiente de respeto y apoyo mutuo."
                />
                <BenefitCard
                  icon={<Rocket className="h-6 w-6" />}
                  title="Proyectos Innovadores"
                  description="Participa en proyectos desafiantes que impactan a clientes a nivel nacional e internacional."
                />
                <BenefitCard
                  icon={<Code className="h-6 w-6" />}
                  title="Tecnología de Punta"
                  description="Trabaja con las últimas tecnologías y herramientas del mercado."
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-20 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Envíanos tu CV
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  ¿Listo para unirte a nuestro equipo? Completa el formulario y adjunta tu CV. Nos pondremos en contacto contigo pronto.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <form
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border/50"
                >
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="nombre" className="text-base font-semibold text-foreground flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="mt-2 h-12 text-base"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-base font-semibold text-foreground flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-base"
                        />
                      </div>

                      <div>
                        <Label htmlFor="telefono" className="text-base font-semibold text-foreground flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          Teléfono *
                        </Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          placeholder="+507 1234-5678"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          required
                          className="mt-2 h-12 text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cv" className="text-base font-semibold text-foreground flex items-center gap-2">
                        <Upload className="h-4 w-4 text-primary" />
                        CV / Hoja de Vida *
                      </Label>
                      <Input
                        id="cv"
                        name="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        className="mt-2 h-12 text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Formatos aceptados: PDF, DOC, DOCX (máximo 5MB)
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="mensaje" className="text-base font-semibold text-foreground">
                        Mensaje / Carta de Presentación (Opcional)
                      </Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Cuéntanos sobre ti, tu experiencia y por qué te gustaría trabajar con nosotros..."
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        rows={6}
                        className="mt-2 text-base resize-none"
                      />
                    </div>

                    <div className="pt-4">
                      <Button type="submit" size="lg" className="w-full text-base h-12" disabled={isSubmitting}>
                        {isSubmitting ? 'Enviando...' : 'Enviar Aplicación'}
                        {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                    Proceso de Selección
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {/* Paso 1 */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8 group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/90 text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Mail className="h-12 w-12" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3 text-center">Aplicación</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">Envía tu CV y carta de presentación</p>
                  </div>

                  {/* Paso 2 */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8 group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/90 text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <CheckCircle className="h-12 w-12" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3 text-center">Revisión</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">Nuestro equipo evalúa tu perfil</p>
                  </div>

                  {/* Paso 3 */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8 group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/90 text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Users className="h-12 w-12" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3 text-center">Entrevista</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">Conversamos sobre tu experiencia</p>
                  </div>

                  {/* Paso 4 */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8 group">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/90 text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                        <Rocket className="h-12 w-12" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3 text-center">Bienvenida</h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">¡Únete al equipo CPT-SOFT!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 decorative-grid opacity-10"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                ¿Tienes Preguntas?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                Estamos aquí para ayudarle. Contáctenos y resolveremos todas sus dudas sobre el proceso de selección.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="bg-white text-primary rounded-2xl shadow-lg px-8 py-6 flex items-center gap-3 min-w-[260px] mb-2 md:mb-0">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold text-lg">info@cpt-soft.com</span>
                </div>
                <div className="bg-white/10 border border-white/30 rounded-2xl px-8 py-6 flex items-center gap-3 min-w-[260px] justify-center shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                  <span className="font-semibold text-lg text-white">+507 399-2613 / +507 399-2614</span>
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
