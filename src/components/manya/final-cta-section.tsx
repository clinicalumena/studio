'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function FinalCtaSection() {
  return (
    <motion.section
      className="py-24 md:py-32 bg-gradient-to-tr from-primary/90 to-accent/90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center text-primary-foreground">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="font-headline text-4xl font-bold md:text-5xl drop-shadow-md">
            ¿Listo para crecer?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary font-bold text-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white/90 shadow-2xl rounded-full px-8 py-6"
            >
              <Link href="/contacto">Hablemos de tu proyecto</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}