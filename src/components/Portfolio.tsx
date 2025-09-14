
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Scandinavian Home',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&q=80',
      description: 'Minimalist design with warm wood tones'
    },
    {
      id: 2,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
      description: 'Luxurious and welcoming atmosphere'
    },
    {
      id: 3,
      title: 'Contemporary Apartment',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      description: 'Clean lines with artistic touches'
    },
    {
      id: 4,
      title: 'Creative Office Space',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80',
      description: 'Inspiring workspace design'
    }
  ];

  const categories = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'residential', label: t('portfolio.filter.residential') },
    { key: 'commercial', label: t('portfolio.filter.commercial') },
    { key: 'hospitality', label: t('portfolio.filter.hospitality') }
  ];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            {t('portfolio.title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-white p-2 rounded-full shadow-sm">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-light ${
                  selectedCategory === category.key
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-600 hover:text-stone-800'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-stone-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-stone-600 font-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
