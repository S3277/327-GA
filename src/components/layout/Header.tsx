import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-primary/10 bg-background-dark/80 backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img 
              src='/IMG_3904.png' 
              alt='327 Growth Architect Logo' 
              className='h-14 w-14 rounded object-cover'
            />
            <span className='text-xl font-bold tracking-tighter uppercase text-slate-100'>
              327 <span className='text-primary'>Growth Architect</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center gap-10'>
            <a
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
              href='#services'
            >
              Services
            </a>
            <a
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
              href='#framework'
            >
              Framework
            </a>
            <a
              className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
              href='#about'
            >
              About
            </a>
            <div className='h-4 w-px bg-slate-700'></div>
            <ThemeToggle />
          </nav>

          <div className='flex items-center gap-4'>
            <button className='bg-primary text-background-dark px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-primary/90 transition-all rounded'>
              Book Strategy Call
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
              <a
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
                href='#services'
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
                href='#framework'
                onClick={toggleMenu}
              >
                Framework
              </a>
              <a
                className='text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest'
                href='#about'
                onClick={toggleMenu}
              >
                About
              </a>
              <div className='flex justify-start py-2'>
                <ThemeToggle />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;