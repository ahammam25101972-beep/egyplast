import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Flame,
  Droplets,
  Activity,
  Award,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface HeroSectionProps {
  onOpenCalculator: () => void;
  onOpenProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCalculator,
  onOpenProducts,
}) => {
  const [activeNode, setActiveNode] = useState<'hot' | 'cold' | 'drain' | 'filter'>('cold');
  const { isNavy } = useTheme();

  const nodeSpecs = {
    cold: {
      title: 'شبكة المياه العذبة (Cold Supply PPR)',
      pressure: '25 Bar (PN25)',
      temp: 'حتى 35° مئوية',
      material: 'بولي بروبيلين عشوائي نقي 100%',
      desc: 'مقاومة تامة للتكلس والترسبات الكلسية، تحافظ على نقاء المياه وصلاحيتها للشرب دون أي تغير في الطعم أو الرائحة.',
      textColor: isNavy ? 'text-cyan-400' : 'text-cyan-600',
      badge: 'نقاء فائق 100%',
    },
    hot: {
      title: 'شبكة المياه الساخنة (Hot Supply Fiber-PPR)',
      pressure: '20 Bar (PN20)',
      temp: 'تتحمل حتى 95° مئوية',
      material: 'PPR متعدد الطبقات معزز بالألياف الزجاجية',
      desc: 'عزل حراري مدمج يقلل فقد الطاقة بنسبة 35% ويمنع التمدد الطولي في الجدران حتى في أقصى درجات حرارة السخانات المركزية.',
      textColor: isNavy ? 'text-red-400' : 'text-red-600',
      badge: 'مقاومة حرارية فائقة',
    },
    drain: {
      title: 'شبكة الصرف الصحي الصامت (Acoustic PVC)',
      pressure: 'انسياب هيدروليكي فائق',
      temp: 'مقاومة للأحماض والمواد الكيميائية',
      material: 'PVC سميك متعدد الكثافات عازل للصوت',
      desc: 'طبقة داخلية ملساء للغاية تمنع الالتصاق والانسداد، مع امتصاص ضوضاء التدفق وتدفق هادئ دون أي انبعاث روائح.',
      textColor: isNavy ? 'text-violet-400' : 'text-violet-600',
      badge: 'عزل صوتي 17dB',
    },
    filter: {
      title: 'وحدة الفلترة والصمامات الذكية (Smart Valves)',
      pressure: 'صمامات إغلاق كروية معتمدة',
      temp: 'مؤشرات ضغط إلكترونية متوافقة',
      material: 'نحاس أصفر عالي النقاء مطلي بالنيكل',
      desc: 'تحكم دقيق في التدفق مع صمام أمان تلقائي ومصائد شوائب مزدوجة لحماية كافة أجهزة المنزل وأطقم الحمامات.',
      textColor: isNavy ? 'text-emerald-400' : 'text-emerald-600',
      badge: 'أمان وتدفق مستمر',
    },
  };

  const activeSpec = nodeSpecs[activeNode];

  return (
    <section
      id="hero"
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-300 ${
        isNavy
          ? 'bg-[#0b1736]'
          : 'bg-gradient-to-b from-slate-50 via-sky-50/30 to-slate-100'
      }`}
    >
      {/* Ambient Radial Glowing Lights */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isNavy ? 'bg-cyber-grid-navy opacity-60' : 'bg-cyber-grid-light opacity-80'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Editorial / Messaging) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Top Tagline */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border mb-6 text-xs transition-colors ${
                isNavy
                  ? 'bg-slate-900/90 border-cyan-500/30 text-slate-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-white/90 border-cyan-500/40 text-slate-700 shadow-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">هوم بلاست للسباكة الحديثة</span>
              <span className="text-slate-400">·</span>
              <span className={isNavy ? 'text-slate-300' : 'text-slate-600'}>ضمان معتمد حتى 25 عاماً</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.25] mb-6 ${
                isNavy ? 'text-white' : 'text-slate-900'
              }`}
            >
              هندسة السباكة الذكية{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
                بأعلى معايير الأمان
              </span>
              {' '}والمتانة الدائمة
            </h1>

            {/* Value Proposition */}
            <p
              className={`text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-8 ${
                isNavy ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              نبتكر حلول السباكة المتكاملة في <span className={isNavy ? 'text-white font-semibold' : 'text-slate-900 font-bold'}>إيجي بلاست - هوم بلاست ®</span> عبر أرقى أنظمة أنابيب PPR، شبكات الصرف الصحي الصامت، وتجهيزات المياه الحديثة بأعلى معايير الجودة والأمان، مع توريد مباشر من مصنعنا ببني سويف لجميع محافظات مصر والتصدير الدولي.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenCalculator}
                className="relative group inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>احسب تكلفة السباكة فوراً</span>
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onOpenProducts}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 cursor-pointer ${
                  isNavy
                    ? 'text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-300 shadow-sm'
                }`}
              >
                <Droplets className="w-4 h-4 text-cyan-500" />
                <span>استكشف كتالوج المنتجات</span>
              </button>
            </div>

            {/* Single-line Trust Markers */}
            <div
              className={`w-full pt-6 border-t flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium ${
                isNavy ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className={isNavy ? 'text-slate-200' : 'text-slate-800 font-semibold'}>ضمان مصنعي 25 سنة</span>
              </div>
              <span className="text-slate-400">/</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className={isNavy ? 'text-slate-200' : 'text-slate-800 font-semibold'}>معايير ألمانية DIN & ISO</span>
              </div>
              <span className="text-slate-400">/</span>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500 shrink-0" />
                <span className={isNavy ? 'text-slate-200' : 'text-slate-800 font-semibold'}>تحمل حراري حتى 95°C</span>
              </div>
              <span className="text-slate-400">/</span>
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-blue-500 shrink-0" />
                <span className={isNavy ? 'text-slate-200' : 'text-slate-800 font-semibold'}>تحمل ضغط 25 بار</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Neon Plumbing Schematic */}
          <div className="lg:col-span-5">
            <div
              className={`relative rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
                isNavy
                  ? 'bg-[#0f1f44]/80 border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                  : 'bg-white/95 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.08)]'
              }`}
            >
              
              {/* Header of the Schematic Card */}
              <div className={`flex items-center justify-between pb-4 mb-4 border-b ${isNavy ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className={`text-xs font-bold ${isNavy ? 'text-cyan-300' : 'text-cyan-700'}`}>
                    مخطط المحاكاة التفاعلية لأنظمة هوم بلاست
                  </span>
                </div>
                <div className={`text-[11px] ${isNavy ? 'text-slate-400' : 'text-slate-500'}`}>
                  انقر على الأنابيب للفحص
                </div>
              </div>

              {/* Interactive Vector Pipeline Simulator */}
              <div className="relative h-64 w-full bg-[#081124] rounded-xl p-4 border border-slate-800 flex items-center justify-center overflow-hidden">
                
                {/* SVG Pipes with dynamic glow & animations */}
                <svg
                  viewBox="0 0 380 200"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="50" x2="380" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="100" x2="380" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="0" y1="150" x2="380" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="200" y1="0" x2="200" y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
                  <line x1="300" y1="0" x2="300" y2="200" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />

                  {/* 1. Cold Water Pipe (Cyan) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode('cold')}>
                    <path
                      d="M 20 40 L 160 40 L 160 110 L 320 110"
                      stroke={activeNode === 'cold' ? '#06b6d4' : '#164e63'}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 20 40 L 160 40 L 160 110 L 320 110"
                      stroke="#67e8f9"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-water-flow"
                    />
                  </g>

                  {/* 2. Hot Water Pipe (Red) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode('hot')}>
                    <path
                      d="M 20 85 L 120 85 L 120 155 L 260 155 L 260 175 L 360 175"
                      stroke={activeNode === 'hot' ? '#ef4444' : '#7f1d1d'}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 20 85 L 120 85 L 120 155 L 260 155 L 260 175 L 360 175"
                      stroke="#fca5a5"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-water-flow"
                    />
                  </g>

                  {/* 3. Drainage Line (Violet) */}
                  <g className="cursor-pointer" onClick={() => setActiveNode('drain')}>
                    <path
                      d="M 60 180 L 180 180 L 220 130 L 360 130"
                      stroke={activeNode === 'drain' ? '#8b5cf6' : '#4c1d95'}
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 60 180 L 180 180 L 220 130 L 360 130"
                      stroke="#c4b5fd"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-water-flow"
                    />
                  </g>

                  {/* 4. Smart Valve Joint */}
                  <g className="cursor-pointer" onClick={() => setActiveNode('filter')}>
                    <circle
                      cx="160"
                      cy="40"
                      r="14"
                      fill="#064e3b"
                      stroke={activeNode === 'filter' ? '#10b981' : '#047857'}
                      strokeWidth="3"
                    />
                    <circle cx="160" cy="40" r="5" fill="#34d399" />
                  </g>

                  <circle
                    cx="120"
                    cy="85"
                    r="12"
                    fill="#450a0a"
                    stroke="#ef4444"
                    strokeWidth="2"
                    className="cursor-pointer"
                    onClick={() => setActiveNode('hot')}
                  />
                  <circle cx="120" cy="85" r="4" fill="#fca5a5" />

                  <g transform="translate(270, 20)">
                    <rect width="90" height="34" rx="6" fill="#030712" stroke="#06b6d4" strokeWidth="1" />
                    <text x="45" y="16" fill="#67e8f9" fontSize="10" textAnchor="middle" fontWeight="bold">
                      24.8 BAR
                    </text>
                    <text x="45" y="28" fill="#94a3b8" fontSize="8" textAnchor="middle">
                      ضغط تدفق مستقر
                    </text>
                  </g>
                </svg>

                {/* Hotspot buttons overlay */}
                <div className="absolute bottom-2 inset-x-2 flex items-center justify-between text-[11px] font-medium bg-slate-950/90 p-1.5 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setActiveNode('cold')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeNode === 'cold'
                        ? 'bg-cyan-500/30 text-cyan-300 font-bold border border-cyan-500/50'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    أنابيب البارد PPR
                  </button>
                  <button
                    onClick={() => setActiveNode('hot')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeNode === 'hot'
                        ? 'bg-red-500/30 text-red-300 font-bold border border-red-500/50'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    أنابيب الحار Fiber
                  </button>
                  <button
                    onClick={() => setActiveNode('drain')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeNode === 'drain'
                        ? 'bg-violet-500/30 text-violet-300 font-bold border border-violet-500/50'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    الصرف الصامت
                  </button>
                  <button
                    onClick={() => setActiveNode('filter')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeNode === 'filter'
                        ? 'bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/50'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    الصمام الذكي
                  </button>
                </div>
              </div>

              {/* Dynamic Inspector Panel */}
              <div
                className={`mt-4 p-4 rounded-xl border transition-colors ${
                  isNavy
                    ? 'bg-slate-900/60 border-white/10 text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-sm font-bold ${activeSpec.textColor} flex items-center gap-1.5`}>
                    <Sparkles className="w-4 h-4" />
                    <span>{activeSpec.title}</span>
                  </h4>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                      isNavy
                        ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : 'bg-white text-slate-700 border-slate-200 shadow-xs'
                    }`}
                  >
                    {activeSpec.badge}
                  </span>
                </div>
                
                <p className={`text-xs mb-3 leading-relaxed ${isNavy ? 'text-slate-300' : 'text-slate-600'}`}>
                  {activeSpec.desc}
                </p>

                <div className={`grid grid-cols-2 gap-2 text-[11px] pt-2 border-t ${isNavy ? 'border-white/5' : 'border-slate-200'}`}>
                  <div className={`p-2 rounded border ${isNavy ? 'bg-slate-900/80 border-white/5' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-500 block text-[10px]">الضغط الاسمي:</span>
                    <span className="font-mono font-semibold">{activeSpec.pressure}</span>
                  </div>
                  <div className={`p-2 rounded border ${isNavy ? 'bg-slate-900/80 border-white/5' : 'bg-white border-slate-200'}`}>
                    <span className="text-slate-500 block text-[10px]">التحمل الحراري:</span>
                    <span className="font-semibold">{activeSpec.temp}</span>
                  </div>
                </div>
              </div>

              {/* Brand Stamp */}
              <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>شركة هوم بلاست (HomePlast)</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">PN25 GERMAN QUALITY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
