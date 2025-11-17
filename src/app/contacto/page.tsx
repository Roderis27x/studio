'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from 'lucide-react';
import { WazeIcon } from '@/components/icons/waze-icon';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FadeIn from '@/components/fade-in';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

const ContactInfo = ({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) => (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
        <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            {icon}
        </div>
        <div className="flex-grow">
            <h4 className="font-bold text-foreground text-lg">{title}</h4>
            {href ? (
                 <a href={href} className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 group/link">
                    {value}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                 </a>
            ) : (
                <p className="text-muted-foreground font-medium">{value}</p>
            )}
        </div>
    </div>
);

export default function ContactoPage() {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Mensaje Enviado",
            description: "Gracias por contactarnos. Nos pondremos en contacto con usted en breve.",
        });
        form.reset();
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                <FadeIn>
                    <section className="bg-gradient-to-br from-primary/5 via-white to-primary/5 py-20 md:py-28">
                        <div className="container mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto">
                                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                                    <p className="text-primary font-semibold text-sm">¿Necesita Ayuda?</p>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight">
                                    Estamos para Ayudarle
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Contáctenos para conocer más sobre nuestras soluciones y cómo podemos transformar su negocio.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section className="py-20 md:py-28 bg-background">
                        <div className="container mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Información de Contacto</h2>
                                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <ContactInfo 
                                            icon={<MapPin className="w-6 h-6"/>}
                                            title="Nuestra Oficina"
                                            value="Calle Samuel Lewis, Panama Business Center, Piso 16"
                                        />
                                        <div className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                                            <div className="flex-shrink-0 bg-gradient-to-br from-primary to-primary/80 text-white rounded-full h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Phone className="w-6 h-6"/>
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-foreground text-lg">Teléfonos</h4>
                                                <div className="flex flex-col gap-1">
                                                    <a href="tel:+5073992613" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 group/link">
                                                        +507 399-2613
                                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                    </a>
                                                    <a href="tel:+5073992614" className="text-muted-foreground hover:text-primary transition-colors font-medium flex items-center gap-1 group/link">
                                                        +507 399-2614
                                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <ContactInfo 
                                            icon={<Mail className="w-6 h-6"/>}
                                            title="Email"
                                            value="info@cpt-soft.com"
                                            href="mailto:info@cpt-soft.com"
                                        />
                                        <ContactInfo 
                                            icon={<Mail className="w-6 h-6"/>}
                                            title="Email Ventas"
                                            value="ventas@cpt-soft.com"
                                            href="mailto:ventas@cpt-soft.com"
                                        />
                                        <ContactInfo 
                                            icon={<MessageCircle className="w-6 h-6"/>}
                                            title="WhatsApp"
                                                value="+507 6356-0396"
                                                href="https://wa.me/50763560396?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden border border-primary/10 shadow-xl h-96 mt-8 flex flex-col">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.82494084715!2d-79.51903132537288!3d8.988250889626286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8fd97fe0b21%3A0xe7f21e417c2eea01!2sPanama%20Business%20Tower%20-%20Obarrio!5e0!3m2!1ses-419!2spa!4v1762876300413!5m2!1ses-419!2spa"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            title="Ubicación de CPT-SOFT"
                                            className="flex-grow"
                                        ></iframe>
                                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 border-t border-primary/10 flex gap-2">
                                            <a
                                                href="https://maps.google.com/?q=8.988250889626286,-79.51903132537288"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-white hover:bg-primary hover:text-white text-primary border border-primary/20 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
                                            >
                                                <MapPin className="w-4 h-4" />
                                                Google Maps
                                            </a>
                                            <a
                                                href="https://waze.com/ul?ll=8.988250889626286,-79.51903132537288&navigate=yes"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500/20 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
                                            >
                                                <WazeIcon className="w-4 h-4" />
                                                Waze
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-card to-card/50 p-8 md:p-10 rounded-2xl shadow-2xl border border-primary/10 backdrop-blur-sm">
                                    <div className="mb-8">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Envíenos un Mensaje</h2>
                                        <p className="text-muted-foreground">Responderemos en breve</p>
                                    </div>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground font-semibold">Nombre Completo</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="John Doe" 
                                                                className="bg-background/50 border-primary/20 focus:border-primary focus:bg-background transition-all"
                                                                {...field} 
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground font-semibold">Correo Electrónico</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="su@email.com" 
                                                                className="bg-background/50 border-primary/20 focus:border-primary focus:bg-background transition-all"
                                                                {...field} 
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="subject"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground font-semibold">Asunto</FormLabel>
                                                        <FormControl>
                                                            <Input 
                                                                placeholder="Ej: Consulta sobre ERP" 
                                                                className="bg-background/50 border-primary/20 focus:border-primary focus:bg-background transition-all"
                                                                {...field} 
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-foreground font-semibold">Mensaje</FormLabel>
                                                        <FormControl>
                                                            <Textarea 
                                                                placeholder="Escriba su mensaje aquí..." 
                                                                className="min-h-[150px] bg-background/50 border-primary/20 focus:border-primary focus:bg-background transition-all"
                                                                {...field} 
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button 
                                                type="submit" 
                                                size="lg" 
                                                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold"
                                            >
                                                Enviar Mensaje
                                                <Send className="ml-2 h-5 w-5" />
                                            </Button>
                                        </form>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>
            </main>
            <Footer />
        </div>
    );
}
