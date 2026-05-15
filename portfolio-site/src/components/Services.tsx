import React from 'react';
import styles from './Services.module.css';

type ServiceIcon = 'rocket' | 'workflow' | 'support';

interface ServiceCard {
  icon: ServiceIcon;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
}

const services: ServiceCard[] = [
  {
    icon: 'rocket',
    title: 'Rapid MVP Development',
    problem: 'Startups burn cash waiting 6+ months for a V1.',
    solution:
      'Secure auth, core feature logic, billing, and a clean UI shipped in weeks so you can start acquiring users.',
    outcome: 'Launch a paid or testable product before momentum dies.',
  },
  {
    icon: 'workflow',
    title: 'Workflow Automation & Internal Tools',
    problem: 'Teams bleed hours copy-pasting data across disconnected tools.',
    solution:
      'Custom dashboards that link your APIs, sync databases, and automate your manual operational tasks.',
    outcome: 'Recover team hours and make operations easier to audit.',
  },
  {
    icon: 'support',
    title: 'Legacy App Modernization & Support',
    problem: "Software isn't a one-and-done project. Legacy systems get slow and break.",
    solution:
      'Retainer-based monthly support, tech stack migrations, and iterative feature rollouts.',
    outcome: 'Keep the product stable while adding features that matter.',
  },
];

const ServiceIcon: React.FC<{ type: ServiceIcon }> = ({ type }) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (type === 'rocket') {
    return (
      <svg {...commonProps}>
        <path d="M5 15c-1.2 1-1.8 2.3-2 4 1.7-.2 3-.8 4-2" />
        <path d="M9 15 7 17" />
        <path d="M14 4c2.8-.7 4.7-.3 6 1-1 5-4 8.5-9 10l-4-4c1.5-5 5-8 7-7Z" />
        <path d="M15 9h.01" />
      </svg>
    );
  }

  if (type === 'workflow') {
    return (
      <svg {...commonProps}>
        <rect x="3" y="4" width="6" height="5" rx="1.2" />
        <rect x="15" y="4" width="6" height="5" rx="1.2" />
        <rect x="9" y="15" width="6" height="5" rx="1.2" />
        <path d="M9 6.5h6" />
        <path d="M6 9v2.5c0 1.4 1.1 2.5 2.5 2.5H12v1" />
        <path d="M18 9v2.5c0 1.4-1.1 2.5-2.5 2.5H12v1" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3 5 6v5c0 4.2 2.8 7.8 7 10 4.2-2.2 7-5.8 7-10V6l-7-3Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </svg>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Services & Problems Solved</span>
          <h2 className={styles.title}>Build the software your team should already have.</h2>
          <p className={styles.subtitle}>
            I focus on high-leverage web apps: tools that shorten sales cycles, remove admin work, and get a useful product into customers' hands.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.iconWrap}>
                  <ServiceIcon type={service.icon} />
                </div>
              </div>
              <h3>{service.title}</h3>
              <div className={styles.cardBody}>
                <p>
                  <strong>Problem:</strong> {service.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {service.solution}
                </p>
              </div>
              <div className={styles.outcome}>
                <span>Outcome</span>
                <p>{service.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
