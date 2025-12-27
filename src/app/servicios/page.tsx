
import { services } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, Globe, Share2, Users, Bot, Layers, Component, Database, PencilRuler, MousePointerClick } from 'lucide-react';
import { FinalCtaSection } from '@/components/manya/final-cta-section';

export const metadata = {
    title: "Servicios | Manya Digital",
    description: "Conocé todas las soluciones de marketing digital, IA y SEO que tenemos para potenciar tu negocio en Argentina.",
};

const iconMap: { [key: string]: React.ComponentType<any> } = {
    TrendingUp,
    PencilRuler,
    Share2,
    MousePointerClick,
    Users,
    Component,
};

export default function ServiciosPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
                <div className="mb-12 text-center">
                    <h1 className="font-headline text-4xl font-bold md:text-5xl">
                        Nuestras Herramientas para tu Crecimiento
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
                        Un arsenal de soluciones de marketing digital, IA y automatización para llevar tu marca al siguiente nivel.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <Card
                                key={service.title}
                                className="h-full transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 bg-card border border-border/50"
                            >
                                <CardHeader className="p-8">
                                    {Icon && (
                                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                                        <Icon className="h-8 w-8" strokeWidth={2} />
                                    </div>
                                    )}
                                    <CardTitle className="text-xl font-bold font-headline">{service.title}</CardTitle>
                                    <CardDescription className="pt-2 text-base text-muted-foreground">
                                    {service.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>
            </div>
            <FinalCtaSection />
        </div>
    );
}