
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
        telephone: '+54-9-11-1234-5678',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Corrientes 1234, Piso 5',
          addressLocality: 'Buenos Aires',
          postalCode: 'C1043AAS',
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
