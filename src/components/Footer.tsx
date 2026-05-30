import React from 'react';
import { Mail, Linkedin, Twitter, MapPin, Phone, ArrowUp, Facebook } from 'lucide-react';

export const Footer = ({ data }: { data: any }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-white border-t border-slate-100 pt-24 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 pb-20">

          {/* Left Section */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-brand-900 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-display font-bold text-xl">
                  H
                </span>
              </div>

              <div className="flex flex-col leading-none text-brand-900">
                <span className="font-display font-bold text-xl tracking-tight">
                  Hamid Noor
                </span>

                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                  Executive Portfolio
                </span>
              </div>
            </a>

            <p className="text-slate-500 mb-8 leading-relaxed max-w-sm">
              Connecting vision with execution. For speaking engagements,
              consultancy requirements, or corporate inquiries, feel free to
              reach out.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/hamid-noor-82a788155?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1ERG5zZgc1/" },
                {
                  icon: <Mail size={20} />,
                  href: "mailto:hamidnoor129@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-brand-900 hover:text-white transition-all shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-8 grid md:grid-cols-4 gap-12">

            {/* Direct Contact */}
            <div>
              <h4 className="font-display font-bold text-brand-900 mb-6 uppercase tracking-widest text-xs">
                Direct Contact
              </h4>

              <ul className="space-y-4">

                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Email
                    </span>

                    <a
                      href="mailto:hamidnoor129@gmail.com"
                      className="text-slate-900 font-medium text-sm hover:text-brand-900 transition-colors"
                    >
                      hamidnoor129@gmail.com
                    </a>
                  </div>
                </li>

                {/* */}
                <li className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <Phone size={16} />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Direct Office
                    </span>

                    <a
                      href="https://wa.me/923229481531?text=Hello%20Hamid%20Noor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-medium text-sm hover:text-brand-900 transition-colors"
                    >
                      +92 3229481531
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            {/* Global HQ */}
            <div>
              <h4 className="font-display font-bold text-brand-900 mb-6 uppercase tracking-widest text-xs">
                Global HQ
              </h4>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900">
                  <MapPin size={16} />
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                    Lahore, Pakistan
                  </span>

                  <address className="not-italic text-slate-900 font-medium text-sm leading-relaxed">
                    Alpha Solutions
                    <br />
                    Main Machinery Store street#6 Slamatpura
                    <br />
                    Lahore cantt
                  </address>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h4 className="font-display font-bold text-brand-900 mb-6 uppercase tracking-widest text-xs">
                Company
              </h4>

              <ul className="space-y-4">

                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <MapPin size={16} />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Company Name
                    </span>

                    <span className="text-slate-900 font-medium text-sm">
                      Alpha Solutions 
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <Mail size={16} />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Company Email
                    </span>

                    <a
                      href="mailto:alphasolpk@gmail.com"
                      className="text-slate-900 font-medium text-sm hover:text-brand-900 transition-colors"
                    >
                      alphasolpk@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                    <Phone size={16} />
                  </div>

                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      Company Contact
                    </span>

                    <a
                      href="https://wa.me/923229481531?text=Hello%20Alpha%20Solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 font-medium text-sm hover:text-brand-900 transition-colors"
                    >
                      +92 322 9481531
                    </a>
                  </div>
                </li>

              </ul>
            </div>

            <li className="flex items-start gap-3 group">
              <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-colors">
                <MapPin size={16} />
              </div>

              <div>
                <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400">
                  Registered Company
                </span>

                <span className="text-slate-900 font-medium text-sm">
                  Hamid Noor (SMC-Pvt.) Ltd
                </span>
              </div>
            </li>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm text-slate-400 font-medium">
            &copy; {currentYear} Hamid Noor. All rights reserved.
            Professional Portfolio.
          </p>

          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">

            <a href="#" className="hover:text-brand-900 transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-brand-900 transition-colors">
              Terms of Service
            </a>

            <a
              href="#home"
              className="w-10 h-10 bg-brand-900 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-900/20 hover:-translate-y-1 transition-all"
            >
              <ArrowUp size={16} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};