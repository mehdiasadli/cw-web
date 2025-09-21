'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import Logo from './logo';
import LanguageSwitcher from './language-switcher';

interface NavLink {
  name: string;
  href: string;
  type: 'page' | 'section';
}

const getNavLinks = (t: (key: string) => string): NavLink[] => [
  { name: t('navigation.home'), href: '/', type: 'page' },
  { name: t('navigation.about'), href: '/about', type: 'page' },
  { name: t('navigation.trainers'), href: '/trainers', type: 'page' },
  { name: t('navigation.gallery'), href: '/gallery', type: 'page' },
  { name: t('navigation.premiumExperiences'), href: '/#experiences', type: 'section' },
  { name: t('navigation.membership'), href: '/#membership', type: 'section' },
  { name: t('navigation.contact'), href: '/#contact', type: 'section' },
];

// Animated Hamburger Menu Component
const HamburgerMenu = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button onClick={onClick} className='relative w-6 h-6 focus:outline-none group' aria-label='Toggle menu'>
      <div className='absolute inset-0 flex flex-col justify-center space-y-1'>
        <motion.span
          className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-crown-primary'
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 6 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-crown-primary'
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -10 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
        <motion.span
          className='block h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:bg-crown-primary'
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -6 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </button>
  );
};

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbarText, setShowNavbarText] = useState(false);
  const pathname = usePathname();

  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show backdrop blur after 20px
      setIsScrolled(scrollY > 20);

      // Show navbar text when hero text has moved close to navbar (around 70% of transition)
      const startTransition = windowHeight * 0.3;
      const endTransition = windowHeight * 0.8;
      const showTextThreshold = startTransition + (endTransition - startTransition) * 0.7;
      setShowNavbarText(scrollY > showTextThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, type: string) => {
    if (type === 'section') {
      if (pathname === '/') {
        // If on home page, scroll to section
        const element = document.querySelector(href.replace('/', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on another page, navigate to home page with hash
        window.location.href = href;
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md bg-black/20 border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-3 items-center h-16 lg:h-20'>
            {/* Left: Hamburger Menu */}
            <div className='flex items-center justify-start'>
              <HamburgerMenu isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>

            {/* Center: Logo */}
            <div className='flex items-center justify-center'>
              <Link href='/' className='flex flex-col items-center space-y-1'>
                <Logo color='white' size={40} />
                <motion.div
                  className='text-center overflow-hidden'
                  initial={{ height: 0, opacity: 0, scale: 0.8 }}
                  animate={{
                    height: showNavbarText ? 'auto' : 0,
                    opacity: showNavbarText ? 1 : 0,
                    scale: showNavbarText ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    opacity: { duration: 0.2, delay: showNavbarText ? 0.1 : 0 },
                  }}
                >
                  <div className='text-white font-bold text-sm leading-tight whitespace-nowrap'>CROWN WELLNESS</div>
                </motion.div>
              </Link>
            </div>

            {/* Right: Language Selector */}
            <div className='flex items-center justify-end'>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Side Panel Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/30'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              className='fixed top-0 left-0 h-full w-96 z-50 bg-black/20 backdrop-blur-xl border-r border-white/10'
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className='flex flex-col h-full p-8'>
                {/* Navigation Links */}
                <motion.nav
                  className='flex-1'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className='space-y-6 mt-16'>
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        className='relative group'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      >
                        {link.type === 'page' ? (
                          <Link
                            href={link.href}
                            className='block text-2xl font-light text-white hover:text-crown-primary transition-colors duration-300 py-2 relative overflow-hidden group'
                            onClick={() => handleNavClick(link.href, link.type)}
                          >
                            <span className='relative z-10'>{link.name}</span>
                            {/* Sliding underline */}
                            <div className='absolute bottom-0 left-0 h-0.5 bg-crown-primary w-0 group-hover:w-full transition-all duration-300 ease-out' />
                          </Link>
                        ) : (
                          <button
                            onClick={() => handleNavClick(link.href, link.type)}
                            className='block text-2xl font-light text-white hover:text-crown-primary transition-colors duration-300 py-2 relative overflow-hidden w-full text-left group'
                          >
                            <span className='relative z-10'>{link.name}</span>
                            {/* Sliding underline */}
                            <div className='absolute bottom-0 left-0 h-0.5 bg-crown-primary w-0 group-hover:w-full transition-all duration-300 ease-out' />
                          </button>
                        )}
                      </motion.div>
                    ))}

                    {/* Separator */}
                    <motion.div
                      className='border-t border-white/20 my-8'
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    />

                    {/* Footer Links */}
                    <motion.div
                      className='space-y-4'
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <Link
                        href='/privacy-policy'
                        className='block text-sm font-light text-white/70 hover:text-white transition-colors duration-300 relative overflow-hidden group'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className='relative z-10'>{t('navigation.privacyPolicy')}</span>
                        <div className='absolute bottom-0 left-0 h-px bg-white/50 w-0 group-hover:w-full transition-all duration-300 ease-out' />
                      </Link>
                      <Link
                        href='/terms-of-service'
                        className='block text-sm font-light text-white/70 hover:text-white transition-colors duration-300 relative overflow-hidden group'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className='relative z-10'>{t('navigation.termsOfService')}</span>
                        <div className='absolute bottom-0 left-0 h-px bg-white/50 w-0 group-hover:w-full transition-all duration-300 ease-out' />
                      </Link>
                      <Link
                        href='/support'
                        className='block text-sm font-light text-white/70 hover:text-white transition-colors duration-300 relative overflow-hidden group'
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className='relative z-10'>{t('navigation.support')}</span>
                        <div className='absolute bottom-0 left-0 h-px bg-white/50 w-0 group-hover:w-full transition-all duration-300 ease-out' />
                      </Link>
                    </motion.div>
                  </div>
                </motion.nav>

                {/* Social Icons */}
                <motion.div
                  className='flex justify-end space-x-4 mt-8'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/60 hover:text-white transition-colors duration-300 hover:scale-110'
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/60 hover:text-white transition-colors duration-300 hover:scale-110'
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/60 hover:text-white transition-colors duration-300 hover:scale-110'
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href='https://x.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white/60 hover:text-white transition-colors duration-300 hover:scale-110'
                  >
                    <Twitter size={18} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
