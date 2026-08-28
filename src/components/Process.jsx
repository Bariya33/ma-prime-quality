import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '../data/content.js';
import './Process.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );

      stepRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x: -30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="process">
      <div className="container">
        <div className="section-label">
          <span className="section-label__index">04 / EXPERIENCE</span>
        </div>
        <h2 className="process__heading">
          FROM RAW<br />TO REMARKABLE.
        </h2>

        <div className="process__timeline">
          <div className="process__spine">
            <div ref={lineRef} className="process__spine-fill" />
          </div>
          <ol className="process__steps">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.index} ref={(el) => (stepRefs.current[i] = el)} className="process__step">
                <span className="process__step-index">{step.index}</span>
                <span className="process__step-label">{step.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
