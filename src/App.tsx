import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProductsShowcase } from './components/ProductsShowcase.tsx';
import { PlumbingCostCalculator } from './components/PlumbingCostCalculator.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
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
      {/* Top Bar Navigation */}
      <Navbar onOpenConsultation={() => scrollToSection('contact')} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section with Interactive Plumbing Simulator */}
        <HeroSection
          onOpenCalculator={() => scrollToSection('calculator')}
          onOpenProducts={() => scrollToSection('products')}
        />

        {/* Core Capabilities and Plumbing Advantages */}
        <ServicesSection />

        {/* Interactive Products Showcase & Technical Specs */}
        <ProductsShowcase />

        {/* Instant Plumbing Cost & Materials Estimator */}
        <PlumbingCostCalculator />

        {/* About HomePlast & Technical Comparison */}
        <AboutSection />

        {/* Case Studies, Major Projects & Verified Testimonials */}
        <ProjectsSection />

        {/* Contact Form & Emergency Technical Support */}
        <ContactSection />
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
