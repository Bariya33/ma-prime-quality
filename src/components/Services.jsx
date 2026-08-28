import { useRef, useState } from 'react';
import { SERVICES, PROJECTS } from '../data/content.js';
import './Services.css';

const SERVICE_PROJECT_MAP = [
  'cars-bikes-01',   // VIDEO EDITING
  'event-02',        // WEDDING FILMS
  'cars-bikes-02',   // AUTOMOTIVE EDITS
  'event-01',        // EVENT AFTERMOVIES
  'promotional-01',  // BRAND PROMOTIONS
  'random-01',       // SOCIAL MEDIA CONTENT
];

export default function Services() {
  const [active, setActive] = useState(null);
  const videoRefs = useRef([]);

  const getProjectForService = (index) => {
    const projectId = SERVICE_PROJECT_MAP[index];
    return PROJECTS.find((project) => project.id === projectId);
  };

  const handleEnter = (index) => {
    setActive(index);

    const video = videoRefs.current[index];

    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  const handleLeave = (index) => {
    const video = videoRefs.current[index];

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleListLeave = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    setActive(null);
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-label">
          <span className="section-label__index">
            03 / WHAT WE CREATE
          </span>
        </div>

        <h2 className="services__heading">
          WHAT WE CREATE
        </h2>

        <ul
          className="services__list"
          onMouseLeave={handleListLeave}
        >
          {SERVICES.map((service, i) => {
            const project = getProjectForService(i);

            return (
              <li
                key={service.index}
                className={`services__item ${
                  active === i
                    ? 'services__item--active'
                    : ''
                }`}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={() => handleLeave(i)}
                data-cursor="EXPLORE"
              >
                <div className="services__row">
                  <span className="services__index">
                    {service.index}
                  </span>

                  <span className="services__title">
                    {service.title}
                  </span>

                  <div
                    className="services__preview"
                    aria-hidden="true"
                  >
                    {project?.video ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[i] = el;
                        }}
                        className="services__preview-video"
                        src={project.video}
                        poster={project.thumbnail || undefined}
                        muted
                        loop
                        playsInline
                        preload="none"
                      />
                    ) : (
                      <div className="services__preview-fallback" />
                    )}

                    <div className="services__preview-overlay" />

                    {project && (
                      <span className="services__preview-label">
                        {project.categoryLabel}
                      </span>
                    )}
                  </div>
                </div>

                <div className="services__detail">
                  <p>{service.description}</p>

                  <span className="gold-line services__detail-line" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}