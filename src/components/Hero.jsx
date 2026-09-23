import React from 'react';
import { ArrowDown, HeartHandshake, Sparkles, ShieldCheck, RefreshCw, Leaf } from 'lucide-react';
import SafeImage from './SafeImage';

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
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E2EBE4] border border-[#84A98C]/40 text-[#1B382B] text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#D96B43] animate-ping" />
              <span>Proposed Community Engagement Program (CEP)</span>
              <span className="text-[#4F5E56] font-normal">| Student-Led</span>
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

            {/* Explanation paragraph */}
            <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed max-w-2xl mb-8">
              <strong className="text-[#1B382B] font-semibold">Food Fed</strong> is a student-led CEP initiative exploring a practical way to connect surplus edible food with people who need it — while giving unavoidable organic waste a second life through composting and biogas.
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

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame with Warm Organic Border */}
              <div className="relative rounded-[2.5rem] overflow-hidden p-3 bg-gradient-to-b from-[#F4EFE6] to-[#E2EBE4] border border-[#E8DFD1] shadow-2xl">
                
                {/* Primary Food Image */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-md">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1000&q=80"
                    alt="Fresh organic food surplus ready for redistribution"
                    className="w-full h-full"
                    fallbackBg="bg-[#1B382B]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B382B]/80 via-transparent to-transparent" />
                  
                  {/* Overlay Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#D96B43] px-2.5 py-1 rounded-full mb-2">
                      CEP Vision Model
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#FAF7F2]">
                      Community Food Redistribution
                    </h3>
                    <p className="text-xs text-white/80 mt-1">
                      Connecting excess edible meals to neighborhoods while turning unconsumable food into rich compost.
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Card 1: Food Rescue Badge */}
              <div className="absolute -top-6 -left-6 sm:-left-8 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] shadow-xl max-w-[200px] animate-float hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B382B] text-[#FAF7F2] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#84A98C]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B382B]">Zero Food Waste</p>
                    <p className="text-[11px] text-[#4F5E56]">Every morsel counts</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Soil Renewal Badge */}
              <div className="absolute -bottom-6 -right-6 sm:-right-8 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1] shadow-xl max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D96B43] text-white flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1B382B]">Waste to Biogas & Soil</p>
                    <p className="text-[11px] text-[#4F5E56]">Organic loop closed</p>
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
