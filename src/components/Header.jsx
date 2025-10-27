import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-[--card-color]/95 backdrop-blur-sm sticky top-0 z-50 w-full shadow-lg transition-colors duration-500 border-b border-[--border-color]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-2xl font-extrabold text-[--accent-color] neon-text"
        >
          &lt;Kumaran.S /&gt;
        </a>
        
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link text-[--text-color] hover:text-[--accent-color] transition duration-300 ${
                activeSection === link.href.substring(1) ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-[--border-color] text-[--text-color] hover:text-[--accent-color] transition duration-300 text-xl"
            title="Toggle Theme"
          >
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
          </button>
        </div>
        
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[--text-color] text-3xl"
        >
          <span>{mobileMenuOpen ? '×' : '☰'}</span>
        </button>
      </nav>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-[--card-color] shadow-xl transition-colors duration-500">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link block text-center text-[--text-color] py-3 text-lg hover:bg-[--border-color]/50 ${
                activeSection === link.href.substring(1) ? 'active' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-full text-center text-[--text-color] py-3 text-lg hover:bg-[--border-color]/50 transition duration-300"
          >
            <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'} mr-2`}></i> Toggle Theme
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

