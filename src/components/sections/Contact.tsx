import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface FormData {
  fullName: string;
  email: string;
  revenue: string;
  goals: string;
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    revenue: '$10k - $25k',
    goals: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className='py-24 bg-background-dark' id='contact'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 p-8 md:p-16 rounded-xl'>
          <div className='text-center mb-12'>
            <h2 className='section-title'>{t.contact.badge}</h2>
            <h3 className='text-4xl md:text-5xl font-black text-slate-100 uppercase tracking-tighter mb-4'>
              {t.contact.title}{' '}
              <span className='text-primary italic'>{t.contact.subtitle}</span>
            </h3>
            <p className='text-slate-400 font-light'>
              {t.contact.description}
            </p>
          </div>
          
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label className='text-[10px] uppercase font-bold tracking-widest text-slate-500'>
                  Full Name
                </label>
                <input
                  className='form-input'
                  placeholder='John Architect'
                  type='text'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='space-y-2'>
                <label className='text-[10px] uppercase font-bold tracking-widest text-slate-500'>
                  Business Email
                </label>
                <input
                  className='form-input'
                  placeholder='john@coaching.com'
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            
            <div className='space-y-2'>
              <label className='text-[10px] uppercase font-bold tracking-widest text-slate-500'>
                Current Monthly Revenue
              </label>
              <select
                className='form-input appearance-none'
                name='revenue'
                value={formData.revenue}
                onChange={handleInputChange}
              >
                <option value='$10k - $25k'>$10k - $25k</option>
                <option value='$25k - $50k'>$25k - $50k</option>
                <option value='$50k - $100k'>$50k - $100k</option>
                <option value='$100k+'>$100k+</option>
              </select>
            </div>
            
            <div className='space-y-2'>
              <label className='text-[10px] uppercase font-bold tracking-widest text-slate-500'>
                Scaling Goals
              </label>
              <textarea
                className='form-input'
                placeholder='Tell us about your architectural vision...'
                rows={4}
                name='goals'
                value={formData.goals}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <button
              className='w-full bg-primary text-background-dark py-5 text-base font-black uppercase tracking-[0.2em] hover:bg-primary/90 transition-all rounded'
              type='submit'
            >
              {t.contact.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;