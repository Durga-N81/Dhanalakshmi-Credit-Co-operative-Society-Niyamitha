import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, FileCheck2, ExternalLink, Calendar, MapPin, Building, ZoomIn, X } from 'lucide-react';

export default function LegalVerification({ t }) {
  const [activeImageModal, setActiveImageModal] = useState(null);

  return (
    <section id="legal" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>100% Legal & Govt Registered</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.legal.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            {t.legal.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left: Credential Cards */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* PAN Card Details Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {t.legal.panHeading}
                    </h3>
                    <p className="text-xs text-slate-500">Government of India Income Tax Record</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 border border-green-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-xs sm:text-sm">
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-slate-500 font-medium">Permanent Account Number (PAN)</div>
                  <div className="text-xl font-mono font-black text-slate-900 mt-1 tracking-wider">
                    {t.legal.panNumber}
                  </div>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-slate-500 font-medium">ಸ್ಥಾಪನೆ / Date of Formation</div>
                  <div className="text-lg font-bold text-slate-800 mt-1">
                    {t.legal.incorpDate}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">ನೋಂದಾಯಿತ ಹೆಸರು / Official Name:</span> DHANALAKSHMI CREDIT CO OPERATIVE SOCIETY NIYAMITA
              </div>
            </div>

            {/* Cooperative Act Registration Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {t.legal.regHeading}
                    </h3>
                    <p className="text-xs text-slate-500">Karnataka Cooperative Societies Department</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Registered</span>
                </span>
              </div>

              <div className="mt-5 space-y-3 text-xs sm:text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                  <span className="text-emerald-900 font-semibold">ನೋಂದಣಿ ಸಂಖ್ಯೆ / Registration No:</span>
                  <span className="font-mono font-bold text-emerald-950 text-base sm:text-lg">
                    {t.legal.regNumber}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 text-xs px-1">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{t.legal.jurisdiction}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Authentic PAN Card Previews */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <span>ಅಧಿಕೃತ ಪ್ಯಾನ್ ಕಾರ್ಡ್ ದಾಖಲೆ (Official PAN Document)</span>
                </h4>
                <span className="text-[11px] font-semibold text-emerald-700">ಕ್ಲಿಕ್ ಮಾಡಿ ವೀಕ್ಷಿಸಿ</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Front Side */}
                <div 
                  onClick={() => setActiveImageModal('/images/pancard-front.jpeg')}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all bg-slate-100 aspect-[16/10] flex items-center justify-center shadow-inner"
                >
                  <img
                    src="/images/pancard-front.jpeg"
                    alt="PAN Card Front"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                    <ZoomIn className="w-4 h-4" />
                    <span>Front</span>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  onClick={() => setActiveImageModal('/images/pancard-back.jpeg')}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-emerald-500 transition-all bg-slate-100 aspect-[16/10] flex items-center justify-center shadow-inner"
                >
                  <img
                    src="/images/pancard-back.jpeg"
                    alt="PAN Card Back"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1">
                    <ZoomIn className="w-4 h-4" />
                    <span>Back</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 italic text-center">
                * ಭಾರತ ಸರ್ಕಾರದಿಂದ ಅಧಿಕೃತವಾಗಿ ನೀಡಲಾದ ಪ್ಯಾನ್ ಕಾರ್ಡ್ (PAN: AAKAD6111C).
              </p>
            </div>

            {/* Trust badge */}
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 text-white p-5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow">
              <p className="font-semibold text-emerald-200 mb-1">
                ಸಹಕಾರ ತತ್ವ & ಸಾರ್ವಜನಿಕ ಭದ್ರತೆ:
              </p>
              <p className="text-emerald-100">
                {t.legal.certNote}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Image Zoom Modal */}
      {activeImageModal && (
        <div 
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm cursor-pointer"
        >
          <div className="relative max-w-2xl w-full bg-white rounded-2xl p-2 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImageModal}
              alt="PAN Card Enlarged"
              className="w-full h-auto rounded-xl object-contain max-h-[80vh]"
            />
            <div className="p-3 text-center text-xs font-bold text-slate-700">
              ಧನಲಕ್ಷ್ಮಿ ಕ್ರೆಡಿಟ್ ಕೋ ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ನಿಯಮಿತ (PAN: AAKAD6111C)
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
