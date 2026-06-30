import { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-box">MRK</span>
          <span>.dev</span>
        </a>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="#hero" className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="btn-cv">
          <FileText size={14} />
          <span>Download CV</span>
        </a>
      </div>
    </header>
  );
}
