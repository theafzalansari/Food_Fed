import React from 'react';
import { Sprout, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12281D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#84A98C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F2]/10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2D563F] text-[#84A98C] flex items-center justify-center shadow-inner">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-[#FAF7F2]">
                FOOD FED
              </span>
            </div>

            <p className="text-base font-semibold text-[#84A98C] italic mb-3">
              "From Surplus to Sustenance. From Waste to Renewal."
            </p>

            <p className="text-xs text-[#FAF7F2]/70 max-w-md leading-relaxed mb-4">
              Food Fed is a proposed Community Engagement Program (CEP) initiative exploring practical solutions to reduce food waste, feed communities, and enrich soil ecosystems.
            </p>

            <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#2D563F] text-[#84A98C] border border-[#84A98C]/30">
              Student-led CEP initiative
            </span>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#84A98C] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              <li>
                <a href="#about" className="hover:text-[#84A98C] transition-colors">
                  About Initiative
                </a>
              </li>
              <li>
                <a href="#our-model" className="hover:text-[#84A98C] transition-colors">
                  Dual-Path Model
                </a>
              </li>
              <li>
                <a href="#problem" className="hover:text-[#84A98C] transition-colors">
                  Hunger & Waste Data
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#84A98C] transition-colors">
                  4-Step Process
                </a>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-[#84A98C] transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Key Principles */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#84A98C] mb-4">
              Core Principles
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF7F2]/70">
              <li>• Edible Food Redistribution</li>
              <li>• Rigorous Quality Checks</li>
              <li>• Composting & Biogas Renewal</li>
              <li>• Zero Landfill Diversion</li>
              <li>• Community-Centric Impact</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© 2026 Food Fed. Student-led CEP initiative.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B382B] hover:bg-[#2D563F] text-[#84A98C] hover:text-white transition-colors border border-[#84A98C]/30"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
