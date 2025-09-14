
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-amber-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif text-stone-800 leading-tight">
              {t('hero.title.main')}
              <span className="block text-amber-600">{t('hero.title.accent')}</span>
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToPortfolio}
              className="bg-stone-800 text-white px-8 py-4 hover:bg-stone-700 transition-colors duration-300 font-light tracking-wide"
            >
              {t('hero.cta.primary')}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-stone-300 text-stone-800 px-8 py-4 hover:bg-stone-100 transition-colors duration-300 font-light tracking-wide"
            >
              {t('hero.cta.secondary')}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80"
              alt="Elegant living room interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-100 -z-10"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-stone-300 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
