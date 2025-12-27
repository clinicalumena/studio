'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { services } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Por favor, ingresá tu nombre completo.' }),
  email: z.string().email({ message: 'El formato del email no parece válido.' }),
  phone: z.string().min(10, { message: 'Por favor, ingresá un número de teléfono válido.' }),
  company: z.string().optional(),
  serviceOfInterest: z.string({ required_error: 'Por favor, seleccioná un servicio de interés.' }),
  location: z.string({ required_error: 'Por favor, seleccioná tu ubicación.' }),
  projectDetails: z.string().min(30, { message: 'Contanos un poco más, al menos 30 caracteres.' }),
  budget: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const locations = ['Buenos Aires', 'Córdoba', 'Neuquén', 'Rosario', 'Mendoza', 'Otra provincia'];
const budgets = ['< $500.000', '$500.000 - $1.000.000', '$1.000.000 - $3.000.000', '> $3.000.000', 'Prefiero discutirlo'];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const mapImage = PlaceHolderImages.find((p) => p.id === 'map');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceOfInterest: undefined,
      location: undefined,
      projectDetails: '',
      budget: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast({
      title: '¡Mensaje Enviado!',
      description: `Gracias por tu interés, ${data.name}. Nos vamos a poner en contacto con vos a la brevedad.`,
    });
    form.reset();
  };

  return (
    <motion.section 
      id="contacto" 
      className="py-24 md:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-bold text-4xl md:text-5xl">
            Contactanos
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground md:text-lg">
            ¿Estás listo para empezar? Contanos tu idea y la hacemos realidad.
          </p>
        </div>
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-10">
             <Card className="bg-card border transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                    <CardTitle className="font-headline font-bold">Info de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" strokeWidth={2}/>
                        <span>Ambrosio Olmos 782<br/>X5000, Córdoba, Argentina</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={2}/>
                        <a href="mailto:hola@manyadigital.ar" className="transition-colors duration-300 ease-in-out hover:text-primary">hola@manyadigital.ar</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary flex-shrink-0" strokeWidth={2}/>
                        <a href="tel:+541158578004" className="transition-colors duration-300 ease-in-out hover:text-primary">+54 11 5857-8004</a>
                    </div>
                </CardContent>
             </Card>
             <div className="overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/20">
                {mapImage && <Image src={mapImage.imageUrl} alt="Ubicación" width={600} height={450} className="w-full" data-ai-hint={mapImage.imageHint} />}
             </div>
          </div>

          <div className="lg:col-span-3">
            <Card className="p-6 sm:p-8 md:p-10 bg-card border transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre completo*</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: Juan Pérez" {...field} />
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
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: juan.perez@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono / WhatsApp*</FormLabel>
                          <FormControl>
                            <Input placeholder="Ej: 11 2345 6789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="serviceOfInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Qué servicio te interesa?*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Elegí un servicio" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.slug} value={service.title}>{service.title}</SelectItem>
                              ))}
                              <SelectItem value="No estoy seguro">No estoy seguro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Dónde estás ubicado?*</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Seleccioná una ubicación" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {locations.map((loc) => (
                                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="projectDetails"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contanos sobre tu proyecto*</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describí tu negocio, tus objetivos y los desafíos que enfrentás." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Presupuesto estimado (opcional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Seleccioná un rango de presupuesto" /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgets.map((b) => (
                              <SelectItem key={b} value={b}>{b}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent font-bold text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-primary/40 rounded-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                         Enviando...
                        </>
                    ) : (
                        'Enviar consulta'
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
