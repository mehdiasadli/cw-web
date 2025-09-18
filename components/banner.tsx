import Logo from './logo';

interface BannerProps {
  showLogo?: boolean;
  logoComponent?: React.ReactNode;
  title: string;
  titleStyle?: 'white' | 'mixed';
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function Banner({
  showLogo = true,
  logoComponent,
  title,
  titleStyle = 'white',
  subtitle,
  description,
  className = '',
}: BannerProps) {
  return (
    <div
      className={`mt-20 transition-all duration-1000 delay-1200 opacity-100 translate-y-0 ${className}`}
    >
      <div className='relative bg-gradient-to-r from-[#AE3537]/10 via-[#AE3537]/15 to-[#AE3537]/10 border border-[#AE3537]/30 rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl overflow-hidden'>
        {/* Premium Background Effect */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#AE3537]/5 to-transparent'></div>

        <div className='relative z-10 text-center'>
          {showLogo && (
            <div className='flex items-center justify-center mb-8'>
              {logoComponent || <Logo className='object-contain drop-shadow-lg filter brightness-110' color='white' size={100} />}
            </div>
          )}

          <h3 className='text-5xl lg:text-6xl font-bold mb-6'>
            {titleStyle === 'mixed' ? (
              <>
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className='text-[#AE3537]'>{title.split(' ').slice(-1)[0]}</span>
              </>
            ) : (
              <span className='text-white'>{title}</span>
            )}
          </h3>

          {subtitle && (
            <p className='text-3xl text-white mb-6 font-light'>
              {subtitle}
            </p>
          )}

          {description && (
            <p className='text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto'>
              {description}
            </p>
          )}
        </div>

        {/* Decorative Corner Elements */}
        <div className='absolute top-6 left-6 w-2 h-16 bg-gradient-to-b from-[#AE3537] to-transparent opacity-30'></div>
        <div className='absolute top-6 left-6 w-16 h-2 bg-gradient-to-r from-[#AE3537] to-transparent opacity-30'></div>
        <div className='absolute bottom-6 right-6 w-2 h-16 bg-gradient-to-t from-[#AE3537] to-transparent opacity-30'></div>
        <div className='absolute bottom-6 right-6 w-16 h-2 bg-gradient-to-l from-[#AE3537] to-transparent opacity-30'></div>
      </div>
    </div>
  );
}