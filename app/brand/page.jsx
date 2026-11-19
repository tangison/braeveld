import { asset } from '../../lib/site';

export const metadata = {
  title: 'Brand',
  description: 'Design tokens, colour, logo rules and the type hierarchy for Braeveld Boerdery Group Namibia.',
  alternates: { canonical: '/brand/' },
};

const SWATCHES = [
  { name: 'Forest Ink', hex: '#17231a', use: 'Display type, deep grounds', c: '#17231a', ink: '#f3efe4' },
  { name: 'Brand Green', hex: '#065d2d', use: 'Accent: CTAs, links, the brand bar', c: '#065d2d', ink: '#faf8f2' },
  { name: 'Paper', hex: '#faf8f2', use: 'Default canvas', c: '#faf8f2', ink: '#17231a' },
  { name: 'Bone', hex: '#eeeae0', use: 'Alternate sections, photo frames', c: '#eeeae0', ink: '#17231a' },
  { name: 'Veld Grey', hex: '#5b6a5e', use: 'Secondary text on paper', c: '#5b6a5e', ink: '#faf8f2' },
  { name: 'Mist Green', hex: '#7fc79a', use: 'Accent on deep grounds', c: '#7fc79a', ink: '#0d2014' },
];

export default function BrandPage() {
  return (
    <div className="wrap" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="narrow stack" data-sc-in data-sc-stagger="60">
        <p className="kicker">Brand</p>
        <h1 className="h-display h-display--lg">One accent. Two faces. No decoration.</h1>
        <p className="body body--soft">
          The palette is sampled from the logo artwork. The typefaces are Fraunces
          for display and Figtree for text, both loaded with font-display swap.
        </p>
      </div>

      <section className="stack" data-sc-in data-sc-stagger="70" style={{ marginTop: '3rem' }}>
        <h2 className="h-display h-display--md">Colour</h2>
        <div className="swatches">
          {SWATCHES.map((s) => (
            <div key={s.hex} className="swatch">
              <div className="swatch__c" style={{ background: s.c, color: s.ink, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                Aa
              </div>
              <div className="swatch__t"><b>{s.name}</b>{s.hex}<br />{s.use}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="stack" data-sc-in data-sc-stagger="70" style={{ marginTop: '3rem' }}>
        <h2 className="h-display h-display--md">Logo rules</h2>
        <div className="split">
          <figure>
            <div className="ph-frame" style={{ padding: '2rem', background: '#faf8f2', border: '1px solid var(--sc-edge)' }}>
              <img className="ph" src={asset('/logo-full.svg')} alt="The Braeveld Boerdery Group wordmark" width="343" height="111" style={{ maxWidth: '18rem' }} />
            </div>
            <figcaption className="ph-cap">Primary lockup on paper. Keep clear space equal to the x-height on all sides.</figcaption>
          </figure>
          <div className="stack">
            <p className="body">Use the full lockup on paper and bone grounds.</p>
            <p className="body body--soft">
              On deep grounds, use the reversed mark. Never stretch, recolour or
              outline the mark, and never set it on a busy photograph without a
              plate behind it.
            </p>
          </div>
        </div>
      </section>

      <section className="stack" data-sc-in data-sc-stagger="70" style={{ marginTop: '3rem' }}>
        <h2 className="h-display h-display--md">Type hierarchy</h2>
        <p style={{ fontFamily: 'var(--sc-font-display)', fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.04, margin: 0, letterSpacing: '-0.02em' }}>
          Display, Fraunces
        </p>
        <p className="body">
          Body, Figtree. 45 to 75 characters per line, 1.6 line height, secondary
          text tinted from the ink hue, never flat grey.
        </p>
        <p className="body body--soft" style={{ fontSize: '0.88rem' }}>
          Tracking tightens as size grows. Buttons and links carry one label per
          intent across the whole site.
        </p>
      </section>

      <section className="stack" data-sc-in data-sc-stagger="70" style={{ marginTop: '3rem' }}>
        <h2 className="h-display h-display--md">The brand bar</h2>
        <p className="body">
          A 4px bar in Brand Green frames every page at the top edge. It is part
          of the header, so it never shifts layout.
        </p>
        <div style={{ height: '4px', background: '#065d2d', width: 'min(100%, 24rem)' }} aria-hidden="true"></div>
      </section>
    </div>
  );
}
