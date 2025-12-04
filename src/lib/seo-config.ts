/**
 * Configuración centralizada de SEO para CPT-SOFT
 * Facilita actualizar metadatos y evitar duplicados
 */

export const seoConfig = {
  siteName: 'CPT-SOFT',
  siteUrl: 'https://cpt-soft.com', // Cambiar por tu dominio real
  description: 'CPT-SOFT es la solución ERP todo en uno que integra ventas, finanzas, operaciones y recursos humanos. Optimiza tu negocio con nuestra plataforma inteligente.',
  defaultImage: '/img/logo_icono_negro.svg',
  locale: 'es_SV',
  
  // Palabras clave principales
  keywords: {
    general: 'ERP, gestión empresarial, software empresarial, solución integral, automatización',
    services: 'ERP, CRM, planilla, reportes, gestión de cobros, help-desk, soporte técnico',
  },

  // URLs de las páginas clave
  pages: {
    home: {
      title: 'CPT-SOFT | Solución ERP Empresarial Integral',
      description: 'CPT-SOFT integra ventas, finanzas, operaciones y recursos humanos en una única plataforma. Toma decisiones precisas más rápido.',
      keywords: 'ERP, gestión empresarial, software, solución integral',
    },
    erp: {
      title: 'ERP CPT-SOFT | Sistema de Gestión Empresarial Completo',
      description: 'Gestiona ventas, inventario, finanzas y operaciones con nuestro ERP integral. Automatiza procesos y toma mejores decisiones.',
      keywords: 'ERP, gestión empresarial, inventario, ventas, finanzas',
    },
    crm: {
      title: 'CRM CPT-SOFT | Gestión de Relaciones con Clientes',
      description: 'Gestiona tus clientes, ventas y oportunidades con nuestro CRM inteligente. Mejora la satisfacción y aumenta ingresos.',
      keywords: 'CRM, gestión de clientes, relaciones comerciales, oportunidades de venta',
    },
    planilla: {
      title: 'Planilla Electrónica CPT-SOFT | Gestión de Nómina Digital',
      description: 'Gestiona nómina, impuestos y beneficios de empleados automáticamente. Cumple normativas laborales con facilidad.',
      keywords: 'planilla, nómina, recursos humanos, gestión salarial, impuestos',
    },
    reportes: {
      title: 'Reportes CPT-SOFT | Análisis de Datos Empresariales',
      description: 'Genera reportes detallados y dashboards interactivos. Analiza datos en tiempo real para tomar decisiones informadas.',
      keywords: 'reportes, análisis, dashboard, business intelligence, data',
    },
    gestionCobros: {
      title: 'Gestión de Cobros CPT-SOFT | Control de Cartera',
      description: 'Controla tus cuentas por cobrar, seguimiento de clientes morosos y automatiza procesos de cobranza.',
      keywords: 'gestión de cobros, cartera, cuentas por cobrar, cobranza',
    },
    contacto: {
      title: 'Contacto CPT-SOFT | ¿Necesitas Ayuda?',
      description: 'Contáctanos para conocer cómo CPT-SOFT puede transformar tu negocio. Estamos aquí para ayudarte.',
      keywords: 'contacto, soporte, asesoría, consultoría',
    },
    quienesSomos: {
      title: 'Quiénes Somos | CPT-SOFT',
      description: 'Conoce a CPT-SOFT, líderes en soluciones ERP empresariales. Más de años de experiencia transformando negocios.',
      keywords: 'sobre nosotros, empresa, quiénes somos, historia',
    },
  } as const,

  // Configuración de redes sociales
  social: {
    twitter: '@CPT_SOFT',
    facebook: 'CPT-SOFT',
    linkedin: 'cpt-soft',
  },
};

export type PageKey = keyof typeof seoConfig.pages;
