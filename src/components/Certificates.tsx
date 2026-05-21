import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Search, FileBadge } from 'lucide-react';
import { Certificate } from '../data';

export const Certificates = ({ data }: { data: Certificate[] }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [filter, setFilter] = useState('');

  const filteredCerts = data.filter(cert => 
    cert.title.toLowerCase().includes(filter.toLowerCase()) || 
    cert.organization.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section id="certificates" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-brand-600 text-sm font-bold uppercase tracking-[0.4em] mb-4">Credentials</h2>
            <h3 className="text-4xl font-display font-bold text-brand-900">Professional Certifications</h3>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search certificates..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-900/10 focus:border-brand-900 transition-all font-medium"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 8) * 0.05 }}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-900/30 hover:shadow-2xl hover:shadow-brand-900/5 transition-all cursor-pointer overflow-hidden relative"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="w-12 h-12 mb-6 bg-brand-50 text-brand-700 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white">
                <FileBadge size={24} />
              </div>
              
              <div className="space-y-1">
                <h4 className="text-brand-900 font-display font-bold leading-tight group-hover:text-brand-900 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  {cert.organization}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                 <span className="text-xs font-bold text-slate-400 font-mono tracking-tighter uppercase">{cert.date}</span>
                 <span className="text-brand-900 text-xs font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    View <ExternalLink size={14} />
                 </span>
              </div>
            </motion.div>
          ))}
          
          {filteredCerts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 font-medium">No certificates match your search query.</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          >
            <div className="absolute inset-0 bg-brand-900/60 backdrop-blur-sm" onClick={() => setSelectedCert(null)} />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X size={20} />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-brand-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-brand-900/20">
                    <FileBadge size={32} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">{selectedCert.organization}</span>
                    <h4 className="text-3xl font-display font-bold text-brand-900 leading-tight">
                      {selectedCert.title}
                    </h4>
                  </div>
                </div>
                
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 mb-8 relative group">
                  <img 
                        src={selectedCert.imageUrl} 
                        alt={selectedCert.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
/>  
                  <div className="absolute inset-0 bg-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <span className="bg-white text-brand-900 px-6 py-3 rounded-full font-bold shadow-xl">Official Credential</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl text-center">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Issue Date</span>
                    <span className="text-lg font-bold text-brand-900 font-display">{selectedCert.date}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl text-center">
                    <span className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Status</span>
                    <span className="text-lg font-bold text-green-600 font-display flex items-center justify-center gap-2"> Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
  