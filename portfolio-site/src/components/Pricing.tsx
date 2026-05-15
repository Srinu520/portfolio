import React from 'react';
import styles from './Pricing.module.css';

const packages = [
  {
    tier: 'Tier 1',
    name: 'Scoping & Architecture',
    description: 'Paid discovery, wireframes, technical roadmap.',
    bestFor: 'Founders who need a clear plan before committing build budget.',
    features: ['Workflow map', 'Feature priority', 'Technical roadmap'],
  },
  {
    tier: 'Tier 2',
    name: 'The MVP Sprint',
    description: '4-8 weeks of focused build, fixed scope, fixed price.',
    bestFor: 'Startups that need a useful V1 in market without a long agency cycle.',
    features: ['Auth + core flows', 'Clean product UI', 'Launch-ready handoff'],
    featured: true,
  },
  {
    tier: 'Tier 3',
    name: 'Tech Partner Retainer',
    description: 'Ongoing hosting, security updates, and monthly feature hours.',
    bestFor: 'Businesses that need a reliable senior developer after launch.',
    features: ['Monthly feature hours', 'Bug/security fixes', 'Hosting support'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Pricing & Packages</span>
          <h2>Clear engagement paths before we talk numbers.</h2>
          <p>
            Every project starts with the scope, risk, and expected business value. These packages anchor the conversation.
          </p>
        </div>

        <div className={styles.table}>
          {packages.map((item) => (
            <article key={item.name} className={`${styles.packageCard} ${item.featured ? styles.featured : ''}`}>
              <span className={styles.tier}>{item.tier}</span>
              {item.featured && <span className={styles.recommended}>Most common</span>}
              <h3>{item.name}</h3>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.bestFor}>{item.bestFor}</p>
              <ul className={styles.featureList}>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.packageCta}>
                Discuss Fit
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
