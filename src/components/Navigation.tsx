import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import XLogo from './XLogo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
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
        <div className="hidden md:flex items-center gap-8 h-full">
          <div className="flex gap-6 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative h-full flex items-center text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-[#A3A3A3] hover:text-white'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366F1]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-5 py-2.5 rounded-[8px] text-sm font-medium transition-colors"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button aria-label="Open navigation menu" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className="fixed inset-0 w-screen h-screen bg-[#0A0A0A] z-[200] isolate flex flex-col items-center justify-center pt-20 pb-8"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform'
        }}
      >
        <button
          aria-label="Close navigation menu"
          className="absolute top-5 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-2xl transition-colors ${isActive ? 'text-white' : 'text-[#A3A3A3] hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          
          <div className="mt-auto mb-8 w-full max-w-[280px]">
            <div className="border-t border-[#1F1F1F] w-full my-8" />
            <div className="flex justify-center gap-4">
              <a href="https://github.com/Pro-Prince" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/prince-patel476/" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Pro_Prince_1" aria-label="X / Twitter profile" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <XLogo size={20} />
              </a>
              <a href="https://www.instagram.com/pro.prince.1/" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer" className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#1A1A1A] border border-[#262626] hover:border-[#6366F1] transition-colors text-white">
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-xs text-[#525252] text-center mt-4">
              © 2026 Prince Patel
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
