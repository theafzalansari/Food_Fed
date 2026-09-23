import React from 'react';
import { ArrowUp, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12281D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#84A98C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF7F2]/10">
          
          {/* Brand Column with Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#84A98C]/40 bg-white p-0.5 shadow-md">
                <img
                  src="/logo.jpeg"
                  alt="Food Fed Official Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-[#FAF7F2]">
                FOOD FED
              </span>
            </div>

            <p className="text-base font-semibold text-[#84A98C] italic mb-3">
              "From Surplus to Sustenance. From Waste to Renewal."
            </p>

            <p className="text-xs text-[#FAF7F2]/70 max-w-md leading-relaxed mb-4">
              Food Fed is a proposed Community Engagement Program (CEP) initiative exploring practical solutions to reduce food waste, feed communities, and enrich soil ecosystems in Nashik.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#2D563F] text-[#84A98C] border border-[#84A98C]/30">
                Student-led Community Engagement Program initiative
              </span>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D96B43]/20 text-[#D96B43] border border-[#D96B43]/40">
                <MapPin className="w-3 h-3 text-[#D96B43]" />
                Currently serving Nashik
              </span>
            </div>
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
                <a href="#support" className="hover:text-[#84A98C] transition-colors">
                  Support Food Fed
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#84A98C] transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-[#84A98C] transition-colors">
                  Give Feedback
                </a>
              </li>
              <li>
                <a href="#volunteer" className="hover:text-[#84A98C] transition-colors">
                  Volunteer & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Contact Links */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#84A98C] mb-4">
              Direct Contact (Nashik)
            </h4>
            <div className="space-y-3">
              {siteConfig.contacts.map((contact, i) => (
                <a
                  key={i}
                  href={contact.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#1B382B] hover:bg-[#2D563F] border border-[#84A98C]/20 transition-colors group"
                >
                  <div>
                    <p className="text-xs font-bold text-[#FAF7F2]">{contact.name}</p>
                    <p className="text-[11px] text-[#84A98C]">{contact.phoneDisplay}</p>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>© 2026 Food Fed. Student-led CEP initiative. Currently serving Nashik.</p>
          
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
