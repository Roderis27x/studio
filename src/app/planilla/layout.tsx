import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';

export const metadata: Metadata = generatePageMetadata('planilla');

export default function PlanillaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
