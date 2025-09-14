
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'how-it-works', label: t('nav.process') },
    { id: 'testimonials', label: t('nav.testimonials') },
    { id: 'faq', label: t('nav.faq') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-serif text-stone-800">
            Prosa Interior
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-600 hover:text-stone-800 transition-colors duration-200 font-light"
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('de')}
                className={`text-sm font-light transition-colors duration-200 ${
                  language === 'de' ? 'text-stone-800 font-medium' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                DE
              </button>
              <span className="text-stone-400">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-light transition-colors duration-200 ${
                  language === 'en' ? 'text-stone-800 font-medium' : 'text-stone-500 hover:text-stone-700'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-stone-600 hover:text-stone-800 transition-colors duration-200 font-light py-3 px-6 text-left"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-2 mt-4 pt-4 border-t border-stone-200">
                <button
                  onClick={() => setLanguage('de')}
                  className={`text-sm font-light transition-colors duration-200 px-3 py-1 ${
                    language === 'de' ? 'text-stone-800 font-medium' : 'text-stone-500'
                  }`}
                >
                  DE
                </button>
                <span className="text-stone-400">|</span>
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-light transition-colors duration-200 px-3 py-1 ${
                    language === 'en' ? 'text-stone-800 font-medium' : 'text-stone-500'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
