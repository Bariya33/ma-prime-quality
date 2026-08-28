import { useState } from 'react';
import { PRINCIPLES } from '../data/content.js';
import './WhyPrimeQuality.css';

export default function WhyPrimeQuality() {
  const [active, setActive] = useState(null);

  return (
    <section className="why">
      <div className="container">
        <div className="section-label">
          <span className="section-label__index"><li>WHY PRIME QUALITY</li></span>
        </div>
        <div className="why__grid">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.index}
              className={`why__card ${active === i ? 'why__card--active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              data-cursor="EXPLORE"
            >
              <span className="why__index">{p.index}</span>
              <h3 className="why__title">{p.title}</h3>
              <span className="gold-line why__line" />
              <p className="why__desc">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
