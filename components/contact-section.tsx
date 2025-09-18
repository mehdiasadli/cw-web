'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      'Baku, Azerbaijan',
      'Premium Location',
      'Easy Parking'
    ]
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [
      '+994 XX XXX XX XX',
      'Available 6AM - 11PM',
      '7 Days a Week'
    ]
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: [
      'info@crownwellness.az',
      'Quick Response',
      'Professional Support'
    ]
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    details: [
      'Mon-Sun: 6:00 - 23:00',
      'Public Holidays: 8:00 - 20:00',
      'Always Here for You'
    ]
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  },
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook'
  },
  {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  },
  {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  interestedIn: string;
}

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    interestedIn: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      interestedIn: ''
    });
  };

  return (
    <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a] relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AE3537] to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-[#AE3537]/5 via-transparent to-[#AE3537]/5'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
            GET IN <span className='text-[#AE3537]'>TOUCH</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto'>
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className='text-3xl font-bold text-[#AE3537] mb-8'>
              Contact Information
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 mb-12'>
              {contactInfo.map((info, index) => (
                <div key={index} className='group h-full'>
                  <div className='bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg h-full backdrop-blur-sm'>
                    <div className='flex items-start space-x-4 h-full'>
                      <div className='p-3 bg-[#AE3537] rounded-lg group-hover:bg-[#8B2A2D] transition-colors duration-300 flex-shrink-0'>
                        <info.icon className='w-6 h-6 text-white' />
                      </div>
                      <div className='flex-1 flex flex-col'>
                        <h4 className='text-white font-semibold mb-2 text-base'>{info.title}</h4>
                        <div className='flex-1'>
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className={`text-gray-300 text-sm ${detailIndex === 0 ? 'font-medium' : ''}`}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className='text-white font-semibold mb-6'>Follow Our Wellness Journey</h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='group flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-[#AE3537] hover:border-[#AE3537] transition-all duration-300 hover:scale-110 backdrop-blur-sm'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 text-white transition-colors duration-300' />
                  </a>
                ))}
              </div>
              <p className='text-gray-400 text-sm mt-4'>
                Stay connected with Crown Wellness Club for the latest updates, wellness tips, and exclusive offers.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className='bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm shadow-xl'>
              <h3 className='text-3xl font-bold text-[#AE3537] mb-8'>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='fullName' className='block text-white text-sm font-medium mb-2'>
                      Full Name <span className='text-[#AE3537]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm'
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-white text-sm font-medium mb-2'>
                      Email Address <span className='text-[#AE3537]'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm'
                      placeholder='Enter your email address'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-white text-sm font-medium mb-2'>
                      Mobile Phone
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm'
                      placeholder='Enter your phone number'
                    />
                  </div>

                  <div>
                    <label htmlFor='interestedIn' className='block text-white text-sm font-medium mb-2'>
                      Interested In
                    </label>
                    <select
                      id='interestedIn'
                      name='interestedIn'
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm'
                    >
                      <option value=''>Select membership type</option>
                      <option value='essential'>Essential Plan</option>
                      <option value='premium'>Premium Plan</option>
                      <option value='royal'>Crown Royal Plan</option>
                      <option value='tour'>Just a Tour</option>
                      <option value='womens-exclusive'>Women's Exclusive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-white text-sm font-medium mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 resize-none backdrop-blur-sm'
                    placeholder='Tell us about your wellness goals and how we can help you achieve them...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#AE3537] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#8B2A2D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#AE3537]/25 focus:outline-none focus:ring-2 focus:ring-[#AE3537] focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  Send Message
                </button>

                <p className='text-gray-400 text-xs text-center'>
                  By submitting this form, you agree to our privacy policy. We respect your privacy and will never share your information with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-12 border-t border-gray-700 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-[#AE3537] rounded-full flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>C</span>
              </div>
              <span className='text-white font-semibold text-lg'>Crown Wellness Club</span>
            </div>

            <p className='text-gray-400 text-sm'>
              © 2024 Crown Wellness Club. Luxury wellness redefined in Azerbaijan.
            </p>

            <div className='flex items-center space-x-6 text-gray-400 text-sm'>
              <a href='#' className='hover:text-[#AE3537] transition-colors duration-300'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-[#AE3537] transition-colors duration-300'>
                Terms of Service
              </a>
              <a href='#' className='hover:text-[#AE3537] transition-colors duration-300'>
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}