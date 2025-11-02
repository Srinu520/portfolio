import React, { useState, useRef } from 'react';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

interface NodePosition {
  x: number;
  y: number;
}

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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
    const categoryRadius = 200;
    const angle = (index / skills.length) * Math.PI * 2;
    
    return {
      x: centerX + Math.cos(angle) * categoryRadius,
      y: centerY + Math.sin(angle) * categoryRadius,
    };
  };

  // Calculate positions for skill items around a category
  const getSkillPosition = (categoryIndex: number, itemIndex: number, totalItems: number, isHovered: boolean = false): NodePosition => {
    const categoryPos = getCategoryPosition(categoryIndex);
    const skillRadius = isHovered ? 140 : 80;
    const angle = (itemIndex / totalItems) * Math.PI * 2;
    
    return {
      x: categoryPos.x + Math.cos(angle) * skillRadius,
      y: categoryPos.y + Math.sin(angle) * skillRadius,
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
          <svg className={styles.connectionsSvg} viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
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
                  left: `${(categoryPos.x / 1000) * 100}%`,
                  top: `${(categoryPos.y / 1000) * 100}%`,
                }}
                onMouseEnter={() => setHoveredCategory(skillGroup.category)}
                onMouseLeave={() => setHoveredCategory(null)}
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
                    left: `${(skillPos.x / 1000) * 100}%`,
                    top: `${(skillPos.y / 1000) * 100}%`,
                    opacity: !hoveredCategory ? 1 : isHovered ? 1 : 0.3,
                  }}
                >
                  <span className={styles.skillLabel}>{item}</span>
                </div>
              );
            });
          })}
        </div>

        <p className={styles.hint}>💡 Tip: Hover over skill categories for highlights</p>
      </div>
    </section>
  );
};

export default Skills;