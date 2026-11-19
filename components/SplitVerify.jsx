'use client';

import { useEffect } from 'react';

// Publishes the rendered divider position on the split-stage so the
// verification pass can see the composition change inside the pinned stage.
export default function SplitVerify() {
  useEffect(() => {
    const act = document.getElementById('split-act');
    if (!act) return;
    let raf = 0;
    function tick() {
      raf = 0;
      const p = parseFloat(getComputedStyle(act).getPropertyValue('--sc-p')) || 0;
      const stage = document.getElementById('split-stage');
      if (stage) stage.dataset.scVerifyState = `divider-${Math.round(p * 100)}`;
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return null;
}
