import { useEffect, useState } from 'react';
import { getProjects } from '../../services/api';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const fallbackProjects = [
    {
      id: 1,
      title: 'BPA Fair 2026 Enterprise Event System',
      category: 'Event Management Platform',
      desc: 'Sistem registrasi & manajemen peserta skala besar (5.000+ peserta) dilengkapi E-Catalog, Auction System, visitor monitoring real-time, bulk import data, dan export PDF.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'QR Code API'],
      image: '/projects/bpafair.png',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      demoUrl: 'https://bpafair.com',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Imlek Nasional 2026 VIP E-Invitation System',
      category: 'QR Check-in & Hardware Integration',
      desc: 'Sistem e-invitation VIP & VVIP berbasis scanning QR Code, dashboard validasi check-in real-time, dan integrasi otomatis pencetakan ID Card Fargo  1000.',
      technologies: ['Laravel', 'QR Scanner', 'Hardware Integration', 'MySQL'],
      image: '/projects/imleknas.png',
      gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      demoUrl: 'https://imleknas.destiket.com/',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Screenverse Digital Platform',
      category: 'Full-Stack Web Platform',
      desc: 'Pengembangan website platform Screenverse dari tahap perancangan UI/UX, arsitektur database, pembuatan frontend responsif, hingga implementasi backend.',
      technologies: ['Laravel', 'JavaScript', 'CSS3', 'MySQL'],
      image: '/projects/screenverse.png',
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
      demoUrl: '',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Kemlu RI Office Management System (OMS)',
      category: 'Mobile Application (iOS & Android)',
      desc: 'Aplikasi mobile manajemen kantor internal Kementerian Luar Negeri RI dengan fitur Dynamic Menu berbasis role admin dan penyimpanan lokal Hive database.',
      technologies: ['Flutter', 'Dart', 'Kotlin', 'Hive DB', 'Android Studio'],
      image: '/projects/kemlu_oms.png',
      gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      demoUrl: '',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'YOLOv8 Visitor Counting & Monitoring',
      category: 'Computer Vision & AI',
      desc: 'Sistem pemantauan dan analisis jumlah pengunjung real-time berbasis objek deteksi Computer Vision YOLOv8 untuk mendukung operasional event skala besar.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'Laravel API'],
      image: '/projects/yolov8_counting.png',
      gradient: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
      demoUrl: '',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'DXI 2026 Underwater Shootout Portal',
      category: 'Specialized Registration & Competition Portal',
      desc: 'Portal kompetisi foto bawah air nasional untuk pameran bergengsi Deep and Extreme Indonesia (DXI) 2026. Merancang alur registrasi peserta, form submisi galeri beresolusi tinggi, integrasi sistem pembayaran otomatis, serta dasbor monitoring juri untuk penilaian karya secara real-time.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS', 'File Storage API'],
      image: '/projects/banner_baru.png',
      gradient: 'linear-gradient(135deg, #1e3f35 0%, #11241e 100%)',
      demoUrl: 'https://underwatershootout.deepextremeindonesia.com/',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          const formatted = res.data.map((proj, idx) => ({
            id: proj.id || idx + 1,
            title: proj.title || 'Featured Project',
            category: proj.category || 'Web Development',
            desc: proj.desc || proj.description || 'Project portfolio menarik.',
            technologies: proj.technologies || ['React', 'Laravel'],
            image: proj.image || '',
            gradient: proj.gradient || fallbackProjects[idx % fallbackProjects.length]?.gradient,
            demoUrl: proj.demoUrl || '',
            githubUrl: proj.githubUrl || '#'
          }));

          setProjects(formatted);
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch(() => setProjects(fallbackProjects));
  }, []);

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-tag">FEATURED WORKS</div>
          <h2 className="section-title">
            Recent <span>Projects & Live Apps</span>
          </h2>
        </div>

        <div className="projects-grid">
          {displayProjects.map((project, idx) => {
            const fromLeft = idx % 2 === 0;
            return (
              <motion.article
                key={project.id || idx}
                className="project-card"
                initial={{ opacity: 0, x: fromLeft ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="project-preview-area"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img-preview"
                    />
                  ) : (
                    <div
                      className="project-gradient-bg"
                      style={{ background: project.gradient }}
                    >
                      <div className="project-preview-overlay"></div>
                      <Layers size={48} color="#ffffff" style={{ opacity: 0.35, zIndex: 1 }} />
                    </div>
                  )}
                  <span className="project-category-badge">{project.category}</span>
                </motion.div>

              <div className="project-body">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== '' && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                        title="Visit Live Project Website"
                        style={{ background: 'var(--accent-primary)', color: 'var(--bg-deep)', borderColor: 'var(--accent-primary)' }}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-desc">{project.desc}</p>

                <div className="project-tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
