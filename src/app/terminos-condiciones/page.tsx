'use client';

import { FileText, Shield, Scale, AlertTriangle, Users, Lock } from 'lucide-react';
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

export default function TerminosCondicionesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
                  <Scale className="h-12 w-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Términos y Condiciones
                </h1>
                <p className="text-xl text-white/90">
                  Última actualización: Julio 2021
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
                    Bienvenido a la página de Internet diseñada por <strong>CPT-SOFT</strong>, con domicilio en ciudad de Panamá, República de Panamá (en adelante el «SITIO»). El usuario (en adelante «Usuario» o «Usuarios», según corresponda) acepta sin restricciones, reservas, ni modificaciones estos términos y condiciones de uso de la página de Internet de www.CPT-SOFT.com.pa y servicios ofrecidos, el cual se encuentra bajo propiedad de CPT-SOFT.
                  </p>
                </div>

                <div className="mb-12 p-6 bg-slate-50 rounded-xl border border-border/50">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El usuario declara poseer capacidad legal para contratar y no tener ningún impedimento según las leyes de su país y/o de las jurisdicciones aplicables, y se obliga a utilizar el SITIO para un propósito lícito, de no estar de acuerdo, favor evitar el uso del SITIO.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    El acceso al SITIO implica la aceptación y conocimiento por parte del Usuario de los Términos y Condiciones.
                  </p>
                </div>

                <Section title="1. Servicio" icon={<FileText className="h-5 w-5" />}>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Calidad</h3>
                      <p>El SITIO es para uso personal y podrá ser utilizado para fines comerciales, dependiendo de las necesidades de cada Usuario. CPT-SOFT no incurrirá en responsabilidad en caso de que existan interrupciones o un mal funcionamiento de los servicios o contenidos ofrecidos en Internet, sin importar la causa, magnitud o tiempo.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Funcionamiento</h3>
                      <p>El SITIO funciona «TAL CUAL ES», «CON TODOS SUS FALLOS» y según su «DISPONIBILIDAD» por lo que CPT-SOFT no otorga garantía de ningún tipo y es el Usuario quien utiliza el SITIO bajo su propio riesgo.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Suspensión y Terminación</h3>
                      <p>CPT-SOFT podrá, sin necesidad de notificación previa, determinar la suspensión, cancelación y/o terminación inmediata del SITIO.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Precios e Impuestos</h3>
                      <p>Los precios exhibidos en el SITIO están sujetos a cambios sin previo aviso. Los precios expuestos no incluyen el ITBMS ni otros impuestos que estén vigentes o entren en vigencia en el futuro.</p>
                    </div>
                  </div>
                </Section>

                <Section title="2. Política de Privacidad" icon={<Lock className="h-5 w-5" />}>
                  <p className="text-muted-foreground">
                    Todos los datos que el Usuario proporcione a CPT-SOFT se encontrarán sujetos a nuestro control conforme a la legislación aplicable de la República de Panamá. Los datos que proporcione el Usuario serán de uso exclusivo e interno de CPT-SOFT, y no se hará uso de dichos datos para efectos de comercialización o divulgación a ningún otro ente.
                  </p>
                </Section>

                <Section title="3. Cuenta" icon={<Users className="h-5 w-5" />}>
                  <p className="text-muted-foreground">
                    La confidencialidad de los datos de la cuenta y contraseña del Usuario son de su exclusiva responsabilidad. Asimismo, todas las actividades realizadas en el SITIO bajo su nombre de Usuario y contraseña son de su exclusiva responsabilidad.
                  </p>
                </Section>

                <Section title="4. Información Disponible" icon={<AlertTriangle className="h-5 w-5" />}>
                  <p className="text-muted-foreground">
                    CPT-SOFT no garantiza ni asegura la precisión, idoneidad, integridad o veracidad de cualquier tipo de información disponible en el SITIO. El Usuario asume todos los riesgos asociados con el uso de cualquier contenido. Los renders y bocetos presentados pueden cambiar en cualquier momento a discreción de CPT-SOFT.
                  </p>
                </Section>

                <Section title="5. Prácticas sobre la utilización del SITIO" icon={<Shield className="h-5 w-5" />}>
                  <div className="space-y-4 text-muted-foreground">
                    <p>El Usuario reconoce que CPT-SOFT tiene la potestad exclusiva de establecer los límites y condiciones para la utilización del SITIO.</p>
                    
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Control de contenidos</h3>
                      <p>El Usuario reconoce a CPT-SOFT plena y absoluta discreción para preseleccionar, rechazar, remover y/o modificar cualquier contenido en el SITIO.</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Interconexión con otros sitios</h3>
                      <p>Este sitio web podrá interconectarse con otros sitios web por la naturaleza misma de este sitio; específicamente podrá interconectarse con los sitios de FACEBOOK, TWITTER u otros similares. En tales casos, el Usuario deberá conocer y aceptar los términos y condiciones de dichos sitios.</p>
                    </div>
                  </div>
                </Section>

                <Section title="6. Responsabilidad del Usuario">
                  <div className="space-y-3 text-muted-foreground">
                    <p>El Usuario es el único responsable por cualquier información, dato, texto, fotografía, video, música, sonido, software o cualquier otro tipo de obra que publique en el SITIO.</p>
                    
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                      <h3 className="font-semibold text-foreground mb-2">Actividades Prohibidas</h3>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Violación de derechos de terceros</li>
                        <li>Publicar contenido ilegal, obsceno o difamatorio</li>
                        <li>Introducir virus o malware</li>
                        <li>Enviar spam o correos masivos</li>
                        <li>Recopilar información de usuarios sin consentimiento</li>
                        <li>Intentar acceso no autorizado</li>
                      </ul>
                    </div>
                  </div>
                </Section>

                <Section title="7. Limitaciones de Responsabilidad">
                  <p className="text-muted-foreground mb-3">
                    El Usuario reconoce que CPT-SOFT no asume responsabilidades por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Daños derivados del mal uso del SITIO</li>
                    <li>Fallas o discontinuidad en el servicio</li>
                    <li>Acceso no autorizado o alteración de datos</li>
                    <li>Servicios o enlaces de terceros</li>
                  </ul>
                </Section>

                <Section title="8. Derechos de Autor">
                  <p className="text-muted-foreground">
                    Toda la información que el Usuario incorpore al SITIO se considerará de carácter público y contendrá una licencia irrevocable a favor de CPT-SOFT para su uso, reproducción y distribución. El Usuario se obliga a mantener indemne a CPT-SOFT en caso de infracción de derechos de terceros.
                  </p>
                </Section>

                <Section title="9. Confidencialidad de Datos">
                  <p className="text-muted-foreground">
                    CPT-SOFT podrá revelar información del Usuario en los siguientes casos: (a) si fuese requerida por autoridad judicial; (b) para ejercer sus derechos; (c) para protección de derechos de terceros; (d) para protección de derechos y seguridad de CPT-SOFT y el público.
                  </p>
                </Section>

                <Section title="10. Derechos de Propiedad Intelectual">
                  <p className="text-muted-foreground">
                    El Usuario reconoce que el SITIO y todos sus contenidos son propiedad de CPT-SOFT y están protegidos por las leyes de propiedad intelectual. Queda prohibida cualquier forma de reproducción, distribución o uso no autorizado.
                  </p>
                </Section>

                <Section title="11. Marcas Registradas">
                  <p className="text-muted-foreground">
                    Las marcas registradas y nombres de CPT-SOFT son propiedad exclusiva de la empresa. El Usuario tiene prohibido usar estas marcas sin autorización expresa.
                  </p>
                </Section>

                <Section title="12. Indemnización">
                  <p className="text-muted-foreground">
                    El Usuario se compromete a indemnizar y mantener indemne a CPT-SOFT de toda acción, reclamo o demanda iniciada por terceros debido a sus acciones en el SITIO.
                  </p>
                </Section>

                <Section title="13. Legislación Aplicable y Arbitraje">
                  <div className="space-y-3 text-muted-foreground">
                    <p>Los presentes Términos y Condiciones están regidos por las leyes de la República de Panamá.</p>
                    <p>Cualquier litigio o controversia deberá resolverse por medio de Arbitraje, previo intento de Conciliación, por el Centro de Conciliación y Arbitraje de Panamá.</p>
                  </div>
                </Section>

                <Section title="14. Aviso a Menores">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded text-muted-foreground">
                    <p className="font-semibold text-foreground mb-2">Importante</p>
                    <p>La utilización del SITIO está expresamente prohibida a menores de 18 años. Si tienes entre 14 y 18 años, debes obtener autorización de tus padres o representantes legales.</p>
                  </div>
                </Section>

                <Section title="15. Modificaciones">
                  <p className="text-muted-foreground">
                    CPT-SOFT se reserva el derecho de modificar estos Términos y Condiciones periódicamente. El Usuario se compromete a revisar regularmente estos términos para informarse de cualquier cambio.
                  </p>
                </Section>

                <div className="mt-16 p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-border/50">
                  <h3 className="text-xl font-bold text-foreground mb-4">¿Necesita más información?</h3>
                  <p className="text-muted-foreground mb-6">
                    Si tiene preguntas sobre estos Términos y Condiciones, por favor contáctenos.
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-2">CPT-SOFT</p>
                    <p>Ciudad de Panamá, República de Panamá</p>
                    <p className="mt-2">Última actualización: Julio 2021</p>
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
