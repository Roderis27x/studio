import Logo from '@/components/logo';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  const footerLinks = {
    'Software': [
      'ERP Core',
      'Planilla',
      'Reportes',
      'Préstamos',
      'Gestión de cobros',
      'Perfil',
      'CRM',
      'Help Desk',
    ],
  'Compañía': ['Quiénes Somos', 'Carreras', 'Contacto', 'Blog'],
    'Legal': ['Política de Privacidad', 'Términos de Servicio'],
  };

  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Logo className="text-3xl" />
            <p className="mt-4 text-muted-foreground max-w-xs">Es la solución que optimiza e integra su negocio.</p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="https://www.instagram.com/cptsoft507/">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </SocialIcon>
              <SocialIcon href="https://pa.linkedin.com/company/cpt-soft">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/people/Cpt-Soft/100065572566401/#">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </SocialIcon>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-foreground tracking-wider uppercase">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href={
                        link === 'Quiénes Somos' ? '/quienes-somos'
                        : link === 'Carreras' ? '/carreras'
                        : link === 'Contacto' ? '/contacto'
                        : link === 'Política de Privacidad' ? '/politica-privacidad'
                        : link === 'Términos de Servicio' ? '/terminos-condiciones'
                        : '#'
                      }
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CPT-SOFT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
