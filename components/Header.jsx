'use client';

import { useEffect, useRef, useState } from 'react';
import { asset } from '../lib/site';

const LINKS = [
  ['/about/', 'About'],
  ['/divisions/', 'Divisions'],
  ['/coverage/', 'Coverage'],
  ['/how-we-work/', 'How we work'],
].map(([href, label]) => [asset(href), label]);

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathRef = useRef('');
  const [, force] = useState(0);

  useEffect(() => {
    pathRef.current = window.location.pathname;
    force((n) => n + 1);
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <header className="site-bar">
      <div className="site-bar__in">
        <a className="site-bar__mark" href={asset('/')} aria-label="Braeveld Boerdery Group, home">
          <img src={asset('/logo-full.svg')} alt="Braeveld Boerdery Group" width="343" height="111" />
        </a>
        <nav className="site-bar__nav" aria-label="Primary">
          {LINKS.map(([href, label]) => (
            <a key={href} className="site-bar__link" href={href} aria-current={pathRef.current === href || pathRef.current.startsWith(href) ? 'page' : undefined}>
              {label}
            </a>
          ))}
          <a className="btn" href={asset('/contact/')}>Contact</a>
        </nav>
        <button
          className="site-bar__burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span /><span /><span />
        </button>
      </div>

      <nav className="menu" aria-label="Mobile" hidden={!open}>
        <button className="menu__close" onClick={() => setOpen(false)}>Close</button>
        <ul className="menu__list">
          {[[asset('/'), 'Home'], ...LINKS, [asset('/contact/'), 'Contact']].map(([href, label]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <p className="menu__foot">
          Building Partnerships. Supplying Quality. Growing Together.<br />
          <a href="https://studio.tangison.com">Made by Tangison Studio</a>
        </p>
      </nav>
    </header>
  );
}
