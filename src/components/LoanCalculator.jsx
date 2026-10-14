import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Info, CheckCircle, ReceiptText } from 'lucide-react';

export default function LoanCalculator({ t, onOpenApply }) {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(12);
  const annualRate = 14; // Fixed 14% p.a. as per Dhanalakshmi Promissory Note

  // Calculate EMI & Deductions
  const calcResults = useMemo(() => {
    const P = Number(amount);
    const N = Number(months);
    const monthlyRate = (annualRate / 100) / 12;

    // EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
    const emi = Math.round(
      (P * monthlyRate * Math.pow(1 + monthlyRate, N)) / (Math.pow(1 + monthlyRate, N) - 1)
    );

    const totalRepayable = emi * N;
    const totalInterest = totalRepayable - P;

    // Deductions schedule as per Promissory note items 1-5
    const securityDeposit = Math.round(P * 0.03); // 3%
    const insurance = Math.round(P * 0.01);        // 1%
    const processingFee = Math.round(P * 0.015);   // 1.5%
    const totalDeductions = securityDeposit + insurance + processingFee;
    const netDisbursed = P - totalDeductions;

    return {
      emi,
      totalRepayable,
      totalInterest,
      securityDeposit,
      insurance,
      processingFee,
      netDisbursed
    };
  }, [amount, months]);

  return (
    <section id="calculator" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>14% p.a. EMI Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Sliders for Loan Amount and Tenure */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-700">
                  {t.calculator.loanAmount}
                </label>
                <div className="text-xl font-extrabold text-emerald-800 font-mono bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-inner">
                  ₹ {amount.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>₹ 10,000</span>
                <span>₹ 2,50,000</span>
                <span>₹ 5,00,000</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-slate-700">
                  {t.calculator.tenureMonths}
                </label>
                <div className="text-xl font-extrabold text-emerald-800 font-mono bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-inner">
                  {months} ತಿಂಗಳು / Months
                </div>
              </div>
              <input
                type="range"
                min="6"
                max="60"
                step="6"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>6 Months</span>
                <span>24 Months</span>
                <span>60 Months (5 Yrs)</span>
              </div>
            </div>

            {/* Fixed Interest Rate Box */}
            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  {t.calculator.interestRate}
                </div>
                <div className="text-xs text-slate-600">ವಾಗ್ದಾನ ಪತ್ರದ ಪ್ರಕಾರ / As per Promissory Note</div>
              </div>
              <div className="text-2xl font-black text-emerald-700 font-mono">
                14.0% <span className="text-xs font-normal text-emerald-900">p.a.</span>
              </div>
            </div>

            {/* Deduction Summary Accordion/Card */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wide border-b border-slate-100 pb-2">
                <ReceiptText className="w-4 h-4 text-emerald-600" />
                <span>{t.calculator.deductionHeader}</span>
              </div>
              <p className="text-[11px] text-slate-500">
                {t.calculator.deductionNote}
              </p>

              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between text-slate-600">
                  <span>{t.calculator.sanctionedAmount}:</span>
                  <span className="font-bold text-slate-900">₹ {amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{t.calculator.securityDeposit}:</span>
                  <span className="font-semibold text-slate-700">- ₹ {calcResults.securityDeposit.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{t.calculator.insurance}:</span>
                  <span className="font-semibold text-slate-700">- ₹ {calcResults.insurance.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>{t.calculator.processingFee}:</span>
                  <span className="font-semibold text-slate-700">- ₹ {calcResults.processingFee.toLocaleString('en-IN')}</span>
                </div>
                
                <div className="border-t border-dashed border-emerald-300 pt-2 flex justify-between items-center text-sm font-extrabold text-emerald-900 bg-emerald-50/80 p-2 rounded-lg">
                  <span>{t.calculator.disbursementCheque}:</span>
                  <span className="font-mono text-base text-emerald-800">
                    ₹ {calcResults.netDisbursed.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="border-b border-emerald-700/60 pb-5">
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-300">
                  {t.calculator.monthlyEmi}
                </span>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono mt-1">
                  ₹ {calcResults.emi.toLocaleString('en-IN')}
                  <span className="text-xs font-normal text-emerald-200 ml-2">/ ತಿಂಗಳು (month)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-800/50 p-4 rounded-2xl border border-emerald-700/50">
                  <div className="text-xs text-emerald-200 mb-1">{t.calculator.totalInterest}</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-gold-300">
                    ₹ {calcResults.totalInterest.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="bg-emerald-800/50 p-4 rounded-2xl border border-emerald-700/50">
                  <div className="text-xs text-emerald-200 mb-1">{t.calculator.totalPayable}</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    ₹ {calcResults.totalRepayable.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Transparency Notice */}
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/40 text-xs text-emerald-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-gold-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>ಧನಲಕ್ಷ್ಮಿ ಸೊಸೈಟಿ ಪಾರದರ್ಶಕತೆ ಖಾತರಿ (Zero Hidden Charges)</span>
                </div>
                <p className="leading-relaxed">
                  ಲೆಕ್ಕಾಚಾರವು ವಾರ್ಷಿಕ 14% ಸ್ಥಿರ ಬಡ್ಡಿ ದರವನ್ನು ಆಧರಿಸಿದೆ. ಯಾವುದೇ ಅಡಗಿದ ಅಥವಾ ಅನಿರೀಕ್ಷಿತ ಶುಲ್ಕಗಳಿಲ್ಲ. ಸಾಲ ಮಂಜೂರಾತಿ ಸಮಯದಲ್ಲಿ ಅಧಿಕೃತ ರಶೀದಿಯನ್ನು ನೀಡಲಾಗುತ್ತದೆ.
                </p>
              </div>

            </div>

            {/* Apply Button passing calculated amount */}
            <div className="pt-6">
              <button
                onClick={() => onOpenApply(null, amount)}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-base group"
              >
                <span>{t.calculator.applyWithCalc} (₹{amount.toLocaleString('en-IN')})</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
