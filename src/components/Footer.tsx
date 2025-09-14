
import React from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-stone-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif mb-4">{t('footer.company.title')}</h3>
            <p className="text-stone-300 font-light leading-relaxed max-w-md">
              {t('footer.company.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-stone-300 font-light">
              <li>{t('footer.services.residential')}</li>
              <li>{t('footer.services.commercial')}</li>
              <li>{t('footer.services.consultation')}</li>
              <li>{t('footer.services.planning')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">{t('footer.contact.title')}</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-700 p-3 hover:bg-stone-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-stone-700 p-3 hover:bg-stone-600 transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.805 1.604.805 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.017-4.188-4.017-2.94 0-4.693 1.919-4.693 4.25 0 .846.133 1.594.507 2.229.084.143.108.244.069.375-.055.185-.182.724-.209.825-.038.142-.123.176-.285.107-1.001-.465-1.696-2.122-1.696-3.768 0-2.764 2.226-6.062 6.633-6.062 3.707 0 6.011 2.644 6.011 5.466 0 3.751-2.109 6.181-5.242 6.181-1.072 0-2.083-.574-2.428-1.233l-.627 2.514c-.233.906-.691 1.641-1.125 2.25C10.539 18.936 11.255 19 12 19c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z"/>
                </svg>
              </a>
            </div>
            <div className="text-stone-300 font-light">
              <p>{t('contact.info.email')}</p>
              <p>{t('contact.info.phone')}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-stone-400 font-light">
            <p>{t('footer.copyright')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-200">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors duration-200">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
