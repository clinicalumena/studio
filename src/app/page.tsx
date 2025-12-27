
import { HeroSection } from '@/components/manya/hero-section';
import { ServicesSection } from '@/components/manya/services-section';
import { StatsSection } from '@/components/manya/stats-section';
import { WhyUsSection } from '@/components/manya/why-us-section';
import { FinalCtaSection } from '@/components/manya/final-cta-section';
import { BlogPreviewSection } from '@/components/manya/blog-preview-section';
import { TestimonialsSection } from '@/components/manya/testimonials-section';
import { SuccessCasesSection } from '@/components/manya/success-cases-section';
import { FaqSection } from '@/components/manya/faq-section';
import { LocationsSection } from '@/components/manya/locations-section';
import { ClientsSection } from '@/components/manya/clients-section';

export default function Home() {
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://manyadigital.ar',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://manyadigital.ar/buscar?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ClientsSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <StatsSection />
      <LocationsSection />
      <BlogPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
