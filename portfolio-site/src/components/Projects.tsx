import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.orbitContainer}>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
        <div className={styles.orbitTrack}>
          <div className={styles.orbitDot}></div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A selection of my most impactful projects showcasing full-stack development expertise
        </p>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.projectIcon}>{index + 1}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>

              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={styles.tech}>+{project.technologies.length - 3}</span>
                )}
              </div>

              <button className={styles.expandBtn} onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}>
                {selectedProject === project.id ? 'Show Less' : 'View Details'}
              </button>

              {selectedProject === project.id && (
                <div className={styles.expandedContent}>
                  <div className={styles.longDesc}>
                    <h4>Project Overview</h4>
                    <p>{project.longDescription}</p>
                  </div>

                  <div className={styles.roleSection}>
                    <h4>Role</h4>
                    <p>{project.role}</p>
                  </div>

                  <div className={styles.highlights}>
                    <h4>Key Highlights</h4>
                    <ul>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.allTechs}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techGridFull}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techFull}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;