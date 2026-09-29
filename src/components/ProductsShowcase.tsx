import React, { useState } from 'react';
import {
  Pipette,
  CheckCircle2,
  Layers,
  Sparkles,
  Droplet,
  Send,
  X,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface Product {
  id: string;
  category: 'ppr' | 'pvc' | 'faucets' | 'pumps';
  name: string;
  code: string;
  tagline: string;
  specs: { [key: string]: string };
  durability: string;
  standard: string;
}

export const ProductsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ppr' | 'pvc' | 'faucets' | 'pumps'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    quantity: '100',
    notes: '',
  });
  const { isNavy } = useTheme();

  const categories = [
    { id: 'all', label: 'كافة المنتجات' },
    { id: 'ppr', label: 'أنظمة أنابيب ومحابس PPR' },
    { id: 'pvc', label: 'شبكات الصرف الصحي PVC' },
    { id: 'faucets', label: 'خلاطات وأطقم صحية' },
    { id: 'pumps', label: 'المضخات والفلاتر الذكية' },
  ];

  const products: Product[] = [
    {
      id: 'ppr-pipe-green',
      category: 'ppr',
      name: 'أنبوب هوم بلاست PPR الأخضر فايبر PN25',
      code: 'HP-PPR-F25',
      tagline: 'الأقوى لمياه الشرب والتغذية الحارة والباردة',
      specs: {
        'الضغط التشغيلي': '25 Bar (PN25)',
        'نطاق الحرارة': '-20°C إلى +95°C',
        'الأقطار': '20, 25, 32, 40, 50, 63 mm',
        'الطبقات': '3 طبقات معززة بالألياف الزجاجية',
      },
      durability: 'ضمان 25 عاماً',
      standard: 'DIN 8077 / 8078 / ISO 15874',
    },
    {
      id: 'ppr-brass-valve',
      category: 'ppr',
      name: 'محبس دفن هوم بلاست نحاس كروي متقدم',
      code: 'HP-VLV-B90',
      tagline: 'إغلاق محكم 100% مع يد تحكم أنيقة مطلية بالكروم',
      specs: {
        'جسم المحبس': 'نحاس DZR عالي النقاء',
        'الكرة الداخلية': 'نحاس مطلي بالكروم المقاوم للتكلس',
        'ضغط الانفجار': 'أكثر من 45 Bar',
        'نوع التركيب': 'لحام حراري PPR مباشر بدون تسريب',
      },
      durability: 'ضمان 15 عاماً',
      standard: 'EN 13828 & SASO',
    },
    {
      id: 'pvc-silent-pipe',
      category: 'pvc',
      name: 'ماسورة صرف صحي عازلة للصوت Acoustic PVC',
      code: 'HP-PVC-S110',
      tagline: 'تخفيض الضوضاء والصدمات بنسبة 85%',
      specs: {
        'العزل الصوتي': 'أقل من 17 dB عند التدفق الأقصى',
        'القطر الخارجي': '50, 75, 110, 160 mm',
        'نوع الاتصال': 'جوان مرن EPDM فائق الإحكام',
        'مقاومة الكيماويات': 'PH 2 إلى PH 12',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'EN 14366 & DIN 4109',
    },
    {
      id: 'pvc-floor-drain',
      category: 'pvc',
      name: 'صفاية أرضية ذكية مانعة للحشرات والروائح',
      code: 'HP-DRN-SMART',
      tagline: 'رداد مغناطيسي يغلق تلقائياً بمجرد توقف تدفق الماء',
      specs: {
        'المادة': 'ستانلس ستيل 304 + قلب PVC متين',
        'آلية الغلق': 'صمام مغناطيسي جاذبي One-Way',
        'معدل الصرف': '45 لتر/دقيقة',
        'العمق': 'تصميم نحيف 65 مم مناسب لكافة البلاط',
      },
      durability: 'ضمان 10 أعوام',
      standard: 'ISO 9001 Certified',
    },
    {
      id: 'faucet-concealed',
      category: 'faucets',
      name: 'خلاط مدفون ذكي HomePlast Luxe Black',
      code: 'HP-MIX-BK4',
      tagline: 'تصميم أوروبي فاخر مع ترموستات أمان وتحكم رقمي',
      specs: {
        'القلب الداخلي': 'سيراميك Sedal الأوروبي',
        'جسم التأسيس': 'صندوق دفن بلاستيكي عازل PEX-Box',
        'التشطيب': 'طلاء كهربائي PVD أسود مطفي مقاوم للخدش',
        'ترشيد المياه': 'مزود بمهوّي Neoperl سويسري موفر 40%',
      },
      durability: 'ضمان 10 أعوام',
      standard: 'WRAS & WaterSense Compliant',
    },
    {
      id: 'pump-inverter',
      category: 'pumps',
      name: 'مضخة تعزيز الضغط الذكية المتغيرة التردد (VFD)',
      code: 'HP-PUMP-INV',
      tagline: 'ضغط ماء ثابت في جميع الأدوار مع تشغيل صامت تماماً',
      specs: {
        'القدرة': '1.0 حصان - انفرتر موفر للكهرباء 60%',
        'مستوى الضجيج': '38 ديسيبل (أهدأ من الهمس)',
        'نظام الحماية': 'إيقاف فوري عند انقطاع المياه وحماية الحرارة',
        'لوحة التحكم': 'شاشة رقمية LED تعمل باللمس لضبط البار',
      },
      durability: 'ضمان سنتين شامل الاستبدال',
      standard: 'CE & SASO Certified',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setSelectedProduct(null);
    }, 2200);
  };

  return (
    <section
      id="products"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy
          ? 'bg-[#0b1736] border-slate-800'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider mb-2">
              <span>كتالوج منتجات هوم بلاست</span>
              <span>·</span>
              <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>جودة مطابقة للمواصفات الألمانية</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
                isNavy ? 'text-white' : 'text-slate-900'
              }`}
            >
              أنظمة أنابيب ومستلزمات السباكة{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                بأعلى معايير المتانة
              </span>
            </h2>
            <p className={`mt-3 text-sm ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
              جميع منتجات هوم بلاست خاضعة لاختبارات فحص الضغط الهيدروليكي الصارم ومعتمدة للاستخدام السكني والتجاري.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className={`mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 rounded-xl border self-start md:self-auto ${
              isNavy ? 'bg-[#0f1f44] border-slate-700' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-white font-bold shadow-sm'
                    : isNavy
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] ${
                isNavy
                  ? 'bg-[#0f1f44]/80 border-slate-700/60'
                  : 'bg-white border-slate-200/90 shadow-sm'
              }`}
            >
              <div>
                {/* Product Header */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-wider">
                    {product.code}
                  </span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded border ${
                      isNavy ? 'bg-slate-900/80 text-slate-300 border-white/5' : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    {product.durability}
                  </span>
                </div>

                {/* Styled Product Visual Representation */}
                <div className="relative h-44 w-full rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-4 mb-5 overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-grid-navy opacity-30" />
                  
                  {product.category === 'ppr' && (
                    <div className="relative flex items-center justify-center">
                      <div className="w-32 h-10 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-between px-3 border border-emerald-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-900 border border-emerald-300" />
                        <span className="text-[10px] font-bold font-mono text-emerald-950 tracking-widest">HOMEPLAST PPR</span>
                        <div className="w-4 h-4 rounded-full bg-emerald-900 border border-emerald-300" />
                      </div>
                      <div className="absolute -top-3 w-8 h-8 rounded-full border-2 border-red-500 bg-red-950/90 flex items-center justify-center text-[9px] font-bold text-red-300 shadow-md">
                        PN25
                      </div>
                    </div>
                  )}

                  {product.category === 'pvc' && (
                    <div className="relative flex items-center justify-center">
                      <div className="w-36 h-12 rounded-xl bg-gradient-to-r from-slate-700 via-slate-500 to-slate-700 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-between px-4 border border-cyan-400/40">
                        <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-400 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        </div>
                        <span className="text-[10px] font-bold font-mono text-cyan-200">SILENT ACOUSTIC</span>
                        <div className="w-3 h-3 rounded-full bg-slate-900" />
                      </div>
                      <div className="absolute -bottom-2 text-[9px] font-mono text-cyan-400 bg-slate-950/90 px-2 py-0.5 rounded border border-cyan-500/30">
                        17 dB ISO
                      </div>
                    </div>
                  )}

                  {product.category === 'faucets' && (
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-800 to-slate-700 border border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                          <Droplet className="w-4 h-4 text-cyan-400 fill-cyan-400/30" />
                        </div>
                      </div>
                      <span className="mt-2 text-[10px] font-mono text-slate-300">MATTE BLACK LUXE</span>
                    </div>
                  )}

                  {product.category === 'pumps' && (
                    <div className="relative flex items-center justify-center gap-3">
                      <div className="w-28 h-16 rounded-xl bg-gradient-to-r from-cyan-950 to-slate-900 border border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.4)] flex flex-col items-center justify-center p-2">
                        <span className="text-xs font-mono font-extrabold text-cyan-300">3.5 BAR CONSTANT</span>
                        <span className="text-[9px] text-emerald-400">INVERTER VFD 60% ECO</span>
                      </div>
                    </div>
                  )}
                </div>

                <h3
                  className={`text-base font-bold mb-1.5 leading-snug group-hover:text-cyan-600 transition-colors ${
                    isNavy ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {product.name}
                </h3>
                <p className={`text-xs mb-4 line-clamp-2 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  {product.tagline}
                </p>

                <div className={`space-y-1.5 py-3 border-y mb-5 text-xs ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
                  {Object.entries(product.specs).slice(0, 3).map(([key, val], idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">{key}:</span>
                      <span className={`font-mono font-semibold text-[11px] ${isNavy ? 'text-white' : 'text-slate-800'}`}>
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(product)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  isNavy
                    ? 'text-white bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border-slate-700 hover:border-cyan-400'
                    : 'text-slate-800 bg-slate-100 hover:bg-cyan-600 hover:text-white border-slate-200 hover:border-cyan-600'
                }`}
              >
                <span>طلب تسعير ومواصفات المنتج</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Quote / Inquire Modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={`relative w-full max-w-lg rounded-2xl p-6 sm:p-7 text-right border ${
              isNavy
                ? 'bg-[#0f1f44] border-cyan-500/50 text-white shadow-[0_0_40px_rgba(6,182,212,0.35)]'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-4 left-4 p-2 rounded-lg ${
                isNavy ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-800'
              }`}
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            {quoteSuccess ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-500 mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">تم إرسال طلبك بنجاح!</h4>
                <p className={`text-xs max-w-xs ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  سيتواصل معك مهندس المبيعات في هوم بلاست خلال أقل من ساعتين مع جدول الأسعار المعتمد.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 block mb-1">
                    طلب تسعير منتج هوم بلاست ({selectedProduct.code})
                  </span>
                  <h3 className="text-lg font-bold">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    المعيار: {selectedProduct.standard} · {selectedProduct.durability}
                  </p>
                </div>

                <form onSubmit={handleSendQuote} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      الاسم الكامل / اسم المنشأة
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      placeholder="مثال: م. أحمد الشمري"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:border-cyan-500 focus:outline-none ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        رقم الهاتف / واتساب
                      </label>
                      <input
                        type="tel"
                        required
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:border-cyan-500 focus:outline-none text-right ${
                          isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1">
                        الكمية التقديرية / المتر
                      </label>
                      <input
                        type="text"
                        value={quoteForm.quantity}
                        onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                        placeholder="مثال: 50 متر أو 20 حبة"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:border-cyan-500 focus:outline-none ${
                          isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">
                      ملاحظات أو مواصفات إضافية (اختياري)
                    </label>
                    <textarea
                      rows={2}
                      value={quoteForm.notes}
                      onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                      placeholder="اذكر موقع المشروع أو المقاسات المطلوبة..."
                      className={`w-full px-3.5 py-2 rounded-lg border text-xs focus:border-cyan-500 focus:outline-none resize-none ${
                        isNavy ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <a
                      href={`https://wa.me/201011116316?text=${encodeURIComponent(`مرحباً إيجي بلاست - هوم بلاست، أطلب عرض سعر لمنتج ${selectedProduct.name} كود: ${selectedProduct.code}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                        isNavy
                          ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40'
                          : 'text-emerald-700 bg-emerald-50 border border-emerald-300'
                      }`}
                    >
                      طلب تسعير واتساب (01011116316)
                    </a>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-md transition-all cursor-pointer"
                    >
                      إرسال الطلب للمبيعات
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
