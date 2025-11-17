'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ChevronRight, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { getBlogPost, getRelatedPosts } from '@/lib/blog-data';

export default function BlogPostPage() {
  const params = useParams();
  const post = getBlogPost(params.id as string);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  if (!post || !post.content) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id, post.category);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow" ref={containerRef}>
        {/* Hero Section with Parallax */}
        <FadeIn>
          <section className="relative h-[70vh] min-h-[600px] max-h-[800px] overflow-hidden">
            <motion.div 
              className="absolute inset-0"
              style={{ y }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
              <motion.div
                style={{ opacity }}
                className="relative w-full h-full"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover scale-110"
                  priority
                />
              </motion.div>
            </motion.div>


            <div className="absolute inset-0 z-20 flex items-end">
              <div className="container mx-auto px-6 pb-16">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <Link href="/blog">
                    <motion.div
                      whileHover={{ x: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" className="mb-6 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Volver al Blog
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Badge className="mb-4 bg-primary text-primary-foreground shadow-lg shadow-primary/50 border border-primary/20">
                    <Zap className="w-3 h-3 mr-1" />
                      {post.category}
                    </Badge>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 max-w-4xl leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {post.title}
                  </motion.h1>
                  
                  <motion.div 
                    className="flex flex-wrap items-center gap-6 text-white/90 backdrop-blur-sm bg-white/5 p-4 rounded-2xl border border-white/10 w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div 
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <User className="h-5 w-5" />
                      <span className="font-medium">{post.author}</span>
                    </motion.div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span>{post.readTime}</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Article Content */}
        <FadeIn>
          <article className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {/* Action Buttons */}
                <motion.div 
                  className="flex justify-between items-center mb-12 pb-6 border-b border-slate-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all">
                        <Share2 className="h-4 w-4" />
                        Compartir
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="gap-2 hover:border-primary/50 hover:bg-primary/5 transition-all">
                        <Bookmark className="h-4 w-4" />
                        Guardar
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-16 relative"
                >
                  <motion.div
                    className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic pl-8 py-2">
                    {post.content.introduction}
                  </p>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-20">
                  {post.content.sections.map((section, index) => (
                    <motion.section
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        duration: 0.7, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 80
                      }}
                      className="space-y-6"
                    >
                      <motion.div
                        className="flex items-start gap-4"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-white text-xl font-bold shadow-lg shadow-primary/30"
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 20px 40px rgba(var(--primary), 0.4)"
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {index + 1}
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground flex-grow pt-2">
                          {section.title}
                        </h2>
                      </motion.div>
                      
                      {section.image && (
                        <motion.div 
                          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl my-8 group"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500"
                          />
                          <Image
                            src={section.image}
                            alt={section.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </motion.div>
                      )}
                      
                      <motion.p 
                        className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.content}
                      </motion.p>
                    </motion.section>
                  ))}
                </div>

                {/* Conclusion */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-20 pt-12 border-t-2 border-primary/20"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Conclusión</h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {post.content.conclusion}
                  </p>
                </motion.div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <FadeIn>
            <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                  className="max-w-4xl mx-auto mb-12 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-3">
                    Artículos Relacionados
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Continúa aprendiendo sobre {post.category}
                  </p>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ y: -10 }}
                    >
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group h-full">
                          <div className="relative h-48 bg-slate-200 overflow-hidden">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.4 }}
                              className="w-full h-full"
                            >
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover"
                              />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <motion.div 
                              className="absolute top-4 left-4"
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge className="bg-primary/90 backdrop-blur-sm shadow-lg">
                                {relatedPost.category}
                              </Badge>
                            </motion.div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all no-underline">
                              <span>Leer más</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </FadeIn>
        )}

        {/* CTA Section */}
        <FadeIn>
          <section className="py-20 bg-white relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(var(--primary), 0.15) 1px, transparent 0)",
                backgroundSize: "40px 40px"
              }}
              animate={{
                backgroundPosition: ["0px 0px", "40px 40px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
                  <CardContent className="p-12 text-center relative">
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
                      ¿Listo para transformar tu negocio?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Descubre cómo nuestras soluciones pueden ayudarte a alcanzar sus objetivos empresariales
                    </p>
                    <Link href="/contacto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="lg" className="text-lg px-8 shadow-lg shadow-primary/30">
                          Agenda una Consulta Gratuita
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
