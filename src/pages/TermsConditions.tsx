import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TermsConditions = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8">Last updated: November 2025</p>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Welcome to OC Agency. By using our website and/or services, you agree to these terms.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Eligibility & use:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must be 18 or older (or have guardian approval) to access our services.</li>
                <li>You agree not to misuse or damage our site, network, or content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Services & payments:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All service descriptions are on our site. Pricing, if applicable, will be clearly shown.</li>
                <li>Payments (if any) must be made through approved channels. We reserve the right to refuse service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Intellectual property:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All content, materials, graphics, trademarks on this site are owned by OC Agency. You may not reuse without permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Limitation of liability:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We are not liable for indirect or consequential damages arising from use of our site or services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Updates & termination:</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We may update these terms at any time. Continued use means you accept the new terms.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
