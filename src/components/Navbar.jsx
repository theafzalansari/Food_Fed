import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, HeartHandshake, ArrowUpRight } from 'lucide-react';

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
    { name: 'Impact & Problem', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Volunteer', href: '#volunteer' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-[#1B382B]/5 border border-[#E8DFD1] py-3 px-5 sm:px-8'
            : 'bg-[#FAF7F2]/90 backdrop-blur-md border border-[#E8DFD1]/60 py-4 px-6 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & CEP Badge */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1B382B] text-[#FAF7F2] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#2D563F] shadow-sm">
              <Sprout className="w-5 h-5 text-[#84A98C] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl tracking-wider text-[#1B382B]">
                  FOOD FED
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#E2EBE4] text-[#1B382B] border border-[#84A98C]/30">
                  CEP Initiative
                </span>
              </div>
              <span className="text-[10px] text-[#4F5E56] font-medium tracking-tight -mt-0.5 hidden xs:inline-block">
                Surplus → Sustenance
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#1C2621]/80 hover:text-[#1B382B] hover:bg-[#E2EBE4]/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#volunteer"
              className="inline-flex items-center gap-2 bg-[#1B382B] hover:bg-[#2D563F] text-[#FAF7F2] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-[#1B382B]/10 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Join Initiative</span>
              <ArrowUpRight className="w-4 h-4 text-[#84A98C]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-[#1B382B] hover:bg-[#E2EBE4] rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-3xl bg-[#FAF7F2] border border-[#E8DFD1] shadow-xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD1]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4F5E56]">
              Navigation
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#E2EBE4] text-[#1B382B] font-semibold">
              Student CEP Initiative
            </span>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-[#1C2621] hover:bg-[#E2EBE4] hover:text-[#1B382B] rounded-2xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#84A98C]">→</span>
              </a>
            ))}
            <div className="pt-4 border-t border-[#E8DFD1] mt-2">
              <a
                href="#volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#1B382B] hover:bg-[#2D563F] text-[#FAF7F2] text-center font-semibold py-3.5 rounded-2xl shadow-md transition-colors"
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
