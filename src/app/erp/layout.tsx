import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';

export const metadata: Metadata = generatePageMetadata('erp');

export default function ERPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
