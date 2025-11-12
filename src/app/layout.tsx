import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Chatbot from "@/components/chatbot";

export const metadata: Metadata = {
  title: 'CPT-SOFT | Solución ERP Empresarial Integral',
  description: 'CPT-SOFT es la solución ERP todo en uno que integra ventas, finanzas, operaciones y recursos humanos. Optimiza tu negocio con nuestra plataforma inteligente.',
  keywords: 'ERP, gestión empresarial, software, solución integral, planilla, reportes, CRM',
  authors: [{ name: 'CPT-SOFT' }],
  icons: {
    icon: '/img/logo_icono.svg',
    apple: '/img/logo_icono.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_SV',
    url: 'https://cpt-soft-pagina-demo.vercel.app',
    siteName: 'CPT-SOFT',
    title: 'CPT-SOFT | Solución ERP Empresarial Integral',
    description: 'CPT-SOFT es la solución ERP todo en uno que integra ventas, finanzas, operaciones y recursos humanos. Optimiza tu negocio con nuestra plataforma inteligente.',
    images: [
      {
        url: '/img/logo_icono.svg',
        width: 1200,
        height: 630,
        alt: 'CPT-SOFT - Solución ERP',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPT-SOFT | Solución ERP Empresarial Integral',
    description: 'CPT-SOFT es la solución ERP todo en uno que integra ventas, finanzas, operaciones y recursos humanos.',
    images: ['/img/logo_icono.svg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/img/logo_icono.svg" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Chatbot />
      </body>
    </html>
  );
}
