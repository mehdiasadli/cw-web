'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Dumbbell, Users, Sparkles, Star } from 'lucide-react';
import Banner from './banner';

interface ScaleCard {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  valueSuffix?: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  borderGlowClasses: string;
  bgGlowClasses: string;
  iconGlowClasses: string;
  iconBgClasses: string;
  textGradientClasses: string;
  sparkleClasses: string;
  borderClasses: string;
}

const getScaleData = (t: (key: string) => string): ScaleCard[] => [
  {
    id: 1,
    icon: Building2,
    value: 5000,
    valueSuffix: t('impressiveScale.stats.premiumSpace.suffix'),
    title: t('impressiveScale.stats.premiumSpace.title'),
    subtitle: t('impressiveScale.stats.premiumSpace.subtitle'),
    description: t('impressiveScale.stats.premiumSpace.description'),
    color: 'from-purple-500 to-pink-500',
    borderGlowClasses: 'hover:border-purple-500/50',
    bgGlowClasses: 'group-hover:opacity-20',
    iconGlowClasses: 'group-hover:opacity-60',
    iconBgClasses: 'from-purple-600 to-pink-600',
    textGradientClasses: 'from-purple-400 to-pink-400',
    sparkleClasses: 'text-purple-400',
    borderClasses: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    icon: Dumbbell,
    value: 300,
    valueSuffix: t('impressiveScale.stats.premiumEquipment.suffix'),
    title: t('impressiveScale.stats.premiumEquipment.title'),
    subtitle: t('impressiveScale.stats.premiumEquipment.subtitle'),
    description: t('impressiveScale.stats.premiumEquipment.description'),
    color: 'from-blue-500 to-cyan-500',
    borderGlowClasses: 'hover:border-blue-500/50',
    bgGlowClasses: 'group-hover:opacity-20',
    iconGlowClasses: 'group-hover:opacity-60',
    iconBgClasses: 'from-blue-600 to-cyan-600',
    textGradientClasses: 'from-blue-400 to-cyan-400',
    sparkleClasses: 'text-blue-400',
    borderClasses: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    icon: Users,
    value: 50,
    valueSuffix: t('impressiveScale.stats.expertProfessionals.suffix'),
    title: t('impressiveScale.stats.expertProfessionals.title'),
    subtitle: t('impressiveScale.stats.expertProfessionals.subtitle'),
    description: t('impressiveScale.stats.expertProfessionals.description'),
    color: 'from-orange-500 to-red-500',
    borderGlowClasses: 'hover:border-orange-500/50',
    bgGlowClasses: 'group-hover:opacity-20',
    iconGlowClasses: 'group-hover:opacity-60',
    iconBgClasses: 'from-orange-600 to-red-600',
    textGradientClasses: 'from-orange-400 to-red-400',
    sparkleClasses: 'text-orange-400',
    borderClasses: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    icon: Sparkles,
    value: 150,
    valueSuffix: t('impressiveScale.stats.luxuryServices.suffix'),
    title: t('impressiveScale.stats.luxuryServices.title'),
    subtitle: t('impressiveScale.stats.luxuryServices.subtitle'),
    description: t('impressiveScale.stats.luxuryServices.description'),
    color: 'from-green-500 to-emerald-500',
    borderGlowClasses: 'hover:border-green-500/50',
    bgGlowClasses: 'group-hover:opacity-20',
    iconGlowClasses: 'group-hover:opacity-60',
    iconBgClasses: 'from-green-600 to-emerald-600',
    textGradientClasses: 'from-green-400 to-emerald-400',
    sparkleClasses: 'text-green-400',
    borderClasses: 'from-green-500 to-emerald-500',
  },
];

function CountUpAnimation({
  value,
  suffix = '',
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);

          const startTime = Date.now();
          const startValue = 0;
          const endValue = value;

          const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };

          updateCount();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration, hasStarted]);

  return (
    <div ref={elementRef} className='text-4xl md:text-5xl font-bold text-white mb-2'>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function ImpressiveScale() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const scaleData = getScaleData(t);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Show immediately on mobile to prevent issues
    if (isMobile) {
      setTimeout(() => setIsVisible(true), 100);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section ref={sectionRef} className='py-20 px-6 bg-[#111111]'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
            {t('impressiveScale.title')} <span className='text-[#AE3537]'>{t('impressiveScale.titleHighlight')}</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>{t('impressiveScale.subtitle')}</p>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {scaleData.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible || isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Stat Card */}
              <div
                className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-black/90 ${stat.borderGlowClasses} transition-all duration-700 group-hover:transform group-hover:scale-105 group-hover:rotate-x-3 group-hover:rotate-y-3 overflow-hidden`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 ${stat.bgGlowClasses} transition-opacity duration-700`}
                ></div>

                {/* Icon with Premium Effect */}
                <div className='flex justify-center mb-8 relative z-10'>
                  <div className='relative'>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 ${stat.iconGlowClasses} rounded-full blur-xl animate-pulse`}
                    ></div>
                    <div
                      className={`relative p-4 bg-gradient-to-br ${stat.iconBgClasses} rounded-full group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 overflow-hidden`}
                    >
                      <stat.icon className='w-12 h-12 text-white relative z-10' />
                    </div>
                  </div>
                </div>

                {/* Animated Number */}
                <div className='mb-6 relative z-10'>
                  <div
                    className={`text-6xl lg:text-7xl font-bold bg-gradient-to-br ${stat.textGradientClasses} bg-clip-text text-transparent mb-2`}
                  >
                    <CountUpAnimation value={stat.value} suffix={stat.valueSuffix} />
                  </div>
                </div>

                {/* Label and Description */}
                <h3 className='text-2xl font-bold text-white mb-3 relative z-10'>
                  <span className='text-[#AE3537]'>{stat.title.split(' ')[0]}</span>
                  {' ' + stat.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className='text-[#AE3537] font-semibold mb-4 relative z-10'>{stat.subtitle}</p>
                <p className='text-gray-400 leading-relaxed relative z-10'>{stat.description}</p>

                {/* Decorative Elements */}
                <div className='absolute top-6 right-6 opacity-20'>
                  <Star className={`w-6 h-6 ${stat.sparkleClasses}`} />
                </div>

                {/* Premium Border Glow */}
                <div
                  className={`absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${stat.borderClasses} rounded-3xl blur-2xl -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Banner
        title={t('impressiveScale.banner.title')}
        titleStyle='mixed'
        subtitle={t('impressiveScale.banner.subtitle')}
        description={t('impressiveScale.banner.description')}
      />
    </section>
  );
}
