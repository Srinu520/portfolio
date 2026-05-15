'use client';

import { useEffect } from 'react';
import styles from './AmbientEffects.module.css';

const AmbientEffects = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    let frame = 0;

    const setCursorPosition = (x: number, y: number) => {
      document.documentElement.style.setProperty('--cursor-x', `${x}px`);
      document.documentElement.style.setProperty('--cursor-y', `${y}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setCursorPosition(event.clientX, event.clientY);
      });
    };

    setCursorPosition(window.innerWidth * 0.62, window.innerHeight * 0.36);
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <div className={styles.ambient} aria-hidden="true">
      <div className={styles.cursorField}></div>
      <div className={styles.sweep}></div>
      <div className={styles.noise}></div>
    </div>
  );
};

export default AmbientEffects;
