module.exports = {
  siteTitle: 'Monya Kwene | Software Engineer',
  siteDescription:
    'Monya Kwene is a software engineer based in Copenhagen, DK who specializes in developing high-performing user centered web applications.',
  siteKeywords:
    'Monya Kwene, Monya, Kwene, Alete, software engineer, front-end engineer, web developer, javascript, Copenhagen, Europe, Scandinavia',
  siteUrl: 'https://monya.netlify.com',
  siteLanguage: 'en_US',

   googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Monya Kwene',
  location: 'Copenhagen, DK',
  email: 'kwenait@yahoo.ca',
  github: 'https://github.com/kwenealete',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kwenealete',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/monya-kwene-alete-208203b5/',
    },
    
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  
  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
