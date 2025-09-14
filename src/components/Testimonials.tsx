
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      text: t('testimonials.review1.text'),
      author: t('testimonials.review1.author'),
      role: t('testimonials.review1.role')
    },
    {
      id: 2,
      text: t('testimonials.review2.text'),
      author: t('testimonials.review2.author'),
      role: t('testimonials.review2.role')
    },
    {
      id: 3,
      text: t('testimonials.review3.text'),
      author: t('testimonials.review3.author'),
      role: t('testimonials.review3.role')
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            {t('testimonials.title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-stone-50 p-8 border-l-4 border-amber-600"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-amber-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-stone-700 font-light leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div>
                <div className="font-serif text-stone-800">{testimonial.author}</div>
                <div className="text-stone-500 text-sm font-light">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
