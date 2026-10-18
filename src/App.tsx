import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProductsShowcase } from './components/ProductsShowcase.tsx';
import { PlumbingCostCalculator } from './components/PlumbingCostCalculator.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

function MainApp() {
  const { isNavy } = useTheme();

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    elem?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen flex flex-col font-['Cairo',sans-serif] transition-colors duration-300 ${
        isNavy
          ? 'bg-[#0b1736] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200'
          : 'bg-slate-50 text-slate-900 selection:bg-cyan-500/25 selection:text-cyan-800'
      }`}
    >
      {/* Top Bar Navigation (الرئيسية - من نحن - خدماتنا - منتجاتنا - حاسبة التكلفة - اتصل بنا - المدونة) */}
      <Navbar onOpenConsultation={() => scrollToSection('contact')} />

      {/* Main Content Flow Ordered to Match Navigation */}
      <main className="flex-1">
        {/* 1. الرئيسية: Hero Section with Interactive Plumbing Simulator */}
        <HeroSection
          onOpenCalculator={() => scrollToSection('calculator')}
          onOpenProducts={() => scrollToSection('products')}
        />

        {/* 2. من نحن: About Homeplast / Egy Plast Official Profile */}
        <AboutSection />

        {/* 3. خدماتنا: Core Capabilities and Plumbing Advantages */}
        <ServicesSection />

        {/* 4. منتجاتنا: Interactive Products Showcase & Technical Specs */}
        <ProductsShowcase />

        {/* 5. حاسبة التكلفة: Instant Plumbing Cost & Materials Estimator */}
        <PlumbingCostCalculator />

        {/* Case Studies, Major Projects & Verified Testimonials */}
        <ProjectsSection />

        {/* 6. اتصل بنا: Contact Form, Factory, Head Office & Branches Directory */}
        <ContactSection />

        {/* 7. المدونة: Engineering Blog, Guides & Lab Research */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Buttons */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
