import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { NAV_LINKS, SITE } from '../data/content.js';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (open) {
      document.body.style.overflow = 'hidden';
      gsap.set(overlayRef.current, { autoAlpha: 1 });
      gsap.fromTo(
        overlayRef.current,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power4.inOut' }
      );
      gsap.fromTo(
        itemsRef.current,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.07, delay: 0.25 }
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(overlayRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.6,
        ease: 'power3.inOut',
        onComplete: () => gsap.set(overlayRef.current, { autoAlpha: 0 }),
      });
    }
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className="navbar">
        <a href="#home" className="navbar__brand" data-cursor="HOME">
          <img src={SITE.logo} alt={SITE.name} className="navbar__logo" />
          <span className="navbar__brand-text">MA PRIME QUALITY</span>
        </a>
        <button
          className={`navbar__menu-btn ${open ? 'navbar__menu-btn--open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          data-cursor={open ? 'CLOSE' : 'MENU'}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span className="navbar__menu-label">{open ? 'CLOSE' : 'MENU'}</span>
          <span className="navbar__menu-icon">
            <span />
            <span />
          </span>
        </button>
      </header>

      <nav ref={overlayRef} className="menu-overlay" aria-hidden={!open}>
        <ul className="menu-overlay__list">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              ref={(el) => (itemsRef.current[i] = el)}
              className="menu-overlay__item"
            >
              <a href={link.href} onClick={handleLinkClick} data-cursor="OPEN">
                <span className="menu-overlay__index">{link.index}</span>
                <span className="menu-overlay__label">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-overlay__footer">
          <span className="eyebrow">{SITE.instagramHandle}</span>
          <span className="eyebrow">{SITE.email}</span>
        </div>
      </nav>
    </>
  );
}
