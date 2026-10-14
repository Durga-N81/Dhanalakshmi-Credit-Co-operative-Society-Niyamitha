import React from 'react';
import { Landmark, Sprout, Store, Users2, ArrowUpRight, Check, Percent } from 'lucide-react';

export default function LoanServices({ t, onOpenApply }) {
  const getIcon = (id) => {
    switch(id) {
      case 'micro': return <Landmark className="w-6 h-6 text-emerald-600" />;
      case 'agri': return <Sprout className="w-6 h-6 text-green-600" />;
      case 'business': return <Store className="w-6 h-6 text-amber-600" />;
      case 'shg': return <Users2 className="w-6 h-6 text-purple-600" />;
      default: return <Landmark className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5" />
            <span>{t.services.interestBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.schemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header & Content */}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(scheme.id)}
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                  {scheme.rate}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {scheme.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed min-h-[60px]">
                  {scheme.desc}
                </p>

                <div className="text-xs font-semibold text-slate-500 pb-2">
                  ಅವಧಿ / Tenure: <span className="text-slate-800 font-bold">{scheme.tenure}</span>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{scheme.feature1}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{scheme.feature2}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() => onOpenApply(scheme.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-700 text-slate-800 hover:text-white border border-slate-200 hover:border-emerald-700 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-sm group-hover:bg-emerald-700 group-hover:text-white"
                >
                  <span>{t.nav.applyNow}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
