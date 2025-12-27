
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Component, DraftingCompass, Goal, MessageCircle, MoveRight, TrendingUp, Users, Zap } from 'lucide-react';
import { FinalCtaSection } from '@/components/manya/final-cta-section';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  seo: TrendingUp,
  'diseno-web': DraftingCompass,
  'gestion-rrss': MessageCircle,
  'performance-marketing': Goal,
  crm: Users,
  automatizaciones: Zap,
};


export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
            <div className="text-center">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">
                Servicios que <span className="text-primary">mañan</span> resultados
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                No solo hacemos marketing, creamos sistemas de crecimiento. Combinamos estrategia, creatividad y tecnología para llevar tu marca al siguiente nivel.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            <aside className="lg:col-span-1 lg:sticky lg:top-24 h-fit">
                <h2 className="mb-4 text-lg font-semibold text-foreground font-headline">
                Navegá los Servicios
                </h2>
                <nav className="flex flex-col gap-1">
                {services.map((service) => {
                  const Icon = iconMap[service.slug];
                  return (
                    <Link
                      key={service.slug}
                      href={`/servicios/${service.slug}`}
                      className={cn(
                        'flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors',
                        pathname === `/servicios/${service.slug}`
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                      )}
                    >
                      {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                      <span>{service.title}</span>
                    </Link>
                  )
                })}
                </nav>

                <Card className="mt-8 bg-muted/40 border">
                    <CardContent className="p-6">
                        <h3 className="font-headline font-bold text-lg">¿Listo para empezar?</h3>
                        <p className="mt-2 text-sm text-muted-foreground">Analicemos juntos tu próximo paso.</p>
                        <Button asChild className="mt-4 w-full group">
                            <Link href="/contacto">
                                Hablemos
                                <MoveRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>

            </aside>
            <main className="lg:col-span-3">{children}</main>
            </div>
        </div>
        <FinalCtaSection />
    </div>
  );
}
