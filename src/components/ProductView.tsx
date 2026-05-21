/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Fingerprint, 
  Heart, 
  Zap, 
  Eye, 
  Gauge, 
  CheckCircle2, 
  Settings2,
  Workflow
} from 'lucide-react';

interface ProductViewProps {
  onBackClick: () => void;
  brandFontClass: string;
}

interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  metricCode: string;
  performanceStat: string;
  performanceValue: number;
  performanceSuffix: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProductView({ onBackClick, brandFontClass }: ProductViewProps) {
  // Products list mimicking custom humane interfaces
  const products: ProductItem[] = [
    {
      id: 'core-engine',
      name: 'Fluxora Core Portal',
      tagline: 'Decentralized Humane Orchestrator',
      description: 'The master runtime engine that distributes reactive interfaces across multiple node streams. Built specifically to scale standard SPA frameworks into real-time collaborative workspaces.',
      features: [
        'Reactive interface sync with <0.8ms latency',
        'Built-in structural sandboxing layers',
        'Native device sensory integration endpoints',
        'Adaptive rendering fallback triggers'
      ],
      icon: Cpu,
      metricCode: 'FLX-PORTAL-v5',
      performanceStat: 'Render Loop Latency',
      performanceValue: 0.72,
      performanceSuffix: 'ms',
      gradientFrom: 'from-orange-500/20',
      gradientTo: 'to-red-500/10'
    },
    {
      id: 'cognitive-flow',
      name: 'Cognitive Flow Optimizer',
      tagline: 'Cognitive Load Reduction Algorithm',
      description: 'An intelligent pipeline that analyzes user cursor hesitation and scroll tension, automatically restructuring layout weights to eliminate interface friction.',
      features: [
        'Dynamic layout stress modeling',
        'Adaptive viewport weight reflows',
        'Cognitive load telemetry triggers',
        'Unrequested scroll pacing prevention'
      ],
      icon: Fingerprint,
      metricCode: 'FLX-COGNITIVE-x1',
      performanceStat: 'Attention Friction Index',
      performanceValue: 0.04,
      performanceSuffix: 'μ',
      gradientFrom: 'from-amber-500/20',
      gradientTo: 'to-rose-500/10'
    },
    {
      id: 'synthesis',
      name: 'Aesthetic Synthesizer',
      tagline: 'Design Token Convergence Platform',
      description: 'The creative core framework that generates custom fluid layouts. Bridges the gap between rigid CSS definitions and warm, responsive layout aesthetics.',
      features: [
        'Hand-drawn celestial wire-frame assets',
        'Dynamic color-space mapping variables',
        'Responsive SVG winding line generators',
        'Automatic contrast accessibility weights'
      ],
      icon: Layers,
      metricCode: 'FLX-AESTHETIC-v2',
      performanceStat: 'Visual Harmony Weight',
      performanceValue: 99.8,
      performanceSuffix: '%',
      gradientFrom: 'from-rose-500/20',
      gradientTo: 'to-violet-500/10'
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState<string>('core-engine');
  const [simulationActive, setSimulationActive] = useState<boolean>(true);
  const [empathyCalibrator, setEmpathyCalibrator] = useState<number>(85);
  const [pulseCounter, setPulseCounter] = useState<number>(942001);

  const activeProduct = products.find(p => p.id === selectedProduct) || products[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (simulationActive) {
      interval = setInterval(() => {
        setPulseCounter(prev => prev + Math.floor(Math.random() * 5) + 1);
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [simulationActive]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto px-6 pt-4 pb-20 relative z-10 flex flex-col items-center text-left"
    >
      {/* Upper Navigation link */}
      <div className="w-full mb-8 flex justify-start">
        <button
          onClick={onBackClick}
          className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-[#D1D5DB] hover:text-white rounded-full text-xs font-mono border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO CORE PORTAL</span>
        </button>
      </div>

      {/* 1. Header Capsule Tag / Badge */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 h-8 bg-black/80 backdrop-blur-md rounded-full border border-orange-500/20 text-xs font-mono text-orange-400 font-medium mb-8 hover:border-orange-500/40 cursor-help transition-colors select-none"
      >
        <Workflow className="w-3.5 h-3.5 animate-spin-slow text-orange-500" />
        <span className="tracking-wide">Dynamic Interactive Product Suite</span>
      </motion.div>

      {/* 2. Headline with High-Contrast Typography Pairings */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[2.2rem] sm:text-[3.6rem] md:text-[4.8rem] font-bold text-center leading-[1.08] text-white tracking-tight max-w-4xl font-display mb-6"
      >
        Engineered for delight.<br />Our suite of <span className="text-gradient-all font-serif-italic font-bold italic mr-1">humane</span> <span className="text-gradient-machines transition-all duration-300">digital instruments.</span>
      </motion.h1>

      {/* 3. Detailed paragraph block */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-400 font-sans text-sm sm:text-base md:text-[1.05rem] text-center max-w-2xl leading-relaxed mb-16"
      >
        Discover our core instruments. Each product is engineered to put aesthetic clarity and performance weight exactly where they belong: directly at our fingers and eyes.
      </motion.p>

      {/* Bento Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-16 items-stretch">
        
        {/* Left Side: Product Tab Selectors (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-widest text-[#9CA3AF] uppercase mb-4">
              AVAILABLE PRODUCTS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {products.map((prod) => {
                const ProdIcon = prod.icon;
                const isSelected = selectedProduct === prod.id;

                return (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod.id)}
                    className={`w-full text-left p-6 rounded-[22px] border transition-all duration-300 select-none cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? 'bg-orange-500/[0.04] border-orange-500/40 text-white shadow-xl'
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/12 hover:text-white'
                    }`}
                  >
                    <div className="flex items-start gap-4 z-10 relative">
                      <div className={`p-3 rounded-xl border ${
                        isSelected ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-white/5 border-white/5 text-zinc-500 group-hover:text-stone-300'
                      }`}>
                        <ProdIcon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold tracking-tight text-white mb-0.5">
                            {prod.name}
                          </h4>
                          <span className="text-[9px] font-mono text-zinc-600">
                            [{prod.metricCode}]
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-2">
                          {prod.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Active highlight side element */}
                    {isSelected && (
                      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#de2c13] to-[#ea580c]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Live Status Monitor */}
          <div className="bg-[#070708]/80 backdrop-blur-2xl border border-white/10 rounded-[22px] p-6 text-left relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
              <svg className="w-full h-full" width="100%" height="100%">
                <pattern id="prodGrid" width="16" height="16" patternUnits="userSpaceOnUse">
                  <path d="M 16 0 L 0 0 0 16" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#prodGrid)" />
              </svg>
            </div>

            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">LIVE TELEMETRY CALIBRATION</span>
              </div>
              <button 
                onClick={() => setSimulationActive(!simulationActive)}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 hover:border-white/20 text-stone-300 transition-colors bg-white/5 active:scale-95 cursor-pointer"
              >
                {simulationActive ? 'Pause Ticker' : 'Resume'}
              </button>
            </div>

            <div className="space-y-4 relative z-10">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-gray-400 mb-1">
                  <span>Empathy Weight Ratio</span>
                  <span className="text-orange-400">{empathyCalibrator}%</span>
                </div>
                <input 
                  type="range"
                  min="50"
                  max="100"
                  value={empathyCalibrator}
                  onChange={(e) => setEmpathyCalibrator(Number(e.target.value))}
                  className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize accent-orange-500 transition-all focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(239, 68, 68) ${empathyCalibrator}%, rgb(31, 41, 55) ${empathyCalibrator}%, rgb(31, 41, 55) 100%)`
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5 text-[11px] font-mono">
                <div>
                  <div className="text-zinc-500 mb-0.5">Total Decoded Streams</div>
                  <div className="text-white font-medium">{pulseCounter.toLocaleString()}+</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-0.5">Signal Quality</div>
                  <div className="text-emerald-400 font-medium">99.98% Consistent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Showcase Active Product details inside high-end glass panel (Span 7) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`h-full bg-[#070708]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Decorative radial overlay matching selected product styles */}
              <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr ${activeProduct.gradientFrom} ${activeProduct.gradientTo} filter blur-3xl opacity-20 pointer-events-none`} />

              {/* Top Meta info block */}
              <div className="z-10 flex items-center justify-between border-b border-white/5 pb-6">
                <div>
                  <span className="text-[10px] font-mono text-orange-400 uppercase tracking-widest block mb-0.5">
                    SPECIFICATIONS PANEL
                  </span>
                  <div className="text-[11px] font-mono text-zinc-500">
                    ID: {activeProduct.metricCode}
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <span className="inline-block px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono rounded">
                    COMPILE OK
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-mono rounded">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Product main descriptions */}
              <div className="my-8 z-10">
                <div className="mb-6">
                  <h4 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                    {activeProduct.name}
                  </h4>
                  <p className="text-sm text-orange-400 font-mono tracking-tight font-medium">
                    {activeProduct.tagline}
                  </p>
                </div>

                <p className="text-gray-300 font-sans text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl">
                  {activeProduct.description}
                </p>

                {/* Bullet Features exactly utilizing visual parameters */}
                <div className="space-y-3.5">
                  <h5 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                    CORE CAPABILITIES
                  </h5>
                  {activeProduct.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Indicator Readouts */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between text-xs font-mono text-zinc-500 z-10 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 px-2.5 rounded bg-zinc-900 border border-white/10 text-stone-200">
                    {activeProduct.performanceStat}
                  </div>
                  <div className="text-white font-bold text-sm sm:text-base tracking-tight">
                    {(activeProduct.performanceValue * (empathyCalibrator / 100)).toFixed(2)}
                    <span className="text-orange-500 font-normal ml-0.5">{activeProduct.performanceSuffix}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span>DECRYPT: SH_EM_CORE</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Human design manifesto CTA block */}
      <div className="w-full bg-white/[0.01] border border-white/[0.04] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
        <div className="max-w-xl">
          <h4 className="text-lg font-bold text-white tracking-tight mb-2 flex items-center gap-2">
            <Heart className="w-5 h-5 text-orange-500 animate-[pulse_2s_infinite]" />
            Form engineered around human touch grids.
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Ready to integrate the high-fidelity dynamic capabilities of Fluxora into your existing product lines? Speak to one of our lead solution architects.
          </p>
        </div>

        <button
          onClick={onBackClick}
          className="group flex items-center justify-between bg-gradient-to-r from-[#de2c13] via-[#e24419] to-[#ea580c] hover:opacity-95 text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium transition-all duration-300 shadow-lg active:scale-95 text-sm gap-8 relative overflow-hidden h-[54px] w-full md:w-auto shrink-0 cursor-pointer"
        >
          <span className="relative z-10 font-[500] select-none">Access Sandbox Core</span>
          <span className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0 transition-transform duration-500 group-hover:rotate-45">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>

      {/* Premium Integrated Footer within the View Section */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 w-full relative z-20">
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

    </motion.div>
  );
}
