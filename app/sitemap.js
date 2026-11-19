import { SITE_URL } from '../lib/site';

const PAGES = ['', 'about/', 'divisions/', 'coverage/', 'how-we-work/', 'contact/', 'brand/', 'privacy-policy/', 'terms/'];

export default function sitemap() {
  const base = SITE_URL.endsWith('/') ? SITE_URL : `${SITE_URL}/`;
  return PAGES.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
}
