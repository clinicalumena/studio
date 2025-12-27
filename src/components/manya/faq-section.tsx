
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: '¿Qué tipo de empresas pueden beneficiarse de sus servicios?',
    answer:
      'Trabajamos con una amplia variedad de clientes, desde startups y pymes hasta grandes empresas en Argentina y Latinoamérica. Si buscas crecer, mejorar tu presencia online y obtener resultados medibles, podemos ayudarte.',
  },
  {
    question: '¿Cómo miden el éxito de una campaña?',
    answer:
      'Definimos KPIs (Indicadores Clave de Rendimiento) claros desde el principio. Te damos acceso a un dashboard en tiempo real para que sigas el progreso. Nos enfocamos en métricas que impactan tu negocio, como leads, ventas y retorno de inversión (ROI).',
  },
  {
    question: '¿Cuánto tardan en verse los resultados del SEO?',
    answer:
      'El SEO es una estrategia a mediano-largo plazo. Generalmente, se empiezan a ver resultados significativos entre los 3 y 6 meses, dependiendo de la competencia de tu sector, el estado actual de tu web y la intensidad de la estrategia.',
  },
  {
    question: '¿Qué es el "Performance Marketing"?',
    answer:
      'Es marketing enfocado 100% en resultados. A través de campañas en plataformas como Google Ads y Meta Ads, optimizamos la inversión publicitaria para maximizar el retorno (ROAS) y conseguir los objetivos de negocio de la forma más eficiente.',
  },
  {
    question: '¿Realmente necesito un CRM?',
    answer:
      'Si querés escalar tu negocio y profesionalizar tu proceso de ventas y marketing, un CRM es fundamental. Te permite centralizar la información de tus clientes, automatizar la comunicación y entender mejor su comportamiento para vender más.',
  },
  {
    question: '¿Manejan presupuestos publicitarios pequeños?',
    answer:
      '¡Sí! Creemos que toda empresa merece crecer. Diseñamos estrategias a medida que se adaptan a diferentes niveles de inversión, siempre buscando maximizar el retorno de cada peso invertido, sin importar el tamaño del presupuesto.',
  },
  {
    question: '¿En qué se diferencia Manya Digital de otras agencias?',
    answer:
      'Nos obsesionan los resultados y la tecnología. No solo ejecutamos, sino que construimos sistemas de crecimiento integrando estrategia, creatividad y un uso intensivo de datos e inteligencia artificial para tomar mejores decisiones.',
  },
  {
    question: '¿Ofrecen servicios por fuera de Argentina?',
    answer:
      'Aunque nuestro core está en Argentina, tenemos experiencia y hemos lanzado campañas exitosas en otros mercados de habla hispana como Uruguay, Chile, Colombia y México. ¡Consultanos por tu caso!',
  },
  {
    question: '¿Qué necesito para empezar a trabajar con ustedes?',
    answer:
      'Solo tenés que tener ganas de crecer y estar dispuesto a trabajar en equipo. El primer paso es agendar una llamada inicial sin costo para que nos cuentes tu proyecto, tus objetivos y veamos si somos el partner indicado para vos.',
  },
  {
    question: '¿Cómo es el proceso de onboarding?',
    answer:
      'Una vez que cerramos el acuerdo, tenemos una reunión de kick-off para definir objetivos y alinear expectativas. Luego, te damos acceso a todas las herramientas de seguimiento y nos ponemos manos a la obra. ¡La comunicación es constante!',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h3 className="font-headline text-3xl font-bold md:text-4xl">
            Preguntas Frecuentes
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Resolvemos algunas de las dudas más comunes que tienen nuestros
            clientes.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-card px-6 transition-shadow duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  <h4>{faq.question}</h4>
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-muted-foreground">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
