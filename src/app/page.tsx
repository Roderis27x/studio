import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import ProductShowcase from '@/components/sections/product-showcase';
import SolutionsFinder from '@/components/sections/solutions-finder';
import ClientTestimonials from '@/components/sections/client-testimonials';
import ResourceLibrary from '@/components/sections/resource-library';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <SolutionsFinder />
        <ClientTestimonials />
        <ResourceLibrary />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
