import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo-helpers';

export const metadata: Metadata = generatePageMetadata('crm');

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
