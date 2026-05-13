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
        <div className={styles.logo}>
          <h1>Srinu</h1>
          <span className={styles.subtitle}>B2B Software</span>
        </div>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
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

        <button className={styles.themeToggle} onClick={toggleTheme} title={isDark ? 'Light mode' : 'Dark mode'}>
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
};

export default Header;
