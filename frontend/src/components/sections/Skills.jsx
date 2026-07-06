import { useEffect, useState } from 'react';
import { getSkills } from '../../services/api';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Code2, Zap, FileCode2, Palette, Server, Cpu, Network, Database, GitBranch, Package, CheckCircle2, Container, Cpu as DefaultIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Code2, Zap, FileCode2, Palette, Server, Cpu, Network, Database, GitBranch, Package, CheckCircle2, Container
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const fallbackSkills = [
    {
      category: 'Frontend Architecture',
      description: 'Membangun UI yang responsif, interaktif, dan modular.',
      items: [
        { name: 'React JS', level: 92, icon: 'Code2' },
        { name: 'Vite / Next.js', level: 88, icon: 'Zap' },
        { name: 'JavaScript (ES6+)', level: 90, icon: 'FileCode2' },
        { name: 'CSS3 & Modern Styling', level: 85, icon: 'Palette' },
      ]
    },
    {
      category: 'Backend & API Engineering',
      description: 'Merancang RESTful API yang aman, skalabel, dan efisien.',
      items: [
        { name: 'Laravel', level: 90, icon: 'Server' },
        { name: 'PHP 8+', level: 88, icon: 'Cpu' },
        { name: 'RESTful API Integration', level: 94, icon: 'Network' },
        { name: 'MySQL & Database Architecture', level: 82, icon: 'Database' },
      ]
    },
    {
      category: 'Workflow & Tools',
      description: 'Alat dan metodologi pengembangan perangkat lunak.',
      items: [
        { name: 'Git & GitHub Workflows', level: 90, icon: 'GitBranch' },
        { name: 'Composer & NPM', level: 88, icon: 'Package' },
        { name: 'Postman / API Testing', level: 86, icon: 'CheckCircle2' },
        { name: 'Docker & Deployment', level: 75, icon: 'Container' },
      ]
    }
  ];

  useEffect(() => {
    getSkills()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const formatted = res.data.map((cat, idx) => {
            if (Array.isArray(cat.items) && typeof cat.items[0] === 'string') {
              return {
                ...cat,
                description: fallbackSkills[idx]?.description || 'Teknologi dan keahlian utama.',
                items: cat.items.map((itemStr) => ({
                  name: itemStr,
                  level: Math.floor(Math.random() * 15) + 80,
                  icon: 'Code2'
                }))
              };
            }
            return cat;
          });
          setSkills(formatted);
        } else {
          setSkills(fallbackSkills);
        }
      })
      .catch(() => setSkills(fallbackSkills));
  }, []);

  const displaySkills = skills.length > 0 ? skills : fallbackSkills;

  return (
    <section id="skills" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-tag">COMPETENCIES</div>
          <h2 className="section-title">
            Skills & <span>Tech Stack</span>
          </h2>
        </div>

        <div className="skills-grid">
          {displaySkills.map((group, groupIdx) => (
            <motion.article
              key={group.category}
              className="skill-cluster-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: groupIdx * 0.1 }}
            >
              <div className="skill-cluster-header">
                <h3 className="skill-cluster-title">{group.category}</h3>
                {group.description && <p className="skill-cluster-desc">{group.description}</p>}
              </div>

              <div className="skill-items-list">
                {group.items &&
                  group.items.map((item) => {
                    const IconComponent = iconMap[item.icon] || DefaultIcon;
                    const levelVal = typeof item === 'string' ? 85 : item.level || 85;
                    const nameStr = typeof item === 'string' ? item : item.name;

                    return (
                      <div key={nameStr} className="skill-item">
                        <div className="skill-item-info">
                          <span className="skill-item-name">
                            <IconComponent size={16} style={{ color: 'var(--accent-primary)' }} />
                            <span>{nameStr}</span>
                          </span>
                          <span className="skill-item-level">{levelVal}%</span>
                        </div>

                        <div className="progress-bar-bg">
                          <div
                            className="progress-bar-fill"
                            style={{ width: isVisible ? `${levelVal}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
