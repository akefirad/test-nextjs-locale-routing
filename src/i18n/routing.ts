import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de-de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/pathnames': {
      'de-de': '/pfadnamen'
    }
  }
});
