import { useEffect, useState } from 'react';
import { getPortfolio } from '../../services/api';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowRight, GraduationCap, Award } from 'lucide-react';

export default function Hero() {
  const [profile, setProfile] = useState(null);
  const [heroRef, isVisible] = useScrollAnimation(0.1);

  const typewriterWords = [
    'IT Specialist @ Dyandra Event Solutions',
    'Full-Stack & Event Systems Developer',
    'Mobile App Developer (Flutter & Kotlin)',
    'Computer Vision YOLOv8 Integrator'
  ];

  const typedText = useTypewriter(typewriterWords, 70, 35, 1800);

  useEffect(() => {
    getPortfolio()
      .then((res) => setProfile(res.data))
      .catch(() => setProfile(null));
  }, []);

  return (
    <section id="hero" className="hero-wrapper" ref={heroRef}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Content Column */}
          <div className={`reveal ${isVisible ? 'visible' : ''}`}>
            <div className="hero-greeting">
              <span className="hero-greeting-line"></span>
              <span>PORTFOLIO RESMI</span>
            </div>

            <h1 className="hero-name">
              <span>MUHAMMAD</span>
              <span className="hero-name-gradient">RAJA KAUTSAR</span>
            </h1>

            <div className="typewriter-box">
              <span>{typedText}</span>
              <span className="typewriter-cursor"></span>
            </div>

            <p className="hero-bio">
              {profile?.bio ??
                'Lulusan Sarjana Komputer Universitas Gunadarma (IPK 3.71) berpengalaman memimpin pengembangan platform manajemen event berskala nasional berbasis QR Code (5.800+ peserta), integrasi Computer Vision YOLOv8, serta pengembangan aplikasi mobile di Kementerian Luar Negeri RI.'}
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span>Hubungi Saya</span>
                <ArrowRight size={16} />
              </a>
              <a href="#experience" className="btn-secondary">
                <span>Lihat Pengalaman & Event</span>
              </a>
            </div>

            <div className="hero-tech-stack">
              <span>CORE STACK:</span>
              <div className="hero-tech-pills">
                <span className="tech-pill">Laravel</span>
                <span className="tech-pill">PHP & MySQL</span>
                <span className="tech-pill">Flutter & Dart</span>
                <span className="tech-pill">YOLOv8</span>
              </div>
            </div>
          </div>

          {/* Right Column: User Photo & Education Box */}
          <div className={`reveal delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="hero-photo-box">
              <img
                src={profile?.photo || '/foto.png'}
                alt="Muhammad Raja Kautsar"
                className="hero-photo-img"
              />
              <div className="hero-photo-badge">
                <div style={{ fontSize: '10px', opacity: 0.85 }}>GUNADARMA GRADUATE</div>
                <div>IPK 3.71 / 4.00</div>
              </div>
            </div>

            <div className="education-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <GraduationCap size={20} style={{ color: 'var(--accent-primary)' }} />
                <span className="education-title">Universitas Gunadarma</span>
              </div>
              <p className="education-sub">
                S1 Computer Systems Networking and Telecommunications (2021 – 2025)
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className="education-gpa">Grade: 3.71 / 4.00</span>
                <span className="education-gpa" style={{ background: 'rgba(56, 189, 248, 0.2)' }}>Sarjana Komputer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
