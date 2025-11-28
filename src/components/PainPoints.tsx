import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, Clock, TrendingDown, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useRef } from 'react';

const PainPoints = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  const painPoints = [
    {
      icon: <TrendingDown size={32} />,
      title: "No Consistent Clients",
      description: "You’re stuck relying on word-of-mouth or random DMs, instead of a system that brings clients every week."
    },
    {
      icon: <Clock size={32} />,
      title: "Wasted Ad Spend",
      description: "You’ve tried boosting posts or running ads that burned your cash but barely moved the needle."
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Overwhelmed",
      description: "You’re on social media… Hiring content creator, marketer and not seeing real business growth or ROI."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(17, 24, 39) 100%)'
    }}>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Business shouldn’t feel like a <span className="text-red-400">losing game.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              You’re great at what you do but the leads, sales, and visibility you deserve never seem to show up.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-red-400/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 border border-red-500/30 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-400">
                    {point.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {point.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center">
            <motion.p 
              className="text-2xl text-gray-400 font-light italic"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-green-400">"Sounds familiar?"</span> You're not alone Because we specialize in solving exactly that...
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PainPoints;