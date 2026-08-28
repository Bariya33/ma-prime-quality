import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './BehindTheEdit.css';

gsap.registerPlugin(ScrollTrigger);

export default function BehindTheEdit() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.fromTo(
        '.behind-edit__statement .reveal-mask span',
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="behind-edit">
      <div ref={visualRef} className="behind-edit__visual" aria-hidden="true" />
      <div className="behind-edit__scrim" />
      <div className="container behind-edit__content">
        <div className="section-label">
          <span className="section-label__index">BEHIND THE EDIT</span>
        </div>
        <h2 className="behind-edit__statement">
          <span className="reveal-mask"><span>THE EDIT IS WHERE</span></span>
          <span className="reveal-mask"><span>THE STORY COMES ALIVE.</span></span>
        </h2>
        <p className="behind-edit__copy">
          Great editing is invisible. It lives in the timing of a cut, the weight of a transition, the
          silence before a sound hits. We treat every project as a composition of pace, color and
          emotion — layering sound design and visual rhythm until the footage stops feeling like clips
          and starts feeling like a memory.
        </p>
      </div>
    </section>
  );
}
