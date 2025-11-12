import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6">
                  <Search className="w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
                  Artículo no encontrado
                </h1>
                <p className="text-lg text-muted-foreground">
                  Lo sentimos, no pudimos encontrar el artículo que estás buscando. 
                  Es posible que haya sido eliminado o que la URL sea incorrecta.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <Button size="lg" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver al Blog
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ir al Inicio
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
