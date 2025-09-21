'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, Star, Users, Dumbbell, Waves, Sparkles, Shield, Coffee, ShoppingBag, ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Banner from './banner';

interface ExperienceCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge?: string;
  stats: {
    label: string;
    value: number | string;
    suffix?: string;
  }[];
  features: {
    title: string;
    items: string[];
  };
  icon: React.ReactNode;
}

const experiences: ExperienceCard[] = [
  {
    id: 1,
    title: 'Fitness Zone',
    subtitle: 'Premium Training',
    description:
      'State-of-the-art fitness equipment and personalized training programs designed to maximize your workout efficiency and results.',
    image: '/images/premium-experiences/fitness-zone.jpeg',
    badge: 'Most Popular',
    stats: [
      { label: 'Equipment', value: 200, suffix: '+' },
      { label: 'Trainers', value: 15 },
      { label: 'Classes', value: 50, suffix: '+' },
    ],
    features: {
      title: 'Fitness Amenities',
      items: [
        'Advanced cardio equipment',
        'Professional weight training area',
        'Functional training zone',
        'Personal training sessions',
        'Group fitness classes',
        'Performance tracking system',
      ],
    },
    icon: <Dumbbell size={24} className='text-[#AE3537]' />,
  },
  {
    id: 2,
    title: 'Spa Zone',
    subtitle: 'Luxury Relaxation',
    description:
      'Indulge in world-class spa treatments and therapeutic services designed to rejuvenate your body, mind, and spirit.',
    image: '/images/premium-experiences/spa-zone.jpeg',
    badge: 'Exclusive',
    stats: [
      { label: 'Treatment Rooms', value: 12 },
      { label: 'Therapists', value: 8 },
      { label: 'Services', value: 25, suffix: '+' },
    ],
    features: {
      title: 'Spa Services',
      items: [
        'Full body massages',
        'Facial treatments',
        'Aromatherapy sessions',
        'Hot stone therapy',
        'Couples treatment rooms',
        'Relaxation lounges',
      ],
    },
    icon: <Waves size={24} className='text-[#AE3537]' />,
  },
  {
    id: 3,
    title: 'Beauty Zone',
    subtitle: 'Aesthetic Excellence',
    description:
      'Professional beauty services and aesthetic treatments to enhance your natural beauty with the latest techniques and premium products.',
    image: '/images/premium-experiences/beauty-zone.jpeg',
    stats: [
      { label: 'Specialists', value: 6 },
      { label: 'Services', value: 30, suffix: '+' },
      { label: 'Premium Brands', value: 10 },
    ],
    features: {
      title: 'Beauty Services',
      items: [
        'Hair styling & coloring',
        'Professional makeup',
        'Nail art & manicures',
        'Eyebrow & lash services',
        'Skincare consultations',
        'Anti-aging treatments',
      ],
    },
    icon: <Sparkles size={24} className='text-[#AE3537]' />,
  },
  {
    id: 4,
    title: "Women's Zone",
    subtitle: 'Private Sanctuary',
    description:
      'A culturally sensitive, private area exclusively for women, featuring dedicated fitness equipment, spa services, and relaxation spaces.',
    image: '/images/premium-experiences/womans-zone.jpeg',
    badge: 'Cultural Respect',
    stats: [
      { label: 'Private Area', value: '1500', suffix: 'm²' },
      { label: 'Female Staff', value: 20 },
      { label: 'Exclusive Hours', value: 12, suffix: 'hrs' },
    ],
    features: {
      title: 'Exclusive Amenities',
      items: [
        'Women-only fitness area',
        'Private spa treatments',
        'Female-only swimming pool',
        'Dedicated changing rooms',
        'Ladies-only classes',
        'Cultural prayer space',
      ],
    },
    icon: <Shield size={24} className='text-[#AE3537]' />,
  },
  {
    id: 5,
    title: 'Fitbar Restaurant',
    subtitle: 'Nutrition Excellence',
    description:
      'Gourmet healthy dining experience featuring nutritionist-designed menus, fresh ingredients, and premium beverages for optimal wellness.',
    image: '/images/premium-experiences/fitbar-restaurant.jpeg',
    stats: [
      { label: 'Menu Items', value: 120, suffix: '+' },
      { label: 'Chefs', value: 4 },
      { label: 'Seating', value: 80 },
    ],
    features: {
      title: 'Dining Features',
      items: [
        'Nutritionist-designed menus',
        'Organic & locally sourced',
        'Protein-rich meal options',
        'Fresh juice & smoothie bar',
        'Dietary restriction options',
        'Post-workout recovery meals',
      ],
    },
    icon: <Coffee size={24} className='text-[#AE3537]' />,
  },
  {
    id: 6,
    title: 'Wellness Shop',
    subtitle: 'Premium Retail',
    description:
      'Curated selection of premium wellness products, fitness gear, supplements, and lifestyle items to support your health journey.',
    image: '/images/premium-experiences/wellness-shop.jpeg',
    stats: [
      { label: 'Products', value: 500, suffix: '+' },
      { label: 'Brands', value: 25 },
      { label: 'Categories', value: 12 },
    ],
    features: {
      title: 'Product Range',
      items: [
        'Premium supplements',
        'Fitness equipment & gear',
        'Organic skincare products',
        'Wellness books & guides',
        'Branded merchandise',
        'Health monitoring devices',
      ],
    },
    icon: <ShoppingBag size={24} className='text-[#AE3537]' />,
  },
];

