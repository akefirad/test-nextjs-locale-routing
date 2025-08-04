import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de-DE'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      'de-DE': '/pfadnamen'
    }
  }
});
