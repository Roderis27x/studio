import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cpt-soft.com'; // Cambia por tu dominio real

  // Páginas principales del sitio
  const pages = [
    '',
    '/quienes-somos',
    '/contacto',
    '/politica-privacidad',
    '/terminos-condiciones',
  ];

  // Módulos/Servicios - Altamente relevantes para SEO
  const modules = [
    '/erp',
    '/crm',
    '/planilla',
    '/reportes',
    '/gestion-de-cobros',
    '/alquiler-de-nube',
    '/desarrollos-a-la-medida',
    '/consultoria-implementacion',
    '/soporte-tecnico',
    '/help-desk',
    '/prestamos',
    '/carreras',
  ];

  // Combinar todas las rutas
  const allRoutes = [...pages, ...modules];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.8 : 0.9,
  }));
}
