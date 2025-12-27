
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
    slug: 'seo',
    description:
      'Posicionamiento orgánico con estrategias basadas en datos e IA.',
  },
  {
    icon: 'PencilRuler',
    title: 'Diseño Web',
    slug: 'diseno-web',
    description:
      'Sitios web que convierten, diseñados para la experiencia del usuario.',
  },
  {
    icon: 'Share2',
    title: 'Gestión de RRSS',
    slug: 'gestion-rrss',
    description:
      'Community management estratégico que genera engagement real.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'Meta Ads y Google Ads optimizados con machine learning.',
  },
  {
    icon: 'Users',
    title: 'CRM',
    slug: 'crm',
    description: 'Gestión inteligente de clientes que maximiza el lifetime value.',
  },
  {
    icon: 'Component',
    title: 'Automatizaciones',
    slug: 'automatizaciones',
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
    category: 'Estrategia Digital',
    author: {
        name: 'Equipo Manya Digital',
        avatar: getImage('testimonial-1'),
    },
    readTime: '8 min de lectura',
    lastUpdated: '16 de Julio, 2024',
    intro: `<p>El marketing digital en Argentina es un ecosistema en constante evolución. Para que tu marca no se quede atrás, es crucial estar al tanto de las últimas tendencias. Acá te dejamos un resumen de las 5 más importantes para lo que queda de 2024.</p>`,
    content: `
        <h2 id="ia-generativa">1. IA Generativa para Contenidos</h2>
        <p>La inteligencia artificial generativa está revolucionando la forma en que creamos contenido. Herramientas como ChatGPT, Gemini o Midjourney permiten generar textos, imágenes y hasta videos en segundos. Esto no reemplaza la creatividad humana, pero sí la potencia, permitiendo escalar la producción de contenido y personalizarlo a un nivel nunca antes visto. Desde copys para anuncios hasta borradores de artículos de blog, la IA es tu nuevo copiloto creativo.</p>
        
        <div style="background-color: hsl(var(--primary)/0.1); border-left: 4px solid hsl(var(--primary)); padding: 1.5rem; border-radius: 0.75rem; margin: 2rem 0;">
            <h4 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--primary)); margin-top: 0;">¿Querés aplicar IA en tu estrategia?</h4>
            <p style="margin-top: 0.5rem; color: hsl(var(--foreground));">Nosotros te ayudamos a integrar herramientas de inteligencia artificial para potenciar tu marketing.</p>
            <a href="/contacto" style="display: inline-block; margin-top: 1rem; background-color: hsl(var(--primary)); color: hsl(var(--primary-foreground)); padding: 0.5rem 1.5rem; border-radius: 9999px; text-decoration: none; font-weight: 600;">Hablemos</a>
        </div>

        <h2 id="video-corto">2. El Reinado del Video Corto</h2>
        <p>TikTok, Instagram Reels, YouTube Shorts... el formato de video vertical y corto sigue siendo el rey indiscutido del engagement. Los usuarios prefieren consumir contenido rápido, entretenido y auténtico. Las marcas que logran contar historias y mostrar sus productos de manera creativa en videos de 15 a 60 segundos tienen una ventaja competitiva enorme.</p>
        
        <blockquote>"Si no estás creando videos cortos, estás dejando pasar la mayor oportunidad de conectar con tu audiencia hoy."</blockquote>

        <h2 id="seo-conversacional">3. SEO conversacional y Búsqueda por Voz</h2>
        <p>Cada vez más gente usa asistentes de voz como Google Assistant o Siri para buscar información. Esto cambia la forma en que debemos pensar el SEO. Ya no se trata solo de palabras clave, sino de responder preguntas completas y naturales. Optimizar tu contenido para búsquedas conversacionales (long-tail keywords) es clave para capturar este tráfico en crecimiento.</p>
        
        <ul>
            <li><strong>Optimizar para preguntas:</strong> Crear contenido que responda directamente a "quién", "qué", "dónde", "cuándo", "por qué" y "cómo".</li>
            <li><strong>Featured Snippets:</strong> Apuntar a aparecer en los fragmentos destacados de Google, que son los que suelen leer los asistentes de voz.</li>
            <li><strong>SEO Local:</strong> Asegurarse de que la información de tu negocio (dirección, horarios) esté actualizada para búsquedas "cerca de mí".</li>
        </ul>

        <table>
            <thead>
                <tr>
                    <th>Formato de Búsqueda</th>
                    <th>Ejemplo</th>
                    <th>Enfoque SEO</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tradicional</td>
                    <td>"restaurantes palermo"</td>
                    <td>Palabras clave cortas</td>
                </tr>
                <tr>
                    <td>Conversacional</td>
                    <td>"cuáles son los mejores restaurantes para ir con chicos en palermo"</td>
                    <td>Preguntas y long-tail</td>
                </tr>
            </tbody>
        </table>

        <h2 id="privacidad">4. Marketing en un Mundo sin Cookies</h2>
        <p>La desaparición de las cookies de terceros nos obliga a repensar la forma en que personalizamos y medimos la publicidad. El foco se traslada hacia la recolección de datos de primera mano (First-Party Data). Estrategias como el email marketing, los programas de lealtad y la creación de contenido de valor para obtener datos de los usuarios de forma consentida son más importantes que nunca.</p>
        
        <h2 id="comercio-social">5. Social Commerce y Live Shopping</h2>
        <p>Las redes sociales ya no son solo para mostrar productos, sino para venderlos directamente. Plataformas como Instagram y TikTok están integrando cada vez más funciones de e-commerce que permiten a los usuarios comprar sin salir de la app. El "live shopping" (ventas en vivo) también está ganando terreno, creando una experiencia de compra interactiva y generando un sentido de urgencia que impulsa las ventas.</p>
    `,
    tags: ['Marketing Digital', 'Tendencias', 'IA', 'SEO'],
  },
  {
    slug: 'el-poder-de-la-ia-en-redes-sociales',
    title: 'El Poder de la IA para Potenciar tu Estrategia en Redes Sociales',
    excerpt:
      'La inteligencia artificial ya no es el futuro, es el ahora. Descubrí cómo usarla para optimizar tus campañas y contenidos.',
    date: '02 de Julio, 2024',
    image: getImage('blog-2'),
    category: 'Redes Sociales',
    author: {
        name: 'Equipo Manya Digital',
        avatar: getImage('testimonial-2'),
    },
    readTime: '10 min de lectura',
    lastUpdated: null,
    intro: `<p>La inteligencia artificial (IA) ha dejado de ser una promesa futurista para convertirse en una herramienta indispensable en el arsenal de cualquier estratega de redes sociales. Si sentís que estás corriendo detrás de las tendencias y te cuesta generar contenido relevante de forma consistente, la IA es tu mejor aliada para cambiar el juego.</p>`,
    content: `<p>En este artículo, vamos a desglosar cómo la IA puede potenciar tu estrategia en redes sociales, desde la creación de contenido hasta el análisis de métricas, para que puedas trabajar de manera más inteligente, no más dura.</p>`,
    tags: ['IA', 'Redes Sociales', 'Automatización'],
  },
  {
    slug: 'seo-local-clave-para-negocios-fisicos',
    title: 'SEO Local: La Clave para que Negocios a la Calle la Rompan Online',
    excerpt:
      'Si tenés un local, tienda o boliche, el SEO local es tu mejor amigo para atraer clientes de tu barrio. Te explicamos cómo arrancar.',
    date: '20 de Junio, 2024',
    image: getImage('blog-3'),
    category: 'SEO',
    author: {
        name: 'Equipo Manya Digital',
        avatar: getImage('testimonial-3'),
    },
    readTime: '12 min de lectura',
    lastUpdated: null,
    intro: `<p>¿Tenés un negocio con una ubicación física? Entonces, más que nadie, necesitás que la gente de tu zona te encuentre. De nada sirve tener el mejor producto o servicio si tus vecinos no saben que existís. Acá es donde entra el SEO Local, tu arma secreta para dominar las búsquedas "cerca de mí".</p>`,
    content: `<p>Olvidate de competir con gigantes a nivel nacional. Tu objetivo es ser el rey de tu barrio, y en esta guía te vamos a mostrar exactamente cómo lograrlo.</p>`,
    tags: ['SEO', 'Negocios Locales', 'Google My Business'],
  },
];


