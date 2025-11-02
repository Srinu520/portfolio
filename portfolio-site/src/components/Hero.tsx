import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.accentGlow}></div>
      <div className={styles.gridOverlay}></div>
      <div className={styles.lightBeam}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeRow}>
            <span className={styles.badge}>// Crafting delightful digital experiences</span>
            <span className={styles.badgeStatus}>
              <span className={styles.pulseDot}></span>
              Open to collaborations
            </span>
          </div>

          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.highlight}>Srinu Duggempudi</span>
          </h1>
          <p className={styles.subtitle}>
            Full Stack Engineer blending <span>React</span>, <span>Django</span>, and cloud-native tooling to launch resilient products.
          </p>
          <p className={styles.description}>
            With 5+ years building secure, real-time platforms, I help teams move ideas from roadmap to release. From rapid
            prototypes to enterprise ecosystems, I focus on performance, accessibility, and developer experience.
          </p>

          <div className={styles.ctaRow}>
            <a href="#projects" className={styles.primaryBtn}>
              Explore Projects
              <span className={styles.btnGlow}></span>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Book a Discovery Call
            </a>
            <div className={styles.responseBadge}>
              <span className={styles.responseDot}></span>
              Avg. response time: <strong>24h</strong>
            </div>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatarStack}>
              <span className={styles.avatar}></span>
              <span className={styles.avatar}></span>
              <span className={styles.avatar}></span>
              <span className={styles.avatar}></span>
            </div>
            <p className={styles.socialText}>
              Partnering with fintech, healthtech, and AI teams to build real-time, human-centered experiences.
            </p>
          </div>
        </div>

        <div className={styles.showcase}>
          <div className={styles.orb}></div>
          <div className={styles.ring}></div>

          <div className={styles.glassCard}>
            <span className={styles.cardTag}>Live Project</span>
            <h3>Realtime Analytics Suite</h3>
            <p>
              Streaming dashboards, anomaly detection, and automated reporting delivering insights 30% faster for global teams.
            </p>
            <div className={styles.cardFooter}>
              <span className={styles.cardMetric}>
                <span className={styles.metricNumber}>+120%</span>
                Engagement
              </span>
              <span className={styles.cardMetric}>
                <span className={styles.metricNumber}>99.9%</span>
                Uptime
              </span>
            </div>
          </div>

          <div className={styles.codeSnippet}>
            <div className={styles.codeHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <pre className={styles.pre}>
{`const pipeline = buildPipeline({
  stack: ['React', 'Django', 'AWS'],
  metrics: { availability: '99.9%', latency: '<120ms' },
});

launchProduct({
  featureFlags: true,
  release: 'global',
});`}
            </pre>
          </div>

          <div className={styles.floatingBadge}>
            <span className={styles.badgeIcon}>//</span>
            <div>
              <strong>Performance-first mindset</strong>
              <span>Optimized CI/CD, automated QA, and measurable outcomes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
