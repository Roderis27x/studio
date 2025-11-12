'use client';

import { Shield, Lock, Cookie, Eye, FileText, Settings, Globe, UserCheck } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';

const Section = ({ 
  title, 
  children, 
  icon 
}: { 
  title: string; 
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      {icon && (
        <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="prose prose-slate max-w-none">
      {children}
    </div>
  </div>
);

export default function PoliticaPrivacidadPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="relative bg-primary text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Shield className="h-12 w-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Políticas de Privacidad
                </h1>
                <p className="text-xl text-white/90">
                  Tu privacidad es muy importante para CPT-SOFT
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-lg mb-12">
                  <p className="text-foreground leading-relaxed">
                    En atención a la <strong>Ley 81 del 26 de marzo de 2019</strong>, la cual tiene por objeto establecer los principios, derechos, obligaciones y procedimientos que regulan la protección de datos personales, solicitamos y tratamos tus Datos Personales de manera responsable.
                  </p>
                </div>

                <div className="mb-12 p-6 bg-slate-50 rounded-xl border border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    Al proporcionarnos tus Datos Personales a través de nuestra página web o formulario de contacto, estás consintiendo la manera en que obtenemos y tratamos tus Datos Personales conforme al presente Aviso.
                  </p>
                </div>

                <Section title="Finalidades del Tratamiento de Datos" icon={<FileText className="h-5 w-5" />}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Finalidades Principales</h3>
                      <p className="text-muted-foreground mb-3">El tratamiento de tus Datos Personales se realizará en forma cuidadosa y únicamente para cumplir con las siguientes finalidades necesarias:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Proporcionarte cotizaciones y llevar a cabo ventas</li>
                        <li>Realizar el proceso de cobro y facturación</li>
                        <li>Atender dudas y consultas</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
                      <h3 className="font-semibold text-foreground mb-3">Finalidades Secundarias</h3>
                      <p className="text-muted-foreground mb-3">También podremos tratar tus Datos Personales para:</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Enviarte promociones y publicidad relativa a nuestros productos o servicios</li>
                        <li>Comunicaciones vía correo electrónico, mensajes a tu celular, redes sociales u otros medios</li>
                      </ul>
                      <div className="mt-4 p-4 bg-white rounded-lg border border-border/50">
                        <p className="text-sm text-foreground">
                          <strong>Nota:</strong> Puedes cancelar tu suscripción en cualquier momento mediante la opción "Cancelar suscripción" en la parte inferior de cada mensaje electrónico.
                        </p>
                      </div>
                    </div>
                  </div>
                </Section>

                <Section title="Protección de Datos Financieros" icon={<Lock className="h-5 w-5" />}>
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                    <p className="text-muted-foreground">
                      Los datos personales financieros enviados a través de nuestro sitio de Internet son encriptados y tratados por una institución bancaria o un tercero quien procesa dichas transferencias electrónicas. Estas entidades deben tratar tus datos personales conforme a su propio aviso de privacidad.
                    </p>
                  </div>
                </Section>

                <Section title="Uso de Cookies y Tecnologías" icon={<Cookie className="h-5 w-5" />}>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      La página web de CPT-SOFT utiliza cookies y otras tecnologías para identificarte y monitorear tu comportamiento como usuario de Internet, lo cual nos permite:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Adaptar, mejorar y personalizar tu experiencia de usuario</li>
                      <li>Ofrecerte una mejor oferta al navegar</li>
                      <li>Sugerirte nuevos productos basados en tus preferencias</li>
                      <li>Pedirte que evalúes productos o servicios adquiridos</li>
                    </ul>

                    <div className="mt-6 p-6 bg-slate-50 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-3">¿Qué son las cookies?</h3>
                      <p className="text-muted-foreground">
                        Las cookies son archivos de texto descargados automáticamente y almacenados en el disco duro de tu equipo al navegar en una página de Internet. Permiten recordar datos como tus preferencias, nombre y contraseña.
                      </p>
                    </div>
                  </div>
                </Section>

                <Section title="Tipos de Cookies" icon={<Settings className="h-5 w-5" />}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Eye className="h-5 w-5 text-primary" />
                        Cookies de Rendimiento
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Recuerdan tus preferencias como ajustes de volumen, velocidades de transmisión y objetos en el carrito de compras.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Cookies de Geo-localización
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Utilizadas para averiguar tu ubicación. Son anónimas y ayudan a orientar el contenido.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-primary" />
                        Cookies de Registro
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Se generan cuando te registras o inicias sesión, manteniendo tu identificación activa.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-border/50 hover:shadow-lg transition-shadow">
                      <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Cookies Analíticas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Identifican de forma anónima navegadores y dispositivos para contabilizar visitantes y contenidos populares.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <h3 className="font-semibold text-foreground mb-2">Cookies de Publicidad</h3>
                    <p className="text-muted-foreground mb-3">
                      Permiten ampliar la información de anuncios mostrados, almacenando duración, frecuencia de visualización e interacciones para ofrecer publicidad afín a tus intereses.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos la plataforma Doubleclick (Google) para gestionar estos servicios. Más información en:{' '}
                      <a href="http://www.google.es/policies/privacy/ads/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        políticas de Google
                      </a>
                    </p>
                  </div>
                </Section>

                <Section title="Gestión de Cookies en tu Navegador">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Puedes configurar tu navegador para avisar de la recepción de cookies e impedir su instalación. También puedes revisar y eliminar las cookies instaladas.
                    </p>
                    
                    <div className="bg-slate-50 p-6 rounded-xl">
                      <h3 className="font-semibold text-foreground mb-4">Enlaces de ayuda por navegador:</h3>
                      <ul className="space-y-2">
                        <li>
                          <a href="https://support.google.com/chrome/answer/95647?hl=es" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            Google Chrome
                          </a>
                        </li>
                        <li>
                          <a href="http://windows.microsoft.com/es-es/windows-vista/cookies-frequently-asked-questions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            Internet Explorer
                          </a>
                        </li>
                        <li>
                          <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            Mozilla Firefox
                          </a>
                        </li>
                        <li>
                          <a href="http://www.apple.com/es/privacy/use-of-cookies/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            Safari
                          </a>
                        </li>
                        <li>
                          <a href="http://help.opera.com/Windows/11.50/es-ES/cookies.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                            Opera
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Section>

                <Section title="Protección y Confidencialidad" icon={<Shield className="h-5 w-5" />}>
                  <div className="bg-blue-50 border-l-4 border-primary p-6 rounded">
                    <p className="text-foreground font-semibold mb-3">Compromiso de CPT-SOFT</p>
                    <p className="text-muted-foreground">
                      CPT-SOFT se abstendrá de divulgar, almacenar, comercializar, rentar y/o vender tus Datos Personales, en contravención a las leyes aplicables.
                    </p>
                  </div>
                </Section>

                <Section title="Tus Derechos">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      En cualquier momento puedes ejercer los siguientes derechos:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Revocar tu consentimiento para el tratamiento de tus Datos Personales</li>
                      <li>Acceso a tus datos</li>
                      <li>Rectificación de información incorrecta</li>
                      <li>Cancelación de tus datos</li>
                      <li>Oposición al tratamiento</li>
                    </ul>

                    <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20">
                      <h3 className="font-semibold text-foreground mb-3">Contacto</h3>
                      <p className="text-muted-foreground mb-2">
                        Para ejercer tus derechos o realizar consultas:
                      </p>
                      <p className="text-foreground font-medium">
                        Email: <a href="mailto:info@cpt-soft.com" className="text-primary hover:underline">info@cpt-soft.com</a>
                      </p>
                    </div>
                  </div>
                </Section>

                <Section title="Actualizaciones">
                  <div className="bg-slate-50 p-6 rounded-xl border border-border/50">
                    <p className="text-muted-foreground">
                      CPT-SOFT podrá efectuar cambios al presente Aviso en cualquier momento. Siempre podrás consultar la versión más reciente a través de nuestra página web{' '}
                      <a href="http://www.cpt-soft.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        www.cpt-soft.com
                      </a>
                    </p>
                  </div>
                </Section>

                <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">Recursos Adicionales</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <a href="http://www.youronlinechoices.com/es/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Publicidad online basada en el comportamiento
                      </a>
                    </p>
                    <p>
                      <a href="http://www.google.com/analytics/learn/privacy.html" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Protección de datos de Google Analytics
                      </a>
                    </p>
                    <p>
                      <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es#analyticsjs" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Cómo usa Google Analytics las cookies
                      </a>
                    </p>
                    <p>
                      <a href="http://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        Desactivar Google Analytics
                      </a>
                    </p>
                  </div>
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
