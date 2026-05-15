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
            <span className={styles.badge}>Senior full-stack execution for founders and operators</span>
            <span className={styles.badgeStatus}>
              <span className={styles.pulseDot}></span>
              Taking select builds
            </span>
          </div>

          <h1 className={styles.title}>
            Stop losing money on <span className={styles.titleAccent}>broken workflows.</span> I build custom web apps that
            automate your operations.
          </h1>
          <p className={styles.subtitle}>
            From rapid MVPs for startups to internal tools for scaling businesses. No bloated agency teams--just senior-level execution.
          </p>

          <div className={styles.ctaRow}>
            <a href="#contact" className={styles.primaryBtn}>
              Book a Discovery Call
              <span className={styles.btnGlow}></span>
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              View Case Studies
            </a>
          </div>

          <div className={styles.proofStrip} aria-label="Experience proof points">
            <span>6+ Years Experience</span>
            <span>React + Python/Django</span>
            <span>MVPs, Automations, Internal Tools</span>
          </div>
        </div>

        <div className={styles.showcase} aria-label="Example project delivery dashboard">
          <div className={styles.browserCard}>
            <div className={styles.browserBar}>
              <div className={styles.windowDots} aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>ops-build-board.srinud.com</span>
              <strong>Live sprint</strong>
            </div>

            <div className={styles.dashboardGrid}>
              <div className={styles.kpiCard}>
                <span>Typical MVP sprint</span>
                <strong>4-8 weeks</strong>
              </div>
              <div className={styles.kpiCard}>
                <span>Delivery model</span>
                <strong>Solo senior</strong>
              </div>
              <div className={styles.kpiCard}>
                <span>Core output</span>
                <strong>Working app</strong>
              </div>
            </div>

            <div className={styles.workflowPanel}>
              <div className={styles.panelHeader}>
                <span className={styles.cardTag}>Build Plan</span>
                <p>From messy process to working software</p>
              </div>

              <div className={styles.workflowList}>
                <div className={styles.workflowItem}>
                  <span className={styles.workflowNumber}>01</span>
                  <div>
                    <strong>Map the revenue leak</strong>
                    <p>Find manual handoffs, missing data, and slow approvals costing the business time.</p>
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

            <div className={styles.integrationRail}>
              <span>Auth</span>
              <span>Billing</span>
              <span>Dashboards</span>
              <span>APIs</span>
              <span>Support</span>
            </div>
          </div>

          <div className={styles.metricPanel}>
            <div>
              <span className={styles.metricLabel}>Best for</span>
              <strong>Non-technical founders</strong>
            </div>
            <div>
              <span className={styles.metricLabel}>Also for</span>
              <strong>Mid-market ops teams</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
