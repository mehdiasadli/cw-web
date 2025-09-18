'use client';

import { useEffect, useRef, useState } from 'react';
import { Camera, Play, X, ChevronLeft, ChevronRight, MapPin, Clock, Users, Star, Dumbbell, Waves, Crown, Sparkles } from 'lucide-react';

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
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  count: number;
}

export default function GalleryPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const categories: GalleryCategory[] = [
    { id: 'all', name: 'All Gallery', icon: Camera, description: 'Complete visual experience', count: 24 },
    { id: 'fitness', name: 'Fitness Zone', icon: Dumbbell, description: 'State-of-the-art equipment', count: 8 },
    { id: 'spa', name: 'Spa & Wellness', icon: Waves, description: 'Luxury relaxation spaces', count: 6 },
    { id: 'facilities', name: 'Facilities', icon: Crown, description: 'Premium amenities', count: 5 },
    { id: 'events', name: 'Events & Classes', icon: Users, description: 'Community activities', count: 5 },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: '/gallery/fitness-main.jpg',
      thumbnail: '/gallery/fitness-main-thumb.jpg',
      title: 'Main Fitness Floor',
      category: 'fitness',
      description: 'Our expansive main fitness floor featuring premium equipment from international brands',
      featured: true,
    },
    {
      id: 2,
      type: 'image',
      src: '/gallery/spa-entrance.jpg',
      thumbnail: '/gallery/spa-entrance-thumb.jpg',
      title: 'Spa Entrance',
      category: 'spa',
      description: 'Elegant spa entrance designed for tranquility and luxury',
      featured: true,
    },
    {
      id: 3,
      type: 'video',
      src: '/gallery/facility-tour.mp4',
      thumbnail: '/gallery/facility-tour-thumb.jpg',
      title: 'Facility Virtual Tour',
      category: 'facilities',
      description: 'Complete walkthrough of Crown Wellness Club premium facilities',
      featured: true,
    },
    {
      id: 4,
      type: 'image',
      src: '/gallery/cardio-zone.jpg',
      thumbnail: '/gallery/cardio-zone-thumb.jpg',
      title: 'Cardio Zone',
      category: 'fitness',
      description: 'Modern cardio equipment with panoramic city views',
    },
    {
      id: 5,
      type: 'image',
      src: '/gallery/strength-area.jpg',
      thumbnail: '/gallery/strength-area-thumb.jpg',
      title: 'Strength Training Area',
      category: 'fitness',
      description: 'Professional-grade strength training equipment and free weights',
    },
    {
      id: 6,
      type: 'image',
      src: '/gallery/pool-area.jpg',
      thumbnail: '/gallery/pool-area-thumb.jpg',
      title: 'Pool & Aquatic Center',
      category: 'spa',
      description: 'Temperature-controlled pools for relaxation and aquatic fitness',
    },
    {
      id: 7,
      type: 'image',
      src: '/gallery/womens-zone.jpg',
      thumbnail: '/gallery/womens-zone-thumb.jpg',
      title: "Women's Exclusive Zone",
      category: 'facilities',
      description: 'Private 800m² women-only fitness and wellness area',
    },
    {
      id: 8,
      type: 'image',
      src: '/gallery/group-class.jpg',
      thumbnail: '/gallery/group-class-thumb.jpg',
      title: 'Group Fitness Class',
      category: 'events',
      description: 'Dynamic group fitness sessions led by expert instructors',
    },
    // Add more gallery items...
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

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

    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <div className='min-h-screen bg-[#0a0a0a]'>
      {/* Hero Section */}
      <section className='relative py-32 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] overflow-hidden'>
        {/* Background Effects */}
        <div className='absolute inset-0'>
          <div className='absolute top-1/4 left-1/6 w-96 h-96 bg-[#AE3537]/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-1/4 right-1/6 w-96 h-96 bg-[#AE3537]/5 rounded-full blur-3xl animate-pulse'></div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-8'>
              <div className='w-20 h-0.5 bg-gradient-to-r from-transparent to-[#AE3537]'></div>
              <div className='w-12 h-12 bg-[#AE3537] rounded-full flex items-center justify-center mx-6'>
                <span className='text-white font-bold text-sm'>C</span>
              </div>
              <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]'></div>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              VISUAL <span className='text-[#AE3537]'>GALLERY</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
              Explore the luxury and elegance of Crown Wellness Club through our comprehensive visual gallery. Witness the beauty of Azerbaijan's premier wellness destination.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>5000m²</div>
                <div className='text-gray-300'>Premium Space</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>12</div>
                <div className='text-gray-300'>Luxury Zones</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>300+</div>
                <div className='text-gray-300'>Equipment Pieces</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>24/7</div>
                <div className='text-gray-300'>Accessibility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className='py-20 px-6 bg-[#111111]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Explore Our <span className='text-[#AE3537]'>Spaces</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Discover different areas of our luxury wellness facility through curated gallery collections
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group text-left bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                  selectedCategory === category.id ? 'border-[#AE3537] bg-[#AE3537]/10' : 'hover:border-[#AE3537]/30'
                }`}
              >
                <div className='flex items-center mb-4'>
                  <div className={`p-3 rounded-xl mr-4 transition-colors duration-300 ${
                    selectedCategory === category.id ? 'bg-[#AE3537]/30' : 'bg-[#AE3537]/20 group-hover:bg-[#AE3537]/30'
                  }`}>
                    <category.icon className='w-6 h-6 text-[#AE3537]' />
                  </div>
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>{category.name}</h3>
                <p className='text-gray-400 text-sm mb-3'>{category.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-[#AE3537] font-medium text-sm'>{category.count} items</span>
                  {selectedCategory === category.id && (
                    <div className='w-2 h-2 bg-[#AE3537] rounded-full'></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {categories.find(cat => cat.id === selectedCategory)?.name || 'Gallery'} <span className='text-[#AE3537]'>Collection</span>
            </h2>
          </div>

          {/* Featured Items */}
          {selectedCategory === 'all' && (
            <div className='mb-16'>
              <h3 className='text-2xl font-bold text-white mb-8'>Featured Highlights</h3>
              <div className='grid md:grid-cols-3 gap-8'>
                {galleryItems.filter(item => item.featured).map((item, index) => (
                  <div
                    key={item.id}
                    className={`group transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className='relative bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer'
                         onClick={() => openModal(item)}>
                      {/* Image/Video Placeholder */}
                      <div className='relative h-64 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center'>
                        <div className='absolute inset-0 bg-black/20'></div>
                        <div className='relative z-10 text-center'>
                          {item.type === 'video' ? (
                            <div className='w-16 h-16 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm'>
                              <Play className='w-8 h-8 text-[#AE3537] ml-1' />
                            </div>
                          ) : (
                            <div className='w-16 h-16 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm'>
                              <Camera className='w-8 h-8 text-[#AE3537]' />
                            </div>
                          )}
                          <div className='text-white font-semibold'>{item.title}</div>
                        </div>

                        {/* Featured Badge */}
                        <div className='absolute top-4 left-4 bg-[#AE3537] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center'>
                          <Star className='w-3 h-3 mr-1 fill-current' />
                          Featured
                        </div>

                        {/* Type Badge */}
                        <div className='absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1'>
                          {item.type === 'video' ? (
                            <Play className='w-4 h-4 text-white' />
                          ) : (
                            <Camera className='w-4 h-4 text-white' />
                          )}
                        </div>
                      </div>

                      <div className='p-6'>
                        <h4 className='text-xl font-bold text-white mb-2'>{item.title}</h4>
                        <p className='text-gray-400 text-sm mb-4'>{item.description}</p>
                        <div className='flex items-center justify-between'>
                          <span className='text-[#AE3537] text-sm font-medium capitalize'>{item.category}</span>
                          <div className='text-gray-400 text-xs'>Click to view</div>
                        </div>
                      </div>

                      {/* Border Glow */}
                      <div className='absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br from-[#AE3537] to-[#AE3537] rounded-3xl blur-xl -z-10'></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main Gallery Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className='relative bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm cursor-pointer aspect-square'
                     onClick={() => openModal(item)}>
                  {/* Image/Video Placeholder */}
                  <div className='relative h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center'>
                    <div className='absolute inset-0 bg-black/20'></div>
                    <div className='relative z-10 text-center'>
                      {item.type === 'video' ? (
                        <div className='w-12 h-12 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm'>
                          <Play className='w-6 h-6 text-[#AE3537] ml-1' />
                        </div>
                      ) : (
                        <div className='w-12 h-12 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm'>
                          <Camera className='w-6 h-6 text-[#AE3537]' />
                        </div>
                      )}
                      <div className='text-white font-medium text-sm'>{item.title}</div>
                    </div>

                    {/* Category Badge */}
                    <div className='absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1'>
                      <span className='text-white text-xs capitalize'>{item.category}</span>
                    </div>

                    {/* Type Icon */}
                    <div className='absolute top-4 right-4 opacity-50'>
                      {item.type === 'video' ? (
                        <Play className='w-5 h-5 text-white' />
                      ) : (
                        <Camera className='w-5 h-5 text-white' />
                      )}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-[#AE3537]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                    <div className='text-white font-semibold'>View {item.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className='text-center mt-16'>
            <button className='bg-[#AE3537] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#8B2A2D] transition-all duration-300 hover:scale-105'>
              Load More Content
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'>
          <div className='relative max-w-6xl w-full h-full flex items-center justify-center'>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-60'
            >
              <X className='w-6 h-6' />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateModal('prev')}
              className='absolute left-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-60'
            >
              <ChevronLeft className='w-6 h-6' />
            </button>
            <button
              onClick={() => navigateModal('next')}
              className='absolute right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-60'
            >
              <ChevronRight className='w-6 h-6' />
            </button>

            {/* Content */}
            <div className='bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col'>
              {/* Media Content */}
              <div className='relative bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center min-h-[400px]'>
                <div className='text-center text-white'>
                  {selectedItem.type === 'video' ? (
                    <div className='w-24 h-24 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm'>
                      <Play className='w-12 h-12 text-[#AE3537] ml-2' />
                    </div>
                  ) : (
                    <div className='w-24 h-24 bg-[#AE3537]/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm'>
                      <Camera className='w-12 h-12 text-[#AE3537]' />
                    </div>
                  )}
                  <h3 className='text-2xl font-bold mb-2'>{selectedItem.title}</h3>
                  <p className='text-gray-300'>Preview placeholder - Full content coming soon</p>
                </div>
              </div>

              {/* Details */}
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-2xl font-bold text-white'>{selectedItem.title}</h3>
                  <span className='px-3 py-1 bg-[#AE3537]/20 text-[#AE3537] rounded-full text-sm font-medium capitalize'>
                    {selectedItem.category}
                  </span>
                </div>
                <p className='text-gray-300 leading-relaxed'>{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
