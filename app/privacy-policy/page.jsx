export const metadata = {
  title: 'Privacy policy',
  description: 'How Braeveld Boerdery Group Namibia (Pty) Limited handles the information you share when you enquire or use this website.',
  alternates: { canonical: '/privacy-policy/' },
};

export default function PrivacyPage() {
  return (
    <div className="wrap narrow" style={{ paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="stack" data-sc-in data-sc-stagger="60">
        <p className="kicker">Legal</p>
        <h1 className="h-display h-display--lg">Privacy policy</h1>
        <p className="body body--soft">
          This policy applies to this website and to enquiries made through it.
          It was last updated in 2026.
        </p>
        <p className="body body--soft" style={{ fontSize: '0.9rem' }}>
          Note: Namibia does not yet have a dedicated data protection act in
          force. We follow international good practice aligned with data
          protection principles, and this policy should be reviewed by counsel
          before it is relied on as legal advice.
        </p>
      </div>

      <div className="stack" data-sc-in data-sc-stagger="60" style={{ marginTop: '2.5rem' }}>
        <h2 className="h-display h-display--md">What we collect</h2>
        <p className="body">
          When you contact us by WhatsApp, phone or email, we receive what you
          send: your name, your contact details, and the details of your enquiry.
          This website itself does not run advertising trackers and does not sell
          data.
        </p>

        <h2 className="h-display h-display--md">How we use it</h2>
        <p className="body">
          We use enquiry details to answer you, to prepare quotations and to
          deliver orders. We keep order records because delivery, invoicing and
          after-sales service require them.
        </p>

        <h2 className="h-display h-display--md">Sharing</h2>
        <p className="body">
          We share your details only with the Braeveld divisions and delivery
          partners involved in your order, and with service providers that help
          us communicate with you, such as our email and telephone providers. We
          do not sell or rent personal information.
        </p>

        <h2 className="h-display h-display--md">Retention and security</h2>
        <p className="body">
          We keep enquiry and order records for as long as they serve the
          purpose they were collected for and any record-keeping that Namibian
          law requires. We take reasonable technical and organisational steps to
          protect them.
        </p>

        <h2 className="h-display h-display--md">Your choices</h2>
        <p className="body">
          You can ask us what we hold about you, ask us to correct it, or ask us
          to delete what we no longer need. Write to{' '}
          <a href="mailto:info@braeveldgroup.com.na" style={{ color: 'var(--sc-accent)' }}>info@braeveldgroup.com.na</a>{' '}
          or message +264 81 264 5168 and we will respond.
        </p>

        <h2 className="h-display h-display--md">Cookies</h2>
        <p className="body">
          This site sets no marketing or analytics cookies. Your browser stores
          only what it needs to render the page.
        </p>
      </div>
    </div>
  );
}
