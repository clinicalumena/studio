
import {
  Card,
} from '@/components/ui/card';
import { CheckCircle2, DraftingCompass, Goal, MessageCircle, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata = {
  title: 'Servicios | Manya Digital',
  description:
    'Conocé todas las soluciones de marketing digital, IA y SEO que tenemos para potenciar tu negocio en Argentina.',
};

const detailedServices = [
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    benefit: 'Aparecer primero en Google no es suerte, es estrategia.',
    icon: TrendingUp,
    imageId: 'service-seo',
    includes: [
      'Auditoría técnica completa',
      'Keyword research avanzado con IA',
      'Optimización On-Page y de contenido',
      'Estrategia de Link Building de calidad',
      'Marketing de Contenidos enfocado en SEO',
      'Reportes de rendimiento mensuales',
    ],
  },
  {
    id: 'diseno-web',
    title: 'Diseño y Desarrollo Web',
    benefit: 'Sitios que venden mientras dormís.',
    icon: DraftingCompass,
    imageId: 'service-web',
    includes: [
      'Investigación de UX/UI y user personas',
      'Diseño responsive y mobile-first',
      'Desarrollo front-end con tecnologías modernas',
      'Optimización de la tasa de conversión (CRO)',
      'Implementación de A/B testing',
      'Integración con analíticas y CRMs',
    ],
  },
  {
    id: 'gestion-rrss',
    title: 'Gestión de Redes Sociales',
    benefit: 'Tu marca con voz propia en cada plataforma.',
    icon: MessageCircle,
    imageId: 'service-rrss',
    includes: [
      'Estrategia de contenido multicanal',
      'Calendarización y programación mensual',
      'Diseño de piezas gráficas y audiovisuales',
      'Community management y atención al cliente',
      'Análisis de métricas y sentimiento',
      'Gestión de pauta publicitaria en redes',
    ],
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    benefit: 'Cada peso invertido trabajando al máximo.',
    icon: Goal,
    imageId: 'service-performance',
    includes: [
      'Estrategia de campaña en Meta Ads y Google Ads',
      'Segmentación avanzada con IA y audiencias lookalike',
      'Creación de creatividades y copy para anuncios',
      'Gestión de presupuesto y optimización de bids',
      'Reportes de ROAS (Retorno de Inversión Publicitaria)',
      'Remarketing y embudos de conversión',
    ],
  },
  {
    id: 'crm',
    title: 'Implementación de CRM',
    benefit: 'Conocer a tu cliente mejor que ellos mismos.',
    icon: Users,
    imageId: 'service-crm',
    includes: [
      'Implementación y configuración de HubSpot/Salesforce',
      'Automatización de pipelines de venta',
      'Scoring predictivo de leads con Machine Learning',
      'Integración con marketing y atención al cliente',
      'Capacitación y soporte para tu equipo',
      'Dashboards de seguimiento de KPIs de negocio',
    ],
  },
  {
    id: 'automatizaciones',
    title: 'Automatizaciones con IA',
    benefit: 'Escalar sin contratar más gente.',
    icon: Zap,
    imageId: 'service-automation',
    includes: [
      'Diseño de workflows de trabajo inteligentes',
      'Integración de herramientas (Zapier/Make)',
      'Desarrollo de chatbots con IA y NLP',
      'Automatización de email marketing y nutrición de leads',
      'Implementación de WhatsApp Business API',
      'Optimización de procesos internos',
    ],
  },
];

const processSteps = [
    { title: 'Discovery', description: 'Nos metemos de lleno para conocer tu negocio, tus metas y tus dolores.'},
    { title: 'Estrategia', description: 'Con data en mano, diseñamos un plan a medida. Sin humo, solo acciones concretas.'},
    { title: 'Ejecución', description: 'Ponemos manos a la obra. Implementamos, medimos y te mantenemos al tanto de todo.'},
    { title: 'Optimización', description: 'El trabajo nunca termina. Analizamos resultados y ajustamos para mejorar continuamente.'}
]

export default function ServiciosPage() {
    return (
    <>
      <div className="space-y-24">
        {detailedServices.map((service, index) => {
          const Icon = service.icon;
          const image = PlaceHolderImages.find((p) => p.id === service.imageId);
          const isReversed = index % 2 !== 0;

          return (
            <section key={service.id} id={service.id} className="scroll-mt-20">
              <Card className="overflow-hidden border bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative min-h-[300px] lg:h-full ${isReversed ? 'lg:col-start-2' : ''}`}>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex flex-col p-8 md:p-12">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" strokeWidth={2.5}/>
                      </div>
                      <h2 className="font-headline text-2xl font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mb-6 border-l-4 border-primary pl-4 text-lg font-medium italic text-muted-foreground">
                      {service.benefit}
                    </p>
                    <h3 className="mb-4 font-semibold text-foreground">
                      Qué incluye:
                    </h3>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </section>
          );
        })}
      </div>

       <section id="proceso" className="py-24 text-center">
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
    </>
  );
}
