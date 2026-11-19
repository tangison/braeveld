'use client';

import { useEffect } from 'react';

// Signature move on the home page: a fixed supply-line trace at the bottom
// edge. Scroll position is the playhead; passing each act stamps a permanent
// marker. Doubles as jump navigation. Bespoke page-local code; the engine
// is untouched.
const STOPS = [
  { id: 'supply-farm', label: 'Farm' },
  { id: 'supply-story', label: 'Story' },
  { id: 'supply-process', label: 'Process' },
  { id: 'supply-divisions', label: 'Divisions' },
  { id: 'supply-enquiry', label: 'Enquiry' },
];

export default function SupplyLine() {
  useEffect(() => {
    let raf = 0;
    function draw() {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const t = max > 0 ? window.scrollY / max : 0;
      const w = window.innerWidth;
      const svg = document.getElementById('supply-svg');
      if (!svg) return;
      const drawPath = document.getElementById('supply-draw');
      if (drawPath) drawPath.style.strokeDashoffset = String(560 * (1 - t));
      STOPS.forEach((s, i) => {
        const x = ((i + 0.5) / STOPS.length) * 100;
        const dot = document.getElementById(`supply-dot-${i}`);
        if (dot) {
          dot.classList.toggle('done', t * 5 >= i + 0.45);
        }
        const el = document.getElementById(`supply-stop-${i}`);
        if (el) {
          el.style.left = `${x}%`;
          const target = document.getElementById(s.id);
          const past = target && target.getBoundingClientRect().top < window.innerHeight * 0.6;
          el.setAttribute('aria-current', past ? 'true' : 'false');
        }
      });
      svg.style.setProperty('--w', `${w}px`);
    }
    function onScroll() { if (!raf) raf = requestAnimationFrame(draw); }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    draw();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="supply-line" aria-label="Page progress">
      <svg id="supply-svg" viewBox="0 0 1000 44" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="34" x2="1000" y2="34" stroke="rgba(23,35,26,0.18)" strokeWidth="1" />
        <line id="supply-draw" className="supply-line__draw" x1="0" y1="34" x2="1000" y2="34"
          strokeDasharray="560" strokeDashoffset="560" strokeWidth="1.6" />
        {STOPS.map((_, i) => (
          <circle key={i} id={`supply-dot-${i}`} className="supply-line__dot"
            cx={((i + 0.5) / STOPS.length) * 1000} cy="34" r="3.2" />
        ))}
      </svg>
      {STOPS.map((s, i) => (
        <a key={s.id} id={`supply-stop-${i}`} className="supply-line__label" href={`#${s.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
