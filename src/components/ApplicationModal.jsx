import React, { useState } from 'react';
import { X, CheckCircle, Printer, FileText, Send, User, Phone, MapPin, IndianRupee, Shield } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose, t, initialScheme = '', initialAmount = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    phone: '',
    aadhaar: '',
    address: '',
    scheme: initialScheme || 'ವೈಯಕ್ತಿಕ ಸಾಲ (Personal Loan)',
    amount: initialAmount || '50000',
    purpose: '',
    guarantor: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomRef = 'DLF-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(randomRef);
    setSubmitted(true);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8 print:my-0 print:border-none print:shadow-none">
        
        {/* Header */}
        <div className="no-print bg-emerald-900 text-white p-5 flex items-center justify-between border-b border-emerald-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-xl text-gold-300">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                {t.application.modalTitle}
              </h3>
              <p className="text-xs text-emerald-200">
                ಧನಲಕ್ಷ್ಮಿ ಕ್ರೆಡಿಟ್ ಕೋ ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ನಿಯಮಿತ • ಮುಳಬಾಗಿಲು
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-slate-200 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.fullName} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.fatherName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ತಂದೆ / ಗಂಡನ ಹೆಸರು"
                  value={formData.fatherName}
                  onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.mobile} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    maxLength="10"
                    placeholder="10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.aadhaar} (ಐಚ್ಛಿಕ)
                </label>
                <input
                  type="text"
                  maxLength="12"
                  placeholder="ಆಧಾರ್ ಸಂಖ್ಯೆ (12 ಅಂಕಿಗಳು)"
                  value={formData.aadhaar}
                  onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.loanType}
                </label>
                <select
                  value={formData.scheme}
                  onChange={(e) => setFormData({ ...formData, scheme: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none bg-white"
                >
                  <option value="ವೈಯಕ್ತಿಕ ಸಾಲ (Personal Loan)">ವೈಯಕ್ತಿಕ ಸಾಲ (Personal Loan)</option>
                  <option value="ಕೃಷಿ & ಹೈನುಗಾರಿಕೆ ಸಾಲ (Agri/Dairy Loan)">ಕೃಷಿ & ಹೈನುಗಾರಿಕೆ ಸಾಲ (Agri/Dairy Loan)</option>
                  <option value="ಸಣ್ಣ ವ್ಯಾಪಾರ ಸಾಲ (Business Loan)">ಸಣ್ಣ ವ್ಯಾಪಾರ ಸಾಲ (Business Loan)</option>
                  <option value="ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘಗಳ ಸಾಲ (SHG Loan)">ಮಹಿಳಾ ಸ್ವಸಹಾಯ ಸಂಘಗಳ ಸಾಲ (SHG Loan)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.requestedAmount} *
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="number"
                    required
                    min="5000"
                    placeholder="ಉದಾ: 50000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none font-mono"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {t.application.address} (ಮುಳಬಾಗಿಲು / ಕೋಲಾರ ಭಾಗ) *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <textarea
                  required
                  rows="2"
                  placeholder="ನಿಮ್ಮ ಗ್ರಾಮ, ರಸ್ತೆ, ಮುಳಬಾಗಿಲು ತಾಲ್ಲೂಕು, ಕೋಲಾರ ಜಿಲ್ಲೆ..."
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.guarantorName}
                </label>
                <input
                  type="text"
                  placeholder="ಜಾಮೀನುದಾರರ ಹೆಸರು ಮತ್ತು ಮೊಬೈಲ್"
                  value={formData.guarantor}
                  onChange={(e) => setFormData({ ...formData, guarantor: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {t.application.purpose}
                </label>
                <input
                  type="text"
                  placeholder="ಸಾಲದ ಉದ್ದೇಶ (ಉದಾ: ಕೃಷಿ, ಅಂಗಡಿ, ವೈದ್ಯಕೀಯ)"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
            </div>

            {/* Interest terms reminder */}
            <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>ಸಾಲವು ವಾರ್ಷಿಕ 14% ಬಡ್ಡಿದರದಲ್ಲಿ ಸಂಘದ ನಿಯಮಾವಳಿಯಂತೆ ಮಂಜೂರಾಗುತ್ತದೆ.</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50"
              >
                {t.application.close}
              </button>
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.application.submit}</span>
              </button>
            </div>

          </form>
        ) : (
          /* Submission Acknowledgment Slip */
          <div className="p-6 sm:p-8 space-y-6 printable-card">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {t.application.successMsg}
              </h4>
              <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-xl text-slate-800 font-mono font-bold text-sm">
                {t.application.refNumber} <span className="text-emerald-700">{refId}</span>
              </div>
            </div>

            {/* Slip Table */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">ಅರ್ಜಿದಾರರ ಹೆಸರು / Applicant:</span>
                <span className="font-bold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">ಮೊಬೈಲ್ / Mobile:</span>
                <span className="font-bold text-slate-900">{formData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">ಸಾಲದ ಮೊತ್ತ / Amount:</span>
                <span className="font-bold text-emerald-800 font-mono">₹ {Number(formData.amount).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">ಸಾಲದ ವಿಧ / Scheme:</span>
                <span className="font-medium text-slate-800">{formData.scheme}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">ವಿಳಾಸ / Address:</span>
                <span className="text-slate-700">{formData.address}</span>
              </div>
              <div className="flex justify-between pt-1 text-emerald-900">
                <span className="font-semibold">ಶಾಖೆ / Branch:</span>
                <span className="font-bold">ಮುಳಬಾಗಿಲು (Mulbagal Branch)</span>
              </div>
            </div>

            <div className="no-print flex items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={handlePrintSlip}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow"
              >
                <Printer className="w-4 h-4" />
                <span>{t.application.downloadSlip}</span>
              </button>
              <button
                onClick={handleClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold"
              >
                {t.application.close}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
