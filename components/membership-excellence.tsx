'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import NumberFlow from '@number-flow/react';
import {
  Check,
  Crown,
  Star,
  Sparkles,
  Award,
  Dumbbell,
  Waves,
  User,
  Shield,
  ArrowRight,
  Zap,
  Gift,
} from 'lucide-react';
import Logo from './logo';

interface PricingPlan {
  id: number;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  subtitle: string;
  discount?: string;
  price: {
    monthly: number;
    yearly: number;
  };
  originalPrice: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  description: string;
  badge?: string;
  buttonText: string;
  popular?: boolean;
  color: string;
  borderColor: string;
  glowColor: string;
}

const presetPlans: PricingPlan[] = [
  {
    id: 1,
    icon: Dumbbell,
    title: 'Essential',
    subtitle: 'Perfect Start',
    discount: '33% OFF',
    price: {
      monthly: 199,
      yearly: 1990,
    },
    originalPrice: {
      monthly: 299,
      yearly: 2988,
    },
    features: [
      'Access to Main Fitness Zone',
      'Group Fitness Classes',
      'Standard Locker Room',
      'Member Mobile App',
      'Basic Equipment Access',
      'Complimentary Wellness Consultation',
    ],
    description: 'Start your wellness journey with essential amenities and expert guidance.',
    buttonText: 'Start Essential',
    color: 'from-slate-600 via-gray-700 to-slate-800',
    borderColor: 'border-gray-500',
    glowColor: 'gray-400',
  },
  {
    id: 2,
    icon: Star,
    title: 'Premium',
    subtitle: 'Most Popular Choice',
    discount: '33% OFF',
    price: {
      monthly: 399,
      yearly: 3990,
    },
    originalPrice: {
      monthly: 599,
      yearly: 5988,
    },
    features: [
      'All Essential Benefits',
      'Spa Zone Full Access',
      'Personal Training (3 sessions monthly)',
      'Beauty Zone Services (20% off)',
      'Nutritional Consultation',
      'Priority Class Booking',
      'Fitbar Healthy Meals (10% off)',
      'Weekend Wellness Workshops',
    ],
    description: 'Complete wellness experience with premium amenities and personalized services.',
    badge: 'Most Popular',
    buttonText: 'Choose Premium',
    popular: true,
    color: 'from-blue-600 via-purple-600 to-indigo-700',
    borderColor: 'border-blue-400',
    glowColor: 'blue-400',
  },
  {
    id: 3,
    icon: Logo,
    title: 'Crown Royal',
    subtitle: 'Ultimate Luxury',
    discount: '30% OFF',
    price: {
      monthly: 699,
      yearly: 6990,
    },
    originalPrice: {
      monthly: 999,
      yearly: 9988,
    },
    features: [
      'All Premium Benefits',
      'Unlimited Personal Training',
      'Private Training Sessions Available',
      'VIP Spa Treatment Suite',
      'Beauty Zone Priority Booking',
      'Exclusive Royal Events Access',
      'Concierge Wellness Services',
      'Guest Privileges (3 monthly passes)',
      'Complimentary Wellness Shopping',
    ],
    description: 'Ultimate luxury wellness with exclusive royal privileges and unlimited access.',
    buttonText: 'Experience Crown Royal',
    color: 'from-yellow-500 via-amber-600 to-yellow-700',
    borderColor: 'border-yellow-400',
    glowColor: 'yellow-400',
  },
];

interface CustomFeature {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  category: 'fitness' | 'spa' | 'personal' | 'exclusive';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  features: string[];
}

