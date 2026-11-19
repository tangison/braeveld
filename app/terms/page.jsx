export const metadata = {
  title: 'Terms',
  description: 'The terms that apply to using this website and to quotations and deliveries by Braeveld Boerdery Group Namibia (Pty) Limited.',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <div className="wrap narrow" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="stack" data-sc-in data-sc-stagger="60">
        <p className="kicker">Legal</p>
        <h1 className="h-display h-display--lg">Terms</h1>
        <p className="body body--soft">
          These terms apply to this website and to the ordinary course of
          quotation, sale and delivery. They were last updated in 2026 and are
          governed by the laws of the Republic of Namibia.
        </p>
        <p className="body body--soft" style={{ fontSize: '0.9rem' }}>
          Note: these terms are written in plain language and should be reviewed
          by counsel before they are relied on as a complete contract.
        </p>
      </div>

      <div className="stack" data-sc-in data-sc-stagger="60" style={{ marginTop: '2.5rem' }}>
        <h2 className="h-display h-display--md">Quotations and orders</h2>
        <p className="body">
          Prices are quoted per order in writing and are valid for the period
          stated on the quotation, or, where none is stated, for seven days.
          Stock is reserved only once an order is confirmed in writing by both
          sides.
        </p>

        <h2 className="h-display h-display--md">Delivery</h2>
        <p className="body">
          Delivery days are arranged per town when you enquire. Risk passes on
          delivery against the signed delivery note. Where you arrange your own
          transport, risk passes at handover.
        </p>

        <h2 className="h-display h-display--md">Perishables and inspection</h2>
        <p className="body">
          Fresh produce, meat, eggs and baked goods are perishable. Please
          inspect on arrival and report any problem the same day so we can put
          it right; later reports on perishables are considered case by case.
        </p>

        <h2 className="h-display h-display--md">Payment</h2>
        <p className="body">
          Payment terms are stated on each invoice. Where no terms are stated,
          payment is due on delivery. Outstanding amounts may suspend further
          deliveries until settled.
        </p>

        <h2 className="h-display h-display--md">Website use</h2>
        <p className="body">
          The content and photographs on this site belong to Braeveld Boerdery
          Group Namibia (Pty) Limited unless stated otherwise. You may use the
          site to enquire and to order. You may not reuse its text or images
          commercially without written permission.
        </p>

        <h2 className="h-display h-display--md">Contact</h2>
        <p className="body">
          Questions about these terms: {' '}
          <a href="mailto:info@braeveldgroup.com.na" style={{ color: 'var(--sc-accent)' }}>info@braeveldgroup.com.na</a>{' '}
          or +264 83 676 1478.
        </p>
      </div>
    </div>
  );
}
