import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SITE } from '../data/content.js';
import './Intro.css';

export default function Intro({ onEnter }) {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const lineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.set(rootRef.current, { autoAlpha: 1 })
      .fromTo(
        logoRef.current,
        { autoAlpha: 0, scale: 0.86, filter: 'blur(6px)' },
        { autoAlpha: 1, scale: 1, filter: 'blur(0px)', duration: 2.1, ease: 'power2.out' }
      )
      .fromTo(
        titleRef.current.children,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12 },
        '-=0.9'
      )
      .fromTo(
        taglineRef.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.3, ease: 'power2.inOut' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' },
        '-=0.6'
      );

    return () => tl.kill();
  }, []);

  const handleEnter = () => {
    const tl = gsap.timeline({
      onComplete: () => onEnter(),
    });
    tl.to([logoRef.current, titleRef.current, taglineRef.current, lineRef.current, ctaRef.current], {
      autoAlpha: 0,
      y: -16,
      duration: 0.6,
      ease: 'power2.in',
      stagger: 0.04,
    }).to(
      rootRef.current,
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.01,
      },
      0
    ).to(
      '.intro__curtain',
      {
        scaleY: 1,
        duration: 0.9,
        ease: 'power4.inOut',
      },
      0.1
    );
  };

  return (
    <div ref={rootRef} className="intro" role="dialog" aria-label="Intro">
      <div className="intro__curtain" aria-hidden="true" />
      <div className="intro__content">
        <div className="intro__logo-mask">
          <img ref={logoRef} src={SITE.logo} alt={`${SITE.name} logo`} className="intro__logo" />
        </div>
        <div ref={titleRef} className="intro__title">
          <span className="reveal-mask"><span>MA PRIME QUALITY</span></span>
          <span className="reveal-mask intro__title-sub"><span>EDITORS</span></span>
        </div>
        <p ref={taglineRef} className="intro__tagline">{SITE.quote}</p>
        <div ref={lineRef} className="intro__line gold-line" />
        <button ref={ctaRef} className="intro__cta" onClick={handleEnter} data-cursor="OPEN">
          ENTER EXPERIENCE <span className="intro__cta-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
