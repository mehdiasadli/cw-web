'use client';

import { useState } from 'react';
import { Play, Volume2, VolumeX, ChevronDown } from 'lucide-react';
import Logo from './logo';

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted={isMuted}
        className='absolute inset-0 w-full h-full object-cover z-0'
        playsInline
        preload='auto'
        controls={false}
      >
        <source
          src='https://res.cloudinary.com/doep7sd3t/video/upload/v1757633456/091254_c6vohz.mp4'
          type='video/mp4'
        />
      </video>

      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black/50 z-10' />

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className='absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300'
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Hero Content */}
      <div className='relative z-20 text-center text-white px-6 max-w-4xl mx-auto'>
        {/* Logo and Title */}
        <div className='mb-8'>
          <div className='flex justify-center mb-4'>
            <Logo color='white' size={120} />
          </div>
          <h1 className='text-6xl md:text-7xl font-black tracking-wider'>CROWN</h1>
          <h2 className='text-3xl md:text-4xl font-bold tracking-widest mt-2'>WELLNESS CLUB</h2>
        </div>

        {/* Subtitle */}
        <p
          className='text-xl md:text-4xl font-bold mb-6 leading-relaxed'
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
        >
          <span className='text-[#AE3537] font-bold' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>
            Azerbaijan’s First Interactive
          </span>{' '}
          Fitness & Wellness Club
        </p>

        {/* Description */}
        <p className='text-lg md:text-xl mb-12 leading-relaxed text-gray-200 max-w-3xl mx-auto'>
          Where wellness becomes a way of life, together in community.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'>
          <button
            onClick={() => {
              const element = document.getElementById('experiences');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='cursor-pointer bg-[#AE3537] hover:bg-[#8B2A2D] text-white px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-105 font-semibold text-xl'
          >
            <Logo color='white' size={24} />
            Experience Crown
          </button>

          <button
            onClick={() => {
              const element = document.getElementById('membership');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-105 font-semibold text-xl border border-white/20'
          >
            <Play size={20} />
            Book a Tour
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div
          onClick={() => {
            const element = document.getElementById('experiences');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className='flex flex-col items-center cursor-pointer'
        >
          <p className='text-sm tracking-widest mb-4 text-gray-300'>DISCOVER LUXURY BELOW</p>
          <div className='flex flex-col items-center gap-2'>
            <ChevronDown size={24} className='animate-bounce text-white/80' />
            <ChevronDown size={24} className='animate-bounce text-white/60' style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
