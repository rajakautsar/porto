import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-text">
          <p>© {new Date().getFullYear()} Muhammad Raja Kautsar. All rights reserved.</p>
        </div>

        <button onClick={scrollToTop} className="btn-scroll-top" title="Kembali ke atas">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
