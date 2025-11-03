'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Users,
  Calendar,
  Coffee,
  Music,
  Trophy,
  Heart,
  MessageCircle,
  Gift,
  Sparkles,
  Clock,
  UserPlus,
  Award,
} from 'lucide-react';

interface CommunityFeature {
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

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  description: string;
  attendees: number;
  image: string;
  color: string;
}

const getCommunityFeatures = (t: (key: string) => string): CommunityFeature[] => [
  {
    id: 1,
    icon: Users,
    title: t('communityLifestyle.features.socialEvents.title'),
    subtitle: t('communityLifestyle.features.socialEvents.subtitle'),
    description: t('communityLifestyle.features.socialEvents.description'),
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-400 to-cyan-400',
    borderGlow: 'hover:border-blue-500/50',
    iconBg: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    icon: Trophy,
    title: t('communityLifestyle.features.challenges.title'),
    subtitle: t('communityLifestyle.features.challenges.subtitle'),
    description: t('communityLifestyle.features.challenges.description'),
    color: 'from-yellow-500 to-orange-500',
    gradient: 'from-yellow-400 to-orange-400',
    borderGlow: 'hover:border-yellow-500/50',
    iconBg: 'from-yellow-600 to-orange-600',
  },
  {
    id: 3,
    icon: Coffee,
    title: t('communityLifestyle.features.socialSpaces.title'),
    subtitle: t('communityLifestyle.features.socialSpaces.subtitle'),
    description: t('communityLifestyle.features.socialSpaces.description'),
    color: 'from-amber-500 to-brown-500',
    gradient: 'from-amber-400 to-orange-400',
    borderGlow: 'hover:border-amber-500/50',
    iconBg: 'from-amber-600 to-orange-600',
  },
  {
    id: 4,
    icon: Music,
    title: t('communityLifestyle.features.culturalEvents.title'),
    subtitle: t('communityLifestyle.features.culturalEvents.subtitle'),
    description: t('communityLifestyle.features.culturalEvents.description'),
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-400 to-pink-400',
    borderGlow: 'hover:border-purple-500/50',
    iconBg: 'from-purple-600 to-pink-600',
  },
  {
    id: 5,
    icon: Heart,
    title: t('communityLifestyle.features.wellness.title'),
    subtitle: t('communityLifestyle.features.wellness.subtitle'),
    description: t('communityLifestyle.features.wellness.description'),
    color: 'from-red-500 to-pink-500',
    gradient: 'from-red-400 to-pink-400',
    borderGlow: 'hover:border-red-500/50',
    iconBg: 'from-red-600 to-pink-600',
  },
  {
    id: 6,
    icon: Gift,
    title: t('communityLifestyle.features.memberPerks.title'),
    subtitle: t('communityLifestyle.features.memberPerks.subtitle'),
    description: t('communityLifestyle.features.memberPerks.description'),
    color: 'from-green-500 to-emerald-500',
    gradient: 'from-green-400 to-emerald-400',
    borderGlow: 'hover:border-green-500/50',
    iconBg: 'from-green-600 to-emerald-600',
  },
];

const getUpcomingEvents = (t: (key: string) => string): Event[] => [
  {
    id: 1,
    title: t('communityLifestyle.events.yogaSunrise.title'),
    date: t('communityLifestyle.events.yogaSunrise.date'),
    time: t('communityLifestyle.events.yogaSunrise.time'),
    type: t('communityLifestyle.events.yogaSunrise.type'),
    description: t('communityLifestyle.events.yogaSunrise.description'),
    attendees: 24,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    color: 'from-orange-500 to-pink-500',
  },
  {
    id: 2,
    title: t('communityLifestyle.events.nutritionWorkshop.title'),
    date: t('communityLifestyle.events.nutritionWorkshop.date'),
    time: t('communityLifestyle.events.nutritionWorkshop.time'),
    type: t('communityLifestyle.events.nutritionWorkshop.type'),
    description: t('communityLifestyle.events.nutritionWorkshop.description'),
    attendees: 18,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: t('communityLifestyle.events.socialMixer.title'),
    date: t('communityLifestyle.events.socialMixer.date'),
    time: t('communityLifestyle.events.socialMixer.time'),
    type: t('communityLifestyle.events.socialMixer.type'),
    description: t('communityLifestyle.events.socialMixer.description'),
    attendees: 45,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop',
    color: 'from-blue-500 to-purple-500',
  },
  {
    id: 4,
    title: t('communityLifestyle.events.fitnessChallenge.title'),
    date: t('communityLifestyle.events.fitnessChallenge.date'),
    time: t('communityLifestyle.events.fitnessChallenge.time'),
    type: t('communityLifestyle.events.fitnessChallenge.type'),
    description: t('communityLifestyle.events.fitnessChallenge.description'),
    attendees: 32,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    color: 'from-red-500 to-orange-500',
  },
];

