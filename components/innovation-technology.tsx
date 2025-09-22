'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Smartphone,
  Brain,
  Heart,
  Zap,
  Wifi,
  Monitor,
  Activity,
  Shield,
  Cloud,
  Cpu,
  Camera,
  Headphones,
} from 'lucide-react';

interface TechFeature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  borderGlow: string;
  iconBg: string;
}

const getTechFeatures = (t: (key: string) => string): TechFeature[] => [
  {
    id: 1,
    icon: Smartphone,
    title: t('innovationTechnology.features.smartApp.title'),
    subtitle: t('innovationTechnology.features.smartApp.subtitle'),
    description: t('innovationTechnology.features.smartApp.description'),
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-400 to-cyan-400',
    borderGlow: 'hover:border-blue-500/50',
    iconBg: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    icon: Brain,
    title: t('innovationTechnology.features.aiPersonalization.title'),
    subtitle: t('innovationTechnology.features.aiPersonalization.subtitle'),
    description: t('innovationTechnology.features.aiPersonalization.description'),
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-400 to-pink-400',
    borderGlow: 'hover:border-purple-500/50',
    iconBg: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    icon: Heart,
    title: t('innovationTechnology.features.biometricTracking.title'),
    subtitle: t('innovationTechnology.features.biometricTracking.subtitle'),
    description: t('innovationTechnology.features.biometricTracking.description'),
    color: 'from-red-500 to-orange-500',
    gradient: 'from-red-400 to-orange-400',
    borderGlow: 'hover:border-red-500/50',
    iconBg: 'from-red-600 to-orange-600',
  },
  {
    id: 4,
    icon: Monitor,
    title: t('innovationTechnology.features.virtualTraining.title'),
    subtitle: t('innovationTechnology.features.virtualTraining.subtitle'),
    description: t('innovationTechnology.features.virtualTraining.description'),
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-400 to-emerald-400',
    borderGlow: 'hover:border-green-500/50',
    iconBg: 'from-green-600 to-emerald-600',
  },
  {
    id: 5,
    icon: Cloud,
    title: t('innovationTechnology.features.cloudIntegration.title'),
    subtitle: t('innovationTechnology.features.cloudIntegration.subtitle'),
    description: t('innovationTechnology.features.cloudIntegration.description'),
    color: 'from-indigo-500 to-blue-500',
    gradient: 'from-indigo-400 to-blue-400',
    borderGlow: 'hover:border-indigo-500/50',
    iconBg: 'from-indigo-600 to-blue-600',
  },
  {
    id: 6,
    icon: Shield,
    title: t('innovationTechnology.features.smartSecurity.title'),
    subtitle: t('innovationTechnology.features.smartSecurity.subtitle'),
    description: t('innovationTechnology.features.smartSecurity.description'),
    color: 'from-yellow-500 to-amber-500',
    gradient: 'from-yellow-400 to-amber-400',
    borderGlow: 'hover:border-yellow-500/50',
    iconBg: 'from-yellow-600 to-amber-600',
  },
];

export default function InnovationTechnology() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: '50px' });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.1, margin: '50px' });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const techFeatures = getTechFeatures(t);

  const stats = [
    { icon: Wifi, value: '99.9%', label: t('innovationTechnology.stats.uptime') },
    { icon: Activity, value: '24/7', label: t('innovationTechnology.stats.monitoring') },
    { icon: Cpu, value: '< 50ms', label: t('innovationTechnology.stats.responseTime') },
    { icon: Camera, value: '150+', label: t('innovationTechnology.stats.sensors') },
  ];

  return (
    <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a] relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '2s' }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#AE3537]/20 to-transparent' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className='flex items-center justify-center mb-8'>
            <motion.div
              className='w-20 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]'
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className='p-4 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-6 shadow-2xl'
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Zap className='w-8 h-8 text-white' />
            </motion.div>
            <motion.div
              className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]'
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <motion.h2
            className='text-5xl md:text-6xl font-black text-white mb-6 leading-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('innovationTechnology.title')}{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
              {t('innovationTechnology.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('innovationTechnology.subtitle')}
          </motion.p>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          ref={statsRef}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className='text-center group'
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300'>
                <motion.div
                  className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full mb-4'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </motion.div>
                <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-400 text-sm font-medium'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Features Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className='group relative'
              initial={{ opacity: 0, y: 30 }}
              animate={isInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              onHoverStart={() => setHoveredCard(feature.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Background with Glow Effect */}
              <div className='relative overflow-hidden'>
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`}
                  animate={{
                    opacity: hoveredCard === feature.id ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-gray-900/90 hover:to-black/90 ${feature.borderGlow} transition-all duration-700 group-hover:transform group-hover:scale-105 overflow-hidden`}
                >
                  {/* Icon */}
                  <div className='flex justify-center mb-6 relative z-10'>
                    <div className='relative'>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-60 rounded-full blur-xl animate-pulse`}
                      />
                      <motion.div
                        className={`relative p-4 bg-gradient-to-br ${feature.iconBg} rounded-full group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300`}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <feature.icon className='w-8 h-8 text-white relative z-10' />
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='text-center relative z-10'>
                    <h3 className='text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 transition-all duration-300'>
                      {feature.title}
                    </h3>
                    <p
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} font-semibold mb-4`}
                    >
                      {feature.subtitle}
                    </p>
                    <p className='text-gray-400 leading-relaxed text-sm'>{feature.description}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className='absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300'>
                    <Headphones className='w-5 h-5 text-gray-400' />
                  </div>

                  {/* Premium Border Glow */}
                  <div
                    className={`absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${feature.color} rounded-3xl blur-2xl -z-10`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              {t('innovationTechnology.cta.title')}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                {t('innovationTechnology.cta.titleHighlight')}
              </span>
            </h3>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto'>
              {t('innovationTechnology.cta.subtitle')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                className='bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#AE3537]/40 transition-all duration-300 flex items-center justify-center gap-3'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Smartphone className='w-5 h-5' />
                {t('innovationTechnology.cta.downloadApp')}
              </motion.button>
              <motion.button
                className='bg-gray-800/50 border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-[#AE3537]/50 transition-all duration-300 flex items-center justify-center gap-3'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Monitor className='w-5 h-5' />
                {t('innovationTechnology.cta.bookDemo')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
