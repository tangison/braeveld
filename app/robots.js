import { SITE_URL, asset } from '../lib/site';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/server-error/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
