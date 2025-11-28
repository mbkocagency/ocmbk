import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ComparisonSection = () => {
  const comparisonData = {
    others: [
      'Generic content templates',
      'Monthly reporting only',
      'Separate teams for different platforms',
      'Long-term contracts required',
      'One-size-fits-all approach'
    ],
    oc: [
      'If it doesn\'t work, we refund you',
      'Start small and see if we\'re a good fit',
      'Facebook, Instagram, Google, we cover it all',
      'Stay flexible - no long-term commitments required',
      'Regular calls to review what\'s working'
    ]
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">
              The difference
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white">Why choose </span>
              <br className="hidden sm:block" />
              <span className="text-green-400">OC Agency</span>
              <span className="text-white"> over </span>
              <br className="hidden sm:block" />
              <span className="text-gray-400 italic">everyone else?</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="text-green-400 font-bold text-lg">OC Agency</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Other Agencies Column */}
          <ScrollReveal delay={0.4}>
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-400 mb-8">Other Agencies</h3>
              <div className="space-y-4">
                {comparisonData.others.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-100/5 hover:bg-gray-100/10 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* OC Agency Column */}
          <ScrollReveal delay={0.5}>
            <motion.div
              whileHover={{ y: -5 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-8">OC Agency</h3>
              <div className="space-y-4">
                {comparisonData.oc.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-green-400/5 hover:bg-green-400/10 transition-colors duration-300 border border-green-400/20 hover:border-green-400/40"
                  >
                    <Check size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <ScrollReveal delay={0.8}>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-green-400 text-black font-bold text-lg rounded-xl hover:bg-green-300 transition-all duration-200 shadow-lg shadow-green-400/20 hover:shadow-green-400/40"
            >
             Explore More Differences
            </motion.button>
          </ScrollReveal>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ComparisonSection;
