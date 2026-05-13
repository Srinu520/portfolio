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
          </div>
          <div>
            <span>02</span>
            <strong>Less handoff risk</strong>
          </div>
          <div>
            <span>03</span>
            <strong>Faster feedback loops</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoloAdvantage;
