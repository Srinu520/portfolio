'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { projects } from '@/data/portfolio';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const activeProject = useMemo(() => projects.find((project) => project.id === selectedProject) ?? null, [selectedProject]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Business Case Studies</span>
          <h2 className={styles.title}>Work framed by the business problem, not the stack.</h2>
          <p className={styles.subtitle}>
            These projects show the kind of product and operations work I take on: real workflows, paid users, integrations, and measurable business movement.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <header className={styles.cardHeader}>
                <span className={styles.projectIndex}>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p className={styles.industry}>{project.clientIndustry}</p>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
              </header>

              <div className={styles.caseBody}>
                <div className={styles.caseRow}>
                  <span>The Problem</span>
                  <p>{project.problem}</p>
                </div>
                <div className={styles.caseRow}>
                  <span>The Solution</span>
                  <p>{project.solution}</p>
                </div>
                <div className={styles.caseRow}>
                  <span>The Result</span>
                  <p>{project.result}</p>
                </div>
              </div>

              <footer className={styles.cardFooter}>
                <div className={styles.techStack} aria-label={`${project.title} technology stack`}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && <span className={styles.tech}>+{project.technologies.length - 4}</span>}
                </div>

                <div className={styles.cardActions}>
                  {(project.live || project.link) && (
                    <a className={styles.cta} href={project.live || project.link} target="_blank" rel="noopener noreferrer">
                      View Live
                    </a>
                  )}
                  <button
                    className={styles.expandBtn}
                    onClick={() => setSelectedProject(project.id)}
                    aria-label={`Read ${project.title} case study details`}
                  >
                    Details
                  </button>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      {activeProject &&
        isMounted &&
        createPortal(
          <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={() => setSelectedProject(null)}>
            <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study"
                title="Close"
              >
                <span className={styles.closeIcon} aria-hidden="true" />
                <span>Close</span>
              </button>

              <div className={styles.modalHeader}>
                <p className={styles.industry}>{activeProject.clientIndustry}</p>
                <h3 className={styles.modalTitle}>{activeProject.title}</h3>
              </div>

              <div className={styles.modalBody}>
                <p className={styles.modalDesc}>{activeProject.longDescription}</p>

                <div className={styles.modalGrid}>
                  <section>
                    <h4>The Problem</h4>
                    <p>{activeProject.problem}</p>
                  </section>
                  <section>
                    <h4>The Solution</h4>
                    <p>{activeProject.solution}</p>
                  </section>
                  <section>
                    <h4>The Result</h4>
                    <p>{activeProject.result}</p>
                  </section>
                </div>

                <div className={styles.highlights}>
                  <h4>Build Highlights</h4>
                  <ul>
                    {activeProject.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.allTechs}>
                  <h4>Technology Used</h4>
                  <div className={styles.techGridFull}>
                    {activeProject.technologies.map((tech) => (
                      <span key={tech} className={styles.techFull}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.modalActions}>
                  <button type="button" className={styles.modalCloseAction} onClick={() => setSelectedProject(null)}>
                    Close details
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Projects;
