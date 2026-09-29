import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  Flame,
} from 'lucide-react';
import { HomePlastLogo } from './HomePlastLogo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const AboutSection: React.FC = () => {
  const { isNavy } = useTheme();

  const comparisonItems = [
    {
      feature: 'المادة الخام ونقاء التصنيع',
      homePlast: 'خامات بولي بروبيلين PPR ألماني نقي 100% خالية من الرصاص',
      traditional: 'خلطات بلاستيكية معاد تدويرها تحتوي على شوائب ورصاص',
    },
    {
      feature: 'تحمل الضغط والحرارة القصوى',
      homePlast: 'ضغط تشغيلي 25 Bar وحرارة حتى 95° مئوية بدون أي تمدد',
      traditional: 'تتشقق وتلين عند درجات حرارة السخانات وتتلف بسرعة',
    },
    {
      feature: 'صوت الصرف الصحي والهدوء',
      homePlast: 'أنابيب عازلة للصوت Acoustic تخفض الضجيج إلى أقل من 17 dB',
      traditional: 'أصوات تدفق وهدير مائي مزعج ينتقل عبر جدران الغرف',
    },
    {
      feature: 'مقاومة التكلس وانسداد المواسير',
      homePlast: 'سطح داخلي فائق النعومة يمنع الترسبات الجيرية نهائياً',
      traditional: 'تراكم سريع للأملاح والدهون يسبب ضيق المسار والانسداد',
    },
    {
      feature: 'الضمان والفحص الميداني',
      homePlast: 'شهادة ضمان مصنعي 25 سنة مع فحص ضغط هيدروستاتيكي موثق',
      traditional: 'ضمانات شفهية غير ملزمة وفحص عشوائي دون أجهزة دقيقة',
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
        
        {/* About Grid (Text + Vision) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Logo & Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div
              className={`relative w-full max-w-md p-8 rounded-3xl border text-center flex flex-col items-center overflow-hidden transition-all duration-300 ${
                isNavy
                  ? 'bg-[#0f1f44]/90 border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <HomePlastLogo size="lg" withGlow={isNavy} className="mb-6" />

              <h3 className={`text-xl font-extrabold mb-1 ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                إيجي بلاست | هوم بلاست ®
              </h3>
              <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mb-2">
                Egy Plast · Home Plast ®
              </p>
              <p className={`text-xs mb-6 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                المصنع: بني سويف الجديدة 131/3 - الصناعات المتوسطة · الإدارة: أرض المحلج · شبكة فروع تغطي مختلف محافظات مصر.
              </p>

              {/* Badges in Single-line Text */}
              <div className={`w-full pt-4 border-t flex items-center justify-around text-xs ${isNavy ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-700'}`}>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-bold text-cyan-600 dark:text-cyan-400">7</span>
                  <span className="text-[10px] text-slate-500">فروع بالمحافظات</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-bold text-red-500">12k+</span>
                  <span className="text-[10px] text-slate-500">مشروع منجز</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <div className="flex flex-col items-center">
                  <span className="font-mono text-base font-bold text-emerald-500">25y</span>
                  <span className="text-[10px] text-slate-500">ضمان معتمد</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content (7 cols) */}
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
              <span>من نحن · شركة إيجي بلاست (العلامة التجارية: هوم بلاست ®)</span>
            </div>
            
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6 ${
                isNavy ? 'text-white' : 'text-slate-900'
              }`}
            >
              ريادة صناعية وطنية{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                بأعلى مواصفات الجودة العالمية
              </span>
            </h2>

            <p className={`text-sm sm:text-base leading-relaxed mb-5 ${isNavy ? 'text-slate-300' : 'text-slate-700'}`}>
              انطلقت شركة <strong className={isNavy ? 'text-white' : 'text-slate-900'}>إيجي بلاست (Egy Plast)</strong> لتصنيع وتوريد أرقى أنظمة السباكة المتطورة تحت علامتها التجارية الرائدة <strong className="text-red-600">هوم بلاست ® (Home Plast ®)</strong>. من قلب مجمعنا الصناعي في بني سويف الجديدة، ننتج أنظمة أنابيب PPR والمحابس وخطوط الصرف الصامت وفق أدق المعايير القياسية.
            </p>

            <p className={`text-xs sm:text-sm leading-relaxed mb-8 ${isNavy ? 'text-slate-400' : 'text-slate-600'}`}>
              نمتلك شبكة فروع ومعارض متكاملة في القاهرة (اركاديا مول)، الجيزة (الهرم)، الفيوم (دلة)، المنيا (6 أكتوبر)، كفر الشيخ (طريق السرايا)، طنطا (ترعة سنارة)، والعاشر من رمضان (الحي 11)، بالإضافة إلى إدارة متخصصة للتصدير الدولي للأسواق العربية والأفريقية.
            </p>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className={`p-4 rounded-xl border transition-all ${isNavy ? 'bg-[#0f1f44]/80 border-slate-700' : 'bg-white border-slate-200 shadow-xs'}`}>
                <ShieldCheck className="w-5 h-5 text-cyan-500 mb-2" />
                <h4 className={`text-xs font-bold mb-1 ${isNavy ? 'text-white' : 'text-slate-900'}`}>سلامة مياه الشرب</h4>
                <p className="text-[11px] text-slate-500">خلو تام من المواد المسرطنة والرصاص بما يحمي صحة عائلتك.</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${isNavy ? 'bg-[#0f1f44]/80 border-slate-700' : 'bg-white border-slate-200 shadow-xs'}`}>
                <Flame className="w-5 h-5 text-red-500 mb-2" />
                <h4 className={`text-xs font-bold mb-1 ${isNavy ? 'text-white' : 'text-slate-900'}`}>تقنيات اللحام الصاهر</h4>
                <p className="text-[11px] text-slate-500">اندماج جزيئي حراري يلغي احتمالية التسريب بين الأنابيب والوصلات.</p>
              </div>

              <div className={`p-4 rounded-xl border transition-all ${isNavy ? 'bg-[#0f1f44]/80 border-slate-700' : 'bg-white border-slate-200 shadow-xs'}`}>
                <Award className="w-5 h-5 text-emerald-500 mb-2" />
                <h4 className={`text-xs font-bold mb-1 ${isNavy ? 'text-white' : 'text-slate-900'}`}>معايير ألمانية دقيقة</h4>
                <p className="text-[11px] text-slate-500">مطابقة للمواصفات القياسية الدولية DIN 8077 ومواصفات SASO.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Comparison Table Section */}
        <div
          className={`mt-12 rounded-2xl p-6 sm:p-8 border backdrop-blur-xl transition-colors ${
            isNavy
              ? 'bg-[#0f1f44]/80 border-slate-700/80 shadow-[0_15px_35px_rgba(0,0,0,0.4)]'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="text-right mb-6">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 block mb-1">جدول المقارنة الهندسي</span>
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
                    أنظمة هوم بلاست (HomePlast)
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
