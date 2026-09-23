import React from 'react';
import { ArrowDown, HeartHandshake, Sparkles, ShieldCheck, RefreshCw, Leaf, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-overlay">
      {/* Decorative ambient background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#84A98C]/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#D96B43]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Storytelling */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline & Location Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] border border-[#84A98C]/40 text-[#1B382B] text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-ping" />
                <span>Proposed Community Engagement Program (CEP)</span>
                <span className="text-[#4F5E56] font-normal hidden sm:inline">| Student-Led</span>
              </div>

              {/* Nashik Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9EBE6] border border-[#D96B43]/30 text-[#D96B43] text-xs font-bold shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#D96B43]" />
                <span>Currently Serving Nashik • Maharashtra</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1B382B] tracking-tight leading-[1.08] mb-6">
              Turning Surplus <br />
              <span className="text-[#D96B43] relative inline-block">
                Into Sustenance.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D96B43]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Hero Quote */}
            <p className="text-xl sm:text-2xl font-medium text-[#2D563F] italic leading-snug mb-6 border-l-4 border-[#D96B43] pl-4 py-1">
              "Food shouldn't become waste before it becomes a meal."
            </p>

            {/* Brief explanation paragraph */}
            <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed max-w-2xl mb-8">
              <strong className="text-[#1B382B] font-semibold">Food Fed</strong> is a student-led CEP initiative exploring a practical way to connect surplus edible food with people who need it — while giving unavoidable organic waste a second life. Starting in <strong className="text-[#1B382B]">Nashik</strong>, we aim to build a practical community food-rescue model that can grow with local participation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#our-model"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#1B382B] hover:bg-[#2D563F] text-[#FAF7F2] font-semibold px-7 py-4 rounded-full shadow-lg shadow-[#1B382B]/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Our Idea</span>
                <ArrowDown className="w-5 h-5 text-[#84A98C]" />
              </a>

              <a
                href="#volunteer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FAF7F2] hover:bg-[#F4EFE6] text-[#1B382B] font-semibold px-7 py-4 rounded-full border-2 border-[#1B382B]/20 hover:border-[#1B382B]/40 transition-all duration-200"
              >
                <HeartHandshake className="w-5 h-5 text-[#D96B43]" />
                <span>Become a Volunteer</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-[#E8DFD1] w-full max-w-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E2EBE4] flex items-center justify-center text-[#1B382B] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#2D563F]" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#1B382B]">Safety First</p>
                  <p className="text-[#4F5E56]">Checked & Verified</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F9EBE6] flex items-center justify-center text-[#D96B43] shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#1B382B]">Dual Pathway</p>
                  <p className="text-[#4F5E56]">Food + Organic Waste</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E2EBE4] flex items-center justify-center text-[#1B382B] shrink-0">
                  <Leaf className="w-4 h-4 text-[#84A98C]" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#1B382B]">Nutrient Loop</p>
                  <p className="text-[#4F5E56]">Soil Renewal</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Container with Actual Food Fed Poster */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Warm Organic Border */}
              <div className="relative rounded-[2.5rem] p-4 sm:p-5 bg-gradient-to-b from-[#FAF7F2] to-[#F4EFE6] border-2 border-[#1B382B]/15 shadow-2xl">
                
                {/* Header Label above Poster */}
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest bg-[#1B382B] text-[#FAF7F2] px-3 py-1 rounded-full shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#84A98C]" />
                    OUR PROPOSED MODEL
                  </span>
                  <span className="text-[10px] font-bold text-[#D96B43] uppercase tracking-wider bg-[#F9EBE6] px-2.5 py-0.5 rounded-full border border-[#D96B43]/30">
                    Nashik CEP
                  </span>
                </div>

                {/* Poster Container using /poster.jpeg */}
                <div className="relative rounded-[1.8rem] overflow-hidden bg-white border border-[#E8DFD1] shadow-inner group flex items-center justify-center p-2">
                  <img
                    src="/poster.jpeg"
                    alt="Food Fed Official Proposed Model Poster"
                    className="w-full h-auto object-contain rounded-xl max-h-[520px] transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </div>

                {/* Subtle Subtitle below Poster */}
                <div className="mt-3 pt-3 border-t border-[#E8DFD1] text-center">
                  <p className="text-xs font-bold text-[#1B382B]">
                    "One food system. Two responsible pathways."
                  </p>
                  <p className="text-[11px] text-[#4F5E56] mt-0.5">
                    Connecting surplus food to people & organic waste to earth.
                  </p>
                </div>

              </div>

              {/* Floating Badge 1: Zero Food Waste */}
              <div className="absolute -top-5 -left-5 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1] shadow-xl max-w-[190px] animate-float hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#1B382B] text-[#FAF7F2] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-[#84A98C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B382B]">Official Poster</p>
                    <p className="text-[10px] text-[#4F5E56]">CEP Framework</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Soil Renewal */}
              <div className="absolute -bottom-5 -right-5 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#E8DFD1] shadow-xl max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#D96B43] text-white flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B382B]">Zero Food Waste</p>
                    <p className="text-[10px] text-[#4F5E56]">Organic loop closed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
