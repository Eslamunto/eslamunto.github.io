import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Prozess',
    'nav.testimonials': 'Referenzen',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.title.main': 'Zeitlose',
    'hero.title.accent': 'Innenräume',
    'hero.subtitle': 'Wir schaffen anspruchsvolle Räume, die Ihre einzigartige Geschichte widerspiegeln und Funktionalität mit zeitloser Eleganz verbinden.',
    'hero.cta.primary': 'Unsere Arbeiten ansehen',
    'hero.cta.secondary': 'Projekt starten',
    
    // About
    'about.title': 'Über Prosa Interior',
    'about.subtitle': 'Leidenschaft für zeitloses Design',
    'about.text1': 'Ich bin Sarah – eine Innenarchitektin mit einer Leidenschaft dafür, Räume zu schaffen, die stilvoll, funktional und persönlich sind. Mein Ziel ist es, Innenräume zu gestalten, die Ihr Leben, Ihre Bedürfnisse und Ihr Budget widerspiegeln.',
    'about.text2': 'Was meine Arbeit auszeichnet: Ein raffiniertes Gespür für Raum, Farbe und Materialien • Kreative Lösungen, auch bei kleineren Budgets • Erfahrung in Design, Marketing & Kommunikation • Inspiration aus Reisen, Architektur und Fotografie',
    'about.text3': 'Ich glaube, dass großartiges Design keine teuren Möbel braucht – nur ein starkes Konzept und einen Raum, der sich richtig anfühlt.',
    'about.stats.projects': 'Projekte abgeschlossen',
    'about.stats.clients': 'Zufriedene Kunden',
    'about.stats.experience': 'Jahre Erfahrung',
    
    // Portfolio
    'portfolio.title': 'Unser Portfolio',
    'portfolio.subtitle': 'Entdecken Sie unsere neuesten Projekte',
    'portfolio.filter.all': 'Alle',
    'portfolio.filter.residential': 'Wohnbereich',
    'portfolio.filter.commercial': 'Gewerbe',
    'portfolio.filter.hospitality': 'Gastgewerbe',
    
    // How It Works
    'howItWorks.title': 'Wie es funktioniert',
    'howItWorks.subtitle': 'Ihre Online-Innenarchitektur-Beratung ist einfach, persönlich und vollständig digital.',
    'howItWorks.step1.title': 'Kostenloses Erstgespräch (30 Min)',
    'howItWorks.step1.desc': 'Wir sprechen über Ihren Raum, Ihre Wünsche und Ihre Design-Herausforderungen.',
    'howItWorks.step2.title': 'Teilen Sie Ihren Raum',
    'howItWorks.step2.desc': 'Sie senden mir Fotos, ein kurzes Video, Maße oder einfach Ihre Fragen per Sprachnachricht.',
    'howItWorks.step3.title': 'Zwei Design-Konzepte',
    'howItWorks.step3.desc': 'Ich erstelle Moodboards, Farbpaletten und konkrete Design-Ideen, die auf Sie zugeschnitten sind.',
    'howItWorks.step4.title': 'Finales Konzept & Lieferung',
    'howItWorks.step4.desc': 'Sie wählen Ihren Lieblingsansatz. Ich liefere: Klare Umsetzungstipps, Eine Einkaufsliste mit direkten Links, Eine 2D-Raumskizze oder Grundriss für Ihren Raum.',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.subtitle': 'Erfahrungen, die für sich sprechen',
    'testimonials.review1.text': '„Aus einem grauen Bad wurde ein echtes Highlight – jedes Detail passt perfekt. Sarahs Leidenschaft und Kreativität haben uns begeistert."',
    'testimonials.review1.author': 'Christina',
    'testimonials.review1.role': 'Homeowner',
    'testimonials.review2.text': '„Mit Sarahs Beratung wurde mein Wohnzimmer endlich modern und gemütlich. Ihre Farbideen und die stylischen Details machen meine Couch jetzt zum Hingucker."',
    'testimonials.review2.author': 'Cara',
    'testimonials.review2.role': '',
    'testimonials.review3.text': '„Sarah hat aus meinem Schlafzimmer eine richtige Wohlfühloase gemacht. Mit wenigen, gezielten Veränderungen wirkt der Raum jetzt viel heller und harmonischer."',
    'testimonials.review3.author': 'Lukas',
    'testimonials.review3.role': '',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Alles was Sie über unsere Dienstleistungen wissen müssen',
    'faq.cta': 'Kontakt aufnehmen',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Lassen Sie uns Ihr Traumzuhause gemeinsam gestalten',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.phone': 'Telefon',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.address': 'Musterstraße 123, 10115 Berlin',
    'contact.info.phone': '+49 30 123 456 789',
    'contact.info.email': 'info@prosainterior.com',
    'contact.info.hours': 'Mo-Fr: 9:00-18:00',
    
    // Footer
    'footer.company.title': 'Prosa Interior',
    'footer.company.desc': 'Zeitlose Innenarchitektur für anspruchsvolle Kunden',
    'footer.services.title': 'Leistungen',
    'footer.services.residential': 'Wohnbereich',
    'footer.services.commercial': 'Gewerbe',
    'footer.services.consultation': 'Beratung',
    'footer.services.planning': 'Planung',
    'footer.contact.title': 'Kontakt',
    'footer.follow': 'Folgen Sie uns',
    'footer.copyright': '© 2024 Prosa Interior. Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title.main': 'Timeless',
    'hero.title.accent': 'Interiors',
    'hero.subtitle': 'We craft sophisticated spaces that reflect your unique story, blending functionality with timeless elegance.',
    'hero.cta.primary': 'View Our Work',
    'hero.cta.secondary': 'Start Your Project',
    
    // About
    'about.title': 'About Prosa Interior',
    'about.subtitle': 'Passion for timeless design',
    'about.text1': 'I\'m Sarah – an interior designer with a passion for creating spaces that are stylish, functional, and personal. My goal is to design interiors that reflect your life, your needs, and your budget.',
    'about.text2': 'What defines my work: A refined sense for space, color, and materials • Creative solutions, even on smaller budgets • Experience in design, marketing & communication • Inspiration from travel, architecture, and photography',
    'about.text3': 'I believe great design doesn\'t need expensive furniture – just a strong concept and a space that feels right.',
    'about.stats.projects': 'Projects completed',
    'about.stats.clients': 'Happy clients',
    'about.stats.experience': 'Years of experience',
    
    // Portfolio
    'portfolio.title': 'Our Portfolio',
    'portfolio.subtitle': 'Discover our latest projects',
    'portfolio.filter.all': 'All',
    'portfolio.filter.residential': 'Residential',
    'portfolio.filter.commercial': 'Commercial',
    'portfolio.filter.hospitality': 'Hospitality',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Your online interior design consultation is simple, personal, and entirely digital.',
    'howItWorks.step1.title': 'Free Intro Call (30 min)',
    'howItWorks.step1.desc': 'We talk about your space, your wishes, and your design challenges.',
    'howItWorks.step2.title': 'Share Your Space',
    'howItWorks.step2.desc': 'You send me photos, a quick video, measurements, or just your questions via voice message.',
    'howItWorks.step3.title': 'Two Design Concepts',
    'howItWorks.step3.desc': 'I create mood boards, color palettes, and concrete design ideas tailored to you.',
    'howItWorks.step4.title': 'Final Concept & Delivery',
    'howItWorks.step4.desc': 'You choose your favorite approach. I provide: Clear implementation tips, A shopping list with direct links, A 2D room sketch or layout for your space.',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'Experiences that speak for themselves',
    'testimonials.review1.text': '"From a gray bathroom to a real highlight – every detail fits perfectly. Sarah\'s passion and creativity impressed us."',
    'testimonials.review1.author': 'Christina',
    'testimonials.review1.role': 'Homeowner',
    'testimonials.review2.text': '"With Sarah\'s advice, my living room finally became modern and cozy. Her color ideas and stylish details now make my couch an eye-catcher."',
    'testimonials.review2.author': 'Cara',
    'testimonials.review2.role': '',
    'testimonials.review3.text': '"Sarah transformed my bedroom into a real comfort oasis. With few, targeted changes, the room now looks much brighter and more harmonious."',
    'testimonials.review3.author': 'Lukas',
    'testimonials.review3.role': '',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about our services',
    'faq.cta': 'Get in Touch',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s create your dream space together',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Musterstraße 123, 10115 Berlin',
    'contact.info.phone': '+49 30 123 456 789',
    'contact.info.email': 'info@prosainterior.com',
    'contact.info.hours': 'Mon-Fri: 9:00-18:00',
    
    // Footer
    'footer.company.title': 'Prosa Interior',
    'footer.company.desc': 'Timeless interior design for discerning clients',
    'footer.services.title': 'Services',
    'footer.services.residential': 'Residential',
    'footer.services.commercial': 'Commercial',
    'footer.services.consultation': 'Consultation',
    'footer.services.planning': 'Planning',
    'footer.contact.title': 'Contact',
    'footer.follow': 'Follow Us',
    'footer.copyright': '© 2024 Prosa Interior. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['de']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};