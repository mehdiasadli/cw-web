'use client';

import { useState } from 'react';
import HeroSection from '../components/hero-section';
import PremiumExperiences from '../components/premium-experiences';
import ImpressiveScale from '../components/impressive-scale';
import InnovationTechnology from '../components/innovation-technology';
import CommunityLifestyle from '../components/community-lifestyle';
import MembershipExcellence from '../components/membership-excellence';
import ContactSection from '../components/contact-section';
import SplashScreen from '../components/splash-screen';

export default function Home() {
  const [shouldUnmuteVideo, setShouldUnmuteVideo] = useState(false);

  const handleSplashEnter = () => {
    setShouldUnmuteVideo(true);
  };

  return (
    <>
      <SplashScreen onEnter={handleSplashEnter} />
      <HeroSection initialMuted={!shouldUnmuteVideo} />
      <PremiumExperiences />
      <ImpressiveScale />
      <InnovationTechnology />
      <CommunityLifestyle />
      <MembershipExcellence />
      <ContactSection />
    </>
  );
}
