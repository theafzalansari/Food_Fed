import React from 'react';
import { MessageSquare, Phone, Heart, Sparkles, ExternalLink, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function VolunteerSection() {
  return (
    <section id="volunteer" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#84A98C]/30">
            <Heart className="w-4 h-4 text-[#D96B43]" />
            <span>Community Action • Nashik</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-4">
            Be Part of the Change.
          </h2>

          <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed mb-4">
            Whether you want to volunteer, contribute surplus food, connect us with a community organisation, or simply share an idea — we'd love to hear from you.
          </p>

          <p className="text-xs text-[#2D563F] font-semibold flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#D96B43]" />
            <span>Food Fed is currently being developed as a CEP initiative in Nashik.</span>
          </p>
        </div>

        {/* 2 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.contacts.map((person, idx) => (
            <div
              key={idx}
              className="bg-[#F4EFE6] rounded-3xl p-8 border border-[#E8DFD1] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${idx === 0 ? 'bg-[#1B382B]' : 'bg-[#D96B43]'} text-white font-display font-extrabold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#1B382B]">
                      {person.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#2D563F]">
                      {person.role}
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8DFD1] mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E2EBE4] flex items-center justify-center text-[#1B382B]">
                      <Phone className="w-4 h-4 text-[#2D563F]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#4F5E56] uppercase font-bold tracking-wider">Phone</p>
                      <p className="text-sm font-bold text-[#1B382B]">{person.phoneDisplay}</p>
                    </div>
                  </div>
                  <a
                    href={`tel:${person.phoneRaw}`}
                    className="text-xs font-semibold text-[#2D563F] hover:underline"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA Button */}
              <a
                href={person.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 group-hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Connect on WhatsApp</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>
            </div>
          ))}
        </div>

        {/* Development Notice Disclaimer */}
        <div className="mt-12 text-center max-w-xl mx-auto bg-[#E2EBE4] rounded-2xl p-4 border border-[#84A98C]/30 text-xs text-[#1B382B]">
          <div className="flex items-center justify-center gap-2 font-bold mb-1">
            <Sparkles className="w-4 h-4 text-[#D96B43]" />
            <span>Nashik CEP Initiative Notice</span>
          </div>
          <p className="text-[#4F5E56]">
            Food Fed is an active student proposal under the Community Engagement Program (CEP). We welcome student volunteers, mentors, and local food establishment partners across Nashik.
          </p>
        </div>

      </div>
    </section>
  );
}
