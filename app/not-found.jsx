import { asset } from '../lib/site';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="wrap error-hero" style={{ paddingTop: '7rem' }}>
      <p className="kicker">404</p>
      <h1 className="h-display h-display--xl">This field is empty.</h1>
      <p className="body body--soft" style={{ marginTop: '1.2rem' }}>
        The page you asked for is not on the farm. The route, the divisions and
        the enquiry line are all still here.
      </p>
      <div style={{ marginTop: '1.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
        <a className="btn" href={asset('/')}>Go home</a>
        <a className="btn btn--ghost" href={asset('/divisions/')}>See the divisions</a>
        <a className="btn btn--ghost" href={asset('/contact/')}>Contact us</a>
      </div>
    </div>
  );
}
