import Logo from '@/components/logo';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
    {children}
  </a>
);

const Footer: React.FC = () => {
  const footerLinks = {
    'Software': ['Características', 'Precios', 'Integraciones', 'Actualizaciones'],
    'Compañía': ['Sobre Nosotros', 'Carreras', 'Contacto', 'Blog'],
    'Legal': ['Política de Privacidad', 'Términos de Servicio', 'Seguridad'],
  };

  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Logo className="text-3xl" />
            <p className="mt-4 text-muted-foreground max-w-xs">Es la solución que optimiza e integra su negocio.</p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon href="#">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </SocialIcon>
              <SocialIcon href="#">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </SocialIcon>
              <SocialIcon href="#">
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
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{link}</a>
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
