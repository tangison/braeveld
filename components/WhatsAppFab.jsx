'use client';

import { useEffect, useRef, useState } from 'react';

const WaGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.12c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.22.85.86-3.14-.2-.33a8.07 8.07 0 0 1-1.24-4.31c0-4.47 3.64-8.11 8.12-8.11s8.11 3.64 8.11 8.11-3.63 8.11-8.11 8.11h.33zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.09-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.63.3-.22.24-.83.81-.83 1.98 0 1.16.85 2.29.97 2.45.12.16 1.67 2.55 4.05 3.57.57.24 1.01.39 1.36.5.57.18 1.09.16 1.5.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
  </svg>
);

const MailGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 7.2 7-4.9V7l-7 4.9L5 7v.3l7 4.9zM5 9.1V17h14V9.1l-7 4.9-7-4.9z" />
  </svg>
);

const PhoneGlyph = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.6 3h2.7l1.8 4.5-2.2 1.3a12 12 0 0 0 6.3 6.3l1.3-2.2 4.5 1.8v2.7A2 2 0 0 1 19 19.6 16.6 16.6 0 0 1 4.4 5 2 2 0 0 1 6.6 3z" />
  </svg>
);

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    document.addEventListener('pointerdown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="fab" ref={rootRef}>
      <div className="fab__card" id="fab-card" hidden={!open}>
        <p className="fab__t">Talk to Braeveld</p>
        <a className="fab__opt" href="https://wa.me/264812645168" target="_blank" rel="noopener">
          <WaGlyph /> WhatsApp +264 81 264 5168
        </a>
        <a className="fab__opt" href="tel:+264836761478">
          <PhoneGlyph /> Call +264 83 676 1478
        </a>
        <a className="fab__opt" href="mailto:info@braeveldgroup.com.na">
          <MailGlyph /> info@braeveldgroup.com.na
        </a>
      </div>
      <button
        className="fab__btn"
        aria-label={open ? 'Close contact options' : 'Open contact options: WhatsApp, call or email'}
        aria-expanded={open}
        aria-controls="fab-card"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5.6 5.6 6l6 6-6 6 .4.4 6-6 6 6 .4-.4-6-6 6-6-.4-.4-6 6z" /></svg>
        ) : (
          <WaGlyph />
        )}
      </button>
    </div>
  );
}
