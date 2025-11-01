import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import ProductShowcase from '@/components/sections/product-showcase';
import ClientTestimonials from '@/components/sections/client-testimonials';
import Pricing from '@/components/sections/pricing';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <ClientTestimonials />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
