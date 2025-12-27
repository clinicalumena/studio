'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Bot, Briefcase, Layers } from 'lucide-react';
import { motion } from 'framer-motion';


const iconVariants = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
});

export function HeroSection() {

  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 min-h-screen grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Columna Izquierda: Texto y CTA */}
        <div className="z-10 flex flex-col justify-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">Agencia de Marketing Digital en Argentina</div>
            <h1 className="font-headline text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Tu Agencia de Marketing que va más a fondo.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              Somos la agencia de marketing online que tu negocio necesita. Te damos la estrategia, la estética y la precisión de un equipo que cumple con SEO, IA y Automatizaciones.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-primary/40 rounded-full px-8 py-6 text-lg">
                <Link href="#contacto">Pedí una consultoría gratis</Link>
            </Button>
            <p className="text-sm text-muted-foreground max-w-[200px]">Dejanos tu consulta y te damos 30 minutos sin cargo.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-foreground"
          >
             <Card className="bg-background/50 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Layers className="h-8 w-8 text-primary"/>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary">30+</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Servicios de SEO, IA y Automatización.</p>
                    </div>
                </CardContent>
             </Card>
             <Card className="bg-background/50 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="h-8 w-8 text-accent"/>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-accent">150+</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Proyectos impulsados en Argentina.</p>
                    </div>
                </CardContent>
             </Card>
          </motion.div>
        </div>

        {/* Columna Derecha: Iconos 3D */}
        <div className="relative h-full w-full hidden lg:flex items-center justify-center">
            <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="absolute top-1/4 left-1/4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shadow-lg"
              >
              <Bot className="h-12 w-12 text-primary" strokeWidth={1.5}/>
            </motion.div>
            <motion.div
                variants={iconVariants(7)}
                initial="initial"
                animate="animate"
                className="absolute top-1/2 right-1/4 w-28 h-28 bg-accent/10 rounded-full flex items-center justify-center shadow-xl"
              >
              <Award className="h-14 w-14 text-accent" strokeWidth={1.5}/>
            </motion.div>
            <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-secondary/10 border rounded-full flex items-center justify-center shadow-md"
              >
              <Layers className="h-10 w-10 text-foreground/80" strokeWidth={1.5}/>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
