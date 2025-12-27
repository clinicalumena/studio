
import { ContactSection } from "@/components/manya/contact-section";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contacto | Agencia de Marketing Digital Manya",
    description: "Ponete en contacto con nuestro equipo para empezar a potenciar tu marca. Estamos en Buenos Aires, Argentina.",
    openGraph: {
      type: 'website',
      url: '/contacto',
      title: 'Contacto | Manya Digital',
      description: 'Ponete en contacto con nuestro equipo para empezar a potenciar tu marca.',
    },
};

export default function ContactoPage() {
    const contactPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Organization',
        name: 'Manya Digital',
        url: 'https://manyadigital.ar',
        telephone: '+541158578004',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Ambrosio Olmos 782',
          addressLocality: 'Córdoba',
          addressRegion: 'CBA',
          postalCode: 'X5000',
          addressCountry: 'AR',
        },
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
        <ContactSection />
      </>
    );
}
