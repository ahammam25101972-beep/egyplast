import React, { useState } from 'react';
import {
  Calculator,
  Building,
  Home,
  Bath,
  Utensils,
  Check,
  Send,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const PlumbingCostCalculator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'apartment' | 'floor' | 'villa' | 'commercial'>('villa');
  const [bathrooms, setBathrooms] = useState(4);
  const [kitchens, setKitchens] = useState(2);
  const [tier, setTier] = useState<'gold' | 'platinum' | 'silver'>('gold');
  const [consultationBooked, setConsultationBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', city: 'الرياض' });
  const { isNavy } = useTheme();

  const propertyMultipliers = {
    apartment: { pprMeters: 65, pvcMeters: 40, baseCost: 3200 },
    floor: { pprMeters: 95, pvcMeters: 60, baseCost: 5400 },
    villa: { pprMeters: 180, pvcMeters: 120, baseCost: 11500 },
    commercial: { pprMeters: 260, pvcMeters: 190, baseCost: 18000 },
  };

  const tierMultipliers = {
    silver: { costFactor: 1.0, label: 'فئة هوم بلاست القياسية (PPR PN20)', warranty: '15 عاماً' },
    gold: { costFactor: 1.35, label: 'فئة هوم بلاست الذهبية (PPR Fiber PN25 + صرف صامت)', warranty: '25 عاماً' },
    platinum: { costFactor: 1.75, label: 'فئة هوم بلاست بلاتينيوم (الشبكة الذكية مع صمامات تحكم مركزية)', warranty: '30 عاماً' },
  };

  const currentProp = propertyMultipliers[propertyType];
  const currentTier = tierMultipliers[tier];

  const totalPprMeters = Math.round(currentProp.pprMeters + bathrooms * 18 + kitchens * 14);
  const totalPvcMeters = Math.round(currentProp.pvcMeters + bathrooms * 12 + kitchens * 8);
  const totalFittings = Math.round((bathrooms + kitchens) * 26);
  const estimatedCost = Math.round((currentProp.baseCost + (bathrooms * 1450) + (kitchens * 950)) * currentTier.costFactor);
  const costMin = Math.round(estimatedCost * 0.9);
  const costMax = Math.round(estimatedCost * 1.15);

  const handleBookVisit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationBooked(true);
    setTimeout(() => {
      setConsultationBooked(false);
    }, 4000);
  };

  return (
    <section
      id="calculator"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0a142e] border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-3 ${
              isNavy
                ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400'
                : 'bg-cyan-50 border-cyan-200 text-cyan-700'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>حاسبة هوم بلاست الهندسية الذكية</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
              isNavy ? 'text-white' : 'text-slate-900'
            }`}
          >
            قدّر تكلفة ومستلزمات السباكة{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
              لمشروعك في ثوانٍ
            </span>
          </h2>
          <p className={`mt-3 text-sm ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            حدد مواصفات البناء وعدد وحدات المياه لتحصل فوراً على حصر تقديري للأمتار، المحابس، والتكلفة الإجمالية الموصى بها.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div
            className={`lg:col-span-7 border rounded-2xl p-6 sm:p-8 backdrop-blur-xl text-right transition-colors ${
              isNavy
                ? 'bg-[#0f1f44]/80 border-slate-700/60 shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
                : 'bg-slate-50 border-slate-200/90 shadow-sm'
            }`}
          >
            
            {/* Step 1: Property Type */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. نوع العقار أو المشروع
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'apartment', label: 'شقة سكنية', icon: Home },
                  { id: 'floor', label: 'دور مستقل', icon: Building },
                  { id: 'villa', label: 'فيلا فاخرة', icon: Home },
                  { id: 'commercial', label: 'مبنى تجاري', icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as any)}
                      className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-500 text-white font-bold border-cyan-500 shadow-sm'
                          : isNavy
                          ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                          : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Bathrooms & Kitchens counters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              <div className={`p-4 rounded-xl border ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <Bath className="w-4 h-4 text-cyan-500" />
                    <span>عدد دورات المياه</span>
                  </div>
                  <span className="text-base font-mono font-bold text-cyan-600 dark:text-cyan-400">{bathrooms}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>1</span>
                  <span>6</span>
                  <span>12+</span>
                </div>
              </div>

              <div className={`p-4 rounded-xl border ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                    <Utensils className="w-4 h-4 text-red-500" />
                    <span>عدد المطابخ وغرف الغسيل</span>
                  </div>
                  <span className="text-base font-mono font-bold text-red-500">{kitchens}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={kitchens}
                  onChange={(e) => setKitchens(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>1</span>
                  <span>3</span>
                  <span>6</span>
                </div>
              </div>

            </div>

            {/* Step 3: Material Quality Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. باقة ومستوى الجودة المفضلة
              </label>
              <div className="space-y-2.5">
                {[
                  {
                    id: 'silver',
                    name: 'باقة هوم بلاست الأساسية (Silver)',
                    desc: 'أنابيب PPR PN20 للمياه + شبكة صرف PVC كلاسيكية (ضمان 15 سنة).',
                    badge: 'اقتصادي وعملي',
                  },
                  {
                    id: 'gold',
                    name: 'باقة هوم بلاست الذهبية (Gold - الأكثر طلباً)',
                    desc: 'أنابيب PPR Fiber PN25 معززة بالألياف + شبكة صرف PVC صامت عازل للضوضاء (ضمان 25 سنة).',
                    badge: 'الأعلى طلباً',
                  },
                  {
                    id: 'platinum',
                    name: 'باقة هوم بلاست بلاتينيوم (Platinum)',
                    desc: 'شبكة ذكية متكاملة بمحابس تحكم أوتوماتيكية + صرف ألماني فائق الصمت + عزل مائي شامل.',
                    badge: 'المشاريع الفاخرة',
                  },
                ].map((item) => {
                  const isSelected = tier === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setTier(item.id as any)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isSelected
                          ? isNavy
                            ? 'bg-slate-800 border-cyan-400 shadow-sm'
                            : 'bg-white border-cyan-500 shadow-sm ring-1 ring-cyan-500'
                          : isNavy
                          ? 'bg-slate-900/40 border-slate-700/60 hover:border-slate-600'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            isSelected
                              ? 'border-cyan-500 bg-cyan-500 text-white'
                              : 'border-slate-400'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold flex items-center gap-2">
                            <span className={isNavy ? 'text-white' : 'text-slate-900'}>{item.name}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded border ${
                              isNavy ? 'bg-slate-900 text-cyan-400 border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                            }`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Breakdown Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0f1f44] to-[#0a142e] border border-cyan-500/40 rounded-2xl p-6 sm:p-7 shadow-[0_0_35px_rgba(6,182,212,0.25)] text-right text-white">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>المقايسة التقديرية لمشروعك</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                {currentTier.warranty}
              </span>
            </div>

            {/* Estimated Price Range */}
            <div className="bg-slate-950/70 rounded-xl p-4 border border-white/10 mb-5 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">
                التكلفة التقديرية الإجمالية للمواد والتأسيس
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-neon-cyan">
                {costMin.toLocaleString()} - {costMax.toLocaleString()}{' '}
                <span className="text-sm font-normal text-slate-300">ريال / ج.م</span>
              </div>
              <span className="text-[10px] text-emerald-400 block mt-1">
                * تشمل أنابيب التغذية والصرف والمحابس مع فحص الضغط وضمان هوم بلاست
              </span>
            </div>

            {/* Quantity Takeoff Table */}
            <div className="space-y-2.5 mb-6 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-400">أمتار أنابيب PPR (تغذية حار وبارد):</span>
                <span className="font-mono font-bold text-cyan-400">~{totalPprMeters} متر</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-400">أمتار مواسير الصرف الصامت PVC:</span>
                <span className="font-mono font-bold text-sky-400">~{totalPvcMeters} متر</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-400">قطع الوصل والأكواع والمحابس النحاسية:</span>
                <span className="font-mono font-bold text-red-400">~{totalFittings} قطعة</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-400">فحص ضغط هيدروستاتيكي بشهادة:</span>
                <span className="font-semibold text-emerald-400">مجاناً ضمن الباقة</span>
              </div>
            </div>

            {/* Consultation Booking Form */}
            {consultationBooked ? (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-in fade-in">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">تم تثبيت حجز المعاينة الفنية!</h4>
                <p className="text-[11px] text-slate-300">
                  سيتواصل معك مهندس معتمد من شركة هوم بلاست لتحديد موعد الزيارة وتقديم العرض النهائي.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookVisit} className="space-y-3 pt-2 border-t border-white/10">
                <span className="text-xs font-bold text-slate-200 block">
                  احجز مهندساً لمعاينة الموقع وتأكيد المقايسة مجاناً:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="اسمك الكريم"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="رقم الجوال"
                    dir="ltr"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    className="px-3 py-2 rounded-lg bg-slate-950 border border-white/10 text-white text-xs focus:border-cyan-400 focus:outline-none text-right"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>تثبيت طلب المعاينة الهندسية</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/201011116316?text=${encodeURIComponent(
                      `مرحباً إيجي بلاست - هوم بلاست، قمت بحساب مقايسة سباكة لـ (${propertyType}) بعدد ${bathrooms} حمامات و ${kitchens} مطابخ، بباقة (${currentTier.label}) وأرغب في مراجعة المقايسة والتسعير المعتمد.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/60 transition-colors"
                    title="مشاركة المقايسة على واتساب (01011116316)"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
