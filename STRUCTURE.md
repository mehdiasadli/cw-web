# Crown Wellness Fitness Club Application - WEB Structure

Crown Wellness Fitness Club is a fitness club that offers a variety of services to its members. It is located in Baku and has 5000+m2 of space.

## Pages

- `/` - home page
- `/about` - about page
- `/trainers` - trainers page
- `/gallery` - gallery page

- All pages and components must be responsive and must be designed for mobile, tablet and desktop
- All pages must be server components, if any client side functionality is needed, we must create a client component and use it in the page

### Home Page

Home page will be act like a landing page and include several sections:

- Hero Section - A hero section with a video background and CTA buttons
- Premium Experiences (Features) - A section with the premium experiences that the club offers
- Impressive Scale (Stats) - A count up stats section of the club
- Membership Excellence (Pricing) - A pricing section with the different membership options
- Contact Us (CTA) - A CTA section with a contact form and a map

#### Hero Section

- Hero Section will include a video at the background. This video will be auto played and not-muted, but there will be a mute button at the bottom right corner of the video. video's src "https://res.cloudinary.com/doep7sd3t/video/upload/v1757633456/091254_c6vohz.mp4"
- On the video, there will be Logo (which is located in /components/logo.tsx) with (next line) CROWN (next line) WELLNESS CLUB
- After that there will be subtitle "First interactive fitness in Azerbaijan Luxury Wellness Experience" which this part "First interactive fitness in Azerbaijan" must be colored in #AE3537 (which is the brand color)
- After subtitle a description will come "Where tradition meets innovation. Discover premium fitness with complete cultural sensitivity, including dedicated women's facilities designed for privacy and comfort"
- After that 2 CTA buttons
  - with brand color background, full rounded button with Logo and text "Experience Crown"
  - with blurry/glassy background, full rounded button with Play icon and text "Book a Tour"
- After CTA buttons, there will be "DISCOVER LUXURY BELOW" text and two animated scroll down icons
- This whole Hero section must be 100vh height and must be centered vertically and horizontally

#### Premium Experiences

- title PREMIUM EXPERIENCES (EXPERIENCES in brand color)
- subtitle "Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring Azerbaijan's cultural values."
- 6 cards with mock information:
  - image (take it from unsplash for now)
  - title (two worded titles, 1st word in brand color)
  - subtitle (2,3,4 worded subtitles in brand color)
  - description
  - optional badge - which will be rendered at the top left corner of the card, it will be floating over the card, full rounded, with brand color background and customizable text (or even component inside)
  - stats (3 different stats, each has label: string, value: number | string, optional value suffix: string), rendered as a row
  - features (customized title for features for each card), and list of string
- When opening a card, it should be like expanded card, become a modal with cool animation that will look like card scales up, centered and become modal (and outside click to close it), you can use motion for animations
- when opened features and a cta button will appear at bottom

#### Impressive Scale

- title IMPRESSIVE SCALE (SCALE in brand color)
- subtitle "First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class facilities and cultural excellence."
- 4 cards with mock information:
  - icon
  - value (number) we will use number count up animation
  - value suffix (optional)
  - title (two worded titles, 1st word in brand color)
  - subtitle (2,3,4 worded subtitles in brand color)
  - description
  - color (even gradient colors) it should appear on hovering

#### Membership Excellence (a pricing section)

- title MEMBERSHIP EXCELLENCE (EXCELLENCE in brand color)
- subtitle Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.
  -"Founding Members: Up to 25% OFF First 6 Months" in a glassy badge something like this:
  ```
   <div className='inline-flex items-center bg-crown-dark-red/20 border border-crown-dark-red/40 rounded-full px-8 py-3 backdrop-blur-sm'>
            <Sparkles className='w-5 h-5 text-crown-primary mr-3' />
            <span className='text-crown-white font-semibold text-lg'>{t('membership.founding_offer')}</span>
          </div>
  ```
- segmented tabs for annual or monthly plans
- 4 payment plans
- plan will include icon, title, subtitle, discount?, price.monthly, price.yearly, features (list of strings), description, badge (floating on top center), button text

after those cards a guarantee section must be added and look like something like this, but integrated with our website and system:

```
<div
          className={`mt-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='bg-gradient-to-r from-crown-dark/80 to-crown-dark/80 border border-crown-dark rounded-3xl p-12 max-w-6xl mx-auto backdrop-blur-xl'>
            <div className='text-center'>
              <Award className='w-16 h-16 text-crown-primary mx-auto mb-8' />
              <h3 className='text-4xl font-bold text-crown-primary mb-6'>
                {t('membership.guarantee_title')}{' '}
                <span className='text-crown-primary'>{t('membership.guarantee_highlight')}</span>
              </h3>
              <div className='grid md:grid-cols-3 gap-8 mb-8'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>25%</div>
                  <div className='text-crown-white'>Off First 6 Months</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>3</div>
                  <div className='text-crown-white'>Free Personal Training Sessions</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-crown-primary mb-2'>VIP</div>
                  <div className='text-crown-white'>Grand Opening Access</div>
                </div>
              </div>
              <p className='text-xl text-crown-white leading-relaxed mb-8 max-w-4xl mx-auto'>
                {t('membership.guarantee_text')}
              </p>
              <button className='bg-crown-primary text-crown-white px-12 py-4 rounded-full font-bold text-lg hover:bg-crown-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/30'>
                {t('membership.claim_status')}
              </button>
            </div>
          </div>
        </div>
