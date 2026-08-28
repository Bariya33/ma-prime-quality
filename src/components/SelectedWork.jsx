import { useMemo, useState } from 'react';
import { CATEGORIES, PROJECTS } from '../data/content.js';
import PortfolioItem from './PortfolioItem.jsx';
import ProjectViewer from './ProjectViewer.jsx';
import './SelectedWork.css';

export default function SelectedWork() {
  const [filter, setFilter] = useState('all');
  const [activePreviewId, setActivePreviewId] = useState(null);
  const [openProject, setOpenProject] = useState(null);

  const filtered = useMemo(
    () => (filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="work" className="selected-work">
      <div className="container">
        <div className="selected-work__header">
          <div>
            <div className="section-label">
              <span className="section-label__index"><li>SELECTED WORK</li></span>
            </div>
            <h2 className="selected-work__heading">SELECTED WORK</h2>
            <p className="selected-work__sub">Stories shaped frame by frame.</p>
          </div>
        </div>

        <div className="selected-work__filters" role="tablist" aria-label="Filter projects by category">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={filter === cat.key}
              className={`selected-work__filter ${filter === cat.key ? 'selected-work__filter--active' : ''}`}
              onClick={() => setFilter(cat.key)}
              data-cursor="OPEN"
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="selected-work__grid">
          {filtered.map((project) => (
            <PortfolioItem
              key={project.id}
              project={project}
              activePreviewId={activePreviewId}
              setActivePreviewId={setActivePreviewId}
              onOpen={setOpenProject}
            />
          ))}
        </div>
      </div>

      <ProjectViewer project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
