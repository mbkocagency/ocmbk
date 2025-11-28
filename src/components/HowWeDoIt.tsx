import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Target,
  MessageSquare,
  Rocket,
  BarChart3,
  Zap,
  Award
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowWeDoIt = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const playHeartbeat = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const steps: ProcessStep[] = [
    {
      icon: <Target size={32} />,
      title: 'Discovery & Strategy',
      description: 'We analyze your business, audience, and goals to create a custom growth roadmap.'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Planning & Setup',
      description: 'We design your campaigns, content calendar, and automation workflows.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Launch & Execute',
      description: 'We implement everything while you focus on running your business.'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Track & Optimize',
      description: 'We monitor results daily and optimize for maximum ROI.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Scale & Grow',
      description: 'We amplify what works and expand your reach systematically.'
    },
    {
      icon: <Award size={32} />,
      title: 'Deliver Results',
      description: 'You see consistent growth, more clients, and guaranteed outcomes.'
    }
  ];

  return (
    <section id="how-we-do-it" ref={sectionRef} className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(17, 24, 39) 0%, rgb(0, 0, 0) 100%)'
    }}>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-wider mb-4">
              How we work
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">It's </span>
              <span className="text-green-400">Straightforward</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No confusing jargon. No surprise fees. Just a proven system that delivers results.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block relative mb-20">
          {/* Hidden heartbeat audio */}
          <audio
            ref={audioRef}
            src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
            preload="auto"
            style={{ display: 'none' }}
          />

          {/* Animated ECG/Heartbeat Line */}
          <svg
            className="absolute left-0 w-full"
            style={{ zIndex: 0, top: '10px', height: '120px', opacity: 0.4 }}
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Irregular ECG heartbeat pattern with varied highs and lows */}
            <motion.path
              d="M 0 60 Q 30 50 60 60 T 120 60 T 180 60 Q 200 35 220 5 Q 240 40 260 60 Q 280 48 310 60 T 370 60 T 430 60 Q 450 32 470 -5 Q 490 45 510 60 Q 530 52 560 60 T 620 60 T 680 60 Q 700 38 720 8 Q 740 42 760 60 Q 780 50 810 60 T 870 60 T 930 60 Q 950 30 970 -8 Q 990 48 1010 60 Q 1030 51 1060 60 T 1120 60 T 1200 60"
              stroke="url(#ecg-gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="1800"
              initial={{ strokeDashoffset: 1800 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <defs>
              {/* ECG pulse gradient with reduced opacity */}
              <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(74, 222, 128, 0.1)" />
                <stop offset="15%" stopColor="rgba(74, 222, 128, 0.3)" />
                <stop offset="30%" stopColor="rgba(16, 185, 129, 0.5)" />
                <stop offset="35%" stopColor="rgba(34, 197, 94, 0.5)" />
                <stop offset="40%" stopColor="rgba(74, 222, 128, 0.5)" />
                <stop offset="50%" stopColor="rgba(74, 222, 128, 0.4)" />
                <stop offset="65%" stopColor="rgba(16, 185, 129, 0.5)" />
                <stop offset="80%" stopColor="rgba(74, 222, 128, 0.3)" />
                <stop offset="100%" stopColor="rgba(74, 222, 128, 0.1)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Process Steps */}
          <div className="grid grid-cols-6 gap-6 relative" style={{ zIndex: 2 }}>
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={0.15 * index}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  onHoverStart={playHeartbeat}
                  onClick={playHeartbeat}
                  className="flex flex-col items-center text-center cursor-pointer"
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl" />

                    {/* Icon circle */}
                    <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-green-400/30 hover:shadow-green-400/50 transition-all duration-300" style={{
                      background: 'linear-gradient(to bottom right, rgb(74, 222, 128) 0%, rgb(34, 197, 94) 100%)'
                    }}>
                      <div className="text-black">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-black border-2 border-green-400 rounded-full flex items-center justify-center text-green-400 text-xs font-bold">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Process Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.1 * index}>
              <motion.div
                whileHover={{ x: 5 }}
                className="relative flex items-start gap-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
              >
                {/* Vertical connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-11 top-20 bottom-0 w-0.5" style={{
                    background: 'linear-gradient(to bottom, rgba(74, 222, 128, 0.3) 0%, transparent 100%)'
                  }} />
                )}

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg shadow-green-400/20" style={{
                    background: 'linear-gradient(to bottom right, rgb(74, 222, 128) 0%, rgb(34, 197, 94) 100%)'
                  }}>
                    <div className="text-black">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black border-2 border-green-400 rounded-full flex items-center justify-center text-green-400 text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
            >
              <p className="text-2xl text-gray-300 mb-4">
                <span className="text-green-400 font-semibold">Simple, proven, effective.</span>
              </p>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We handle the complexity so you can focus on what you do best. Let's build your growth system together.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowWeDoIt;
