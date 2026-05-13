import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ctaPanel}>
          <div>
            <span className={styles.eyebrow}>Ready to replace the manual work?</span>
            <h2>Let&apos;s scope the software your business actually needs.</h2>
          </div>
          <a className={styles.ctaButton} href="#contact">
            Book a Discovery Call
          </a>
        </div>

        <div className={styles.content}>
          <div className={styles.brandSection}>
            <a href="#hero" className={styles.brand}>
              Srinu D
            </a>
            <p>Custom B2B software, MVP builds, workflow automation, and ongoing product support for founders and operators.</p>
            <div className={styles.badges}>
              <span>React</span>
              <span>Python/Django</span>
              <span>6+ Years</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Case Studies</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Contact</h3>
            <div className={styles.contactList}>
              <a href="mailto:srinuduggempudi26@gmail.com">
                <span>Email</span>
                <strong>srinuduggempudi26@gmail.com</strong>
              </a>
              <a href="tel:+919391339072">
                <span>Phone</span>
                <strong>+91 9391339072</strong>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Srinu Duggempudi. All rights reserved.</p>
          <p>Built with Next.js + TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
