'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Check, Crown, Star, Sparkles, Award, Dumbbell, Waves, User, Shield } from 'lucide-react';

interface PricingPlan {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
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
    icon: Crown,
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
    features: [
      'VIP lounge access',
      'Priority booking',
      'Guest passes',
      'Concierge services',
      'Exclusive events',
    ],
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

// Separate component for feature cards with proper event handling
const FeatureCard = React.memo(({
  feature,
  isSelected,
  onToggle,
  isAnnual
}: {
  feature: CustomFeature;
  isSelected: boolean;
  onToggle: (id: string) => void;
  isAnnual: boolean;
}) => {
  const handleClick = () => {
    onToggle(feature.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle(feature.id);
    }
  };

  return (
    <div
      role="checkbox"
      tabIndex={0}
      aria-checked={isSelected}
      aria-labelledby={`feature-${feature.id}-title`}
      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#AE3537] focus:ring-offset-2 focus:ring-offset-gray-900 ${
        isSelected
          ? 'bg-[#AE3537]/20 border-[#AE3537] shadow-lg shadow-[#AE3537]/20'
          : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800/70'
      }`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className='flex items-start gap-3'>
        <div
          className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 flex-shrink-0 transition-all duration-200 ${
            isSelected
              ? 'bg-[#AE3537] border-[#AE3537]'
              : 'border-gray-500'
          }`}
        >
          {isSelected && (
            <Check className='w-3 h-3 text-white' />
          )}
        </div>
        <div className='flex-1'>
          <div className='flex items-center justify-between mb-1'>
            <h4 id={`feature-${feature.id}-title`} className='font-semibold text-white'>
              {feature.name}
            </h4>
            <div className='font-bold text-[#AE3537]'>
              ${isAnnual ? Math.floor(feature.yearlyPrice / 12) : feature.monthlyPrice}/mo
            </div>
          </div>
          <p className='text-sm text-gray-400 mb-2'>{feature.description}</p>
          <div className='text-xs text-gray-500'>
            {feature.features.slice(0, 2).join(' • ')}
            {feature.features.length > 2 && ` • +${feature.features.length - 2} more`}
          </div>
        </div>
      </div>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default function MembershipExcellence() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calculate custom pricing with useMemo for performance
  const customPrice = React.useMemo(() => {
    const selectedFeaturesData = customFeatures.filter(feature => selectedFeatures.includes(feature.id));
    const monthlyTotal = selectedFeaturesData.reduce((sum, feature) => sum + feature.monthlyPrice, 0);
    const yearlyTotal = selectedFeaturesData.reduce((sum, feature) => sum + feature.yearlyPrice, 0);
    return { monthly: monthlyTotal, yearly: yearlyTotal };
  }, [selectedFeatures, customFeatures]);

  // Feature selection handler with useCallback for performance
  const handleFeatureToggle = React.useCallback((featureId: string) => {
    console.log('Toggling feature:', featureId); // Debug log
    setSelectedFeatures(prev => {
      const isSelected = prev.includes(featureId);
      const newSelection = isSelected
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId];
      console.log('Previous selection:', prev); // Debug log
      console.log('New selection:', newSelection); // Debug log
      return newSelection;
    });
  }, []);

