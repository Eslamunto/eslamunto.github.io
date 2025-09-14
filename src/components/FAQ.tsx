
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      id: "item-1",
      question: "How long does a typical interior design project take?",
      answer: "Project timelines vary depending on scope and complexity. A full room redesign typically takes 8-12 weeks, while larger homes can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      id: "item-2",
      question: "Do you work with existing furniture and decor?",
      answer: "Absolutely! We love incorporating pieces that have sentimental value or work well with our design vision. During our consultation, we'll assess your existing items and determine how to best integrate them into the new design."
    },
    {
      id: "item-3",
      question: "What is included in your design fee?",
      answer: "Our design fee includes initial consultation, space planning, design concepts, mood boards, detailed drawings, product sourcing, and project management. We provide transparent pricing with no hidden costs."
    },
    {
      id: "item-4",
      question: "Do you handle the purchasing and installation?",
      answer: "Yes, we manage the entire process from sourcing and purchasing to coordinating delivery and installation. This ensures quality control and saves you time and stress."
    },
    {
      id: "item-5",
      question: "Can you work within my budget?",
      answer: "We work with various budget ranges and will discuss your investment level during our consultation. We're committed to maximizing value while achieving your design goals."
    },
    {
      id: "item-6",
      question: "Do you offer virtual design consultations?",
      answer: "Yes, we offer both in-person and virtual consultations to accommodate different preferences and locations. Virtual consultations include detailed questionnaires and video walkthroughs."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            {t('faq.title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 font-light">
            {t('faq.subtitle')}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="border border-stone-200 rounded-lg px-6 bg-stone-50"
            >
              <AccordionTrigger className="text-left font-serif text-stone-800 hover:text-amber-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 font-light leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-stone-600 font-light mb-6">
            Have a question that's not answered here?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-stone-800 text-white px-8 py-3 hover:bg-stone-700 transition-colors duration-300 font-light tracking-wide"
          >
            {t('faq.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
