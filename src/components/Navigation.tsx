import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="font-semibold text-white text-base">
          Prince Patel
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'nav-link'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0A0A0A] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-2xl transition-colors ${isActive ? 'text-white' : 'text-[#A3A3A3] hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
