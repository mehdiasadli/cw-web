'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, AtSign, Phone, Send, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
}

interface LeadFormProps {
  isModal?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  subtitle?: string;
}

export default function LeadForm({ isModal = false, isOpen = true, onClose, title, subtitle }: LeadFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    console.log('Lead form submitted:', formData);

    // Here you would typically send the data to your sales team/CRM
    // await submitLeadForm(formData);

    setTimeout(() => {
      alert('Thank you for your interest! Our sales team will contact you soon.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
      });
      setIsSubmitting(false);
      if (onClose) onClose();
    }, 1000);
  };

  const formContent = (
    <div
      className={`${isModal ? 'bg-gradient-to-br from-gray-900/95 to-black/95 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl max-w-md w-full mx-4' : 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl'}`}
    >
      {/* Header */}
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
            <UserPlus className='w-6 h-6 text-white' />
          </div>
          <h3 className='text-2xl font-black text-white'>{title || 'Join Our Community'}</h3>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className='p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full transition-all duration-200'
          >
            <X className='w-5 h-5' />
          </button>
        )}
      </div>

      {/* Subtitle */}
      {subtitle && <p className='text-gray-300 mb-6 leading-relaxed'>{subtitle}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Full Name */}
        <div>
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
        </div>

        {/* Email */}
        <div>
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
        </div>

        {/* Phone */}
        <div>
          <label htmlFor='phone' className='flex items-center gap-2 text-white text-sm font-semibold mb-3'>
            <Phone className='w-4 h-4 text-[#AE3537]' />
            Phone Number <span className='text-[#AE3537]'>*</span>
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            required
            className='w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-[#AE3537] focus:ring-2 focus:ring-[#AE3537]/20 transition-all duration-300 backdrop-blur-sm hover:bg-gray-800/70'
            placeholder='Enter your phone number'
          />
        </div>

        {/* Submit Button */}
        <motion.button
          type='submit'
          disabled={isSubmitting}
          className='group w-full bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white font-bold py-5 px-8 rounded-2xl hover:shadow-2xl hover:shadow-[#AE3537]/40 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed'
          whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          <div className='flex items-center justify-center gap-3 relative z-10'>
            <Send className='w-5 h-5' />
            <span className='text-lg'>{isSubmitting ? 'Submitting...' : 'Join Now'}</span>
          </div>
          <motion.div
            className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
            initial={false}
          />
        </motion.button>

        {/* Privacy Notice */}
        <p className='text-gray-400 text-sm text-center leading-relaxed'>
          By submitting this form, you agree to be contacted by our sales team. We respect your privacy and will never
          share your information with third parties.
        </p>
      </form>
    </div>
  );

  if (isModal) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-4'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {formContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return formContent;
}
