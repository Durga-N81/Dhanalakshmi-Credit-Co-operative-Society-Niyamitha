import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import LoanServices from './components/LoanServices';
import LoanCalculator from './components/LoanCalculator';
import LegalVerification from './components/LegalVerification';
import ContactFooter from './components/ContactFooter';
import PromissoryNoteModal from './components/PromissoryNoteModal';
import ApplicationModal from './components/ApplicationModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('dlf_lang') || 'kn';
  });

  const [isPromissoryOpen, setIsPromissoryOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyInitialData, setApplyInitialData] = useState({ scheme: '', amount: '' });

  // Update language and font classes
  const handleSetLang = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('dlf_lang', langCode);
  };

  useEffect(() => {
    document.body.className = `lang-${currentLang}`;
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const t = translations[currentLang] || translations.kn;

  const handleOpenApply = (scheme = '', amount = '') => {
    setApplyInitialData({ scheme, amount });
    setIsApplyOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      
      {/* Navigation */}
      <Navbar
        currentLang={currentLang}
        setLang={handleSetLang}
        t={t}
        onOpenApply={() => handleOpenApply()}
        onOpenPromissory={() => setIsPromissoryOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero
          t={t}
          onOpenApply={() => handleOpenApply()}
          onOpenPromissory={() => setIsPromissoryOpen(true)}
        />

        <AboutSection t={t} />

        <LoanServices
          t={t}
          onOpenApply={(scheme) => handleOpenApply(scheme)}
        />

        <LoanCalculator
          t={t}
          onOpenApply={(scheme, amount) => handleOpenApply(scheme, amount)}
        />

        <LegalVerification t={t} />
      </main>

      {/* Footer */}
      <ContactFooter
        t={t}
        onOpenApply={() => handleOpenApply()}
        onOpenPromissory={() => setIsPromissoryOpen(true)}
      />

      {/* Demand Promissory Note Modal */}
      <PromissoryNoteModal
        isOpen={isPromissoryOpen}
        onClose={() => setIsPromissoryOpen(false)}
        t={t}
        currentLang={currentLang}
      />

      {/* Loan & Membership Application Modal */}
      <ApplicationModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        t={t}
        initialScheme={applyInitialData.scheme}
        initialAmount={applyInitialData.amount}
      />

    </div>
  );
}
