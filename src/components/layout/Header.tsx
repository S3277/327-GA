import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from '../ui/theme-toggle';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img
              src='/IMG_3904.png'
              alt='327 Logo'
              className='h-14 w-14 rounded object-cover'
            />
            <div className='flex flex-col -space-y-1'>
              <span className='text-2xl font-black tracking-tighter uppercase text-white'>
                327
              </span>
              <span className='text-[10px] font-bold tracking-wider uppercase text-slate-400'>
                Growth Architect
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-10'>
            <button
              onClick={() => scrollToSection('services')}
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('framework')}
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
            >
              {t.nav.framework}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
            >
              {t.nav.about}
            </button>
            <div className='h-4 w-px bg-slate-700'></div>
            <LanguageToggle isEnglish={language === 'en'} onToggle={toggleLanguage} />
          </nav>

          <div className='flex items-center gap-4'>
            <button
              onClick={() => scrollToSection('contact')}
              className='bg-primary text-background-dark px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all rounded'
            >
              {t.nav.bookCall}
            </button>
            <button
              className='md:hidden text-slate-100 hover:text-primary transition-colors'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden py-4 border-t border-slate-700'>
            <div className='flex flex-col space-y-4'>
              <button
                onClick={() => scrollToSection('services')}
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-left'
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('framework')}
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-left'
              >
                {t.nav.framework}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-left'
              >
                {t.nav.about}
              </button>
              <div className='flex justify-start py-2'>
                <LanguageToggle isEnglish={language === 'en'} onToggle={toggleLanguage} />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;