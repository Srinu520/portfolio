import React from 'react';
import styles from './SoloAdvantage.module.css';

const SoloAdvantage: React.FC = () => {
  return (
    <section id="solo-advantage" className={styles.soloAdvantage}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Solo Advantage</span>
          <h2>Why work with a Solo Engineer?</h2>
          <p>
            When you hire a traditional agency, you pay for their account managers and their bench of junior developers.
            When you hire me, you get a senior developer with battle-tested experience. No middle-men. You talk directly
            to the person writing the code.
          </p>
        </div>

        <div className={styles.points} aria-label="Solo engineer engagement advantages">
          <div>
            <span>01</span>
            <strong>Direct technical decisions</strong>
            <p>No account-manager relay before scope or product decisions move.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Less handoff risk</strong>
            <p>The same person understands the business problem and the code.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Faster feedback loops</strong>
            <p>Shorter path from your feedback to the next working version.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloAdvantage;
