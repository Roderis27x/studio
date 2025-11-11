import React from 'react';
import { BarChart3, Users, Briefcase, DollarSign, Settings, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-card p-6 rounded-lg border transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    <div className="bg-primary text-primary-foreground rounded-full p-3 w-12 h-12 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Gestión Financiera',
      description: 'Automatiza sus procesos contables y obtenga una vision en tiempo real de su estado financiero.',
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: 'Cadena de Suministro e Inventario',
      description: 'Gestione oportunamente sus compras optimizando los niveles de inventario y agilizando las operaciones del almacén.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'CRM y Ventas',
      description: 'Obten una vision 360 de sus clientes y gestione sus procesos de ventas efectivamente.',
    },
    {
        icon: <DollarSign className="h-6 w-6" />,
        title: 'Recursos Humanos',
        description: 'Simplifique la nómina, gestiona los datos de los colaboradores y agilice sus procesos de planilla desde una solución integral.',
    },
    {
        icon: <Settings className="h-6 w-6" />,
        title: 'Módulos Personalizables',
        description: 'Adapte el ERP a sus necesidades exactas con módulos flexibles y potentes opciones de integración.',
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: 'Seguridad de Nivel Empresarial',
        description: 'Protege los datos sensibles de su negocio con sólidas funciones de seguridad y estándares de cumplimiento.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Funcionalidades Potentes para Cada Departamento</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            CPT-SOFT proporciona un conjunto completo de herramientas para gestionar y hacer crecer todo tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
