import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, ArrowUpRight, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Our Model', href: '#our-model' },
    { name: 'Impact', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Support', href: '#support' },
    { name: 'Team', href: '#team' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Volunteer', href: '#volunteer' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-[#1B382B]/5 border border-[#E8DFD1] py-2.5 px-4 sm:px-6'
            : 'bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E8DFD1]/70 py-3 px-5 sm:px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1B382B]/20 group-hover:border-[#1B382B]/50 transition-all duration-300 shadow-sm shrink-0 bg-white p-0.5">
              <img
                src="/logo.jpeg"
                alt="Food Fed Official Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-[#1B382B]">
                  FOOD FED
                </span>
                <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#E2EBE4] text-[#1B382B] border border-[#84A98C]/30">
                  <MapPin className="w-2.5 h-2.5 text-[#D96B43]" />
                  Nashik CEP
                </span>
              </div>
              <span className="text-[10px] text-[#4F5E56] font-medium tracking-tight -mt-0.5 hidden xs:inline-block">
                Surplus → Sustenance
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-medium text-[#1C2621]/80 hover:text-[#1B382B] hover:bg-[#E2EBE4]/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#support"
              className="text-xs font-bold text-[#D96B43] hover:text-[#C55730] px-3 py-2 rounded-full hover:bg-[#F9EBE6] transition-colors"
            >
              Support Us
            </a>
            <a
              href="#volunteer"
              className="inline-flex items-center gap-1.5 bg-[#1B382B] hover:bg-[#2D563F] text-[#FAF7F2] text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#1B382B]/10 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Join Initiative</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#84A98C]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1B382B] hover:bg-[#E2EBE4] rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-[#FAF7F2] border border-[#E8DFD1] shadow-xl p-5 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E8DFD1]">
            <div className="flex items-center gap-2">
              <img src="/logo.jpeg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#4F5E56]">
                Navigation
              </span>
            </div>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F9EBE6] text-[#D96B43] font-semibold border border-[#D96B43]/30">
              Nashik CEP Initiative
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-[#1C2621] hover:bg-[#E2EBE4] hover:text-[#1B382B] rounded-2xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#84A98C]">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#E8DFD1] mt-1 flex flex-col gap-2">
              <a
                href="#support"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#D96B43] hover:bg-[#C55730] text-white text-center font-bold py-2.5 rounded-xl shadow-xs transition-colors text-sm"
              >
                <span>Support Food Fed (Scanner)</span>
              </a>
              <a
                href="#volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#1B382B] hover:bg-[#2D563F] text-[#FAF7F2] text-center font-semibold py-2.5 rounded-xl shadow-md transition-colors text-sm"
              >
                <HeartHandshake className="w-4 h-4 text-[#84A98C]" />
                <span>Become a Volunteer</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
