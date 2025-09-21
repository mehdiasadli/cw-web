import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import I18nProvider from '@/components/i18n-provider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Crown Wellness Fitness Club',
    template: '%s | Crown Wellness Fitness Club',
  },
  description:
    'Azerbaijan’s First Interactive Fitness & Wellness Club Where Wellness Becomes a Way of Life, Together In Community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={`${poppins.variable} font-poppins antialiased dark`}>
        <I18nProvider>
          <Header />
          <main>{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
