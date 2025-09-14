
import React from 'react';
import { Users, Palette, Hammer, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      id: 1,
      icon: Users,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc')
    },
    {
      id: 2,
      icon: Palette,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc')
    },
    {
      id: 3,
      icon: Hammer,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc')
    },
    {
      id: 4,
      icon: Sparkles,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.desc')
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            {t('howItWorks.title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-800 text-white text-sm font-serif rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-stone-300 -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
