'use client';

import { useEffect } from 'react';

// Chaptered-editorial chrome: a folio in the margin that updates the
// chapter number and title as chapters pass.
export default function Folio() {
  useEffect(() => {
    const num = document.getElementById('folio-num');
    const title = document.getElementById('folio-title');
    if (!num || !title) return;
    const chapters = Array.from(document.querySelectorAll('[data-chapter]'));
    if (!chapters.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          num.textContent = en.target.dataset.chapter;
          title.textContent = en.target.dataset.chapterTitle;
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });
    chapters.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);
  return (
    <aside className="folio" aria-hidden="true">
      <span id="folio-num" className="folio__num">00</span>
      <span id="folio-title" className="folio__title">Braeveld</span>
    </aside>
  );
}
