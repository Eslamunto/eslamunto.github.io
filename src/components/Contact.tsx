
import React, { useState } from 'react';
import { toast } from "@/hooks/use-toast";
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your inquiry. We'll be in touch soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 font-light max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-stone-800 mb-4">{t('contact.info.title')}</h3>
              <p className="text-stone-600 font-light mb-8">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-stone-800 mb-2">Studio</h4>
                <p className="text-stone-600 font-light">
                  {t('contact.info.address')}
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-stone-800 mb-2">Contact</h4>
                <p className="text-stone-600 font-light">
                  {t('contact.info.email')}<br />
                  {t('contact.info.phone')}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-stone-800 mb-2">Hours</h4>
                <p className="text-stone-600 font-light">
                  {t('contact.info.hours')}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-stone-700 font-light mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 focus:border-amber-600 focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-stone-700 font-light mb-2">
                  {t('contact.form.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-stone-200 focus:border-amber-600 focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-stone-700 font-light mb-2">
                  {t('contact.form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 focus:border-amber-600 focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-stone-700 font-light mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-stone-200 focus:border-amber-600 focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-stone-700 font-light mb-2">
                {t('contact.form.message')} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-stone-200 focus:border-amber-600 focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-stone-800 text-white py-4 hover:bg-stone-700 transition-colors duration-300 font-light tracking-wide"
            >
              {t('contact.form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
