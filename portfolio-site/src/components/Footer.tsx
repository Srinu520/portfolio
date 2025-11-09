import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Srinu Duggempudi</h3>
            <p>Full Stack Developer | React.js & Python Expert</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:srinuduggempudi26@gmail.com">Email</a>
              </li>
              <li>
                <a href="tel:+919391339072">Phone</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Srinu Duggempudi. All rights reserved.</p>
          <p className={styles.credit}>
            Built with <span className={styles.heart}>❤️</span> using Next.js + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
