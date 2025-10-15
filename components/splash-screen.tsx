'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from './logo';

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Check if splash screen was already shown in this session
    const hasSeenSplash = sessionStorage.getItem('crown_splash_seen');

    if (!hasSeenSplash) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Listen for Enter key press
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const handleEnter = () => {
    // Start exit animation
    setIsAnimatingOut(true);

    // Set sessionStorage to prevent showing again in this session
    sessionStorage.setItem('crown_splash_seen', 'true');

    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsVisible(false);
      onEnter();
    }, 800);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#AE3537] transition-all duration-800 ease-in-out ${
        isAnimatingOut ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'
      }`}
      style={{
        transitionProperty: 'transform, opacity',
        transitionDuration: '800ms',
      }}
    >
      <div className='flex flex-col items-center justify-center px-6 text-center max-w-2xl'>
        {/* Crown Logo Wordmark */}
        <div className='mb-8 md:mb-12'>
          <Image
            src='/images/crown-logo-wordmark.svg'
            alt='Crown Wellness Club'
            width={400}
            height={150}
            className='w-[280px] md:w-[400px] h-auto'
            priority
          />
        </div>

        {/* Subtitle */}
        <h2 className='text-white text-2xl md:text-3xl lg:text-4xl font-light mb-12 md:mb-16 tracking-wide'>
          A New Era of Wellness in Azerbaijan
        </h2>

        {/* CTA Button */}
        <button
          onClick={handleEnter}
          className='bg-[#F5C518] hover:bg-[#E0B50F] text-black font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3'
          aria-label='Enter the World of Wellness'
        >
          <Logo color='black' size={24} />
          ENTER – The World of Wellness
        </button>

        {/* Hint text */}
        <p className='text-white/70 text-sm mt-8 tracking-wider'>Press Enter to continue</p>
      </div>
    </div>
  );
}
