import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  X,
  Linkedin,
  Instagram
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'offchartsacademy@gmail.com',
      link: 'mailto:offchartsacademy@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone / WhatsApp',
      value: '+91 9164690573',
      link: 'tel:+919164690573',
      whatsappLink: 'https://wa.me/919164690573'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone / WhatsApp',
      value: '+91 8310958789',
      link: 'tel:+918310958789',
      whatsappLink: 'https://wa.me/918310958789'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'India',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/company/oc-marketing-agency/', label: 'LinkedIn' },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: 'https://x.com/realocagency',
      label: 'X'
    },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/real.ocagency', label: 'Instagram' }
  ];

  // Book a Call - Opens Calendly in new tab
  const handleBookCall = () => {
    window.open('https://calendly.com/offchartsacademy/transformation-call', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(17, 24, 39) 100%)'
    }}>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <ScrollReveal delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">We will make it</span>
              <span className="text-green-400 ml-3">Easy</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              You don't have to go through the hasstle of not being able to manage and scale, get in a call to know more
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Book a Call CTA */}
          <ScrollReveal delay={0.2}>
            <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-2xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-6">Just One Click Away</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Book a call with our team. We'll fill your calender, get more clients in just 30 days gauranteed 
              </p>

              {/* Benefits List */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Free Strategy Session</h4>
                    <p className="text-gray-400 text-sm">Get expert insights into your growth opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Custom Growth Plan</h4>
                    <p className="text-gray-400 text-sm">Receive a personalized roadmap for your business</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">No Commitment Required</h4>
                    <p className="text-gray-400 text-sm">Just a friendly chat about how we can help</p>
                  </div>
                </div>
              </div>

              {/* CTA Button with Glow Effect */}
              <motion.button
                onClick={handleBookCall}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="cta-glow w-full bg-green-400 text-black font-bold py-5 px-8 rounded-xl hover:bg-green-300 transition-all duration-200 flex items-center justify-center gap-3"
                aria-label="Book a free consultation call"
              >
                <Calendar size={24} />
                <span className="text-lg">Book Your Transformation Call</span>
              </motion.button>

              <p className="text-gray-500 text-sm text-center mt-6">
                Choose a time that works best for you. No sales pressure, just valuable insights.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact Information */}
          <div className="space-y-8">
            <ScrollReveal delay={0.4}>
              <h3 className="text-3xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 mb-10 leading-relaxed text-lg">
               Solutions to your multiple problems one click away
              </p>
            </ScrollReveal>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 rounded-xl hover:border-green-400/40 hover:bg-gray-900/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      <div className="flex-shrink-0 w-14 h-14 bg-green-400 rounded-xl flex items-center justify-center shadow-lg">
                        <div className="text-black">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-base mb-1">{info.title}</h4>
                        <p className="text-gray-400 text-sm break-words">{info.value}</p>
                      </div>
                    </div>
                    {info.link && (
                      <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:flex-shrink-0">
                        <motion.button
                          onClick={() => window.open(info.link!, '_blank')}
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 sm:flex-none px-4 py-2 bg-green-400 text-black text-sm font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 shadow-md whitespace-nowrap"
                        >
                          Connect
                        </motion.button>
                        {(info as any).whatsappLink && (
                          <motion.button
                            onClick={() => window.open((info as any).whatsappLink, '_blank')}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 sm:flex-none px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 shadow-md whitespace-nowrap"
                          >
                            WhatsApp
                          </motion.button>
                        )}
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Social Links */}
            <ScrollReveal delay={0.6}>
              <h4 className="text-xl font-bold text-white mb-5 mt-10">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/60 rounded-xl flex items-center justify-center text-gray-400 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all duration-300 shadow-md hover:shadow-green-400/20"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;