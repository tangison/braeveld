import { asset } from '../../lib/site';

export const metadata = {
  title: 'Server error',
  robots: { index: false },
};

export default function ServerErrorPage() {
  return (
    <div className="wrap error-hero" style={{ paddingTop: '7rem' }}>
      <p className="kicker">500</p>
      <h1 className="h-display h-display--xl">Something broke on our side.</h1>
      <p className="body body--soft" style={{ marginTop: '1.2rem' }}>
        Not your doing. Try again in a moment, or reach us directly on
        WhatsApp at +264 81 264 5168.
      </p>
      <div style={{ marginTop: '1.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <a className="btn" href={asset('/')}>Go home</a>
        <a className="btn btn--ghost" href="https://wa.me/264812645168" target="_blank" rel="noopener">WhatsApp us</a>
      </div>
    </div>
  );
}
