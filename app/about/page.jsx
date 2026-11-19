import Folio from '../../components/Folio';
import Carousel from '../../components/Carousel';
import { asset } from '../../lib/site';

export const metadata = {
  title: 'About the group',
  description: 'A family-run Namibian farming group: the farm, the livestock, the bakery and butchery, and the reach across seven towns.',
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <>
      <Folio />

      {/* Title page: type only, no media above the fold. */}
      <section className="wrap" style={{ minHeight: '72svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '5rem' }}>
        <p className="kicker">About</p>
        <h1 className="h-display h-display--xl" style={{ marginTop: '0.6rem' }}>
          Built on partnerships.
        </h1>
        <p className="body body--soft" style={{ marginTop: '1.4rem' }}>
          Building Partnerships. Supplying Quality. Growing Together. That is the
          slogan, and it is also the operating model.
        </p>
      </section>

      {/* Chapter 01: The farm. */}
      <section data-chapter="01" data-chapter-title="The farm" className="ground-bone" style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}>
        <div className="wrap split">
          <figure data-sc-parallax="-0.7">
            <div className="ph-frame">
              <img className="ph" src={asset('/img/farmer-portrait-1000w.webp')} alt="The farmer at work on the Braeveld farm" width="1000" height="1250" loading="lazy" />
            </div>
            <figcaption className="ph-cap">On the farm, every day.</figcaption>
          </figure>
          <div className="stack" data-sc-in data-sc-stagger="70">
            <p className="kicker">01</p>
            <h2 className="h-display h-display--lg">The farm comes first.</h2>
            <p className="body">
              Braeveld Boerdery Group Namibia (Pty) Limited is a family-run group of
              farming and food businesses. The work starts in the veld: healthy
              animals, good feed, careful hands.
            </p>
            <p className="body body--soft">
              Everything the group sells passes through the same standard, whether it
              leaves as a live animal, a fresh cut, a tray of eggs or a loaf of bread.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 02: Livestock. The peak: most scroll room, the carousel. */}
      <section data-chapter="02" data-chapter-title="Livestock" style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}>
        <div className="wrap">
          <div className="stack" data-sc-in data-sc-stagger="70" style={{ marginBottom: '1.8rem' }}>
            <p className="kicker">02</p>
            <h2 className="h-display h-display--lg">Livestock, raised properly.</h2>
            <p className="body body--soft">
              Brahmans for breeding and auctions. Small stock for partnerships and
              sales. The herd is the heart of the group.
            </p>
          </div>
          <Carousel label="Livestock photographs">
            <figure>
              <div className="ph-frame"><img className="ph" src={asset('/img/brahman-bull-1400w.webp')} alt="A Brahman bull standing on open veld" width="1400" height="1032" loading="lazy" /></div>
              <figcaption className="ph-cap">Brahman bull: breeding, development and sales.</figcaption>
            </figure>
            <figure>
              <div className="ph-frame"><img className="ph" src={asset('/img/sheep-goats-1400w.webp')} alt="Sheep and goats grazing together" width="1400" height="931" loading="lazy" /></div>
              <figcaption className="ph-cap">Small stock: farming partnerships and trading.</figcaption>
            </figure>
            <figure>
              <div className="ph-frame"><img className="ph" src={asset('/img/cattle-herd-1450w.webp')} alt="A herd of cattle moving across the veld" width="1450" height="700" loading="lazy" /></div>
              <figcaption className="ph-cap">The herd: livestock auctions and cattle trading.</figcaption>
            </figure>
          </Carousel>
        </div>
      </section>

      {/* Chapter 03: Bakery and butchery. Hard ground cut, as the grammar wants. */}
      <section data-chapter="03" data-chapter-title="Bakery & butchery" className="ground-deep" style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}>
        <div className="wrap split split--media-lead">
          <div className="stack" data-sc-in data-sc-stagger="70">
            <p className="kicker">03</p>
            <h2 className="h-display h-display--lg">Then we process.</h2>
            <p className="body">
              The butchery prepares fresh beef and cuts to customer specification.
              The bakery bakes for retail shelves. Both take what the farm and
              partner plots produce and turn it into what shops actually order.
            </p>
          </div>
          <div className="stack" data-sc-in data-sc-stagger="90">
            <figure data-sc-reveal="right" data-sc-reveal-at="0.15 0.6">
              <div className="ph-frame"><img className="ph" src={asset('/img/butchery-display-1008w.webp')} alt="Prepared cuts displayed in the butchery" width="1008" height="1008" loading="lazy" /></div>
              <figcaption className="ph-cap">Cuts to specification.</figcaption>
            </figure>
            <figure data-sc-reveal="right" data-sc-reveal-at="0.3 0.75">
              <div className="ph-frame"><img className="ph" src={asset('/img/bread-collection-1200w.webp')} alt="Fresh bread loaves from the bakery" width="1200" height="800" loading="lazy" /></div>
              <figcaption className="ph-cap">Baked for retail shelves.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Chapter 04: The reach. */}
      <section data-chapter="04" data-chapter-title="The reach" style={{ paddingBlock: 'clamp(3rem, 8vw, 6rem)' }}>
        <div className="wrap split">
          <figure data-sc-reveal="up" data-sc-reveal-at="0.12 0.55">
            <div className="ph-frame"><img className="ph" src={asset('/img/region-landscape-1344w.webp')} alt="Open landscape between delivery towns" width="1344" height="768" loading="lazy" /></div>
            <figcaption className="ph-cap">The distances the delivery route covers.</figcaption>
          </figure>
          <div className="stack" data-sc-in data-sc-stagger="70">
            <p className="kicker">04</p>
            <h2 className="h-display h-display--lg">The reach.</h2>
            <p className="body">
              Deliveries run to Windhoek, Rehoboth, Mariental, Gobabis, Grootfontein,
              Rundu and Katima Mulilo. Seven towns, one route, one relationship.
            </p>
            <p><a className="btn btn--ghost" href={asset('/coverage/')}>See the coverage map</a></p>
          </div>
        </div>
      </section>

      {/* Colophon close: small type, CTA as running text. */}
      <section className="ground-bone" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4rem)' }}>
        <div className="wrap narrow">
          <p className="body body--soft" style={{ fontSize: '0.95rem' }}>
            Braeveld Boerdery Group Namibia (Pty) Limited. Photography by the group.
            Site by <a href="https://studio.tangison.com" style={{ color: 'var(--sc-accent)' }}>Tangison Studio</a>.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a href={asset('/contact/')} style={{ color: 'var(--sc-ink)', fontSize: '1.15rem' }}>
              Start your enquiry &rarr;
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
