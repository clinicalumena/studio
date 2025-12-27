
'use client';

import { services, serviceDetails } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { motion } from 'framer-motion';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((p) => p.slug === params.slug);
  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }
  return {
    title: service.meta.title,
    description: service.meta.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceDetails.find((p) => p.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 text-center md:py-32"
      >
        <div className="container relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="font-headline bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            {service.hero.h1}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            {service.meta.description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} 
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {service.hero.subservices.map(sub => <Badge key={sub} variant="secondary" className="px-4 py-2 text-sm">{sub}</Badge>)}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA 1 */}
      <section className="py-20 md:py-24">
        <div className="container text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">{service.cta1.h2}</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{service.cta1.p}</p>
            <Button asChild size="lg" className="mt-8 rounded-full">
                <Link href="/contacto">{service.cta1.button}</Link>
            </Button>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 md:py-24 bg-muted/20">
          <div className="container">
              <div className="text-center mb-12">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold">{service.why.h3}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.why.points.map(point => (
                      <Card key={point.title} className="text-center border-0 shadow-none bg-transparent">
                          <CardHeader>
                            <div className="flex justify-center mb-4">
                               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                  <CheckCircle className="h-8 w-8" />
                               </div>
                            </div>
                              <CardTitle className="font-headline">{point.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{point.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA 2 */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container text-center">
              <h2 className="font-headline text-4xl md:text-5xl font-bold">{service.cta2.h2}</h2>
              <Button asChild size="lg" variant="outline" className="mt-8 bg-primary-foreground text-primary font-bold rounded-full px-8 py-6 text-lg">
                  <Link href="/contacto">{service.cta2.button}</Link>
              </Button>
          </div>
      </section>

      {/* How we help */}
      <section className="py-20 md:py-24">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h3 className="font-headline text-3xl md:text-4xl font-bold">{service.howWeHelp.h3}</h3>
                      <p className="mt-6 text-lg text-muted-foreground">{service.howWeHelp.p}</p>
                      <ul className="mt-6 space-y-4">
                          {service.howWeHelp.points.map(point => (
                              <li key={point} className="flex items-start gap-3">
                                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                  <span>{point}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div>
                      <Image src={PlaceHolderImages.find(p => p.id === 'service-web')?.imageUrl || ''} alt={service.howWeHelp.h3} width={600} height={400} className="rounded-2xl shadow-xl" data-ai-hint="digital strategy" />
                  </div>
              </div>
          </div>
      </section>

      {/* Influencing Factors */}
      <section className="py-20 md:py-24 bg-muted/20">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1">
                       <Image src={PlaceHolderImages.find(p => p.id === 'service-seo')?.imageUrl || ''} alt={service.factors.h3} width={600} height={400} className="rounded-2xl shadow-xl" data-ai-hint="analytics dashboard" />
                  </div>
                  <div className="order-1 md:order-2">
                      <h3 className="font-headline text-3xl md:text-4xl font-bold">{service.factors.h3}</h3>
                      <p className="mt-6 text-lg text-muted-foreground">{service.factors.p}</p>
                      <ul className="mt-6 space-y-4">
                          {service.factors.points.map(point => (
                              <li key={point} className="flex items-start gap-3">
                                  <CheckCircle className="h-6 w-6 text-primary mt-1" />
                                  <span>{point}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      
        {/* Can I rank first? */}
        <section className="py-20 md:py-24">
          <div className="container">
              <div className="text-center mb-12">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold">{service.rank.h3}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {service.rank.points.map(point => (
                      <Card key={point.title} className="text-center">
                          <CardHeader>
                            <div className="flex justify-center mb-4">
                               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                  <CheckCircle className="h-8 w-8" />
                               </div>
                            </div>
                              <CardTitle className="font-headline">{point.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{point.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Position yourself */}
      <section className="py-20 md:py-24 bg-muted/20">
          <div className="container">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h3 className="font-headline text-3xl md:text-4xl font-bold">{service.position.h3}</h3>
                      <p className="mt-6 text-lg text-muted-foreground">{service.position.p}</p>
                      <Button asChild size="lg" className="mt-8 group">
                          <Link href="/contacto">
                            {service.position.button}
                            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                      </Button>
                  </div>
                  <div>
                      <Image src={PlaceHolderImages.find(p => p.id === 'argentina-map')?.imageUrl || ''} alt={service.position.h3} width={600} height={400} className="rounded-2xl" data-ai-hint="argentina map" />
                  </div>
              </div>
          </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h4 className="font-headline text-3xl md:text-4xl font-bold">Preguntas Frecuentes sobre {service.title}</h4>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="mb-2">
                <AccordionTrigger className="text-left font-semibold text-lg p-4 bg-muted/30 rounded-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
