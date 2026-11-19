import { asset } from '../../lib/site';

export const metadata = {
  title: 'The seven divisions',
  description: 'Poultry, Brahmans, butchery, bakery, animal feed, vegetables and agritech supplies: what each Braeveld division supplies and who it serves.',
  alternates: { canonical: '/divisions/' },
};

const OBJECTS = [
  {
    n: '01', name: 'Agritech Supply', img: '/img/combine-harvester-509w.webp', w: 509, h: 339,
    alt: 'A combine harvester working a field',
    supplies: 'Farming tools and accessories, irrigation systems, agricultural technology and general supplies.',
    serves: 'Farmers and agri-businesses.',
  },
  {
    n: '02', name: 'Poultry Farm', img: '/img/eggs-packaging-1200w.webp', w: 1200, h: 800,
    alt: 'Packed eggs ready for delivery',
    supplies: 'Fresh whole chickens and chicken portions, fresh eggs, other poultry products to customer requirements.',
    serves: 'Retail, hospitality and households.',
  },
  {
    n: '03', name: 'Brahmans Livestock', img: '/img/brahman-bull-1400w.webp', w: 1400, h: 1032,
    alt: 'A Brahman bull on open veld',
    supplies: 'Brahman cattle farming and breeding, livestock development and cattle sales, auctions and trading, farming partnerships.',
    serves: 'Farmers, traders and partners.',
  },
  {
    n: '04', name: 'Butchery & Meat Supply', img: '/img/butchery-display-1008w.webp', w: 1008, h: 1008,
    alt: 'Prepared cuts displayed in the butchery',
    supplies: 'Fresh beef and selected meat cuts, chicken and poultry products, meat portions to customer specification.',
    serves: 'Shops, kitchens and butcheries.',
  },
  {
    n: '05', name: 'Bakery', img: '/img/bread-collection-1200w.webp', w: 1200, h: 800,
    alt: 'Fresh bread from the Braeveld bakery',
    supplies: 'Bread and baked lines for retail shelves.',
    serves: 'Retail shelves and resellers.',
  },
  {
    n: '06', name: 'Animal Feed', img: '/img/hay-bales-1024w.webp', w: 1024, h: 652,
    alt: 'Bales of hay stacked on the farm',
    supplies: 'Feed and supplements for livestock.',
    serves: 'Farmers across the route.',
  },
  {
    n: '07', name: 'Vegetable Supply', img: '/img/potatoes-pack-1024w.webp', w: 1024, h: 1536,
    alt: 'A pack of fresh potatoes',
    supplies: 'Fresh vegetables from the farm and partner plots.',
    serves: 'Retail and wholesale buyers.',
  },
];

export default function DivisionsPage() {
  return (
    <>
      {/* Index nav that jumps (the collection's chrome). */}
      <section className="wrap" style={{ paddingTop: '6.5rem' }}>
        <p className="kicker">The collection</p>
        <h1 className="h-display h-display--lg" style={{ marginTop: '0.5rem' }}>Seven businesses, labelled plainly.</h1>
        <nav aria-label="Division index" style={{ marginTop: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.2rem' }}>
          {OBJECTS.map((o) => (
            <a key={o.n} href={`#obj-${o.n}`} className="site-bar__link" style={{ borderBottom: 0, fontSize: '0.9rem' }}>
              {o.n} {o.name}
            </a>
          ))}
        </nav>
      </section>

      {/* Pan spine: the whole page is one lateral rail. One viewport-height
          per object, heading first, closing note last. */}
      <section data-sc-act="pan" data-sc-span="8.2" data-sc-drift="#eeeae0">
        <div data-sc-stage style={{ overflow: 'hidden' }}>
          <div className="rail" data-sc-pan="0.05" style={{ paddingBlock: '3.5rem' }}>
            {OBJECTS.map((o, i) => (
              <article key={o.n} id={`obj-${o.n}`} className={`obj ${o.h === o.w ? 'obj--square' : ''}`} style={{ minWidth: 'min(84vw, 30rem)' }}>
                <div data-sc-tilt="6">
                  <div className="ph-frame">
                    <img className="ph" src={asset(o.img)} alt={o.alt} width={o.w} height={o.h} loading="lazy" />
                  </div>
                </div>
                <p className="kicker" style={{ marginTop: '1rem' }}>{o.n}</p>
                <h2 className="obj__name">{o.name}</h2>
                <p className="museum">
                  <b>Supplies.</b> {o.supplies}<br />
                  <b>Serves.</b> {o.serves}
                </p>
              </article>
            ))}
            <div className="rail__note stack">
              <h2 className="h-display h-display--md">One relationship, many supply needs.</h2>
              <p className="museum">Enquire once. All seven answer on one quotation.</p>
              <p><a className="btn" href={asset('/contact/')}>Inquire</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail accordions: the full lists live here, off the rail. */}
      <section className="wrap" style={{ paddingBottom: 'clamp(3rem, 8vw, 5rem)', paddingTop: '1rem' }}>
        <h2 className="h-display h-display--md" style={{ marginBottom: '1.2rem' }}>The full supply lists.</h2>
        {OBJECTS.map((o) => (
          <details key={o.n} className="acc">
            <summary>{o.n} {o.name}</summary>
            <div className="acc__body">
              <ul>
                {o.supplies.split(', ').map((s, i) => <li key={i}>{s.replace(/\.$/, '')}</li>)}
              </ul>
            </div>
          </details>
        ))}
      </section>
    </>
  );
}
