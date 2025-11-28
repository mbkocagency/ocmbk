import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-green-400/30">
                <img
                  src="/channels4_profile.jpg"
                  alt="OC Agency Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">OC</span>
                <span className="text-green-400 ml-1">Agency</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Where ambition meets execution. We transform growing businesses through strategic marketing, automation, and growth solutions.
            </p>
            <div className="text-gray-500 text-sm">
              <p>📧 offchartsacademy@gmail.com</p>
              <p>📱 +91 9164690573 | +91 8310958789</p>
              <p>📍 India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Marketing Strategy</li>
              <li>Content Creation</li>
              <li>Social Media Management</li>
              <li>AI Automations</li>
              <li>Financial Management</li>
              <li>B2B Growth Solutions</li>
            </ul>
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <p className="text-gray-500 text-sm text-center mb-6">Trusted Partners</p>
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
            <div className="w-16 h-16 md:w-20 md:h-20 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img
                src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUDS64yNtx85Q6MsUDlWj439EF7T0cKJNZfi2n"
                alt="Writers Ecosystem"
                className="w-full h-full object-contain filter brightness-90"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img
                src="/wackylogo.jpeg"
                alt="Wacky Villamayor"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 opacity-50 hover:opacity-100 transition-opacity duration-300">
              <img
                src="https://gqfceyfkcu.ufs.sh/f/wBMRSkb97ITUgZkxE1S1UrfBe9a2AnKOV84cSyuhRvi3T0lJ"
                alt="RXN Sports Brand"
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 OC Agency. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-green-400 transition-colors">Terms & Conditions</Link>
              <Link to="/cookie-policy" className="hover:text-green-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;