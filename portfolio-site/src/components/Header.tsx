import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
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
          <span className={styles.subtitle}>Full Stack Developer</span>
        </div>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className={styles.navLink}>
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className={styles.navLink}>
            Skills
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