```

#### Contact Us

- title GET IN TOUCH (TOUCH in brand color)
- subtitle "Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination."
- contact information cards: visit us with address, call us with number, email us with email, operating hours with time table
- a form with fullName, email, mobile phone, message, and select for interested in (essential, premium, royal, just a tour, women's exclusive)
- and social media links with icons

old code:

```
<section id='contact' ref={sectionRef} className='py-20 bg-crown-dark relative overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-crown-dark-red to-transparent'></div>
        <div className='absolute inset-0 bg-gradient-to-br from-crown-dark-red/5 via-transparent to-crown-complementary/5'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-crown-white mb-4 sm:mb-6 tracking-wide px-4'>
            {t('contact.section_title')}{' '}
            <span className='text-crown-primary'>{t('contact.section_title_highlight')}</span>
          </h2>
          <p className='text-lg sm:text-xl text-crown-white max-w-3xl mx-auto leading-relaxed px-4'>
            {t('contact.section_description')}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto px-4'>
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className='text-2xl sm:text-3xl font-bold text-crown-primary mb-6 sm:mb-8'>
              {t('contact.contact_info')}
            </h3>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12'>
              {contactInfo.map((info, index) => (
                <div key={index} className='group h-full'>
                  <div className='bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 hover:bg-gray-700 hover:border-crown-dark-red/30 transition-all duration-300 group-hover:transform group-hover:scale-105 shadow-lg h-full'>
                    <div className='flex items-start space-x-3 sm:space-x-4 h-full'>
                      <div
                        className={`p-2 sm:p-3 bg-crown-primary rounded-lg group-hover:bg-crown-primary transition-colors duration-300 flex-shrink-0`}
                      >
                        <info.icon className='w-5 h-5 sm:w-6 sm:h-6 text-crown-white' />
                      </div>
                      <div className='flex-1 flex flex-col'>
                        <h4 className='text-crown-white font-semibold mb-2 text-sm sm:text-base'>{info.title}</h4>
                        <div className='flex-1'>
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className={`text-crown-complementary text-xs sm:text-sm ${detailIndex === 0 ? 'font-medium' : ''}`}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className='text-crown-white font-semibold mb-6'>{t('contact.follow_journey')}</h4>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='group flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-full hover:bg-crown-primary hover:border-crown-primary transition-all duration-300 hover:scale-110'
                    aria-label={social.label}
                  >
                    <social.icon className='w-5 h-5 text-crown-white transition-colors duration-300' />
                  </a>
                ))}
              </div>
              <p className='text-crown-complementary text-sm mt-4'>{t('contact.social_description')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className='bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl'>
              <h3 className='text-2xl sm:text-3xl font-bold text-crown-primary mb-6 sm:mb-8'>
                {t('contact.form_title')}
              </h3>

              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div className='grid sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.full_name')} {t('contact.required')}
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.full_name_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.email_address')} {t('contact.required')}
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.email_placeholder')}
                    />
                  </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='phone' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.phone_number')}
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300'
                      placeholder={t('contact.phone_placeholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor='membership' className='block text-crown-white text-sm font-medium mb-2'>
                      {t('contact.interested_in')}
                    </label>
                    <select
                      id='membership'
                      name='membership'
                      value={formData.membership}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white focus:outline-none focus:border-crown-primary transition-all duration-300'
                    >
                      <option value=''>{t('contact.select_membership')}</option>
                      <option value='essential'>{t('contact.essential_option')}</option>
                      <option value='premium'>{t('contact.premium_option')}</option>
                      <option value='royal'>{t('contact.royal_option')}</option>
                      <option value='womens'>{t('contact.womens_option')}</option>
                      <option value='tour'>{t('contact.tour_option')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor='message' className='block text-crown-white text-sm font-medium mb-2'>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-crown-white placeholder-gray-500 focus:outline-none focus:border-crown-primary transition-all duration-300 resize-none'
                    placeholder={t('contact.message_placeholder')}
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-crown-primary text-crown-white font-semibold py-4 px-6 rounded-lg hover:bg-crown-primary transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-crown-primary/25'
                >
                  {t('contact.send_message')}
                </button>

                <p className='text-crown-complementary text-xs text-center'>{t('contact.privacy_notice')}</p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-20 pt-12 border-t border-gray-700 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
            <div className='flex items-center space-x-3'>
              <img src='/CROWN_WHITE_LOGO.png' alt='Crown Wellness Club Logo' className='w-8 h-8 object-contain' />
              <span className='text-crown-white font-semibold text-lg'>Crown Wellness Club</span>
            </div>

            <p className='text-crown-complementary text-sm'>{t('contact.footer_text')}</p>

            <div className='flex items-center space-x-6 text-crown-complementary text-sm'>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.privacy')}
              </a>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.terms')}
              </a>
              <a href='#' className='hover:text-crown-primary transition-colors duration-300'>
                {t('contact.footer_links.support')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
```

beautify this a bit and integrate with our website and system and design

### About Page

About page will be a page that will contain the about section of the club

### Trainers Page

Trainers page will be a page that will contain the trainers section of the club

### Gallery Page

Gallery page will be a page that will contain the gallery section of the club

### Header

There will be a header component that will be used on all pages. Header will be transparent at the top, but gets blurred background when scrolling down.

Header will contain:

- Logo
- Navigation Links
  - Link must have an animated underline (from left to right) on hover with brand color
  - There will be two types of links: 1 page links 2 home section links
  - Page links must have a type of icon indicating that this is another page
- Language Selector (with labels, and flag emojis) [English, Azerbaijani, Russian]

### Footer

Footer will be a footer component that will be used on all pages. Footer will be transparent at the bottom, but gets blurred background when scrolling up.

Footer will contain:

- Logo
- Navigation Links
- Link must have an animated underline (from left to right) on hover with brand color
- There will be two types of links: 1 page links 2 home section links
- Page links must have a type of icon indicating that this is another page
- Language Selector (with labels, and flag emojis) [English, Azerbaijani, Russian]
