import React from 'react';
import { Metadata } from 'next';
import LeadForm from '@/components/lead-form';
import { Crown, Star, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Crown Wellness Club | Premium Fitness & Wellness in Azerbaijan',
  description:
    'Contact Azerbaijan&apos;s premier wellness destination. Get in touch with Crown Wellness Club for membership information, tours, and wellness consultations.',
};

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 right-1/6 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 left-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '3s' }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#AE3537]/20 to-transparent' />
      </div>

      <div className='relative z-10 min-h-screen flex items-center justify-center px-6 py-20'>
        <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Marketing Content */}
          <div className='text-center lg:text-left'>
            {/* Logo/Brand */}
            <div className='flex items-center justify-center lg:justify-start mb-8'>
              <div className='p-4 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full shadow-2xl'>
                <Crown className='w-12 h-12 text-white' />
              </div>
              <div className='ml-4'>
                <h1 className='text-3xl font-black text-white'>CROWN WELLNESS</h1>
                <p className='text-[#AE3537] font-semibold'>CLUB</p>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight'>
              Get In{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                Touch Today
              </span>
            </h2>

            {/* Subtitle */}
            <p className='text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
              Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club
              Azerbaijan&apos;s premier destination.
            </p>

            {/* Features Grid */}
            <div className='grid grid-cols-2 gap-6 mb-8'>
              <div className='flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm'>
                <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
                  <Star className='w-5 h-5 text-white' />
                </div>
                <div>
                  <h4 className='text-white font-semibold text-sm'>Premium Amenities</h4>
                  <p className='text-gray-400 text-xs'>Spa, Beauty Zone, Fitbar</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm'>
                <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
                  <Users className='w-5 h-5 text-white' />
                </div>
                <div>
                  <h4 className='text-white font-semibold text-sm'>Vibrant Community</h4>
                  <p className='text-gray-400 text-xs'>2,500+ Active Members</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm'>
                <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
                  <Award className='w-5 h-5 text-white' />
                </div>
                <div>
                  <h4 className='text-white font-semibold text-sm'>Expert Training</h4>
                  <p className='text-gray-400 text-xs'>Certified Professionals</p>
                </div>
              </div>

              <div className='flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-700/50 rounded-xl backdrop-blur-sm'>
                <div className='p-2 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-lg'>
                  <Crown className='w-5 h-5 text-white' />
                </div>
                <div>
                  <h4 className='text-white font-semibold text-sm'>Luxury Experience</h4>
                  <p className='text-gray-400 text-xs'>Premium Location</p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className='text-center lg:text-left'>
              <p className='text-gray-400 text-sm mb-2'>Trusted by wellness enthusiasts across Azerbaijan</p>
              <div className='flex items-center justify-center lg:justify-start gap-2'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className='w-8 h-8 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full border-2 border-gray-900 flex items-center justify-center'
                    >
                      <span className='text-white text-xs font-bold'>{i}</span>
                    </div>
                  ))}
                </div>
                <span className='text-gray-300 text-sm ml-3'>Join 2,500+ members</span>
              </div>
            </div>
          </div>

          {/* Right Side - Lead Form */}
          <div className='flex justify-center'>
            <LeadForm
              title='Contact Us'
              subtitle='Fill out the form below and our wellness specialists will contact you within 24 hours to schedule your complimentary consultation and club tour.'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
