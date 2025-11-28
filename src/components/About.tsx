import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const team = [
    {
      name: 'Mohammed Badruddin Khan',
      role: 'Founder & CEO',
      bio: 'Engineering graduate with extensive experience across multiple business ventures. Specializes in strategic growth, operations management, and building scalable business systems.',
      image: 'https://yt3.googleusercontent.com/gg4222by0z4JqFmQohVoeU9fpZrKGqT2_1N_rUcLvFjJArQz1malLaYW12BMZ0MA8Wt8VT2Txw=s160-c-k-c0x00ffffff-no-rj',
      instagram: 'https://www.instagram.com/itz_mee_khxn?igsh=MXU4dTc2azY3d3FvYg=='
    },
    {
      name: 'Mohamed Zain M laxmeshwar',
      role: 'Founder & CEO',
      bio: 'Engineering graduate with a proven track record in multiple business domains. Expert in digital transformation, automation strategies, and driving business innovation.',
      image: 'https://yt3.googleusercontent.com/ReVFRZx2kIvNWdOR4eqPRve40xNVO_wWpjLMfAbVZi5SkC92HeeVKUZ5pwSv8a0odqNdViwZ=s160-c-k-c0x00ffffff-no-rj',
      instagram: 'https://www.instagram.com/mdzaxn_lxwr?igsh=MTBtemFicHhubm16MA=='
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 100%)'
    }}>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">About</span>
              <span className="text-green-400 ml-4">OC Agency</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed font-light">
               We don't just manage brands we build empires.
              </p>
              <p className="text-xl text-green-400 font-medium">
                
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Team Section */}
        <div>
          <ScrollReveal delay={0.1}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-white">Meet the Team</span>
            </h3>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={0.2 * index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group text-center"
                >
                  <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-visible border-4 border-gray-800 group-hover:border-green-400/50 transition-all duration-300" style={{ isolation: 'isolate' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 100%)'
                    }} />
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute -bottom-3 -right-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-20"
                        title="Follow on Instagram"
                      >
                        <Instagram size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {member.name}
                  </h4>
                  <p className="text-green-400 font-medium mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-200 leading-relaxed max-w-sm mx-auto bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg">
                    {member.bio}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="my-20">
          <ScrollReveal delay={0.1}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              <span className="text-white">Trusted by Industry Leaders</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 md:w-32 md:h-32 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUDS64yNtx85Q6MsUDlWj439EF7T0cKJNZfi2n"
                  alt="Writers Ecosystem"
                  className="w-full h-full object-contain filter brightness-90"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.error('Failed to load Writers Ecosystem logo');
                  }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 md:w-32 md:h-32 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src="/wackylogo.jpeg"
                  alt="Wacky Villamayor"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.error('Failed to load Wacky logo');
                  }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 md:w-32 md:h-32 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUgZkxE1S1UrfBe9a2AnKOV84cSyuhRvi3T0lJ"
                  alt="RXN Sports Brand"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.error('Failed to load RXN logo');
                  }}
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default About;