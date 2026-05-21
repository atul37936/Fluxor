/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, Cpu, Layers, AppWindow, Rss, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onStartClick: () => void;
  onHowItWorksClick: () => void;
  onAboutClick: () => void;
  onProductClick: () => void;
  onBlogClick: () => void;
  onLogoClick: () => void;
  brandFontClass: string;
  activeView?: 'home' | 'finance' | 'how-it-works' | 'about' | 'product' | 'blog';
}

export default function Navbar({ onStartClick, onHowItWorksClick, onAboutClick, onProductClick, onBlogClick, onLogoClick, brandFontClass, activeView = 'home' }: NavbarProps) {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    { title: 'Human Micro-Interactions', desc: 'Physiological feedback designed around user behavior.', icon: Sparkles },
    { title: 'Context-Aware Modules', desc: 'Vapor-thin templates adapting instantly to dynamic payloads.', icon: Cpu },
    { title: 'Semantic Interface Engines', desc: 'Zero-latency render cycles driven by native design tokens.', icon: Layers },
    { title: 'Fluid Design System', desc: 'Tailwind variable structure engineered for custom frameworks.', icon: AppWindow }
  ];

  const handleMouseEnter = (menu: string) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full relative z-50 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto"
    >
      {/* Brand logo */}
      <div onClick={onLogoClick} className="flex items-center group cursor-pointer">
        {/* Dynamic hand-crafted red/orange geometry logo */}
        <div className="relative w-8 h-8 mr-2.5 flex items-center justify-center">
          <span className="absolute inset-0 bg-[#e11d48] rounded-[6px] rotate-0 group-hover:rotate-45 transition-transform duration-500 ease-out" />
          <span className="absolute inset-0 bg-[#ea580c] rounded-[6px] rotate-12 opacity-80 group-hover:-rotate-45 transition-transform duration-500 ease-out" />
          <span className="absolute inset-0 bg-transparent border border-white/20 rounded-[6px] scale-110" />
          <span className="relative text-white font-serif-italic font-bold text-sm tracking-tight">*</span>
        </div>
        <span className={`text-2xl font-bold tracking-tight text-white ${brandFontClass}`}>
          Fluxora
        </span>
      </div>

      {/* Navigation Capsule */}
      <nav className="hidden lg:flex items-center relative">
        <div 
          className="bg-black/60 backdrop-blur-xl border border-white/10 p-1 rounded-full flex items-center shadow-[0_0_24px_rgba(0,0,0,0.8)]"
          onMouseLeave={handleMouseLeave}
        >
          {/* Features Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('features')}
          >
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-all outline-none">
              Features
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredMenu === 'features' ? 'rotate-180 text-orange-500' : ''}`} />
            </button>

            {/* Dropdown overlay */}
            <AnimatePresence>
              {hoveredMenu === 'features' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-[460px] bg-black/95 backdrop-blur-2xl border border-white/10 rounded-[20px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-50 grid grid-cols-2 gap-3"
                >
                  <div className="col-span-2 px-2 pb-2 mb-1 border-b border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 font-mono">Dynamic Capabilities</span>
                    <span className="h-1.5 w-1.5 bg-orange-500 rounded-full animate-ping" />
                  </div>
                  {features.map((feat) => {
                    const Icon = feat.icon;
                    return (
                      <div
                        key={feat.title}
                        className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group/item cursor-pointer"
                      >
                        <div className="flex items-center gap-2 mb-1 text-white font-medium text-xs">
                          <Icon className="w-4 h-4 text-orange-500 group-hover/item:scale-110 transition-transform" />
                          {feat.title}
                        </div>
                        <p className="text-[11px] text-gray-400 leading-normal">{feat.desc}</p>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              onHowItWorksClick();
            }}
            className={`px-4 py-2 text-sm rounded-full transition-all cursor-pointer border border-transparent ${
              activeView === 'how-it-works'
                ? 'bg-orange-600/10 text-orange-400 border-orange-500/25 font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            How It Works
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              onAboutClick();
            }}
            className={`px-4 py-2 text-sm rounded-full transition-all cursor-pointer border border-transparent ${
              activeView === 'about'
                ? 'bg-orange-600/10 text-orange-400 border-orange-500/25 font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            About
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              onProductClick();
            }}
            className={`px-4 py-2 text-sm rounded-full transition-all cursor-pointer border border-transparent ${
              activeView === 'product'
                ? 'bg-orange-600/10 text-orange-400 border-orange-500/25 font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Product
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              onBlogClick();
            }}
            className={`px-4 py-2 text-sm rounded-full transition-all cursor-pointer border border-transparent flex items-center gap-1 ${
              activeView === 'blog'
                ? 'bg-orange-600/10 text-[#f97316] border-[#f97316]/25 font-semibold'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Blogs
            <span className="w-1 h-1 bg-rose-500 rounded-full" />
          </button>
        </div>
      </nav>

      {/* Right Actions & Mobile Toggle */}
      <div className="flex items-center gap-3 relative z-[60]">
        <button
          onClick={onStartClick}
          className="hidden sm:inline-block relative bg-white text-black text-sm font-semibold tracking-tight px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:bg-white/90 hover:shadow-white/5 hover:scale-[1.02] active:scale-95 cursor-pointer z-10"
        >
          Get Started
        </button>

        {/* Mobile menu toggle button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-white/11 text-white border border-white/10 rounded-full transition-all cursor-pointer z-50 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="w-4 h-4 text-orange-500" />
          ) : (
            <Menu className="w-4 h-4 text-stone-300 hover:text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-full left-4 right-4 mt-2 bg-[#08080a]/95 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-40 lg:hidden flex flex-col gap-4 text-left"
          >
            {/* Header branding info */}
            <div className="flex justify-between items-center pb-2 border-b border-white/5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-orange-400">Portal Directory</span>
              <span className="text-[9px] font-mono text-zinc-500">v5.0-MOBILE</span>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogoClick();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  activeView === 'home'
                    ? 'bg-orange-600/10 text-orange-400 border border-orange-500/20'
                    : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onHowItWorksClick();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  activeView === 'how-it-works'
                    ? 'bg-orange-600/10 text-orange-400 border border-orange-500/20'
                    : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                How It Works
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onAboutClick();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  activeView === 'about'
                    ? 'bg-orange-600/10 text-orange-400 border border-orange-500/20'
                    : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                About
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onProductClick();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all cursor-pointer ${
                  activeView === 'product'
                    ? 'bg-orange-600/10 text-orange-400 border border-orange-500/20'
                    : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                Product
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBlogClick();
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all flex items-center justify-between cursor-pointer ${
                  activeView === 'blog'
                    ? 'bg-orange-600/10 text-[#f97316] border border-[#f97316]/20'
                    : 'text-gray-300 hover:text-white border border-transparent hover:bg-white/5'
                }`}
              >
                <span>Blogs</span>
                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
              </button>
            </div>

            {/* Quick Action Button for Mobile Drawer */}
            <div className="pt-2 border-t border-white/5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartClick();
                }}
                className="w-full flex items-center justify-between bg-gradient-to-r from-[#de2c13] to-[#ea580c] hover:opacity-95 text-white pl-4 pr-1 py-1 rounded-xl font-semibold text-xs tracking-tight transition-all cursor-pointer"
              >
                <span>Interactive Finance Sandbox</span>
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
