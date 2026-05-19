import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, TrendingUp, Calendar } from 'lucide-react';
import { Achievement } from '../data';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'award': return <Award className="text-brand-600" size={24} />;
    case 'milestone': return <Target className="text-brand-600" size={24} />;
    default: return <TrendingUp className="text-brand-600" size={24} />;
  }
};

export const Achievements = ({ data }: { data: Achievement[] }) => {
  return (
    <section id="achievements" className="py-24 bg-brand-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-300 text-sm font-bold uppercase tracking-[0.4em] mb-4">Milestones</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              A Decade of <br />
              Strategic Excellence.
            </h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block text-right max-w-sm text-brand-200/70"
          >
            Tracking the transformation through consistent innovation, leadership, and unwavering commitment to quality.
          </motion.div>
        </div>

        <div className="relative">
          {/* Vertical Line for Timeline - hidden on small, visible on lg */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-brand-800 hidden md:block" />

          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-brand-900 border-2 border-brand-400 rounded-full transform -translate-x-1/2 z-10 hidden md:block" />

                {/* Year Label */}
                <div className="md:w-1/2 flex justify-start md:justify-end px-12 order-1 md:order-none">
                  <div className={`text-5xl md:text-7xl font-display font-black text-brand-800 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {item.year}
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 px-4 md:px-0 lg:px-12">
                  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                         <CategoryIcon category={item.category} />
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-brand-400">{item.category}</span>
                        <h4 className="text-xl font-display font-bold text-white leading-tight">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-brand-200/80 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
