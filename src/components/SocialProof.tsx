import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SocialProof = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const testimonials = [
    {
      id: '1',
      name: 'Wacky Villamayor',
      role: 'CC strategist',
      company: 'Project fantasy',
      quote: 'Hey so I just want to shout out my boy Zain from OC Agency he has been a great editor, done great results on my shorts channels and yeah he is pretty quick and good at what he do. You should definitely work with OC Agency',
      image: '/wackylogo.jpeg',
      rating: 5
    },
    {
      id: '2',
      name: 'Vedant Chaturvedi',
      role: 'Founder',
      company: 'Writers Ecosystem',
      quote: 'Hey, this is Vedant Chaturvedi, founder of The Writers Ecosystem. OC Agency have been amazing with my social media Instagram video series and I’d definitely recommend working with OC Agency. They’re fabulous at what they do!',
      image: 'https://i.ibb.co/jvdBjhRf/Screenshot-2025-10-31-142356.png',
      rating: 3
    },
    {
      id: '3',
      name: 'Chetan Rana',
      role: 'Director',
      company: 'Auto Site',
      quote: 'I recently worked with MBK gamers from OC agency and I couldnt be happier with the results. Their attention to detail and creativity really made a difference.Thanks MBK gamers once again buddy. Im look forward to working with you again, Will meet you soon buddy.',
      image: 'https://i.ibb.co/N6VKvVf5/Screenshot-2025-11-01-231501.png',
      rating: 4
    }
  ];

  const stats = [
    {
      icon: <TrendingUp size={24} />,
      value: '318%',
      label: 'Average ROI Increase'
    },
    {
      icon: <Users size={24} />,
      value: '10+',
      label: 'Happy Clients'
    },
    {
      icon: <Award size={24} />,
      value: '97%',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <section id="social-proof" ref={sectionRef} className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(17, 24, 39) 100%)'
    }}>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Real Results.</span>
              <br />
              <span className="text-green-400">
                Real Businesses.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Don't just take our word for it see what our clients are saying about their transformation
            </p>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-gray-900/30 border border-gray-800 rounded-xl p-8 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-400 rounded-full mb-4">
                  <div className="text-black">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={0.2 * index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-green-400/30 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="text-green-400 mb-4">
                  <Quote size={32} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 group-hover:border-green-400/50 transition-colors"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Links */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg mb-6 font-medium">Connect with us</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.a
                href="https://www.linkedin.com/company/oc-marketing-agency/about"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-400/50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white font-semibold group-hover:text-green-400 transition-colors">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@offchartsacademy"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-green-400/50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-white font-semibold group-hover:text-green-400 transition-colors">YouTube</span>
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SocialProof;