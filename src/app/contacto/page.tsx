
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-primary/10 text-primary rounded-full h-12 w-12 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-foreground">{title}</h4>
            {href ? (
                 <a href={href} className="text-muted-foreground hover:text-primary transition-colors">{value}</a>
            ) : (
                <p className="text-muted-foreground">{value}</p>
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
                    <section className="bg-white py-20 md:py-28">
                        <div className="container mx-auto px-6">
                            <div className="text-center max-w-3xl mx-auto">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                                    Contáctenos
                                </h1>
                                <p className="mt-4 text-lg text-muted-foreground">
                                    Estamos aquí para ayudarle. Envíenos un mensaje o visítenos.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                <FadeIn>
                    <section className="pb-20 md:pb-28">
                        <div className="container mx-auto px-6">
                            <div className="grid lg:grid-cols-2 gap-16">
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-bold text-foreground">Información de Contacto</h2>
                                    <div className="space-y-6">
                                        <ContactInfo 
                                            icon={<MapPin className="w-6 h-6"/>}
                                            title="Nuestra Oficina"
                                            value="C. 50, Panamá, Panama"
                                        />
                                        <ContactInfo 
                                            icon={<Phone className="w-6 h-6"/>}
                                            title="Teléfono"
                                            value="+507 263-6363"
                                            href="tel:+5072636363"
                                        />
                                        <ContactInfo 
                                            icon={<Mail className="w-6 h-6"/>}
                                            title="Email"
                                            value="info@cpt-soft.com"
                                            href="mailto:info@cpt-soft.com"
                                        />
                                    </div>
                                    <div className="rounded-lg overflow-hidden border shadow-lg h-96">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.648174488334!2d-79.5160888852136!3d8.99428579357497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca918a2e5b7cb%3A0x2ad210b42c4b5c77!2sCalle%2050%2C%20Panam%C3%A1!5e0!3m2!1sen!2spa!4v1628886938944!5m2!1sen!2spa"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            title="Ubicación de CPT-SOFT"
                                        ></iframe>
                                    </div>
                                </div>

                                <div className="bg-card p-8 rounded-2xl shadow-xl border">
                                    <h2 className="text-3xl font-bold text-foreground mb-6">Envíenos un Mensaje</h2>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nombre Completo</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John Doe" {...field} />
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
                                                        <FormLabel>Correo Electrónico</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="su@email.com" {...field} />
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
                                                        <FormLabel>Asunto</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Ej: Consulta sobre ERP" {...field} />
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
                                                        <FormLabel>Mensaje</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder="Escriba su mensaje aquí..." className="min-h-[150px]" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button type="submit" size="lg" className="w-full">
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
