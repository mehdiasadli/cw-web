'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ExternalLink, Menu, X } from 'lucide-react';
import Logo from './logo';

interface NavLink {
  name: string;
  href: string;
  type: 'page' | 'section';
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '/', type: 'page' },
  { name: 'About', href: '/about', type: 'page' },
  { name: 'Trainers', href: '/trainers', type: 'page' },
  { name: 'Gallery', href: '/gallery', type: 'page' },
  { name: 'Premium Experiences', href: '/#experiences', type: 'section' },
  { name: 'Membership', href: '/#membership', type: 'section' },
  { name: 'Contact', href: '/#contact', type: 'section' },
];

const languages = [
  { code: 'en', name: 'English', flag: 'EN' },
  { code: 'az', name: 'Azerbaijani', flag: 'AZ' },
  { code: 'ru', name: 'Russian', flag: 'RU' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

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
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-black/20 border-b border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo color="white" size={40} />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">
                CROWN
              </span>
              <span className="text-crown-primary font-bold text-sm leading-tight">
                WELLNESS CLUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.type === 'page' ? (
                  <Link
                    href={link.href}
                    className="flex items-center space-x-1 text-white hover:text-crown-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => handleNavClick(link.href, link.type)}
                  >
                    <span>{link.name}</span>
                    {link.type === 'page' && link.href !== '/' && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, link.type)}
                    className="flex items-center space-x-1 text-white hover:text-crown-primary transition-colors duration-300 font-medium py-2"
                  >
                    <span>{link.name}</span>
                  </button>
                )}

                {/* Animated underline */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-crown-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
              </div>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-crown-primary transition-all duration-300 rounded-lg hover:bg-white/5"
              >
                <span className="text-xs font-bold bg-crown-primary text-white px-2 py-1 rounded">
                  {languages.find((lang) => lang.code === selectedLanguage)?.flag}
                </span>
                <span className="hidden sm:block font-medium w-20 text-left">
                  {languages.find((lang) => lang.code === selectedLanguage)?.name}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              <div className={`absolute top-full right-0 mt-3 min-w-[180px] py-2 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl transition-all duration-300 transform ${isLanguageDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}>
                <div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Select Language
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2"></div>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      setSelectedLanguage(language.code);
                      setIsLanguageDropdownOpen(false);
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 text-white hover:text-crown-primary hover:bg-white/10 transition-all duration-200 group/item ${
                      selectedLanguage === language.code ? 'bg-crown-primary/20 text-crown-primary' : ''
                    }`}
                  >
                    <span className="text-xs font-bold bg-crown-primary text-white px-2 py-1 rounded">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                    {selectedLanguage === language.code && (
                      <svg className="w-4 h-4 ml-auto text-crown-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-crown-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 bg-black/90 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.type === 'page' ? (
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-white hover:text-crown-primary transition-colors duration-200"
                    onClick={() => handleNavClick(link.href, link.type)}
                  >
                    <span>{link.name}</span>
                    {link.type === 'page' && link.href !== '/' && (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, link.type)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-crown-primary transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>
      </motion.div>
    </motion.header>
  );
}