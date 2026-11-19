export const bp = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (p) => `${bp}${p}`;
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tangison.github.io/braeveld';