export const serviceDetails = [
  {
    slug: 'seo',
    title: 'SEO',
    meta: {
      title: 'Agencia SEO en Argentina | Manya Digital',
      description: 'Potenciá tu visibilidad online con nuestra agencia de SEO. Estrategias de posicionamiento web y SEO local para dominar los rankings en Argentina.',
    },
    hero: {
      h1: 'Somos tu agencia de SEO en Argentina',
      subservices: ['SEO On-Page', 'SEO Off-Page / Link Building', 'SEO Local', 'SEO Técnico', 'Marketing de Contenidos'],
    },
    cta1: {
      h2: '¿Necesitas una agencia de SEO?',
      p: 'Si no aparecés en la primera página de Google, estás perdiendo clientes. Dejá que nuestro equipo de expertos en SEO te ponga en el mapa.',
      button: 'Quiero mi auditoría SEO gratis',
    },
    why: {
      h3: '¿Por qué invertir en SEO en Argentina?',
      points: [
        { title: 'Visibilidad Sostenible', description: 'A diferencia de los anuncios, el SEO construye un activo digital que te genera tráfico a largo plazo.' },
        { title: 'Tráfico de Calidad', description: 'Atraé a usuarios que están buscando activamente tus productos o servicios. Sin tirar plata.' },
        { title: 'Credibilidad y Confianza', description: 'Aparecer primero en Google te posiciona como un líder y referente en tu industria.' },
        { title: 'Superá a tu Competencia', description: 'Mientras tus competidores pagan por cada clic, vos ganás clientes de forma orgánica.' },
      ],
    },
    cta2: {
      h2: 'Primera Consultoría SEO Gratis',
      button: 'Agendar mi consultoría',
    },
    howWeHelp: {
      h3: 'Cómo podemos ayudarte a mejorar tu posicionamiento',
      p: 'Nuestro enfoque es 360°. Analizamos tu web, tu competencia y tu mercado para crear una estrategia de SEO a medida que dé resultados reales.',
      points: [
        'Análisis de palabras clave con IA para encontrar oportunidades ocultas.',
        'Auditoría técnica completa para asegurar que Google ame tu sitio.',
        'Optimización de contenido para responder a la intención de búsqueda de tus usuarios.',
        'Estrategia de Link Building para construir la autoridad de tu dominio.',
        'Reportes transparentes para que veas tu crecimiento mes a mes.',
      ],
    },
    factors: {
      h3: '¿Qué factores influyen en el SEO de un negocio?',
      p: 'El SEO es un rompecabezas con muchas piezas. Nos enfocamos en las que generan mayor impacto:',
      points: [
        'Contenido relevante y de alta calidad.',
        'Experiencia de usuario (velocidad, diseño responsive).',
        'Perfil de enlaces entrantes (backlinks).',
        'Estructura técnica del sitio web.',
        'Optimización para búsquedas locales (Google Business Profile).',
      ],
    },
    rank: {
      h3: '¿Puedo Salir primero en Google?',
      points: [
        { title: 'Análisis profundo', description: 'Investigamos tu mercado y competencia para entender el campo de juego.' },
        { title: 'Estrategia a medida', description: 'No hay fórmulas mágicas. Creamos un plan único para tu negocio.' },
        { title: 'Ejecución constante', description: 'El SEO es una maratón. Trabajamos mes a mes para alcanzar y mantener las posiciones.' },
        { title: 'Paciencia y resultados', description: 'Los resultados sólidos llevan tiempo, pero son duraderos y rentables.' },
      ],
    },
    position: {
      h3: 'Posicionate en tu ciudad',
      p: 'El SEO local es clave. Hacemos que los clientes de tu zona te encuentren primero. Desde la optimización de tu ficha de Google hasta la creación de contenido local, te convertimos en el referente de tu barrio.',
      button: 'Empezar a dominar mi ciudad',
    },
    faqs: [
        { question: '¿Cuánto tardan en verse los resultados del SEO?', answer: 'El SEO es una estrategia a mediano-largo plazo. Generalmente, se empiezan a ver resultados significativos entre los 3 y 6 meses, dependiendo de la competencia de tu sector y el estado actual de tu web.'},
        { question: '¿Es mejor hacer SEO o pagar anuncios (SEM)?', answer: 'Son estrategias complementarias. El SEM te da resultados inmediatos, mientras que el SEO construye un activo a largo plazo que te genera tráfico gratuito y sostenible. Lo ideal es combinar ambas.'},
        { question: '¿Qué es el "link building"?', answer: 'Es el proceso de conseguir que otras páginas web de calidad enlacen a la tuya. Estos enlaces (backlinks) actúan como "votos de confianza" para Google, aumentando la autoridad y el ranking de tu sitio.'},
        { question: 'Mi web es nueva, ¿puedo hacer SEO?', answer: '¡Claro que sí! Empezar con una base de SEO sólida desde el principio es la mejor manera de asegurar el éxito futuro de tu web. Es el momento ideal para construir la arquitectura y el contenido correctamente.'},
        { question: '¿Manejan SEO para ecommerce?', answer: 'Sí, es una de nuestras especialidades. Optimizamos categorías, productos, y aplicamos técnicas de SEO avanzadas para que tus productos aparezcan en las búsquedas de compra.'},
        { question: '¿Qué diferencia hay entre SEO on-page y off-page?', answer: 'El SEO on-page incluye todas las optimizaciones que se hacen dentro de tu web (contenido, estructura, meta tags). El SEO off-page se refiere a acciones fuera de tu web para mejorar su autoridad, principalmente el link building.'},
        { question: '¿Cómo miden el éxito de una campaña de SEO?', answer: 'Definimos KPIs claros: rankings de palabras clave, aumento de tráfico orgánico, tasa de conversión de ese tráfico, y finalmente, el impacto en ventas y ROI.'},
        { question: '¿Garantizan la primera posición en Google?', answer: 'Ninguna agencia seria puede garantizar la primera posición, ya que el algoritmo de Google cambia constantemente y depende de muchos factores. Lo que sí garantizamos es una estrategia profesional, transparente y enfocada en mejorar tus resultados de forma sostenida.'},
        { question: '¿Necesito cambiar mi web para hacer SEO?', answer: 'No siempre. Realizamos una auditoría inicial para detectarlo. A veces solo se necesitan ajustes técnicos y de contenido. Si la plataforma es muy antigua o limitada, podríamos recomendar una actualización.'},
        { question: '¿Hacen SEO local para varias sucursales?', answer: 'Sí. Desarrollamos estrategias para negocios con múltiples ubicaciones, gestionando las fichas de Google Business Profile y creando páginas de aterrizaje locales para cada sucursal.'},
    ]
  },
  {
    slug: 'diseno-web',
    title: 'Diseño Web',
    meta: {
      title: 'Agencia de Diseño Web en Argentina | Manya Digital',
      description: 'Creamos páginas web que venden. Nuestra agencia de diseño web en Argentina se especializa en sitios optimizados para la conversión y la experiencia de usuario (UX).',
    },
    hero: {
      h1: 'Somos tu agencia de Diseño Web en Argentina',
      subservices: ['Diseño UX/UI', 'Desarrollo Web', 'Ecommerce', 'Landing Pages', 'Mantenimiento Web'],
    },
    cta1: {
      h2: '¿Necesitas una agencia de Diseño Web?',
      p: 'Tu página web es tu vendedor 24/7. Si no convierte visitantes en clientes, estás perdiendo plata. Diseñamos sitios web que son mucho más que una cara bonita: son máquinas de generar negocio.',
      button: 'Quiero una web que venda',
    },
    why: {
      h3: '¿Por qué un diseño web profesional es clave?',
      points: [
        { title: 'Primera Impresión', description: 'Tenés solo segundos para captar la atención. Un diseño profesional genera confianza al instante.' },
        { title: 'Mejora la Conversión', description: 'Un buen diseño guía al usuario hacia la acción que querés que realice, sea comprar o contactarte.' },
        { title: 'Potencia el SEO', description: 'Google ama las webs rápidas, bien estructuradas y adaptadas a móviles. Un buen diseño es la base del SEO.' },
        { title: 'Refleja tu Marca', description: 'Tu web es el corazón de tu presencia digital. Debe comunicar tus valores y diferenciarte.' },
      ],
    },
    cta2: {
      h2: 'Pedí tu Auditoría Web Gratis',
      button: 'Analizar mi web ahora',
    },
    howWeHelp: {
      h3: 'Cómo diseñamos webs que generan resultados',
      p: 'Nuestro proceso se centra en el usuario y en tus objetivos de negocio. No empezamos a diseñar hasta que entendemos qué necesita tu cliente y qué necesitás vos.',
      points: [
        'Investigación de UX para entender el comportamiento de tus usuarios.',
        'Diseño de UI enfocado en la estética, la usabilidad y la conversión.',
        'Desarrollo con tecnologías modernas, rápidas y escalables.',
        'Optimización "Mobile First" para una experiencia perfecta en celulares.',
        'Integración con herramientas de analítica, CRM y marketing.',
      ],
    },
    factors: {
      h3: '¿Qué factores hacen que una web sea exitosa?',
      p: 'Una web exitosa es un equilibrio entre arte y ciencia. Estos son los pilares de nuestro trabajo:',
      points: [
        'Claridad en el mensaje y la propuesta de valor.',
        'Navegación intuitiva y fácil de usar.',
        'Velocidad de carga ultrarrápida.',
        'Llamadas a la acción (CTAs) claras y persuasivas.',
        'Contenido de calidad que responde a las necesidades del usuario.',
      ],
    },
    rank: {
      h3: '¿Mi web puede ser la mejor de mi sector?',
      points: [
        { title: 'Análisis Competitivo', description: 'Estudiamos a fondo a tus competidores para identificar oportunidades de diferenciación.' },
        { title: 'Enfoque en el Usuario', description: 'Diseñamos pensando en tu cliente ideal, no en gustos personales.' },
        { title: 'Tecnología de Punta', description: 'Usamos las mejores herramientas y frameworks para garantizar un rendimiento superior.' },
        { title: 'Obsesión por el Detalle', description: 'Desde la tipografía hasta la velocidad de un botón, cada detalle cuenta.' },
      ],
    },
    position: {
      h3: 'Una web que te posiciona en el mercado',
      p: 'Ya sea que vendas productos, ofrezcas servicios o busques generar leads, creamos la plataforma digital que necesitás para crecer en el mercado argentino. Una web que trabaja para vos, incluso mientras dormís.',
      button: 'Empezar mi proyecto web',
    },
    faqs: [
        { question: '¿Cuánto tiempo lleva diseñar y desarrollar una página web?', answer: 'Depende de la complejidad. Una landing page puede tomar 2-3 semanas, mientras que un sitio corporativo o ecommerce puede llevar de 6 a 12 semanas. Siempre establecemos un cronograma claro desde el inicio.' },
        { question: '¿Qué es UX y UI?', answer: 'UX (User Experience) se enfoca en cómo se siente el usuario al interactuar con tu web, que sea fácil y lógico. UI (User Interface) se refiere a la parte visual, los colores, botones y la estética general. Ambas son cruciales.' },
        { question: '¿Mi web se verá bien en celulares?', answer: 'Absolutamente. Todos nuestros diseños son "Mobile First", lo que significa que diseñamos primero para celulares y luego adaptamos a pantallas más grandes. Es fundamental, ya que la mayoría del tráfico hoy es móvil.' },
        { question: '¿Puedo actualizar el contenido de mi web yo mismo?', answer: 'Sí. Construimos nuestras webs sobre gestores de contenido (CMS) como WordPress o desarrollos a medida que te permiten editar textos, imágenes y otros contenidos de forma sencilla, sin necesidad de saber programar.' },
        { question: '¿Ofrecen servicio de mantenimiento web?', answer: 'Sí, ofrecemos planes de mantenimiento para asegurar que tu web esté siempre actualizada, segura y funcionando a la perfección. Esto incluye actualizaciones de software, backups y monitoreo de seguridad.' },
        { question: 'Ya tengo una web, ¿pueden rediseñarla?', answer: '¡Claro! Realizamos una auditoría de tu sitio actual para identificar puntos de mejora en diseño, UX y tecnología, y te proponemos un plan de rediseño enfocado en mejorar los resultados.' },
        { question: '¿Incluyen el hosting y el dominio?', answer: 'Asesoramos en la elección del mejor hosting para tu proyecto y podemos gestionar la compra del dominio, pero generalmente estos servicios se contratan a nombre del cliente para que mantenga la propiedad total.' },
        { question: '¿Qué es una "landing page"?', answer: 'Es una página única, diseñada específicamente para una campaña de marketing, con un solo objetivo: que el usuario realice una acción concreta (comprar, registrarse, etc.). Son clave para maximizar el retorno de la inversión publicitaria.' },
        { question: '¿Hacen tiendas online (ecommerce)?', answer: 'Sí, es una de nuestras especialidades. Creamos tiendas online robustas, seguras y optimizadas para vender, integradas con pasarelas de pago y sistemas de envío locales.' },
        { question: '¿Optimizan la velocidad de carga de la web?', answer: 'Es una de nuestras obsesiones. Una web lenta pierde ventas y posicionamiento. Optimizamos imágenes, código y servidor para que tu sitio vuele.' },
    ]
  },
  {
    slug: 'gestion-rrss',
    title: 'Gestión de RRSS',
    meta: {
      title: 'Agencia de Redes Sociales en Argentina | Manya Digital',
      description: 'Servicios de Community Manager y gestión de redes sociales. Creamos contenido, gestionamos comunidades y potenciamos tu marca en Instagram, Facebook, TikTok y más.',
    },
hero: {
      h1: 'Somos tu agencia de Redes Sociales en Argentina',
      subservices: ['Community Management', 'Estrategia de Contenido', 'Gestión de Pauta', 'Marketing de Influencers', 'Reportes de Métricas'],
    },
    cta1: {
      h2: '¿Necesitas una agencia de Redes Sociales?',
      p: 'Tener perfiles en redes no es suficiente. Hay que tener una estrategia, crear contenido que conecte y construir una comunidad. Si tus redes no te traen clientes, estamos para ayudarte.',
      button: 'Quiero potenciar mis redes',
    },
    why: {
      h3: '¿Por qué es vital una buena gestión de redes?',
      points: [
        { title: 'Construís Comunidad', description: 'Las redes son el lugar para conversar con tus clientes, entenderlos y fidelizarlos.' },
        { title: 'Generás Confianza', description: 'Mostrar el día a día, los valores y las personas detrás de tu marca humaniza y crea un lazo fuerte.' },
        { title: 'Aumentás tu Alcance', description: 'Contenido de valor que se comparte puede viralizarse y llevar tu marca a miles de personas nuevas.' },
        { title: 'Canal de Ventas', description: 'Las redes sociales son una vidriera increíble y un canal directo para generar ventas y consultas.' },
      ],
    },
    cta2: {
      h2: 'Primera Asesoría en Redes Sociales Gratis',
      button: 'Agendar mi asesoría',
    },
    howWeHelp: {
      h3: 'Cómo creamos una estrategia de redes sociales ganadora',
      p: 'No posteamos por postear. Definimos objetivos claros, estudiamos a tu audiencia y creamos contenido que educa, entretiene o inspira, siempre alineado a tu marca.',
      points: [
        'Definición de pilares de contenido y tono de voz de la marca.',
        'Planificación y creación de calendarios de contenido mensuales.',
        'Producción de piezas gráficas y de video adaptadas a cada red.',
        'Community management activo: respondemos, conversamos e interactuamos.',
        'Análisis de métricas para entender qué funciona y optimizar la estrategia.',
      ],
    },
    factors: {
      h3: '¿Qué factores hacen que un perfil sea exitoso?',
      p: 'El éxito en redes sociales no es suerte. Es la combinación de varios elementos clave:',
      points: [
        'Consistencia en la frecuencia de publicación y en la estética.',
        'Autenticidad y contenido que aporte valor real al seguidor.',
        'Interacción y construcción de una comunidad activa.',
        'Uso inteligente de los diferentes formatos (Reels, Stories, Carruseles).',
        'Análisis de datos para tomar decisiones informadas.',
      ],
    },
    rank: {
      h3: '¿Puedo hacer que mi marca se destaque?',
      points: [
        { title: 'Voz Única', description: 'Encontramos ese "algo" que hace a tu marca diferente y lo comunicamos de forma creativa.' },
        { title: 'Contenido de Valor', description: 'No solo vendemos. Creamos contenido que tus seguidores quieran guardar y compartir.' },
        { title: 'Estrategia Multicanal', description: 'Adaptamos el mensaje a cada plataforma, desde el dinamismo de TikTok hasta la profesionalidad de LinkedIn.' },
        { title: 'Data Driven', description: 'Usamos las métricas para entender a tu audiencia y darle más de lo que le gusta.' },
      ],
    },
    position: {
      h3: 'Convertí seguidores en clientes',
      p: 'Una buena gestión de redes no solo te da likes, te trae ventas. Creamos embudos de conversión dentro de tus redes para transformar el interés en acción, llevando a tus seguidores a convertirse en clientes fieles.',
      button: 'Empezar a vender en redes',
    },
    faqs: [
        { question: '¿En qué redes sociales debería estar mi marca?', answer: 'Depende de tu público objetivo. Hacemos un análisis inicial para determinar qué plataformas son las más relevantes para tu negocio, ya sea Instagram, Facebook, TikTok, LinkedIn, etc.' },
        { question: '¿Con qué frecuencia publican?', answer: 'La consistencia es clave. Creamos un calendario de contenidos mensual con una frecuencia de publicación adaptada a cada red social y a los objetivos de tu marca.' },
        { question: '¿Ustedes crean el contenido (fotos, videos)?', answer: 'Nos adaptamos a tus necesidades. Podemos trabajar con el material que nos proporciones o coordinar sesiones de fotos y video para generar contenido original y profesional.' },
        { question: '¿Qué es el "community management"?', answer: 'Es el trabajo de interactuar con tu comunidad: responder comentarios y mensajes, generar conversaciones, moderar y, en resumen, ser la voz de tu marca en las redes. Es fundamental para construir relaciones.' },
        { question: '¿Manejan campañas de publicidad en redes sociales?', answer: 'Sí, es parte de nuestro servicio de Performance Marketing. Podemos gestionar la pauta publicitaria para potenciar el alcance de tus publicaciones y generar conversiones.' },
        { question: '¿Cómo sé si la estrategia está funcionando?', answer: 'Te enviamos reportes mensuales con las métricas más importantes (alcance, interacción, crecimiento de seguidores, clics al sitio web, etc.) y analizamos juntos los resultados para optimizar la estrategia.' },
        { question: '¿Trabajan con influencers?', answer: 'Sí. Podemos desarrollar estrategias de marketing de influencers, identificando los perfiles que mejor se alinean con tu marca y tu público en Argentina para generar campañas auténticas y efectivas.' },
        { question: '¿Qué pasa si tengo una crisis de reputación online?', answer: 'Contamos con protocolos para el manejo de crisis. Actuamos rápido para moderar la situación, responder de forma adecuada y proteger la reputación de tu marca.' },
        { question: '¿Cuánto cuesta el servicio de gestión de redes sociales?', answer: 'El precio varía según la cantidad de redes a gestionar, la frecuencia de publicación y el nivel de producción de contenido requerido. Ofrecemos planes a medida. ¡Contactanos y te armamos un presupuesto!' },
        { question: '¿Por qué no puedo simplemente postear yo mismo?', answer: '¡Podés! Pero gestionar redes de forma profesional requiere tiempo, estrategia, creatividad y análisis. Delegarlo en una agencia te permite enfocarte en tu negocio mientras nosotros nos encargamos de que tus redes generen resultados.' },
    ]
  },
  {
    slug: 'performance-marketing',
    title: 'Performance Marketing',
    meta: {
      title: 'Agencia de Performance Marketing en Argentina | Manya Digital',
      description: 'Maximizá tu inversión con nuestra agencia de Performance Marketing. Expertos en campañas de Meta Ads (Facebook, Instagram) y Google Ads con foco en el ROI.',
    },
    hero: {
      h1: 'Tu agencia de Performance Marketing en Argentina',
      subservices: ['Google Ads (SEM)', 'Meta Ads (Facebook & Instagram)', 'Remarketing', 'CRO (Optimización de Conversión)', 'Analítica y Reportes'],
    },
    cta1: {
      h2: '¿Necesitas una agencia de Performance Marketing?',
      p: 'Si invertís en publicidad y no sabés qué retorno te genera, estás tirando plata. Nuestro trabajo es que cada peso que ponés en Google o Meta Ads trabaje al máximo para vos.',
      button: 'Quiero maximizar mi inversión',
    },
    why: {
      h3: '¿Por qué invertir en Performance Marketing?',
      points: [
        { title: 'Resultados Medibles', description: 'Sabés exactamente cuánto invertís y cuánto ganás. Todo se mide, todo se optimiza.' },
        { title: 'Segmentación Precisa', description: 'Llegá solo a las personas que te interesan: por sus intereses, demografía, comportamiento y más.' },
        { title: 'ROI como Obsesión', description: 'El objetivo no es tener más clics o likes, es generar más ventas y maximizar el retorno de tu inversión.' },
        { title: 'Flexibilidad y Control', description: 'Podés empezar con un presupuesto bajo, testear, aprender y escalar lo que funciona. Vos tenés el control.' },
      ],
    },
    cta2: {
      h2: 'Pedí una Auditoría de Campañas Gratis',
      button: 'Auditar mis campañas ahora',
    },
    howWeHelp: {
      h3: 'Cómo hacemos que tus campañas rindan al máximo',
      p: 'Combinamos un profundo conocimiento de las plataformas con un análisis de datos constante y el uso de IA para optimizar tus campañas en tiempo real.',
      points: [
        'Estrategia y setup de campañas en Google Ads y Meta Ads.',
        'Creación de audiencias avanzadas y segmentación con IA.',
        'Diseño de creatividades (anuncios) y copywriting persuasivo.',
        'Optimización continua de presupuestos, pujas y segmentaciones.',
        'Implementación de tracking y analítica para medir cada conversión.',
      ],
    },
    factors: {
      h3: '¿Qué factores influyen en el éxito de una campaña?',
      p: 'Una campaña exitosa es una máquina bien aceitada. Estos son los engranajes principales:',
      points: [
        'Una oferta atractiva y una landing page que convierta.',
        'Segmentación correcta del público objetivo.',
        'Creatividades (imágenes/videos) y textos que llamen la atención.',
        'Estrategia de puja y presupuesto adecuados.',
        'Análisis y optimización constante basados en datos.',
      ],
    },
    rank: {
      h3: '¿Puedo ganarle a mi competencia con menos presupuesto?',
      points: [
        { title: 'Estrategia Inteligente', description: 'No se trata de quién gasta más, sino de quién gasta mejor. Buscamos nichos y ángulos únicos.' },
        { title: 'Optimización de Conversión', description: 'Hacemos que tu web convierta mejor, así cada clic que pagás vale más.' },
        { title: 'Creatividad que Impacta', description: 'Un buen anuncio puede superar a un gran presupuesto. Nos enfocamos en la creatividad.' },
        { title: 'Tecnología a tu Favor', description: 'Usamos IA y machine learning para encontrar patrones y optimizar tus campañas automáticamente.' },
      ],
    },
    position: {
      h3: 'Inversión inteligente, resultados reales.',
      p: 'Dejá de adivinar. Con el Performance Marketing, cada decisión está basada en datos. Te ayudamos a construir un motor de crecimiento predecible y rentable para tu negocio en Argentina.',
      button: 'Empezar a invertir con inteligencia',
    },
    faqs: [
        { question: '¿Qué es Performance Marketing?', answer: 'Es un tipo de marketing digital donde solo pagás por resultados concretos, como clics, leads o ventas. El foco está 100% en el retorno de la inversión (ROI).' },
        { question: '¿Cuál es la diferencia entre Google Ads y Meta Ads?', answer: 'Google Ads se enfoca en la "intención" (gente que busca activamente algo). Meta Ads (Facebook/Instagram) se basa en "intereses" (gente a la que le podría interesar tu producto). Usamos ambas para una estrategia completa.' },
        { question: '¿Cuánto debería invertir en publicidad?', answer: 'No hay un número mágico. Depende de tu industria, objetivos y capacidad. Podemos empezar con un presupuesto piloto para medir resultados iniciales y luego escalar. Lo importante es que sea una inversión rentable.' },
        { question: '¿Qué es el ROAS?', answer: 'ROAS significa "Return On Ad Spend" (Retorno de la Inversión Publicitaria). Es una métrica clave que nos dice cuántos pesos generás en ventas por cada peso que invertís en publicidad. Si tu ROAS es de 5x, significa que ganás $5 por cada $1 invertido.' },
        { question: '¿Qué es el remarketing o retargeting?', answer: 'Es la técnica de volver a mostrarle anuncios a personas que ya visitaron tu web pero no compraron. Es muy efectivo porque te dirigís a un público que ya te conoce y mostró interés.' },
        { question: '¿Hacen los anuncios (creatividades)?', answer: 'Sí. Nuestro equipo de diseño y copywriting se encarga de crear los anuncios (imágenes, videos, textos) optimizados para cada plataforma y segmento de audiencia.' },
        { question: '¿En cuánto tiempo se ven los resultados?', answer: 'A diferencia del SEO, los resultados de Performance Marketing son casi inmediatos. Una vez lanzada la campaña, podés empezar a recibir tráfico y conversiones en cuestión de horas o días. La optimización para mejorar el ROI es un proceso continuo.' },
        { question: '¿Manejan campañas para Ecommerce?', answer: 'Sí, es una de nuestras especialidades. Creamos y gestionamos campañas de Google Shopping, catálogos en Instagram y estrategias avanzadas para tiendas online.' },
        { question: 'Ya tengo campañas activas, ¿pueden optimizarlas?', answer: '¡Por supuesto! Ofrecemos un servicio de auditoría de campañas donde analizamos tu setup actual y te proponemos un plan de acción para mejorar el rendimiento y bajar los costos por conversión.' },
        { question: '¿Cómo es el reporte de resultados?', answer: 'Recibirás reportes periódicos (semanales o mensuales) con las métricas más importantes de forma clara y visual, junto con nuestro análisis y los próximos pasos a seguir. Transparencia total.' },
    ]
  },
  {
    slug: 'crm',
    title: 'CRM',
    meta: {
      title: 'Implementación de CRM en Argentina | Manya Digital',
      description: 'Expertos en implementación y automatización de CRM (HubSpot, Salesforce). Organizá tus ventas, marketing y atención al cliente para escalar tu negocio.',
    },
    hero: {
      h1: 'Expertos en Implementación de CRM en Argentina',
      subservices: ['Implementación HubSpot', 'Automatización de Ventas', 'Email Marketing', 'Lead Scoring', 'Integraciones'],
    },
    cta1: {
      h2: '¿Necesitás implementar o potenciar un CRM?',
      p: 'Si tus contactos están en un Excel, las consultas se pierden y no sabés en qué estado está cada cliente potencial, necesitás un CRM. Centralizá toda tu operación y empezá a vender de forma inteligente.',
      button: 'Quiero organizar mi negocio',
    },
    why: {
      h3: '¿Por qué tu negocio necesita un CRM?',
      points: [
        { title: 'Visión 360° del Cliente', description: 'Toda la información y cada interacción con tus clientes en un solo lugar. Accesible para todo tu equipo.' },
        { title: 'Automatización de Tareas', description: 'Dejá de hacer tareas manuales y repetitivas. El CRM trabaja por vos, nutriendo leads y siguiendo ventas.' },
        { title: 'Ventas más Eficientes', description: 'Tu equipo de ventas sabrá exactamente a quién contactar, cuándo y con qué mensaje. Cero fricción.' },
        { title: 'Marketing Personalizado', description: 'Segmentá tu base de datos y enviá comunicaciones ultra-personalizadas que realmente conviertan.' },
      ],
    },
    cta2: {
      h2: 'Primera Consultoría de CRM Gratis',
      button: 'Agendar mi consultoría',
    },
howWeHelp: {
      h3: 'Cómo te ayudamos a implementar y exprimir tu CRM',
      p: 'No solo instalamos un software. Entendemos tu proceso comercial y adaptamos la herramienta a tu negocio, no al revés. Capacitamos a tu equipo y creamos las automatizaciones que te harán la vida más fácil.',
      points: [
        'Selección de la plataforma de CRM adecuada para tu negocio (HubSpot, Salesforce, etc).',
        'Configuración inicial, importación de datos y personalización de pipelines.',
        'Creación de workflows de automatización para marketing, ventas y servicio.',
        'Implementación de lead scoring para priorizar los mejores prospectos.',
        'Capacitación a tu equipo para asegurar la adopción y el uso correcto de la herramienta.',
      ],
    },
    factors: {
      h3: '¿Qué factores garantizan una implementación exitosa?',
      p: 'Un CRM es más que un software, es una filosofía de trabajo. El éxito depende de:',
      points: [
        'Un claro entendimiento de tus procesos de venta y marketing.',
        'La correcta configuración y personalización de la plataforma.',
        'La capacitación y el compromiso de todo el equipo para usarlo.',
        'La calidad de los datos que se cargan en el sistema.',
        'La creación de automatizaciones que realmente ahorren tiempo y generen valor.',
      ],
    },
    rank: {
      h3: '¿Puede un CRM transformar mi negocio?',
      points: [
        { title: 'Datos Centralizados', description: 'Pasá del caos de los Excels a una única fuente de verdad sobre tus clientes.' },
        { title: 'Procesos Escalables', description: 'Definí y automatizá tus procesos para poder crecer sin que se rompa nada.' },
        { title: 'Decisiones Informadas', description: 'Tené dashboards y reportes en tiempo real para tomar decisiones basadas en datos, no en intuición.' },
        { title: 'Experiencia Superior', description: 'Ofrecé una experiencia consistente y personalizada a tus clientes en cada punto de contacto.' },
      ],
    },
    position: {
      h3: 'El motor para escalar tu negocio',
      p: 'Un CRM bien implementado es el sistema nervioso central de tu empresa. Te permite alinear tus equipos de marketing, ventas y atención al cliente para trabajar juntos hacia un solo objetivo: crecer de forma ordenada y rentable.',
      button: 'Quiero escalar mi operación',
    },
    faqs: [
        { question: '¿Qué es un CRM?', answer: 'CRM son las siglas de "Customer Relationship Management" (Gestión de la Relación con el Cliente). Es un software que te permite centralizar en un solo lugar toda la información e interacciones con tus prospectos y clientes.' },
        { question: '¿Mi empresa es muy chica para un CRM?', answer: '¡Al contrario! Empezar con un CRM desde el principio te permite sentar las bases para crecer de forma ordenada. Hay opciones de CRM, como el gratuito de HubSpot, que son ideales para pymes y startups.' },
        { question: '¿Con qué CRMs trabajan?', answer: 'Somos expertos en HubSpot, uno de los CRMs líderes del mercado, y también tenemos experiencia con otras plataformas como Salesforce. Te ayudamos a elegir el más adecuado para vos.' },
        { question: 'Ya tengo un CRM, pero no lo usamos bien. ¿Pueden ayudar?', answer: 'Sí. Ofrecemos servizi de consultoría y auditoría de CRM para optimizar tu configuración actual, limpiar tus datos, crear nuevas automatizaciones y volver a capacitar a tu equipo para que le saquen el jugo.' },
        { question: '¿Qué es la "automatización de marketing"?', answer: 'Es el uso del CRM para ejecutar acciones de marketing de forma automática. Por ejemplo, enviar una secuencia de emails a un nuevo lead, notificar a un vendedor cuando un prospecto visita la página de precios, etc.' },
        { question: '¿Qué es el "lead scoring"?', answer: 'Es un sistema que califica automáticamente a tus prospectos (leads) basándose en su perfil y su comportamiento (ej. abrió un email, visitó una página, etc.). Esto permite que tu equipo de ventas se enfoque en los leads más "calientes" y con más chances de comprar.' },
        { question: '¿Cuánto tiempo lleva implementar un CRM?', answer: 'Una implementación básica puede tomar de 2 a 4 semanas. Proyectos más complejos con migraciones de datos y automatizaciones avanzadas pueden llevar más tiempo. Armamos un plan de trabajo detallado para cada caso.' },
        { question: '¿La implementación incluye capacitación?', answer: 'Sí, siempre. La adopción por parte del equipo es clave para el éxito de un CRM. Realizamos sesiones de capacitación prácticas y dejamos material de consulta para que todos sepan cómo usar la herramienta.' },
        { question: '¿Se puede integrar el CRM con mi página web?', answer: 'Absolutamente. Integramos el CRM con los formularios de tu web para que todos los nuevos contactos entren automáticamente al sistema. También se puede integrar con tu tienda online, sistema de chat, etc.' },
        { question: '¿Cuál es el costo de un CRM?', answer: 'Varía mucho. Hay CRMs con versiones gratuitas muy potentes, y otros con licencias que cuestan miles de dólares. El costo depende de la cantidad de usuarios y las funcionalidades que necesites. Nuestro trabajo es encontrar la mejor opción para tu presupuesto y objetivos.' },
    ]
  },
  {
    slug: 'automatizaciones',
    title: 'Automatizaciones',
    meta: {
      title: 'Automatizaciones con IA en Argentina | Manya Digital',
      description: 'Optimizá procesos y escalá tu negocio con nuestros servicios de automatización con IA. Expertos en Zapier, Make y desarrollo de workflows inteligentes.',
    },
    hero: {
      h1: 'Tu agencia de Automatizaciones con IA en Argentina',
      subservices: ['Workflows Inteligentes', 'Integración de Apps (Zapier/Make)', 'Chatbots con IA', 'Automatización de Marketing', 'Optimización de Procesos'],
    },
    cta1: {
      h2: '¿Necesitás automatizar tu negocio?',
      p: 'Si pasás el día haciendo tareas manuales y repetitivas, estás perdiendo tiempo y plata. Te ayudamos a diseñar e implementar sistemas automáticos que trabajan por vos, para que te dediques a lo que importa: hacer crecer tu negocio.',
      button: 'Quiero automatizar mis tareas',
    },
    why: {
      h3: '¿Por qué la automatización es el futuro?',
      points: [
        { title: 'Ahorrá Tiempo (y Plata)', description: 'Liberá a tu equipo de tareas repetitivas para que puedan enfocarse en actividades de alto valor.' },
        { title: 'Eliminá Errores Humanos', description: 'Los sistemas automáticos no se cansan ni se equivocan. Asegurá consistencia y calidad en tus procesos.' },
        { title: 'Escalá sin Límites', description: 'Las automatizaciones te permiten manejar un volumen mucho mayor de trabajo sin necesidad de contratar más gente.' },
        { title: 'Mejorá la Experiencia', description: 'Respondé al instante a tus clientes, nutrí a tus leads 24/7 y ofrecé un servicio que parece magia.' },
      ],
    },
    cta2: {
      h2: 'Pedí tu Diagnóstico de Automatización Gratis',
      button: 'Descubrir mi potencial de ahorro',
    },
    howWeHelp: {
      h3: 'Cómo te ayudamos a construir tu "ejército" de robots',
      p: 'Mapeamos tus procesos actuales, identificamos cuellos de botella y tareas repetitivas, y diseñamos workflows inteligentes que conectan tus herramientas y hacen el trabajo pesado por vos.',
      points: [
        'Análisis de procesos de negocio para detectar oportunidades de automatización.',
        'Diseño y construcción de flujos de trabajo en plataformas como Zapier o Make.',
        'Desarrollo de chatbots con IA para calificar leads y responder preguntas frecuentes.',
        'Automatización de embudos de venta y marketing para nutrir prospectos.',
        'Integración de todas tus aplicaciones para que hablen entre sí sin problemas.',
      ],
    },
    factors: {
      h3: '¿Qué se necesita para una automatización exitosa?',
      p: 'Una buena automatización no es solo conectar dos apps. Requiere una visión estratégica:',
      points: [
        'Un profundo entendimiento de los procesos que se quieren automatizar.',
        'Elección de las herramientas de software (SaaS) adecuadas.',
        'Una lógica de negocio clara con condicionales y flujos bien definidos.',
        'Un plan de monitoreo para asegurar que todo funcione como se espera.',
        'Capacidad de adaptación para ajustar los flujos a medida que el negocio cambia.',
      ],
    },
    rank: {
      h3: '¿Realmente puedo automatizar mi empresa?',
      points: [
        { title: 'Empezá de a Poco', description: 'Identificamos una tarea simple y repetitiva y la automatizamos. El primer "win" te motivará a seguir.' },
        { title: 'Conectá lo que ya Usás', description: 'No necesitás cambiar todo tu software. Integramos las herramientas que ya te gustan.' },
        { title: 'Medí el Impacto', description: 'Calculamos las horas ahorradas y el aumento de eficiencia para que veas el ROI tangible.' },
        { title: 'Crecimiento Exponencial', description: 'Cada proceso que automatizás libera recursos para que te dediques a innovar y crecer.' },
      ],
    },
    position: {
      h3: 'Tu negocio en piloto automático',
      p: 'Imaginá un negocio que genera leads, los nutre, agenda reuniones y cierra ventas, todo mientras vos dormís. Esa es la promesa de la automatización. Te ayudamos a construir ese sistema para que puedas escalar de verdad.',
      button: 'Poner mi negocio en automático',
    },
    faqs: [
        { question: '¿Qué tipo de tareas se pueden automatizar?', answer: 'Casi cualquier tarea digital y repetitiva. Desde pasar datos de un formulario a un CRM, enviar emails de seguimiento, generar reportes, hasta calificar leads con un chatbot. Las posibilidades son enormes.' },
        { question: '¿Necesito saber de programación?', answer: 'No. Utilizamos herramientas "no-code" como Zapier y Make que nos permiten construir automatizaciones complejas sin necesidad de escribir código, lo que hace el proceso más rápido y económico.' },
        { question: '¿Qué es Zapier o Make?', answer: 'Son plataformas de integración (iPaaS) que actúan como traductores entre miles de aplicaciones web (Gmail, Slack, HubSpot, etc.). Te permiten crear "recetas" del tipo: "cuando pase esto en la App A, hacé esto otro en la App B".' },
        { question: '¿Es muy caro implementar automatizaciones?', answer: 'No necesariamente. El costo de las herramientas como Zapier o Make depende del volumen de tareas que ejecuten. El retorno de la inversión suele ser muy alto, considerando las horas de trabajo manual que se ahorran.' },
        { question: '¿Un chatbot puede reemplazar a un vendedor?', answer: 'No lo reemplaza, lo potencia. Un chatbot con IA puede atender consultas 24/7, responder preguntas frecuentes y calificar a los leads, para que tus vendedores solo hablen con los prospectos más interesados y listos para comprar.' },
        { question: '¿Cómo empezamos?', answer: 'El primer paso es una sesión de diagnóstico. Analizamos tus procesos actuales, identificamos las tareas más repetitivas y que más tiempo consumen, y te presentamos un plan de automatización con el ROI estimado.' },
        { question: '¿Se puede automatizar el proceso de ventas?', answer: 'Sí. Podemos automatizar gran parte del embudo de ventas: la captura de leads, el envío de secuencias de nutrición, el agendamiento de reuniones y el seguimiento post-venta.' },
        { question: 'Tengo muchas apps diferentes, ¿se pueden conectar?', answer: 'Muy probablemente. Plataformas como Zapier tienen miles de integraciones nativas. Y para las que no, existen métodos como webhooks o APIs para conectarlas.' },
        { question: '¿Qué seguridad tienen estos procesos?', answer: 'Trabajamos con plataformas líderes del mercado que cumplen con altos estándares de seguridad. Nos aseguramos de manejar los datos de forma responsable y segura en cada paso del proceso.' },
        { question: '¿Una vez implementado, requiere mantenimiento?', answer: 'Recomendamos un monitoreo periódico para asegurar que las automatizaciones sigan funcionando correctamente, especialmente si alguna de las aplicaciones conectadas se actualiza. Ofrecemos planes de mantenimiento para tu tranquilidad.' },
    ]
  },
];
