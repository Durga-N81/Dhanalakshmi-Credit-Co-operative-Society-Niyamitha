import React from 'react';
import { Target, Compass, Sparkles, Building2, MapPin, Calendar, FileBadge } from 'lucide-react';

export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{t.about.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.about.subtitle}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p className="bg-emerald-50/60 p-5 rounded-2xl border-l-4 border-emerald-600 text-slate-800 font-medium">
              {t.about.desc1}
            </p>
            <p>
              {t.about.desc2}
            </p>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <FileBadge className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">ಕಾಯ್ದೆ / Act</div>
                  <div className="text-xs font-bold text-slate-800">Cooperative Act</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">ನೋಂದಣಿ ದಿನಾಂಕ</div>
                  <div className="text-xs font-bold text-slate-800">06/12/2024</div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">ಕಾರ್ಯವ್ಯಾಪ್ತಿ</div>
                  <div className="text-xs font-bold text-slate-800">ಮುಳಬಾಗಿಲು, ಕೋಲಾರ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-emerald-700/80 text-amber-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{t.about.mission}</h3>
              </div>
              <p className="text-emerald-100 text-sm leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-amber-500/80 text-white">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{t.about.vision}</h3>
              </div>
              <p className="text-amber-100 text-sm leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.values.map((val, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-emerald-50/50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {val.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
