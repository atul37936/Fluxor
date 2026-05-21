/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  UserCheck, 
  Check, 
  Clock, 
  Compass, 
  User, 
  Mail, 
  MessageSquare,
  X 
} from 'lucide-react';
import Navbar from './components/Navbar';
import StatCard from './components/StatCard';
import InteractiveCustomizer from './components/InteractiveCustomizer';
import FinanceView from './components/FinanceView';
import HowItWorksView from './components/HowItWorksView';
import AboutView from './components/AboutView';
import ProductView from './components/ProductView';
import BlogView from './components/BlogView';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'finance' | 'how-it-works' | 'about' | 'product' | 'blog'>('home');
  const [humanLevel, setHumanLevel] = useState(100);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Lead info state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userConcept, setUserConcept] = useState('Humane Interfaces');

  // Mouse trail particles on the right side
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseOverInteractive, setIsMouseOverInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleResetCalibration = () => {
    setHumanLevel(100);
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowDrawer(false);
      setIsSubmitted(false);
      // clean state
      setUserName('');
      setUserEmail('');
    }, 2800);
  };

  // Compute dynamic font sizes / styles based on human value
  const getBigHeadingStyles = () => {
    if (humanLevel > 70) {
      return {
        brand: 'font-display',
        allWord: 'text-gradient-all font-display font-bold font-semibold tracking-tight italic-not',
        machinesWord: 'text-gradient-machines font-serif-italic font-medium italic transition-all duration-300'
      };
    } else if (humanLevel > 35) {
      return {
        brand: 'font-sans',
        allWord: 'text-orange-400 font-sans tracking-normal font-semibold',
        machinesWord: 'text-red-400 font-sans tracking-normal font-semibold not-italic'
      };
    } else {
      return {
        brand: 'font-mono text-zinc-300',
        allWord: 'text-orange-600 font-mono tracking-wider font-light',
        machinesWord: 'text-zinc-500 font-mono tracking-wider font-light not-italic'
      };
    }
  };

  const styles = getBigHeadingStyles();

  // Dynamic custom subtitle based on humanity rating
  const getDynamicSubtitle = () => {
    if (humanLevel > 80) {
      return "We create clear, intuitive, and accessible digital experiences shaped by real human behavior.";
    } else if (humanLevel > 40) {
      return "An adaptive hybrid architecture rendering interactive elements in real-time response frameworks.";
    } else {
      return "SYSTEM_OK: Rendering cold programmatic telemetry grids. All semantic human variables bypassed.";
    }
  };

  return (
    <div className="min-h-screen text-white relative flex flex-col font-sans selection:bg-orange-500/30 overflow-x-hidden">
      
      {/* Background looping video player */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
        >
          <source src="https://res.cloudinary.com/dyuxbr028/video/upload/v1779384410/mp__oncrgu.mp4" type="video/mp4" />
        </video>
        {/* Soft elegant vignette layer to ensure perfect legibility of white and neon characters */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Background ambient glowing spheres - controlled by humanity level */}
      <div 
        className="absolute top-0 left-0 w-full h-[100vh] pointer-events-none z-[1] overflow-hidden"
      >
        {/* Core Red/Orange backdrop glow from the screenshot */}
        <div 
          className="absolute top-[25%] left-[5%] md:left-[10%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] rounded-full filter blur-[120px] transition-all duration-1000 origin-center opacity-70"
          style={{
            background: `radial-gradient(circle, rgba(225, 29, 72, ${0.16 * (humanLevel / 100)}) 0%, rgba(234, 88, 12, ${0.12 * (humanLevel / 100)}) 50%, rgba(0,0,0,0) 100%)`,
            transform: `scale(${0.8 + (humanLevel / 200)}) translate(-5%, -5%)`
          }}
        />

        {/* Cold grey-matrix glow on low human Level */}
        <div 
          className="absolute top-[30%] right-10 w-[400px] h-[400px] rounded-full filter blur-[100px] transition-all duration-1000 opacity-60 pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(99, 102, 241, ${0.08 * (1 - humanLevel / 100)}) 0%, rgba(30, 41, 59, ${0.05 * (1 - humanLevel / 100)}) 60%, rgba(0,0,0,0) 100%)`
          }}
        />

        {/* Subtle top-right golden header sweep */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[200px] bg-gradient-to-b from-orange-500/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* Main Navigation Component */}
      <Navbar 
        onStartClick={() => setActiveView('finance')} 
        onHowItWorksClick={() => setActiveView('how-it-works')}
        onAboutClick={() => setActiveView('about')}
        onProductClick={() => setActiveView('product')}
        onBlogClick={() => setActiveView('blog')}
        onLogoClick={() => setActiveView('home')}
        activeView={activeView}
        brandFontClass={styles.brand} 
      />

      <AnimatePresence mode="wait">
        {activeView === 'home' ? (
          <motion.main 
            key="homeMain"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-12 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-4 sm:pt-8 md:pt-12 lg:pt-14 pb-16 items-start gap-8 lg:gap-12"
          >
            
            {/* Left Column (Main Focus & CTA) */}
            <div className="w-full lg:col-span-7 flex flex-col items-start justify-center">
              
              {/* 1. Micro Globe badge resembling exact layout with border list */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 text-xs tracking-wide text-gray-400 font-mono mb-6 md:mb-10 group cursor-pointer"
              >
                <div className="relative">
                  <Globe className="w-5 h-5 text-gray-400 shrink-0 select-none animate-[spin_12s_linear_infinite]" />
                  <div className="absolute -inset-0.5 bg-orange-500/20 rounded-full filter blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* The vertical separator line seen clearly in screenshot */}
                <div className="h-5 w-[1px] bg-white/20 select-none" />
                
                <div className="text-[11px] leading-relaxed font-sans font-light text-[#D1D5DB] tracking-wide">
                  Hub support peoples from<br />all over the world
                </div>
              </motion.div>

              {/* 2. Headline: High-Contrast display */}
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-bold tracking-tight leading-[1.04] text-white block select-none"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {/* Row 1: Technology */}
                <span className="block font-medium tracking-tight">Technology</span>
                
                {/* Row 2: Crafted for All */}
                <span className="block font-medium tracking-tight">
                  Crafted for <span className={`${styles.allWord}`}>All</span>
                </span>
                
                {/* Row 3: Not Machines */}
                <span className="block font-medium tracking-tight">
                  Not <span className={`${styles.machinesWord}`}>Machines</span>
                </span>
              </motion.h1>

              {/* 3. Narrative description paragraph */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-400 font-sans text-sm sm:text-[15px] md:text-[1.05rem] max-w-lg leading-relaxed mt-6 mb-10 text-left transition-all duration-700"
              >
                {getDynamicSubtitle()}
              </motion.p>

              {/* 4. Horizontal Interaction Row: CTA Pill and Testimonials side-by-side */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-10 md:mb-14 w-full"
              >
                {/* Dual Tone Pill CTA: Get Started */}
                <button 
                  onClick={() => setActiveView('finance')}
                  onMouseEnter={() => setIsCtaHovered(true)}
                  onMouseLeave={() => setIsCtaHovered(false)}
                  className="group flex items-center justify-center sm:justify-between bg-gradient-to-r from-[#de2c13] via-[#e24419] to-[#ea580c] hover:opacity-95 text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-orange-950/20 active:scale-95 text-sm gap-8 relative overflow-hidden h-[54px] shrink-0 cursor-pointer w-full sm:w-auto"
                >
                  {/* Highlight background flash */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  <span className="relative z-10 font-medium tracking-tight select-none">Get started</span>
                  
                  <span className="relative z-10 w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center text-black shrink-0 transition-all duration-500 ease-out group-hover:rotate-45 shadow">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </button>

                {/* Secondary Pill CTA: How It Works */}
                <button 
                  onClick={() => setActiveView('how-it-works')}
                  className="px-6 h-[54px] rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] active:scale-95 transition-all duration-300 text-sm font-semibold tracking-tight text-stone-300 hover:text-white shrink-0 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>How it works</span>
                </button>

                {/* Micro avatar stacked testimonials */}
                <div className="flex items-center gap-3 sm:ml-4 mt-2 sm:mt-0">
                  <div className="flex -space-x-2.5">
                    {[
                      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120',
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120',
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120',
                    ].map((src, i) => (
                      <div key={i} className="relative group/avatar">
                        <img 
                          src={src} 
                          alt="Fluxora Client Avatar" 
                          className="w-9 h-9 rounded-full object-cover border-2 border-black relative z-10 transition-transform duration-300 group-hover/avatar:-translate-y-1"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-[1px] opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>

                  {/* Verified Text Labels exactly matching aesthetic */}
                  <div className="flex flex-col text-left leading-normal">
                    <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1 leading-none select-none">
                      900+ Happy Clients
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 ml-0.5 animate-pulse" />
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono tracking-wider mt-0.5">
                      Over 5 years
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* 5. Underneath Double Stat Cards - accurately aligning numbers & asterisks */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 w-full">
                <StatCard 
                  value={150} 
                  suffix="+" 
                  metricCode="50" 
                  label="Projects delivered" 
                  colorTheme="warm" 
                />
                <StatCard 
                  value={98} 
                  suffix="%" 
                  metricCode="100" 
                  label="Client satisfaction" 
                  colorTheme="maroon" 
                />
              </div>

            </div>

            {/* Right Column (Minimal Interactive Playground & Calibration Hub) */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsMouseOverInteractive(true)}
              onMouseLeave={() => setIsMouseOverInteractive(false)}
              className="lg:col-span-5 h-auto lg:h-[580px] min-h-[480px] lg:min-h-[unset] w-full flex flex-col justify-between items-center lg:items-end relative rounded-[32px] p-4 sm:p-5 lg:p-2 overflow-hidden cursor-crosshair group/right bg-white/[0.01] border border-white/[0.03]"
            >
              {/* Dynamic interaction indicators */}
              <div className="absolute top-6 left-6 text-[10px] font-mono tracking-widest text-zinc-500 uppercase flex items-center gap-1.5 select-none pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                <span>Interactive Space</span>
              </div>

              {/* Liquid responsive gradient dots driven by user mouse position */}
              <AnimatePresence>
                {isMouseOverInteractive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute pointer-events-none rounded-full filter blur-[40px] pointer-events-none"
                    style={{
                      left: mousePos.x - 120,
                      top: mousePos.y - 120,
                      width: '240px',
                      height: '240px',
                      background: `radial-gradient(circle, rgba(239, 68, 68, ${0.1 * (humanLevel / 100)}) 0%, rgba(249, 115, 22, ${0.05 * (humanLevel / 100)}) 60%, rgba(0,0,0,0) 100%)`
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Organic floating dynamic visual representation of Humanity */}
              <div className="w-full flex-1 min-h-[220px] lg:min-h-[unset] py-8 lg:py-0 flex items-center justify-center relative pointer-events-none">
                {/* The abstract floating Core representing humane code */}
                <motion.div 
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.03, 0.98, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="relative w-48 h-48 flex items-center justify-center"
                >
                  <div 
                    className="absolute inset-0 rounded-full blur-xl transition-all duration-1000"
                    style={{
                      background: `bg-gradient-to-tr from-rose-500/20 to-amber-500/20`,
                      transform: `scale(${0.9 + (humanLevel / 200)})`,
                      opacity: 0.2 + (humanLevel / 200)
                    }}
                  />

                  {/* Hand-drawn wire mesh / celestial rings inside */}
                  <svg className="w-full h-full text-zinc-700/40" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                    <motion.circle 
                      cx="50" cy="50" r="30" 
                      stroke="url(#grad1)" 
                      strokeWidth="1.5" 
                      animate={{ strokeDashoffset: [0, 100] }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      strokeDasharray="10 40"
                    />
                    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
                    
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity={humanLevel/120} />
                        <stop offset="100%" stopColor="#f97316" stopOpacity={humanLevel/150} />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Center star seen in stats cards */}
                  <div className="absolute text-3xl font-light text-orange-500 animate-spin-slow">
                    *
                  </div>
                </motion.div>
              </div>

              {/* Floating Calibration Deck - aligning nicely at the bottom right */}
              <div className="w-full relative z-20 flex justify-center lg:justify-end">
                <InteractiveCustomizer 
                  humanLevel={humanLevel} 
                  setHumanLevel={setHumanLevel} 
                  onReset={handleResetCalibration}
                />
              </div>

            </div>

            {/* Premium Integrated Footer within the Hero Section */}
            <div className="col-span-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 w-full relative z-20">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span>Fluxora System • Decentralized Node</span>
              </div>
              
              <div className="text-[#E5E7EB] font-sans text-[13px] tracking-tight font-medium bg-white/[0.02] border border-white/5 px-4 py-1.5 rounded-full flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-[pulse_2s_infinite]" />
                <span>Created by <strong className="text-orange-400 font-semibold hover:text-orange-300 transition-colors pointer-events-auto">Atul mishra</strong></span>
              </div>

              <div className="flex items-center gap-4 text-zinc-500">
                <span>© {new Date().getFullYear()} Fluxora</span>
                <span className="text-zinc-800">|</span>
                <span className="text-stone-400">All Human Rights Reserved</span>
              </div>
            </div>

          </motion.main>
        ) : activeView === 'finance' ? (
          <FinanceView 
            onBackClick={() => setActiveView('home')} 
            brandFontClass={styles.brand} 
          />
        ) : activeView === 'how-it-works' ? (
          <HowItWorksView 
            onBackClick={() => setActiveView('home')} 
            brandFontClass={styles.brand} 
          />
        ) : activeView === 'about' ? (
          <AboutView 
            onBackClick={() => setActiveView('home')} 
            brandFontClass={styles.brand} 
          />
        ) : activeView === 'product' ? (
          <ProductView 
            onBackClick={() => setActiveView('home')} 
            brandFontClass={styles.brand} 
          />
        ) : (
          <BlogView 
            onBackClick={() => setActiveView('home')} 
            brandFontClass={styles.brand} 
          />
        )}
      </AnimatePresence>

      {/* Elegant Drawer for standard "Get Started" interactions */}
      <AnimatePresence>
        {showDrawer && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            
            {/* Background Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDrawer(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Slider Sheet content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-[#0A0A0B] border-l border-white/10 p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)] z-10"
            >
              
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    <span className="font-mono text-xs tracking-wider uppercase text-gray-400">Initialize Project</span>
                  </div>
                  <button 
                    onClick={() => setShowDrawer(false)}
                    className="p-1.5 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                  Bring Humanity to Your Code Base
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Set up a design blueprint tailored around humans. Enter your project criteria and let Fluxora configure dynamic micro-states.
                </p>

                {/* Interactive Lead Intake Form */}
                <form onSubmit={handleCtaSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Your Name / Company
                    </label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Athena Creative" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all pl-10"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Communication Channel
                    </label>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        placeholder="athena@fluxora.io" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-orange-500/50 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all pl-10"
                      />
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5">
                      Primary Interface Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'Humane Interfaces', icon: Heart, label: 'Humane UI' },
                        { id: 'Adaptive Micro-States', icon: Sparkles, label: 'Adaptive UI' },
                        { id: 'Dynamic Storytelling', icon: Compass, label: 'Storytelling' },
                        { id: 'High Performance API', icon: Clock, label: 'API Grid' },
                      ].map((focus) => {
                        const Icon = focus.icon;
                        const isSelected = userConcept === focus.id;
                        return (
                          <button
                            key={focus.id}
                            type="button"
                            onClick={() => setUserConcept(focus.id)}
                            className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                              isSelected 
                                ? 'bg-orange-500/10 border-orange-500 text-white' 
                                : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-orange-500' : 'text-gray-500'}`} />
                            <span className="text-xs font-medium">{focus.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="w-full py-3.5 mt-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/95 active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600 animate-bounce" />
                        <span>Initializing System...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Blueprint</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-white/5 pt-4 text-center">
                <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                  FLUXORA CORE AGENT v1.02 • STATUS: ACTIVE
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>



    </div>
  );
}
