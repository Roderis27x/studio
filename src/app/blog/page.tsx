'use client';

import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, type BlogPost } from '@/lib/blog-data';
import { useState } from 'react';

const FeaturedPost = ({ post }: { post: BlogPost }) => (
  <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
    <div className="grid md:grid-cols-2 gap-0">
      <div className="relative h-64 md:h-full bg-slate-200">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-8 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            {post.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Destacado
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <Link href={`/blog/${post.id}`}>
          <Button className="w-fit">
            Leer artículo completo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </div>
  </Card>
);

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Card className="overflow-hidden border-slate-200 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
    <div className="relative h-48 bg-slate-200">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <Badge className="bg-primary/40 text-white hover:bg-primary/50 border-primary/30 backdrop-blur-sm">
          {post.category}
        </Badge>
      </div>
    </div>
    <CardHeader className="flex-grow">
      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </CardTitle>
      <CardDescription className="text-base line-clamp-3 mt-2">
        {post.excerpt}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{post.readTime}</span>
        </div>
      </div>
      <Link href={`/blog/${post.id}`}>
        <div className="flex items-center justify-between text-primary font-medium text-sm hover:gap-2 transition-all cursor-pointer no-underline">
          <span>Leer más</span>
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </CardContent>
  </Card>
);

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  const categories = [...new Set(blogPosts.map(post => post.category))];

  // Mostrar featured post solo si no hay filtro seleccionado
  const showFeaturedPost = selectedCategory === null;

  // Filtrar posts según categoría seleccionada
  let filteredPosts: BlogPost[] = [];
  if (selectedCategory === null) {
    filteredPosts = regularPosts;
  } else {
    filteredPosts = [
      // Si el destacado coincide con la categoría, inclúyelo
      ...(featuredPost && featuredPost.category === selectedCategory ? [featuredPost] : []),
      ...regularPosts.filter(post => post.category === selectedCategory)
    ];
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <FadeIn>
          <section className="relative bg-gradient-to-br from-white via-slate-50 to-white py-20 md:py-24 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 text-sm font-semibold border border-primary/20">
                  <Tag className="h-4 w-4" />
                  Blog & Recursos
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
                  Insights y Tendencias
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explora artículos, guías y consejos sobre gestión empresarial, tecnología ERP y transformación digital.
                </p>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"} 
                  className="rounded-full"
                  onClick={() => setSelectedCategory(null)}
                >
                  Todos
                </Button>
                {categories.map((category) => (
                  <Button 
                    key={category} 
                    variant={selectedCategory === category ? "default" : "outline"} 
                    className="rounded-full"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Featured Post */}
        {featuredPost && showFeaturedPost && (
          <FadeIn>
            <section className="py-12 bg-white">
              <div className="container mx-auto px-6">
                <FeaturedPost post={featuredPost} />
              </div>
            </section>
          </FadeIn>
        )}

        {/* Blog Grid */}
        <FadeIn>
          <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                  Artículos Recientes
                </h2>
                <p className="text-lg text-muted-foreground">
                  Mantente actualizado con las últimas tendencias y mejores prácticas
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Newsletter CTA */}
        <FadeIn>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                      Suscríbete a Nuestro Newsletter
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Recibe los últimos artículos, guías y recursos directamente en tu correo
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                      <input
                        type="email"
                        placeholder="tu@email.com"
                        className="flex h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button size="lg" className="h-12 rounded-xl">
                        Suscribirse
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
