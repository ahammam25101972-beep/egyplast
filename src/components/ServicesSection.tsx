import React, { useState } from 'react';
import {
  Pipette,
  VolumeX,
  Sparkles,
  SearchCheck,
  Building2,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  X,
  Gauge,
  Shield,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  neonColor: 'cyan' | 'red' | 'blue' | 'emerald';
  features: string[];
  specs: { label: string; value: string }[];
}

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { isNavy } = useTheme();

  const services: ServiceItem[] = [
    {
      id: 'ppr-systems',
      number: '01',
      title: 'أنظمة أنابيب PPR المتطورة للمياه',
      shortDesc: 'توريد وتركيب أنابيب البولي بروبيلين المعززة بألياف الفايبر، مقاومة لدرجات الحرارة العالية والضغط حتى 25 بار.',
      fullDesc: 'تعتبر أنظمة PPR من هوم بلاست الخيار الهندسي الأول لشبكات التغذية الداخلية والخارجية. يتم تصنيعها من أجود خامات البولي بروبيلين العشوائي غير القابل للصدأ أو التآكل، وتتميز بتقنية اللحام الحراري الصاهر الذي يجعل نقطة الاتصال أقوى من جسم الأنبوب نفسه.',
      icon: Pipette,
      neonColor: 'cyan',
      features: [
        'عمر افتراضي معتمد يتجاوز 50 عاماً',
        'مقاومة تامة للتكلس والترسبات الجيرية',
        'عزل حراري مدمج يوفر 35% من طاقة السخانات',
        'تحمل درجات حرارة من -20°C إلى +95°C',
      ],
      specs: [
        { label: 'الضغط الاسمي', value: 'PN20 - PN25' },
        { label: 'الأقطار المتوفرة', value: '20mm إلى 160mm' },
        { label: 'شهادات الجودة', value: 'DIN 8077/8078 & SASO' },
        { label: 'مدة الضمان', value: '25 سنة معتمدة' },
      ],
    },
    {
      id: 'acoustic-drainage',
      number: '02',
      title: 'شبكات الصرف الصحي الصامت PVC',
      shortDesc: 'حلول متقدمة للصرف الصحي المعزول صوتياً، تمنع الضوضاء والروائح الكريهة وتتحمل الكيماويات والدهون.',
      fullDesc: 'تتكون شبكات الصرف الصامت من هوم بلاست من أنابيب ثلاثية الطبقات فائقة الكثافة، تعمل على امتصاص صوت اندفاع المياه والاهتزازات بنسبة تصل إلى 85% مقارنة بالأنابيب التقليدية، مع جوانب داخلية ناعمة تقاوم الالتصاق والانسداد نهائياً.',
      icon: VolumeX,
      neonColor: 'blue',
      features: [
        'تخفيض الضوضاء إلى أقل من 17 ديسيبل',
        'طبقة داخلية مانعة للبكتيريا والتكلسات',
        'نظام جوانات EPDM مانعة للتسريب والروائح',
        'مقاومة كيميائية للمنظفات والأحماض المنزلية',
      ],
      specs: [
        { label: 'مستوى العزل', value: 'Acoustic Silent 17dB' },
        { label: 'المقاسات', value: '1.5 إنش حتى 8 إنش' },
        { label: 'معيار المتانة', value: 'SN4 / SN8 Heavy Duty' },
        { label: 'مقاومة الصدمات', value: 'حتى -10°C بدون تشقق' },
      ],
    },
    {
      id: 'smart-sanitary',
      number: '03',
      title: 'التجهيزات الصحية والخلاطات الذكية',
      shortDesc: 'أرقى تشكيلات الخلاطات المعمارية والشطافات وصمامات التحكم المزودة بتقنيات ترشيد استهلاك المياه.',
      fullDesc: 'نقدم حلولاً تجمع بين الأناقة العصرية والتحكم التكنولوجي الموفر للمياه. جميع المحابس والقلوب الداخلية مصنوعة من السيراميك والنحاس النقي الخالي من الشوائب لضمان نعومة الحركة وعدم التسريب طوال فترة الاستخدام.',
      icon: Sparkles,
      neonColor: 'red',
      features: [
        'تقنية توفير المياه الذكية بنسبة تصل إلى 45%',
        'طلاء كروم وأسود مطفي مقاوم للخدش والتكلس',
        'قلوب سيراميكية أوروبية تدوم لملايين الدورات',
        'صمامات عدم رجوع مدمجة لضبط الضغط',
      ],
      specs: [
        { label: 'المادة الأساسية', value: 'نحاس DZR أوروبي خالٍ من الرصاص' },
        { label: 'معدل الترشيد', value: 'مطابق لمواصفات كفاءة المياه' },
        { label: 'التشطيب', value: 'PVD Chrome / Matte Black / Brushed Gold' },
        { label: 'الضمان', value: '10 سنوات استبدال فوري' },
      ],
    },
    {
      id: 'leak-detection',
      number: '04',
      title: 'كشف التسربات والعزل المائي المتقدم',
      shortDesc: 'فحص إلكتروني دقيق بالموجات الصوتية والكاميرات الحرارية بدون أي تكسير، مع معالجة وعزل معتمد.',
      fullDesc: 'تستخدم هوم بلاست أحدث مجسات الاستشعار الألمانية لتحديد مسار التسرب في الجدران والأسقف بدقة تصل إلى سنتيمتر واحد. نقدم حلول العزل الإيبوكسي والأسمنتي المتقدم للمسابح والخزانات والأسطح لضمان حماية المنشأة مدى الحياة.',
      icon: SearchCheck,
      neonColor: 'emerald',
      features: [
        'كشف دقيق بنسبة 100% بدون إتلاف الديكور',
        'تقارير هندسية معتمدة لشركات المياه والتأمين',
        'مواد عزل مرنة مقاومة للتشققات وهبوط التربة',
        'معالجة رطوبة الجدران وتملح الدهانات',
      ],
      specs: [
        { label: 'دقة الكشف', value: '±2 سم بالموجات الصوتية' },
        { label: 'نطاق الفحص', value: 'الأنابيب المدفونة حتى عمق 3 أمتار' },
        { label: 'شهادة الاعتماد', value: 'تقرير معتمد لدى شركة المياه الوطنية' },
        { label: 'ضمان العزل', value: '15 سنة على أعمال العزل المتكامل' },
      ],
    },
    {
      id: 'major-projects',
      number: '05',
      title: 'تخطيط وتنفيذ مشاريع السباكة الكبرى',
      shortDesc: 'هندسة شبكات المياه المركزية للفلل والقصور والأبراج والمجمعات التجارية تحت إشراف مهندسين مختصين.',
      fullDesc: 'نوفر حلول التصميم الهيدروليكي المتكامل لشبكات التغذية والصرف والمضخات ومحطات الرفع. يشمل العمل إعداد المخططات التنفيذية، توريد المواد المطابقة للاشتراطات، واختبار الضغط الهيدروستاتيكي بشهادات رسمية.',
      icon: Building2,
      neonColor: 'cyan',
      features: [
        'حسابات هيدروليكية دقيقة لمنع هبوط الضغط في الطوابق العليا',
        'أنظمة تدوير المياه الساخنة الفورية (Recirculation)',
        'تركيب محطات فلاتر التناضح العكسي المركزية',
        'اختبارات ضغط هيدروليكي 1.5 ضعف ضغط التشغيل',
      ],
      specs: [
        { label: 'حجم المشاريع', value: 'من الفلل الخاصة حتى الأبراج 40+ طابق' },
        { label: 'الإشراف', value: 'مهندسون واستشاريون معتمدون' },
        { label: 'الاختبار', value: 'ضغط هيدروستاتيكي موثق بالفيديو' },
        { label: 'التسليم', value: 'مخططات As-Built رقمية' },
      ],
    },
    {
      id: 'emergency-maintenance',
      number: '06',
      title: 'الصيانة الوقائية والضمان الذهبي المعتمد',
      shortDesc: 'عقود صيانة دورية للمباني وفريق تدخل سريع لحالات الطوارئ مع كفالة شاملة لقطع الغيار والمصنعية.',
      fullDesc: 'نلتزم مع عملائنا بعلاقة شراكة طويلة الأمد. تمنحك وثيقة الضمان الذهبي من هوم بلاست راحة بال كاملة مع زيارات فحص دورية لشبكات المياه ومضخات الرفع، بالإضافة إلى أولوية الاستجابة لأي طارئ على مدار 24 ساعة.',
      icon: Wrench,
      neonColor: 'red',
      features: [
        'استجابة سريعة وفرق طوارئ متنقلة',
        'فحص دوري لشبكات المضخات وصمامات الضغط',
        'قطع غيار أصلية 100% مباشرة من المصنع',
        'سجل صيانة رقمي متكامل لكل منشأة',
      ],
      specs: [
        { label: 'وقت الاستجابة', value: 'أقل من 60 دقيقة لحالات الطوارئ' },
        { label: 'تغطية الضمان', value: 'شامل للمواد وعيوب التركيب' },
        { label: 'ساعات الخدمة', value: '24 ساعة / 7 أيام في الأسبوع' },
        { label: 'الفحص الدوري', value: 'كل 6 أشهر للمشتركين بالعقود' },
      ],
    },
  ];

  return (
    <section
      id="services"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isNavy ? 'bg-[#0a142e]' : 'bg-white'
      }`}
    >
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
            <span>خدمات وحلول هوم بلاست المتكاملة</span>
            <span>·</span>
            <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>هندسة متقنة</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
              isNavy ? 'text-white' : 'text-slate-900'
            }`}
          >
            حلول متكاملة تضمن أعلى كفاءة{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
              لشبكات المياه والصرف
            </span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            نجمع بين أحدث منتجات السباكة العالمية المصنعة بأعلى درجات النقاء والمتانة، مع إشراف هندسي يمنع التسربات ويضمن تدفقاً سلساً يدوم لأكثر من 50 عاماً.
          </p>
        </div>

        {/* Bento Grid Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const borderHover =
              service.neonColor === 'cyan'
                ? 'hover:border-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                : service.neonColor === 'red'
                ? 'hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]'
                : service.neonColor === 'blue'
                ? 'hover:border-sky-500 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]'
                : 'hover:border-emerald-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]';

            const iconBg =
              service.neonColor === 'cyan'
                ? isNavy ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                : service.neonColor === 'red'
                ? isNavy ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-red-50 text-red-600 border-red-200'
                : service.neonColor === 'blue'
                ? isNavy ? 'bg-sky-500/10 text-sky-400 border-sky-500/30' : 'bg-sky-50 text-sky-700 border-sky-200'
                : isNavy ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-emerald-50 text-emerald-700 border-emerald-200';

            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                  isNavy
                    ? 'bg-[#0f1f44]/80 border-slate-700/60'
                    : 'bg-slate-50/80 border-slate-200/90 hover:bg-white shadow-sm'
                } ${borderHover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-cyan-600 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-bold mb-2 transition-colors ${
                      isNavy ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className={`flex items-start gap-2 text-xs ${isNavy ? 'text-slate-200' : 'text-slate-700'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full mt-2 pt-3 border-t flex items-center justify-between text-xs font-semibold transition-colors cursor-pointer ${
                    isNavy ? 'border-white/10 text-slate-300 hover:text-white' : 'border-slate-200 text-slate-700 hover:text-slate-950'
                  }`}
                >
                  <span className="group-hover:underline">المواصفات الفنية وتفاصيل الخدمة</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isNavy ? 'bg-white/5 group-hover:bg-cyan-500/20 group-hover:text-cyan-300' : 'bg-slate-200/60 group-hover:bg-cyan-100 group-hover:text-cyan-700'
                  }`}>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className={`relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-right border ${
              isNavy
                ? 'bg-[#0f1f44] border-cyan-500/40 text-white shadow-[0_0_50px_rgba(6,182,212,0.3)]'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className={`absolute top-5 left-5 p-2 rounded-lg transition-colors ${
                isNavy ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="إغلاق النافذة"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded border ${
                isNavy ? 'bg-cyan-950 text-cyan-400 border-cyan-500/30' : 'bg-cyan-50 text-cyan-700 border-cyan-200'
              }`}>
                {selectedService.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold">
                {selectedService.title}
              </h3>
            </div>

            <p className={`text-sm leading-relaxed mb-6 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-500" />
                <span>المميزات والضمانات الفنية</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs ${
                      isNavy ? 'bg-slate-900/80 border-white/5 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Gauge className="w-4 h-4 text-red-500" />
                <span>المعايير والمواصفات القياسية</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedService.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      isNavy ? 'bg-slate-900/90 border-white/5' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    <span className="text-[11px] text-slate-500 block mb-1">{spec.label}</span>
                    <span className="text-xs font-bold font-mono">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex flex-wrap items-center justify-between gap-4 pt-4 border-t ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
              <span className="text-xs text-slate-500">
                ترغب في استشارة هندسية خاصة بمشروعك؟
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/966500000000?text=${encodeURIComponent(`مرحباً هوم بلاست، أود الاستفسار عن: ${selectedService.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isNavy
                      ? 'text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60'
                      : 'text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100'
                  }`}
                >
                  استفسار عبر واتساب
                </a>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-md transition-all cursor-pointer"
                >
                  طلب تسعير لهذا البند
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
