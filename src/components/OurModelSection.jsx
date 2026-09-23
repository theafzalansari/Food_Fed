import React, { useState } from 'react';
import { 
  Utensils, 
  SearchCheck, 
  Heart, 
  Sparkles, 
  Recycle, 
  Flame, 
  Sprout, 
  ArrowDown, 
  CheckCircle2, 
  XCircle,
  HelpCircle
} from 'lucide-react';

export default function OurModelSection() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'safe', 'waste'

  return (
    <section id="our-model" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#84A98C]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] mb-4">
            Visual Framework
          </span>
          
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-4">
            One Surplus. Two Possible Paths.
          </h2>
          
          <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed">
            Our proposed CEP model ensures that zero edible food is lost, while unconsumable organic waste is systematically recycled into clean energy and soil nutrients.
          </p>

          {/* Interactive Path Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-[#1B382B] text-[#FAF7F2] shadow-md'
                  : 'bg-[#F4EFE6] text-[#4F5E56] hover:bg-[#E2EBE4] hover:text-[#1B382B]'
              }`}
            >
              🔄 Full Closed-Loop Flow
            </button>

            <button
              onClick={() => setActiveTab('safe')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'safe'
                  ? 'bg-[#2D563F] text-[#FAF7F2] shadow-md'
                  : 'bg-[#F4EFE6] text-[#4F5E56] hover:bg-[#E2EBE4] hover:text-[#2D563F]'
              }`}
            >
              🥗 Safe Food Path (Meals)
            </button>

            <button
              onClick={() => setActiveTab('waste')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'waste'
                  ? 'bg-[#D96B43] text-white shadow-md'
                  : 'bg-[#F4EFE6] text-[#4F5E56] hover:bg-[#F9EBE6] hover:text-[#D96B43]'
              }`}
            >
              🌱 Organic Waste Path (Soil & Energy)
            </button>
          </div>
        </div>

        {/* Visually Dominant Interactive Flowchart */}
        <div className="bg-[#F4EFE6] rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-[#E8DFD1] shadow-xl relative">
          
          {/* STEP 1: SURPLUS FOOD (ROOT) */}
          <div className="flex flex-col items-center mb-8">
            <div className="bg-[#1B382B] text-[#FAF7F2] p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-[#84A98C]/40 text-center max-w-md w-full relative group transition-transform duration-300 hover:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#84A98C] text-[#1B382B] text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Starting Point
              </div>
              
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#2D563F] flex items-center justify-center mb-3">
                <Utensils className="w-7 h-7 text-[#FAF7F2]" />
              </div>
              
              <h3 className="font-display text-2xl font-bold tracking-tight mb-1">
                SURPLUS FOOD
              </h3>
              <p className="text-xs text-[#FAF7F2]/80">
                Homes • Restaurants • Events • Canteens
              </p>
            </div>

            {/* Connecting Vertical Arrow */}
            <div className="my-4 flex flex-col items-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-[#1B382B] to-[#2D563F]" />
              <div className="w-6 h-6 rounded-full bg-[#2D563F] text-white flex items-center justify-center shadow-xs">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            </div>
          </div>

          {/* STEP 2: COLLECT & CHECK (TRIAGE NODE) */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#FAF7F2] p-6 rounded-3xl border-2 border-[#1B382B]/20 shadow-md text-center max-w-md w-full relative group hover:border-[#1B382B]/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#E2EBE4] flex items-center justify-center text-[#1B382B] mb-2">
                <SearchCheck className="w-6 h-6 text-[#2D563F]" />
              </div>

              <h4 className="font-display text-xl font-bold text-[#1B382B] mb-1">
                COLLECT & CHECK
              </h4>
              <p className="text-xs text-[#4F5E56]">
                Safety, freshness, and suitability inspection prior to any redistribution.
              </p>
            </div>
          </div>

          {/* DUAL BRANCH SPLIT (SAFE VS UNSAFE) */}
          <div className="relative">
            
            {/* Desktop Flow Split Diagram Header */}
            <div className="hidden lg:grid grid-cols-2 gap-12 mb-8 text-center font-display font-bold text-lg">
              <div className="flex items-center justify-center gap-2 text-[#2D563F] bg-[#E2EBE4] py-3 rounded-2xl border border-[#84A98C]/30">
                <CheckCircle2 className="w-5 h-5 text-[#2D563F]" />
                <span>PATH 1: SAFE FOOD REDISTRIBUTION</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-[#D96B43] bg-[#F9EBE6] py-3 rounded-2xl border border-[#D96B43]/30">
                <XCircle className="w-5 h-5 text-[#D96B43]" />
                <span>PATH 2: UNFIT FOOD ORGANIC RENEWAL</span>
              </div>
            </div>

            {/* Grid Layout for Two Parallel Pathways */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
              
              {/* PATH 1: SAFE FOOD BRANCH */}
              <div
                className={`transition-all duration-300 ${
                  activeTab === 'waste' ? 'opacity-40 grayscale scale-95' : 'opacity-100'
                }`}
              >
                <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#84A98C]/40 shadow-lg relative flex flex-col gap-6">
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D563F] bg-[#E2EBE4] px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-[#2D563F]" />
                      Safe Food Path
                    </span>
                    <span className="text-xs font-bold text-[#2D563F]">Human Sustenance</span>
                  </div>

                  {/* Sub Node 1: PEOPLE IN NEED */}
                  <div className="bg-[#E2EBE4]/60 rounded-2xl p-5 border border-[#84A98C]/30 flex items-center gap-4 hover:bg-[#E2EBE4] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#2D563F] text-[#FAF7F2] flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-[#84A98C]" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-lg text-[#1B382B]">
                        PEOPLE IN NEED
                      </h5>
                      <p className="text-xs text-[#4F5E56]">
                        Shelters, community partners, and food-insecure households.
                      </p>
                    </div>
                  </div>

                  <div className="text-center text-[#84A98C] font-bold text-xl">↓</div>

                  {/* Sub Node 2: MEAL */}
                  <div className="bg-[#1B382B] text-[#FAF7F2] rounded-2xl p-5 text-center shadow-md">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#2D563F] flex items-center justify-center mb-2">
                      <Sparkles className="w-5 h-5 text-[#84A98C]" />
                    </div>
                    <h5 className="font-display font-bold text-xl tracking-wide text-[#FAF7F2]">
                      NUTRITIOUS MEAL
                    </h5>
                    <p className="text-xs text-[#FAF7F2]/80 mt-1">
                      Direct human sustenance provided safely & with dignity.
                    </p>
                  </div>

                </div>
              </div>

              {/* PATH 2: UNSAFE / UNFIT ORGANIC RENEWAL BRANCH */}
              <div
                className={`transition-all duration-300 ${
                  activeTab === 'safe' ? 'opacity-40 grayscale scale-95' : 'opacity-100'
                }`}
              >
                <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border-2 border-[#D96B43]/30 shadow-lg relative flex flex-col gap-6">
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between border-b border-[#E8DFD1] pb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D96B43] bg-[#F9EBE6] px-3 py-1 rounded-full">
                      <XCircle className="w-4 h-4 text-[#D96B43]" />
                      Unsafe / Unfit Food
                    </span>
                    <span className="text-xs font-bold text-[#D96B43]">Organic Renewal</span>
                  </div>

                  {/* Sub Node 1: ORGANIC PROCESSING */}
                  <div className="bg-[#F9EBE6]/60 rounded-2xl p-5 border border-[#D96B43]/20 flex items-center gap-4 hover:bg-[#F9EBE6] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#D96B43] text-white flex items-center justify-center shrink-0">
                      <Recycle className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-lg text-[#1B382B]">
                        ORGANIC PROCESSING
                      </h5>
                      <p className="text-xs text-[#4F5E56]">
                        Redirected to licensed composting pits or local biogas units.
                      </p>
                    </div>
                  </div>

                  <div className="text-center text-[#D96B43] font-bold text-xl">↓</div>

                  {/* Sub Node 2: COMPOST / BIOGAS */}
                  <div className="bg-[#F9EBE6] rounded-2xl p-5 border border-[#D96B43]/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-[#D96B43]" />
                      <div>
                        <h6 className="font-bold text-sm text-[#1B382B]">COMPOST / BIOGAS</h6>
                        <p className="text-[11px] text-[#4F5E56]">Clean energy & organic fertilizer</p>
                      </div>
                    </div>
                    <span className="text-xl">⚡</span>
                  </div>

                  <div className="text-center text-[#D96B43] font-bold text-xl">↓</div>

                  {/* Sub Node 3: SOIL */}
                  <div className="bg-[#1B382B] text-[#FAF7F2] rounded-2xl p-5 text-center shadow-md">
                    <div className="w-10 h-10 mx-auto rounded-full bg-[#84A98C]/20 flex items-center justify-center mb-2">
                      <Sprout className="w-6 h-6 text-[#84A98C]" />
                    </div>
                    <h5 className="font-display font-bold text-xl tracking-wide text-[#FAF7F2] flex items-center justify-center gap-2">
                      <span>SOIL REGENERATION</span>
                      <span>🌱</span>
                    </h5>
                    <p className="text-xs text-[#FAF7F2]/80 mt-1">
                      Nutrients returned back to the earth for agricultural renewal.
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Model Summary Footer */}
          <div className="mt-12 text-center bg-[#FAF7F2] rounded-2xl p-4 border border-[#E8DFD1] text-xs text-[#4F5E56]">
            <p className="font-medium text-[#1B382B]">
              💡 <span className="font-bold">Proposed CEP Protocol:</span> Food is strictly evaluated prior to redistribution. Only quality-verified meals reach consumers; remaining organic matter is transformed into eco-fertilizer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
