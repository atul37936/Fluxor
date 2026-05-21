/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Users, 
  FolderSync, 
  Eye, 
  CheckCircle, 
  Megaphone, 
  Settings, 
  BarChart3,
  MousePointerClick,
  Info,
  Heart
} from 'lucide-react';

interface HowItWorksViewProps {
  onBackClick: () => void;
  brandFontClass: string;
}

interface Step {
  id: number;
  label: string;
  fluxoraLabel: string;
  desc: string;
  fluxoraDesc: string;
  icon: React.ComponentType<any>;
  color: string;
  accentClass: string;
  glowClass: string;
  // coordinate positions for desktop winding layout
  x: string; 
  y: string;
  textPosition: 'top' | 'bottom' | 'left' | 'right';
  metricCode: string;
}

export default function HowItWorksView({ onBackClick, brandFontClass }: HowItWorksViewProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [processMode, setProcessMode] = useState<'humane' | 'standard'>('humane');
  const [isWindingLineHovered, setIsWindingLineHovered] = useState(false);

  // Steps matching the reference image process pipeline
  const steps: Step[] = [
    {
      id: 1,
      label: "Assigning",
      fluxoraLabel: "Empathy Allocation",
      desc: "The first step in the content creation process is assigning content to writers.",
      fluxoraDesc: "Mapping project requirements to engineering streams centered strictly on end-user cognitive patterns.",
      icon: Users,
      color: "#10B981", // Emerald / Green
      accentClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/10",
      glowClass: "shadow-emerald-500/20 bg-emerald-500",
      x: "10%",
      y: "65%",
      textPosition: "top",
      metricCode: "ALLOC-01"
    },
    {
      id: 2,
      label: "Submitting / Receiving",
      fluxoraLabel: "Interaction Ingestion",
      desc: "The next part of the process is when a writer submits content and a manager receives it.",
      fluxoraDesc: "Synthesizing reactive micro-interactions, ingesting interface requirements dynamically into visual components.",
      icon: FolderSync,
      color: "#06B6D4", // Cyan
      accentClass: "border-cyan-500/20 text-cyan-400 bg-cyan-500/10",
      glowClass: "shadow-cyan-500/20 bg-cyan-500",
      x: "24%",
      y: "75%",
      textPosition: "bottom",
      metricCode: "INGEST-02"
    },
    {
      id: 3,
      label: "Reviewing",
      fluxoraLabel: "Friction Optimization",
      desc: "Next up: reviewing what the writer wrote.",
      fluxoraDesc: "Analyzing interface feedback loops, auditing layouts to immediately strip out mechanical stiffness.",
      icon: Eye,
      color: "#3B82F6", // Blue
      accentClass: "border-blue-500/20 text-blue-400 bg-blue-500/10",
      glowClass: "shadow-blue-500/20 bg-blue-500",
      x: "38%",
      y: "40%",
      textPosition: "top",
      metricCode: "AUDIT-03"
    },
    {
      id: 4,
      label: "Approving & Publishing",
      fluxoraLabel: "Humane Synthesis Pass",
      desc: "Let the writer know their content is being approved and publish it.",
      fluxoraDesc: "Full design token reconciliation, generating warm aesthetic layouts and shipping them to production layers.",
      icon: CheckCircle,
      color: "#8B5CF6", // Violet / Purple
      accentClass: "border-violet-500/20 text-violet-400 bg-violet-500/10",
      glowClass: "shadow-violet-500/20 bg-violet-500",
      x: "52%",
      y: "55%",
      textPosition: "bottom",
      metricCode: "SYNTH-04"
    },
    {
      id: 5,
      label: "Promoting",
      fluxoraLabel: "Aesthetic Propagation",
      desc: "We can't just release content into the wild without helping it fly. We need to promote it on different platforms.",
      fluxoraDesc: "Scaling digital experiences natively, distributing interfaces that fluidly match dynamic screen parameters.",
      icon: Megaphone,
      color: "#EC4899", // Pink
      accentClass: "border-pink-500/20 text-pink-400 bg-pink-500/10",
      glowClass: "shadow-pink-500/20 bg-pink-500",
      x: "66%",
      y: "35%",
      textPosition: "top",
      metricCode: "PROP-05"
    },
    {
      id: 6,
      label: "Reporting & Analyzing",
      fluxoraLabel: "Cognitive Resonance Tuning",
      desc: "Let your analysis inform content edits for previous content as well as topics and concepts for new content.",
      fluxoraDesc: "Gleaning deep usage satisfaction metrics non-invasively, informing iterative designs for subsequent layouts.",
      icon: BarChart3,
      color: "#D946EF", // Fuchsia / Magenta
      accentClass: "border-fuchsia-500/20 text-fuchsia-400 bg-fuchsia-500/10",
      glowClass: "shadow-fuchsia-500/20 bg-fuchsia-500",
      x: "66%",
      y: "75%",
      textPosition: "bottom",
      metricCode: "RESON-06"
    },
    {
      id: 7,
      label: "Maintaining",
      fluxoraLabel: "Continuous Revitalization",
      desc: "You need to update it when you discover that it's not performing as you had hoped, and just to keep it fresh and relevant.",
      fluxoraDesc: "Self-healing optimization sweeps keeping components robust, fast, and continuously optimized for real human eyes.",
      icon: Settings,
      color: "#F43F5E", // Rose
      accentClass: "border-rose-500/20 text-rose-400 bg-rose-500/10",
      glowClass: "shadow-rose-500/20 bg-rose-500",
      x: "88%",
      y: "50%",
      textPosition: "right",
      metricCode: "MAINT-07"
    }
  ];

  const currentStepData = steps[activeStep - 1] || steps[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto px-6 pt-4 pb-20 relative z-10 flex flex-col"
    >
      
      {/* Return to Core link at upper left */}
      <div className="w-full mb-8 flex justify-between items-center">
        <button
          onClick={onBackClick}
          className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-[#D1D5DB] hover:text-white rounded-full text-xs font-mono border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO CORE PORTAL</span>
        </button>

        {/* Mode Toggle Selector */}
        <div className="bg-white/[0.02] border border-white/10 rounded-full p-1 flex items-center relative z-20">
          <button
            onClick={() => setProcessMode('humane')}
            className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer ${
              processMode === 'humane' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Humane Process
          </button>
          <button
            onClick={() => setProcessMode('standard')}
            className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all cursor-pointer ${
              processMode === 'standard' ? 'bg-orange-600 text-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            Content Process (Reference)
          </button>
        </div>
      </div>

      {/* Main Grid: Info Section & Sinuous Canvas visual list */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Side: Header & Detail Card */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          
          <div>
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400 rounded-full mb-4 uppercase tracking-wider"
            >
              <Sparkles className="w-3 h-3 text-orange-500" />
              <span>Pipeline architecture</span>
            </motion.div>

            {/* Main Headline */}
            <h2 className="text-[2.2rem] sm:text-[3rem] font-bold leading-[1.1] font-display text-white mb-4">
              {processMode === 'humane' ? 'Interface Creation Lifecycle' : 'Content Creation Process'}
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed font-sans">
              {processMode === 'humane' 
                ? 'Underlying development architecture prioritizing human factors. Every interface pixel undergoes continuous validation steps to eliminate user cognitive load.'
                : 'A visual walkthrough of the content supply chain, mapping stages from initial writer assignment to performance audits and self-healing iterations.'
              }
            </p>
          </div>

          {/* Interactive Active Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep + processMode}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className={`bg-white/[0.01] border hover:border-white/15 transition-all duration-300 rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between`}
              style={{ borderColor: `${currentStepData.color}33` }}
            >
              {/* Background gradient corresponding to the active step */}
              <div 
                className="absolute right-0 bottom-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none"
                style={{ background: currentStepData.color }}
              />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${currentStepData.accentClass}`}>
                    {currentStepData.id}
                  </span>
                  <span className="text-[9px] font-mono text-gray-400 tracking-widest uppercase">
                    [{currentStepData.metricCode}]
                  </span>
                </div>

                <div 
                  className="p-1 px-2 border rounded-md text-[10px] font-mono tracking-wider transition-all"
                  style={{ borderColor: `${currentStepData.color}40`, color: currentStepData.color }}
                >
                  ACTIVE LAYER
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                  <currentStepData.icon className="w-5 h-5 shrink-0" style={{ color: currentStepData.color }} />
                  {processMode === 'humane' ? currentStepData.fluxoraLabel : currentStepData.label}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed min-h-[72px]">
                  {processMode === 'humane' ? currentStepData.fluxoraDesc : currentStepData.desc}
                </p>
              </div>

              {/* Interaction Callout Info */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Interact with any timeline bubble to analyze telemetry configs.</span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right Side: Desktop Snake Loop or Mobile Vertical Timeline */}
        <div className="lg:col-span-8 flex flex-col justify-center relative min-h-[460px] lg:min-h-[520px] bg-white/[0.01] border border-white/[0.04] rounded-[32px] p-4 sm:p-6 lg:p-1 lg:overflow-hidden select-text lg:select-none">
          
          {/* Subtle instruction label */}
          <div className="absolute top-4 right-6 text-[9px] font-mono text-gray-500 tracking-wider flex items-center gap-1 lg:flex hidden">
            <MousePointerClick className="w-3.5 h-3.5 text-orange-500 animate-bounce" />
            <span>Click nodes to inspect stream parameters</span>
          </div>

          {/* Sinuous layout shown on desktop (lg and above) */}
          <div className="hidden lg:block absolute inset-0 w-full h-full p-8">
            
            {/* SVG Connecting Curves */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Define path matching the serpentine shape */}
              <path 
                d="M 80 325 
                   C 140 325, 140 375, 192 375 
                   C 240 375, 260 200, 304 200 
                   C 360 200, 360 275, 416 275 
                   C 470 275, 470 175, 528 175 
                   C 570 175, 528 375, 528 375
                   C 528 375, 540 375, 580 375
                   C 630 375, 660 225, 704 225
                   "
                stroke="rgba(255,255,255,0.06)" 
                strokeWidth="11" 
                strokeLinecap="round"
              />
              <path 
                d="M 80 325 
                   C 140 325, 140 375, 192 375 
                   C 240 375, 260 200, 304 200 
                   C 360 200, 360 275, 416 275 
                   C 470 275, 470 175, 528 175 
                   C 570 175, 528 375, 528 375
                   C 528 375, 540 375, 580 375
                   C 630 375, 660 225, 704 225
                   "
                stroke="url(#snakeGradient)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                className="transition-all duration-300"
                style={{
                  strokeDasharray: isWindingLineHovered ? "200% 0" : "15 15",
                  animation: !isWindingLineHovered ? "dashMovement 4s linear infinite" : "none"
                }}
              />

              {/* Embedded CSS for the path animated dashed line */}
              <defs>
                <linearGradient id="snakeGradient" x1="0" y1="0" x2="800" y2="500" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="20%" stopColor="#06B6D4" />
                  <stop offset="41%" stopColor="#3B82F6" />
                  <stop offset="58%" stopColor="#8B5CF6" />
                  <stop offset="72%" stopColor="#EC4899" />
                  <stop offset="85%" stopColor="#D946EF" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
              </defs>
            </svg>

            {/* Loop and render step circles onto coordinates relative to the path */}
            {steps.map((st) => {
              const StepIcon = st.icon;
              const isActive = activeStep === st.id;
              
              const stepStyles = {
                left: st.x,
                top: st.y,
              };

              return (
                <div 
                  key={st.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group"
                  style={stepStyles}
                >
                  
                  {/* Glowing active animation backdrop aura */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        layoutId="activeGlowBackdrop"
                        className="absolute inset-[-14px] rounded-full filter blur-[15px] opacity-40 z-0"
                        style={{ backgroundColor: st.color }}
                        transition={{ type: "spring", stiffness: 150, damping: 25 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Subtly connecting line links for secondary text details as seen in reference image */}
                  <div 
                    className={`absolute flex flex-col w-[170px] pointer-events-none select-none transition-all duration-300 ${
                      st.textPosition === 'top' 
                        ? 'bottom-12 -translate-x-[65px] items-center text-center' 
                        : st.textPosition === 'bottom' 
                          ? 'top-12 -translate-x-[65px] items-center text-center'
                          : st.textPosition === 'left'
                            ? 'right-12 -translate-y-1/2 items-end text-right'
                            : 'left-12 -translate-y-1/2 items-start text-left'
                    }`}
                  >
                    {/* Tiny connecting line decoration */}
                    <div 
                      className={`h-4 w-[1px] ${
                        st.textPosition === 'bottom' ? 'order-first' : 'order-last'
                      }`} 
                      style={{ background: `linear-gradient(to top, transparent, ${st.color})` }}
                    />

                    {/* Step Name Tag */}
                    <span 
                      className="text-xs font-semibold tracking-tight transition-colors duration-200"
                      style={{ color: isActive ? '#fff' : '#9CA3AF' }}
                    >
                      {processMode === 'humane' ? st.fluxoraLabel : st.label}
                    </span>

                    {/* Highly descriptive label subtag */}
                    <span className="text-[9px] font-mono text-zinc-500/80 mt-0.5 tracking-wider">
                      [{st.metricCode}]
                    </span>
                  </div>

                  {/* Trigger Circle element */}
                  <button
                    onClick={() => setActiveStep(st.id)}
                    onMouseEnter={() => setIsWindingLineHovered(true)}
                    onMouseLeave={() => setIsWindingLineHovered(false)}
                    className="relative w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 cursor-pointer z-10"
                    style={{
                      backgroundColor: isActive ? st.color : '#000',
                      borderColor: isActive ? st.color : 'rgba(255,255,255,0.18)',
                      boxShadow: isActive ? `0 0 20px ${st.color}50` : 'none'
                    }}
                  >
                    <span className={`text-sm font-semibold font-mono ${isActive ? 'text-black' : 'text-stone-300'}`}>
                      {st.id}
                    </span>

                    {/* Hover text preview popover */}
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/20 p-2 text-[10px] rounded-lg tracking-normal text-white w-32 left-full ml-3 pointer-events-none font-sans shadow-xl">
                      <div className="font-semibold mb-0.5 flex items-center gap-1">
                        <StepIcon className="w-3 h-3 text-orange-400" />
                        {processMode === 'humane' ? st.fluxoraLabel : st.label}
                      </div>
                      <p className="text-[9px] text-gray-400 leading-normal line-clamp-2">
                        {processMode === 'humane' ? st.fluxoraDesc : st.desc}
                      </p>
                    </div>
                  </button>

                  {/* Flying decoration icon indicator above node */}
                  <StepIcon 
                    className={`absolute -top-7 -right-7 w-3.5 h-3.5 transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-110 text-white' : 'opacity-25 scale-90 text-stone-400'
                    }`}
                    style={{ color: isActive ? st.color : undefined }}
                  />

                </div>
              );
            })}

          </div>

          {/* Connected timeline layout showed purely on mobile (small screens) */}
          <div className="block lg:hidden space-y-6 select-text">
            {steps.map((st) => {
              const StepIcon = st.icon;
              const isActive = activeStep === st.id;

              return (
                <div 
                  key={st.id}
                  onClick={() => setActiveStep(st.id)}
                  className={`flex gap-4 p-4.5 rounded-2xl border transition-all duration-300 ${
                    isActive 
                      ? 'bg-white/[0.03] border-white/15' 
                      : 'bg-transparent border-transparent hover:border-white/5'
                  }`}
                >
                  {/* Left Circle identifier and line chain */}
                  <div className="flex flex-col items-center">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm tracking-tight border font-bold z-10 shrink-0"
                      style={{
                        backgroundColor: isActive ? st.color : '#000',
                        borderColor: st.color,
                        color: isActive ? '#000' : '#fff'
                      }}
                    >
                      {st.id}
                    </div>
                    {st.id < 7 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-stone-700 to-transparent mt-2 h-14" />
                    )}
                  </div>

                  {/* Right side textual variables */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                        <StepIcon className="w-4 h-4 text-orange-400" style={{ color: st.color }} />
                        {processMode === 'humane' ? st.fluxoraLabel : st.label}
                      </h4>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none">
                        [{st.metricCode}]
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 leading-normal">
                      {processMode === 'humane' ? st.fluxoraDesc : st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

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

      {/* CSS Animation declaration */}
      <style>{`
        @keyframes dashMovement {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>

    </motion.div>
  );
}
