'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Star,
  Dumbbell,
  Waves,
  Filter,
  Grid,
  Heart,
  Eye,
} from 'lucide-react';
import Image from 'next/image';
import Logo from '@/components/logo';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
}

interface GalleryCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
  description: string;
  count: number;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const isCategoriesInView = useInView(categoriesRef, { once: true, margin: '-100px' });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: '-100px' });

  const categories: GalleryCategory[] = [
    { id: 'all', name: 'All Gallery', icon: Camera, description: 'Complete visual experience', count: 24 },
    { id: 'fitness', name: 'Fitness Zone', icon: Dumbbell, description: 'State-of-the-art equipment', count: 8 },
    { id: 'spa', name: 'Spa & Wellness', icon: Waves, description: 'Luxury relaxation spaces', count: 6 },
    { id: 'facilities', name: 'Facilities', icon: Logo, description: 'Premium amenities', count: 5 },
    { id: 'events', name: 'Events & Classes', icon: Users, description: 'Community activities', count: 5 },
  ];

  const galleryItems: GalleryItem[] = [
    // Fitness Zone
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Main Fitness Floor',
      category: 'fitness',
      description: 'Our expansive main fitness floor featuring premium equipment from international brands',
      featured: true,
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
      title: 'Cardio Zone',
      category: 'fitness',
      description: 'Modern cardio equipment with panoramic city views',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
      title: 'Strength Training Area',
      category: 'fitness',
      description: 'Professional-grade strength training equipment and free weights',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=300&fit=crop',
      title: 'Free Weights Section',
      category: 'fitness',
      description: 'Complete free weights area with premium dumbbells and barbells',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
      title: 'Functional Training',
      category: 'fitness',
      description: 'Dedicated functional training space with versatile equipment',
    },

    // Spa & Wellness
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      title: 'Luxury Spa Entrance',
      category: 'spa',
      description: 'Elegant spa entrance designed for tranquility and luxury',
      featured: true,
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      title: 'Pool & Aquatic Center',
      category: 'spa',
      description: 'Temperature-controlled pools for relaxation and aquatic fitness',
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      title: 'Sauna & Steam Rooms',
      category: 'spa',
      description: 'Traditional and infrared saunas with steam room facilities',
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=300&fit=crop',
      title: 'Massage Treatment Rooms',
      category: 'spa',
      description: 'Private treatment rooms for therapeutic and relaxation massages',
    },

    // Facilities
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Reception & Lobby',
      category: 'facilities',
      description: 'Elegant reception area with concierge services',
      featured: true,
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=300&fit=crop',
      title: "Women's Exclusive Zone",
      category: 'facilities',
      description: 'Private 800m² women-only fitness and wellness area',
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
      title: 'Premium Locker Rooms',
      category: 'facilities',
      description: 'Spacious locker rooms with luxury amenities',
    },
    {
      id: 13,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&h=300&fit=crop',
      title: 'Juice Bar & Café',
      category: 'facilities',
      description: 'Healthy refreshments and post-workout nutrition',
    },

    // Events & Classes
    {
      id: 14,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      title: 'Yoga & Pilates Studio',
      category: 'events',
      description: 'Serene studio space for mind-body wellness classes',
    },
    {
      id: 15,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      title: 'Group Fitness Classes',
      category: 'events',
      description: 'Dynamic group fitness sessions led by expert instructors',
    },
    {
      id: 16,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
      title: 'Personal Training Sessions',
      category: 'events',
      description: 'One-on-one training with certified personal trainers',
    },
    {
      id: 17,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop',
      title: 'Wellness Workshops',
      category: 'events',
      description: 'Educational workshops on nutrition, wellness, and lifestyle',
    },
  ];

  const filteredItems =
    selectedCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;

    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedItem(filteredItems[newIndex]);
  };

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
                <Camera className='w-10 h-10 text-white' />
              </motion.div>
              <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]' />
            </motion.div>

            <motion.h1
              className='text-5xl md:text-7xl font-black mb-6 text-white leading-tight'
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              VISUAL{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                GALLERY
              </span>
            </motion.h1>
            <motion.p
              className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12'
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore the luxury and elegance of Crown Wellness Club through our comprehensive visual gallery. Witness
              the beauty of Azerbaijan&apos;s premier wellness destination.
            </motion.p>

            {/* Enhanced Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
              {[
                { value: '15,000m²', label: 'Premium Space', icon: Grid },
                { value: '12', label: 'Luxury Zones', icon: Logo },
                { value: '300+', label: 'Equipment Pieces', icon: Dumbbell },
                { value: '24/7', label: 'Accessibility', icon: Eye },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className='text-center group'
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className='bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-300'>
                    <motion.div
                      className='inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full mb-4'
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon size={24} color='#ffffff' />
                    </motion.div>
                    <div className='text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] mb-2'>
                      {stat.value}
                    </div>
                    <div className='text-gray-300 font-medium'>{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section
        ref={categoriesRef}
        className='py-20 px-6 bg-gradient-to-r from-[#AE3537]/5 via-transparent to-[#FF6B6D]/5 relative overflow-hidden'
      >
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isCategoriesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className='flex items-center justify-center mb-8'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isCategoriesInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='w-16 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]' />
              <motion.div
                className='p-3 bg-gradient-to-br from-[#AE3537] to-[#FF6B6D] rounded-full flex items-center justify-center mx-6 shadow-2xl'
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Filter className='w-8 h-8 text-white' />
              </motion.div>
              <div className='w-16 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]' />
            </motion.div>

            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              Explore Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>Spaces</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Discover different areas of our luxury wellness facility through curated gallery collections
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group text-left bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'border-[#AE3537] bg-gradient-to-br from-[#AE3537]/20 to-[#FF6B6D]/10'
                    : 'hover:border-[#AE3537]/50'
                }`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isCategoriesInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className={`p-4 rounded-2xl mb-4 inline-block transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'
                      : 'bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 group-hover:from-[#AE3537]/30 group-hover:to-[#FF6B6D]/30'
                  }`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon
                    color={selectedCategory === category.id ? '#ffffff' : '#ae3537'}
                    className={`w-6 h-6 ${selectedCategory === category.id ? 'text-white' : 'text-[#AE3537]'}`}
                  />
                </motion.div>
                <h3 className='text-lg font-bold text-white mb-2'>{category.name}</h3>
                <p className='text-gray-400 text-sm mb-4'>{category.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-[#AE3537] font-semibold text-sm'>{category.count} items</span>
                  <AnimatePresence>
                    {selectedCategory === category.id && (
                      <motion.div
                        className='w-3 h-3 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] rounded-full'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section ref={galleryRef} className='py-20 px-6 relative overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-4xl md:text-5xl font-black text-white mb-6'>
              {categories.find((cat) => cat.id === selectedCategory)?.name || 'Gallery'}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#AE3537] to-[#FF6B6D]'>
                Collection
              </span>
            </h2>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              {selectedCategory === 'all'
                ? 'Complete visual journey through our premium wellness destination'
                : categories.find((cat) => cat.id === selectedCategory)?.description}
            </p>
          </motion.div>

          {/* Featured Items */}
          <AnimatePresence mode='wait'>
            {selectedCategory === 'all' && (
              <motion.div
                className='mb-20'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
              >
                <motion.h3
                  className='text-2xl font-bold text-white mb-8 flex items-center gap-3'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Star className='w-6 h-6 text-[#AE3537] fill-current' />
                  Featured Highlights
                </motion.h3>
                <div className='grid md:grid-cols-3 gap-8'>
                  {galleryItems
                    .filter((item) => item.featured)
                    .map((item, index) => (
                      <motion.div
                        key={item.id}
                        className='group cursor-pointer'
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={isGalleryInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        onClick={() => openModal(item)}
                        whileHover={{ y: -10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className='relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl hover:border-[#AE3537]/50 transition-all duration-500'>
                          {/* Image */}
                          <div className='relative h-64 overflow-hidden'>
                            <Image
                              src={item.thumbnail}
                              alt={item.title}
                              fill
                              className='object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

                            {/* Featured Badge */}
                            <motion.div
                              className='absolute top-4 left-4 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-3 py-2 rounded-full text-xs font-bold flex items-center shadow-lg'
                              whileHover={{ scale: 1.1 }}
                            >
                              <Star className='w-3 h-3 mr-1 fill-current' />
                              Featured
                            </motion.div>

                            {/* Heart Icon */}
                            <motion.button
                              className='absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-[#AE3537] transition-colors'
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Heart className='w-4 h-4' />
                            </motion.button>

                            {/* Play/Camera Overlay */}
                            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                              <motion.div
                                className='p-4 bg-[#AE3537]/90 rounded-full backdrop-blur-sm'
                                whileHover={{ scale: 1.1 }}
                              >
                                {item.type === 'video' ? (
                                  <Play className='w-8 h-8 text-white ml-1' />
                                ) : (
                                  <Eye className='w-8 h-8 text-white' />
                                )}
                              </motion.div>
                            </div>
                          </div>

                          <div className='p-6'>
                            <h4 className='text-xl font-bold text-white mb-2 group-hover:text-[#AE3537] transition-colors'>
                              {item.title}
                            </h4>
                            <p className='text-gray-400 text-sm mb-4 line-clamp-2'>{item.description}</p>
                            <div className='flex items-center justify-between'>
                              <span className='px-3 py-1 bg-[#AE3537]/20 text-[#AE3537] rounded-full text-xs font-semibold capitalize'>
                                {item.category}
                              </span>
                              <motion.div
                                className='text-gray-400 text-xs flex items-center gap-1'
                                whileHover={{ x: 5 }}
                              >
                                Click to view
                                <ChevronRight className='w-3 h-3' />
                              </motion.div>
                            </div>
                          </div>

                          {/* Glow Effect */}
                          <motion.div
                            className='absolute -inset-1 bg-gradient-to-r from-[#AE3537]/30 to-[#FF6B6D]/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10'
                            initial={false}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Gallery Grid */}
          <motion.div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' layout>
            <AnimatePresence mode='wait'>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={`${selectedCategory}-${item.id}`}
                  className='group cursor-pointer'
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openModal(item)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className='relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl hover:border-[#AE3537]/50 transition-all duration-300 aspect-square'>
                    {/* Image */}
                    <div className='relative w-full h-full overflow-hidden'>
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />

                      {/* Category Badge */}
                      <div className='absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize'>
                        {item.category}
                      </div>

                      {/* Type Icon */}
                      <div className='absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full'>
                        {item.type === 'video' ? (
                          <Play className='w-4 h-4 text-white' />
                        ) : (
                          <Camera className='w-4 h-4 text-white' />
                        )}
                      </div>

                      {/* Content */}
                      <div className='absolute bottom-4 left-4 right-4'>
                        <h4 className='text-white font-bold text-sm mb-1 line-clamp-1'>{item.title}</h4>
                        <p className='text-gray-300 text-xs line-clamp-2'>{item.description}</p>
                      </div>

                      {/* Hover Overlay */}
                      <div className='absolute inset-0 bg-[#AE3537]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                        <motion.div
                          className='p-3 bg-white/20 backdrop-blur-sm rounded-full'
                          whileHover={{ scale: 1.1 }}
                        >
                          <Eye className='w-6 h-6 text-white' />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div
            className='text-center mt-16'
            initial={{ opacity: 0, y: 20 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className='group bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#AE3537]/40 transition-all duration-300 relative overflow-hidden'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoading(!isLoading)}
            >
              <div className='flex items-center gap-3 relative z-10'>
                <span>{isLoading ? 'Loading...' : 'Load More Content'}</span>
                <motion.div
                  animate={{ x: isLoading ? 0 : [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: isLoading ? 0 : Infinity, ease: 'easeInOut' }}
                >
                  <ChevronRight className='w-5 h-5' />
                </motion.div>
              </div>
              <motion.div
                className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                initial={false}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            className='fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className='relative max-w-6xl w-full h-full flex items-center justify-center'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeModal}
                className='absolute top-4 right-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors z-60 backdrop-blur-sm'
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className='w-6 h-6' />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                onClick={() => navigateModal('prev')}
                className='absolute left-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors z-60 backdrop-blur-sm'
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className='w-6 h-6' />
              </motion.button>
              <motion.button
                onClick={() => navigateModal('next')}
                className='absolute right-4 bg-black/50 text-white rounded-full p-3 hover:bg-black/70 transition-colors z-60 backdrop-blur-sm'
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className='w-6 h-6' />
              </motion.button>

              {/* Content */}
              <motion.div
                className='bg-gradient-to-br from-gray-900/95 to-black/95 border border-gray-700/50 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col backdrop-blur-xl shadow-2xl'
                layoutId={`gallery-item-${selectedItem.id}`}
              >
                {/* Media Content */}
                <div className='relative overflow-hidden'>
                  <div className='relative h-[60vh] min-h-[400px]'>
                    <Image src={selectedItem.src} alt={selectedItem.title} fill className='object-cover' priority />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

                    {/* Featured Badge */}
                    {selectedItem.featured && (
                      <motion.div
                        className='absolute top-6 left-6 bg-gradient-to-r from-[#AE3537] to-[#FF6B6D] text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                      >
                        <Star className='w-4 h-4 mr-2 fill-current' />
                        Featured
                      </motion.div>
                    )}

                    {/* Type Badge */}
                    <div className='absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm rounded-full'>
                      {selectedItem.type === 'video' ? (
                        <Play className='w-5 h-5 text-white' />
                      ) : (
                        <Camera className='w-5 h-5 text-white' />
                      )}
                    </div>

                    {/* Play Button Overlay for Videos */}
                    {selectedItem.type === 'video' && (
                      <motion.div
                        className='absolute inset-0 flex items-center justify-center'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
                      >
                        <motion.button
                          className='p-6 bg-[#AE3537]/90 rounded-full backdrop-blur-sm hover:bg-[#AE3537] transition-colors'
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className='w-12 h-12 text-white ml-1' />
                        </motion.button>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <motion.div
                  className='p-8 flex-1'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className='flex items-start justify-between mb-6'>
                    <div>
                      <h3 className='text-3xl font-black text-white mb-2'>{selectedItem.title}</h3>
                      <span className='px-4 py-2 bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 text-[#AE3537] rounded-full text-sm font-bold capitalize border border-[#AE3537]/30'>
                        {selectedItem.category}
                      </span>
                    </div>
                    <motion.button
                      className='p-3 bg-gradient-to-r from-[#AE3537]/20 to-[#FF6B6D]/20 rounded-full text-[#AE3537] hover:from-[#AE3537] hover:to-[#FF6B6D] hover:text-white transition-all duration-300'
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart className='w-5 h-5' />
                    </motion.button>
                  </div>

                  <p className='text-gray-300 leading-relaxed text-lg mb-6'>{selectedItem.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
