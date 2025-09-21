'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Users, Dumbbell, Waves, Sparkles, Shield, Coffee, ShoppingBag } from 'lucide-react';
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

  return (
    <section id='experiences' className='py-20 px-6 bg-[#202020]'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold mb-6 text-white'>
            PREMIUM <span className='text-[#AE3537]'>EXPERIENCES</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
            Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring
            Azerbaijan&apos;s cultural values.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              onClick={() => setSelectedCard(experience)}
              className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group relative'
              whileHover={{ y: -8 }}
              layout={false}
            >
              {/* Badge */}
              {experience.badge && (
                <div className='absolute top-4 left-4 z-10 bg-[#AE3537] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  {experience.badge}
                </div>
              )}

              {/* Image */}
              <div className='relative h-64 overflow-hidden'>
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={800}
                  height={256}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-4 left-4 text-white'>{experience.icon}</div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>
                  <span className='text-[#AE3537]'>{experience.title.split(' ')[0]}</span>
                  {' ' + experience.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className='text-[#AE3537] font-semibold mb-3'>{experience.subtitle}</p>
                <p className='text-gray-300 mb-6 line-clamp-3'>{experience.description}</p>

                {/* Stats */}
                <div className='flex justify-between items-center'>
                  {experience.stats.map((stat, index) => (
                    <div key={index} className='text-center'>
                      <div className='text-lg font-bold text-[#AE3537]'>
                        {stat.value}
                        {stat.suffix || ''}
                      </div>
                      <div className='text-xs text-gray-400'>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className='bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative'
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className='absolute top-4 right-4 z-20 bg-gray-700/90 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-200'
              >
                <X size={20} />
              </button>

              {/* Badge */}
              {selectedCard.badge && (
                <div className='absolute top-4 left-4 z-10 bg-[#AE3537] text-white px-4 py-2 rounded-full font-semibold'>
                  {selectedCard.badge}
                </div>
              )}

              {/* Image */}
              <div className='relative h-80'>
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  width={800}
                  height={320}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-6 left-6 text-white'>{selectedCard.icon}</div>
              </div>

              {/* Content */}
              <div className='p-8'>
                <h3 className='text-4xl font-bold mb-3'>
                  <span className='text-[#AE3537]'>{selectedCard.title.split(' ')[0]}</span>
                  {' ' + selectedCard.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className='text-[#AE3537] font-semibold text-xl mb-4'>{selectedCard.subtitle}</p>
                <p className='text-gray-300 text-lg mb-8 leading-relaxed'>{selectedCard.description}</p>

                {/* Stats */}
                <div className='grid grid-cols-3 gap-6 mb-8'>
                  {selectedCard.stats.map((stat, index) => (
                    <div key={index} className='text-center bg-gray-700 p-4 rounded-lg'>
                      <div className='text-2xl font-bold text-[#AE3537] mb-1'>
                        {stat.value}
                        {stat.suffix || ''}
                      </div>
                      <div className='text-gray-300'>{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className='mb-8'>
                  <h4 className='text-2xl font-bold mb-4 text-[#AE3537]'>{selectedCard.features.title}</h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {selectedCard.features.items.map((item, index) => (
                      <div key={index} className='flex items-center gap-3'>
                        <Star size={16} className='text-[#AE3537] fill-current' />
                        <span className='text-gray-300'>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className='text-center'>
                  <button className='bg-[#AE3537] hover:bg-[#8B2A2D] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>
                    Book Experience
                  </button>
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
