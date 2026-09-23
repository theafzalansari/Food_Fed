import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import OurModelSection from './components/OurModelSection';
import HowItWorksSection from './components/HowItWorksSection';
import VisionSection from './components/VisionSection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C2621] font-sans selection:bg-[#2D563F] selection:text-[#FAF7F2]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <ProblemSection />
        <OurModelSection />
        <HowItWorksSection />
        <VisionSection />
        <VolunteerSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
