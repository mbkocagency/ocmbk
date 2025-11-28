import React from 'react';
import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'gradient';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'gradient' }) => {
  return (
    <div className="w-full py-8">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="h-px w-full mx-auto"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(74, 222, 128, 0.4) 15%, rgba(74, 222, 128, 0.5) 50%, rgba(74, 222, 128, 0.4) 85%, transparent 100%)'
        }}
      />
    </div>
  );
};

export default SectionDivider;
