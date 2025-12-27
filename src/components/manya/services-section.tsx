'use client';
import {
  TrendingUp,
  Share2,
  PencilRuler,
  MousePointerClick,
  Component,
  MoveRight,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  TrendingUp,
  PencilRuler,
  Share2,
  MousePointerClick,
  Users,
  Component,
};


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2 className="font-headline text-4xl font-bold md:text-5xl">
            Soluciones de nuestra Agencia de Marketing
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Nuestra agencia de marketing digital no cree en soluciones universales. Vos traés el desafío,
            nosotros armamos el mix de herramientas que realmente funciona para tu negocio en Argentina.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 py-4">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="h-full p-1">
                      <Link href={`/servicios#${service.slug}`} className="block h-full group">
                        <Card className="h-full transform transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 bg-card border flex flex-col justify-between group-hover:border-primary">
                          <CardHeader className='p-8'>
                            {Icon && (
                              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:text-accent">
                                <Icon className="h-8 w-8" strokeWidth={2} />
                              </div>
                            )}
                            <CardTitle className="text-xl font-bold font-headline transition-colors duration-300 group-hover:text-primary">
                              {service.title}
                            </CardTitle>
                             <CardDescription className="pt-4 text-base text-muted-foreground">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
        
        <motion.div
            className='mt-16 text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
            <Button asChild size="lg" variant="outline" className="group rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:bg-primary hover:text-primary-foreground text-lg">
            <Link href="/servicios">
                Ver todos los servicios
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
