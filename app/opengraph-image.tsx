import { ImageResponse } from '@vercel/og';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(174, 53, 55, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(174, 53, 55, 0.05) 0%, transparent 50%)`,
          }}
        />

        {/* Main Content Container */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '60px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Crown Icon */}
          <div
            style={{
              display: 'flex',
              marginBottom: '40px',
            }}
          >
            <svg
              width='80'
              height='80'
              viewBox='0 0 100 100'
              fill='none'
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(174, 53, 55, 0.4))',
              }}
            >
              <path
                d='M50 85L15 70L20 40L35 50L50 25L65 50L80 40L85 70L50 85Z'
                fill='#AE3537'
                stroke='#FF6B6D'
                strokeWidth='2'
              />
              <circle cx='20' cy='40' r='6' fill='#FFD700' />
              <circle cx='50' cy='25' r='8' fill='#FFD700' />
              <circle cx='80' cy='40' r='6' fill='#FFD700' />
            </svg>
          </div>

          {/* Main Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '72px',
                fontWeight: 900,
                color: 'white',
                letterSpacing: '4px',
                textAlign: 'center',
                marginBottom: '10px',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)',
              }}
            >
              CROWN WELLNESS
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: '48px',
                fontWeight: 700,
                color: '#AE3537',
                letterSpacing: '8px',
                textAlign: 'center',
                textShadow: '0 2px 10px rgba(174, 53, 55, 0.5)',
              }}
            >
              CLUB
            </div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 600,
              color: '#FF6B6D',
              textAlign: 'center',
              marginBottom: '20px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            Azerbaijan's First Interactive
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '24px',
              fontWeight: 500,
              color: '#E5E5E5',
              textAlign: 'center',
              marginBottom: '40px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            Fitness & Wellness Destination
          </div>

          {/* Key Features */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '60px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#AE3537',
                  marginBottom: '5px',
                }}
              >
                5000+
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                  textAlign: 'center',
                }}
              >
                m² Space
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#AE3537',
                  marginBottom: '5px',
                }}
              >
                300+
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                  textAlign: 'center',
                }}
              >
                Equipment
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#AE3537',
                  marginBottom: '5px',
                }}
              >
                50+
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                  textAlign: 'center',
                }}
              >
                Experts
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: '32px',
                  fontWeight: 900,
                  color: '#AE3537',
                  marginBottom: '5px',
                }}
              >
                24/7
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                  textAlign: 'center',
                }}
              >
                Access
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brand Line */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '30px',
            left: '60px',
            right: '60px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              fontWeight: 600,
              color: '#808080',
              letterSpacing: '2px',
            }}
          >
            LUXURY WELLNESS REDEFINED IN AZERBAIJAN
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #AE3537, transparent)',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '30px',
            left: '30px',
            width: '4px',
            height: '60px',
            background: 'linear-gradient(180deg, #AE3537, transparent)',
          }}
        />

        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(270deg, #AE3537, transparent)',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            width: '4px',
            height: '60px',
            background: 'linear-gradient(0deg, #AE3537, transparent)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      status: 200,
      statusText: 'OK',
    }
  );
}
