'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Linkedin, Send, User, AtSign } from 'lucide-react';
import Logo from './logo';
import Link from 'next/link';

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
    details: ['Baku, Azerbaijan', 'Premium Location', 'Easy Parking'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+994 XX XXX XX XX', 'Available 6AM - 11PM', '7 Days a Week'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@crownwellness.az', 'Quick Response', 'Professional Support'],
  },
  {
    icon: Clock,
    title: 'Operating Hours',
    details: ['Mon-Sun: 6:00 - 23:00', 'Public Holidays: 8:00 - 20:00', 'Always Here for You'],
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://facebook.com',
    label: 'Facebook',
  },
  {
    icon: Twitter,
    href: 'https://x.com',
    label: 'Twitter',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  interestedIn: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    interestedIn: '',
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      interestedIn: '',
    });
  };

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='py-20 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-0 right-1/4 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#AE3537]/20 to-transparent' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='flex items-center justify-center mb-8'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]' />
            <motion.div
              className='p-3 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-6 shadow-2xl'
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail className='w-8 h-8 text-white' />
            </motion.div>
            <div className='w-16 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]' />
          </motion.div>

          <motion.h2
            className='text-5xl md:text-7xl font-black mb-6 text-white leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            GET IN{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>TOUCH</span>
          </motion.h2>
          <motion.p
            className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club
            Azerbaijan&apos;s premier destination.
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-12'>
          {/* Contact Information - Compact */}
          <motion.div
            className='lg:col-span-1'
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className='text-2xl font-bold text-[#AE3537] mb-6'>Contact Information</h3>

            {/* Compact Contact Cards */}
            <div className='space-y-4 mb-8'>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className='flex items-center space-x-4 p-4 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:border-[#AE3537]/30 transition-all duration-300 backdrop-blur-sm'
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg flex-shrink-0'>
                    <info.icon className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold text-sm'>{info.title}</h4>
                    <p className='text-gray-300 text-xs'>{info.details[0]}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Google Maps */}
            <motion.div
              className='mb-8'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h4 className='text-white font-semibold mb-4'>Find Us</h4>
              <div className='relative h-48 rounded-xl overflow-hidden border border-gray-700 shadow-xl'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8!2d49.80775070355744!3d40.381354411812794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzUzLjAiTiA0OcKwNDgnMjcuOSJF!5e0!3m2!1sen!2s!4v1234567890'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  className='grayscale hover:grayscale-0 transition-all duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h4 className='text-white font-semibold mb-4'>Follow Our Journey</h4>
              <div className='flex space-x-3'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className='flex items-center justify-center w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-full hover:bg-[#AE3537] hover:border-[#AE3537] transition-all duration-300 backdrop-blur-sm'
                    aria-label={social.label}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className='w-4 h-4 text-white' />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className='bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl'>
              <div className='flex items-center gap-3 mb-8'>
                <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
                  <Send className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-3xl font-black text-white'>Send Us a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label htmlFor='fullName' className='flex items-center gap-2 text-white text-sm font-semibold mb-3'>
                      <User className='w-4 h-4 text-[#AE3537]' />
                      Full Name <span className='text-[#AE3537]'>*</span>
                    </label>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70'
                      placeholder='Enter your full name'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <label htmlFor='email' className='flex items-center gap-2 text-white text-sm font-semibold mb-3'>
                      <AtSign className='w-4 h-4 text-[#AE3537]' />
                      Email Address <span className='text-[#AE3537]'>*</span>
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70'
                      placeholder='Enter your email address'
                    />
                  </motion.div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <label htmlFor='phone' className='flex items-center gap-2 text-white text-sm font-semibold mb-3'>
                      <Phone className='w-4 h-4 text-[#AE3537]' />
                      Mobile Phone
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70'
                      placeholder='Enter your phone number'
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <label htmlFor='interestedIn' className='block text-white text-sm font-semibold mb-3'>
                      Interested In
                    </label>
                    <select
                      id='interestedIn'
                      name='interestedIn'
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70'
                    >
                      <option value=''>Select membership type</option>
                      <option value='essential'>Essential Plan</option>
                      <option value='premium'>Premium Plan</option>
                      <option value='royal'>Crown Royal Plan</option>
                      <option value='tour'>Just a Tour</option>
                      <option value='womens-exclusive'>Women&apos;s Exclusive</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <label htmlFor='message' className='block text-white text-sm font-semibold mb-3'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 resize-none backdrop-blur-sm hover:bg-gray-800/70'
                    placeholder='Tell us about your wellness goals and how we can help you achieve them...'
                  />
                </motion.div>

                <motion.button
                  type='submit'
                  className='group w-full bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white font-bold py-5 px-8 rounded-2xl hover:shadow-2xl hover:shadow-[#AE3537]/40 transition-all duration-300 relative overflow-hidden'
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <div className='flex items-center justify-center gap-3 relative z-10'>
                    <Send className='w-5 h-5' />
                    <span className='text-lg'>Send Message</span>
                  </div>
                  <motion.div
                    className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    initial={false}
                  />
                </motion.button>

                <motion.p
                  className='text-gray-400 text-sm text-center leading-relaxed'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  By submitting this form, you agree to our privacy policy. We respect your privacy and will never share
                  your information with third parties.
                </motion.p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className='mt-20 pt-12 border-t border-gray-700/30 text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
            <motion.div className='flex items-center space-x-3' whileHover={{ scale: 1.05 }}>
              <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center shadow-lg'>
                <Logo size={24} />
              </div>
              <span className='text-white font-bold text-lg'>Crown Wellness Club</span>
            </motion.div>

            <p className='text-gray-400 text-sm'>
              © {new Date().getFullYear()} Crown Wellness Club. Luxury wellness redefined in Azerbaijan.
            </p>

            <div className='flex items-center space-x-6 text-gray-400 text-sm'>
              <Link
                href='/privacy-policy'
                className='hover:text-[#AE3537] transition-colors duration-300 hover:scale-105'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms-of-service'
                className='hover:text-[#AE3537] transition-colors duration-300 hover:scale-105'
              >
                Terms of Service
              </Link>
              <Link href='/support' className='hover:text-[#AE3537] transition-colors duration-300 hover:scale-105'>
                Support
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
