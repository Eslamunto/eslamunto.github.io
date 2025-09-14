
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif text-stone-800">
                {t('about.title')}
              </h2>
              <div className="w-16 h-px bg-amber-600"></div>
            </div>
            
            <div className="space-y-6 text-stone-600 font-light leading-relaxed">
              <p className="text-lg">
                {t('about.text1')}
              </p>
              <p>
                {t('about.text2')}
              </p>
              <p>
                {t('about.text3')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">50+</div>
                <div className="text-stone-600 font-light">{t('about.stats.projects')}</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">100+</div>
                <div className="text-stone-600 font-light">{t('about.stats.clients')}</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-stone-800 mb-2">10+</div>
                <div className="text-stone-600 font-light">{t('about.stats.experience')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] bg-stone-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                alt="Interior designer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
