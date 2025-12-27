
import {
  Card, CardContent,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Marketing Digital | Manya Digital',
  description:
    'Conocé todas las soluciones de marketing digital, IA y SEO que tenemos para potenciar tu negocio en Argentina.',
  openGraph: {
    type: 'website',
    url: '/servicios',
    title: 'Servicios de Marketing Digital | Manya Digital',
    description: 'Soluciones de marketing digital, IA y SEO para potenciar tu negocio.',
  },
};

const processSteps = [
    { title: 'Discovery', description: 'Nos metemos de lleno para conocer tu negocio, tus metas y tus dolores.'},
    { title: 'Estrategia', description: 'Con data en mano, diseñamos un plan a medida. Sin humo, solo acciones concretas.'},
    { title: 'Ejecución', description: 'Ponemos manos a la obra. Implementamos, medimos y te mantenemos al tanto de todo.'},
    { title: 'Optimización', description: 'El trabajo nunca termina. Analizamos resultados y ajustamos para mejorar continuamente.'}
]

export default function ServiciosPage() {
    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Servicios de Manya Digital',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `https://manyadigital.ar/servicios/${service.slug}`,
          provider: {
            '@type': 'Organization',
            name: 'Manya Digital',
          },
        },
      })),
    };

    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          Explorá nuestras soluciones diseñadas para el mercado argentino. Desde posicionar tu marca en Google hasta automatizar tus ventas con inteligencia artificial, tenemos una estrategia para vos.
        </p>
        <p className="text-lg text-muted-foreground">
          Navegá por nuestros servicios para descubrir cómo podemos ayudarte a crecer o ponete en contacto para una consultoría sin cargo.
        </p>

        <section id="proceso" className="py-16 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Nuestro Proceso</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                Cuatro pasos para resultados garantizados.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {processSteps.map((step, index) => (
                    <div key={step.title} className="flex flex-col items-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-primary/10 font-headline text-2xl font-bold text-primary">
                            {index + 1}
                        </div>
                        <h3 className="mt-6 font-headline text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <Card className="bg-muted/40 border">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                  <h3 className="font-headline font-bold text-lg">¿No sabés por dónde empezar?</h3>
                  <p className="mt-1 text-muted-foreground">No te preocupes. Hablemos y encontramos juntos el camino.</p>
              </div>
              <Button asChild className="group w-full sm:w-auto">
                  <Link href="/contacto">
                      Agendar llamada gratis
                      <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
              </Button>
          </CardContent>
        </Card>

      </div>
    </>
  );
}

