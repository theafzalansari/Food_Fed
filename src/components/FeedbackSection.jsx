import React, { useState } from 'react';
import { MessageSquarePlus, ExternalLink, HeartHandshake, CheckCircle, Info, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FeedbackSection() {
  const [showNotice, setShowNotice] = useState(false);

  const handleFeedbackClick = () => {
    // If URL is placeholder, show informational toast/notice
    if (siteConfig.googleFormUrl.includes('placeholder')) {
      setShowNotice(true);
      setTimeout(() => {
        window.open(siteConfig.googleFormUrl, '_blank', 'noopener,noreferrer');
      }, 1200);
    } else {
      window.open(siteConfig.googleFormUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="feedback" className="py-24 md:py-32 bg-[#F4EFE6] border-y border-[#E8DFD1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF7F2] rounded-[2.5rem] p-8 sm:p-14 border border-[#E8DFD1] shadow-xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] text-xs font-bold uppercase tracking-wider mb-6">
              <MessageSquarePlus className="w-4 h-4 text-[#D96B43]" />
              <span>Community Co-Creation • Nashik</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-6">
              Help Us Shape Food Fed
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed mb-8">
              Food Fed is currently being developed in <strong className="text-[#1B382B]">Nashik</strong>. Your ideas, feedback and willingness to participate can help us design a model that actually works for our community.
            </p>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={handleFeedbackClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D96B43] hover:bg-[#C55730] text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-[#D96B43]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-base"
              >
                <span>Give Feedback</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <a
                href="#volunteer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FAF7F2] hover:bg-[#E2EBE4] text-[#1B382B] font-semibold px-7 py-4 rounded-full border border-[#1B382B]/20 transition-all duration-200 text-base"
              >
                <HeartHandshake className="w-5 h-5 text-[#2D563F]" />
                <span>Join the Initiative</span>
              </a>
            </div>

            {/* Informational Toast Notice if placeholder URL */}
            {showNotice && (
              <div className="mb-6 p-4 rounded-2xl bg-[#E2EBE4] border border-[#84A98C] text-xs text-[#1B382B] flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                <Info className="w-4 h-4 text-[#2D563F] shrink-0" />
                <span>Opening Google Form placeholder. You can paste your real Form URL inside <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded font-mono text-[#D96B43]">src/config/siteConfig.js</code>.</span>
              </div>
            )}

            {/* Embedded Google Form Option Structure (Rendered if googleFormEmbedUrl is set in siteConfig) */}
            {siteConfig.googleFormEmbedUrl && (
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#E8DFD1] shadow-inner bg-white">
                <iframe
                  src={siteConfig.googleFormEmbedUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Food Fed Feedback Form"
                >
                  Loading feedback form...
                </iframe>
              </div>
            )}

            {/* Secondary CTA Prompt */}
            <div className="pt-8 border-t border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4F5E56]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#84A98C]" />
                <span>Interested in volunteering or collaborating?</span>
              </div>
              <a
                href="#volunteer"
                className="font-bold text-[#1B382B] hover:text-[#D96B43] underline transition-colors"
              >
                Connect with our Nashik team →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
