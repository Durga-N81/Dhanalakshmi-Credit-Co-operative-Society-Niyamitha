import React, { useState } from 'react';
import { X, Printer, Download, Stamp, ShieldCheck, Check, Edit3, Eye } from 'lucide-react';

export default function PromissoryNoteModal({ isOpen, onClose, t, currentLang }) {
  const [activeDocLang, setActiveDocLang] = useState(currentLang || 'kn');
  const [borrowerName, setBorrowerName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [amountInWords, setAmountInWords] = useState('');
  const [place, setPlace] = useState('ಮುಳಬಾಗಿಲು');
  const [docDate, setDocDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Helper text mapping based on active doc language
  const docTexts = {
    kn: {
      title: "ಬೇಡಿಕೆಯ ಮೇರೆಗೆ ಪಾವತಿಸಬೇಕಾದ ವಾಗ್ದಾನ ಪತ್ರ",
      sub: "ಧನಲಕ್ಷ್ಮಿ ಕ್ರೆಡಿಟ್ ಕೋ ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ನಿಯಮಿತ (ನೋಂದಣಿ ಸಂಖ್ಯೆ AR/49CR 18/57296/2024-25)",
      dateLabel: "ದಿನಾಂಕ:",
      placeLabel: "ಸ್ಥಳ:",
      defaultPlace: "ಮುಳಬಾಗಿಲು",
      body1: `ಬೇಡಿಕೆಯ ಮೇರೆಗೆ, ನಾನು/ನಾವು ${borrowerName || '.................................................................'} ಮುಳಬಾಗಿಲು ತಾಲ್ಲೂಕು, ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ ರಾಜ್ಯದ ನಿವಾಸಿಗಳಾದ ನಾವು, 'ಧನಲಕ್ಷ್ಮಿ Dhanalakshmi credit co operative society' (ನೋಂದಣಿ ಸಂಖ್ಯೆ AR/49CR 18/57296/2024-25) ಅಥವಾ ಅದರ ಹಕ್ಕು ಪಡೆದವರಿಗೆ, ಪಡೆದ ಮೌಲ್ಯಕ್ಕೆ ಪ್ರತಿಯಾಗಿ ರೂ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '...........'} (ರೂಪಾಯಿ ${amountInWords || '........................................'}) ಮೊತ್ತವನ್ನು, ವಾರ್ಷಿಕ 14% ಬಡ್ಡಿ ದರದೊಂದಿಗೆ (ಅಥವಾ ನಾವು ಒಪ್ಪಿಕೊಂಡಿರುವ ಇತರ ದರಗಳೊಂದಿಗೆ) ಪಾವತಿಸಲು ಜಂಟಿಯಾಗಿ ಮತ್ತು ಪ್ರತ್ಯೇಕವಾಗಿ ವಾಗ್ದಾನ ಮಾಡುತ್ತೇವೆ.`,
      body2: "ಈ ಪತ್ರವನ್ನು ಹೊಂದಿರುವವರು ಬೇಡಿಕೆ ಸಲ್ಲಿಸಿದ ತಕ್ಷಣ, ಪಾವತಿಸಬೇಕಾದ ಸಂಪೂರ್ಣ ಅಸಲು ಮತ್ತು ಸಂಗ್ರಹವಾದ ಬಡ್ಡಿಯನ್ನು ತಕ್ಷಣವೇ ಪಾವತಿಸಲು ನಾವು ಬದ್ಧರಾಗಿರುತ್ತೇವೆ. ಪಾವತಿಗಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸುವಿಕೆ ಮತ್ತು ಪ್ರತಿಭಟನೆಯನ್ನು ದಾಖಲಿಸುವ (noting a protest) ಅಗತ್ಯವನ್ನು ಇಲ್ಲಿ ಬೇಷರತ್ತಾಗಿ ಕೈಬಿಡಲಾಗಿದೆ. ಯಾವುದೇ ಪಕ್ಷವನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವುದು, ಷರತ್ತುಗಳ ವಿಸ್ತರಣೆ ಅಥವಾ ಮಾರ್ಪಾಡು, ಅಥವಾ ಈ ಪತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಯಾವುದೇ ಮೇಲಾಧಾರವನ್ನು (collateral) ಬಿಡುಗಡೆ ಮಾಡಿದರೂ ಸಹ, ಸಹಿ ಮಾಡಿದ ನಾವು ಸಂಪೂರ್ಣವಾಗಿ ಬದ್ಧರಾಗಿರಲು ಒಪ್ಪಿಕೊಂಡಿದ್ದೇವೆ.",
      body3: "ಕಾನೂನು ಮತ್ತು ಸಾಲದ ಒಪ್ಪಂದಗಳ ಪ್ರಕಾರ ಅನುಮತಿಸಲಾದ ಮಿತಿಯೊಳಗೆ, ಎಲ್ಲಾ ಸಮಂಜಸವಾದ ಕಾನೂನು ಶುಲ್ಕಗಳು ಮತ್ತು ವಸೂಲಾತಿ ವೆಚ್ಚಗಳನ್ನು ಪಾವತಿಸಲು ಸಹಿ ಮಾಡಿದವರು ಒಪ್ಪುತ್ತಾರೆ.",
      receivedTitle: `ಸಹಿ ಮಾಡಿದವರು ಸ್ವೀಕರಿಸಿದ ಮೊತ್ತ ರೂ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '.........'}`,
      receivedInWords: `(ರೂಪಾಯಿ ${amountInWords || '........................................'})`,
      items: [
        `1. ಮಂಜೂರಾದ ಮತ್ತು ವಿತರಿಸಲಾದ ಸಾಲದ ಮೊತ್ತ - ರೂ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '........'}`,
        `2. ಭದ್ರತಾ ಠೇವಣಿ - ರೂ. ${loanAmount ? Math.round(loanAmount * 0.03).toLocaleString('en-IN') : '.....'}`,
        `3. ವಿಮಾ ಪ್ರೀಮಿಯಂ - ರೂ. ${loanAmount ? Math.round(loanAmount * 0.01).toLocaleString('en-IN') : '...'}`,
        `4. ಪ್ರಕ್ರಿಯೆ ಶುಲ್ಕ (Processing Fee) - ರೂ. ${loanAmount ? Math.round(loanAmount * 0.015).toLocaleString('en-IN') : '..'}`,
        `5. ಸಾಲ ವಿತರಣಾ ಚೆಕ್ ಮೊತ್ತ - ರೂ. ${loanAmount ? (loanAmount - Math.round(loanAmount * 0.055)).toLocaleString('en-IN') : '...'}`
      ],
      witnessTitle: "ಸಾಕ್ಷಿಗಳು:",
      borrowerSign: "ಸಾಲಗಾರನ ಸಹಿ",
      coBorrowerSign: "ಸಹ-ಸಾಲಗಾರನ ಸಹಿ",
      guarantorSign: "ಜಾಮೀನುದಾರರ ಸಹಿ",
      revenueStampText: "ರೆವಿನ್ಯೂ ಸ್ಟಾಂಪ್ (Revenue Stamp)"
    },
    te: {
      title: "డిమాండ్ ప్రామిసరీ నోట్ (వాగ్దాన పత్రం)",
      sub: "ధనలక్ష్మి క్రెడిట్ కో-ఆపరేటివ్ సొసైటీ నియమిత (రిజిస్ట్రేషన్ సంఖ్య AR/49CR 18/57296/2024-25)",
      dateLabel: "తేదీ:",
      placeLabel: "స్థలం:",
      defaultPlace: "ముళబాగిలు",
      body1: `డిమాండ్‌పై, నేను/మేము ${borrowerName || '.................................................................'} ముళబాగిలు తాలూకా, కోలార్ జిల్లా, కర్ణాటక రాష్ట్ర నివాసులమైన మేము, 'ధనలక్ష్మి Dhanalakshmi credit co operative society' (రిజిస్ట్రేషన్ సంఖ్య AR/49CR 18/57296/2024-25) లేదా వారి ప్రతినిధులకు, మేము స్వీకరించిన విలువకు బదులుగా రూ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '...........'} (అక్షరాలా రూపాయలు ${amountInWords || '........................................'}) మొత్తాన్ని, వార్షిక 14% వడ్డీ రేటుతో (లేదా పరస్పరం అంగీకరించిన ఇతర రేట్లతో) చెల్లించడానికి సమిష్టిగా మరియు వ్యక్తిగతంగా వాగ్దానం చేస్తున్నాము.`,
      body2: "ఈ పత్రం కలిగినవారు డిమాండ్ చేసిన వెంటనే, చెల్లించవలసిన పూర్తి అసలు మరియు సమకూరిన వడ్డీని తక్షణమే చెల్లించడానికి మేము బాధ్యులమై ఉంటాము. చెల్లింపు సమర్పణ మరియు నిరసన నమోదు (noting a protest) ఆవశ్యకతను ఇక్కడ బేషరతుగా వదులుకుంటున్నాము. ఎవరినైనా విడుదల చేసినా, నిబంధనలను పొడిగించినా లేదా సవరించినా, లేదా దీనికి సంబంధించిన కొలేటరల్‌ను విడుదల చేసినా సరే, సంతకం చేసిన మేము పూర్తిగా కట్టుబడి ఉంటాము.",
      body3: "చట్టం మరియు రుణ ఒప్పందాల పరిధిలో అనుమతించబడిన మేరకు, అన్ని న్యాయపరమైన రుసుములు మరియు రికవరీ ఖర్చులను చెల్లించడానికి సంతకం చేసినవారు అంగీకరిస్తున్నారు.",
      receivedTitle: `సంతకం చేసినవారు స్వీకరించిన మొత్తం రూ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '.........'}`,
      receivedInWords: `(అక్షరాలా రూపాయలు ${amountInWords || '........................................'})`,
      items: [
        `1. మంజూరైన మరియు విడుదలైన రుణ మొత్తం - రూ. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '........'}`,
        `2. భద్రతా డిపాజిట్ - రూ. ${loanAmount ? Math.round(loanAmount * 0.03).toLocaleString('en-IN') : '.....'}`,
        `3. భీమా ప్రీమియం - రూ. ${loanAmount ? Math.round(loanAmount * 0.01).toLocaleString('en-IN') : '...'}`,
        `4. ప్రాసెసింగ్ ఫీజు (Processing Fee) - రూ. ${loanAmount ? Math.round(loanAmount * 0.015).toLocaleString('en-IN') : '..'}`,
        `5. రుణ పంపిణీ చెక్కు మొత్తం - రూ. ${loanAmount ? (loanAmount - Math.round(loanAmount * 0.055)).toLocaleString('en-IN') : '...'}`
      ],
      witnessTitle: "సాక్షులు:",
      borrowerSign: "రుణగ్రహీత సంతకం",
      coBorrowerSign: "సహ-రుణగ్రహీత సంతకం",
      guarantorSign: "జామీనుదారుని సంతకం",
      revenueStampText: "రెవెన్యూ స్టాంప్ (Revenue Stamp)"
    },
    en: {
      title: "ON-DEMAND PROMISSORY NOTE",
      sub: "DHANALAKSHMI CREDIT CO OPERATIVE SOCIETY NIYAMITA (Reg No: AR/49CR 18/57296/2024-25)",
      dateLabel: "Date:",
      placeLabel: "Place:",
      defaultPlace: "Mulbagal",
      body1: `ON DEMAND, I/We ${borrowerName || '.................................................................'} residing at Mulbagal Taluk, Kolar District, Karnataka State, jointly and severally promise to pay 'Dhanalaksmi credit co operative society' (Registration No: AR/49CR 18/57296/2024-25) or order, for value received, the sum of Rs. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '...........'} (Rupees ${amountInWords || '........................................'}) with interest thereon at the rate of 14% per annum (or such other rates as mutually agreed upon).`,
      body2: "We undertake to immediately pay the entire principal and accrued interest whenever demanded by the holder of this instrument. Presentation for payment and noting of protest are hereby unconditionally waived. Even in the event of release of any party, extension or variation of terms, or release of any collateral connected with this instrument, we the undersigned agree to remain fully and unconditionally bound.",
      body3: "Within the limits allowed by law and credit agreements, the undersigned agrees to pay all reasonable legal expenses and recovery costs incurred in connection herewith.",
      receivedTitle: `Amount Received by the Undersigned: Rs. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '.........'}`,
      receivedInWords: `(Rupees ${amountInWords || '........................................'})`,
      items: [
        `1. Sanctioned & Disbursed Loan Amount - Rs. ${loanAmount ? Number(loanAmount).toLocaleString('en-IN') : '........'}`,
        `2. Security Deposit - Rs. ${loanAmount ? Math.round(loanAmount * 0.03).toLocaleString('en-IN') : '.....'}`,
        `3. Insurance Premium - Rs. ${loanAmount ? Math.round(loanAmount * 0.01).toLocaleString('en-IN') : '...'}`,
        `4. Processing Fee - Rs. ${loanAmount ? Math.round(loanAmount * 0.015).toLocaleString('en-IN') : '..'}`,
        `5. Loan Disbursement Cheque Amount - Rs. ${loanAmount ? (loanAmount - Math.round(loanAmount * 0.055)).toLocaleString('en-IN') : '...'}`
      ],
      witnessTitle: "Witnesses:",
      borrowerSign: "Borrower's Signature",
      coBorrowerSign: "Co-borrower's Signature",
      guarantorSign: "Guarantor's Signature",
      revenueStampText: "Affix Revenue Stamp Here"
    }
  };

  const currentDoc = docTexts[activeDocLang] || docTexts.kn;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 print:my-0 print:border-none print:shadow-none">
        
        {/* Modal Top Header (Hidden on Print) */}
        <div className="no-print bg-emerald-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-xl text-gold-300">
              <Stamp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {t.promissory.modalTitle}
              </h3>
              <p className="text-xs text-emerald-200">
                ಅಧಿಕೃತ ಕರಾರು ಪತ್ರ • Official Demand Promissory Note
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-gold-500 hover:bg-gold-600 text-slate-950 font-bold px-3 py-1.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-slate-200 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Toolbar: Language Switch & Optional Live Fill (Hidden on Print) */}
        <div className="no-print bg-slate-50 border-b border-slate-200 p-4 space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span>ಡಾಕ್ಯುಮೆಂಟ್ ಭಾಷೆ (Document Language):</span>
              <div className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 shadow-sm">
                <button
                  onClick={() => setActiveDocLang('kn')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    activeDocLang === 'kn' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  ಕನ್ನಡ (Original)
                </button>
                <button
                  onClick={() => setActiveDocLang('te')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    activeDocLang === 'te' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  onClick={() => setActiveDocLang('en')}
                  className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                    activeDocLang === 'en' ? 'bg-emerald-700 text-white shadow-sm' : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-emerald-600" />
              <span>ಪರಿಶೀಲಿಸಿ ಮುದ್ರಿಸಿ ಅಥವಾ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ</span>
            </div>
          </div>

          {/* Optional Pre-filler form */}
          <details className="text-xs group">
            <summary className="font-semibold text-emerald-800 cursor-pointer hover:underline flex items-center gap-1">
              <Edit3 className="w-3.5 h-3.5" />
              <span>{t.promissory.customFillTitle} (ಇಲ್ಲಿ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿದರೆ ಪತ್ರದಲ್ಲಿ ಅನ್ವಯಿಸುತ್ತದೆ)</span>
            </summary>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-3 mt-2 border-t border-slate-200">
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">ಸಾಲಗಾರನ ಹೆಸರು (Name)</label>
                <input
                  type="text"
                  placeholder="ಶ್ರೀ / ಶ್ರೀಮತಿ..."
                  value={borrowerName}
                  onChange={(e) => setBorrowerName(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">ಸಾಲದ ಮೊತ್ತ (Amount ₹)</label>
                <input
                  type="number"
                  placeholder="ಉದಾ: 50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">ಅಕ್ಷರಗಳಲ್ಲಿ (In Words)</label>
                <input
                  type="text"
                  placeholder="ಐವತ್ತು ಸಾವಿರ ರೂಪಾಯಿಗಳು"
                  value={amountInWords}
                  onChange={(e) => setAmountInWords(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">ಸ್ಥಳ (Place)</label>
                <input
                  type="text"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>
          </details>

        </div>

        {/* PRINTABLE LEGAL DOCUMENT CONTAINER */}
        <div className="p-6 sm:p-10 max-h-[70vh] print:max-h-none overflow-y-auto print:overflow-visible bg-amber-50/20 font-serif text-slate-900 border-x-4 border-slate-100 print:border-none printable-card">
          
          {/* Document Header */}
          <div className="text-center border-b-2 border-slate-800 pb-5 mb-6">
            <div className="text-xs uppercase font-sans tracking-widest text-slate-600 font-bold mb-1">
              ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಸಹಕಾರ ಸಂಘಗಳ ಕಾಯ್ದೆ ಅಡಿಯಲ್ಲಿ ನೋಂದಾಯಿತ
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans">
              {currentDoc.title}
            </h1>
            <p className="text-xs sm:text-sm font-bold text-emerald-900 font-sans mt-1">
              {currentDoc.sub}
            </p>
            <p className="text-[11px] text-slate-600 font-sans mt-0.5">
              ಕೇಂದ್ರ ಕಚೇರಿ: ಮುಳಬಾಗಿಲು ತಾಲ್ಲೂಕು, ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ ರಾಜ್ಯ • PAN: AAKAD6111C
            </p>
          </div>

          {/* Place, Date & Revenue Stamp Area */}
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-1 text-sm font-semibold">
              <div>{currentDoc.placeLabel} <span className="font-bold underline decoration-slate-400 underline-offset-4">{place}</span></div>
              <div>{currentDoc.dateLabel} <span className="font-bold underline decoration-slate-400 underline-offset-4">{docDate}</span></div>
            </div>

            {/* Stamp Box */}
            <div className="w-24 h-24 border-2 border-dashed border-slate-500 rounded-lg flex flex-col items-center justify-center text-center p-1 bg-amber-50 text-slate-600 text-[10px]">
              <Stamp className="w-5 h-5 text-slate-400 mb-1" />
              <span>{currentDoc.revenueStampText}</span>
              <span className="font-bold mt-0.5">ರೂ. 1/- ಅಥವಾ 20/-</span>
            </div>
          </div>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-justify text-sm sm:text-base leading-relaxed text-slate-900">
            <p className="first-letter:text-2xl first-letter:font-bold first-letter:float-left first-letter:mr-1">
              {currentDoc.body1}
            </p>

            <p>
              {currentDoc.body2}
            </p>

            <p>
              {currentDoc.body3}
            </p>
          </div>

          {/* Received Header */}
          <div className="mt-6 pt-4 border-t border-slate-300">
            <div className="font-bold text-sm sm:text-base text-slate-950">
              {currentDoc.receivedTitle}
            </div>
            <div className="text-xs sm:text-sm text-slate-700 italic">
              {currentDoc.receivedInWords}
            </div>
          </div>

          {/* Deduction Items List 1 - 5 */}
          <div className="my-5 bg-white/80 p-4 rounded-xl border border-slate-300 space-y-1.5 text-xs sm:text-sm">
            {currentDoc.items.map((item, i) => (
              <div key={i} className="font-mono text-slate-800 font-medium">
                {item}
              </div>
            ))}
          </div>

          {/* Witnesses & Signatures Grid */}
          <div className="mt-8 pt-6 border-t-2 border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs sm:text-sm">
            
            {/* Witnesses Column */}
            <div className="space-y-4">
              <div className="font-bold uppercase tracking-wider text-slate-900 font-sans border-b border-slate-200 pb-1">
                {currentDoc.witnessTitle}
              </div>
              <div className="space-y-6 pt-2">
                <div>
                  <span className="font-semibold">1. ಹೆಸರು & ಸಹಿ:</span> ................................................................
                </div>
                <div>
                  <span className="font-semibold">2. ಹೆಸರು & ಸಹಿ:</span> ................................................................
                </div>
                <div>
                  <span className="font-semibold">3. ವಿಳಾಸ:</span> ........................................................................
                </div>
              </div>
            </div>

            {/* Borrowers Signatures Column */}
            <div className="space-y-8 text-right sm:text-right">
              <div>
                <div className="h-10" />
                <div className="border-t border-slate-800 pt-1 font-bold text-slate-950 inline-block min-w-[200px]">
                  {currentDoc.borrowerSign}
                </div>
              </div>

              <div>
                <div className="h-6" />
                <div className="border-t border-slate-800 pt-1 font-bold text-slate-950 inline-block min-w-[200px]">
                  {currentDoc.coBorrowerSign}
                </div>
              </div>

              <div>
                <div className="h-6" />
                <div className="border-t border-slate-800 pt-1 font-bold text-slate-950 inline-block min-w-[200px]">
                  {currentDoc.guarantorSign}
                </div>
              </div>
            </div>

          </div>

          {/* Official Verification Watermark Footer */}
          <div className="mt-8 pt-4 border-t border-dashed border-slate-300 text-center text-[10px] text-slate-500 font-sans">
            ಧನಲಕ್ಷ್ಮಿ ಕ್ರೆಡಿಟ್ ಕೋ ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ನಿಯಮಿತ • ನೋಂದಣಿ ಸಂ: AR/49CR 18/57296/2024-25 • ಮುಳಬಾಗಿಲು, ಕೋಲಾರ
          </div>

        </div>

        {/* Modal Bottom Actions (Hidden on Print) */}
        <div className="no-print bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            * ಈ ವಾಗ್ದಾನ ಪತ್ರವು ಅಧಿಕೃತ ಕಾನೂನು ಸ್ವರೂಪದಲ್ಲಿದ್ದು, ಪ್ರಿಂಟ್ ತೆಗೆದುಕೊಂಡು ಸಹಿ ಮಾಡಬಹುದಾಗಿದೆ.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow"
            >
              <Printer className="w-4 h-4" />
              <span>{t.promissory.printButton}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs sm:text-sm font-semibold"
            >
              {t.promissory.close}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
