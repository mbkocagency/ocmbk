import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play, Sparkles, Zap, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom right, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 45%, rgb(17, 24, 39) 100%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <ScrollReveal delay={0.2}>
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-['Poppins',sans-serif] font-bold leading-tight"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="text-white">
                  More Clients, More Money.
                </span>
                <br />
                <span className="text-white">
                  In 30 Days..
                </span>
                <br />
                <span className="text-green-400">Guaranteed.</span>
              </motion.h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={0.4}>
              <motion.p
                className="text-base md:text-lg text-gray-300 leading-relaxed font-light"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              >
                You do what you do best, and we handle the rest. No fluff. No waiting. Just proven growth that speaks for <span className="text-green-400 font-semibold">itself.</span>.
              </motion.p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.6}>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              >
                {/* Primary CTA */}
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-glow group relative px-8 py-4 bg-green-400 text-black font-bold text-base rounded-lg overflow-hidden transition-all duration-200 hover:bg-green-300"
                >
              <a
  
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-10 flex items-center gap-3 group"
>
  Show Me How
  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
</a>
                </motion.button>

                {/* Secondary CTA */}
                <motion.button
                  
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border-2 border-gray-600 text-gray-300 font-bold text-base rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-200"
                >
                 <a 
  href="https://youtu.be/soVACAgca9c" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-3"
>
  <Play size={18} className="group-hover:scale-110 transition-transform" />
  See How We Work
</a>
                </motion.button>
              </motion.div>
            </ScrollReveal>

            {/* Trust Indicator */}
            <ScrollReveal delay={0.8}>
              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <p className="text-gray-600 text-xs mb-3">Trusted by growing businesses worldwide</p>
                <div className="flex justify-center lg:justify-start items-center gap-4 md:gap-8 flex-wrap">
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUDS64yNtx85Q6MsUDlWj439EF7T0cKJNZfi2n"
                      alt="Writers Ecosystem"
                      className="w-full h-full object-contain filter brightness-90"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src="/wackylogo.jpeg"
                      alt="Wacky Villamayor"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    className="w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUgZkxE1S1UrfBe9a2AnKOV84cSyuhRvi3T0lJ"
                      alt="RXN Sports Brand"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column - YouTube Video with Auto-play */}
          <ScrollReveal delay={0.4}>
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-green-400/10 hover:shadow-green-400/20 transition-shadow duration-300">
                <div className="relative pb-[56.25%]">
                   <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/soVACAgca9c?autoplay=1&mute=1&loop=1&playlist=soVACAgca9c&controls=1&modestbranding=1&rel=0&enablejsapi=1&playsinline=1"
                    title="OC Agency Showcase Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator - Centered Below */}
        <div className="mt-12">
          <ScrollReveal delay={1.0}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-700 rounded-full cursor-pointer"
                onClick={scrollToServices}
              >
                <motion.div
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-green-400 rounded-full mx-auto mt-2"
                />
              </motion.div>
              <p className="text-gray-600 text-sm mt-4">Discover your solution</p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;