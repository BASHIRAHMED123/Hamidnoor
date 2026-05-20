import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#profile' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl shadow-brand-900/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-display font-bold text-xl">H</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}>
              Hamid Noor
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Executive Portfolio</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-slate-500 hover:text-brand-900 transition-colors uppercase tracking-[0.15em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-900 text-white px-7 py-3 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/20 active:scale-95"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-brand-900 bg-brand-50 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl py-8 px-6 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xl font-display font-bold text-brand-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-brand-900 text-white px-6 py-4 text-center font-bold uppercase tracking-widest text-sm rounded-xl"
                onClick={() => setIsOpen(false)}
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
