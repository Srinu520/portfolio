import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridOverlay}></div>
      <div className={styles.lightBeam}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>Custom B2B software for founders and operators</span>
            <span className={styles.badgeStatus}>
              <span className={styles.pulseDot}></span>
              Taking select builds
            </span>
          </div>

          <h1 className={styles.title}>Stop losing money on broken workflows. I build custom web apps that automate your operations.</h1>
          <p className={styles.subtitle}>
            From rapid MVPs for startups to internal tools for scaling businesses. No bloated agency teams--just senior-level execution.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.primaryBtn}>
              Book a Discovery Call
              <span className={styles.btnGlow}></span>
            </a>
            <a href="#services" className={styles.secondaryBtn}>
              See Services
            </a>
          </div>

          <p className={styles.socialProof}>6+ Years Experience | Specializing in React &amp; Python/Django Ecosystems</p>
        </div>

        <div className={styles.showcase} aria-label="Example project delivery dashboard">
          <div className={styles.planCard}>
            <span className={styles.cardTag}>Build Plan</span>
            <h2>From messy process to working software</h2>
            <div className={styles.workflowList}>
              <div className={styles.workflowItem}>
                <span className={styles.workflowNumber}>01</span>
                <div>
                  <strong>Map the revenue leak</strong>
                  <p>Find the manual handoffs, missing data, and slow approvals costing the business time.</p>
                </div>
              </div>
              <div className={styles.workflowItem}>
                <span className={styles.workflowNumber}>02</span>
                <div>
                  <strong>Ship the first useful version</strong>
                  <p>Auth, dashboards, billing, workflows, and APIs built around the highest-value job.</p>
                </div>
              </div>
              <div className={styles.workflowItem}>
                <span className={styles.workflowNumber}>03</span>
                <div>
                  <strong>Improve after launch</strong>
                  <p>Measure usage, remove friction, and roll out the next feature set without drama.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.metricPanel}>
            <div>
              <span className={styles.metricLabel}>Typical sprint</span>
              <strong>4-8 weeks</strong>
            </div>
            <div>
              <span className={styles.metricLabel}>Core focus</span>
              <strong>MVPs + internal tools</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
