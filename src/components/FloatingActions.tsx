import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Calculator } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalculator = () => {
    const elem = document.getElementById('calculator');
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white flex items-center justify-center shadow-lg hover:border-cyan-400 transition-all hover:scale-110 active:scale-95"
          aria-label="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Calculator Shortcut */}
      <button
        onClick={scrollToCalculator}
        className="group relative w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="حاسبة تكلفة السباكة"
      >
        <Calculator className="w-5 h-5" />
        <span className="absolute left-14 whitespace-nowrap px-3 py-1 rounded-lg bg-slate-900 border border-red-500/40 text-xs font-bold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          حاسبة المقايسة السريعة
        </span>
      </button>

      {/* Direct WhatsApp Contact Button */}
      <a
        href="https://wa.me/201011116316?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A5%D9%8A%D8%AC%D9%8A%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%20-%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D9%83%D8%A9"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all hover:scale-105 active:scale-95"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute left-14 whitespace-nowrap px-3 py-1 rounded-lg bg-slate-900 border border-emerald-500/40 text-xs font-bold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          تحدث مع مبيعات هوم بلاست (01011116316)
        </span>
      </a>
    </div>
  );
};
