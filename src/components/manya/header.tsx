
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { Separator } from '../ui/separator';


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 shadow-sm backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" passHref>
          <Code className="h-8 w-8 text-primary" strokeWidth={2}/>
          <span className="font-headline font-bold text-2xl text-foreground">
            Manya Digital
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
            <Button asChild className='hidden md:flex bg-primary text-primary-foreground transition-transform duration-300 ease-in-out hover:scale-105'>
                <Link href="/contacto">Hablemos</Link>
            </Button>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm bg-background p-0">
                  <SheetHeader className="p-6 pb-0">
                     <SheetTitle>
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                            onClick={closeMobileMenu}
                        >
                            <Code className="h-8 w-8 text-primary" strokeWidth={2}/>
                            <span className="font-headline font-bold text-xl text-foreground">
                            Manya Digital
                            </span>
                        </Link>
                     </SheetTitle>
                  </SheetHeader>
                  <Separator className="my-4" />
                  <div className="flex h-full flex-col p-6 pt-0">
                    <nav className="flex flex-col gap-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="text-xl font-medium text-foreground transition-colors hover:text-primary py-2"
                          onClick={closeMobileMenu}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </nav>
                    <Separator className="my-6" />
                    <Button asChild className='w-full' size="lg">
                        <Link href="/contacto" onClick={closeMobileMenu}>Hablemos de tu proyecto</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
