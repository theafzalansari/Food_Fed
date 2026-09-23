import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Sprout, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Identify surplus food from homes, restaurants, events and canteens across Nashik.',
      icon: Compass,
      bgStyle: 'bg-[#12281D] text-[#FAF7F2] border border-[#84A98C]/30',
      iconBg: 'bg-[#2D563F] text-[#84A98C]',
      numBadge: 'bg-[#84A98C]/20 text-[#84A98C]',
    },
    {
      num: '02',
      title: 'Check',
      desc: 'Assess whether the food is suitable and safe for redistribution through quality triage.',
      icon: ShieldCheck,
      bgStyle: 'bg-[#12281D] text-[#FAF7F2] border border-[#84A98C]/30',
      iconBg: 'bg-[#84A98C] text-[#1B382B]',
      numBadge: 'bg-[#84A98C]/20 text-[#84A98C]',
    },
    {
      num: '03',
      title: 'Redirect',
      bgStyle: 'bg-[#12281D] text-[#FAF7F2] border border-[#D96B43]/40',
      desc: 'Safe food goes toward people and community partners who need standard meals.',
      icon: HeartHandshake,
      iconBg: 'bg-[#D96B43] text-white',
      numBadge: 'bg-[#D96B43]/20 text-[#D96B43]',
    },
    {
      num: '04',
      title: 'Renew',
      bgStyle: 'bg-[#12281D] text-[#FAF7F2] border border-[#84A98C]/30',
      desc: 'Unavoidable organic waste is directed toward local composting, biogas or organic processing.',
      icon: Sprout,
      iconBg: 'bg-[#2D563F] text-[#84A98C]',
      numBadge: 'bg-[#84A98C]/20 text-[#84A98C]',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#1B382B] text-[#FAF7F2] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#84A98C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#84A98C]/20 pb-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#2D563F] text-[#84A98C] border border-[#84A98C]/30 mb-4">
              Simple 4-Step Process
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#FAF7F2] tracking-tight">
              How Food Fed Works
            </h2>
          </div>

          <p className="text-base text-[#FAF7F2]/80 max-w-md leading-relaxed">
            Our proposed operational pipeline balances safety, speed, and environmental stewardship to create a seamless surplus transition in Nashik.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group ${step.bgStyle} relative overflow-hidden hover:-translate-y-1`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-display font-extrabold text-xs px-3 py-1 rounded-full tracking-wider ${step.numBadge}`}>
                      STEP {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.iconBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl text-[#FAF7F2] mb-3 tracking-tight">
                    {step.num} — {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#FAF7F2]/85">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#84A98C]/20 flex items-center justify-between text-xs font-semibold text-[#84A98C]">
                  <span>Phase {idx + 1} of 4</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D96B43]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
