'use client';

import { Bot, MapPin, BarChart3, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const reasons = [
  {
    icon: Bot,
    title: 'IA al servicio del marketing',
    description: 'No es moda, son resultados. Usamos IA para optimizar cada acción y potenciar tus estrategias.',
  },
  {
    icon: MapPin,
    title: 'Conocimiento local, alcance global',
    description: 'Con equipos en 5 provincias, entendemos el mercado argentino. Innovación real desde acá para el mundo.',
  },
  {
    icon: BarChart3,
    title: 'Resultados medibles y transparentes',
    description: 'Te damos acceso a un dashboard en tiempo real. Cuentas claras conservan la amistad (y los clientes).',
  },
];

export function WhyUsSection() {
    const whyUsImage = PlaceHolderImages.find((p) => p.id === 'why-us-chart');

  return (
    <section id="por-que-elegirnos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-12"
          >
            <div>
                <h2 className="font-headline font-bold text-4xl md:text-5xl">
                    ¿Por qué elegir nuestra Agencia de Marketing?
                </h2>
                <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
                    Porque no somos una agencia de marketing digital más. Somos tu socio estratégico en Argentina, combinando tecnología de punta, conocimiento local y un enfoque obsesivo en resultados tangibles para tu negocio.
                </p>
            </div>
            <ul className="space-y-8">
                {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                        <li key={index} className="flex gap-6 items-start">
                             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary flex-shrink-0 mt-1">
                                <Icon className="h-7 w-7" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">{reason.title}</h3>
                                <p className="mt-2 text-muted-foreground">{reason.description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
          </motion.div>

          <motion.div 
            className="overflow-hidden rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
             {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt="Dashboard de resultados"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={whyUsImage.imageHint}
              />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
