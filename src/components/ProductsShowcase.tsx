import React, { useState, useMemo } from 'react';
import {
  Pipette,
  CheckCircle2,
  Layers,
  Sparkles,
  Droplet,
  Send,
  X,
  Search,
  Download,
  ShieldCheck,
  Sun,
  VolumeX,
  Factory,
  SlidersHorizontal,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export interface CatalogProduct {
  id: string;
  category: 'ppr' | 'uv' | 'upvc' | 'pp_silent' | 'orange_pph_pvc';
  categoryTitle: string;
  name: string;
  code: string;
  tagline: string;
  sizes: string[];
  specs: { [key: string]: string };
  durability: string;
  standard: string;
  colorBadge: string;
  featured?: boolean;
}

export const ProductsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'ppr' | 'uv' | 'upvc' | 'pp_silent' | 'orange_pph_pvc'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    selectedSize: '',
    quantity: '100',
    notes: '',
  });
  const { isNavy } = useTheme();

  const categories = [
    { id: 'all', label: 'كافة المنتجات' },
    { id: 'ppr', label: 'تغذية PP-R خضراء' },
    { id: 'uv', label: 'قطع سوداء U.V ضد الشمس' },
    { id: 'upvc', label: 'صرف UP.V.C أبيض' },
    { id: 'pp_silent', label: 'صرف P.P بجوان وصامت (رمادي)' },
    { id: 'orange_pph_pvc', label: 'صرف برتقالي PPH & PVC وغرف تفتيش' },
  ];

  // Full Official Catalog extracted from June 2026 HomePlast Price List & Catalog
  const products: CatalogProduct[] = [
    // 1. PP-R Green Category
    {
      id: 'ppr-pipes-pn20',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'مواسير هوم بلاست تغذية PP-R PN20',
      code: 'HP-PPR-PN20',
      tagline: 'المواسير الخضراء الأقوى لشبكات المياه الباردة والساخنة',
      sizes: ['20 مم (1/2")', '25 مم (3/4")', '32 مم (1")', '40 مم (1 1/4")', '50 مم (1 1/2")', '63 مم (2")', '75 مم (2 1/2")', '90 مم (3")', '110 مم (4")'],
      specs: {
        'الضغط التشغيلي': '20 Bar (PN20)',
        'خامة التصنيع': 'بولي بروبيلين عشوائي نقي 100%',
        'مجال الاستخدام': 'تغذية مياه الشرب الداخلية والخارجية',
        'مقاومة التكلس': 'سطح داخلي أملس يمنع الترسبات الجيرية',
      },
      durability: 'ضمان معتمد 25 سنة',
      standard: 'DIN 8077 / 8078 & EOS',
      colorBadge: 'bg-emerald-600 text-white',
      featured: true,
    },
    {
      id: 'ppr-fiber-multilayer',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'مواسير هوم بلاست مدعمة بالفايبر متعدد الطبقات',
      code: 'HP-PPR-FIBER',
      tagline: 'معززة بألياف الفايبر جلاس لمنع التمدد الحراري في خطوط الساخن',
      sizes: ['25 مم', '32 مم', '40 مم', '50 مم', '63 مم', '75 مم', '90 مم'],
      specs: {
        'الضغط': 'PN16 / PN20',
        'الطبقات': '3 طبقات معززة بالألياف الزجاجية',
        'تحمل الحرارة': 'حتى 95°C مستمرة',
        'التمدد الحراري': 'تخفيض التمدد بنسبة 75%',
      },
      durability: 'ضمان 25 عاماً',
      standard: 'ISO 15874 & DIN 8077',
      colorBadge: 'bg-emerald-700 text-white',
      featured: true,
    },
    {
      id: 'ppr-elbow-90-45',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'أكواع لحام PP-R بزوايا 90° و 45° وأكواع مسلوبة',
      code: 'HP-FIT-ELBOW',
      tagline: 'لحام حراري متجانس بانصهار جزيئي يلغي احتمالية التسريب',
      sizes: ['20 مم', '25 مم', '32 مم', '40 مم', '50 مم', '63 مم', '75 مم', '90 مم', '110 مم', 'كوع مسلوب 25/50، 32/50، 50/63'],
      specs: {
        'نوع الاتصال': 'لحام حراري بالمكواة الصاهرة',
        'الضغط الاسمي': 'PN25',
        'الزوايا': '90 درجة / 45 درجة',
        'المتانة': 'سمك جدار مطابق للمعايير الألمانية',
      },
      durability: 'ضمان 25 عاماً',
      standard: 'DIN 16962',
      colorBadge: 'bg-emerald-600 text-white',
    },
    {
      id: 'ppr-brass-fittings',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'وصلات وأكواع وتيات بسن نحاس داخلي وخارجي',
      code: 'HP-BRS-FIT',
      tagline: 'قلب نحاسي نقي أوروبي DZR مدمج مع جسم البولي بروبيلين',
      sizes: ['20 × 1/2"', '25 × 1/2"', '25 × 3/4"', '32 × 3/4"', '32 × 1"', '50 × 1 1/2"', '63 × 2"', '75 × 2 1/2"', '90 × 3"', '110 × 4"'],
      specs: {
        'سبيكة النحاس': 'نحاس أصفر عالي النقاء خالي من الشوائب',
        'التثبيت': 'تداخل ميكانيكي مسنن مانع للدوران أو التسريب',
        'التوافق': 'خلاطات الحمام، المحابس، أجهزة السخانات',
      },
      durability: 'ضمان 20 عاماً',
      standard: 'EN 10226 & DIN 2999',
      colorBadge: 'bg-amber-600 text-white',
    },
    {
      id: 'ppr-concealed-valves',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'محابس دفن كاملة هوم بلاست (ألماني واستثماري)',
      code: 'HP-VLV-GER',
      tagline: 'صمامات دفن مع قلب سيراميكي ألماني ويد تحكم كروم فاخرة',
      sizes: ['20 مم × 3/4 بوصة', '25 مم × 3/4 بوصة', '32 مم × 3/4 بوصة'],
      specs: {
        'خيارات التصنيع': 'كامل ألماني (صنع في ألمانيا) / كامل استثماري',
        'القلب': 'قلب 3/4 بوصة استثماري وألماني قابل للاستبدال',
        'الملحقات': 'يد تحكم معدنية وشاسيه دفن محكم',
      },
      durability: 'ضمان 15 عاماً',
      standard: 'DIN 3502 & SASO',
      colorBadge: 'bg-emerald-800 text-white',
      featured: true,
    },
    {
      id: 'ppr-ball-valves-manifold',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'محبس بلية 2 لاكور وبطاريات التوزيع',
      code: 'HP-VLV-BALL2',
      tagline: 'سهولة فك وصيانة دون قطع الأنابيب مع توزيع منتظم للضغوط',
      sizes: ['محبس بلية: 25، 32، 50، 63 مم', 'بطارية 50/25، 50/32، 63/25، 63/32 مم'],
      specs: {
        'الكرة الداخلية': 'نحاس مطلي بالكروم المقاوم للتكلس',
        'نظام اللاكور': '2 لاكور مزدوج لسرعة الصيانة',
        'البطارية': 'توزيع مياه متوازن لعدة خطوط دون هبوط ضغط',
      },
      durability: 'ضمان 20 عاماً',
      standard: 'EN 13828',
      colorBadge: 'bg-emerald-700 text-white',
    },
    {
      id: 'ppr-accessories-clamps',
      category: 'ppr',
      categoryTitle: 'مواسير ووصلات تغذية PP-R',
      name: 'إكسسوارات التأسيس: موانع ارتداد، كرنك، أقفزة، ومسطرة خلاط',
      code: 'HP-ACC-PPR',
      tagline: 'تشكيلة متكاملة لتجهيز وتثبيت واختبار الشبكة في الموقع',
      sizes: ['مانع ارتداد 25 و 32 مم (بوابة / سوستة)', 'كرنك لحام وبالجلب 20 و 25 مم', 'قفيز بلاستك 20، 25، 32 مم', 'قفيز حديد 22 مم إلى 160 مم (6")', 'مسطرة خلاط 25 × 1/2"', 'طبة اختبار 1/2"'],
      specs: {
        'مانع الارتداد': 'رداد داخلي دقيق يمنع رجوع المياه للخزان أو العداد',
        'مسطرة الخلاط': 'مسافة قياسية 15 سم متطابقة مع كافة خلاطات الدش',
        'طبة الاختبار': 'لاختبار كبس الشبكة بالضغط الهيدروستاتيكي',
      },
      durability: 'ضمان جودة المصنع',
      standard: 'EOS Standards',
      colorBadge: 'bg-slate-700 text-white',
    },

    // 2. Black U.V Sun Resistant Category
    {
      id: 'uv-pipes-black',
      category: 'uv',
      categoryTitle: 'قطع وطبقة سوداء U.V',
      name: 'مواسير هوم بلاست بطبقة سوداء U.V مقاومة للشمس',
      code: 'HP-UV-PIPE',
      tagline: 'طبقة خارجية سوداء تحمي الأنابيب من الأشعة فوق البنفسجية على الأسطح',
      sizes: ['25 مم (3/4")', '32 مم (1")', '50 مم (1 1/2")', '63 مم (2")'],
      specs: {
        'الضغط': 'PN16 / PN20',
        'الحماية': 'مركبات كربونية ممتصة للأشعة فوق البنفسجية UV Stabilized',
        'الاستخدام': 'الخطوط الصاعدة على الواجهات وشبكات الأسطح المكشوفة',
        'العمر التشغيلي': 'لا تتشقق ولا تتأثر بحرارة الشمس المباشرة',
      },
      durability: 'ضمان 25 عاماً في الشمس المباشرة',
      standard: 'DIN 8077/8078 UV Test',
      colorBadge: 'bg-zinc-900 text-amber-400',
      featured: true,
    },
    {
      id: 'uv-fittings-black',
      category: 'uv',
      categoryTitle: 'قطع وطبقة سوداء U.V',
      name: 'قطع لحام هوم بلاست سوداء U.V (أكواع، تيات، جلب)',
      code: 'HP-UV-FITS',
      tagline: 'أكواع وتيات وجلب ومسلوبات مصنعة بخامة سوداء مانعة لتلف الشمس',
      sizes: ['أكواع 90°: 25، 32، 50، 63 مم', 'أكواع 45°: 25، 32 مم', 'تي لحام: 25، 32، 50، 63 مم', 'مسلوب: 25×20 حتى 63×32 مم', 'طبة وجلبة: 25، 32، 50، 63 مم'],
      specs: {
        'مقاومة الأشعة': '100% UV Resistant',
        'الضغط': 'PN25',
        'اللحام': 'توافق تام مع مكواة اللحام الحرارية القياسية',
      },
      durability: 'ضمان 25 عاماً',
      standard: 'ISO 4427 UV Standards',
      colorBadge: 'bg-zinc-900 text-amber-400',
    },
    {
      id: 'uv-valves-check-valves',
      category: 'uv',
      categoryTitle: 'قطع وطبقة سوداء U.V',
      name: 'محابس بلية 2 لاكور وموانع ارتداد وبطاريات سوداء U.V',
      code: 'HP-UV-VALVES',
      tagline: 'صمامات وموانع ارتداد وبطاريات مخصصة للتركيبات الخارجية والأسطح',
      sizes: ['محبس بلية 2 لاكور: 25، 32، 50، 63 مم', 'مانع ارتداد (بوابة / سوستة): 25 و 32 مم', 'لاكور بسن داخلي/خارجي: 25، 32، 50، 63 مم', 'بطارية أسود U.V: 50/25، 50/32، 63/25، 63/32 مم'],
      specs: {
        'الخامة': 'جسم أسود مدعم بمثبتات الأشعة فوق البنفسجية',
        'الأداء': 'إغلاق محكم 100% بدون تسريب حتى في أقصى درجات حرارة الصيف',
      },
      durability: 'ضمان 20 عاماً',
      standard: 'EN 13828',
      colorBadge: 'bg-zinc-900 text-amber-400',
    },

    // 3. UP.V.C Drainage (White)
    {
      id: 'upvc-pipes-white',
      category: 'upvc',
      categoryTitle: 'مواسير ووصلات الصرف UP.V.C',
      name: 'مواسير صرف هوم بلاست UP.V.C البيضاء',
      code: 'HP-UPVC-PIPE',
      tagline: 'مواسير صرف صحي غير ملدنة بمختلف السماكات والأطوال 3، 4، 5، 6 أمتار',
      sizes: [
        '3/4" (25 مم سمك 2.2 مم)',
        '1" (33.4 مم سمك 2.5 مم)',
        '1.5" (48 مم سمك 2.5 و 3.7 مم)',
        '2" (60 مم سمك 2.7 و 3.9 مم)',
        '3" (75 مم سمك 3 و 4 و 5 مم)',
        '4" (110 مم سمك 3 و 4 و 5 مم)',
        '6" (160 مم سمك 4 و 5 مم)',
      ],
      specs: {
        'الخامة': 'U-PVC غير ملدن نقي عالي الصلابة',
        'مقاومة الكيماويات': 'مقاومة تامة للمنظفات، الأحماض، والقلويات المنزلية والصناعية',
        'الأطوال المتوفرة': 'متوفرة أطوال متعددة 3×3، 3×4، 4×4، 4×5، 4×6، 5×6 متر',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'EN 1329 & DIN 19531',
      colorBadge: 'bg-blue-600 text-white',
      featured: true,
    },
    {
      id: 'upvc-fittings-white',
      category: 'upvc',
      categoryTitle: 'مواسير ووصلات الصرف UP.V.C',
      name: 'أكواع ومشتركات صرف UP.V.C بيضاء',
      code: 'HP-UPVC-FITS',
      tagline: 'أكواع 90° و 45°، مشتركات عادية ومسلوبة، كوع باب كشف، كوع سيفون',
      sizes: [
        'كوع 90° و 45°: 32، 48، 60، 75، 110، 160 مم',
        'كوع باب كشف: 60، 75، 110، 160 مم',
        'كوع بانيو بسن: 48 مم × 1.5"',
        'كوع سيفون: 110 مم',
        'مشترك 90° و 45°: 32 حتى 160 مم',
        'مشترك مسلوب ومسلوب بباب: 75/60 حتى 160/110 مم',
      ],
      specs: {
        'الاتصال': 'لصق بمذيب حار / بارد عالي الالتصاق',
        'الانسيابية': 'نصف قطر انحناء هيدروليكي يمنع الانسدادات',
        'باب الكشف': 'غطاء محكم بجوان مطاطي يسهل الصيانة والتسليك',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'EN 1401 & EOS',
      colorBadge: 'bg-blue-700 text-white',
    },
    {
      id: 'upvc-accessories-floor-drains',
      category: 'upvc',
      categoryTitle: 'مواسير ووصلات الصرف UP.V.C',
      name: 'بيبات صرف، جرجوري مطر، وصلات تمدد، ومشتركات صليبة',
      code: 'HP-UPVC-DRAIN',
      tagline: 'حلول صرف متكاملة تمنع تجمع مياه الأمطار والروائح الكريهة',
      sizes: [
        'بيبة 48/60، 48/75، 60/60، 60/75 مم (مع ارتفاع 7.5 سم)',
        'جرجوري مطر: 75، 110 مم',
        'وصلة تمدد وجلبة إصلاح تمدد: 110 مم',
        'مشترك صليبة عادي وشجرة: 110/75 مم، 110/110 مم',
        'طبة تسليك وطبة كاب وطبة بيبة: 1.5"، 2"، 60 حتى 160 مم',
        'مجمع صرف: 60/110 مم',
      ],
      specs: {
        'جرجوري المطر': 'شبكة علوية تحجز الرواسب وتسمح بتدفق مياه الأمطار الغزيرة',
        'وصلة التمدد': 'تمتص حركة المبنى والتمدد الحراري في خطوط الصرف الرأسية',
      },
      durability: 'ضمان 25 عاماً',
      standard: 'DIN 1986',
      colorBadge: 'bg-blue-800 text-white',
    },

    // 4. P.P Grey Drainage With Rubber Gasket & Silent
    {
      id: 'pp-pipes-silent-gasket',
      category: 'pp_silent',
      categoryTitle: 'صرف P.P بجوان وصامت (رمادي)',
      name: 'مواسير صرف P.P بجوان "بمواصفات قياسية أوروبية" والمواسير الصامتة',
      code: 'HP-PP-SILENT',
      tagline: 'مواسير رمادية بجوان مرن فائق الإحكام مع مواسير 110 صامت العازلة للضوضاء',
      sizes: ['32 مم', '50 مم', '63 مم', '75 مم', '110 مم', '110 مم صامت Acoustic', '160 مم', 'ياردات: 50 سم، 75 سم، 100 سم، 150 سم'],
      specs: {
        'العزل الصوتي': 'المواسير الصامتة 110 تخفض الصوت إلى 17 ديسيبل فقط',
        'نظام الجوان': 'جوانات EPDM أوروبية تضمن مانعية تسريب 100% دون الحاجة للغراء',
        'الياردات الجاهزة': 'أطوال مقصوصة مسبقاً بمقاسات الشقق لتسريع التأسيس',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'EN 1451 & EN 14366',
      colorBadge: 'bg-slate-600 text-white',
      featured: true,
    },
    {
      id: 'pp-grey-fittings',
      category: 'pp_silent',
      categoryTitle: 'صرف P.P بجوان وصامت (رمادي)',
      name: 'قطع صرف P.P رمادي بجوان (أكواع، مشتركات، مسلوبات، سيفونات)',
      code: 'HP-PP-FITS',
      tagline: 'تشكيلة كاملة من قطع الصرف الرمادي بجوان مرن سريع التركيب',
      sizes: [
        'كوع 45° و 90° وكوع بباب: 32، 50، 63، 75، 110، 160 مم',
        'مشترك 45° و 90° ومشترك بباب: 32/32 حتى 160/160 مم',
        'جلبة عادية وجلبة 160 مم طويلة وجلبة إصلاح: 32 حتى 160 مم',
        'سيفون P.P: 110 مم',
        'هواية: 75، 110 مم',
        'كوع وجلبة بانيو بسن: 50 مم × 1.5"',
      ],
      specs: {
        'التركيب': 'تركيب ضغط Push-fit سهل وسريع مع شحم نباتي',
        'مقاومة الصدمات': 'مرونة عالية ضد الكسر والانضغاط داخل الخرسانة',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'DIN 4109',
      colorBadge: 'bg-slate-700 text-white',
    },
    {
      id: 'pp-drains-channels-waterproofing',
      category: 'pp_silent',
      categoryTitle: 'صرف P.P بجوان وصامت (رمادي)',
      name: 'بيبة 3 مداخل، مجاري تصريف استانلس، وعزل Home Proof',
      code: 'HP-PP-CHANNELS',
      tagline: 'بيبات بـ 3 مداخل بجوان، مجاري مائية استانلس، وعزل كيميائي هوم بروف',
      sizes: [
        'بيبة بثلاثة مداخل (50/75 مم، 50/75 مم بجوان فوق، 63/75 مم قصيرة)',
        'مجرى داخلية استانلس (30 سم، 60 سم - عادي وسوبر)',
        'صفاية استانلس وعلاية بيبة (10×10 سم، 15×15 سم)',
        'مجرى مائي خارجي بغطاء (100 سم نهاية خط)',
        'العزل الكيميائي Home proof (سعر المجموعة الكاملة)',
      ],
      specs: {
        'البيبة 3 مداخل': 'تجميع صرف الحمام والغسالة والبانيو في خط موحد مانع للرائحة',
        'المجاري الاستانلس': 'شكل معماري فخم لشاور الحمام بديل الصفايات التقليدية',
        'عزل Home Proof': 'عازل كيميائي متقدم يحمي أرضيات الحمامات والمطابخ والأسطح',
      },
      durability: 'ضمان معتمد',
      standard: 'ISO 9001',
      colorBadge: 'bg-slate-800 text-white',
    },

    // 5. Orange Drainage (P.P.H & P.V.C) & Inspection Chambers
    {
      id: 'orange-pph-pipes-fittings',
      category: 'orange_pph_pvc',
      categoryTitle: 'صرف برتقالي PPH & PVC وغرف تفتيش',
      name: 'مواسير وقطع صرف برتقالي من P.P.H (P.P.H Pipes)',
      code: 'HP-PPH-ORANGE',
      tagline: 'مواسير وأكواع ومشتركات P.P.H برتقالي فائقة الصلابة للمشاريع الثقيلة',
      sizes: [
        'مواسير PPH: 160 مم × 4 مم',
        'كوع 45° و 90° وكوع بباب: 160 مم',
        'مشترك 45° و 90° ومشترك بباب: 110/160 مم، 160/160 مم',
        'جلبة PPH (قصيرة وطويلة): 160 مم',
        'طبة نهاية ومسلوب: 160 مم، 110/160 مم',
        'جاليت trap برتقالي (غطاء مفتوح / مغلق 75/75/110 مم مع علاية 20 سم)',
      ],
      specs: {
        'الخامة': 'بولي بروبيلين متجانس PPH عالي الكثافة',
        'الاستخدام': 'شبكات الصرف الخارجية، شبكات المعامل والمصانع',
        'التحمل': 'مقاومة هيدروليكية وميكانيكية لأحمال الردم والتربة',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'DIN 8077 & EN 1852',
      colorBadge: 'bg-orange-600 text-white',
      featured: true,
    },
    {
      id: 'orange-pvc-pipes-fittings',
      category: 'orange_pph_pvc',
      categoryTitle: 'صرف برتقالي PPH & PVC وغرف تفتيش',
      name: 'مواسير وقطع صرف برتقالي من P.V.C قطر 200 مم',
      code: 'HP-PVC-ORANGE',
      tagline: 'مواسير صرف قطر 200 مم سمك 5 مم وأكواع ومشتركات وصمامات عدم رجوع',
      sizes: [
        'مواسير PVC برتقالي: 200 مم × 5 مم',
        'كوع 90° PVC: 200 مم',
        'مشترك 45° و 90°: 110/200، 160/200، 200/200 مم',
        'صمام عدم رجوع تركي مانع ارتداد: 75، 110، 160، 200 مم',
        'مسلوب PVC برتقالي: 110/200، 160/200 مم',
      ],
      specs: {
        'القطر الكبير': '200 مم (8 بوصة) لتصريف المباني والأبراج الكبرى',
        'صمام عدم الرجوع': 'رداد تركي مانع لفيضان مياه الصرف أو دخول القوارض',
      },
      durability: 'ضمان 30 عاماً',
      standard: 'EN 1401 Heavy Duty',
      colorBadge: 'bg-orange-700 text-white',
    },
    {
      id: 'chambers-insulation-adhesives',
      category: 'orange_pph_pvc',
      categoryTitle: 'صرف برتقالي PPH & PVC وغرف تفتيش',
      name: 'غرف التفتيش الجاهزة، لاصق 914، وعزل إيجي كوت، وخزانات الدفن',
      code: 'HP-CHAMBER-ADH',
      tagline: 'غرف تفتيش متطورة، لاصق حار وبارد، عزل مائي، وشحم نباتي للتجميع',
      sizes: [
        'غرفة تفتيش ذكية: (50×50 / 160 / 110 مم) مع رقبة تطويل',
        'لاصق حار 914 بارد/حار: 1/8، 1/4، 1/2، 1 كيلو',
        'عزل مائي وحراري: 5 كجم، 15 كجم',
        'جالون عزل إيجي كوت: 12 كجم',
        'شحم نباتي لتسهيل التركيب: 150 جرام، 250 جرام',
        'خزان دفن بغطاء كامل: صندوق دفن كامل بالوش والإكسسوار',
      ],
      specs: {
        'غرفة التفتيش': 'بديل غرف التفتيش الخرسانية، مانعة للتسريب والروائح وسريعة التركيب',
        'لاصق 914': 'لحام كيميائي صاهر سريع الجفاف لأنابيب الـ PVC',
        'شحم نباتي': 'يحافظ على مرونة الجوانات ويمنع تلفها أثناء التعشيق',
        'خزان الدفن': 'هيكل حديدي مجلفن مع صندوق مياه عازل متوافق مع المراحيض المعلقة',
      },
      durability: 'جودة صناعية معتمدة',
      standard: 'ISO 9001 & EOS',
      colorBadge: 'bg-amber-700 text-white',
      featured: true,
    },
  ];

  // Filtering based on tab + search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sizes.some((size) => size.includes(searchQuery));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, products]);

  const handleSendQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuoteSuccess(false);
      setSelectedProduct(null);
    }, 2500);
  };

  return (
    <section
      id="products"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isNavy ? 'bg-[#0c1838] border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 text-right">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 tracking-wider mb-2">
              <Factory className="w-3.5 h-3.5" />
              <span>قائمة أسعار ومنتجات إيجي بلاست (هوم بلاست ®) المعتمدة</span>
            </div>
            
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
                isNavy ? 'text-white' : 'text-slate-900'
              }`}
            >
              كتالوج منتجات مواسير ووصلات{' '}
              <span className="bg-gradient-to-r from-red-600 via-rose-500 to-red-600 bg-clip-text text-transparent">
                إيجي بلاست للتجارة والصناعة
              </span>
            </h2>

            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
              تصفح التشكيلة الكاملة المعتمدة لمصنعنا ببني سويف: أنظمة <strong>PP-R الخضراء</strong>، قطع <strong>U.V المقاومة للشمس</strong>، مواسير الصرف <strong>UP.V.C الأبيض</strong>، شبكات الصرف <strong>P.P بجوان وصامت (رمادي)</strong>، وصرف <strong>P.P.H & P.V.C البرتقالي</strong> وغرف التفتيش.
            </p>
          </div>

          {/* Quick PDF Price List Download Callout */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="https://wa.me/201011116316?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D9%82%D8%A7%D8%A6%D9%85%D8%A9%20%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D9%87%D9%88%D9%85%20%D8%A8%D9%84%D8%A7%D8%B3%D8%AA%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9%20PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>طلب قائمة الأسعار المعتمدة (PDF)</span>
            </a>
          </div>
        </div>

        {/* Filter Controls Bar (Categories + Search Box) */}
        <div
          className={`p-4 rounded-2xl border mb-10 transition-colors ${
            isNavy ? 'bg-[#0f1f44] border-slate-700' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-red-600 text-white font-bold shadow-xs scale-102'
                    : isNavy
                    ? 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث بالاسم أو المقاس أو الخامة (مثال: 110 مم، PN20، فايبر، U.V، صامت، مشترك، غرفة تفتيش)..."
              className={`w-full pr-10 pl-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-red-500 text-right ${
                isNavy
                  ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                مسح
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>
            عرض <strong>{filteredProducts.length}</strong> نظاماً ومنتجاً مطابقاً
          </span>
          <span className="font-mono">HOMEPLAST OFFICIAL CATALOG</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:border-red-500 hover:shadow-lg ${
                isNavy
                  ? 'bg-[#0f1f44]/80 border-slate-700/60 shadow-sm'
                  : 'bg-white border-slate-200/90 shadow-xs'
              }`}
            >
              <div>
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-md ${product.colorBadge}`}>
                    {product.categoryTitle}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-red-500">
                    {product.code}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3
                  className={`text-base font-bold mb-2 leading-snug group-hover:text-red-600 transition-colors ${
                    isNavy ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {product.name}
                </h3>
                <p className={`text-xs mb-4 leading-relaxed line-clamp-2 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  {product.tagline}
                </p>

                {/* Available Sizes Showcase */}
                <div className={`p-3 rounded-xl border mb-4 text-xs ${isNavy ? 'bg-slate-900/70 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                  <span className="text-[11px] font-bold text-slate-500 block mb-1.5">
                    المقاسات والأقطار بالكتالوج:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.slice(0, 5).map((size, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isNavy ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-white text-slate-800 border-slate-200'
                        }`}
                      >
                        {size}
                      </span>
                    ))}
                    {product.sizes.length > 5 && (
                      <span className="text-[10px] text-red-500 font-bold self-center px-1">
                        +{product.sizes.length - 5} مقاسات أخرى
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Technical Specs */}
                <div className={`space-y-1.5 py-2.5 border-t mb-5 text-xs ${isNavy ? 'border-white/5' : 'border-slate-100'}`}>
                  {Object.entries(product.specs).slice(0, 2).map(([k, v], idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">{k}:</span>
                      <span className={`font-semibold text-[11px] ${isNavy ? 'text-slate-200' : 'text-slate-800'}`}>
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isNavy
                      ? 'bg-slate-800 hover:bg-red-600 text-white border-slate-700 hover:border-red-500'
                      : 'bg-slate-100 hover:bg-red-600 hover:text-white text-slate-800 border-slate-200 hover:border-red-600'
                  }`}
                >
                  <span>كافة المقاسات والتسعير</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/201011116316?text=${encodeURIComponent(`مرحباً هوم بلاست، أود الاستفسار عن أسعار وكميات: ${product.name} (كود ${product.code})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-xs"
                  title="طلب تسعير واتساب مباشر"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog Banner / Customer Support Assurance */}
        <div
          className={`mt-14 p-6 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 text-right transition-colors ${
            isNavy
              ? 'bg-gradient-to-r from-[#0f1f44] to-[#07132e] border-red-500/30 text-white'
              : 'bg-gradient-to-r from-red-50 to-white border-red-200 text-slate-900 shadow-sm'
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold mb-1">
                توريد مباشر من مصنع هوم بلاست ببني سويف لجميع محافظات مصر
              </h4>
              <p className={`text-xs ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                أسعار جملة وتخفيضات خاصة للمشروعات وشركات المقاولات وتجار التجزئة مع ضمان مصنعي معتمد.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:01011116316"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-center"
            >
              اتصال بالمبيعات: 01011116316
            </a>
            <a
              href="tel:01066693585"
              className="flex-1 md:flex-none px-5 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors text-center shadow-xs"
            >
              إدارة التصدير: 01066693585
            </a>
          </div>
        </div>

      </div>

      {/* Product Detail & Rapid Quote Modal */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className={`relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-right border ${
              isNavy
                ? 'bg-[#0f1f44] border-red-500/40 text-white shadow-[0_0_50px_rgba(239,68,68,0.25)]'
                : 'bg-white border-slate-300 text-slate-900 shadow-2xl'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className={`absolute top-5 left-5 p-2 rounded-xl transition-colors cursor-pointer ${
                isNavy ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>

            {quoteSuccess ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-500 mb-4 shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-bold mb-2">تم إرسال طلب عرض السعر بنجاح!</h4>
                <p className={`text-xs max-w-sm ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  سيقوم مسؤول المبيعات في شركة إيجي بلاست (هوم بلاست) بالتواصل معك على رقم هاتفك ({quoteForm.phone}) مع جدول الأسعار المعتمد وقائمة الخصومات.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md inline-block mb-2 ${selectedProduct.colorBadge}`}>
                    {selectedProduct.categoryTitle}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-extrabold">
                      {selectedProduct.name}
                    </h3>
                    <span className="font-mono text-xs font-bold text-red-500 px-2 py-1 rounded border border-red-500/20">
                      {selectedProduct.code}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                    {selectedProduct.tagline}
                  </p>
                </div>

                {/* Sizes Table from Official Catalog */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-red-500 mb-2.5 flex items-center gap-1.5">
                    <Layers className="w-4 h-4" />
                    <span>المقاسات والأقطار المعتمدة بالكتالوج الرسمي:</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {selectedProduct.sizes.map((size, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl border text-xs font-mono font-semibold flex items-center justify-between ${
                          isNavy ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      >
                        <span>{size}</span>
                        <span className="text-[10px] text-emerald-500 font-bold">متوفر</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 mb-2">المواصفات الفنية والجودة:</h4>
                  <div className={`p-4 rounded-xl border space-y-2 text-xs ${isNavy ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    {Object.entries(selectedProduct.specs).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-slate-500">{key}:</span>
                        <span className="font-semibold">{value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/5">
                      <span className="text-slate-500">مدة الضمان المصنعي:</span>
                      <span className="font-bold text-emerald-500">{selectedProduct.durability}</span>
                    </div>
                  </div>
                </div>

                {/* Instant Quotation Form */}
                <form onSubmit={handleSendQuote} className="space-y-3.5 pt-4 border-t border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold block mb-1">
                    طلب تسعير مباشر من المصنع لهذا البند:
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold mb-1">الاسم الكريم / الشركة</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: م. أحمد"
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-red-500 ${
                          isNavy ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold mb-1">رقم الهاتف / واتساب</label>
                      <input
                        type="tel"
                        required
                        placeholder="01XXXXXXXXX"
                        dir="ltr"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                        className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-red-500 text-right ${
                          isNavy ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold mb-1">المقاس المطلوب</label>
                      <select
                        value={quoteForm.selectedSize}
                        onChange={(e) => setQuoteForm({ ...quoteForm, selectedSize: e.target.value })}
                        className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-red-500 ${
                          isNavy ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      >
                        <option value="">اختر المقاس...</option>
                        {selectedProduct.sizes.map((s, idx) => (
                          <option key={idx} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold mb-1">الكمية التقديرية</label>
                      <input
                        type="text"
                        placeholder="مثال: 50 ماسورة أو 100 كوع"
                        value={quoteForm.quantity}
                        onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                        className={`w-full px-3 py-2 rounded-lg border text-xs focus:outline-none focus:border-red-500 ${
                          isNavy ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-3">
                    <a
                      href={`https://wa.me/201011116316?text=${encodeURIComponent(
                        `مرحباً إيجي بلاست - هوم بلاست، أطلب تسعير لمنتج: ${selectedProduct.name} كود: ${selectedProduct.code} بالمقاس: ${quoteForm.selectedSize || 'كافة المقاسات'}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                    >
                      <span>تسعير واتساب فوري</span>
                    </a>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-md transition-all cursor-pointer"
                    >
                      إرسال للمبيعات
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
