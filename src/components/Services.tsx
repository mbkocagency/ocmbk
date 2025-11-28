import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { use3DTilt } from '../hooks/use3DTilt';
import {
  TrendingUp,
  PenTool,
  Share2,
  Bot,
  DollarSign,
  Building,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  isHovered,
  onHoverStart,
  onHoverEnd,
  isExpanded,
  onToggle
}) => {
  const tilt = use3DTilt({ maxTilt: 10, scale: 1.02, speed: 400 });
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <motion.div
      ref={tilt.ref}
      style={tilt.style}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-gray-700 focus-within:border-gray-700 transition-all duration-300 overflow-hidden h-full"
      tabIndex={0}
      role="article"
      aria-label={service.title}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(to bottom right, rgba(74, 222, 128, 0.05) 0%, transparent 100%)'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
      />
      <div className="relative z-10">
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-green-400/20"
          style={{
            background: 'linear-gradient(to bottom right, rgb(74, 222, 128) 0%, rgb(34, 197, 94) 100%)'
          }}
          whileHover={{
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <motion.div
            className="text-black"
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            {service.icon}
          </motion.div>
        </motion.div>

        <motion.h3
          className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {service.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 mb-4 leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {service.description}
        </motion.p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={onToggle}
          className="flex items-center text-green-400 font-medium hover:text-green-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400/50 rounded px-2 py-1 -ml-2"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Show less details' : 'Show more details'}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
          {isExpanded ? (
            <ChevronUp size={16} className="ml-2" />
          ) : (
            <ChevronDown size={16} className="ml-2" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const services: Service[] = [
    {
  id: 'marketing',
  title: 'Marketing Strategy',
  description: 'Reach the right audience with tailored campaigns that drive conversions.',
  details: 'Stop wasting ad spend on the wrong people. Our data-driven approach targets your ideal customers with precision. We analyze market trends, competitor strategies, and customer behavior to create campaigns that deliver measurable ROI.',
  icon: <TrendingUp size={32} />,
  color: 'from-green-400 to-green-500'
},
{
  id: 'content',
  title: 'Content Creation',
  description: 'Engage and inspire with impactful visuals and storytelling.',
  details: 'Professional content that builds trust and converts visitors into loyal customers. From compelling copy to stunning visuals, we create content that resonates with your audience and drives action.',
  icon: <PenTool size={32} />,
  color: 'from-green-400 to-green-500'
},
{
  id: 'social',
  title: 'Social Media Management',
  description: 'Build your online presence while we handle posting, analytics, and growth.',
  details: 'Consistent, engaging content that grows your following and drives real business results. We manage your social presence across all platforms, ensuring your brand voice remains strong and consistent.',
  icon: <Share2 size={32} />,
  color: 'from-green-400 to-green-500'
},
{
  id: 'ai',
  title: 'AI Automations',
  description: 'Save time and scale with smart workflow automation.',
  details: 'Automate repetitive tasks so you can focus on what matters most — growing your business. From customer service chatbots to automated email sequences, we implement AI solutions that work 24/7.',
  icon: <Bot size={32} />,
  color: 'from-green-400 to-green-500'
},
{
  id: 'financial',
  title: 'Financial Management',
  description: 'Get clarity and control over your numbers — stress-free.',
  details: 'Professional financial planning and analysis to maximize profits and minimize risks. We help you understand your numbers, optimize cash flow, and make data-driven financial decisions.',
  icon: <DollarSign size={32} />,
  color: 'from-green-400 to-green-500'
},
{
  id: 'b2b',
  title: 'B2B Growth Solutions',
  description: 'Unlock new partnerships and expand your business network.',
  details: 'Strategic business development that opens doors to new opportunities and revenue streams. We help you identify, connect with, and convert high-value B2B prospects into long-term partners.',
  icon: <Building size={32} />,
  color: 'from-green-400 to-green-500'
}
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" ref={sectionRef} className="py-16 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 100%)'
    }}>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">We </span>
              <span className="text-green-400">got</span>
              <br />
              <span className="text-white">
                Your  <span className="text-green-400"> back </span> already 
                <span className="text-green-400"> partner... </span>
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We handle everything from marketing to automation so you can focus on what you do best
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={0.1 * index}>
              <ServiceCard
                service={service}
                isHovered={hoveredService === service.id}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                isExpanded={expandedService === service.id}
                onToggle={() => toggleService(service.id)}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.8}>
          <div className="text-center bg-gray-900/30 border border-gray-800 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why just read a <span className="text-green-400">book instead find out</span>  yourself.
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Ready to take action?
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cta-glow group px-10 py-5 bg-green-400 text-black font-bold text-lg rounded-lg hover:bg-green-300 transition-all duration-200"
            >
              <span className="flex items-center gap-3">
                <CheckCircle size={22} />
                “Harness Your Guarantee”
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
