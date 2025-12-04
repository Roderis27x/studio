import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';

export const metadata: Metadata = generatePageMetadata('contacto');

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
