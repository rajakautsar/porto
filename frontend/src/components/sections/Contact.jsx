import { useState } from 'react';
import { sendContact } from '../../services/api';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/motionVariants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }
  const [sectionRef, isVisible] = useScrollAnimation(0.15);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await sendContact(form);
      setStatus({
        type: 'success',
        text: res.data?.message || 'Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda kembali.'
      });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        text: err.response?.data?.message || 'Gagal mengirim pesan. Silakan coba lagi nanti.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <div className="section-tag">GET IN TOUCH</div>
          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Info & Socials */}
          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="contact-info-title">Mari Terhubung</h3>
              <p className="contact-info-text">
                Punya pertanyaan, ide proyek menarik, atau ingin berkolaborasi? Jangan ragu untuk
                mengirimkan pesan. Saya selalu terbuka untuk berdiskusi!
              </p>

              <div className="contact-methods">
                <a href="mailto:[EMAIL_ADDRESS]" className="contact-method-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>EMAIL</div>
                    <div style={{ fontWeight: 600 }}>rajakautsar09@gmail.com</div>
                  </div>
                </a>

                <div className="contact-method-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>LOKASI</div>
                    <div style={{ fontWeight: 600 }}>Depok, Jawa Barat, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                SOCIAL PROFILES
              </div>
              <div className="social-links-row">
                <a
                  href="https://github.com/rajakautsar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-raja-kautsar-69a06534a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://instagram.com/ohinisar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit}>
              <motion.div
                variants={staggerContainer(0.08, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.div variants={fadeUp} className="form-group">
                  <label className="form-label" htmlFor="contact-name">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="Masukkan nama Anda"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="form-group">
                  <label className="form-label" htmlFor="contact-email">
                    Alamat Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="nama@domain.com"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                </motion.div>

                <motion.div variants={fadeUp} className="form-group">
                  <label className="form-label" htmlFor="contact-message">
                    Pesan Anda
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    rows="5"
                    placeholder="Tuliskan pesan atau detail proyek Anda di sini..."
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                  ></textarea>
                </motion.div>

                <motion.button variants={fadeUp} type="submit" className="btn-submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send size={16} />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {status && (
              <div className={`form-status-alert ${status.type}`}>
                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                <span>{status.text}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
