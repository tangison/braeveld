'use client';

import { useRef } from 'react';

export default function Carousel({ children, label }) {
  const track = useRef(null);
  const page = (dir) => {
    const el = track.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
  };
  return (
    <div className="carousel">
      <div className="carousel__track" ref={track} tabIndex="0" aria-label={label}>
        {children}
      </div>
      <div className="carousel__nav">
        <button type="button" className="carousel__btn" aria-label="Previous photo" onClick={() => page(-1)}>&larr;</button>
        <button type="button" className="carousel__btn" aria-label="Next photo" onClick={() => page(1)}>&rarr;</button>
      </div>
    </div>
  );
}
