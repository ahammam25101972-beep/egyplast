import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FlaskConical,
  Target,
  Sparkles,
  Layers,
  Factory,
  Compass,
} from 'lucide-react';
import { HomePlastLogo } from './HomePlastLogo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const AboutSection: React.FC = () => {
  const { isNavy } = useTheme();

  const comparisonItems = [
    {
      feature: 'المواد الخام المعتمدة',
      homePlast: 'خامات نقية 100% من مواد (PP-R) و(U-PVC) و(PPH) المتطورة',
      traditional: 'خلطات بلاستيكية مجهولة المصدر ومعاد تدويرها تفتقر للمتانة',
    },
    {
      feature: 'رقابة واختبارات الجودة',
      homePlast: 'مختبرات متطورة مجهزة بكافة أجهزة فحص الضغط والمطابقة الدقيقة',
      traditional: 'فحص عشوائي دون اختبارات معملية موثقة قبل التوريد',
    },
    {
      feature: 'التحمل الحراري والهيدروليكي',
      homePlast: 'مقاومة فائقة للضغط العالي ودرجات الحرارة القصوى بدون أي تشوه',
      traditional: 'ضعف في نقاط اللحام وتآكل سريع بفعل الضغط والحرارة',
    },
    {
      feature: 'الاستدامة ومقاومة التكلس',
      homePlast: 'أسطح داخلية فائقة الانسيابية تمنع الترسبات والانسداد نهائياً',
      traditional: 'ترسبات كلسية سريعة تؤدي لضيق المسار وضعف التدفق',
    },
    {
      feature: 'الضمان والاعتماد الصناعي',
      homePlast: 'تصنيع مصري بمواصفات عالمية تأسس عام 2016 بضمان معتمد',
      traditional: 'غياب وثائق الضمان الرسمية وصعوبة متابعة ما بعد البيع',
    },
  ];

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0b1736] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider mb-2">
            <span>نبذة عن عائلة "هوم بلاست" (Homeplast)</span>
            <span>·</span>
            <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>
              شركة إيجي بلاست للاستيراد والتصدير وتصنيع الأدوات الصحية
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4 ${
              isNavy ? 'text-white' : 'text-slate-900'
            }`}
          >
            رواد تصنيع الأنابيب والوصلات{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
              منذ عام 2016
            </span>
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            نحن مصنع متخصص في إنتاج الأنابيب والوصلات والملحقات البلاستيكية المصنوعة من أجود خامات 
            <strong className="text-cyan-600 dark:text-cyan-400 mx-1">(U-PVC)</strong> و
            <strong className="text-red-600 mx-1">(PP-R)</strong> و
            <strong className="text-emerald-600 mx-1">(PPH)</strong>.
            يقع مصنعنا بالمنطقة الصناعية بمحافظة بني سويف في جمهورية مصر العربية.
          </p>
        </div>

        {/* Top Grid: Corporate Card & Detailed Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Identity & Fact Sheet (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              className={`w-full p-7 rounded-3xl border text-center flex flex-col items-center overflow-hidden transition-all duration-300 ${
                isNavy
                  ? 'bg-[#0f1f44]/90 border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <HomePlastLogo size="lg" withGlow={isNavy} className="mb-5" />

              <span className="text-[11px] font-mono text-red-500 font-bold uppercase tracking-widest mb-1">
                Official Trade Mark
              </span>
              <h3 className={`text-xl font-extrabold mb-1 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                عائلة هوم بلاست (Homeplast)
              </h3>
              
              <div className="my-3 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
                شركة إيجي بلاست للاستيراد والتصدير وتصنيع الأدوات الصحية
              </div>

              <p className={`text-xs mb-6 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                المنطقة الصناعية بمحافظة بني سويف - مصر. إنتاج معتمد للأنابيب والوصلات والملحقات البلاستيكية.
              </p>

              {/* Fast Stats Single-line */}
              <div className={`w-full pt-4 border-t flex items-center justify-around text-xs ${isNavy ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-extrabold text-red-500">2016</span>
                  <span className="text-[10px] text-slate-500">سنة التأسيس</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-extrabold text-cyan-600 dark:text-cyan-400">3 خامات</span>
                  <span className="text-[10px] text-slate-500">PP-R / UPVC / PPH</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-extrabold text-emerald-500">100%</span>
                  <span className="text-[10px] text-slate-500">رقابة مخبرية</span>
                </div>
              </div>
            </div>

            {/* Quality Laboratories Feature Box */}
            <div
              className={`w-full mt-4 p-5 rounded-2xl border transition-all text-right ${
                isNavy
                  ? 'bg-[#0f1f44]/60 border-cyan-500/30'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                    مختبرات الفحص والرقابة الدقيقة
                  </h4>
                  <span className="text-[11px] text-slate-500">أنظمة فحص متكاملة داخل المصنع</span>
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                تخضع عمليات الإنتاج لرقابة دقيقة داخل مختبراتنا؛ لضمان مطابقة المنتجات للمواصفات والمعايير المطلوبة. وقد تم تجهيز مختبراتنا بكافة الأنظمة والأجهزة اللازمة لإجراء جميع اختبارات المطابقة الضرورية.
              </p>
            </div>
          </div>

          {/* Detailed Narrative & Our Materials (7 cols) */}
          <div className="lg:col-span-7 text-right space-y-6">
            
            {/* Materials Capabilities */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                <Layers className="w-4 h-4" />
                <span>الخامات والمنتجات المتخصصة في مصنعنا</span>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                تصنيع متقدم للأنابيب والوصلات والملحقات البلاستيكية
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className={`p-3.5 rounded-xl border ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono font-bold text-red-500 block mb-1">
                    منتجات (PP-R)
                  </span>
                  <span className={`text-xs block font-semibold mb-1 ${isNavy ? 'text-white' : 'text-slate-800'}`}>
                    بولي بروبيلين عشوائي
                  </span>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    أنابيب وقطع شبكات المياه الساخنة والباردة المقاومة للضغط والحرارة.
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 block mb-1">
                    منتجات (U-PVC)
                  </span>
                  <span className={`text-xs block font-semibold mb-1 ${isNavy ? 'text-white' : 'text-slate-800'}`}>
                    بي في سي غير ملدن
                  </span>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    أنظمة الصرف الصحي والانسياب الهيدروليكي المقاومة للأحماض والكيماويات.
                  </p>
                </div>

                <div className={`p-3.5 rounded-xl border ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-xs font-mono font-bold text-emerald-500 block mb-1">
                    منتجات (PPH)
                  </span>
                  <span className={`text-xs block font-semibold mb-1 ${isNavy ? 'text-white' : 'text-slate-800'}`}>
                    بولي بروبيلين متجانس
                  </span>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    صلابة ميكانيكية استثنائية للاستخدامات الصناعية والإنشائية المتخصصة.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-white/5">
                <Factory className="w-4 h-4 text-red-500 shrink-0" />
                <span>
                  تأسس مصنعنا عام 2016 ويقع في المنطقة الصناعية بمحافظة بني سويف في مصر.
                </span>
              </div>
            </div>

            {/* Vision & Pillars (رؤيتنا) */}
            <div
              className={`p-6 rounded-3xl border transition-all ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-red-500 mb-2">
                <Compass className="w-4 h-4" />
                <span>رؤيتنا (Our Vision)</span>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-3 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                الريادة في تقديم حلول مبتكرة تلبي احتياجات عملائنا
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                أن نكون الشركة الرائدة في تصنيع منتجات PP-R وUPVC وPPH عالية الجودة، مع السعي الدائم لتقديم حلول مبتكرة تلبي احتياجات عملائنا.
              </p>

              <div className="space-y-2.5">
                <div className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs ${isNavy ? 'bg-slate-900/40 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span><strong>المتانة والكفاءة:</strong> نقدم منتجات تتسم بالمتانة والكفاءة والاستدامة العالية في مختلف ظروف التشغيل.</span>
                </div>

                <div className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs ${isNavy ? 'bg-slate-900/40 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>تطوير مستمر:</strong> نحرص باستمرار على تطوير عمليات التصنيع والتقنيات المستخدمة لمواكبة أحدث الابتكارات.</span>
                </div>

                <div className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs ${isNavy ? 'bg-slate-900/40 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'}`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>البحث والتطوير (R&D):</strong> ولضمان تقديم منتجات بأعلى معايير الجودة—تضاهي المعايير الصناعية أو تتجاوزها—نلتزم بالبحث والتطوير؛ مما يدفع عجلة الابتكار لدينا ويُمكّننا من البقاء في طليعة اتجاهات السوق.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mission Section (مهمتنا: جودة - تطوير - رؤية للمستقبل) */}
        <div className="mb-16">
          <div className="text-right mb-6">
            <span className="text-xs font-bold text-red-500 block mb-1">
              مهمتنا (Our Mission)
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
              الركائز الثلاث لمهمة هوم بلاست
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. جودة */}
            <div
              className={`p-6 rounded-2xl border text-right transition-all hover:border-red-500 ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                جودة
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                التزام كامل بتقديم منتجات بأعلى معايير الجودة العالمية، خاضعة لرقابة مخبرية صارمة لضمان المتانة والأمان الصحي والاستدامة.
              </p>
            </div>

            {/* 2. تطوير */}
            <div
              className={`p-6 rounded-2xl border text-right transition-all hover:border-cyan-500 ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                تطوير
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                حرص دائم ومستمر على تطوير خطوط الإنتاج، تقنيات التصنيع، والاستثمار المستمر في البحث والابتكار للبقاء في طليعة السوق.
              </p>
            </div>

            {/* 3. رؤية للمستقبل */}
            <div
              className={`p-6 rounded-2xl border text-right transition-all hover:border-emerald-500 ${
                isNavy ? 'bg-[#0f1f44]/80 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h4 className={`text-lg font-extrabold mb-2 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                رؤية للمستقبل
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                بناء شراكات طويلة الأمد وتصميم حلول هندسية متكاملة تلبي المتطلبات الإنشائية الحديثة في مصر والأسواق العالمية.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border backdrop-blur-xl transition-colors ${
            isNavy
              ? 'bg-[#0f1f44]/80 border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="text-right mb-6">
            <span className="text-xs font-bold text-red-500 block mb-1">
              جدول المقارنة الهندسي والمخبري
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
              لماذا يختار الاستشاريون والمطورون أنظمة هوم بلاست؟
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className={`border-b text-xs font-bold ${isNavy ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                  <th className="py-3 px-4 w-1/3">المعيار الفني</th>
                  <th className={`py-3 px-4 w-1/3 rounded-t-lg border-x ${
                    isNavy ? 'text-cyan-400 bg-cyan-950/30 border-cyan-500/20' : 'text-cyan-800 bg-cyan-50 border-cyan-200'
                  }`}>
                    أنظمة هوم بلاست (Homeplast)
                  </th>
                  <th className="py-3 px-4 text-slate-400 w-1/3">السباكة والمنتجات التقليدية</th>
                </tr>
              </thead>
              <tbody className={`divide-y text-xs ${isNavy ? 'divide-white/5 text-slate-300' : 'divide-slate-100 text-slate-700'}`}>
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-500/5 transition-colors">
                    <td className={`py-4 px-4 font-semibold ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                      {item.feature}
                    </td>
                    <td className={`py-4 px-4 border-x font-medium ${
                      isNavy ? 'bg-cyan-950/20 border-cyan-500/20 text-cyan-200' : 'bg-cyan-50/60 border-cyan-200 text-cyan-900'
                    }`}>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>{item.homePlast}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
