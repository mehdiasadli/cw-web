'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  Users,
  MapPin,
  Crown,
  Shield,
  Heart,
  Star,
  Target,
  Globe,
  Zap,
  TrendingUp,
  Calendar,
  Building,
} from 'lucide-react';
import NumberFlow from '@number-flow/react';

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });

  // Statistics data
  const stats = [
    { number: 15000, label: 'Square Feet', suffix: '+', icon: Building },
    { number: 2025, label: 'Founded', suffix: '', icon: Calendar },
    { number: 50, label: 'Premium Services', suffix: '+', icon: Award },
    { number: 100, label: 'Expert Staff', suffix: '%', icon: Users, prefix: '' },
  ];

  // Core values data
  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description:
        'Your health and wellness journey is our primary focus, with every service designed around your holistic well-being and personal goals.',
      color: 'from-[#AE3537] to-[#FF6B6D]',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description:
        'Maintaining the highest standards of safety, hygiene, and professional integrity while respecting cultural values and privacy.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Star,
      title: 'Excellence',
      description:
        'Pursuing perfection in every detail, from world-class equipment to personalized service delivery and member experience.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Globe,
      title: 'Cultural Harmony',
      description:
        'Bridging international wellness standards with deep respect for Azerbaijani culture and traditions.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  // Features/Differentiators
  const features = [
    {
      icon: Crown,
      title: 'Luxury Redefined',
      description:
        'Experience unparalleled luxury with world-class amenities designed for the discerning wellness enthusiast.',
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description:
        'Tailored wellness programs that adapt to your unique goals, preferences, and cultural considerations.',
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'State-of-the-art equipment and innovative wellness technologies from leading global brands.',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: "Strategically located in Baku's premium district with exclusive parking and easy accessibility.",
    },
  ];

  // Vision & Mission data
  const visionPoints = [
    {
      title: 'Innovation Leadership',
      description: "Leading Azerbaijan's wellness revolution with innovative approaches and premium experiences.",
    },
    {
      title: 'Cultural Bridge',
      description: 'Creating a harmonious blend of international wellness standards and local cultural values.',
    },
    {
      title: 'Community Impact',
      description: 'Fostering a healthier, more wellness-conscious community throughout Azerbaijan.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]'>
      {/* Enhanced Hero Section */}
      <section ref={heroRef} className='relative py-32 px-6 overflow-hidden'>
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
          <motion.div
            className='text-center'
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className='flex items-center justify-center mb-8'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='w-20 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]' />
              <motion.div
                className='p-4 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-6 shadow-2xl'
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Crown className='w-10 h-10 text-white' />
              </motion.div>
              <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]' />
            </motion.div>

            <motion.h1
              className='text-5xl md:text-7xl font-black mb-6 text-white leading-tight'
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ABOUT{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>CROWN</span>
            </motion.h1>
            <motion.p
              className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Azerbaijan&apos;s premier luxury wellness destination, redefining fitness and spa experiences with
              uncompromising excellence and cultural sensitivity.
            </motion.p>

            <motion.div
              className='inline-flex items-center bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 border border-[#AE3537]/40 rounded-full px-8 py-4 backdrop-blur-sm shadow-2xl'
              initial={{ scale: 0, opacity: 0 }}
              animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <TrendingUp className='w-5 h-5 text-[#AE3537] mr-3' />
              <span className='text-white font-semibold'>Leading Azerbaijan&apos;s Wellness Revolution</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className='py-20 px-6 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className='text-4xl md:text-5xl font-black text-white mb-6'
                initial={{ opacity: 0, y: 30 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Redefining{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                  Wellness
                </span>
              </motion.h2>
              <motion.p
                className='text-gray-300 text-lg mb-6 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Crown Wellness Club stands as Azerbaijan&apos;s first interactive luxury fitness destination, pioneering
                a new era of premium wellness experiences. Our state-of-the-art facility combines international
                standards with deep respect for local culture and values.
              </motion.p>
              <motion.p
                className='text-gray-300 text-lg mb-8 leading-relaxed'
                initial={{ opacity: 0, y: 20 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Every aspect of our club is meticulously designed to provide an unparalleled wellness journey, from our
                cutting-edge equipment to our world-class spa services, all delivered with the highest levels of
                professionalism and cultural sensitivity.
              </motion.p>

              {/* Cultural Sensitivity Highlight */}
              <motion.div
                className='bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 border border-[#AE3537]/40 rounded-2xl p-6 backdrop-blur-sm'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isStoryInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h4 className='text-[#AE3537] font-bold mb-3 flex items-center text-lg'>
                  <Users className='w-5 h-5 mr-2' />
                  Cultural Excellence
                </h4>
                <p className='text-gray-300'>
                  We honor Azerbaijan&apos;s rich cultural heritage while delivering world-class wellness experiences,
                  ensuring every member feels respected and valued in our premium environment.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className='relative'>
                <motion.div
                  className='aspect-square rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-xl'
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-[#AE3537]/20 to-[#FF6B6D]/10' />

                  {/* Floating Elements */}
                  <motion.div
                    className='absolute top-8 right-8 p-3 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full'
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Crown className='w-6 h-6 text-white' />
                  </motion.div>

                  <motion.div
                    className='absolute bottom-8 left-8 p-2 bg-white/10 backdrop-blur-sm rounded-full'
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  >
                    <Star className='w-5 h-5 text-[#AE3537]' />
                  </motion.div>

                  <div className='absolute bottom-6 left-6 right-6'>
                    <div className='bg-black/70 backdrop-blur-sm rounded-2xl p-6'>
                      <p className='text-white text-lg font-bold mb-2'>Crown Wellness Club</p>
                      <p className='text-gray-300 text-sm'>Luxury Wellness Redefined</p>
                    </div>
                  </div>

                  {/* Center Crown */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <Crown className='w-24 h-24 text-[#AE3537]/30' />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Enhanced Glow */}
                <motion.div
                  className='absolute -inset-1 bg-gradient-to-r from-[#AE3537]/30 to-[#FF6B6D]/30 rounded-3xl blur-2xl -z-10'
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        ref={statsRef}
        className='py-20 px-6 bg-gradient-to-r from-[#AE3537]/10 via-transparent to-[#FF6B6D]/10 relative overflow-hidden'
      >
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              Excellence in{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                Numbers
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Discover what makes Crown Wellness Club Azerbaijan&apos;s premier wellness destination
            </p>
          </motion.div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-center group'
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className='bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300'>
                  <motion.div
                    className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full mb-6 shadow-xl'
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className='w-8 h-8 text-white' />
                  </motion.div>
                  <div className='text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-2'>
                    {stat.number === 2025 ? stat.number : stat.number.toLocaleString()}
                    {stat.suffix}
                  </div>
                  <div className='text-white font-semibold text-lg'>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 px-6 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              What Sets Us{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>Apart</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Discover the unique features that make Crown Wellness Club Azerbaijan&apos;s premier destination
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className='group h-full'
                initial={{ opacity: 0, y: 50 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300 h-full'>
                  <motion.div
                    className='p-4 bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 rounded-2xl mb-6 inline-block'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className='w-8 h-8 text-[#AE3537]' />
                  </motion.div>
                  <h4 className='text-xl font-bold text-white mb-4'>{feature.title}</h4>
                  <p className='text-gray-400 leading-relaxed'>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className='py-20 px-6 bg-gradient-to-r from-[#AE3537]/5 via-transparent to-[#FF6B6D]/5 relative overflow-hidden'
      >
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>Values</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              The principles that guide every decision and service at Crown Wellness Club
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className='group h-full'
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isValuesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className='relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300 h-full overflow-hidden'>
                  {/* Background Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />

                  <div className='relative z-10'>
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mb-6 shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className='w-8 h-8 text-white' />
                    </motion.div>
                    <h4 className='text-2xl font-black text-white mb-4'>{value.title}</h4>
                    <p className='text-gray-400 leading-relaxed'>{value.description}</p>
                  </div>

                  {/* Border Glow */}
                  <motion.div
                    className={`absolute -inset-1 opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${value.color} rounded-3xl blur-2xl -z-10`}
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className='py-20 px-6 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto relative z-10'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>Vision</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              To be the catalyst for Azerbaijan&apos;s wellness transformation, creating a world-class destination that
              honors our heritage while embracing global excellence.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                className='text-center group'
                initial={{ opacity: 0, y: 50 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300 h-full'>
                  <motion.div
                    className='w-16 h-16 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-auto mb-6'
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className='text-white font-black text-2xl'>{index + 1}</span>
                  </motion.div>
                  <h4 className='text-xl font-black text-white mb-4'>{point.title}</h4>
                  <p className='text-gray-400 leading-relaxed'>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
