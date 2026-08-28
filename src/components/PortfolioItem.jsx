import { useEffect, useRef } from 'react';
import { categoryGradient } from '../utils/placeholder.js';
import './PortfolioItem.css';

export default function PortfolioItem({ project, activePreviewId, setActivePreviewId, onOpen }) {
  const videoRef = useRef(null);
  const isPlaying = activePreviewId === project.id;

  useEffect(() => {
    if (!videoRef.current) return;

    if (!isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const handleEnter = () => {
    if (!project.video || window.matchMedia('(hover: none)').matches) return;

    setActivePreviewId(project.id);

    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {});
    });
  };

  const handleLeave = () => {
    if (!project.video) return;

    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;

    setActivePreviewId((current) => (current === project.id ? null : current));
  };

  return (
    <article
      className="portfolio-item"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project)}
      data-cursor={project.video ? 'WATCH' : 'VIEW'}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(project);
        }
      }}
      aria-label={`Open ${project.title}`}
    >
      <div className="portfolio-item__frame">
        {project.video ? (
          <video
            ref={videoRef}
            className="portfolio-item__media"
            src={project.video}
            poster={project.thumbnail || undefined}
            muted
            loop
            playsInline
            preload="none"
            style={{ opacity: isPlaying ? 1 : 0 }}
          />
        ) : null}

        {project.thumbnail ? (
          <img
            className="portfolio-item__media portfolio-item__media--img"
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            style={{ opacity: isPlaying && project.video ? 0 : 1 }}
          />
        ) : (
          <div
            className="portfolio-item__media portfolio-item__placeholder"
            style={{ background: categoryGradient(project.category), opacity: isPlaying ? 0.58 : 1 }}
          >
            <span className="portfolio-item__placeholder-label">{project.categoryLabel}</span>
          </div>
        )}

        <div className="portfolio-item__scrim" />
      </div>

      <div className="portfolio-item__meta">
        <div className="portfolio-item__top-row">
          <span className="portfolio-item__category">{project.categoryLabel}</span>
          <span className="portfolio-item__year">{project.year}</span>
        </div>

        <h3 className="portfolio-item__title">{project.title}</h3>
        <div className="portfolio-item__line gold-line" />
        <span className="portfolio-item__view">{project.video ? 'WATCH PROJECT →' : 'VIEW PROJECT →'}</span>
      </div>
    </article>
  );
}
