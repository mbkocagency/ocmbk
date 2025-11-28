import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PromoBar = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-green-400 to-green-500 py-1 shadow-md backdrop-blur-md"
      style={{
        height: '28px', // thinner bar
        lineHeight: '28px',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white font-medium text-[11px] md:text-xs tracking-wide"
        >
          🎉 Launch Offer <span className="font-semibold">30% OFF our first month</span> 🚀
        </motion.p>
       
      </div>
    </motion.div>
  );
};

export default PromoBar;
