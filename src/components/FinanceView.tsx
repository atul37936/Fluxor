/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, ArrowRight, TrendingUp, DollarSign, Activity, ChevronRight, Zap, Heart } from 'lucide-react';

interface FinanceViewProps {
  onBackClick: () => void;
  brandFontClass: string;
}

export default function FinanceView({ onBackClick, brandFontClass }: FinanceViewProps) {
  // Counters for the stats
  const [userBaseCount, setUserBaseCount] = useState(0);
  const [transactionVolume, setTransactionVolume] = useState(0);
  const [processingRate, setProcessingRate] = useState(0);
  
  // Custom simulator states for extra engagement
  const [mockSelectedStat, setMockSelectedStat] = useState<string | null>(null);
  const [isLiveTickerActive, setIsLiveTickerActive] = useState(true);
  const [liveVolumeCounter, setLiveVolumeCounter] = useState(1048291003);

  // Animate counters on mount
  useEffect(() => {
    // Animate User Base count to 2 (M)
    const intervalUser = setInterval(() => {
      setUserBaseCount((prev) => {
        if (prev >= 2.0) {
          clearInterval(intervalUser);
          return 2.0;
        }
        return Number((prev + 0.1).toFixed(1));
      });
    }, 60);

    // Animate Transaction Volume to 1 (B)
    const intervalVolume = setInterval(() => {
      setTransactionVolume((prev) => {
        if (prev >= 1) {
          clearInterval(intervalVolume);
          return 1;
        }
        return prev + 0.1;
      });
    }, 120);

    // Animate Processing Rate count to 99%
    const intervalRate = setInterval(() => {
      setProcessingRate((prev) => {
        if (prev >= 99) {
          clearInterval(intervalRate);
          return 99;
        }
        return prev + 3;
      });
    }, 40);

    return () => {
      clearInterval(intervalUser);
      clearInterval(intervalVolume);
      clearInterval(intervalRate);
    };
  }, []);

  // Soft live update stream ticker to look authentic and active
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLiveTickerActive) {
      timer = setInterval(() => {
        setLiveVolumeCounter((prev) => prev + Math.floor(Math.random() * 450) + 50);
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isLiveTickerActive]);

  // Formats large numbers cleanly ($1,048,291,003+)
  const formatVolume = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.99, y: -10 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl w-full mx-auto px-6 pt-4 pb-20 relative z-10 flex flex-col items-center"
    >
      
      {/* Return to Core link at upper left */}
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
        className="inline-flex items-center gap-2 px-4.5 py-1.5 h-8 bg-black/80 backdrop-blur-md rounded-full border border-orange-500/20 text-xs font-mono text-orange-400 font-medium mb-8 hover:border-orange-500/40 cursor-help transition-colors select-none"
      >
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-orange-500" />
        <span className="tracking-wide">Innovative Web3 Solutions</span>
      </motion.div>

      {/* 2. Main High-Contrast Styled Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-[2.2rem] sm:text-[3.6rem] md:text-[4.8rem] font-bold text-center leading-[1.08] text-white tracking-tight max-w-4xl font-display mb-6"
      >
        Revolutionizing finance <br className="hidden sm:block" />
        with <span className="text-gradient-all font-serif-italic font-bold italic mr-1">Web3</span> 
        <span className="text-gradient-machines transition-all duration-300"> technology</span>
      </motion.h1>

      {/* 3. Narrative Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-400 font-sans text-sm sm:text-base md:text-[1.05rem] text-center max-w-xl leading-relaxed mb-10"
      >
        Experience the future of finance with our innovative Web3 fintech startup, built from the ground up prioritizing real human interaction.
      </motion.p>

      {/* 4. Testimonial Avatars Stack */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center gap-3.5 mb-10 bg-white/[0.02] border border-white/5 py-2 px-4 rounded-full"
      >
        <div className="flex -space-x-3">
          {[
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120',
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120&h=120',
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120&h=120',
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=120&h=120',
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Investor User"
              className="w-8.5 h-8.5 rounded-full object-cover border-2 border-[#000] z-20 shrink-0"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-sans text-stone-300">
          <span className="font-semibold text-white tracking-tight">Trusted already by 1.2k+</span>
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
      </motion.div>

      {/* 5. Center Button Segment matching signature pill aesthetics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-5 mb-18 w-full sm:w-auto"
      >
        {/* Rounded Gradient Main button */}
        <button
          onClick={onBackClick}
          className="group flex items-center justify-between bg-gradient-to-r from-[#de2c13] via-[#e24419] to-[#ea580c] hover:opacity-95 text-white pl-6 pr-1.5 py-1.5 rounded-full font-medium transition-all duration-300 shadow-lg shadow-orange-950/20 active:scale-95 text-sm gap-8 relative overflow-hidden h-[54px] w-full sm:w-auto min-w-[200px] cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="relative z-10 font-[500] tracking-tight">Access Dashboard</span>
          <span className="relative z-10 w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shrink-0 transition-transform duration-500 group-hover:rotate-45">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>

        {/* Dynamic Light outline counterpart button */}
        <button
          onClick={() => setIsLiveTickerActive(!isLiveTickerActive)}
          className="px-8 h-[54px] rounded-full border border-white/10 hover:border-white/25 hover:bg-white/5 active:scale-95 transition-all duration-300 text-sm font-semibold tracking-tight text-white cursor-pointer w-full sm:w-auto"
        >
          {isLiveTickerActive ? "Pause Live Sync" : "Enable Live Sync"}
        </button>
      </motion.div>

      {/* Grid Mesh Stats Panel - Beautiful 3 Column Division exactly matching Web3 reference design */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="w-full bg-[#070708]/80 backdrop-blur-2xl border border-white/10 rounded-[28px] overflow-hidden relative"
      >
        {/* Dynamic SVG Grid Background embedded inside the panel */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-color-dodge select-none z-0">
          <svg className="w-full h-full" width="100%" height="100%">
            <defs>
              <pattern id="gridPattern" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
        </div>

        {/* Core panel dividing lines and contents */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          
          {/* Card 1: User Base */}
          <div 
            onClick={() => setMockSelectedStat('users')}
            className={`p-10 flex flex-col items-center justify-between min-h-[220px] transition-all duration-300 cursor-pointer select-none group relative overflow-hidden ${
              mockSelectedStat === 'users' ? 'bg-orange-500/[0.04]' : 'hover:bg-white/[0.01]'
            }`}
          >
            <div className="text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-4 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
              <span>Global User Base</span>
            </div>
            
            <div className="my-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display flex items-baseline justify-center">
                <span className="text-orange-500 mr-0.5">+</span>
                <span>{userBaseCount}</span>
                <span className="text-orange-500 text-3xl ml-0.5">M</span>
              </div>
            </div>

            <div className="text-xs text-stone-400 font-mono tracking-wide mt-2">
              Verified active nodes
            </div>

            {/* Micro accent decor */}
            <div className="absolute top-2 right-2 text-white/10 group-hover:text-white/20 transition-colors font-mono select-none">*</div>
          </div>

          {/* Card 2: Transaction Volume */}
          <div 
            onClick={() => setMockSelectedStat('volume')}
            className={`p-10 flex flex-col items-center justify-between min-h-[220px] transition-all duration-300 cursor-pointer select-none group relative overflow-hidden ${
              mockSelectedStat === 'volume' ? 'bg-orange-500/[0.04]' : 'hover:bg-white/[0.01]'
            }`}
          >
            <div className="text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-4 flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-orange-500" />
              <span>Transaction Volume</span>
            </div>

            <div className="my-6 flex flex-col items-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display flex items-baseline justify-center">
                <span className="text-orange-500 mr-0.5">+</span>
                <span className="text-orange-500 mr-0.5">$</span>
                <span>{transactionVolume}</span>
                <span className="text-orange-500 text-3xl ml-0.5">B</span>
              </div>
              
              {/* Pulse counter ticker in real dollars */}
              <AnimatePresence>
                {isLiveTickerActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[10px] font-mono text-emerald-400 mt-2 tracking-widest uppercase flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Live Stream: {formatVolume(liveVolumeCounter)}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="text-xs text-stone-400 font-mono tracking-wide mt-2">
              Aggregated secure flow
            </div>

            <div className="absolute top-2 right-2 text-white/10 group-hover:text-white/20 transition-colors font-mono select-none">*</div>
          </div>

          {/* Card 3: Fast Processing */}
          <div 
            onClick={() => setMockSelectedStat('processing')}
            className={`p-10 flex flex-col items-center justify-between min-h-[220px] transition-all duration-300 cursor-pointer select-none group relative overflow-hidden ${
              mockSelectedStat === 'processing' ? 'bg-orange-500/[0.04]' : 'hover:bg-white/[0.01]'
            }`}
          >
            <div className="text-[11px] font-mono tracking-widest text-[#9CA3AF] uppercase mb-4 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-orange-500" />
              <span>High-Speed Processing</span>
            </div>

            <div className="my-6">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display flex items-baseline justify-center">
                <span>{processingRate}</span>
                <span className="text-orange-500 text-3xl ml-0.5">%</span>
              </div>
            </div>

            <div className="text-xs text-stone-400 font-mono tracking-wide mt-2">
              Faster transactions
            </div>

            <div className="absolute top-2 right-2 text-white/10 group-hover:text-white/20 transition-colors font-mono select-none">*</div>
          </div>

        </div>
      </motion.div>

      {/* Info popups clarifying customized details based on selected stats */}
      <AnimatePresence>
        {mockSelectedStat && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full max-w-lg mt-6 bg-white/[0.02] border border-white/10 rounded-2xl p-4.5 flex items-start gap-4"
          >
            <Zap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5 animate-pulse" />
            <div className="flex-1 text-left">
              <h4 className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold mb-1">
                {mockSelectedStat === 'users' ? 'Network Node Allocation' : mockSelectedStat === 'volume' ? 'Decentralized Audit Trail' : 'Micro-State Speed Sync'}
              </h4>
              <p className="text-xs text-gray-400 leading-normal">
                {mockSelectedStat === 'users' 
                  ? 'Representing unique distributed client layers connected instantly. This live value highlights Fluxora humane integrations responding seamlessly with low-latency rendering cycles.' 
                  : mockSelectedStat === 'volume' 
                    ? 'Total logged ledger state assets transacted globally. Actively updated using secure webhooks connected to real cloud servers for maximum operational consistency.'
                    : 'Transaction latency engineered strictly within sub-millisecond ranges, using lightweight Vite structures and optimized React hooks preventing unrequested rendering chains.'}
              </p>
            </div>
            <button 
              onClick={() => setMockSelectedStat(null)}
              className="text-gray-500 hover:text-white text-xs font-mono transition-colors border border-white/10 hover:border-white/20 rounded px-2 py-0.5 cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
