import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import OurModelSection from './components/OurModelSection';
import HowItWorksSection from './components/HowItWorksSection';
import VisionSection from './components/VisionSection';
import SupportSection from './components/SupportSection';
import TeamSection from './components/TeamSection';
import FeedbackSection from './components/FeedbackSection';
import VolunteerSection from './components/VolunteerSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C2621] font-sans selection:bg-[#2D563F] selection:text-[#FAF7F2]">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero />

        {/* 3. The Problem */}
        <ProblemSection />

        {/* 4. Our Model */}
        <OurModelSection />

        {/* 5. How Food Fed Works */}
        <HowItWorksSection />

        {/* 6. Our Vision */}
        <VisionSection />

        {/* 7. Support Food Fed / UPI Scanner */}
        <SupportSection />

        {/* 8. Meet the Team */}
        <TeamSection />

        {/* 9. Help Us Shape Food Fed / Feedback */}
        <FeedbackSection />

        {/* 10. Volunteer / Contact */}
        <VolunteerSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