export default function PremiumExperiences() {
  const [selectedCard, setSelectedCard] = useState<ExperienceCard | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id='experiences'
      className='py-20 px-6 bg-gradient-to-br from-[#1a1a1a] via-[#202020] to-[#1a1a1a] relative overflow-hidden'
    >
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#AE3537]/20 to-transparent' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10' ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          className='text-center mb-20'
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className='inline-flex items-center gap-4 mb-6'
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]' />
            <Star className='w-8 h-8 text-[#AE3537] fill-current' />
            <div className='w-16 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]' />
          </motion.div>

          <h2 className='text-5xl md:text-7xl font-black mb-6 text-white leading-tight'>
            PREMIUM{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
              EXPERIENCES
            </span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring
            Azerbaijan&apos;s cultural values.
          </p>
        </motion.div>

        {/* Enhanced Cards Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              onHoverStart={() => setHoveredCard(experience.id)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCard(experience)}
              className='group cursor-pointer'
            >
              <div className='relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-[#AE3537]/30 transition-all duration-500'>
                {/* Hover Glow Effect */}
                <motion.div
                  className='absolute -inset-0.5 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-3xl opacity-0 blur-xl transition-opacity duration-500'
                  animate={{ opacity: hoveredCard === experience.id ? 0.3 : 0 }}
                />

                {/* Badge */}
                {experience.badge && (
                  <motion.div
                    className='absolute top-6 left-6 z-20 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {experience.badge}
                  </motion.div>
                )}

                {/* Image Section */}
                <div className='relative h-80 overflow-hidden'>
                  <motion.div
                    animate={{ scale: hoveredCard === experience.id ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      width={800}
                      height={320}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>

                  {/* Gradient Overlays */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-t from-[#AE3537]/20 to-transparent opacity-0'
                    animate={{ opacity: hoveredCard === experience.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className='absolute bottom-6 left-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20'
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {experience.icon}
                  </motion.div>

                  {/* Hover Play Button */}
                  <motion.div
                    className='absolute inset-0 flex items-center justify-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: hoveredCard === experience.id ? 1 : 0,
                      scale: hoveredCard === experience.id ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className='w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30'>
                      <Play className='w-6 h-6 text-white ml-1' fill='currentColor' />
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className='p-8'>
                  <motion.div animate={{ y: hoveredCard === experience.id ? -5 : 0 }} transition={{ duration: 0.3 }}>
                    <h3 className='text-3xl font-black mb-3 leading-tight'>
                      <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                        {experience.title.split(' ')[0]}
                      </span>
                      <span className='text-white'>{' ' + experience.title.split(' ').slice(1).join(' ')}</span>
                    </h3>

                    <p className='text-[#AE3537] font-semibold text-lg mb-4'>{experience.subtitle}</p>
                    <p className='text-gray-300 mb-8 leading-relaxed line-clamp-3'>{experience.description}</p>

                    {/* Enhanced Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                      {experience.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          className='text-center p-3 bg-gray-800/30 rounded-xl border border-gray-700/50'
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(174, 53, 55, 0.1)' }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className='text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-1'>
                            {stat.value}
                            {stat.suffix || ''}
                          </div>
                          <div className='text-xs text-gray-400 font-medium'>{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className='w-full bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white py-4 px-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300'
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Experience
                      <motion.div animate={{ x: hoveredCard === experience.id ? 5 : 0 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className='w-5 h-5' />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Immersive Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center'
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className='absolute inset-0 bg-black/80 backdrop-blur-md'
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className='relative w-full max-w-6xl mx-4 max-h-[95vh] overflow-hidden'
            >
              <div className='bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl'>
                {/* Close Button */}
                <motion.button
                  onClick={() => setSelectedCard(null)}
                  className='absolute top-6 right-6 z-30 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-300'
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                {/* Badge */}
                {selectedCard.badge && (
                  <motion.div
                    className='absolute top-6 left-6 z-20 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg'
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {selectedCard.badge}
                  </motion.div>
                )}

                <div className='grid lg:grid-cols-2 gap-0 h-full max-h-[95vh] overflow-y-auto'>
                  {/* Left Side - Image */}
                  <motion.div
                    className='relative h-96 lg:h-full'
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <Image
                      src={selectedCard.image}
                      alt={selectedCard.title}
                      width={800}
                      height={600}
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:bg-gradient-to-r lg:from-transparent lg:to-black/60' />

                    {/* Floating Icon */}
                    <motion.div
                      className='absolute bottom-8 left-8 p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20'
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {selectedCard.icon}
                    </motion.div>
                  </motion.div>

                  {/* Right Side - Content */}
                  <motion.div
                    className='p-8 lg:p-12 flex flex-col justify-center'
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <motion.h3
                      className='text-4xl lg:text-5xl font-black mb-4 leading-tight'
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                        {selectedCard.title.split(' ')[0]}
                      </span>
                      <span className='text-white'>{' ' + selectedCard.title.split(' ').slice(1).join(' ')}</span>
                    </motion.h3>

                    <motion.p
                      className='text-[#AE3537] font-bold text-xl mb-6'
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {selectedCard.subtitle}
                    </motion.p>

                    <motion.p
                      className='text-gray-300 text-lg mb-10 leading-relaxed'
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {selectedCard.description}
                    </motion.p>

                    {/* Enhanced Stats */}
                    <motion.div
                      className='grid grid-cols-3 gap-4 mb-10'
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {selectedCard.stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className='text-center p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50'
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className='text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-2'>
                            {stat.value}
                            {stat.suffix || ''}
                          </div>
                          <div className='text-gray-300 font-medium text-sm'>{stat.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Features */}
                    <motion.div
                      className='mb-10'
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      <h4 className='text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                        {selectedCard.features.title}
                      </h4>
                      <div className='grid grid-cols-1 gap-3'>
                        {selectedCard.features.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className='flex items-center gap-4 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30'
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(174, 53, 55, 0.1)' }}
                          >
                            <Star size={18} className='text-[#AE3537] fill-current flex-shrink-0' />
                            <span className='text-gray-300 font-medium'>{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      className='flex gap-4'
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <motion.button
                        className='flex-1 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Experience
                      </motion.button>
                      <motion.button
                        className='px-6 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl border border-white/20 font-bold hover:bg-white/20 transition-all duration-300'
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Banner
        title='Cultural Excellence & Privacy'
        logoComponent={<Users className='w-15 h-15 text-crown-primary' />}
        titleStyle='mixed'
        description="Our women's facilities span 800m² of completely private space, designed with deep respect for Azerbaijan's cultural values. Featuring dedicated female trainers, private changing areas, and women-only class schedules, we ensure comfort and modesty without compromising luxury."
      />
    </section>
  );
}
