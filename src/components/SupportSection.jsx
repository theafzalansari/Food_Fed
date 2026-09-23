import React, { useState } from 'react';
import { QrCode, Sparkles, ZoomIn, X, Heart, ShieldCheck } from 'lucide-react';

export default function SupportSection() {
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  return (
    <section id="support" className="py-24 md:py-32 bg-[#F4EFE6] border-y border-[#E8DFD1] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#D96B43]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#84A98C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E2EBE4] text-[#1B382B] text-xs font-bold uppercase tracking-wider mb-4 border border-[#84A98C]/30">
            <Heart className="w-4 h-4 text-[#D96B43]" />
            <span>Community Support • Nashik</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#1B382B] tracking-tight leading-tight mb-4">
            Support Food Fed
          </h2>

          <p className="text-base sm:text-lg text-[#4F5E56] leading-relaxed">
            Help us turn the idea into community action. Your support enables us to build our CEP operational framework, conduct local field trials, and establish food rescue infrastructure in Nashik.
          </p>
        </div>

        {/* Scanner Card Container */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#FAF7F2] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#1B382B]/15 shadow-xl text-center relative group hover:border-[#1B382B]/30 transition-all duration-300">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F9EBE6] text-[#D96B43] text-xs font-bold uppercase tracking-wider mb-6">
              <QrCode className="w-4 h-4" />
              <span>Scan to Contribute</span>
            </div>

            {/* Headings */}
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1B382B] mb-2">
              Contribute to the Initiative
            </h3>
            
            <p className="text-sm text-[#4F5E56] mb-8 max-w-md mx-auto">
              Scan the QR code below using any UPI app to directly support Food Fed's CEP development in Nashik.
            </p>

            {/* Scanner Image Frame */}
            <div className="relative mx-auto max-w-xs bg-white p-4 rounded-3xl border-2 border-[#E8DFD1] shadow-md group-hover:shadow-lg transition-shadow">
              <div 
                onClick={() => setZoomModalOpen(true)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group/img"
              >
                <img
                  src="/scanner.jpeg"
                  alt="Food Fed UPI Contribution QR Code Scanner"
                  className="w-full h-auto object-contain rounded-xl max-h-[360px] mx-auto"
                />
                <div className="absolute inset-0 bg-[#1B382B]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2 backdrop-blur-xs">
                  <ZoomIn className="w-5 h-5" />
                  <span>Click to view larger</span>
                </div>
              </div>
            </div>

            {/* Bottom Security / Trust Notice */}
            <div className="mt-8 pt-6 border-t border-[#E8DFD1] flex items-center justify-center gap-2 text-xs text-[#4F5E56]">
              <ShieldCheck className="w-4 h-4 text-[#2D563F]" />
              <span>Direct Student CEP Initiative Support • Nashik, MH</span>
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal for Scanner */}
      {zoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-[#12281D]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomModalOpen(false)}
        >
          <div 
            className="relative bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl max-w-md w-full border border-[#E8DFD1] shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#E2EBE4] text-[#1B382B] hover:bg-[#D96B43] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="font-display font-bold text-xl text-[#1B382B] mb-1">
              Food Fed QR Code
            </h4>
            <p className="text-xs text-[#4F5E56] mb-4">
              Scan with GPay, PhonePe, Paytm, or any UPI app.
            </p>

            <div className="bg-white p-3 rounded-2xl border border-[#E8DFD1] inline-block mb-4">
              <img
                src="/scanner.jpeg"
                alt="Food Fed UPI QR Code Scanner Enlarged"
                className="max-h-[70vh] w-auto object-contain rounded-xl mx-auto"
              />
            </div>

            <p className="text-[11px] text-[#2D563F] font-semibold">
              Thank you for supporting community action in Nashik! 🌱
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
