import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PromoBar from './components/PromoBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Agitation from './components/Agitation';
import Services from './components/Services';
import Comparison from './components/Comparison';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsConditions from './pages/TermsConditions';

const HomePage = () => (
  <>
    <PromoBar />
    <Navigation />
    <main>
      <Hero />
      <SectionDivider variant="gradient" />
      <PainPoints />
      <SectionDivider variant="gradient" />
      <Agitation />
      <SectionDivider variant="gradient" />
      <Services />
      <SectionDivider variant="gradient" />
      <Comparison />
      <SectionDivider variant="gradient" />
      <SocialProof />
      <SectionDivider variant="gradient" />
      <About />
      <SectionDivider variant="gradient" />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-black text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;