const customFeatures: CustomFeature[] = [
  {
    id: 'fitness-zone',
    name: 'Fitness Zone',
    description: 'Complete fitness facility access',
    monthlyPrice: 149,
    yearlyPrice: 1490,
    category: 'fitness',
    icon: Dumbbell,
    color: 'from-blue-500 to-blue-700',
    features: [
      'State-of-the-art equipment',
      'Cardio and strength training',
      'Functional training area',
      'Locker room access',
      'Equipment orientation',
    ],
  },
  {
    id: 'spa-wellness',
    name: 'Spa Wellness',
    description: 'Luxury spa and relaxation services',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    category: 'spa',
    icon: Waves,
    color: 'from-teal-500 to-teal-700',
    features: [
      'Sauna and steam rooms',
      'Relaxation lounges',
      'Massage treatments',
      'Aromatherapy sessions',
      'Recovery facilities',
    ],
  },
  {
    id: 'personal-services',
    name: 'Personal Services',
    description: 'Dedicated personal training and consultation',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    category: 'personal',
    icon: User,
    color: 'from-purple-500 to-purple-700',
    features: [
      'Personal training sessions',
      'Nutrition consultations',
      'Wellness assessments',
      'Custom workout plans',
      'Progress tracking',
    ],
  },
  {
    id: 'exclusive-access',
    name: 'Exclusive Access',
    description: 'VIP amenities and exclusive services',
    monthlyPrice: 249,
    yearlyPrice: 2490,
    category: 'exclusive',
    icon: Crown,
    color: 'from-yellow-500 to-yellow-700',
    features: ['VIP lounge access', 'Priority booking', 'Guest passes', 'Concierge services', 'Exclusive events'],
  },
  {
    id: 'womens-sanctuary',
    name: "Women's Sanctuary",
    description: 'Private women-only facilities',
    monthlyPrice: 179,
    yearlyPrice: 1790,
    category: 'exclusive',
    icon: Shield,
    color: 'from-pink-500 to-pink-700',
    features: [
      'Women-only fitness area',
      'Private spa treatments',
      'Female-only classes',
      'Cultural prayer space',
      'Modesty-focused amenities',
    ],
  },
];

