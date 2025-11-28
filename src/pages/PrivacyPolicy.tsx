import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last updated: November 2025</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              At OC Agency we respect your privacy and are committed to protecting your personal information.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">What we collect:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email, phone – when you contact us or subscribe.</li>
                <li>Usage data (e.g., pages visited, device type) – to improve our service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">How we use it:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To respond to inquiries, send updates, and deliver our services.</li>
                <li>To analyse site usage, improve content and personalise our offering.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Your rights & data security:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You may request correction or deletion of your personal data by emailing support@oc-agency.com.</li>
                <li>We do not sell or rent your data. We use industry-standard security measures.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Cookies & third parties:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We use cookies to remember preferences and improve performance.</li>
                <li>We work with trusted service providers who only act on our behalf.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Changes:</h2>
              <p>We may update this policy. Continued use of our site means you accept any changes.</p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
