/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Heart, 
  Eye, 
  Compass, 
  ShieldCheck, 
  Fingerprint, 
  Layers, 
  Cpu, 
  ArrowRight,
  Clock
} from 'lucide-react';

interface AboutViewProps {
  onBackClick: () => void;
  brandFontClass: string;
}

interface Pillar {
  id: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  metricCode: string;
}

export default function AboutView({ onBackClick, brandFontClass }: AboutViewProps) {
  const [selectedPillar, setSelectedPillar] = useState<string>('empathy');
  const [liveManifestoScore, setLiveManifestoScore] = useState(100);

  const pillars: Pillar[] = [
    {
      id: 'empathy',
      title: 'Human Empathy First',
      desc: 'Form follows human psychology. We throw out stiff mathematical layouts to engineer interfaces that respond to natural attention patterns and eye tracking.',
      icon: Heart,
      metricCode: 'EMP-01'
    },
    {
      id: 'vibrancy',
      title: 'Vibrant Feedback loops',
      desc: 'Actions must feel alive. By introducing responsive micro-interactions and warm gradient glows, we make software feel less like mechanical grids and more like tactile glass.',
      icon: Sparkles,
      metricCode: 'VIB-02'
    },
    {
      id: 'transparency',
      title: 'Structural Honesty',
      desc: 'No hidden telemetry bloat or dark patterns. We respect human user intent absolutely, delivering performance metrics openly with fully secure client encryption.',
      icon: ShieldCheck,
      metricCode: 'HON-03'
    },
    {
      id: 'precision',
      title: 'Zero Friction Architecture',
      desc: 'Seconds translate to cognitive fatigue. Our rendering speeds are engineered around instant responses, utilizing lightweight component states to eliminate lag.',
      icon: Cpu,
      metricCode: 'LAT-04'
    }
  ];

  const currentPillarData = pillars.find(p => p.id === selectedPillar) || pillars[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto px-6 pt-4 pb-20 relative z-10 flex flex-col items-center"
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
        <Fingerprint className="w-3.5 h-3.5 animate-pulse text-orange-500" />
        <span className="tracking-wide">Our Human Manifesto</span>
      </motion.div>

      {/* 2. Headline with High-Contrast Typography Pairings */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[2.2rem] sm:text-[3.6rem] md:text-[4.8rem] font-bold text-center leading-[1.08] text-white tracking-tight max-w-4xl font-display mb-6"
      >
        We believe software is <br />
        <span className="text-gradient-all font-serif-italic font-bold italic mr-1">crafted for humans</span>, 
        <span className="text-gradient-machines transition-all duration-300"> not computing grids.</span>
      </motion.h1>

      {/* 3. Detailed paragraph block */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-400 font-sans text-sm sm:text-base md:text-[1.05rem] text-center max-w-2xl leading-relaxed mb-16"
      >
        Fluxora represents a design revolution. In a world crowded with sterile, automated, machine-centric systems, we create digital experiences designed deeply around ergonomic human intent. 
      </motion.p>

      {/* 4. Two-Column Layout: Pillar Buttons Stack vs Core Interactive Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full mb-16 items-stretch">
        
        {/* Left Side: Dynamic Tab Selectors */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-widest text-[#9CA3AF] uppercase mb-4">
              MANIFESTO CORE PRINCIPLES
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {pillars.map((pil) => {
                const PilIcon = pil.icon;
                const isSelected = selectedPillar === pil.id;

                return (
                  <button
                    key={pil.id}
                    onClick={() => setSelectedPillar(pil.id)}
                    className={`w-full flex items-center justify-between p-4.5 rounded-2xl border text-left transition-all duration-300 select-none cursor-pointer hover:scale-[1.01] active:scale-95 ${
                      isSelected 
                        ? 'bg-orange-500/10 border-orange-500/45 text-white shadow-lg' 
                        : 'bg-white/[0.01] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <PilIcon className={`w-5 h-5 ${isSelected ? 'text-orange-500' : 'text-gray-500'}`} />
                        {isSelected && (
                          <span className="absolute -inset-1 bg-orange-500/10 rounded-full blur-[1px] animate-pulse" />
                        )}
                      </div>
                      <span className="text-sm font-semibold tracking-tight">{pil.title}</span>
                    </div>

                    <span className="text-[10px] font-mono text-zinc-600">
                      [{pil.metricCode}]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Calibration Panel in-mini */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-white/5 font-mono select-none text-xl">*</div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">COG-HEAL CALIBRATOR</span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">{liveManifestoScore}% EM-HEALTH</span>
            </div>
            
            <p className="text-[11px] text-gray-400 font-sans leading-normal mb-3">
              Scale our empathy coefficients dynamically. Check corresponding response rendering times.
            </p>

            <input 
              type="range"
              min="20"
              max="100"
              value={liveManifestoScore}
              onChange={(e) => setLiveManifestoScore(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize accent-orange-500 transition-all focus:outline-none"
              style={{
                background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(239, 68, 68) ${liveManifestoScore}%, rgb(31, 41, 55) ${liveManifestoScore}%, rgb(31, 41, 55) 100%)`
              }}
            />
          </div>
        </div>

        {/* Right Side: Visualizing the Principle with Premium glass effect */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full bg-[#070708]/80 backdrop-blur-2xl border border-white/10 rounded-[28px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden text-left"
            >
              {/* Background ambient decorative grid mesh */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.05] select-none z-0">
                <svg className="w-full h-full" width="100%" height="100%">
                  <defs>
                    <pattern id="aboutGridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#aboutGridPattern)" />
                </svg>
              </div>

              {/* Decorative top row */}
              <div className="flex justify-between items-start z-10">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>ACTIVE BLUEPRINT LAYOVER</span>
                </div>
                <div className="text-zinc-500 font-mono text-lg hover:rotate-90 transition-transform duration-300 cursor-help">*</div>
              </div>

              {/* Middle core statements */}
              <div className="my-10 z-10">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-400">
                    {React.createElement(currentPillarData.icon, { className: 'w-6 h-6' })}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                    {currentPillarData.title}
                  </h4>
                </div>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl font-light">
                  {currentPillarData.desc}
                </p>
              </div>

              {/* Live latency formula readout resembling high fidelity custom headers */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-zinc-500 z-10 gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive Frame Speed: </span>
                  <span className="text-[#F18805] font-semibold">{Math.max(1.1, (120 - liveManifestoScore) / 45).toFixed(2)} ms</span>
                </div>
                <div>
                  <span>HASH: </span>
                  <span className="text-white">F_COGNITIVE_EMP_KNL</span>
                </div>
              </div>

              {/* Elegant floating gradient dot */}
              <div className="absolute right-0 top-0 w-36 h-36 bg-orange-500/10 rounded-full filter blur-3xl" />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* 5. Minimal Human Credo Section resembling standard dual columns */}
      <div className="w-full bg-white/[0.01] border border-white/[0.04] rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
        <div className="max-w-xl">
          <h4 className="text-lg font-bold text-white tracking-tight mb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-orange-500" />
            Interested in establishing pristine human standards?
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            We actively support designers, builders, and developers who seek to design digital interactions that align honestly with genuine human values.
          </p>
        </div>

        <button
          onClick={onBackClick}
          className="group flex items-center justify-between bg-gradient-to-r from-[#de2c13] via-[#e24419] to-[#ea580c] hover:opacity-95 text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium transition-all duration-300 shadow-lg active:scale-95 text-sm gap-8 relative overflow-hidden h-[54px] w-full md:w-auto shrink-0 cursor-pointer"
        >
          <span className="relative z-10 font-[500] select-none">Start Humane Project</span>
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
