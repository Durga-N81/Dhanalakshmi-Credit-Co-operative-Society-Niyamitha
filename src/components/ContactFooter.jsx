import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function ContactFooter({ t, onOpenApply, onOpenPromissory }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 border-t-4 border-emerald-600">
      
      {/* Contact Information Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-800">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.contact.title}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t.contact.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Address */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {t.contact.addressTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.contact.addressLine1}<br />
              {t.contact.addressLine2}<br />
              {t.contact.addressLine3}
            </p>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {t.contact.phoneTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {t.contact.phoneNum}
            </p>
            <div className="mt-4">
              <a
                href="https://wa.me/919845012345?text=Namaskara,%20I%20am%20interested%20in%20Dhanalakshmi%20Credit%20Cooperative%20loan%20schemes."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.contact.quickMsg}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Email & Web */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {t.contact.emailTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.contact.emailVal}
            </p>
            <p className="text-xs text-slate-400 mt-2">
              ಮುಳಬಾಗಿಲು ಶಾಖಾ ಕಾರ್ಯಾಲಯ
            </p>
          </div>

          {/* Card 4: Timings */}
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              {t.contact.timingsTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.contact.timingsVal}
            </p>
          </div>

        </div>

        {/* Bottom Banner with Quick Links & Disclaimer */}
        <div className="border-t border-slate-800 pt-10 pb-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden flex-shrink-0">
                <img src="/images/logo-icon.jpeg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-bold text-white text-base">
                  {t.societyName}
                </span>
                <p className="text-xs text-emerald-400 font-medium">
                  {t.subTagline}
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap gap-4 md:justify-end items-center text-xs">
            <button
              onClick={onOpenPromissory}
              className="text-gold-300 hover:text-gold-200 underline underline-offset-4 font-semibold"
            >
              {t.promissory.modalTitle}
            </button>
            <span className="text-slate-600">•</span>
            <a href="#calculator" className="text-slate-300 hover:text-white">
              {t.calculator.title}
            </a>
            <span className="text-slate-600">•</span>
            <a href="#legal" className="text-slate-300 hover:text-white">
              {t.legal.title}
            </a>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => onOpenApply()}
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-3 py-1.5 rounded-lg shadow"
            >
              {t.nav.applyNow}
            </button>
          </div>

        </div>

      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950 py-4 px-4 text-center text-xs text-slate-500 border-t border-slate-800/80">
        <p>
          © {currentYear} {t.societyName}. {t.footer.rights} (Reg No: AR/49CR 18/57296/2024-25 | PAN: AAKAD6111C | Mulbagal, Kolar).
        </p>
      </div>

    </footer>
  );
}
