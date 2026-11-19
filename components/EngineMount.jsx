'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Mounts the scroll-craft engine once per page load. Internal links are
// plain anchors, so every navigation is a fresh document and a fresh mount.
// One relayout after fonts settle: a webfont swap changes measured heights,
// and anything sized against those blocks is wrong until it re-measures.
export default function EngineMount() {
  const pathname = usePathname();
  useEffect(() => {
    function relayout() { window.dispatchEvent(new Event('resize')); }
    let mounted = false;
    const tryMount = () => {
      if (!mounted && window.ScrollCraft) {
        window.ScrollCraft.mount(document.body);
        mounted = true;
        relayout();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
        window.addEventListener('load', relayout);
      }
    };
    tryMount();
    const t = setInterval(tryMount, 120);
    const stop = setTimeout(() => clearInterval(t), 4000);
    return () => { clearInterval(t); clearTimeout(stop); };
  }, [pathname]);
  return null;
}
