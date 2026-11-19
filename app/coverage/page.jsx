import { asset } from '../../lib/site';

export const metadata = {
  title: 'Delivery coverage',
  description: 'Deliveries run to Windhoek, Rehoboth, Mariental, Gobabis, Grootfontein, Rundu and Katima Mulilo. Seven towns, one route.',
  alternates: { canonical: '/coverage/' },
};

const TOWNS = [
  { name: 'Windhoek', region: 'Khomas', at: 0.16, x: 185, y: 240, lx: 195, ly: 244 },
  { name: 'Rehoboth', region: 'Hardap', at: 0.28, x: 180, y: 272, lx: 122, ly: 276 },
  { name: 'Mariental', region: 'Hardap', at: 0.38, x: 186, y: 306, lx: 118, ly: 310 },
  { name: 'Gobabis', region: 'Omaheke', at: 0.5, x: 240, y: 252, lx: 250, ly: 256 },
  { name: 'Grootfontein', region: 'Otjozondjupa', at: 0.66, x: 268, y: 186, lx: 278, ly: 190 },
  { name: 'Rundu', region: 'Kavango East', at: 0.8, x: 280, y: 152, lx: 240, ly: 138 },
  { name: 'Katima Mulilo', region: 'Zambezi', at: 0.94, x: 374, y: 146, lx: 300, ly: 122 },
];

function RouteMap() {
  return (
    <svg className="route-map" viewBox="0 0 430 420" role="img"
      aria-label="Stylised map of Namibia with the delivery route from Windhoek north to Katima Mulilo">
      {/* Namibia, stylised: the colonial-era straight borders and the Caprivi strip. */}
      <path
        d="M62 118 C90 96 118 92 148 96 L250 118 L340 132 L398 140 L400 158 L382 160 L360 176 L330 240 L330 362 L62 362 Z"
        fill="rgba(243,239,228,0.05)" stroke="rgba(243,239,228,0.35)" strokeWidth="1.4"
      />
      <path className="route-base" d="M186 240 L180 272 L186 306 L240 252 L268 186 L280 152 L374 146" />
      <path
        id="route-draw-line"
        className="route-draw"
        d="M186 240 L180 272 L186 306 L240 252 L268 186 L280 152 L374 146"
        style={{
          strokeDasharray: 520,
          strokeDashoffset: 'calc(520 * (1 - var(--sc-p, 0)))',
          strokeLinecap: 'round', strokeLinejoin: 'round',
        }}
      />
      {TOWNS.map((t) => (
        <g key={t.name}>
          <circle className="town-dot" cx={t.x} cy={t.y} r="4" style={{ '--at': t.at, opacity: 'calc((var(--sc-p, 0) - var(--at)) * 6)' }} />
          <text className="town-label" x={t.lx} y={t.ly} style={{ '--at': t.at, opacity: 'calc((var(--sc-p, 0) - var(--at)) * 6)' }}>
            {t.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function CoveragePage() {
  return (
    <>
      {/* 1 ORIENTATION: greet cue, ground already present. */}
      <section data-sc-act="pin" data-sc-span="2.4" className="ground-deep">
        <div data-sc-stage>
          <div className="wrap narrow" style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '4rem' }}>
            <p className="kicker" style={{ color: 'var(--deep-soft)' }}>Coverage</p>
            <h1 className="lede" data-sc-cue="0 0.9 0" style={{ color: 'var(--deep-ink)' }}>
              Seven towns. One delivery network.
            </h1>
            <p className="body" style={{ color: 'var(--deep-soft)', marginTop: '1rem' }} data-sc-cue="0.3 0.9 0.1">
              The route runs south to north through the middle of the country,
              from the capital to the Zambezi.
            </p>
          </div>
        </div>
      </section>

      {/* 2 RECOGNITION: the route draws itself. The peak. */}
      <section data-sc-act="pin" data-sc-span="3.8" data-sc-dwell="0.3" className="ground-deep">
        <div data-sc-stage>
          <div className="wrap split" style={{ minHeight: '100svh', alignItems: 'center' }}>
            <div data-sc-cue="0 1 0 0">
              <h2 className="h-display h-display--lg" style={{ color: 'var(--deep-ink)' }}>
                Watch the route run north.
              </h2>
              <p className="body" style={{ color: 'var(--deep-soft)', marginTop: '1rem' }}>
                Scroll and the line draws itself: Windhoek, Rehoboth, Mariental,
                Gobabis, Grootfontein, Rundu, Katima Mulilo.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <RouteMap />
            </div>
          </div>
        </div>
      </section>

      {/* 3 WEIGHT: the town ledger, real rows. */}
      <section data-sc-act="flow" className="ground-deep" style={{ paddingBlock: 'clamp(3rem, 7vw, 5rem)' }}>
        <div className="wrap narrow">
          <h2 className="h-display h-display--md" style={{ color: 'var(--deep-ink)', marginBottom: '1.4rem' }}>
            The town ledger.
          </h2>
          <div data-sc-in data-sc-stagger="70">
            {TOWNS.map((t) => (
              <div key={t.name} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', paddingBlock: '0.85rem', borderBottom: '1px solid rgba(243,239,228,0.14)' }}>
                <span style={{ fontFamily: 'var(--sc-font-display)', fontSize: '1.15rem' }}>{t.name}</span>
                <span style={{ color: 'var(--deep-soft)', fontSize: '0.92rem' }}>{t.region}</span>
              </div>
            ))}
          </div>
          <p className="body" style={{ color: 'var(--deep-soft)', marginTop: '1.4rem', fontSize: '0.95rem' }}>
            Deliveries run on arranged days per town. Your order sets the schedule,
            so ask when you enquire.
          </p>
        </div>
      </section>

      {/* 4 RESOLVE: pinned close, spotlight, magnet. Holds. */}
      <section data-sc-act="pin" data-sc-span="1.3" className="ground-deep">
        <div data-sc-stage data-sc-spotlight>
          <div className="wrap narrow" style={{ minHeight: '92svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="stack" data-sc-cue="0.05">
              <h2 className="h-display h-display--lg" style={{ color: 'var(--deep-ink)' }}>
                Is your town on the route?
              </h2>
              <p className="body" style={{ color: 'var(--deep-soft)' }}>
                If it is, one enquiry starts the delivery. If it is not, ask anyway:
                the route grows with its customers.
              </p>
              <p>
                <a className="btn" href={asset('/contact/')} data-sc-magnet="0.26" data-sc-rise="0">Start your enquiry</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
