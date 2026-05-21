import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-900 rounded-sm flex items-center justify-center">
            <span className="text-white font-display font-bold text-lg">H</span>
          </div>
          <span className={`font-display font-bold text-xl transition-colors ${scrolled ? 'text-brand-900' : 'text-brand-900'}`}>
            Hamid Noor
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-900 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-900 text-white px-6 py-2.5 text-sm font-medium rounded-full hover:bg-brand-800 transition-all shadow-lg shadow-brand-900/10"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-900" onClick={() => setIsOpen(!isOpen)}>
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
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-brand-900 text-white px-6 py-3 text-center font-medium rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = ({ data }: { data: any }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-50/30">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-900/5 skew-x-12 transform translate-x-20 hidden lg:block" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-900"></span>
            </span>
            CEO Portfolio
          </div>
          
          <h1 className="text-6xl md:text-7xl font-display font-bold text-brand-900 leading-[1.1] mb-6">
            Building the <br />
            <span className="text-brand-600 italic">Future</span> of Tech.
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
            {data.personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#profile"
              className="w-full sm:w-auto bg-brand-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-brand-800 transition-all shadow-xl shadow-brand-900/20"
            >
              View Profile
              <ArrowRight size={20} />
            </a>
            <a
              href="#achievements"
              className="w-full sm:w-auto bg-white text-brand-900 border border-brand-200 px-8 py-4 rounded-full font-semibold hover:bg-brand-50 transition-all"
            >
              View Achievements
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-10">
            <div>
              <div className="text-3xl font-display font-bold text-brand-900 tracking-tight">10+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Years CEO</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brand-900 tracking-tight">500+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-brand-900 tracking-tight">Lahore</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-medium">HQ Base</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white p-4 rounded-2xl shadow-2xl shadow-brand-900/20">
            <img
              src="./Certificate/certificate31.jpeg"
              alt="Hamid Noor Executive Portrait"
              className="w-full h-auto rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-brand-900/20 rounded-tr-3xl" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-brand-900/20 rounded-bl-3xl" />
          
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-brand-900 text-white p-6 rounded-2xl shadow-xl flex flex-col items-center">
             <span className="text-xs uppercase tracking-tighter mb-1 opacity-70">Experience</span>
             <span className="text-2xl font-bold font-display">20+ YRS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
