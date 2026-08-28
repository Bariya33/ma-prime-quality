import { useRef } from 'react';
import { SITE, PROJECTS } from '../data/content.js';
import { categoryGradient } from '../utils/placeholder.js';
import './Social.css';

const featured = PROJECTS.slice(0, 5);

function SocialTile({ item }) {
  const videoRef = useRef(null);

  const playPreview = () => {
    if (!item.video || !videoRef.current) return;
    videoRef.current.play().catch(() => {});
  };

  const stopPreview = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <a
      href={SITE.instagramUrl}
      target="_blank"
      rel="noreferrer"
      className="social__tile"
      data-cursor="OPEN"
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      style={!item.video && !item.thumbnail ? { background: categoryGradient(item.category) } : undefined}
    >
      {item.video ? (
        <video
          ref={videoRef}
          className="social__tile-media"
          src={item.video}
          poster={item.thumbnail || undefined}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      ) : item.thumbnail ? (
        <img
          className="social__tile-media"
          src={item.thumbnail}
          alt=""
          loading="lazy"
          aria-hidden="true"
        />
      ) : null}

      <div className="social__tile-scrim" aria-hidden="true" />
      <span className="social__tile-label">{item.categoryLabel}</span>
    </a>
  );
}

export default function Social() {
  return (
    <section className="social">
      <div className="container">
        <div className="social__header">
          <div>
            <div className="section-label">
              <span className="section-label__index"><li>FOLLOW THE EDIT</li></span>
            </div>
            <h2 className="social__heading">FOLLOW THE EDIT</h2>
            <span className="eyebrow social__handle">{SITE.instagramHandle}</span>
          </div>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            data-cursor="OPEN"
          >
            FOLLOW ON INSTAGRAM →
          </a>
        </div>

        <div className="social__strip">
          {featured.map((item) => (
            <SocialTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
