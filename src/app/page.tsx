import { HeroSection } from '@/components/manya/hero-section';
import { ServicesSection } from '@/components/manya/services-section';
import { StatsSection } from '@/components/manya/stats-section';
import { WhyUsSection } from '@/components/manya/why-us-section';
import { FinalCtaSection } from '@/components/manya/final-cta-section';
import { BlogPreviewSection } from '@/components/manya/blog-preview-section';
import { TestimonialsSection } from '@/components/manya/testimonials-section';
import { SuccessCasesSection } from '@/components/manya/success-cases-section';
import { FaqSection } from '@/components/manya/faq-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <SuccessCasesSection />
      <TestimonialsSection />
      <StatsSection />
      <BlogPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
