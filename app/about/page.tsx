'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, Users, MapPin, Crown, Shield, Heart, Star } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Crown,
      title: 'Luxury Redefined',
      description: 'Experience unparalleled luxury with world-class amenities designed for the discerning wellness enthusiast.',
    },
    {
      icon: Award,
      title: 'Excellence Standard',
      description: 'Setting new benchmarks in Azerbaijan\'s wellness industry with premium services and international standards.',
    },
    {
      icon: Users,
      title: 'Cultural Sensitivity',
      description: 'Respecting local values while delivering global wellness experiences through thoughtful design and services.',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategically located in Baku\'s premium district, offering easy access and exclusive parking facilities.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Wellness First',
      description: 'Your health and wellness journey is our primary focus, with every service designed around your needs.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Maintaining the highest standards of safety, hygiene, and professional integrity in all our services.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Pursuing perfection in every detail, from equipment to service delivery and member experience.',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

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
              ABOUT <span className='text-[#AE3537]'>CROWN</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
              Azerbaijan's premier luxury wellness destination, redefining fitness and spa experiences with uncompromising excellence and cultural sensitivity.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a] relative overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div
            className='w-full h-full'
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 50px,
                rgba(174, 53, 55, 0.2) 50px,
                rgba(174, 53, 55, 0.2) 51px
              )`,
            }}
          ></div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Main Content */}
          <div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
            {/* Left Content */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Redefining <span className='text-[#AE3537]'>Wellness</span>
              </h2>
              <p className='text-gray-300 text-lg mb-6 leading-relaxed'>
                Crown Wellness Club stands as Azerbaijan's first interactive luxury fitness destination, pioneering a new era of premium wellness experiences. Our state-of-the-art facility combines international standards with deep respect for local culture and values.
              </p>
              <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                Every aspect of our club is meticulously designed to provide an unparalleled wellness journey, from our cutting-edge equipment to our world-class spa services, all delivered with the highest levels of professionalism and cultural sensitivity.
              </p>

              {/* Cultural Sensitivity Highlight */}
              <div className='bg-[#AE3537]/20 border border-[#AE3537]/40 rounded-2xl p-6 mb-8 backdrop-blur-sm'>
                <h4 className='text-[#AE3537] font-semibold mb-3 flex items-center text-lg'>
                  <Users className='w-5 h-5 mr-2' />
                  Cultural Excellence
                </h4>
                <p className='text-gray-300'>
                  We honor Azerbaijan's rich cultural heritage while delivering world-class wellness experiences, ensuring every member feels respected and valued in our premium environment.
                </p>
              </div>
            </div>

            {/* Right Content - Visual Element */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className='relative'>
                <div className='aspect-square rounded-3xl overflow-hidden relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'>
                  <div className='absolute inset-0 bg-gradient-to-br from-[#AE3537]/20 to-transparent'></div>
                  <div className='absolute bottom-6 left-6 right-6'>
                    <div className='bg-black/70 backdrop-blur-sm rounded-2xl p-6'>
                      <p className='text-white text-lg font-semibold mb-2'>Crown Wellness Club</p>
                      <p className='text-gray-300 text-sm'>Luxury Wellness Redefined</p>
                    </div>
                  </div>

                  {/* Placeholder for future image */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <Crown className='w-24 h-24 text-[#AE3537]/30' />
                  </div>
                </div>

                {/* Glowing border effect */}
                <div className='absolute -inset-0.5 opacity-30 bg-gradient-to-br from-[#AE3537] to-[#AE3537] rounded-3xl blur-xl -z-10'></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className='bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg backdrop-blur-sm h-full'>
                  <div className='flex justify-center mb-6'>
                    <div className='p-4 bg-[#AE3537]/20 rounded-2xl group-hover:bg-[#AE3537]/30 transition-colors duration-300'>
                      <feature.icon className='w-8 h-8 text-[#AE3537]' />
                    </div>
                  </div>
                  <h4 className='text-xl font-semibold text-white mb-4'>{feature.title}</h4>
                  <p className='text-gray-400 leading-relaxed'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Values Section */}
          <div className='text-center mb-16'>
            <h3 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Our <span className='text-[#AE3537]'>Values</span>
            </h3>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              The principles that guide every decision and service at Crown Wellness Club
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${1200 + index * 150}ms` }}
              >
                <div className='relative bg-gray-800/50 border border-gray-700 rounded-3xl p-8 hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg backdrop-blur-sm h-full overflow-hidden'>
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                  <div className='relative z-10'>
                    <div className='flex justify-center mb-6'>
                      <div className={`p-4 bg-gradient-to-br ${value.color} rounded-2xl`}>
                        <value.icon className='w-8 h-8 text-white' />
                      </div>
                    </div>
                    <h4 className='text-2xl font-bold text-white mb-4'>{value.title}</h4>
                    <p className='text-gray-400 leading-relaxed'>{value.description}</p>
                  </div>

                  {/* Border Glow */}
                  <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-br ${value.color} rounded-3xl blur-2xl -z-10`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
