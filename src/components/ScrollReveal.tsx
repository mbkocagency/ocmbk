import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.1
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce: false });
  const scrollDirection = useScrollDirection();

  // Optimized initial positions - reduced by ~30% for faster animations
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 42, x: 0 };
      case 'down': return { y: -42, x: 0 };
      case 'left': return { y: 0, x: 42 };
      case 'right': return { y: 0, x: -42 };
      default: return { y: 42, x: 0 };
    }
  };

  // Optimized animation variants - 25-30% faster with GPU acceleration hints
  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: scrollDirection === 'up' ? 0.63 : 0.56,
        delay: scrollDirection === 'up' ? delay * 0.5 : delay * 0.85,
        ease: scrollDirection === 'up' ? [0.16, 1, 0.3, 1] : [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;