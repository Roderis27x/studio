/**
 * Funciones auxiliares para generar metadatos SEO
 * Centraliza la lógica y asegura consistencia en todo el sitio
 */

import { Metadata } from 'next';
import { seoConfig, PageKey } from './seo-config';

export function generatePageMetadata(pageKey: PageKey): Metadata {
  const page = seoConfig.pages[pageKey];
  const baseUrl = seoConfig.siteUrl;
  const canonicalUrl = new URL(pageKey === 'home' ? '/' : `/${pageKey}`, baseUrl);

  if (!page) {
    throw new Error(`Page configuration not found for: ${pageKey}`);
  }

  return {
    metadataBase: new URL(baseUrl),
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    authors: [{ name: 'CPT-SOFT' }],
    
    // URL canónica para evitar duplicados
    alternates: {
      canonical: canonicalUrl.toString(),
    },

    // OpenGraph para redes sociales
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url: canonicalUrl.toString(),
      siteName: seoConfig.siteName,
      title: page.title,
      description: page.description,
      images: [
        {
          url: seoConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [seoConfig.defaultImage],
      creator: seoConfig.social.twitter,
    },

    // SEO Básico
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    viewport: 'width=device-width, initial-scale=1',
    icons: {
      icon: '/img/logo_icono_negro.svg',
      apple: '/img/logo_icono_negro.svg',
    },
  };
}

/**
 * Genera JSON-LD Schema para mejorar visibilidad en buscadores
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CPT-SOFT',
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    description: seoConfig.description,
    sameAs: [
      `https://twitter.com/${seoConfig.social.twitter}`,
      `https://facebook.com/${seoConfig.social.facebook}`,
      `https://linkedin.com/company/${seoConfig.social.linkedin}`,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+503-XXXX-XXXX', // Cambiar por tu número
      contactType: 'Customer Support',
    },
  };
}

/**
 * Genera JSON-LD Schema para Software Application
 */
export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'CPT-SOFT ERP',
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0', // Cambiar si aplica
      priceCurrency: 'USD',
    },
  };
}

/**
 * Genera JSON-LD para Breadcrumb (para migas de pan en SERP)
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
