import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Factory,
  Building2,
  Globe,
  Truck,
  Award,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'توريد أنابيب ومستلزمات السباكة (جملة ومشاريع)',
    city: 'بني سويف',
    branch: 'الإدارة الرئيسية - بني سويف',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeBranchTab, setActiveBranchTab] = useState<'all' | 'cairo' | 'upper_egypt' | 'delta'>('all');
  const { isNavy } = useTheme();

  const branches = [
    {
      id: 'cairo',
      region: 'cairo',
      city: 'القاهرة (Cairo)',
      address: 'اركاديا مول - الدور الرابع - رقم E23',
      sub: 'Arkadia Mall, 4th Floor, E23',
    },
    {
      id: 'giza',
      region: 'cairo',
      city: 'الجيزة (Giza)',
      address: 'شارع الهرم - أعلى بنك مصر',
      sub: 'Al-Haram - Above Banque Misr Building',
    },
    {
      id: 'fayoum',
      region: 'upper_egypt',
      city: 'الفيوم (Fayoum)',
      address: 'منطقة دلة - بجوار أبراج القضاة',
      sub: 'Dala Area - Beside Judges Towers',
    },
    {
      id: 'minya',
      region: 'upper_egypt',
      city: 'المنيا (Minya)',
      address: 'شارع 6 أكتوبر - تقسيم شادي',
      sub: '6th of October St. - Shadi District',
    },
    {
      id: 'kafr-elshikh',
      region: 'delta',
      city: 'كفر الشيخ (Kafr El-Sheikh)',
      address: 'طريق السرايا الرئيسي',
      sub: 'Elsraia Road',
    },
    {
      id: 'tanta',
      region: 'delta',
      city: 'طنطا (Tanta)',
      address: 'شارع ترعة سنارة - برج تبارك',
      sub: 'Terat Senara St. - Tabarak Tower',
    },
    {
      id: 'tenth-ramadan',
      region: 'delta',
      city: 'العاشر من رمضان (10th of Ramadan)',
      address: 'الحي الحادي عشر (الحي 11)',
      sub: 'Zone 11',
    },
  ];

  const filteredBranches =
    activeBranchTab === 'all'
      ? branches
      : branches.filter((b) => b.region === activeBranchTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0b1736] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider mb-2">
            <span>بيانات الاتصال والدعم الرسمي · إيجي بلاست (هوم بلاست ®)</span>
            <span>·</span>
            <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>المصنع والإدارة والفروع</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
              isNavy ? 'text-white' : 'text-slate-900'
            }`}
          >
            تواصل مباشر مع المصنع{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
              وشبكة فروعنا بالمحافظات
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            شركة <strong>إيجي بلاست (Egy Plast)</strong> - صاحبة العلامة التجارية المسجلة <strong>هوم بلاست ® (Home Plast ®)</strong>. مصانعنا ومراكز توزيعنا في خدمتكم للتوريد المحلي والتصدير الدولي.
          </p>
        </div>

        {/* Top Headquarters & Factory Showcase Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          
          {/* Factory Card */}
          <div
            className={`p-5 rounded-2xl border flex items-start gap-4 transition-all ${
              isNavy
                ? 'bg-gradient-to-r from-[#0f1f44] to-[#0a142e] border-cyan-500/30 text-white'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Factory className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 block mb-0.5">
                مقر المصنع الرئيسي (Factory)
              </span>
              <h4 className="text-base font-extrabold">بني سويف الجديدة 131/3</h4>
              <p className={`text-xs mt-1 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                منطقة الصناعات المتوسطة - بني سويف الجديدة (Beni Swief Industrial Zone)
              </p>
            </div>
          </div>

          {/* Management / HQ Card */}
          <div
            className={`p-5 rounded-2xl border flex items-start gap-4 transition-all ${
              isNavy
                ? 'bg-gradient-to-r from-[#0f1f44] to-[#0a142e] border-red-500/30 text-white'
                : 'bg-white border-slate-200 text-slate-900 shadow-sm'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 border border-red-500/30 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 block mb-0.5">
                المقر الإداري العام (Head Office)
              </span>
              <h4 className="text-base font-extrabold">بني سويف - 3 شارع 10 أرض المحلج</h4>
              <p className={`text-xs mt-1 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                Beni Swief, 3 Ard Elmahlg St. No. 10
              </p>
            </div>
          </div>

        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Contact Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 text-right">
            
            {/* Sales Department Card */}
            <div
              className={`p-4 rounded-2xl border transition-colors ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">إدارة المبيعات وخدمة العملاء (Sales Dept)</h4>
                  <span className="text-[11px] text-slate-500">استفسارات الأسعار والتوريد المحلي</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">هاتف المبيعات 1:</span>
                  <a href="tel:01011116316" className="font-mono font-bold text-emerald-600 hover:underline" dir="ltr">
                    01011116316
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">هاتف المبيعات 2:</span>
                  <a href="tel:01025990336" className="font-mono font-bold text-emerald-600 hover:underline" dir="ltr">
                    01025990336
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">البريد الإلكتروني:</span>
                  <a href="mailto:info@egyplast.net" className="font-mono font-bold text-cyan-600 hover:underline">
                    info@egyplast.net
                  </a>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex gap-2">
                <a
                  href="https://wa.me/201011116316?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>واتساب 01011116316</span>
                </a>
                <a
                  href="https://wa.me/201025990336?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 px-3 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                  title="واتساب 01025990336"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Export Department Card */}
            <div
              className={`p-4 rounded-2xl border transition-colors ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">إدارة التصدير والتعاقدات الدولية (Export Dept)</h4>
                  <span className="text-[11px] text-slate-500">Export inquiries & international contracts</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">هاتف إدارة التصدير:</span>
                  <a href="tel:01066693585" className="font-mono font-bold text-sky-600 hover:underline" dir="ltr">
                    01066693585
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">بريد التصدير الرسمي:</span>
                  <a href="mailto:export@egyplast.net" className="font-mono font-bold text-sky-600 hover:underline">
                    export@egyplast.net
                  </a>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
                <a
                  href="https://wa.me/201066693585?text=Hello%20Egy%20Plast%20Export%20Department,%20inquiry%20regarding%20Home%20Plast%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-300 hover:bg-sky-100 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>تواصل مباشر مع التصدير (01066693585)</span>
                </a>
              </div>
            </div>

            {/* Official Website & Identity */}
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 flex items-center justify-center">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">الموقع الإلكتروني الرسمي</span>
                  <a
                    href="https://www.egyplast.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    www.egyplast.net
                  </a>
                </div>
              </div>
              <span className="text-[11px] font-bold text-red-600 px-2 py-0.5 rounded bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/20">
                Home Plast ®
              </span>
            </div>

          </div>

          {/* Form (7 cols) */}
          <div
            className={`lg:col-span-7 border rounded-2xl p-6 sm:p-8 backdrop-blur-xl text-right transition-colors ${
              isNavy
                ? 'bg-[#0f1f44]/90 border-cyan-500/30 text-white shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                : 'bg-white border-slate-200 text-slate-900 shadow-md'
            }`}
          >
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-500 mb-4 shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold mb-2">
                  شكراً لتواصلك مع إيجي بلاست - هوم بلاست ®!
                </h3>
                <p className={`text-sm max-w-md leading-relaxed mb-6 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  تم استلام طلبك بنجاح. سيتواصل معك فريق المبيعات على هاتفك ({formData.phone}) خلال وقت قصير لتقديم عروض الأسعار والمواصفات المعتمدة.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      serviceType: 'توريد أنابيب ومستلزمات السباكة (جملة ومشاريع)',
                      city: 'بني سويف',
                      branch: 'الإدارة الرئيسية - بني سويف',
                      message: '',
                    });
                  }}
                  className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isNavy ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                  }`}
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={`border-b pb-4 mb-4 ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
                  <h3 className="text-lg font-bold">
                    طلب تسعير مباشر من المصنع أو استفسار فني
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    املأ النموذج وسنقوم بالرد المباشر بجدول الكميات والأسعار المعتمدة من شركة إيجي بلاست.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5">
                      الاسم الكامل / اسم الشركة <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="مثال: م. أحمد عبد العزيز"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5">
                      رقم الهاتف / واتساب <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none text-right ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5">
                      البريد الإلكتروني (اختياري)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none text-right ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5">
                      المحافظة أو أقرب فرع لك <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      <option value="بني سويف">بني سويف (المصنع والإدارة الرئيسية)</option>
                      <option value="القاهرة">القاهرة (فرع اركاديا مول)</option>
                      <option value="الجيزة">الجيزة (فرع الهرم - أعلى بنك مصر)</option>
                      <option value="الفيوم">الفيوم (فرع دلة - بجوار أبراج القضاة)</option>
                      <option value="المنيا">المنيا (فرع 6 أكتوبر - تقسيم شادي)</option>
                      <option value="كفر الشيخ">كفر الشيخ (فرع طريق السرايا)</option>
                      <option value="طنطا">طنطا (فرع ترعة سنارة - برج تبارك)</option>
                      <option value="العاشر من رمضان">العاشر من رمضان (فرع الحي 11)</option>
                      <option value="تصدير دولي">طلب تصدير خارج جمهورية مصر العربية</option>
                      <option value="محافظة أخرى">محافظة أخرى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    الطلب أو نوع التعاقد
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none ${
                      isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="توريد أنابيب ومستلزمات السباكة (جملة ومشاريع)">توريد أنابيب ومحابس PPR & PVC (جملة ومشاريع)</option>
                    <option value="طلب تصدير دولي (Export Order)">طلب تصدير دولي عبر إدارة التصدير (Export)</option>
                    <option value="طلب وكالة توزيع أو موزع معتمد">طلب وكالة توزيع أو موزع معتمد بالمحافظات</option>
                    <option value="تأسيس مشروع سكني أو تجاري">تأسيس مشروع سكني / تجاري مع اختبار ضغط</option>
                    <option value="استفسار فني أو مواصفات جودة">استفسار فني وشهادات اعتماد الجودة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5">
                    تفاصيل إضافية أو الكميات المقترحة
                  </label>
                  <textarea
                    rows={3}
                    placeholder="اذكر الكميات المطلوبة، المقاسات، أو اسم المشروع والمدينة..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:border-cyan-500 focus:outline-none resize-none ${
                      isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    <span>توريد مصنع معتمد وضمان هوم بلاست ®</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>جاري إرسال الطلب...</span>
                    ) : (
                      <>
                        <span>إرسال طلب التسعير المباشر</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Full Branches Network Section (شبكة فروع هوم بلاست بالمحافظات) */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border transition-colors ${
            isNavy ? 'bg-[#0f1f44]/60 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="text-right">
              <span className="text-xs font-bold text-red-600 dark:text-red-400 block mb-1">
                شبكة الفروع ومراكز التوزيع (Branches Network)
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                معارض وفروع هوم بلاست في مصر
              </h3>
            </div>

            {/* Region Filter */}
            <div className={`flex items-center gap-1 p-1 rounded-xl border ${isNavy ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'}`}>
              <button
                onClick={() => setActiveBranchTab('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeBranchTab === 'all'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                كافة الفروع (7)
              </button>
              <button
                onClick={() => setActiveBranchTab('cairo')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeBranchTab === 'cairo'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                القاهرة والجيزة
              </button>
              <button
                onClick={() => setActiveBranchTab('upper_egypt')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeBranchTab === 'upper_egypt'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                الصعيد
              </button>
              <button
                onClick={() => setActiveBranchTab('delta')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  activeBranchTab === 'delta'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                الدلتا والقناة
              </button>
            </div>
          </div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredBranches.map((branch) => (
              <div
                key={branch.id}
                className={`p-4 rounded-xl border transition-all text-right hover:border-red-500 ${
                  isNavy
                    ? 'bg-slate-900/60 border-slate-700/60'
                    : 'bg-slate-50 border-slate-200 hover:bg-white shadow-2xs'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h4 className={`text-sm font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                    {branch.city}
                  </h4>
                </div>

                <p className={`text-xs font-medium leading-relaxed mb-1 ${isNavy ? 'text-slate-300' : 'text-slate-700'}`}>
                  {branch.address}
                </p>
                <span className="text-[10px] text-slate-500 block font-mono" dir="ltr">
                  {branch.sub}
                </span>

                <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[11px] ${isNavy ? 'border-white/5' : 'border-slate-200'}`}>
                  <span className="text-slate-500">المبيعات: 01011116316</span>
                  <a
                    href="https://wa.me/201011116316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    واتساب
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
