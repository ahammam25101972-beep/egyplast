import React, { useState, useEffect } from 'react';
import { HomePlastLogo } from './HomePlastLogo.tsx';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isNavy } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'منتجاتنا', href: '#products' },
    { label: 'حاسبة التكلفة', href: '#calculator' },
    { label: 'من نحن', href: '#about' },
    { label: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isNavy
            ? 'bg-[#0b1736]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_10px_25px_rgba(0,0,0,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Mark */}
          <a
            href="#hero"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
            aria-label="هوم بلاست - الصفحة الرئيسية"
          >
            <HomePlastLogo size="sm" withGlow={isNavy} />
            <div className="hidden sm:flex flex-col">
              <span className={`text-sm font-bold tracking-wider ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                هوم <span className="text-red-600">بلاست ®</span>
              </span>
              <span className={`text-[10px] font-medium ${isNavy ? 'text-cyan-400' : 'text-cyan-700'}`}>
                إيجي بلاست (Egy Plast)
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan-500 after:to-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  isNavy
                    ? 'text-slate-200 hover:text-cyan-400'
                    : 'text-slate-700 hover:text-cyan-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions + Theme Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-all cursor-pointer ${
                isNavy
                  ? 'bg-slate-800/80 border-slate-700 text-amber-300 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
              title={isNavy ? 'التحويل للخلفية الفاتحة العصرية' : 'التحويل للخلفية الكحلية'}
            >
              {isNavy ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden md:inline">الخلفية الفاتحة</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-blue-600" />
                  <span className="hidden md:inline">الخلفية الكحلية</span>
                </>
              )}
            </button>

            <a
              href="https://wa.me/201011116316?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D8%A5%D9%8A%D8%AC%D9%8A%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%20-%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA%20%D9%88%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B3%D8%A8%D8%A7%D9%83%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isNavy
                  ? 'text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400'
                  : 'text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>واتساب 01011116316</span>
            </a>

            <button
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  const elem = document.getElementById('contact');
                  elem?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_28px_rgba(239,68,68,0.6)] active:scale-95 cursor-pointer"
            >
              <span>طلب عرض سعر</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isNavy ? 'bg-slate-800 text-amber-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
              }`}
              aria-label="تغيير المظهر"
            >
              {isNavy ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                isNavy
                  ? 'text-slate-300 hover:text-cyan-400 border-white/10 bg-slate-900/50'
                  : 'text-slate-700 hover:text-cyan-600 border-slate-200 bg-white'
              }`}
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 ${
            isNavy
              ? 'border-cyan-500/20 bg-[#0b1736]/98 backdrop-blur-xl'
              : 'border-slate-200 bg-white/98 backdrop-blur-xl shadow-xl'
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium border border-transparent transition-all ${
                  isNavy
                    ? 'text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/20'
                    : 'text-slate-800 hover:text-cyan-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
            <a
              href="tel:01011116316"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold ${
                isNavy
                  ? 'text-slate-200 bg-slate-800/80 border border-slate-700'
                  : 'text-slate-800 bg-slate-100 border border-slate-200'
              }`}
            >
              <Phone className="w-4 h-4 text-cyan-500" />
              <span>اتصال بالمبيعات: 01011116316</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const elem = document.getElementById('contact');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 shadow-md"
            >
              <span>طلب عرض سعر هندسي مجاني</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