// Enhanced feature card component with animations and proper event handling
const FeatureCard = React.memo(
  ({
    feature,
    isSelected,
    onToggle,
    isAnnual,
  }: {
    feature: CustomFeature;
    isSelected: boolean;
    onToggle: (id: string) => void;
    isAnnual: boolean;
  }) => {
    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onToggle(feature.id);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        onToggle(feature.id);
      }
    };

    return (
      <motion.div
        role='checkbox'
        tabIndex={0}
        aria-checked={isSelected}
        aria-labelledby={`feature-${feature.id}-title`}
        className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 focus:outline-none backdrop-blur-sm overflow-hidden ${
          isSelected
            ? 'bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 border-[#AE3537] shadow-xl shadow-[#AE3537]/30'
            : 'bg-gray-800/50 border-gray-700 hover:border-[#AE3537]/50 hover:bg-gray-800/70'
        }`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        whileTap={{ scale: 0.98 }}
        animate={{
          borderColor: isSelected ? '#AE3537' : '#374151',
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect for selected cards - Fixed overflow */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-[#AE3537]/10 to-[#FF6B6D]/10 rounded-2xl opacity-0'
          animate={{ opacity: isSelected ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className='flex items-start gap-4 relative z-10'>
          <motion.div
            className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-300 ${
              isSelected
                ? 'bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] border-[#AE3537] shadow-lg'
                : 'border-gray-500 hover:border-[#AE3537]'
            }`}
            whileHover={{ scale: 1.1 }}
            animate={{
              rotate: isSelected ? 360 : 0,
              scale: isSelected ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{
                scale: isSelected ? 1 : 0,
                rotate: isSelected ? 0 : -90,
              }}
              transition={{ duration: 0.2 }}
            >
              <Check className='w-4 h-4 text-white' />
            </motion.div>
          </motion.div>

          <div className='flex-1'>
            <div className='flex items-center justify-between mb-2'>
              <motion.h4
                id={`feature-${feature.id}-title`}
                className={`font-bold text-lg transition-colors duration-200 ${
                  isSelected ? 'text-white' : 'text-gray-200'
                }`}
                animate={{ color: isSelected ? '#ffffff' : '#e5e7eb' }}
              >
                {feature.name}
              </motion.h4>
              <motion.div
                className={`font-bold text-xl flex items-baseline gap-1 ${isSelected ? 'text-[#AE3537]' : 'text-gray-400'}`}
                animate={{
                  color: isSelected ? '#AE3537' : '#9ca3af',
                  scale: isSelected ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <span>$</span>
                <NumberFlow
                  value={isAnnual ? Math.floor(feature.yearlyPrice / 12) : feature.monthlyPrice}
                  format={{ notation: 'standard' }}
                  transformTiming={{
                    duration: 600,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
                <span className='text-sm'>/mo</span>
              </motion.div>
            </div>
            <p
              className={`text-sm mb-3 transition-colors duration-200 ${
                isSelected ? 'text-gray-300' : 'text-gray-400'
              }`}
            >
              {feature.description}
            </p>
            <div className={`text-xs flex items-center gap-2 ${isSelected ? 'text-gray-400' : 'text-gray-500'}`}>
              <feature.icon className='w-4 h-4' />
              <span>
                {feature.features.slice(0, 2).join(' • ')}
                {feature.features.length > 2 && ` • +${feature.features.length - 2} more`}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';

export default function MembershipExcellence() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Calculate custom pricing with useMemo for performance
  const customPrice = React.useMemo(() => {
    const selectedFeaturesData = customFeatures.filter((feature) => selectedFeatures.includes(feature.id));
    const monthlyTotal = selectedFeaturesData.reduce((sum, feature) => sum + feature.monthlyPrice, 0);
    const yearlyTotal = selectedFeaturesData.reduce((sum, feature) => sum + feature.yearlyPrice, 0);
    return { monthly: monthlyTotal, yearly: yearlyTotal };
  }, [selectedFeatures]);

  // Feature selection handler with useCallback for performance
  const handleFeatureToggle = React.useCallback((featureId: string) => {
    console.log('Toggling feature:', featureId); // Debug log
    setSelectedFeatures((prev) => {
      const isSelected = prev.includes(featureId);
      const newSelection = isSelected ? prev.filter((id) => id !== featureId) : [...prev, featureId];
      console.log('Previous selection:', prev); // Debug log
      console.log('New selection:', newSelection); // Debug log
      return newSelection;
    });
  }, []);

  // Helper function to check if feature is selected
  const isFeatureSelected = React.useCallback(
    (featureId: string) => {
      return selectedFeatures.includes(featureId);
    },
    [selectedFeatures]
  );

  return (
    <section
      id='membership'
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className='w-24 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]'
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div
              className='p-4 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-6 shadow-2xl'
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Crown className='w-10 h-10 text-white' />
            </motion.div>
            <motion.div
              className='w-24 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]'
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          <motion.h2
            className='text-5xl md:text-7xl font-black mb-6 text-white leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            MEMBERSHIP{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
              EXCELLENCE
            </span>
          </motion.h2>
          <motion.p
            className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive
            experiences in Azerbaijan&apos;s premier destination.
          </motion.p>

          {/* Founding Members Badge */}
          <motion.div
            className='inline-flex items-center bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 border border-[#AE3537]/40 rounded-full px-8 py-4 backdrop-blur-sm shadow-2xl'
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className='w-6 h-6 text-[#AE3537] mr-3' />
            </motion.div>
            <span className='text-white font-bold text-lg'>Founding Members: Up to 33% OFF First 6 Months</span>
            <Gift className='w-5 h-5 text-[#FF6B6D] ml-3' />
          </motion.div>
        </motion.div>

        {/* Billing Toggle */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex justify-center'>
            <div className='bg-gray-800/50 border border-gray-700 rounded-2xl p-1 backdrop-blur-sm'>
              <div className='flex'>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Monthly billing selected');
                    setIsAnnual(false);
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    !isAnnual
                      ? 'bg-[#AE3537] text-white shadow-lg focus:ring-[#AE3537]'
                      : 'text-white hover:text-[#AE3537] focus:ring-gray-500'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('Annual billing selected');
                    setIsAnnual(true);
                  }}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    isAnnual
                      ? 'bg-[#AE3537] text-white shadow-lg focus:ring-[#AE3537]'
                      : 'text-white hover:text-[#AE3537] focus:ring-gray-500'
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preset Plans */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20'>
          {presetPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className='relative group'
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Popular/Special Badges */}
              {plan.badge && (
                <motion.div
                  className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-30'
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: 'spring', bounce: 0.6 }}
                >
                  <motion.div
                    className={`px-6 py-3 rounded-full text-sm font-bold shadow-2xl border-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-blue-300'
                        : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className='flex items-center gap-2'>
                      {plan.popular ? <Star className='w-4 h-4 fill-current' /> : <Crown className='w-4 h-4' />}
                      {plan.badge}
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                className={`relative h-full bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border-2 rounded-3xl overflow-hidden shadow-2xl ${
                  plan.popular ? `${plan.borderColor} shadow-2xl shadow-${plan.glowColor}/30` : `border-gray-700`
                }`}
                animate={{
                  scale: hoveredPlan === plan.id ? 1.05 : 1,
                  y: hoveredPlan === plan.id ? -10 : 0,
                  borderColor: hoveredPlan === plan.id ? '#AE3537' : undefined,
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Hover Glow Effect */}
                <motion.div
                  className='absolute -inset-0.5 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-3xl opacity-0 blur-xl'
                  animate={{ opacity: hoveredPlan === plan.id ? 0.4 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Card Header with Gradient */}
                <motion.div
                  className={`relative p-8 bg-gradient-to-br ${plan.color} text-white`}
                  animate={{
                    background:
                      hoveredPlan === plan.id ? 'linear-gradient(135deg, #AE3537 0%, #FF6B6D 100%)' : undefined,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Savings Badge */}
                  <motion.div
                    className='absolute top-4 right-4'
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div
                      className='bg-white/30 backdrop-blur-md rounded-full px-4 py-2 text-sm font-bold border border-white/20 shadow-lg'
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      animate={{
                        boxShadow:
                          hoveredPlan === plan.id
                            ? '0 0 20px rgba(255, 255, 255, 0.5)'
                            : '0 0 0px rgba(255, 255, 255, 0)',
                      }}
                    >
                      {plan.discount}
                    </motion.div>
                  </motion.div>

                  <div className='flex items-center justify-between mb-8'>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <plan.icon size={50} className='w-12 h-12 drop-shadow-lg' />
                    </motion.div>
                    {plan.popular && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                      >
                        <Star className='w-8 h-8 text-yellow-400 fill-current drop-shadow-lg' />
                      </motion.div>
                    )}
                  </div>

                  <motion.h3
                    className='text-3xl font-black mb-3 leading-tight'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {plan.title}
                  </motion.h3>
                  <motion.p
                    className='text-white/90 text-lg mb-6 font-medium'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {plan.subtitle}
                  </motion.p>

                  {/* Pricing */}
                  <motion.div
                    className='mb-6'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <div className='flex items-baseline space-x-4'>
                      <div className='text-5xl font-black flex items-baseline'>
                        <span>$</span>
                        <NumberFlow
                          value={isAnnual ? Math.floor(plan.price.yearly / 12) : plan.price.monthly}
                          format={{ notation: 'standard' }}
                          className='text-5xl font-black'
                          transformTiming={{
                            duration: 800,
                            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <div className='text-white/60 text-sm line-through flex items-baseline'>
                          <span>$</span>
                          <NumberFlow
                            value={isAnnual ? Math.floor(plan.originalPrice.yearly / 12) : plan.originalPrice.monthly}
                            format={{ notation: 'standard' }}
                            className='text-sm'
                            transformTiming={{
                              duration: 600,
                              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                          />
                        </div>
                        <span className='text-white/80 text-sm font-medium'>/month</span>
                      </div>
                    </div>
                    {isAnnual && (
                      <motion.div
                        className='text-white/70 text-sm mt-2 flex items-center gap-2'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Zap className='w-4 h-4 text-green-400' />
                        <span>Billed annually ($</span>
                        <NumberFlow
                          value={plan.price.yearly}
                          format={{ notation: 'standard' }}
                          className='text-sm'
                          transformTiming={{
                            duration: 800,
                            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                        <span>)</span>
                      </motion.div>
                    )}
                  </motion.div>

                  <motion.p
                    className='text-white/90 text-base leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {plan.description}
                  </motion.p>
                </motion.div>

                {/* Card Body */}
                <div className='p-8 flex-1 flex flex-col'>
                  {/* Features List */}
                  <div className='flex-1 mb-8'>
                    <motion.ul
                      className='space-y-4'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    >
                      {plan.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className='flex items-start text-white text-base group'
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 1.0 + index * 0.1 + idx * 0.05 }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.div
                            className='w-5 h-5 rounded-full bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-lg'
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className='w-3 h-3 text-white' />
                          </motion.div>
                          <span className='group-hover:text-[#AE3537] transition-colors duration-200 font-medium'>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Plan button clicked:', plan.title);
                      // Add your plan selection logic here
                    }}
                    className={`group w-full py-5 px-8 rounded-2xl font-bold text-lg text-white transition-all duration-300 overflow-hidden relative ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] shadow-2xl shadow-[#AE3537]/40'
                        : 'bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    {/* Button background glow */}
                    <motion.div
                      className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                      initial={false}
                    />

                    <div className='flex items-center justify-center gap-3 relative z-10'>
                      <span>{plan.buttonText}</span>
                      <motion.div animate={{ x: hoveredPlan === plan.id ? 5 : 0 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className='w-5 h-5' />
                      </motion.div>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <motion.div
          className='mb-20'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <motion.div
              className='flex items-center justify-center mb-8'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-[#FF6B6D]' />
              <motion.div
                className='p-3 bg-gradient-to-br from-[#FF6B6D] to-[#AE3537] rounded-full flex items-center justify-center mx-6 shadow-2xl'
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Sparkles className='w-8 h-8 text-white' />
              </motion.div>
              <div className='w-16 h-0.5 bg-gradient-to-l from-transparent to-[#FF6B6D]' />
            </motion.div>

            <motion.h3
              className='text-4xl md:text-5xl font-black text-white mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Or Build Your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                Custom Plan
              </span>
            </motion.h3>
            <motion.p
              className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.9 }}
            >
              Create a personalized membership by selecting only the features you need. Perfect for those who want
              complete control over their wellness experience.
            </motion.p>
          </motion.div>

          {/* Custom Plan Card */}
          <div className='max-w-6xl mx-auto'>
            <motion.div
              className='relative group'
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              {/* Card */}
              <motion.div
                className='relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border-2 border-gray-800 rounded-3xl overflow-hidden shadow-2xl'
                whileHover={{
                  borderColor: '#AE3537',
                  scale: 1.02,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Effects */}
                <motion.div
                  className='absolute inset-0 bg-gradient-to-br from-[#AE3537]/10 to-[#FF6B6D]/10 opacity-0'
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className='absolute -inset-0.5 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-3xl opacity-0 blur-xl -z-10'
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Card Header */}
                <div className='grid lg:grid-cols-2 gap-12 p-10'>
                  {/* Left Column - Icon, Title, Price */}
                  <motion.div
                    className='text-center lg:text-left'
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    {/* Icon */}
                    <motion.div
                      className='flex justify-center lg:justify-start mb-8'
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 2.3, type: 'spring', bounce: 0.4 }}
                    >
                      <motion.div
                        className='p-5 bg-gradient-to-br from-[#FF6B6D] to-[#AE3537] rounded-full shadow-2xl'
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        animate={{
                          boxShadow: [
                            '0 0 20px rgba(174, 53, 55, 0.3)',
                            '0 0 30px rgba(255, 107, 109, 0.4)',
                            '0 0 20px rgba(174, 53, 55, 0.3)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Sparkles className='w-10 h-10 text-white' />
                      </motion.div>
                    </motion.div>

                    {/* Title & Subtitle */}
                    <motion.div
                      className='mb-8'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.4 }}
                    >
                      <motion.h3
                        className='text-3xl lg:text-4xl font-black text-white mb-3 leading-tight'
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.5 }}
                      >
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                          Custom
                        </span>{' '}
                        Plan
                      </motion.h3>
                      <motion.p
                        className='text-[#AE3537] font-bold text-xl'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                      >
                        Build Your Own Experience
                      </motion.p>
                    </motion.div>

                    {/* Price */}
                    <motion.div
                      className='mb-8'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.7 }}
                    >
                      <div className='text-5xl lg:text-6xl font-black mb-3 flex items-baseline justify-center lg:justify-start gap-2'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                          $
                        </span>
                        <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                          {customPrice.monthly > 0
                            ? isAnnual
                              ? Math.floor(customPrice.yearly / 12)
                              : customPrice.monthly
                            : 0}
                        </div>
                        <span className='text-2xl text-gray-400 font-medium'>/month</span>
                      </div>

                      <AnimatePresence mode='wait'>
                        {isAnnual && customPrice.yearly > 0 ? (
                          <motion.div
                            className='text-base text-gray-400 flex items-center gap-2 justify-center lg:justify-start'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Zap className='w-4 h-4 text-green-400' />
                            <span>Billed annually ($</span>
                            <NumberFlow
                              value={customPrice.yearly}
                              format={{ notation: 'standard' }}
                              className='text-base'
                              transformTiming={{
                                duration: 800,
                                easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                              }}
                            />
                            <span>)</span>
                          </motion.div>
                        ) : customPrice.monthly === 0 ? (
                          <motion.div
                            className='text-base text-gray-400 flex items-center gap-2 justify-center lg:justify-start'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className='w-4 h-4 text-[#AE3537]' />
                            Select features to see pricing
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      className='text-gray-400 text-base leading-relaxed mb-8'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.8 }}
                    >
                      <AnimatePresence mode='wait'>
                        {selectedFeatures.length > 0 ? (
                          <motion.span
                            key='selected'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            Your personalized membership with{' '}
                            <span className='text-[#AE3537] font-bold'>
                              {selectedFeatures.length} selected feature{selectedFeatures.length !== 1 ? 's' : ''}
                            </span>
                            . Perfect for your specific wellness needs.
                          </motion.span>
                        ) : (
                          <motion.span
                            key='default'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            Create a personalized membership by selecting only the features you need. Perfect for those
                            who want complete control over their wellness experience.
                          </motion.span>
                        )}
                      </AnimatePresence>

                      {/* Debug info for custom pricing */}
                      {process.env.NODE_ENV === 'development' && (
                        <div className='text-xs text-gray-500 mt-2'>
                          Debug: Monthly: {customPrice.monthly}, Yearly: {customPrice.yearly}, Selected: [
                          {selectedFeatures.join(', ')}]
                        </div>
                      )}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log('Custom plan button clicked, selected features:', selectedFeatures);
                        if (selectedFeatures.length > 0) {
                          // Add your custom plan logic here
                          alert(`Custom plan created with ${selectedFeatures.length} features!`);
                        }
                      }}
                      className={`group w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 overflow-hidden relative ${
                        selectedFeatures.length > 0
                          ? 'bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white hover:shadow-2xl hover:shadow-[#AE3537]/40 focus:ring-[#AE3537]'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed focus:ring-gray-500'
                      }`}
                      disabled={selectedFeatures.length === 0}
                      whileHover={selectedFeatures.length > 0 ? { scale: 1.02, y: -2 } : {}}
                      whileTap={selectedFeatures.length > 0 ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.9 }}
                    >
                      {/* Button background effect */}
                      {selectedFeatures.length > 0 && (
                        <motion.div
                          className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100'
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      <div className='flex items-center justify-center gap-3 relative z-10'>
                        <AnimatePresence mode='wait'>
                          {selectedFeatures.length > 0 ? (
                            <motion.span
                              key='build'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              Build Custom Plan
                            </motion.span>
                          ) : (
                            <motion.span
                              key='select'
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              Select Features First
                            </motion.span>
                          )}
                        </AnimatePresence>

                        {selectedFeatures.length > 0 && (
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            <ArrowRight className='w-5 h-5' />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  </motion.div>

                  {/* Right Column - Feature Selection */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.4 }}
                  >
                    <motion.h4
                      className='text-xl font-bold text-white mb-6 flex items-center gap-3'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      >
                        <Sparkles className='w-6 h-6 text-[#AE3537]' />
                      </motion.div>
                      Select Features:
                      {selectedFeatures.length > 0 && (
                        <motion.span
                          className='text-sm bg-[#AE3537] text-white px-3 py-1 rounded-full font-bold'
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', bounce: 0.6 }}
                        >
                          {selectedFeatures.length}
                        </motion.span>
                      )}
                    </motion.h4>

                    <motion.div
                      className='space-y-4 max-h-96 overflow-y-auto pr-3 custom-scrollbar'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.6 }}
                    >
                      {customFeatures.map((feature, index) => (
                        <motion.div
                          key={feature.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 2.7 + index * 0.1 }}
                        >
                          <FeatureCard
                            feature={feature}
                            isSelected={isFeatureSelected(feature.id)}
                            onToggle={handleFeatureToggle}
                            isAnnual={isAnnual}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 3.0 }}
        >
          <motion.div
            className='bg-gradient-to-r from-gray-900/95 to-black/95 border-2 border-gray-800 rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl shadow-2xl relative overflow-hidden'
            whileHover={{
              borderColor: '#AE3537',
              scale: 1.02,
              y: -5,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Background glow effect */}
            <motion.div
              className='absolute -inset-0.5 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-3xl opacity-0 blur-xl -z-10'
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <div className='text-center relative z-10'>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 3.2, type: 'spring', bounce: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Award className='w-20 h-20 text-[#AE3537] mx-auto mb-8 drop-shadow-lg' />
              </motion.div>

              <motion.h3
                className='text-4xl md:text-5xl font-black text-white mb-8 leading-tight'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.3 }}
              >
                Founding Member{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                  Guarantee
                </span>
              </motion.h3>

              <div className='grid md:grid-cols-3 gap-8 mb-10'>
                {[
                  { value: '33%', label: 'Off First 6 Months', icon: Gift },
                  { value: '3', label: 'Free Personal Training Sessions', icon: User },
                  { value: 'VIP', label: 'Grand Opening Access', icon: Crown },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className='text-center group'
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 3.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full mb-4 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#AE3537]/40 transition-all duration-300'
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className='w-8 h-8 text-white' />
                    </motion.div>
                    <motion.div
                      className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-2'
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      {typeof item.value === 'number' ? (
                        <NumberFlow
                          value={item.value}
                          format={{ notation: 'standard' }}
                          className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'
                          transformTiming={{
                            duration: 1000,
                            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        />
                      ) : (
                        item.value
                      )}
                    </motion.div>
                    <div className='text-white font-semibold text-lg'>{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className='text-xl text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.7 }}
              >
                As a founding member of Crown Wellness Club, you&apos;re not just joining a fitness facility -
                you&apos;re becoming part of Azerbaijan&apos;s premier wellness revolution. Enjoy exclusive benefits,
                priority access, and the prestige of being among the first to experience luxury redefined.
              </motion.p>

              <motion.button
                className='group bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#AE3537]/40 transition-all duration-300 relative overflow-hidden'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.8 }}
              >
                {/* Button glow effect */}
                <motion.div
                  className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  initial={false}
                />

                <div className='flex items-center gap-3 relative z-10'>
                  <span>Claim Founding Status</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight className='w-6 h-6' />
                  </motion.div>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ae3537, #ff6b6d);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8b2a2d, #e55a5c);
        }
      `}</style>
    </section>
  );
}
