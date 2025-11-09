'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { skills } from '@/data/portfolio';
import styles from './Skills.module.css';

interface NodePosition {
  x: number;
  y: number;
}

const VIEWBOX_SIZE = 1000;
// Keep items within the viewBox bounds (in viewBox units)
const EDGE_MARGIN = 20;

const roundValue = (value: number, precision = 4) => {
  const multiplier = 10 ** precision;
  return Math.round(value * multiplier) / multiplier;
};

const toPercent = (value: number) => `${roundValue((value / VIEWBOX_SIZE) * 100, 4)}%`;

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  // Track container size to make layout responsive across pages and devices
  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0]?.contentRect;
      if (cr) setContainerWidth(cr.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Compute radii and spacing based on available width
  const layout = useMemo(() => {
    const w = containerWidth || 1000; // default if unknown
    let categoryRadius = 300;
    let skillRadiusDefault = 120;
    let skillRadiusHover = 170;
    let minArcLenDefault = 80;
    let minArcLenHover = 95;
    let useArc = false;
    const arcSpanDefault = Math.PI; // 180°
    const arcSpanHover = Math.PI * 1.25; // ~225°

    if (w < 420) {
      // Phones: keep full circle around parent (no outward-only arc)
      categoryRadius = 240;
      skillRadiusDefault = 95;
      skillRadiusHover = 130;
      minArcLenDefault = 70;
      minArcLenHover = 85;
      useArc = false; // full ring on mobile as requested
    } else if (w < 640) {
      // Large phones / small phablets
      categoryRadius = 260;
      skillRadiusDefault = 105;
      skillRadiusHover = 140;
      minArcLenDefault = 75;
      minArcLenHover = 90;
      useArc = false;
    } else if (w < 840) {
      categoryRadius = 270;
      skillRadiusDefault = 100;
      skillRadiusHover = 150;
    } else if (w < 1080) {
      categoryRadius = 290;
      skillRadiusDefault = 110;
      skillRadiusHover = 160;
    }

    return {
      categoryRadius,
      skillRadiusDefault,
      skillRadiusHover,
      minArcLenDefault,
      minArcLenHover,
      useArc,
      arcSpanDefault,
      arcSpanHover,
    } as const;
  }, [containerWidth]);

  const categoryIcons: Record<string, string> = {
    'Frontend': '⚛️',
    'Backend': '🔧',
    'Databases': '🗄️',
    'Tools & DevOps': '🛠️',
    'Testing & Quality': '✅',
    'APIs & Services': '🌐',
  };

  // Calculate positions for circular category arrangement
  const getCategoryPosition = (index: number): NodePosition => {
    const centerX = 500;
    const centerY = 500;
    const categoryRadius = layout.categoryRadius; // responsive radius based on container
    const angle = (index / skills.length) * Math.PI * 2;
    
    return {
      x: roundValue(centerX + Math.cos(angle) * categoryRadius),
      y: roundValue(centerY + Math.sin(angle) * categoryRadius),
    };
  };

  // Calculate positions for skill items around a category
  const getSkillPosition = (
    categoryIndex: number,
    itemIndex: number,
    totalItems: number,
    isHovered: boolean = false
  ): NodePosition => {
    const categoryPos = getCategoryPosition(categoryIndex);
    const effectiveItems = Math.max(totalItems, 1);

    const baseRadius = isHovered ? layout.skillRadiusHover : layout.skillRadiusDefault;
    const minArcLen = isHovered ? layout.minArcLenHover : layout.minArcLenDefault;

    // Max radius allowed so the circle around the category stays inside the viewBox
    const maxSkillRadius = Math.max(
      40,
      Math.min(
        categoryPos.x - EDGE_MARGIN,
        categoryPos.y - EDGE_MARGIN,
        VIEWBOX_SIZE - EDGE_MARGIN - categoryPos.x,
        VIEWBOX_SIZE - EDGE_MARGIN - categoryPos.y
      )
    );

    let radius: number;
    let angle: number;
    if (layout.useArc) {
      // Outward arc layout for compact screens
      const span = isHovered ? layout.arcSpanHover : layout.arcSpanDefault;
      const requiredRadius = (minArcLen * effectiveItems) / span;
      radius = Math.min(Math.max(baseRadius, requiredRadius), maxSkillRadius);

      const outwardAngle = (categoryIndex / skills.length) * Math.PI * 2;
      const start = outwardAngle - span / 2;
      const t = effectiveItems === 1 ? 0.5 : itemIndex / (effectiveItems - 1);
      angle = start + t * span;
    } else {
      // Full circle layout
      const requiredRadius = (minArcLen * effectiveItems) / (2 * Math.PI);
      radius = Math.min(Math.max(baseRadius, requiredRadius), maxSkillRadius);
      const startAngle = (categoryIndex / skills.length) * Math.PI * 2;
      const step = (Math.PI * 2) / effectiveItems;
      angle = startAngle + itemIndex * step;
    }

    return {
      x: roundValue(categoryPos.x + Math.cos(angle) * radius),
      y: roundValue(categoryPos.y + Math.sin(angle) * radius),
    };
  };

  return (
    <section id="skills" className={styles.skills}>
      {/* Floating formulas background */}
      <div className={styles.formulasBackground}>
        <div className={styles.formula} style={{ animationDelay: '0s' }}>const skills = []</div>
        <div className={styles.formula} style={{ animationDelay: '1s' }}>&lt;/&gt;</div>
        <div className={styles.formula} style={{ animationDelay: '2s' }}>{'{'}key: value{'}'}</div>
        <div className={styles.formula} style={{ animationDelay: '3s' }}>async await</div>
        <div className={styles.formula} style={{ animationDelay: '4s' }}>=&gt;</div>
        <div className={styles.formula} style={{ animationDelay: '5s' }}>debug()</div>
        <div className={styles.formula} style={{ animationDelay: '6s' }}>if (true)</div>
        <div className={styles.formula} style={{ animationDelay: '7s' }}>return null</div>
        <div className={styles.formula} style={{ animationDelay: '8s' }}>function()</div>
        <div className={styles.formula} style={{ animationDelay: '9s' }}>let x = 0</div>
        <div className={styles.formula} style={{ animationDelay: '10s' }}>class App</div>
        <div className={styles.formula} style={{ animationDelay: '11s' }}>import {'{'}{'}'}</div>
        <div className={styles.formula} style={{ animationDelay: '12s' }}>export default</div>
        <div className={styles.formula} style={{ animationDelay: '13s' }}>.map()</div>
        <div className={styles.formula} style={{ animationDelay: '14s' }}>.filter()</div>
        <div className={styles.formula} style={{ animationDelay: '15s' }}>reduce()</div>
        <div className={styles.formula} style={{ animationDelay: '16s' }}>promise</div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Technical Skills</h2>
        <p className={styles.subtitle}>Explore all available technologies</p>

        <div className={styles.networkContainer} ref={containerRef}>
          {/* SVG Background for connections */}
          <svg
            className={styles.connectionsSvg}
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
          >
            {/* Draw lines connecting skills to categories */}
            {skills.map((skillGroup) => {
              const categoryIndex = skills.findIndex(s => s.category === skillGroup.category);
              const isHovered = hoveredCategory === skillGroup.category;
              
              return skillGroup.items.map((item, itemIndex) => {
                const categoryPos = getCategoryPosition(categoryIndex);
                const itemPos = getSkillPosition(categoryIndex, itemIndex, skillGroup.items.length, isHovered);

                return (
                  <line
                    key={`line-${skillGroup.category}-${itemIndex}`}
                    x1={categoryPos.x}
                    y1={categoryPos.y}
                    x2={itemPos.x}
                    y2={itemPos.y}
                    className={`${styles.connectionLine} ${isHovered ? styles.highlighted : ''}`}
                    vectorEffect="non-scaling-stroke"
                    style={{
                      opacity: !hoveredCategory || isHovered ? 1 : 0.08,
                    }}
                  />
                );
              });
            })}
          </svg>

          {/* Category nodes - Always visible */}
          {skills.map((skillGroup, categoryIndex) => {
            const categoryPos = getCategoryPosition(categoryIndex);
            const isHovered = hoveredCategory === skillGroup.category;
            
            return (
              <div
                key={skillGroup.category}
                className={styles.categoryNode}
                style={{
                  left: toPercent(categoryPos.x),
                  top: toPercent(categoryPos.y),
                }}
                onMouseEnter={() => setHoveredCategory(skillGroup.category)}
                onMouseLeave={() => setHoveredCategory(null)}
                role="button"
                tabIndex={0}
                aria-pressed={isHovered}
                onClick={() =>
                  setHoveredCategory((prev) =>
                    prev === skillGroup.category ? null : skillGroup.category
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredCategory((prev) =>
                      prev === skillGroup.category ? null : skillGroup.category
                    );
                  }
                }}
              >
                <div className={`${styles.categoryDot} ${isHovered ? styles.active : ''}`}>
                  <span className={styles.categoryEmoji}>{categoryIcons[skillGroup.category]}</span>
                </div>
                <h3 className={styles.categoryLabel}>{skillGroup.category}</h3>
              </div>
            );
          })}

          {/* Skill item nodes - Always visible */}
          {skills.map((skillGroup) => {
            const categoryIndex = skills.findIndex(s => s.category === skillGroup.category);
            const isHovered = hoveredCategory === skillGroup.category;
            
            return skillGroup.items.map((item, itemIndex) => {
              const skillId = `${skillGroup.category}-${item}`;
              const skillPos = getSkillPosition(categoryIndex, itemIndex, skillGroup.items.length, isHovered);
              
              return (
                <div
                  key={skillId}
                  className={`${styles.skillNode} ${isHovered ? styles.highlighted : ''}`}
                  style={{
                    left: toPercent(skillPos.x),
                    top: toPercent(skillPos.y),
                    opacity: !hoveredCategory ? 1 : isHovered ? 1 : 0.3,
                  }}
                >
                  <span className={styles.skillLabel}>{item}</span>
                </div>
              );
            });
          })}
        </div>

        <p className={styles.hint}>💡 Tip: Tap or hover over categories for highlights</p>
      </div>
    </section>
  );
};

export default Skills;
