import React from 'react';
import { experience } from '@/data/portfolio';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.gridDecoration}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.intro}>
              I'm a passionate Full Stack Developer with 5+ years of experience building scalable, real-time web applications.
              My journey in software development has been driven by a love for solving complex problems and creating intuitive
              user experiences.
            </p>

            <div className={styles.highlight}>
              <h3>What I Do Best</h3>
              <ul>
                <li>Design and build responsive web applications using React and modern JavaScript</li>
                <li>Develop robust backend services with Python Django and Node.js</li>
                <li>Implement real-time features using WebSockets and modern APIs</li>
                <li>Integrate third-party services like Stripe, Twilio, and Firebase</li>
                <li>Optimize application performance and ensure scalability</li>
                <li>Lead frontend development in Agile/Scrum environments</li>
              </ul>
            </div>
          </div>

          <div className={styles.experience}>
            <h3 className={styles.experienceTitle}>Recent Professional Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.expHeader}>
                  <h4>{exp.company}</h4>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.position}>{exp.position}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Years Experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Major Projects</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>20+</div>
            <div className={styles.statLabel}>Technologies</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
