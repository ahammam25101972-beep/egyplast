import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  X,
  Share2,
  Tag,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface BlogPost {
  id: string;
  title: string;
  category: 'ppr' | 'pvc' | 'quality' | 'guide';
  categoryLabel: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  tips: string[];
}

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'ppr' | 'pvc' | 'quality' | 'guide'>('all');
  const { isNavy } = useTheme();

  const blogPosts: BlogPost[] = [
    {
      id: 'ppr-vs-upvc-guide',
      title: 'الفرق الهندسي بين أنابيب (PP-R) و (U-PVC): دليلك لتأسيس شبكة مياه وصرف مثالية',
      category: 'guide',
      categoryLabel: 'دليل هندسي',
      readTime: '4 دقائق',
      date: '15 أكتوبر 2026',
      excerpt: 'تعرف على الخصائص الميكانيكية لكل من البولي بروبيلين عشوائي (PP-R) والـ U-PVC، ومتى يُوصى باستخدام كل مادة في شبكات التغذية والصرف.',
      content: [
        'تعد عملية اختيار خامة الأنابيب المناسبة حجر الزاوية في استدامة المبنى. مادة (PP-R) هي الخيار الأمثل لشبكات مياه الشرب والتغذية الحارة والباردة نظراً لقدرتها الفائقة على تحمل درجات حرارة تصل إلى 95°C وضغوط تشغيلية حتى 25 بار دون أي تفاعل مع مياه الشرب.',
        'أما مادة (U-PVC) فهي مادة بوليمرية غير ملدنة تمتاز بصلابة عالية جداً ومقاومة استثنائية للأحماض والقلويات والمواد الكيميائية، مما يجعلها الخيار الرائد في شبكات الصرف الصحي وتصريف مياه الأمطار.',
        'في مصانع هوم بلاست (إيجي بلاست) بمحافظة بني سويف، ننتج كلتا الخامتين وفق أعلى المواصفات والمطابقات العالمية مع اختبارات ضغط هيدروستاتيكي صارمة قبل مغادرة المصنع.',
      ],
      tips: [
        'استخدم PP-R المعزز بألياف الفايبر لخطوط السخانات المركزية لتقليل التمدد الحراري.',
        'تأكد من استخدام جوانات EPDM الأصلية لوصلات U-PVC لضمان عدم تسريب الروائح مدى الحياة.',
        'احرص دائماً على فحص شهادة الضمان المصنعية الموثقة.',
      ],
    },
    {
      id: 'acoustic-drainage-benefits',
      title: 'حلول الصرف الصحي الصامت: كيف تتخلص نهائياً من ضوضاء جريان المياه داخل الجدران؟',
      category: 'pvc',
      categoryLabel: 'عزل صوتي',
      readTime: '3 دقائق',
      date: '08 أكتوبر 2026',
      excerpt: 'تقنية الأنابيب متعددة الطبقات العازلة للصوت ودورها في خفض أصوات التدفق إلى أقل من 17 ديسيبل في الفلل والوحدات السكنية.',
      content: [
        'يعاني الكثير من ملاك المنازل من أصوات خرير وهدير المياه عند تصريف الحمامات العلوية. تنشأ هذه المشكلة نتيجة استخدام أنابيب صرف تقليدية خفيفة الكثافة تنقل الاهتزازات الصوتية عبر الجدران والأسقف المستعارة.',
        'طوّرت هوم بلاست أنظمة الصرف الصامت المصنعة من خامات عالية الكثافة ذات جدار ثلاثي ممتص للصدمات الصوتية، مما يخفض مستوى الضوضاء إلى 17 ديسيبل فقط (أي أهدأ من الهمس البشري).',
        'تتميز أيضاً بأسطح داخلية شديدة النعومة تمنع التصاق الدهون والرواسب، مما يضمن تدفقاً انسيابياً يمنع الانسدادات الصعبة.',
      ],
      tips: [
        'ركّب قفزان تثبيت مدعمة بالمطاط الممتص للاهتزاز عند مسار الصرف الصامت.',
        'تجنب الأكواع الحادة بزاوية 90 درجة واستبدلها بكوعين بزاوية 45 درجة لتخفيف ارتطام السوائل.',
      ],
    },
    {
      id: 'lab-quality-control',
      title: 'أهمية الرقابة المخبرية واختبارات الضغط داخل مصانع هوم بلاست قبل استلام الموقع',
      category: 'quality',
      categoryLabel: 'رقابة ومختبرات',
      readTime: '5 دقائق',
      date: '28 سبتمبر 2026',
      excerpt: 'جولة داخل مختبرات مصنع بني سويف: كيف نختبر قوة اللحام الحراري، الصدمات، ومقاومة الانفجار لضمان مطابقة 100%.',
      content: [
        'في المنطقة الصناعية ببني سويف، تخضع كل دفعة إنتاج من أنابيب وملحقات هوم بلاست لفحوصات معملية صارمة تشمل اختبار الضغط الهيدروستاتيكي المستمر، واختبار الصدمات تحت درجات حرارة منخفضة، واختبار قوة الاندماج الجزيئي للحام الحراري.',
        'هدفنا ليس مجرد بيع الأنابيب، بل تزويد المهندسين والمقاولين بمنتجات تتفوق على المعايير الصناعية (تضاهي أو تتجاوز معايير DIN الألمانية وEOS المصرية).',
        'تمكن هذه الرقابة الدقيقة عملاءنا من استلام مشاريعهم السكنية والتجارية مع شهادات فحص وضمان حقيقي يمتد حتى 25 عاماً.',
      ],
      tips: [
        'لا تتنازل عن إجراء اختبار كبس وضغط الشبكة الميداني بالبار قبل دفن المواسير أو تركيب السيراميك.',
        'اطلب دائماً تقرير الاختبار المعتمد من فنيي هوم بلاست في محافظتك.',
      ],
    },
    {
      id: 'pph-industrial-applications',
      title: 'تطبيقات منتجات (PPH) المتجانسة في المنشآت الصناعية والمشاريع الكبرى',
      category: 'ppr',
      categoryLabel: 'تطبيقات صناعية',
      readTime: '4 دقائق',
      date: '18 سبتمبر 2026',
      excerpt: 'لماذا تعتبر أنابيب ومحابس PPH الحل الهندسي المعتمد لخطوط المعامل والمستشفيات ومحطات معالجة المياه؟',
      content: [
        'تعد مادة (PPH - Polypropylene Homopolymer) أحد أكثر البوليمرات تطوراً وصلابة، حيث تمتاز بمقاومة ميكانيكية استثنائية لمختلف المواد الكيميائية والأحماض المركزة، بالإضافة إلى ثبات أبعادها الهندسية تحت الضغوط العالية.',
        'يتم استخدام أنظمة PPH المنتجة بمصنع هوم بلاست في خطوط الصرف الكيميائي للمختبرات والمستشفيات، ومحطات تحلية ومعالجة المياه، والمنشآت الصناعية المتطورة.',
        'تدعم إدارة التصدير في إيجي بلاست تصدير هذه الأنظمة المتخصصة لكبرى المشاريع في الشرق الأوسط وأفريقيا.',
      ],
      tips: [
        'تأكد من مراجعة جدول التوافق الكيميائي قبل اختيار قطر ونوعية أنابيب PPH.',
        'فريق الدعم الهندسي في هوم بلاست جاهز لمراجعة مخططات شبكتك الصناعية مجاناً.',
      ],
    },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="blog"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0a142e] border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>مدونة هوم بلاست الهندسية</span>
              <span>·</span>
              <span className={isNavy ? 'text-slate-400' : 'text-slate-500'}>مقالات وإرشادات فنية</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
                isNavy ? 'text-white' : 'text-slate-900'
              }`}
            >
              أحدث المقالات والإرشادات{' '}
              <span className="bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent">
                لأنظمة السباكة المتطورة
              </span>
            </h2>
            <p className={`mt-3 text-sm ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
              نشارككم خبرات مهندسينا ومختبراتنا حول أسس اختيار الأنابيب، معايير العزل، وأفضل ممارسات التركيب والاختبار.
            </p>
          </div>

          {/* Category Tabs */}
          <div
            className={`mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 rounded-xl border self-start md:self-auto ${
              isNavy ? 'bg-[#0f1f44] border-slate-700' : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            {[
              { id: 'all', label: 'كافة المقالات' },
              { id: 'guide', label: 'أدلة هندسية' },
              { id: 'pvc', label: 'الصرف الصامت' },
              { id: 'quality', label: 'مختبرات وجودة' },
              { id: 'ppr', label: 'تطبيقات PPH و PP-R' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white font-bold shadow-xs'
                    : isNavy
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:border-red-500 text-right ${
                isNavy
                  ? 'bg-[#0f1f44]/80 border-slate-700/60 shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
                  : 'bg-slate-50/80 border-slate-200/90 hover:bg-white shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="px-2.5 py-0.5 rounded-full font-bold bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/30">
                    {post.categoryLabel}
                  </span>
                  <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                  </div>
                </div>

                <h3
                  className={`text-lg font-bold mb-3 leading-snug transition-colors hover:text-red-600 cursor-pointer ${
                    isNavy ? 'text-white' : 'text-slate-900'
                  }`}
                  onClick={() => setSelectedPost(post)}
                >
                  {post.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between text-xs ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
                <span className="text-[11px] text-slate-500 font-mono">
                  مصنع هوم بلاست · بني سويف
                </span>

                <button
                  onClick={() => setSelectedPost(post)}
                  className="font-bold text-red-600 hover:text-red-500 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>قراءة المقال بالكامل</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Reading Article Modal */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className={`relative w-full max-w-2xl rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-right border ${
              isNavy
                ? 'bg-[#0f1f44] border-red-500/40 text-white shadow-[0_0_50px_rgba(239,68,68,0.25)]'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className={`absolute top-5 left-5 p-2 rounded-lg transition-colors cursor-pointer ${
                isNavy ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="إغلاق المقال"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Meta */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-red-600 text-white">
                {selectedPost.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{selectedPost.date}</span>
              </span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedPost.readTime}</span>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold mb-5 leading-snug">
              {selectedPost.title}
            </h3>

            {/* Content Paragraphs */}
            <div className={`space-y-4 text-sm leading-relaxed mb-6 ${isNavy ? 'text-slate-300' : 'text-slate-700'}`}>
              {selectedPost.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Engineering Tips Box */}
            <div className={`p-4 rounded-xl border mb-6 ${isNavy ? 'bg-slate-900/80 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
              <h4 className="text-xs font-bold text-red-500 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4" />
                <span>نصائح هندسية من فريق هوم بلاست:</span>
              </h4>
              <ul className="space-y-2 text-xs">
                {selectedPost.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={isNavy ? 'text-slate-200' : 'text-slate-800'}>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
              <span className="text-xs text-slate-500">
                لديك استفسار فني حول هذا المقال؟
              </span>
              <a
                href={`https://wa.me/201011116316?text=${encodeURIComponent(`مرحباً هوم بلاست، قرأت مقال: "${selectedPost.title}" وأرغب في استشارة فنية بخصوصه.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>استشارة فنية عبر واتساب</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
