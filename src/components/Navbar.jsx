import React, { useState } from 'react';
import { Globe, Phone, FileText, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';
import { languages } from '../translations';

export default function Navbar({ currentLang, setLang, t, onOpenApply, onOpenPromissory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#calculator", label: t.nav.calculator },
    { href: "#legal", label: t.nav.legal },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100 transition-all">
      {/* Top Notice Bar */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-700 text-gold-300 border border-emerald-600">
              {t.legal.regNumber}
            </span>
            <span className="hidden md:inline text-emerald-200">|</span>
            <span className="text-emerald-100 hidden md:inline">
              {t.subTagline}
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100">
            <a href="tel:+919845012345" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>+91 98450 12345</span>
            </a>
            <span className="text-emerald-600">|</span>
            <button 
              onClick={onOpenPromissory}
              className="flex items-center gap-1 text-gold-300 hover:text-gold-200 font-semibold underline underline-offset-2 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.promissory.navButton}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Society Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-600 shadow-sm p-0.5 bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src="/images/logo-icon.jpeg" 
                alt="Dhanalakshmi Society Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/logo.jpeg";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg md:text-xl font-bold text-emerald-950 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                  {t.societyName}
                </span>
              </div>
              <p className="text-xs font-semibold text-emerald-700 tracking-wide mt-0.5">
                {t.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Switcher & Apply Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
              <Globe className="w-4 h-4 text-slate-500 ml-1.5 mr-1" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLang(lang.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                    currentLang === lang.code
                      ? 'bg-emerald-700 text-white shadow-sm'
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-white/60'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Apply CTA Button */}
            <button
              onClick={() => onOpenApply()}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-1.5"
            >
              <span>{t.nav.applyNow}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Quick Language Toggle on Mobile */}
            <select
              value={currentLang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPromissory();
              }}
              className="w-full flex items-center justify-center gap-2 border border-emerald-600 text-emerald-800 font-semibold px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100"
            >
              <FileText className="w-4 h-4" />
              <span>{t.promissory.navButton}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl shadow"
            >
              {t.nav.applyNow}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
