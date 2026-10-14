import React from 'react';
import { ShieldCheck, ArrowRight, FileText, Calculator, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Hero({ t, onOpenApply, onOpenPromissory }) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-emerald-100">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-gold-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Official Registration Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.hero.title}{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-600 bg-clip-text text-transparent block mt-1">
                {t.hero.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.desc}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">ಸ್ಥಿರ ವಾರ್ಷಿಕ 14% ಬಡ್ಡಿದರ (Fixed 14% p.a.)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">ಅಧಿಕೃತ ವಾಗ್ದಾನ ಪತ್ರ & ರಶೀದಿ</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">ಮುಳಬಾಗಿಲು ಜನರ ನಂಬಿಕಾರ್ಹ ಸಂಸ್ಥೆ</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">ತ್ವರಿತ ಸಾಲ ವಿತರಣಾ ಪ್ರಕ್ರಿಯೆ</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => onOpenApply()}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group text-base"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPromissory}
                className="bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 font-bold px-5 py-3.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 text-base"
              >
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>{t.hero.secondaryCta}</span>
              </button>

              <a
                href="#calculator"
                className="text-slate-600 hover:text-emerald-800 font-semibold px-4 py-3.5 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2 text-sm"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.calculatorCta}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Society Logo Showcase & Official Badge Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-emerald-600/20 text-center">
              
              {/* Gold Ribbon corner */}
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                Co-Operative Society
              </div>

              {/* Society Logo */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-2 bg-gradient-to-tr from-emerald-50 via-white to-amber-50 flex items-center justify-center shadow-inner">
                <img
                  src="/images/logo.jpeg"
                  alt="Dhanalakshmi Credit Co Operative Society"
                  className="max-h-full max-w-full object-contain filter drop-shadow hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Official Credential Highlights */}
              <div className="mt-6 border-t border-slate-100 pt-5 space-y-3 text-left">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">ಸಂಘದ ನೋಂದಣಿ / Reg No:</span>
                  <span className="font-mono font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    AR/49CR 18/57296/2024-25
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">ಖಾತರಿ ಪ್ಯಾನ್ ಸಂಖ್ಯೆ / PAN:</span>
                  <span className="font-mono font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    AAKAD6111C
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">ಸ್ಥಾಪನೆ / Incorporated:</span>
                  <span className="font-semibold text-slate-700">06/12/2024</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">ಶಾಖೆ / Branch Location:</span>
                  <span className="font-semibold text-emerald-800">ಮುಳಬಾಗಿಲು (Mulbagal, Kolar)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-dashed border-slate-200">
                <p className="text-xs text-slate-500 italic">
                  "ಒಬ್ಬರಿಗಾಗಿ ಎಲ್ಲರೂ, ಎಲ್ಲರಿಗಾಗಿ ಒಬ್ಬರು — ಸಹಕಾರವೇ ಸನ್ಮಾರ್ಗ"
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2 font-bold">
              %
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 font-mono">
              {t.hero.stat1Value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-mono">
              {t.hero.stat2Value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-2 font-bold">
              📍
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              {t.hero.stat3Value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mb-2 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono">
              {t.hero.stat4Value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
              {t.hero.stat4Label}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
