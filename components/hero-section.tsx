'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import Logo from './logo';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate smooth transition values
  const getTransitionValues = () => {
    if (typeof window === 'undefined') {
      return { scale: 1, translateY: 0, opacity: 1, isTransitioning: false };
    }

    const windowHeight = window.innerHeight;
    const startTransition = windowHeight * 0.3; // Start transition earlier
    const endTransition = windowHeight * 0.8; // End transition later

    if (scrollY < startTransition) {
      return { scale: 1, translateY: 0, opacity: 1, isTransitioning: false };
    }

    if (scrollY > endTransition) {
      return { scale: 0, translateY: -windowHeight * 0.4, opacity: 0, isTransitioning: false };
    }

    // Calculate smooth transition progress (0 to 1)
    const progress = (scrollY - startTransition) / (endTransition - startTransition);

    // Smooth easing function
    const easeProgress = 1 - Math.pow(1 - progress, 3);

    return {
      scale: 1 - easeProgress * 0.85, // Scale down to 15% of original
      translateY: -easeProgress * windowHeight * 0.4, // Move up towards navbar
      opacity: 1 - easeProgress * 0.7, // Fade but don't completely disappear
      isTransitioning: true,
    };
  };

  const { scale, translateY, opacity, isTransitioning } = getTransitionValues();

  return (
    <>
      {/* Fixed position title during transition */}
      {isTransitioning && (
        <div
          className='fixed top-0 left-0 right-0 z-30 flex items-center justify-center pointer-events-none'
          style={{
            height: '80px', // Match navbar height
            paddingTop: '20px',
          }}
        >
          <div className='flex flex-col items-center'>
            <h1
              className='text-6xl md:text-7xl font-black tracking-wider text-white'
              style={{
                transform: `scale(${Math.max(0.15, scale)}) translateY(${translateY * 0.3}px)`,
                opacity: Math.max(0.3, opacity),
                transformOrigin: 'center center',
                textShadow: '0 2px 8px rgba(0,0,0,0.8)',
              }}
            >
              {t('hero.title')}
            </h1>
          </div>
        </div>
      )}

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
            src='https://res.cloudinary.com/doep7sd3t/video/upload/v1760541508/crownvideoneedcompress_1_stgpxd.mp4'
            type='video/mp4'
          />
        </video>

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50 z-10' />

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className='absolute bottom-6 right-6 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300'
          aria-label={isMuted ? t('hero.unmuteVideo') : t('hero.muteVideo')}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        {/* Hero Content */}
        <div className='relative z-20 text-center text-white px-6 max-w-4xl mx-auto'>
          {/* Logo and Title */}
          <div className='flex items-center justify-center mb-8 mt-20'>
            <Image src='/images/crown-logo-wordmark.svg' alt='Crown Wellness' width={350} height={100} />
          </div>

          {/* Subtitle */}
          <p
            className='text-xl md:text-4xl font-bold mb-6 leading-relaxed'
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}
          >
            <span className='text-[#AE3537] font-bold' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>
              {t('hero.description')}
            </span>{' '}
            {t('hero.fitness')}
          </p>

          {/* Description */}
          <p className='text-lg md:text-xl mb-12 leading-relaxed text-gray-200 max-w-3xl mx-auto'>
            {t('hero.tagline')}
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
              {t('hero.joinCommunity')}
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
            <p className='text-sm tracking-widest mb-4 text-gray-300'>{t('hero.scrollMore')}</p>
            <div className='flex flex-col items-center gap-2'>
              <ChevronDown size={24} className='animate-bounce text-white/80' />
              <ChevronDown size={24} className='animate-bounce text-white/60' style={{ animationDelay: '0.2s' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
