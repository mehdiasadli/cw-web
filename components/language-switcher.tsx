'use client';

import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'az', name: 'AZ' },
  { code: 'en', name: 'EN' },
  { code: 'ru', name: 'RU' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className='flex items-center space-x-4'>
      {languages.map((language, index) => (
        <div key={language.code} className='flex items-center'>
          <button
            onClick={() => handleLanguageChange(language.code)}
            className={`text-sm font-light tracking-wider transition-all duration-300 hover:scale-110 ${
              i18n.language === language.code ? 'text-white font-medium' : 'text-white/60 hover:text-white/80'
            }`}
          >
            {language.name}
          </button>
          {index < languages.length - 1 && <span className='ml-4 text-white/30 text-xs'>|</span>}
        </div>
      ))}
    </div>
  );
}
