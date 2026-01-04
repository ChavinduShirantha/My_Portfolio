// SEO Configuration
export const SEO_CONFIG = {
  // Basic Site Information
  site: {
    name: 'Chavindu Shirantha',
    title: 'Chavindu | Full Stack Developer & Web Developer',
    description: 'Chavindu Shirantha - Experienced Full Stack Developer and Web Developer from Sri Lanka. Specializing in React, Node.js, and modern web technologies.',
    url: 'https://chavindu-shirantha.web.app/',
    domain: 'chavindu-shirantha.web.app',
    author: 'Chavindu Shirantha',
    keywords: [
      'Full Stack Developer',
      'Web Developer',
      'React Developer',
      'Node.js Developer',
      'Frontend Developer',
      'Backend Developer',
      'JavaScript Developer',
      'Portfolio',
      'Web Design',
      'Mobile App Development',
      'Responsive Design',
      'Modern Web Technologies'
    ]
  },

  // Social Media & Open Graph
  social: {
    linkedin: 'https://www.linkedin.com/in/chavindu-shirantha-b5b857264/',
    github: 'https://github.com/ChavinduShirantha',
    gitlab: 'https://gitlab.com/chavindu.softedgelab'
  },

  // Images for SEO
  images: {
    ogImage: '/profile_img.png',
    logo: '/images/logo.png',
    favicon: '/src/assets/images/icons/profilefav.png',
    appleTouchIcon: '/images/apple-touch-icon.png' // 180x180px
  },

  // Contact Information for Local SEO
  contact: {
    email: 'chavindushirantha@gmail.com',
    phone: '+94-70-4230389',
    address: {
      street: '274/1, Madampagama,Usmudulawa,Kuleegoda',
      city: 'Ambalangoda',
      state: 'Southern Province',
      zip: '80328',
      country: 'Sri lanka'
    }
  },

  // Page-specific SEO data
  pages: {
    home: {
      title: 'Chavindu | Full Stack Developer & Web Developer',
      description: 'Chavindu Shirantha - Experienced Full Stack Developer and Web Developer from Sri Lanka. Specializing in React, Node.js, and modern web technologies.',
      keywords: ['portfolio', 'full stack developer', 'web developer', 'react developer', 'nodejs developer'],
      canonical: '/'
    },
    about: {
      title: 'About Me | Chavindu - Full Stack Developer',
      description: 'Learn more about my journey as a Full Stack Developer and Web Developer. Discover my skills, experience, and passion for creating amazing digital experiences.',
      keywords: ['about', 'experience', 'skills', 'background'],
      canonical: '/#about'
    },
    services: {
      title: 'Services | Chavindu - Web Development & Design',
      description: 'Professional web development and design services including React development, UI/UX design, mobile apps, and digital consulting.',
      keywords: ['services', 'web development', 'ui ux design', 'consulting'],
      canonical: '/#services'
    },
    projects: {
      title: 'Projects | Chavindu - Portfolio Showcase',
      description: 'Explore my latest web development and design projects. See how I create modern, responsive, and user-friendly digital experiences.',
      keywords: ['projects', 'portfolio', 'web apps', 'case studies'],
      canonical: '/#projects'
    },
    contact: {
      title: 'Contact Me | Chavindu - Let\'s Work Together',
      description: 'Ready to start your next project? Get in touch to discuss web development, UI/UX design, or any digital solution needs.',
      keywords: ['contact', 'hire', 'freelance', 'collaboration'],
      canonical: '/#contact'
    }
  },

  // Structured Data Templates
  structuredData: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Chavindu Shirantha',
      jobTitle: 'Full Stack Developer & Web Developer',
      description: 'Experienced Full Stack Developer and Web Developer creating innovative web applications and digital experiences.',
      url: 'https://chavindu-shirantha.web.app/',
      email: 'chavindushirantha@gmail.com',
      telephone: '+94-70-4230389',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ambalangoda',
        addressRegion: 'Southern province',
        addressCountry: 'Sri Lanka'
      },
      sameAs: [
        'https://gitlab.com/chavindu.softedgelab',
        'https://www.linkedin.com/in/chavindu-shirantha-b5b857264/',
        'https://github.com/ChavinduShirantha'
      ],
      knowsAbout: [
        'JavaScript',
        'React',
        'Node.js',
        'UI/UX Design',
        'Web Development',
        'Mobile Development'
      ]
    },

    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Chavindu Shirantha Portfolio',
      url: 'https://chavindu-shirantha.web.app/',
      description: 'Professional portfolio showcasing full stack development and UI/UX design work.',
      author: {
        '@type': 'Person',
        name: 'Chavindu Shirantha'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://chavindu-shirantha.web.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },

    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Chavindu Shirantha',
      url: 'https://chavindu-shirantha.web.app/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chavindu-shirantha.web.app/profile_img.png',
        width: 512,
        height: 512
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+94-70-4230389',
        contactType: 'customer service',
        email: 'chavindushirantha@gmail.com'
      },
      sameAs: [
        'https://gitlab.com/chavindu.softedgelab',
        'https://www.linkedin.com/in/chavindu-shirantha-b5b857264/',
        'https://github.com/ChavinduShirantha'
      ]
    }
  },

  // Technical SEO Settings
  technical: {
    language: 'en-US',
    charset: 'UTF-8',
    viewport: 'width=device-width, initial-scale=1.0',
    themeColor: '#2563eb',
    msapplicationTileColor: '#2563eb',
    robots: 'index, follow',
    googleSiteVerification: '', // Add your Google Search Console verification code
    bingSiteVerification: '', // Add your Bing Webmaster verification code
    facebookDomainVerification: '' // Add your Facebook domain verification code
  }
};

// SEO Utility Functions
export const generatePageTitle = (pageTitle, includesSiteName = true) => {
  if (!pageTitle) return SEO_CONFIG.site.title;
  return includesSiteName ? `${pageTitle} | ${SEO_CONFIG.site.name}` : pageTitle;
};

export const generateMetaDescription = (description) => {
  return description || SEO_CONFIG.site.description;
};

export const generateCanonicalUrl = (path = '') => {
  return `${SEO_CONFIG.site.url}${path}`;
};

export const generateKeywords = (pageKeywords = []) => {
  return [...SEO_CONFIG.site.keywords, ...pageKeywords].join(', ');
};

export const getPageSEO = (page) => {
  const pageData = SEO_CONFIG.pages[page];
  if (!pageData) return SEO_CONFIG.pages.home;

  return {
    title: generatePageTitle(pageData.title, false),
    description: generateMetaDescription(pageData.description),
    keywords: generateKeywords(pageData.keywords),
    canonical: generateCanonicalUrl(pageData.canonical)
  };
};