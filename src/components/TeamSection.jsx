import React from 'react';
import { Users, GraduationCap, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#84A98C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#84A98C]/30">
            <GraduationCap className="w-4 h-4 text-[#2D563F]" />
            <span>Student CEP Leadership</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-4">
            Built by Students. Driven by Community.
          </h2>

          <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed">
            Food Fed is being developed as a Community Engagement Program initiative by students working together to turn an idea into local action.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2D563F] bg-[#FAF7F2] px-4 py-1.5 rounded-full border border-[#E8DFD1]">
            <MapPin className="w-3.5 h-3.5 text-[#D96B43]" />
            <span>Based in Nashik, Maharashtra</span>
          </div>
        </div>

        {/* Team Cards Grid */}
        {/* Row 1: Founders / Directors (2 cards, slightly larger/emphasized) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {siteConfig.team.slice(0, 2).map((member, idx) => (
            <div
              key={idx}
              className="bg-[#F4EFE6] rounded-3xl p-8 border-2 border-[#1B382B]/20 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#1B382B] text-[#FAF7F2] text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                {member.badge}
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#1B382B] text-[#FAF7F2] font-display font-extrabold text-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  {member.initials}
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-[#1B382B] tracking-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-bold text-[#D96B43] mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#4F5E56] font-medium">
                    Focus: {member.subrole}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFD1] flex items-center justify-between text-xs text-[#4F5E56]">
                <span className="flex items-center gap-1 font-semibold text-[#2D563F]">
                  <Sparkles className="w-3.5 h-3.5" />
                  CEP Core Lead
                </span>
                <span className="text-[11px] font-medium bg-[#E2EBE4] px-2.5 py-0.5 rounded-full text-[#1B382B]">
                  Nashik Initiative
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Team Members (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {siteConfig.team.slice(2).map((member, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-[#E8DFD1] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D563F] text-[#FAF7F2] font-display font-bold text-lg flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {member.initials}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E2EBE4] text-[#1B382B]">
                    {member.badge}
                  </span>
                </div>

                <h4 className="font-display font-bold text-xl text-[#1B382B] mb-1">
                  {member.name}
                </h4>
                <p className="text-xs font-semibold text-[#2D563F] leading-snug">
                  {member.role}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8DFD1]/80 text-[11px] text-[#4F5E56]">
                Field Action • Nashik Team
              </div>
            </div>
          ))}
        </div>

        {/* Team Footer Note */}
        <div className="mt-12 text-center text-xs text-[#4F5E56] max-w-xl mx-auto bg-[#F4EFE6] p-4 rounded-2xl border border-[#E8DFD1]">
          🤝 <span className="font-semibold text-[#1B382B]">Student Collaboration:</span> Designed as part of an active Community Engagement Program (CEP) project framework in Nashik.
        </div>

      </div>
    </section>
  );
}
