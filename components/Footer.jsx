import { asset } from '../lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="stack">
            <div className="footer__mark">
              <img src={asset('/logo-full.svg')} alt="Braeveld Boerdery Group" width="343" height="111" />
            </div>
            <p className="museum" style={{ maxWidth: '30rem' }}>
              Building Partnerships. Supplying Quality. Growing Together.
              Seven divisions growing, processing and delivering food across Namibia.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="kicker">Site</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.6rem 0 0', lineHeight: 2 }}>
              <li><a href={asset('/about/')}>About</a></li>
              <li><a href={asset('/divisions/')}>Divisions</a></li>
              <li><a href={asset('/coverage/')}>Coverage</a></li>
              <li><a href={asset('/how-we-work/')}>How we work</a></li>
              <li><a href={asset('/contact/')}>Contact</a></li>
            </ul>
          </nav>
          <div>
            <p className="kicker">Brand</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0.6rem 0 0', lineHeight: 2 }}>
              <li><a href={asset('/brand/')}>Brand</a></li>
              <li><a href={asset('/privacy-policy/')}>Privacy policy</a></li>
              <li><a href={asset('/terms/')}>Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>&copy; 2026 Braeveld Boerdery Group Namibia (Pty) Limited</span>
          <a href="https://studio.tangison.com">Made by Tangison Studio</a>
          <span>Photographs: Braeveld Boerdery Group Namibia (Pty) Limited</span>
        </div>
      </div>
    </footer>
  );
}
