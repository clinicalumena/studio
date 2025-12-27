
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, MoveRight } from 'lucide-react';

const locations = [
    { name: 'Buenos Aires (CABA)', href: '#' },
    { name: 'Córdoba', href: '#' },
    { name: 'Neuquén', href: '#' },
    { name: 'Rosario', href: '#' },
    { name: 'Mendoza', href: '#' },
];

export function LocationsSection() {
    const mapImage = PlaceHolderImages.find((p) => p.id === 'argentina-map');

    return (
        <section id="donde-trabajamos" className="py-24 md:py-32 bg-background">
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
                                En toda Argentina, cerca tuyo
                            </h2>
                            <p className="mt-6 max-w-3xl text-muted-foreground md:text-lg">
                                Con presencia en los puntos neurálgicos del país, combinamos el conocimiento local con una visión global para llevar tu marca al siguiente nivel.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {locations.map((location) => (
                                <Link href={location.href} key={location.name} className="group">
                                    <Card className="h-full transition-all duration-300 ease-in-out group-hover:bg-muted/60 group-hover:shadow-md group-hover:-translate-y-1 border">
                                        <CardContent className="p-6 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                                                <h3 className="font-semibold text-lg">{location.name}</h3>
                                            </div>
                                            <MoveRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="overflow-hidden rounded-2xl flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        {mapImage && (
                            <Image
                                src={mapImage.imageUrl}
                                alt="Mapa de Argentina"
                                width={500}
                                height={600}
                                className="w-full max-w-md h-auto object-contain"
                                data-ai-hint={mapImage.imageHint}
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
