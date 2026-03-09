import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className='bg-background-dark py-12 border-t border-slate-800'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='flex items-center gap-3'>
            <img 
              src='/IMG_3904.png' 
              alt='327 Growth Architect Logo' 
              className='h-6 w-6 rounded object-cover opacity-50'
            />
            <span className='text-xs font-bold text-slate-600 tracking-tighter uppercase'>
              {t.footer.copyright}
            </span>
          </div>
          
          <div className='flex gap-8'>
            <a
              className='text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
            <a
              className='text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
            <a
              className='text-xs font-bold text-slate-500 hover:text-primary transition-colors uppercase'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </div>
          
          <p className='text-[10px] text-slate-700 uppercase tracking-widest'>
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;