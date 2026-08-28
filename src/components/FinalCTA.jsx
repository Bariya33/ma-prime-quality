import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SITE } from '../data/content.js';
import './FinalCTA.css';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE.email
  )}&su=${encodeURIComponent(
    'Project Inquiry - MA Prime Quality'
  )}&body=${encodeURIComponent(
    'Hi MA Prime Quality,\n\nI want to discuss a video editing project.'
  )}`;

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 1.4,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      );

      gsap.fromTo(
        '.final-cta__reveal',
        {
          autoAlpha: 0,
          y: 24,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',

          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="final-cta"
    >

      <div
        ref={lineRef}
        className="final-cta__line gold-line"
      />

      <div className="container final-cta__content">

        <p className="eyebrow final-cta__reveal">
          HAVE A STORY TO TELL?
        </p>

        <h2 className="final-cta__heading final-cta__reveal">
          LET'S MAKE IT
          <br />
          UNFORGETTABLE.
        </h2>

        <div className="final-cta__actions final-cta__reveal">

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            data-cursor="OPEN"
          >
            START A PROJECT →
          </a>

          <a
            href="#work"
            className="final-cta__secondary"
            data-cursor="VIEW"
          >
            WATCH OUR WORK →
          </a>

        </div>

        <div className="final-cta__contacts final-cta__reveal">

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
          >
            WhatsApp
          </a>

          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
          >
            Instagram
          </a>

          <a
            href={SITE.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
          >
            YouTube
          </a>

          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
          >
            Facebook
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="OPEN"
          >
            Email Us
          </a>

        </div>

      </div>
    </section>
  );
}