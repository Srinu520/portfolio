'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeTech, setActiveTech] = useState<string>('All');

  const topTechs = useMemo(() => {
    const freq = new Map<string, number>();
    projects.forEach((p) => p.technologies.forEach((t) => freq.set(t, (freq.get(t) ?? 0) + 1)));
    return Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([t]) => t);
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTech === 'All') return projects;
    return projects.filter((p) => p.technologies.includes(activeTech));
  }, [activeTech]);

  const activeProject = useMemo(() => projects.find((p) => p.id === selectedProject) ?? null, [selectedProject]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (activeProject) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeProject]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of my most impactful projects showcasing full-stack development expertise
        </p>
        <div className={styles.filtersBar}>
          {['All', ...topTechs].map((tech) => (
            <button
              key={tech}
              className={`${styles.filterChip} ${activeTech === tech ? styles.filterChipActive : ''}`}
              onClick={() => setActiveTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>{index + 1}</div>
                <div className={styles.titleGroup}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.metaBar}>
                    <span className={styles.roleChip}>{project.role}</span>
                    <span className={styles.metaItem}>{project.technologies.length} tech</span>
                    <span className={styles.metaItem}>{project.highlights.length} highlights</span>
                  </div>
                </div>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span
                    className={`${styles.tech} ${styles.techMore}`}
                    aria-label={`${project.technologies.length - 5} more technologies`}
                  >
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>

              <div className={styles.cardActions}>
                {(project.live || project.link) && (
                  <a
                    className={styles.cta}
                    href={project.live || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                )}
                {project.source && (
                  <a className={styles.ctaSecondary} href={project.source} target="_blank" rel="noopener noreferrer">
                    Source
                  </a>
                )}
                <button className={styles.expandBtn} onClick={() => setSelectedProject(project.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={() => setSelectedProject(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)} aria-label="Close">
              ×
            </button>

            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{activeProject.title}</h3>
              <span className={styles.roleChip}>{activeProject.role}</span>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.modalDesc}>{activeProject.longDescription}</p>

              <div className={styles.highlights}>
                <h4>Key Highlights</h4>
                <ul>
                  {activeProject.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.allTechs}>
                <h4>Technologies Used</h4>
                <div className={styles.techGridFull}>
                  {activeProject.technologies.map((tech) => (
                    <span key={tech} className={styles.techFull}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.ctaBar}>
                {(activeProject.live || activeProject.link) && (
                  <a
                    className={styles.cta}
                    href={activeProject.live || activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live
                  </a>
                )}
                {activeProject.source && (
                  <a className={styles.ctaSecondary} href={activeProject.source} target="_blank" rel="noopener noreferrer">
                    View Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