  // Helper function to check if feature is selected
  const isFeatureSelected = React.useCallback((featureId: string) => {
    return selectedFeatures.includes(featureId);
  }, [selectedFeatures]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a]'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex items-center justify-center mb-8'>
            <div className='w-20 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]'></div>
            <div className='w-12 h-12 bg-[#AE3537] rounded-full flex items-center justify-center mx-6'>
              <span className='text-white font-bold text-sm'>C</span>
            </div>
            <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]'></div>
          </div>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
            MEMBERSHIP <span className='text-[#AE3537]'>EXCELLENCE</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
            Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.
          </p>

          {/* Founding Members Badge */}
          <div className='inline-flex items-center bg-[#AE3537]/20 border border-[#AE3537]/40 rounded-full px-8 py-3 backdrop-blur-sm'>
            <Sparkles className='w-5 h-5 text-[#AE3537] mr-3' />
            <span className='text-white font-semibold text-lg'>Founding Members: Up to 33% OFF First 6 Months</span>
          </div>
        </div>

        {/* Billing Toggle */}
        <div
          className={`mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
          {presetPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular/Special Badges */}
              {plan.badge && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-30'>
                  <div
                    className={`px-6 py-2 rounded-full text-sm font-bold shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black'
                    }`}
                  >
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full bg-gray-800/50 backdrop-blur-xl border-2 rounded-3xl overflow-hidden transition-all duration-700 shadow-xl group-hover:scale-105 ${
                  plan.popular
                    ? `${plan.borderColor} shadow-2xl shadow-${plan.glowColor}/20`
                    : `border-gray-700 hover:${plan.borderColor}/30`
                }`}
              >
                {/* Card Header with Gradient */}
                <div className={`relative p-6 bg-gradient-to-br ${plan.color} text-white`}>
                  {/* Savings Badge */}
                  <div className='absolute top-4 right-4'>
                    <div className='bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold'>
                      {plan.discount}
                    </div>
                  </div>

                  <div className='flex items-center justify-between mb-6'>
                    <plan.icon className='w-12 h-12' />
                    {plan.popular && <Star className='w-8 h-8 text-yellow-400 fill-current' />}
                  </div>

                  <h3 className='text-2xl font-bold mb-2'>{plan.title}</h3>
                  <p className='text-white/90 text-sm mb-6 font-light'>{plan.subtitle}</p>

                  {/* Pricing */}
                  <div className='mb-4'>
                    <div className='flex items-baseline space-x-3'>
                      <span className='text-4xl font-bold'>
                        ${isAnnual ? Math.floor(plan.price.yearly / 12) : plan.price.monthly}
                      </span>
                      <div className='flex flex-col'>
                        <span className='text-white/60 text-sm line-through'>
                          ${isAnnual ? Math.floor(plan.originalPrice.yearly / 12) : plan.originalPrice.monthly}
                        </span>
                        <span className='text-white/80 text-sm'>
                          /{isAnnual ? 'month' : 'month'}
                        </span>
                      </div>
                    </div>
                    {isAnnual && (
                      <div className='text-white/70 text-xs mt-1'>
                        Billed annually (${plan.price.yearly})
                      </div>
                    )}
                  </div>

                  <p className='text-white/90 text-sm leading-relaxed'>{plan.description}</p>
                </div>

                {/* Card Body */}
                <div className='p-6 flex-1 flex flex-col'>
                  {/* Features List */}
                  <div className='flex-1 mb-8'>
                    <ul className='space-y-4'>
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className='flex items-start text-white text-sm'>
                          <Check
                            className={`w-4 h-4 text-[#AE3537] mr-3 mt-0.5 flex-shrink-0`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Plan button clicked:', plan.title);
                      // Add your plan selection logic here
                    }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-500 transform ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#AE3537] to-[#AE3537] shadow-xl shadow-[#AE3537]/30 hover:scale-105'
                        : 'bg-gradient-to-r from-[#AE3537] to-[#AE3537] hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Premium Glow Effect */}
                <div
                  className={`absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-[#AE3537] to-[#AE3537] rounded-3xl blur-xl -z-10`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Section */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <h3 className='text-4xl font-bold text-white mb-4'>
              Or Build Your <span className='text-[#AE3537]'>Custom Plan</span>
            </h3>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Create a personalized membership by selecting only the features you need. Perfect for those who want complete control over their wellness experience.
            </p>
          </div>

          {/* Custom Plan Card */}
          <div className='max-w-4xl mx-auto'>
            <div
              className={`relative group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${3 * 150}ms` }}
            >
            {/* Card */}
            <div className='relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-gray-800 rounded-3xl transition-all duration-300 hover:border-gray-700 overflow-hidden'>

              {/* Background Glow */}
              <div className='absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700' />

              {/* Card Header */}
              <div className='grid lg:grid-cols-2 gap-8 p-8'>
                {/* Left Column - Icon, Title, Price */}
                <div className='text-center lg:text-left'>
                  {/* Icon */}
                  <div className='flex justify-center lg:justify-start mb-6'>
                    <div className='p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full group-hover:scale-110 transition-transform duration-300'>
                      <Sparkles className='w-8 h-8 text-white' />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      <span className='text-[#AE3537]'>Custom</span> Plan
                    </h3>
                    <p className='text-[#AE3537] font-semibold'>Build Your Own</p>
                  </div>

                  {/* Price */}
                  <div className='mb-6'>
                    <div className='text-4xl font-bold text-white mb-2'>
                      ${customPrice.monthly > 0 ? (isAnnual ? Math.floor(customPrice.yearly / 12) : customPrice.monthly) : 0}
                      <span className='text-lg text-gray-400'>/month</span>
                    </div>
                    {isAnnual && customPrice.yearly > 0 && (
                      <div className='text-sm text-gray-400'>
                        Billed annually (${customPrice.yearly})
                      </div>
                    )}
                    {customPrice.monthly === 0 && (
                      <div className='text-sm text-gray-400'>
                        Select features to see pricing
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                    {selectedFeatures.length > 0
                      ? `Your personalized membership with ${selectedFeatures.length} selected feature${selectedFeatures.length !== 1 ? 's' : ''}. Perfect for your specific wellness needs.`
                      : 'Create a personalized membership by selecting only the features you need. Perfect for those who want complete control over their wellness experience.'
                    }
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('Custom plan button clicked, selected features:', selectedFeatures);
                      if (selectedFeatures.length > 0) {
                        // Add your custom plan logic here
                        alert(`Custom plan created with ${selectedFeatures.length} features!`);
                      }
                    }}
                    className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                      selectedFeatures.length > 0
                        ? 'bg-[#AE3537] text-white hover:bg-[#8B2A2D] hover:shadow-xl hover:shadow-[#AE3537]/30 focus:ring-[#AE3537]'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed focus:ring-gray-500'
                    }`}
                    disabled={selectedFeatures.length === 0}
                  >
                    {selectedFeatures.length > 0 ? 'Build Custom Plan' : 'Select Features First'}
                  </button>
                </div>

                {/* Right Column - Feature Selection */}
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>Select Features:</h4>
                  <div className='space-y-3 max-h-80 overflow-y-auto pr-2'>
                    {customFeatures.map(feature => (
                      <FeatureCard
                        key={feature.id}
                        feature={feature}
                        isSelected={isFeatureSelected(feature.id)}
                        onToggle={handleFeatureToggle}
                        isAnnual={isAnnual}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Border Glow */}
              <div className='absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl blur-2xl -z-10' />
            </div>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div
          className={`transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-800 rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl'>
            <div className='text-center'>
              <Award className='w-16 h-16 text-[#AE3537] mx-auto mb-8' />
              <h3 className='text-4xl font-bold text-white mb-6'>
                Founding Member{' '}
                <span className='text-[#AE3537]'>Guarantee</span>
              </h3>
              <div className='grid md:grid-cols-3 gap-8 mb-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#AE3537] mb-2'>25%</div>
                  <div className='text-white'>Off First 6 Months</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#AE3537] mb-2'>3</div>
                  <div className='text-white'>Free Personal Training Sessions</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-[#AE3537] mb-2'>VIP</div>
                  <div className='text-white'>Grand Opening Access</div>
                </div>
              </div>
              <p className='text-xl text-white leading-relaxed mb-8 max-w-4xl mx-auto'>
                As a founding member of Crown Wellness Club, you're not just joining a fitness facility - you're becoming part of Azerbaijan's premier wellness revolution. Enjoy exclusive benefits, priority access, and the prestige of being among the first to experience luxury redefined.
              </p>
              <button className='bg-[#AE3537] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#8B2A2D] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#AE3537]/30'>
                Claim Founding Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}