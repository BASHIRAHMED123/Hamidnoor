import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#profile' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const targetSection = document.getElementById(
      targetId.replace('#', '')
    );

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl shadow-brand-900/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-brand-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-display font-bold text-xl">
              H
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-xl tracking-tight text-brand-900">
              Hamid Noor
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
              Executive Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold text-slate-500 hover:text-brand-900 transition-colors uppercase tracking-[0.15em] cursor-pointer"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-brand-900 text-white px-7 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20 active:scale-95 cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-900 bg-brand-50 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl py-8 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xl font-display font-bold text-brand-900"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-brand-900 text-white px-6 py-4 text-center font-bold uppercase tracking-widest text-sm rounded-xl"
              >
                Contact Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};