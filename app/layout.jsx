import { Fraunces, Figtree } from 'next/font/google';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFab from '../components/WhatsAppFab';
import EngineMount from '../components/EngineMount';
import { asset, SITE_URL } from '../lib/site';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree', display: 'swap' });

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Braeveld Boerdery Group Namibia (Pty) Limited',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.svg`,
  slogan: 'Building Partnerships. Supplying Quality. Growing Together.',
  email: 'info@braeveldgroup.com.na',
  telephone: '+264 83 676 1478',
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: '+264812645168', contactOption: 'WhatsApp', availableLanguage: ['en', 'af'] }],
  address: { '@type': 'PostalAddress', addressCountry: 'NA' },
  areaServed: ['Windhoek', 'Rehoboth', 'Mariental', 'Gobabis', 'Grootfontein', 'Rundu', 'Katima Mulilo'],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Braeveld Boerdery Group Namibia', template: '%s | Braeveld Boerdery Group' },
  description: 'Seven divisions growing, processing and delivering food across Namibia: poultry, Brahmans, butchery, bakery, feed, vegetables and agritech supplies.',
  openGraph: {
    type: 'website',
    siteName: 'Braeveld Boerdery Group Namibia',
    images: [{ url: '/share.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
};

export const viewport = {
  themeColor: '#faf8f2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body>
        <link rel="manifest" href={asset('/site.webmanifest')} />
        <a className="skip" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Script src={asset('/scrollcraft.js')} strategy="afterInteractive" />
        <EngineMount />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