export default function CommunityLifestyle() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: '50px' });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1, margin: '50px' });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.1, margin: '50px' });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.1, margin: '50px' });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const communityFeatures = getCommunityFeatures(t);
  const upcomingEvents = getUpcomingEvents(t);

  const communityStats = [
    { icon: Users, value: '2,500+', label: t('communityLifestyle.stats.activeMembers') },
    { icon: Calendar, value: '150+', label: t('communityLifestyle.stats.monthlyEvents') },
    { icon: MessageCircle, value: '98%', label: t('communityLifestyle.stats.satisfaction') },
    { icon: Award, value: '24/7', label: t('communityLifestyle.stats.community') },
  ];

  return (
    <section
      ref={sectionRef}
      className='py-20 px-6 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111] relative overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-1/4 right-1/6 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse' />
        <div
          className='absolute bottom-1/4 left-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '3s' }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent' />
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
              className='w-20 h-0.5 bg-gradient-to-r from-transparent to-purple-500'
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div
              className='p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-6 shadow-2xl'
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Users className='w-8 h-8 text-white' />
            </motion.div>
            <motion.div
              className='w-20 h-0.5 bg-gradient-to-l from-transparent to-purple-500'
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
            {t('communityLifestyle.title')}{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
              {t('communityLifestyle.titleHighlight')}
            </span>
          </motion.h2>

          <motion.p
            className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('communityLifestyle.subtitle')}
          </motion.p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          ref={statsRef}
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto'
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              className='text-center group'
              initial={{ opacity: 0, y: 20 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl hover:border-purple-500/50 transition-all duration-300'>
                <motion.div
                  className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </motion.div>
                <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2'>
                  {stat.value}
                </div>
                <div className='text-gray-400 text-sm font-medium'>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Features Grid */}
        <motion.div
          ref={featuresRef}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'
          initial={{ opacity: 0, y: 30 }}
          animate={isFeaturesInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className='group relative'
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                    <Sparkles className='w-5 h-5 text-gray-400' />
                  </div>

                  {/* Premium Border Glow */}
                  <div
                    className={`absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${feature.color} rounded-3xl blur-2xl -z-10`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Events Section */}
        <motion.div
          ref={eventsRef}
          className='mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isEventsInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className='text-center mb-12'>
            <motion.h3
              className='text-4xl md:text-5xl font-black text-white mb-4'
              initial={{ opacity: 0, y: 20 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('communityLifestyle.upcomingEvents.title')}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                {t('communityLifestyle.upcomingEvents.titleHighlight')}
              </span>
            </motion.h3>
            <motion.p
              className='text-lg text-gray-300 max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              animate={isEventsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('communityLifestyle.upcomingEvents.subtitle')}
            </motion.p>
          </div>

          {/* Events Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className='group relative cursor-pointer'
                initial={{ opacity: 0, y: 30 }}
                animate={isEventsInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className='bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700/50 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300'>
                  {/* Event Image */}
                  <div className='relative h-48 overflow-hidden'>
                    <div
                      className='absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110'
                      style={{ backgroundImage: `url(${event.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />

                    {/* Event Type Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${event.color} text-white text-xs font-bold rounded-full`}
                    >
                      {event.type}
                    </div>

                    {/* Attendees */}
                    <div className='absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full'>
                      <Users className='w-3 h-3 text-white' />
                      <span className='text-white text-xs font-medium'>{event.attendees}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className='p-6'>
                    <h4 className='text-lg font-bold text-white mb-2 group-hover:text-[#AE3537] transition-colors duration-300'>
                      {event.title}
                    </h4>

                    <div className='flex items-center gap-4 mb-3 text-sm text-gray-400'>
                      <div className='flex items-center gap-1'>
                        <Calendar className='w-4 h-4' />
                        <span>{event.date}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Clock className='w-4 h-4' />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>{event.description}</p>

                    <motion.button
                      className='w-full bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white py-2 px-4 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-[#AE3537]/30 transition-all duration-300'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('communityLifestyle.upcomingEvents.joinEvent')}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className='text-center'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView || isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-3xl p-12 backdrop-blur-xl shadow-2xl max-w-4xl mx-auto'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              {t('communityLifestyle.cta.title')}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
                {t('communityLifestyle.cta.titleHighlight')}
              </span>
            </h3>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto'>
              {t('communityLifestyle.cta.subtitle')}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-3'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <UserPlus className='w-5 h-5' />
                {t('communityLifestyle.cta.joinCommunity')}
              </motion.button>
              <motion.button
                className='bg-gray-800/50 border border-gray-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-3'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className='w-5 h-5' />
                {t('communityLifestyle.cta.viewEvents')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
