'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Star, Users, Heart, Dumbbell, Zap, Shield, Crown, Clock } from 'lucide-react';
import Logo from '@/components/logo';

interface Trainer {
  id: number;
  name: string;
  title: string;
  specialization: string[];
  experience: string;
  languages: string[];
  image: string;
  bio: string;
  certifications: string[];
  achievements: string[];
  availability: string;
  color: string;
  rating: number;
}

export default function TrainersPage() {
  const { t } = useTranslation();
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

  const trainers: Trainer[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Head Personal Trainer',
      specialization: ['Strength Training', 'Functional Fitness', 'Nutrition Coaching'],
      experience: '8+ Years',
      languages: ['English', 'Azerbaijani', 'Turkish'],
      image: '/trainer-1.jpg',
      bio: 'Sarah brings international expertise to Crown Wellness Club with extensive experience in luxury fitness environments across Europe and the Middle East.',
      certifications: ['NASM-CPT', 'Precision Nutrition Level 1', 'TRX Certified'],
      achievements: ['Regional Fitness Champion 2021', 'Elite Trainer Award 2022'],
      availability: 'Mon-Fri: 6:00-20:00',
      color: 'from-purple-500 to-indigo-600',
      rating: 4.9,
    },
    {
      id: 2,
      name: 'Ahmed Aliyev',
      title: 'Wellness Specialist',
      specialization: ['Yoga', 'Mindfulness', 'Recovery Training'],
      experience: '6+ Years',
      languages: ['Azerbaijani', 'English', 'Russian'],
      image: '/trainer-2.jpg',
      bio: 'Ahmed specializes in holistic wellness approaches, combining traditional Eastern practices with modern fitness methodologies.',
      certifications: ['RYT-500 Yoga', 'Meditation Instructor', 'Recovery Specialist'],
      achievements: ['Wellness Excellence Award', 'Community Impact Recognition'],
      availability: 'Tue-Sat: 7:00-19:00',
      color: 'from-green-500 to-emerald-600',
      rating: 4.8,
    },
    {
      id: 3,
      name: 'Elena Petrov',
      title: 'Spa & Beauty Director',
      specialization: ['Spa Treatments', 'Beauty Therapy', 'Wellness Consulting'],
      experience: '10+ Years',
      languages: ['Russian', 'English', 'Azerbaijani'],
      image: '/trainer-3.jpg',
      bio: 'Elena leads our spa division with luxury hospitality experience from premier wellness resorts worldwide.',
      certifications: ['CIDESCO Diploma', 'Aromatherapy Specialist', 'Advanced Skincare'],
      achievements: ['Spa Excellence Award', 'International Beauty Recognition'],
      availability: 'Mon-Sat: 9:00-18:00',
      color: 'from-pink-500 to-rose-600',
      rating: 5.0,
    },
    {
      id: 4,
      name: 'Marcus Thompson',
      title: 'Performance Coach',
      specialization: ['Athletic Performance', 'Sports Conditioning', 'Injury Prevention'],
      experience: '12+ Years',
      languages: ['English', 'German', 'Azerbaijani'],
      image: '/trainer-4.jpg',
      bio: 'Former professional athlete turned elite performance coach, specializing in high-performance training protocols.',
      certifications: ['CSCS', 'FMS Level 2', 'Olympic Lifting Certified'],
      achievements: ['Elite Performance Coach 2023', 'Athletic Excellence Award'],
      availability: 'Mon-Fri: 5:00-21:00',
      color: 'from-orange-500 to-red-600',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Aysel Mammadova',
      title: "Women's Wellness Specialist",
      specialization: ["Women's Fitness", 'Prenatal Training', 'Cultural Wellness'],
      experience: '7+ Years',
      languages: ['Azerbaijani', 'Turkish', 'English'],
      image: '/trainer-5.jpg',
      bio: "Aysel leads our women's sanctuary programs, providing culturally sensitive fitness and wellness solutions.",
      certifications: ["Women's Fitness Specialist", 'Prenatal Exercise', 'Cultural Wellness'],
      achievements: ["Women's Wellness Pioneer", 'Cultural Excellence Award'],
      availability: "Women's Hours: 8:00-22:00",
      color: 'from-teal-500 to-cyan-600',
      rating: 4.9,
    },
    {
      id: 6,
      name: 'David Rodriguez',
      title: 'Nutrition Director',
      specialization: ['Sports Nutrition', 'Weight Management', 'Metabolic Health'],
      experience: '9+ Years',
      languages: ['English', 'Spanish', 'Azerbaijani'],
      image: '/trainer-6.jpg',
      bio: 'David oversees our comprehensive nutrition programs, combining scientific research with practical wellness solutions.',
      certifications: ['Registered Dietitian', 'Sports Nutrition Specialist', 'Metabolic Conditioning'],
      achievements: ['Nutrition Excellence Award', 'Research Publication Author'],
      availability: 'Mon-Fri: 8:00-17:00',
      color: 'from-yellow-500 to-amber-600',
      rating: 4.8,
    },
  ];

  const specialties = [
    {
      icon: Dumbbell,
      name: t('trainers.specialties.items.strengthTraining.name'),
      description: t('trainers.specialties.items.strengthTraining.description'),
    },
    {
      icon: Heart,
      name: t('trainers.specialties.items.wellnessCoaching.name'),
      description: t('trainers.specialties.items.wellnessCoaching.description'),
    },
    {
      icon: Zap,
      name: t('trainers.specialties.items.performanceTraining.name'),
      description: t('trainers.specialties.items.performanceTraining.description'),
    },
    {
      icon: Shield,
      name: t('trainers.specialties.items.injuryPrevention.name'),
      description: t('trainers.specialties.items.injuryPrevention.description'),
    },
    {
      icon: Users,
      name: t('trainers.specialties.items.groupClasses.name'),
      description: t('trainers.specialties.items.groupClasses.description'),
    },
    {
      icon: Logo,
      name: t('trainers.specialties.items.vipTraining.name'),
      description: t('trainers.specialties.items.vipTraining.description'),
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
                <span className='text-white p-3 flex items-center justify-center font-bold text-sm'>
                  <Logo size={32} className='text-white' />
                </span>
              </div>
              <div className='w-20 h-0.5 bg-gradient-to-l from-transparent to-[#AE3537]'></div>
            </div>

            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6'>
              {t('trainers.title')} <span className='text-[#AE3537]'>{t('trainers.titleHighlight')}</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
              {t('trainers.subtitle')}
            </p>

            {/* Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>50+</div>
                <div className='text-gray-300'>{t('trainers.stats.expertTrainers')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>15</div>
                <div className='text-gray-300'>{t('trainers.stats.specializations')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>8</div>
                <div className='text-gray-300'>{t('trainers.stats.languages')}</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-[#AE3537] mb-2'>24/7</div>
                <div className='text-gray-300'>{t('trainers.stats.availability')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className='py-20 px-6 bg-[#111111]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t('trainers.specialties.title')}{' '}
              <span className='text-[#AE3537]'>{t('trainers.specialties.titleHighlight')}</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{t('trainers.specialties.subtitle')}</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className='group bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm'
              >
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-[#AE3537]/20 rounded-xl group-hover:bg-[#AE3537]/30 transition-colors duration-300 mr-4 flex items-center justify-center'>
                    <specialty.icon size={24} color='#ae3537' />
                  </div>
                  <h3 className='text-xl font-semibold text-white'>{specialty.name}</h3>
                </div>
                <p className='text-gray-400'>{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section ref={sectionRef} className='py-20 px-6 bg-[#0a0a0a]'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t('trainers.team.title')} <span className='text-[#AE3537]'>{t('trainers.team.titleHighlight')}</span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>{t('trainers.team.subtitle')}</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className='relative bg-gray-800/50 border border-gray-700 rounded-3xl overflow-hidden hover:bg-gray-800/70 hover:border-[#AE3537]/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm'>
                  {/* Trainer Image Placeholder */}
                  <div className={`relative h-64 bg-gradient-to-br ${trainer.color} flex items-center justify-center`}>
                    <div className='absolute inset-0 bg-black/20'></div>
                    <div className='relative z-10 text-center'>
                      <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm'>
                        <Users className='w-10 h-10 text-white' />
                      </div>
                      <div className='text-white font-semibold'>{trainer.name}</div>
                    </div>

                    {/* Rating Badge */}
                    <div className='absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center'>
                      <Star className='w-4 h-4 text-yellow-400 fill-current mr-1' />
                      <span className='text-white text-sm font-medium'>{trainer.rating}</span>
                    </div>
                  </div>

                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-white mb-2'>{trainer.name}</h3>
                    <p className='text-[#AE3537] font-semibold mb-3'>{trainer.title}</p>

                    <div className='mb-4'>
                      <div className='flex items-center text-gray-400 text-sm mb-2'>
                        <Award className='w-4 h-4 mr-2' />
                        {trainer.experience} {t('trainers.trainerDetails.experience')}
                      </div>
                      <div className='flex items-center text-gray-400 text-sm mb-2'>
                        <Clock className='w-4 h-4 mr-2' />
                        {trainer.availability}
                      </div>
                    </div>

                    <p className='text-gray-300 text-sm mb-4 leading-relaxed'>{trainer.bio}</p>

                    {/* Specializations */}
                    <div className='mb-4'>
                      <div className='flex flex-wrap gap-2'>
                        {trainer.specialization.slice(0, 2).map((spec, idx) => (
                          <span
                            key={idx}
                            className='px-3 py-1 bg-[#AE3537]/20 text-[#AE3537] rounded-full text-xs font-medium'
                          >
                            {spec}
                          </span>
                        ))}
                        {trainer.specialization.length > 2 && (
                          <span className='px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs'>
                            +{trainer.specialization.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Languages */}
                    <div className='text-gray-400 text-sm mb-4'>
                      <strong>{t('trainers.trainerDetails.languages')}:</strong> {trainer.languages.join(', ')}
                    </div>

                    {/* Book Session Button */}
                    <button className='w-full bg-[#AE3537] text-white py-3 rounded-xl font-semibold hover:bg-[#8B2A2D] transition-all duration-300 hover:scale-105'>
                      {t('trainers.trainerDetails.bookSession')}
                    </button>
                  </div>

                  {/* Border Glow */}
                  <div
                    className={`absolute -inset-0.5 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-br ${trainer.color} rounded-3xl blur-xl -z-10`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 px-6 bg-[#111111]'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-12 backdrop-blur-sm'>
            <h2 className='text-4xl font-bold text-white mb-6'>
              {t('trainers.cta.title')} <span className='text-[#AE3537]'>{t('trainers.cta.titleHighlight')}</span>
            </h2>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed'>{t('trainers.cta.subtitle')}</p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-[#AE3537] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#8B2A2D] transition-all duration-300 hover:scale-105'>
                {t('trainers.cta.scheduleConsultation')}
              </button>
              <button className='bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300'>
                {t('trainers.cta.viewAllServices')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
