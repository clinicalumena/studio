'use client';
import {
  TrendingUp,
  Globe,
  Share2,
  Users,
  Bot,
  Layers,
  Component,
  Database,
  PencilRuler,
  MousePointerClick,
  MoveRight,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const services = [
  {
    icon: PencilRuler,
    title: 'Diseño Web',
    description: 'Sitios web que convierten, diseñados para la experiencia del usuario.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Share2,
    title: 'Gestión de RRSS',
    description: 'Community management estratégico que genera engagement real.',
    span: 'col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'SEO',
    description:
      'Posicionamiento orgánico con estrategias basadas en datos e IA.',
    span: 'col-span-1',
  },
  {
    icon: MousePointerClick,
    title: 'Performance Marketing',
    description: 'Meta Ads y Google Ads optimizados con machine learning.',
    span: 'col-span-1 md:col-span-2',
  },
  {
    icon: Component,
    title: 'Automatizaciones',
    description: 'Workflows inteligentes con IA que escalan tu operación.',
    span: 'col-span-1',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna Izquierda */}
          <div className="md:col-span-1 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h2 className="font-headline text-4xl font-bold md:text-5xl">
                Soluciones a tu medida.
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                No creemos en soluciones universales. Vos traés el desafío,
                nosotros armamos el mix de herramientas que realmente funciona.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              <Button asChild size="lg" variant="default" className="group rounded-full transition-all duration-300 ease-in-out hover:scale-105 bg-primary text-primary-foreground">
                <Link href="/servicios">
                  Conocé nuestros servicios
                  <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Columna Derecha - Grilla de Servicios */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className={service.span}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <Card className="h-full transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card border border-border/50 p-6 flex flex-col justify-between">
                      <div>
                        {Icon && (
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </div>
                        )}
                        <CardTitle className="text-xl font-bold font-headline">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="pt-4 text-base text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}