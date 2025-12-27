import { PlaceHolderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

const getImage = (id: string): { src: string; hint: string } => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return {
    src: image?.imageUrl || '',
    hint: image?.imageHint || '',
  };
};

export const navLinks = [
  { name: 'Servicios', href: '/servicios' },
  { name: 'Por qué elegirnos', href: '#por-que-elegirnos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacto', href: '/contacto' },
];

export const services = [
  {
    icon: 'TrendingUp',
    title: 'SEO',
    description:
      'Posicionamiento orgánico con estrategias basadas en datos e IA.',
  },
  {
    icon: 'PencilRuler',
    title: 'Diseño Web',
    description:
      'Sitios web que convierten, diseñados para la experiencia del usuario.',
  },
  {
    icon: 'Share2',
    title: 'Gestión de RRSS',
    description:
      'Community management estratégico que genera engagement real.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Performance Marketing',
    description: 'Meta Ads y Google Ads optimizados con machine learning.',
  },
  {
    icon: 'Users',
    title: 'CRM',
    description: 'Gestión inteligente de clientes que maximiza el lifetime value.',
  },
  {
    icon: 'Component',
    title: 'Automatizaciones',
    description: 'Workflows inteligentes con IA que escalan tu operación.',
  },
];

export const successCases = [
  {
    client: 'Tienda de Moda Online',
    title: 'Explosión de Ventas con Campañas de SEM',
    description:
      'Para una tienda de pilcha emergente en Argentina, armamos campañas en Google Shopping y redes que hicieron explotar sus ventas.',
    image: getImage('success-2'),
    stats: [
      { value: '+450%', label: 'de Aumento en Ventas' },
      { value: '5.2X', label: 'de Retorno de Inversión (ROAS)' },
    ],
  },
  {
    client: 'Consultora de Negocios B2B',
    title: 'Liderazgo de Mercado con SEO y Contenido',
    description:
      'Con una estrategia de SEO técnico y marketing de contenidos, pusimos a nuestro cliente como un capo en su rubro.',
    image: getImage('success-1'),
    stats: [
      { value: '+300%', label: 'de Tráfico Orgánico Calificado' },
      { value: 'Top 3', label: 'en Rankings para Palabras Clave' },
    ],
  },
  {
    client: 'Restaurante Local',
    title: 'Comunidad Fiel en Redes Sociales',
    description:
      'Manejamos las redes de un bodegón en Buenos Aires, creando una comunidad activa que multiplicó las reservas.',
    image: getImage('success-3'),
    stats: [
      { value: '+80%', label: 'de Aumento de Interacción' },
      { value: '+40%', label: 'de Reservas desde Redes' },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'Manya Digital transformó nuestra presencia online. El equipo es súper profesional, creativo y siempre están un paso adelante. ¡Los resultados hablan solos!',
    name: 'Javier Morales',
    title: 'CEO de TechBaires',
    avatar: getImage('testimonial-2'),
  },
  {
    quote:
      'Desde que laburamos con Manya, nuestro e-commerce no para de crecer. Entienden perfecto el mercado argentino y cómo llegarle a la gente.',
    name: 'Sofía Rossi',
    title: 'Fundadora de Moda Urbana',
    avatar: getImage('testimonial-3'),
  },
  {
    quote:
      'La estrategia de contenidos y SEO que armaron fue impecable. Nos posicionaron como referentes en un sector muy competitivo. Unos cracks.',
    name: 'Martín Gonzalez',
    title: 'Director de FinanzasCorp',
    avatar: getImage('testimonial-1'),
  },
];

export const blogPosts = [
  {
    slug: 'tendencias-marketing-digital-argentina-2024',
    title: 'Top 5 Tendencias de Marketing Digital en Argentina para 2024',
    excerpt:
      'El mundo digital argento no para de cambiar. Te contamos las posta que tu negocio no puede dejar pasar este año.',
    date: '15 de Julio, 2024',
    image: getImage('blog-1'),
  },
  {
    slug: 'el-poder-de-la-ia-en-redes-sociales',
    title: 'El Poder de la IA para Potenciar tu Estrategia en Redes Sociales',
    excerpt:
      'La inteligencia artificial ya no es el futuro, es el ahora. Descubrí cómo usarla para optimizar tus campañas y contenidos.',
    date: '02 de Julio, 2024',
    image: getImage('blog-2'),
  },
  {
    slug: 'seo-local-clave-para-negocios-fisicos',
    title: 'SEO Local: La Clave para que Negocios a la Calle la Rompan Online',
    excerpt:
      'Si tenés un local, tienda o boliche, el SEO local es tu mejor amigo para atraer clientes de tu barrio. Te explicamos cómo arrancar.',
    date: '20 de Junio, 2024',
    image: getImage('blog-3'),
  },
];