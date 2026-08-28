import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

/**
 * Premium custom cursor: small dot by default, expands with contextual
 * label text when hovering elements carrying [data-cursor="LABEL"].
 * Disabled on touch/coarse-pointer devices via CSS (see CustomCursor.css).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);
  const [label, setLabel] = useState('');
  const [active, setActive] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setLabel(target.getAttribute('data-cursor'));
        setActive(true);
      } else {
        setActive(false);
      }
    };

    let raf;
    const animateRing = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };
    raf = requestAnimationFrame(animateRing);

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring ${active ? 'cursor-ring--active' : ''}`} aria-hidden="true">
        <span ref={labelRef} className="cursor-ring__label">{label}</span>
      </div>
    </>
  );
}
