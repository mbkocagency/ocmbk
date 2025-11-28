import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, AlertTriangle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Agitation = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const problems = [
    "You’ve paid “experts” who promised growth but delivered excuses.",
    "You’ve wasted time chasing trends that never bring real clients.",
    "You’ve built funnels, ads, and posts but still struggle for consistent leads",
    "You’re stuck on a marketing hamster wheel: endless effort, zero guarantee."
  ];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 50%, rgb(17, 24, 39) 100%)'
    }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border-2 border-red-500/30 rounded-full mb-6">
              <AlertTriangle size={40} className="text-red-400" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Here's the truth:
            </h2>
          </ScrollReveal>
        </div>

        <div className="space-y-6 mb-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 3)}>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 bg-gray-900/40 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
              >
                <X size={24} className="text-red-400 flex-shrink-0 mt-1" />
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {problem}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center">
            <motion.p
              className="text-2xl md:text-3xl text-red-400 font-semibold italic"
              whileHover={{ scale: 1.02 }}
            >
              Sound exhausting? Hell Yes.
            </motion.p>
            <p className="text-xl text-gray-400 mt-4">
              But guess what… it doesn’t have to be.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Agitation;
