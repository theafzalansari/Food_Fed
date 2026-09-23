import React, { useState } from 'react';
import { Quote, RefreshCcw, Sparkles } from 'lucide-react';

export default function VisionSection() {
  const [activeStage, setActiveStage] = useState(0);

  const loopStages = [
    { label: 'SURPLUS', desc: 'Edible excess identified at source', icon: '🍲' },
    { label: 'RESCUE', desc: 'Prompt collection & hygiene triage', icon: '🛡️' },
    { label: 'FEED', desc: 'Delivered to community partners', icon: '❤️' },
    { label: 'RENEW', desc: 'Unfit food diverted to composting/biogas', icon: '⚡' },
    { label: 'EARTH', desc: 'Nutrient-rich compost enriches the soil', icon: '🌱' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1B382B] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#84A98C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D96B43]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Quote Banner */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#2D563F] flex items-center justify-center mb-6 shadow-inner text-[#84A98C]">
            <Quote className="w-8 h-8" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#FAF7F2] mb-8 italic">
            "If it can feed someone, redirect it. <br />
            <span className="text-[#84A98C] not-italic">
              If it can't, return its nutrients to the earth."
            </span>
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2D563F]/80 text-[#84A98C] text-xs font-semibold tracking-wider uppercase border border-[#84A98C]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Food Fed Philosophy</span>
          </div>
        </div>

        {/* Circular Animation & Interactive Loop Representation */}
        <div className="bg-[#12281D] rounded-[2.5rem] p-8 sm:p-12 border border-[#84A98C]/20 shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#84A98C] mb-2">
              <RefreshCcw className="w-4 h-4 animate-spin-slow" />
              <span>Closed-Loop Circularity</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-[#FAF7F2]">
              The Infinite Nutrient Cycle
            </h3>
            <p className="text-xs text-[#FAF7F2]/70 max-w-md mt-1">
              Click through or observe how surplus transforms from edible meal to natural compost.
            </p>
          </div>

          {/* Interactive Stage Pill Trail */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {loopStages.map((stage, i) => (
              <React.Fragment key={stage.label}>
                <button
                  onClick={() => setActiveStage(i)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all duration-300 ${
                    activeStage === i
                      ? 'bg-[#D96B43] text-white shadow-lg scale-105 ring-2 ring-[#D96B43]/50'
                      : 'bg-[#1B382B] text-[#FAF7F2]/80 hover:bg-[#2D563F] hover:text-[#FAF7F2]'
                  }`}
                >
                  <span className="text-base">{stage.icon}</span>
                  <span>{stage.label}</span>
                </button>
                {i < loopStages.length - 1 && (
                  <span className="text-[#84A98C]/50 font-bold hidden sm:inline-block">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Stage Spotlight Card */}
          <div className="bg-[#1B382B] rounded-2xl p-6 max-w-xl mx-auto border border-[#84A98C]/30 text-center transition-all duration-300">
            <div className="text-4xl mb-3">{loopStages[activeStage].icon}</div>
            <div className="text-xs font-bold text-[#84A98C] uppercase tracking-widest mb-1">
              Stage {activeStage + 1} of 5
            </div>
            <h4 className="font-display font-bold text-2xl text-[#FAF7F2] mb-2">
              {loopStages[activeStage].label}
            </h4>
            <p className="text-sm text-[#FAF7F2]/80">
              {loopStages[activeStage].desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
