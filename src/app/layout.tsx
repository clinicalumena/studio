import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/manya/header';
import { Footer } from '@/components/manya/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Argentina | Manya Digital',
  description:
    'Manya Digital es tu agencia de marketing en Argentina. Potenciamos tu marca con estrategias de SEO, IA y marketing online a medida para que alcances tus objetivos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <head>
      </head>
      <body
        className='font-sans bg-background text-foreground antialiased'
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
