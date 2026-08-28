import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { categoryGradient } from '../utils/placeholder.js';
import './ProjectViewer.css';

export default function ProjectViewer({ project, onClose }) {
  const overlayRef = useRef(null);
  const videoRef = useRef(null);
  const closingRef = useRef(false);

  const closeViewer = () => {
    if (!project || closingRef.current) return;
    closingRef.current = true;

    if (videoRef.current) {
      videoRef.current.pause();
    }

    gsap.to('.project-viewer__stage', {
      scale: 0.97,
      autoAlpha: 0,
      duration: 0.28,
      ease: 'power2.in',
    });

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      duration: 0.38,
      ease: 'power2.in',
      onComplete: () => {
        closingRef.current = false;
        onClose();
      },
    });
  };

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = 'hidden';
    closingRef.current = false;

    gsap.fromTo(
      overlayRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '.project-viewer__stage',
      { scale: 0.94, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );

    const onKey = (e) => {
      if (e.key === 'Escape') closeViewer();
    };

    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      ref={overlayRef}
      className="project-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project viewer`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeViewer();
      }}
    >
      <button className="project-viewer__close" onClick={closeViewer} data-cursor="CLOSE">
        CLOSE ✕
      </button>

      <div className="project-viewer__stage">
        {project.video ? (
          <video
            ref={videoRef}
            className="project-viewer__media"
            src={project.video}
            poster={project.thumbnail || undefined}
            controls
            autoPlay
            playsInline
            preload="metadata"
          />
        ) : project.thumbnail ? (
          <img className="project-viewer__media" src={project.thumbnail} alt={project.title} />
        ) : (
          <div
            className="project-viewer__media project-viewer__placeholder"
            style={{ background: categoryGradient(project.category) }}
          >
            <span>{project.categoryLabel}</span>
          </div>
        )}
      </div>

      <div className="project-viewer__info">
        <div className="project-viewer__top">
          <span className="eyebrow">{project.categoryLabel}</span>
          <span className="project-viewer__year">{project.year}</span>
        </div>
        <h3 className="project-viewer__title">{project.title}</h3>
        <p className="project-viewer__desc">{project.description}</p>
      </div>
    </div>
  );
}
