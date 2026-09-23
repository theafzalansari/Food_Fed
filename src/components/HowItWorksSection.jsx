import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Sprout, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Identify surplus food from homes, restaurants, events and canteens.',
      icon: Compass,
      color: 'bg-[#1B382B] text-[#FAF7F2]',
      accent: 'border-t-4 border-t-[#84A98C]',
      iconBg: 'bg-[#2D563F] text-[#84A98C]',
    },
    {
      num: '02',
      title: 'Check',
      desc: 'Assess whether the food is suitable and safe for redistribution.',
      icon: ShieldCheck,
      color: 'bg-[#2D563F] text-[#FAF7F2]',
      accent: 'border-t-4 border-t-[#FAF7F2]',
      iconBg: 'bg-[#1B382B] text-[#FAF7F2]',
    },
    {
      num: '03',
      title: 'Redirect',
      desc: 'Safe food goes toward people/community partners who need it.',
      icon: HeartHandshake,
      color: 'bg-[#FAF7F2] text-[#1C2621]',
      accent: 'border-t-4 border-t-[#D96B43]',
      iconBg: 'bg-[#F9EBE6] text-[#D96B43]',
    },
    {
      num: '04',
      title: 'Renew',
      desc: 'Unavoidable organic waste can be directed toward appropriate composting, biogas or other organic-waste processing.',
      icon: Sprout,
      color: 'bg-[#1B382B] text-[#FAF7F2]',
      accent: 'border-t-4 border-t-[#D96B43]',
      iconBg: 'bg-[#D96B43] text-white',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F4EFE6] border-b border-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] mb-3">
              Simple 4-Step Process
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight">
              How Food Fed Works
            </h2>
          </div>

          <p className="text-base text-[#4F5E56] max-w-md">
            Our proposed operational pipeline balances safety, speed, and environmental stewardship to create a seamless surplus transition.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${step.color} ${step.accent} relative overflow-hidden`}
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl opacity-40 tracking-wider">
                      {step.num}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.iconBg} shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Subtitle */}
                  <h3 className="font-display font-extrabold text-2xl mb-3 tracking-tight">
                    {step.num} — {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed opacity-85">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-current/10 flex items-center justify-between text-xs font-semibold opacity-70">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
