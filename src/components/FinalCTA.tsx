import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, ArrowRight, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const FinalCTA = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(to right, rgb(74, 222, 128) 0%, rgb(34, 197, 94) 45%, rgb(75, 85, 99) 100%)'
    }}>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <ScrollReveal delay={0.1}>
            <motion.h2
              className="text-5xl md:text-7xl font-bold text-black leading-tight"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.02 }}
            >
              Ready to scale
              <br />
              <span className="text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                smarter?
              </span>
            </motion.h2>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.3}>
            <motion.p
              className="text-xl md:text-2xl text-black max-w-4xl mx-auto leading-relaxed font-medium"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.01 }}
            >
              Ready to work smarter, scale faster, and finally see the
              <span className="font-bold text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}> growth you've been aiming for?</span>
            </motion.p>
          </ScrollReveal>

          {/* Benefits List */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-8">
              <div className="flex items-center gap-3 text-black">
                <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Free Strategy Session</span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>Custom Growth Plan</span>
              </div>
              <div className="flex items-center gap-3 text-black">
                <div className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <span className="font-bold" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>No Long-term Contracts</span>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={0.7}>
            <motion.div className="pt-4">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="cta-glow group relative px-12 py-6 bg-black text-green-400 font-bold text-xl rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-900"
              >
                <span className="relative z-10 flex items-center gap-4">
                  <Calendar size={24} />
                  Book Your Free Growth Consultation
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </ScrollReveal>

          {/* Trust Message */}
          <ScrollReveal delay={0.9}>
            <motion.p
              className="text-black text-sm max-w-2xl mx-auto font-medium"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.3)' }}
              whileHover={{ scale: 1.02 }}
            >
              Join 50+ businesses that have transformed their growth with OC Agency.
              <br />
              <span className="font-bold">No risk. No long-term commitment. Just results.</span>
            </motion.p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;