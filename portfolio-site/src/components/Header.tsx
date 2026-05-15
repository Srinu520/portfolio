'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.logo} onClick={() => scrollToSection('hero')} aria-label="Go to top">
          <span className={styles.logoMark}>SD</span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Srinu D</span>
            <span className={styles.subtitle}>B2B Software</span>
          </span>
        </button>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="site-navigation" className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`} aria-label="Primary navigation">
          <button onClick={() => scrollToSection('services')} className={styles.navLink}>
            Services
          </button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
            Case Studies
          </button>
          <button onClick={() => scrollToSection('pricing')} className={styles.navLink}>
            Pricing
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
            Contact
          </button>
        </nav>

        <div className={styles.actions}>
          <button className={styles.headerCta} onClick={() => scrollToSection('contact')}>
            Book Call
          </button>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className={styles.themeIcon} data-mode={isDark ? 'dark' : 'light'} aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
