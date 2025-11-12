import React from 'react';
import { BarChart3, Users, Briefcase, DollarSign, Settings, User, Banknote } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
      </div>
      <CardTitle className="text-xl mt-4">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base text-muted-foreground leading-relaxed">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
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
        icon: <User className="h-6 w-6" />,
        title: 'Recursos Humanos',
        description: 'Simplifique la nómina, gestiona los datos de los colaboradores y agilice sus procesos de planilla desde una solución integral.',
    },
    {
        icon: <Settings className="h-6 w-6" />,
        title: 'Módulos Personalizables',
        description: 'Adapte el ERP a sus necesidades exactas con módulos flexibles y potentes opciones de integración.',
    },
    {
        icon: <Banknote className="h-6 w-6" />,
        title: 'Préstamos y Financiamiento',
        description: 'Gestione solicitudes de préstamos, monitoreo de plazos y financiamiento con control integral de créditos.',
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
            Características
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Funcionalidades Potentes para Cada Departamento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CPT-SOFT proporciona un conjunto completo de herramientas para gestionar y hacer crecer todo tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
