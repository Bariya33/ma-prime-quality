import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../data/content.js';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const frameRefs = useRef([]);
  const headingRef = useRef(null);

  // Hero ke 3 floating videos
  const heroVideos = [
    PROJECTS[0],
    PROJECTS[2],
    PROJECTS[5],
    PROJECTS[9],
    PROJECTS[12],
    PROJECTS[14],
    PROJECTS[17],
  ];

  // Bottom moving timeline ke liye 6 videos
  // Repeat kiye gaye hain taaki continuous loop smooth lage
  const timelineVideos = [
    ...PROJECTS.slice(0, 6),
    ...PROJECTS.slice(0, 6),
  ];

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      '.hero__label',
      { autoAlpha: 0, y: 12 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      }
    )
      .fromTo(
        headingRef.current.querySelectorAll('.reveal-mask span'),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          ease: 'power4.out',
          stagger: 0.08,
        },
        '-=0.3'
      )
      .fromTo(
        '.hero__sub',
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
        },
        '-=0.5'
      )
      .fromTo(
        '.hero__cta',
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
        },
        '-=0.6'
      )
      .fromTo(
        frameRefs.current,
        {
          autoAlpha: 0,
          y: 30,
          scale: 0.94,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.3,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=1'
      );

    const onMove = (e) => {
      if (window.matchMedia('(hover: none)').matches) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;

      frameRefs.current.forEach((el, i) => {
        if (!el) return;

        const depth = (i + 1) * 6;

        gsap.to(el, {
          x: x * depth,
          y: y * depth,
          duration: 1.2,
          ease: 'power2.out',
        });
      });
    };

    window.addEventListener('mousemove', onMove);

    return () => {
      tl.kill();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero"
    >
      {/* Moving Video Timeline */}
      <div
        className="hero__timeline"
        aria-hidden="true"
      >
        <div className="hero__timeline-track">
          {timelineVideos.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="hero__timeline-tick"
            >
              <video
                className="hero__timeline-video"
                src={project.video}
                poster={project.thumbnail || undefined}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
              />

              <div className="hero__timeline-overlay" />

              <span className="hero__timeline-label">
                {project.categoryLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Real Video Frames */}
      <div
        className="hero__frames"
        aria-hidden="true"
      >
        {heroVideos.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              frameRefs.current[index] = el;
            }}
            className={`hero__frame hero__frame--${
              ['a', 'b', 'c', 'd', 'e', 'f', 'g'][index]
            }`}
          >
            <video
              className="hero__frame-video"
              src={project.video}
              poster={project.thumbnail || undefined}
              muted
              loop
              autoPlay
              playsInline
              preload="metadata"
            />

            <div className="hero__frame-overlay" />

            <span className="hero__frame-label">
              {project.categoryLabel}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container hero__content">
        <p className="eyebrow hero__label">
          MA PRIME QUALITY / 01
        </p>

        <h1
          ref={headingRef}
          className="hero__heading"
        >
          <span className="reveal-mask">
            <span>EVERY FRAME</span>
          </span>

          <span className="reveal-mask">
            <span>HAS A PURPOSE.</span>
          </span>
        </h1>

        <p className="hero__sub">
          Cinematic editing crafted to turn footage into
          stories, experiences and moments that stay.
        </p>

        <a
          href="#work"
          className="hero__cta"
          data-cursor="VIEW"
        >
          VIEW OUR WORK
          <span>→</span>
        </a>
      </div>

      <div
        className="hero__scroll-cue"
        aria-hidden="true"
      >
        <span />
      </div>
    </section>
  );
}