import React from 'react';
import {
  Star,
  Quote,
  TrendingUp,
  Shield,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ProjectsSection: React.FC = () => {
  const { isNavy } = useTheme();

  const projects = [
    {
      title: 'مجمع فلل واحة النرجس السكني',
      category: 'مشاريع سكنية خاصة',
      location: 'شمال الرياض',
      metric: '68 فيلا مستقلة',
      outcome: '0 بلاغات تسريب خلال 4 سنوات وتشغيل صامت 100%',
      scope: 'توريد شبكات أنابيب PPR الفايبر PN25 وشبكات الصرف الصامت مع فحص الضغط الهيدروليكي الميداني.',
      badge: 'ضمان 25 سنة',
    },
    {
      title: 'برج الأفق للأعمال والمكاتب',
      category: 'أبراج ومبانٍ تجارية',
      location: 'طريق الملك فهد',
      metric: '28 طابقاً إدارياً',
      outcome: 'توفير 40% في استهلاك المياه بفضل الأنظمة الذكية',
      scope: 'تصميم وتنفيذ شبكة التغذية المركزية ومحطات الرفع الذكية وصمامات التوازن الأوتوماتيكية.',
      badge: 'معتمد رسمياً',
    },
    {
      title: 'مستشفى الشفاء التخصصي',
      category: 'قطاع الرعاية الصحية والطبية',
      location: 'جدة - حي الزهراء',
      metric: '220 سرير طبي',
      outcome: 'أعلى درجات التعقيم والنقاء للمياه خالية من الشوائب',
      scope: 'تركيب شبكات PPR الطبية عالية النقاء المقاومة للأحماض والمواد الكيميائية مع أنظمة فلترة ثلاثية.',
      badge: 'معايير صحية دولية',
    },
  ];

  const testimonials = [
    {
      quote:
        'تعاملنا مع هوم بلاست في تأسيس سباكة 12 فيلا؛ الالتزام بمواعيد التوريد وجودة أنابيب PPR واختبارات الضغط بالبار كانت على أعلى مستوى من الاحترافية الهندسية.',
      author: 'م. خالد الدوسري',
      role: 'مدير المشاريع - شركة إعمار المستقبل للمقاولات',
      rating: 5,
    },
    {
      quote:
        'الصرف الصامت من هوم بلاست حل مشكلة كانت تؤرق عملاءنا في المباني السكنية. الهدوء التام والضمان المصنعي الحقيقي جعلنا نعتمد منتجاتهم في كافة مشاريعنا.',
      author: 'م. فهد القحطاني',
      role: 'استشاري هندسي وتصميم معماري',
      rating: 5,
    },
    {
      quote:
        'خدمة ما بعد البيع والدعم الفني السريع في هوم بلاست لا يضاهى. شهادة الضمان الموثقة تمنح المالك الطمأنينة الكاملة وتزيد من القيمة السوقية للعقار.',
      author: 'أ. طارق عبد الرحمن',
      role: 'مطور عقاري ومستثمر',
      rating: 5,
    },
  ];

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0a142e] border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider mb-2">
            <span>مشاريع وشهادات الثقة</span>
            <span>·</span>
            <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>سجل إنجازات هوم بلاست</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
              isNavy ? 'text-white' : 'text-slate-900'
            }`}
          >
            مشاريع كبرى تفخر بأنظمتنا{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">
              وشهادات تعكس جودتنا
            </span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
            تم تنفيذ وتوريد أكثر من 12,000 منشأة سكنية وتجارية وطبية في مختلف المدن، بأعلى نسب أمان واعتماد رسمي.
          </p>
        </div>

        {/* Project Case Studies Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500 hover:shadow-md ${
                isNavy
                  ? 'bg-[#0f1f44]/80 border-slate-700/60'
                  : 'bg-slate-50 border-slate-200/90 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">{proj.category}</span>
                  <span className="text-slate-500">{proj.location}</span>
                </div>

                <h3 className={`text-lg font-bold mb-2 leading-snug ${isNavy ? 'text-white' : 'text-slate-900'}`}>
                  {proj.title}
                </h3>

                <p className={`text-xs mb-5 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  {proj.scope}
                </p>

                <div className={`p-3 rounded-xl border mb-4 text-xs ${isNavy ? 'bg-slate-900/70 border-white/5' : 'bg-white border-slate-200'}`}>
                  <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>الحجم: {proj.metric}</span>
                  </div>
                  <span className={isNavy ? 'text-slate-300 block text-[11px]' : 'text-slate-700 block text-[11px]'}>
                    {proj.outcome}
                  </span>
                </div>
              </div>

              <div className={`pt-3 border-t flex items-center justify-between text-xs ${isNavy ? 'border-white/5 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  <span className={isNavy ? 'text-slate-200' : 'text-slate-800'}>{proj.badge}</span>
                </span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400 text-[11px]">VERIFIED CASE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all ${
                isNavy
                  ? 'bg-[#0f1f44]/40 border-slate-700/40 hover:border-slate-600'
                  : 'bg-white border-slate-200/90 shadow-xs hover:shadow-sm'
              }`}
            >
              <div>
                <Quote className="w-6 h-6 text-red-500/40 mb-3" />
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${isNavy ? 'text-slate-300' : 'text-slate-700'}`}>
                  "{test.quote}"
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between ${isNavy ? 'border-white/5' : 'border-slate-100'}`}>
                <div>
                  <h4 className={`text-xs font-bold ${isNavy ? 'text-white' : 'text-slate-900'}`}>{test.author}</h4>
                  <span className="text-[11px] text-slate-500">{test.role}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
