import { asset } from '../../lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Tell us what you need. WhatsApp +264 81 264 5168, call +264 83 676 1478, or write to info@braeveldgroup.com.na.',
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <>
      {/* Poster hero: type at extreme scale, real h1, kinetic lines once. */}
      <section data-sc-act="pin" data-sc-span="2.6" data-sc-drift="#f3efe4" className="wrap poster-hero" style={{ paddingTop: '7rem' }}>
        <div data-sc-stage>
          <div>
            <p className="kicker">Contact</p>
            <h1 className="h-display poster-hero__title" data-sc-cue="0 1 0 0" data-sc-kinetic="lines">
              Tell us what you need.
            </h1>
            <p className="body body--soft" data-sc-cue="0.2 0.9 0.1" style={{ marginTop: '1.4rem', maxWidth: '34ch' }}>
              One message reaches all seven divisions.
            </p>
          </div>
        </div>
      </section>

      {/* The channels: the real submission paths. No form, no fake success. */}
      <section data-sc-act="flow" data-sc-drift="#eeeae0" style={{ paddingBlock: 'clamp(2rem, 5vw, 4rem)' }}>
        <div className="wrap narrow" data-sc-in data-sc-stagger="80">
          <a className="channel" href="https://wa.me/264812645168" target="_blank" rel="noopener">
            <span className="channel__kind">WhatsApp</span>
            <span className="channel__v">+264 81 264 5168</span>
          </a>
          <a className="channel" href="tel:+264836761478">
            <span className="channel__kind">Call</span>
            <span className="channel__v">+264 83 676 1478</span>
          </a>
          <a className="channel" href="mailto:info@braeveldgroup.com.na">
            <span className="channel__kind">Write</span>
            <span className="channel__v">info@braeveldgroup.com.na</span>
          </a>
        </div>
      </section>

      {/* The close inverts: the smallest type on the site. */}
      <section data-sc-act="flow" data-sc-drift="#e3ddcf" style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="wrap narrow" style={{ fontSize: '0.88rem', color: 'var(--sc-ink-soft)' }}>
          <p>
            Braeveld Boerdery Group Namibia (Pty) Limited. Deliveries to Windhoek,
            Rehoboth, Mariental, Gobabis, Grootfontein, Rundu and Katima Mulilo.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            <a href={asset('/privacy-policy/')} style={{ color: 'var(--sc-ink-soft)' }}>Privacy</a> &nbsp;&middot;&nbsp;
            <a href={asset('/terms/')} style={{ color: 'var(--sc-ink-soft)' }}>Terms</a> &nbsp;&middot;&nbsp;
            Made by <a href="https://studio.tangison.com" style={{ color: 'var(--sc-ink-soft)' }}>Tangison Studio</a>
          </p>
        </div>
      </section>
    </>
  );
}
