import type {Metadata, Viewport} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "@/components/chatbot";
import { ChatbotProvider } from "@/context/ChatbotContext";
import { seoConfig } from '@/lib/seo-config';
import { generateOrganizationSchema } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: 'CPT-SOFT | Solución ERP Empresarial Integral',
  description: seoConfig.description,
  keywords: `${seoConfig.keywords.general}, ${seoConfig.keywords.services}`,
  authors: [{ name: 'CPT-SOFT' }],
  icons: {
    icon: '/img/logo_icono_negro.svg',
    apple: '/img/logo_icono_negro.svg',
  },
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: 'CPT-SOFT | Solución ERP Empresarial Integral',
    description: seoConfig.description,
    images: [
      {
        url: seoConfig.defaultImage,
        width: 1200,
        height: 630,
        alt: 'CPT-SOFT - Solución ERP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT-SOFT | Solución ERP Empresarial Integral',
    description: seoConfig.description,
    images: [seoConfig.defaultImage],
    creator: seoConfig.social.twitter,
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Favicon dinámico para modo oscuro/claro */}
        <link rel="icon" type="image/svg+xml" href="/img/logo_icono_negro.svg" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/svg+xml" href="/img/logo_icono_blanco.svg" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#2563eb" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e1b4b" media="(prefers-color-scheme: dark)" />
        
        {/* Schema.org JSON-LD para Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <ChatbotProvider>
          {children}
          <Toaster />
          <Chatbot />
        </ChatbotProvider>
      </body>
    </html>
  );
}
