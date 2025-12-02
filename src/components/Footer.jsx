const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-center py-8 bg-[--card-color] border-t border-[--border-color] transition-colors duration-500">
      <p className="text-[--accent-color] font-bold text-lg mb-2 neon-text">
        AVAILABLE FOR WEBSITE DESIGN & DEVELOPMENT.
      </p>
      <p className="text-[--text-color]/60">&copy; 2025 Kumaran.S Digital Architecture.</p>
      <a
        href="#home"
        onClick={scrollToTop}
        className="text-[--text-color] hover:text-[--accent-color] transition duration-300 mt-2 inline-block"
      >
        System Reboot &uarr;
      </a>
    </footer>
  );
};

export default Footer;

