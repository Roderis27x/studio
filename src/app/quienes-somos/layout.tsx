import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';

export const metadata: Metadata = generatePageMetadata('quienesSomos');

export default function QuienesSomosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
