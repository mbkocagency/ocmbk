import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          whileHover={{ x: -5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: November 2025</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              OC Agency uses cookies and similar technologies to support site functionality and to help us understand how visitors use our site.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">What cookies do:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and login sessions.</li>
                <li>Measure usage and improve our website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Your control:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You can delete or block cookies via your browser settings. Doing so may affect how parts of our site work.</li>
                <li>By continuing to use our site, you consent to our cookie practices.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
