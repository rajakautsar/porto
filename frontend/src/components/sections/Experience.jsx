import { useEffect, useState } from 'react';
import { getExperience } from '../../services/api';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Experience() {
  const [items, setItems] = useState([]);
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const fallbackExperience = [
    {
      role: 'Information Technology Specialist',
      company: 'Dyandra Event Solutions',
      location: 'Jakarta Pusat (On-site)',
      period: 'Nov 2025 - May 2026 (7 mos)',
      isCurrent: true,
      description:
        'Memimpin pengembangan berbagai platform manajemen event berskala nasional, sistem registrasi berbasis QR Code (digunakan 5.800+ peserta), monitoring dashboard real-time, serta sistem counting person berbasis Computer Vision YOLOv8.',
      highlights: [
        'Sistem registrasi & manajemen peserta QR Code untuk BPA Fair 2026 (5.000 peserta), Imlek Nasional 2026 (700 peserta), dan Pembekalan PDI Perjuangan (120 peserta).',
        'Mengembangkan BPA Fair System dari nol (Registrasi, E-Catalog, Auction System, Visitor Monitoring, Bulk Import/Export PDF).',
        'Mengembangkan website Screenverse dari perencanaan UI/UX hingga backend.',
        'Sistem E-Invitation VIP & VVIP berbasis QR Code & integrasi pencetakan ID Card Fargo DTC1000.',
        'Tim IT Support & Monitoring di lapangan untuk event nasional: BPA Fair 2026, DXI 2026, Imlek Nasional 2026, Pertamina Employee Gathering.'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'YOLOv8', 'Computer Vision', 'Hostinger', 'Fargo DTC1000']
    },
    {
      role: 'Mobile App Developer Intern',
      company: 'Kementerian Luar Negeri Republik Indonesia (PUSTIK KP)',
      location: 'Jakarta (On-site)',
      period: 'Apr 2025 - Jul 2025 (4 mos)',
      isCurrent: false,
      description:
        'Pengembangan aplikasi mobile Office Management System (OMS) internal kementerian berbasis Android Native (Kotlin) dan Flutter Multiplatform.',
      highlights: [
        'Mengembangkan aplikasi OMS native dengan Kotlin di Android Studio pada bulan pertama.',
        'Migrasi & pengembangan multiplatform menggunakan Flutter & Dart (Android & iOS).',
        'Implementasi fitur Dynamic Menu role admin tanpa perlu re-compile kode.',
        'Manajemen penyimpanan offline & integrasi data lokal menggunakan Hive database.'
      ],
      technologies: ['Flutter', 'Dart', 'Kotlin', 'Android Studio', 'Hive DB', 'Git', 'UI/UX Design']
    }
  ];

  const certifications = [
    {
      title: 'Penerapan Data Science dengan Microsoft Fabric',
      issuer: 'Dicoding Indonesia',
      date: 'Issued Oct 2025 · Expires Oct 2028',
      credential: 'Credential ID 6RPNGR8G9Z2M'
    },
    {
      title: 'Belajar Dasar AI & Machine Learning',
      issuer: 'Dicoding Indonesia',
      date: 'Issued Oct 2025 · Expires Oct 2028',
      credential: 'Credential ID 81P25NERNPOY'
    },
    {
      title: 'Cloud Practitioner Essentials (AWS Cloud)',
      issuer: 'Dicoding Indonesia',
      date: 'Issued Oct 2024 · Expires Oct 2027',
      credential: 'Credential ID KEXLY0WN4ZG2'
    },
    {
      title: 'Advanced Database Systems',
      issuer: 'Universitas Gunadarma',
      date: 'Issued Jun 2025',
      credential: 'Credential ID NO. 678906'
    },
    {
      title: 'Mobile Application Development Certification',
      issuer: 'Kementerian Luar Negeri RI',
      date: 'Issued Jul 2025',
      credential: 'Credential ID 00461/KP/07/2025/19'
    }
  ];

  useEffect(() => {
    getExperience()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setItems(res.data);
        } else {
          setItems(fallbackExperience);
        }
      })
      .catch(() => setItems(fallbackExperience));
  }, []);

  const displayItems = items.length > 0 ? items : fallbackExperience;

  return (
    <section id="experience" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-tag">CAREER PATH & IMPACT</div>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {displayItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="timeline-item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
            >
              <div className={`timeline-dot ${item.isCurrent ? 'current' : ''}`}></div>

              <article className="timeline-content-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <div className="timeline-company">
                  {item.company} {item.location ? `• ${item.location}` : ''}
                </div>

                <p className="timeline-desc">{item.description}</p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((hl, hIdx) => (
                      <li key={hIdx}>{hl}</li>
                    ))}
                  </ul>
                )}

                <div className="timeline-tech-tags">
                  {item.technologies &&
                    item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag-pill">
                        {tech}
                      </span>
                    ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div style={{ marginTop: '5rem' }}>
          <div className={`section-header reveal ${isVisible ? 'visible' : ''}`} style={{ marginBottom: '2rem' }}>
            <div className="section-tag" style={{ background: 'var(--accent-subtle)', border: '1px solid var(--accent-primary)', color: 'var(--accent-primary)' }}>VALIDATED SKILLS</div>
            <h3 className="section-title" style={{ fontSize: 'var(--text-2xl)' }}>
              Licenses & <span>Certifications</span>
            </h3>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cIdx}
                className="cert-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: (cIdx % 3) * 0.1 }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
                    <Award size={18} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700 }}>CERTIFIED</span>
                  </div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-meta">
                  <span>{cert.date}</span>
                  <span style={{ opacity: 0.8 }}>{cert.credential}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
