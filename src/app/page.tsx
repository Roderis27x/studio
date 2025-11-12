import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import ProductShowcase from '@/components/sections/product-showcase';
import ClientTestimonials from '@/components/sections/client-testimonials';
import FAQ from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/layout/footer';
import Chatbot from '@/components/chatbot';
import FadeIn from '@/components/fade-in';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <ProductShowcase />
        </FadeIn>
        <FadeIn>
          <ClientTestimonials />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
        <FadeIn>
          <ContactSection />
        </FadeIn>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
