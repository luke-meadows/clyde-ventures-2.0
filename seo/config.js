import pkg from '../package.json';

export const nextSeoConfig = {
  title: pkg.title,
  description: pkg.description,
  keywords: pkg.keywords,
  icon: '/favicon.ico',
  themeColor: '#f9c156',
  colorScheme: 'light',
  facebook: {
    image: '/og-logo.png',
    url: 'https://clydeventures.com',
    type: 'website',
  },
  twitter: {
    image: 'https://www.clydeventures.com/1.png',
    site: '@clydeventures',
    card: 'summary',
  },
};
