import SupplyLine from '../components/SupplyLine';
import { asset } from '../lib/site';

export const metadata = {
  title: 'Agriculture and food supply in Namibia',
  description: 'Seven divisions growing, processing and delivering food across Namibia. Poultry, Brahmans, butchery, bakery, feed, vegetables and agritech supplies.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <SupplyLine />

      {/* 1 RECOGNITION: layered parallax hero on its own photographic ground. */}
      <section data-sc-act="flow" className="bleed" style={{ height: '100svh', background: '#101a12' }}>
        <div data-sc-stage style={{ height: '100svh', position: 'relative' }}>
          <img
            className="bleed__img"
            data-sc-parallax="-1.2"
            src={asset('/img/cattle-herd-1450w.webp')}
            alt="Brahman cattle grazing on open veld"
            width="1450" height="700" fetchPriority="high"
          />
          <div className="sc-scrim sc-scrim--lead" aria-hidden="true"></div>
          <div className="plate plate--paper-lead" aria-hidden="true"></div>
          <div className="sc-copy sc-copy--lead" data-sc-cue="0 1 0 0">
            <div style={{ maxWidth: '30rem' }}>
              <p className="kicker" style={{ color: 'var(--sc-ink-soft)' }}>Namibia</p>
              <h1 className="h-display h-display--xl" data-sc-kinetic="lines" style={{ color: 'var(--sc-ink)' }}>
                Agriculture and food supply.
              </h1>
              <p className="body body--soft" style={{ marginTop: '1.2rem' }}>
                Seven divisions. One relationship. From Namibian farms to your shelves.
              </p>
              <p style={{ marginTop: '1.6rem' }}>
                <a className="btn" href={asset('/contact/')}>Start your enquiry</a>
              </p>
            </div>
          </div>
          <div className="plate plate--hero-fade" aria-hidden="true"></div>
        </div>
      </section>

      {/* 2 TENSION: the argument, pinned. */}
      <section data-sc-act="pin" data-sc-span="3.0" data-sc-drift="#faf8f2" id="supply-farm">
        <div data-sc-stage className="wrap">
          <div style={{ minHeight: '88svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="lede" data-sc-cue="0 0.30 0">Feeding a country is a daily negotiation.</p>
            <p className="lede" data-sc-cue="0.26 0.56">Shops need stock. Farms need inputs. Both need it on time.</p>
            <p className="lede" data-sc-cue="0.52 0.80">Every extra middleman adds cost, and every delay is felt at the shelf.</p>
            <p className="lede" data-sc-cue="0.78 1 0.12 0.06"><b>One group grows, processes and delivers.</b></p>
          </div>
        </div>
      </section>

      {/* 3 TURN: reveal. */}
      <section className="sc-section ground-bone" data-sc-act="flow" data-sc-drift="#eeeae0" id="supply-story">
        <div className="wrap split">
          <div className="stack" data-sc-in data-sc-stagger="70">
            <h2 className="h-display h-display--lg">From the farm gate to the shelf.</h2>
            <p className="body body--soft">
              Braeveld is a family-run group of farming and food businesses. We grow, we process,
              and we deliver, so one enquiry covers the whole journey.
            </p>
            <p><a className="btn btn--ghost" href={asset('/about/')}>About the group</a></p>
          </div>
          <figure data-sc-reveal="left" data-sc-reveal-at="0.15 0.6">
            <img className="ph" src={asset('/img/butchery-premium-1200w.webp')} alt="Fresh cuts prepared in the Braeveld butchery" width="1200" height="1200" loading="lazy" />
            <figcaption className="ph-cap">The butchery: fresh beef and cuts to specification.</figcaption>
          </figure>
        </div>
      </section>

      {/* 4 SUBSTANCE: real numbers, quiet, the silence in front of the peak. */}
      <section className="sc-section" data-sc-act="flow" data-sc-drift="#faf8f2" id="supply-process">
        <div className="wrap narrow stack" data-sc-in data-sc-stagger="80">
          <h2 className="h-display h-display--md">What one enquiry covers.</h2>
          <div className="nums">
            <div className="num">
              <p className="num__v"><span data-sc-count="0 7">0</span></p>
              <p className="num__l">divisions under one group</p>
            </div>
            <div className="num">
              <p className="num__v"><span data-sc-count="0 7">0</span></p>
              <p className="num__l">towns on the delivery route</p>
            </div>
            <div className="num">
              <p className="num__v"><span data-sc-count="0 6">0</span></p>
              <p className="num__l">steps from enquiry to delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 RANGE: the pan rail. The peak. */}
      <section data-sc-act="pan" data-sc-span="4.6" data-sc-drift="#e9e4d8" id="supply-divisions">
        <div data-sc-stage style={{ overflow: 'hidden' }}>
          <div className="rail" data-sc-pan="0.06" style={{ paddingBlock: '4rem' }}>
            <div className="rail__lead stack">
              <h2 className="h-display h-display--lg">Seven businesses.</h2>
              <p className="body body--soft">One enquiry reaches every one of them.</p>
            </div>
            <article className="obj obj--square">
              <div data-sc-tilt="6"><div className="ph-frame"><img className="ph" src={asset('/img/eggs-packaging-1200w.webp')} alt="Packed eggs ready for delivery" width="1200" height="800" loading="lazy" /></div></div>
              <h3>Poultry</h3>
              <p className="museum"><b>Supplies.</b> Fresh birds, eggs, portions.<br /><b>Serves.</b> Retail and hospitality.</p>
            </article>
            <article className="obj obj--square">
              <div data-sc-tilt="6"><div className="ph-frame"><img className="ph" src={asset('/img/brahman-bull-1400w.webp')} alt="A Brahman bull on open veld" width="1400" height="1032" loading="lazy" /></div></div>
              <h3>Brahmans</h3>
              <p className="museum"><b>Supplies.</b> Breeding stock, auctions.<br /><b>Serves.</b> Farmers and traders.</p>
            </article>
            <article className="obj obj--square">
              <div data-sc-tilt="6"><div className="ph-frame"><img className="ph" src={asset('/img/butchery-display-1008w.webp')} alt="The butchery counter with prepared cuts" width="1008" height="1008" loading="lazy" /></div></div>
              <h3>Butchery</h3>
              <p className="museum"><b>Supplies.</b> Fresh beef, cuts to spec.<br /><b>Serves.</b> Shops and kitchens.</p>
            </article>
            <article className="obj obj--square">
              <div data-sc-tilt="6"><div className="ph-frame"><img className="ph" src={asset('/img/bread-collection-1200w.webp')} alt="Fresh bread from the Braeveld bakery" width="1200" height="800" loading="lazy" /></div></div>
              <h3>Bakery</h3>
              <p className="museum"><b>Supplies.</b> Bread and baked lines.<br /><b>Serves.</b> Retail shelves.</p>
            </article>
            <div className="rail__note stack">
              <h3 className="h-display h-display--md">Three more travel with them.</h3>
              <p className="museum">Animal feed. Vegetable supply. Agritech.</p>
              <p><a className="btn btn--ghost" href={asset('/divisions/')}>All seven divisions</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 COMMITMENT: pinned close, spotlight, magnet. Last act holds. */}
      <section data-sc-act="pin" data-sc-span="1.3" data-sc-drift="#faf8f2" id="supply-enquiry">
        <div data-sc-stage data-sc-spotlight>
          <div className="wrap narrow" style={{ minHeight: '92svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="stack" data-sc-cue="0.05">
              <h2 className="h-display h-display--lg">Tell us what you need.</h2>
              <p className="body body--soft">
                A WhatsApp message or a call is enough. We answer with availability,
                a written quotation and a delivery date.
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
