import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const About = ({ data }: { data: any }) => {
  return (
    <section id="profile" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-500 mb-4 px-1 border-l-4 border-brand-900 ml-[-1px]">
                The Profile
              </h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-8 leading-tight">
                Visionary Leadership. <br />
                Proven Results.
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>{data.personalInfo.bio}</p>
                <div className="p-8 bg-brand-50/50 rounded-2xl border-l-[6px] border-brand-900 relative">
                  <Quote className="absolute top-4 right-4 text-brand-200" size={40} />
                  <p className="italic text-brand-900 font-medium relative z-10">
                    "Each of you is a shepherd, and each of you is responsible for his flock. — Prophet Muhammad ﷺ (Sahih al-Bukhari)"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h4 className="text-2xl font-display font-bold text-brand-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-900"></span>
                Leadership Overview
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.personalInfo.leadershipOverview}
              </p>
            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h4 className="text-2xl font-display font-bold text-brand-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-900"></span>
                Career Summary
              </h4>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {data.personalInfo.careerSummary}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Strategic Planning", val: 95 },
                  { label: "Executive Coaching", val: 90 },
                  { label: "Digital Transformation", val: 98 },
                  { label: "Venture Management", val: 88 },
                ].map((skill) => (
                  <div key={skill.label} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex justify-between mb-2">
                       <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{skill.label}</span>
                       <span className="text-xs font-mono text-brand-600 font-bold">{skill.val}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden text-xs flex">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-brand-900 h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
