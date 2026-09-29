import React from 'react';
import { HomePlastLogo } from './HomePlastLogo.tsx';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageCircle, Globe, Factory, Truck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const Footer: React.FC = () => {
  const { isNavy } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t text-right relative overflow-hidden transition-colors duration-300 ${
        isNavy
          ? 'bg-[#070f24] border-cyan-500/20 text-slate-400'
          : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      {/* Subtle bottom neon gradient */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-cyan-400 to-red-600 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Company & Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <HomePlastLogo size="sm" withGlow={isNavy} />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-wide">
                  إيجي بلاست | هوم بلاست ®
                </span>
                <span className="text-[11px] text-cyan-400 font-mono">
                  Egy Plast · Home Plast ®
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              شركة <strong>إيجي بلاست (Egy Plast)</strong> - صاحبة العلامة التجارية المسجلة <strong>هوم بلاست ®</strong>. رواد صناعة وتوريد أحدث أنظمة أنابيب ومحابس PPR وشبكات الصرف الصحي الصامت ومستلزمات السباكة المتطورة في مصر والتصدير الدولي.
            </p>

            {/* Direct Contact Icons & Website */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="https://wa.me/201011116316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:border-emerald-400 transition-colors"
                title="واتساب المبيعات (01011116316)"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:01011116316"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                title="اتصال بالمبيعات (01011116316)"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@egyplast.net"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                title="بريد المبيعات (info@egyplast.net)"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.egyplast.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center text-cyan-400 hover:border-cyan-400 transition-colors"
                title="الموقع الرسمي (www.egyplast.net)"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span><strong>المصنع:</strong> بني سويف الجديدة 131/3 - الصناعات المتوسطة</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span><strong>الإدارة:</strong> بني سويف - 3 شارع 10 أرض المحلج</span>
              </div>
            </div>
          </div>

          {/* Col 3: Branches Quick Directory */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              فروع المحافظات
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <span className="text-white font-medium">القاهرة:</span> اركاديا مول الدور الرابع E23
              </li>
              <li>
                <span className="text-white font-medium">الجيزة:</span> الهرم - أعلى بنك مصر
              </li>
              <li>
                <span className="text-white font-medium">الفيوم:</span> دلة - بجوار أبراج القضاة
              </li>
              <li>
                <span className="text-white font-medium">المنيا:</span> شارع 6 أكتوبر - تقسيم شادي
              </li>
              <li>
                <span className="text-white font-medium">كفر الشيخ:</span> طريق السرايا
              </li>
              <li>
                <span className="text-white font-medium">طنطا:</span> شارع ترعة سنارة - برج تبارك
              </li>
              <li>
                <span className="text-white font-medium">العاشر من رمضان:</span> الحي 11
              </li>
            </ul>
          </div>

          {/* Col 4: Sales & Export Department */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              الاتصال والمبيعات
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="text-slate-300 block text-[11px]">إدارة المبيعات:</span>
                <span className="font-mono text-emerald-400 font-bold" dir="ltr">01011116316</span> /{' '}
                <span className="font-mono text-emerald-400 font-bold" dir="ltr">01025990336</span>
              </li>
              <li>
                <span className="text-slate-300 block text-[11px]">البريد الإلكتروني:</span>
                <a href="mailto:info@egyplast.net" className="font-mono text-cyan-400 hover:underline">
                  info@egyplast.net
                </a>
              </li>
              <li className="pt-2 border-t border-white/5">
                <span className="text-slate-300 block text-[11px]">إدارة التصدير (Export):</span>
                <span className="font-mono text-sky-400 font-bold" dir="ltr">01066693585</span>
              </li>
              <li>
                <span className="text-slate-300 block text-[11px]">بريد التصدير الدولي:</span>
                <a href="mailto:export@egyplast.net" className="font-mono text-sky-400 hover:underline">
                  export@egyplast.net
                </a>
              </li>
              <li>
                <span className="text-slate-300 block text-[11px]">الموقع الإلكتروني:</span>
                <a href="https://www.egyplast.net" target="_blank" rel="noopener noreferrer" className="font-mono text-cyan-400 hover:underline">
                  www.egyplast.net
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Certifications & Trust */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              الجودة والاعتمادات
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ضمان مصنعي معتمد حتى 25 عاماً</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                <span className="font-mono text-cyan-400 font-bold">DIN / ISO</span>
                <span>مطابقة للمواصفات الألمانية والعالمية</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-white/5 flex items-center gap-2">
                <span className="font-mono text-red-400 font-bold">EOS</span>
                <span>مطابقة للمواصفات القياسية المصرية</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة إيجي بلاست (Egy Plast) - العلامة التجارية هوم بلاست ® (Home Plast ®).
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
