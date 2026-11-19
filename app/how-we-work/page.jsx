import SplitVerify from '../../components/SplitVerify';

export const metadata = {
  title: 'How we work',
  description: 'Six steps from enquiry to delivery: one enquiry, one quotation, one confirmation, one delivery note.',
  alternates: { canonical: '/how-we-work/' },
};
import { asset } from '../../lib/site';

const STEP_LEFT = [
  { n: '01', t: 'Your enquiry.', d: 'You tell us what you need. A WhatsApp message is enough.' },
  { n: '04', t: 'Order confirmation.', d: 'The hinge: both sides agree in writing on stock, price and date.' },
  { n: '06', t: 'Delivery and documents.', d: 'Your order arrives with its paperwork. Both sides sign it off.' },
];
const STEP_RIGHT = [
  { n: '02', t: 'Availability check.', d: 'We confirm what the divisions can supply, and from where.' },
  { n: '03', t: 'The written quotation.', d: 'You get one quotation covering everything, not one per division.' },
  { n: '05', t: 'Preparation.', d: 'The farm, the butchery, the bakery and the store prepare your order.' },
];

export default function HowWeWorkPage() {
  return (
    <>
      <SplitVerify />

      {/* The split, established at 50/50 on the first screen. Both headlines
          readable at once. No full-bleed, no centred copy. */}
      <section style={{ minHeight: '92svh', display: 'grid', gridTemplateColumns: '1fr 1fr' }} id="hww-hero">
        <div style={{ background: 'var(--sc-canvas)', padding: 'clamp(1.5rem, 5vw, 4rem)', paddingTop: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 className="h-display h-display--lg">On the farm.</h1>
          <p className="body body--soft" style={{ marginTop: '1rem' }}>
            What you do: enquire, confirm, receive. What we do: everything between.
          </p>
        </div>
        <div style={{ background: 'var(--sc-surface)', padding: 'clamp(1.5rem, 5vw, 4rem)', paddingTop: '7rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="h-display h-display--lg">To your shelves.</h2>
          <div className="nums" style={{ marginTop: '1.2rem' }}>
            <div className="num">
              <p className="num__v"><span data-sc-count="0 6">0</span></p>
              <p className="num__l">steps, one hinge</p>
            </div>
          </div>
        </div>
      </section>

      {/* The pinned split stage: the divider is the chrome and carries the
          progress of the argument. Steps populate both sides. The close is
          the collapse: the divider travels to the left edge and the CTA sits
          in the winning column. */}
      <section id="split-act" data-sc-act="pin" data-sc-span="5.2">
        <div data-sc-stage>
          <div id="split-stage" className="split-stage" data-sc-verify-state="divider-0">
            <div className="divider-chrome" aria-hidden="true">
              <div className="divider-chrome__bar"></div>
              <span className="divider-chrome__tag divider-chrome__tag--left">You</span>
              <span className="divider-chrome__tag divider-chrome__tag--right">Braeveld</span>
            </div>
            <div className="split-stage__half split-stage__half--left" data-sc-cue="0 1 0 0">
              {STEP_LEFT.map((s) => (
                <div key={s.n} className="step">
                  <p className="step__n">{s.n}</p>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <div className="split-stage__half split-stage__half--right">
              {STEP_RIGHT.map((s) => (
                <div key={s.n} className="step" data-sc-cue="0 1 0 0">
                  <p className="step__n">{s.n}</p>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
              <div className="step" data-sc-cue="0.78">
                <p className="kicker" style={{ color: 'var(--sc-accent)' }}>The collapse</p>
                <h3>One relationship covers all six.</h3>
                <p style={{ marginBottom: '1.2rem' }}>
                  You keep one number, one quotation and one delivery note.
                </p>
                <a className="btn" href={asset('/contact/')} data-sc-magnet="0.26" data-sc-rise="0">Start your enquiry</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
