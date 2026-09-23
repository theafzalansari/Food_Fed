import React from 'react';
import { ExternalLink, AlertTriangle, Globe, BarChart3, BookOpen } from 'lucide-react';

export default function ProblemSection() {
  const stats = [
    {
      value: '673M',
      label: 'people experienced hunger globally in 2024',
      context: 'Global Hunger Paradox',
      source: 'FAO (UN Food and Agriculture Organization)',
      color: 'border-t-4 border-t-[#D96B43]',
      badge: 'Global Scale',
      badgeBg: 'bg-[#F9EBE6] text-[#D96B43]',
    },
    {
      value: '12.0%',
      label: 'prevalence of undernourishment in India',
      context: 'National Undernourishment',
      source: 'FAO SOFI Report / UN Stats',
      color: 'border-t-4 border-t-[#2D563F]',
      badge: 'National Impact',
      badgeBg: 'bg-[#E2EBE4] text-[#1B382B]',
    },
    {
      value: '25.8',
      label: "India's 2025 Global Hunger Index score",
      context: 'Hunger Index Severity',
      source: 'Global Hunger Index Report 2025',
      color: 'border-t-4 border-t-[#D96B43]',
      badge: 'Serious',
      badgeBg: 'bg-[#D96B43] text-white font-bold',
    },
  ];

  const verifiedSources = [
    {
      name: 'FAO (Food & Agriculture Organization)',
      url: 'https://www.fao.org/publications/sofi',
      desc: 'The State of Food Security and Nutrition in the World',
    },
    {
      name: 'Global Hunger Index (2025)',
      url: 'https://www.globalhungerindex.org/',
      desc: 'Peer-reviewed annual hunger indicator score',
    },
    {
      name: 'UNEP Food Waste Index 2024',
      url: 'https://www.unep.org/resources/publication/food-waste-index-report-2024',
      desc: 'United Nations Environment Programme Waste Report',
    },
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-[#F4EFE6] border-y border-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] text-xs font-bold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4 text-[#D96B43]" />
            <span>The Reality & Challenge</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-4">
            Two Problems. One Connection Missing.
          </h2>

          <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed">
            While millions suffer from undernourishment, tonnes of edible food end up discarded daily in landfills. Food Fed bridges this gap with a student-led, structured community redistribution model.
          </p>
        </div>

        {/* 3 Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`bg-[#FAF7F2] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${stat.color} flex flex-col justify-between relative group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${stat.badgeBg}`}>
                    {stat.badge}
                  </span>
                  <BarChart3 className="w-5 h-5 text-[#84A98C] group-hover:scale-110 transition-transform" />
                </div>

                <div className="mb-4">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-[#1B382B] tracking-tight block">
                    {stat.value}
                  </span>
                </div>

                <p className="text-base sm:text-lg font-semibold text-[#2D563F] mb-3 leading-snug">
                  "{stat.label}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8DFD1]/80 mt-4 text-xs text-[#4F5E56] flex items-center justify-between">
                <span>{stat.context}</span>
                <span className="font-medium text-[#1B382B]/70">{stat.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Sources Area */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-[#E8DFD1]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1B382B] text-[#FAF7F2] flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#84A98C]" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#1B382B]">
                  Verified Data Sources
                </h3>
                <p className="text-xs text-[#4F5E56]">
                  All statistics presented above are derived directly from published international reports.
                </p>
              </div>
            </div>

            <div className="text-xs text-[#4F5E56] italic">
              *Food Fed does not invent statistics. We cite peer-reviewed global indicators.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {verifiedSources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-2xl bg-[#F4EFE6] hover:bg-[#E2EBE4] border border-[#E8DFD1] transition-all duration-200"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#1B382B] mb-1 group-hover:text-[#2D563F]">
                  <span>{source.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#84A98C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F5E56] line-clamp-2">
                  {source.desc}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
