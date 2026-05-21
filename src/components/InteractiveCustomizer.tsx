/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sliders, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface InteractiveCustomizerProps {
  humanLevel: number;
  setHumanLevel: (val: number) => void;
  onReset: () => void;
}

export default function InteractiveCustomizer({ humanLevel, setHumanLevel, onReset }: InteractiveCustomizerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-4 xs:p-5 sm:p-6 max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden"
    >
      {/* Background glow strip */}
      <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-red-500/5 blur-2xl rounded-full" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-orange-500" />
          <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
            Aesthetic Calibration
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-gray-500 hover:text-white transition-colors cursor-pointer"
          title="Reset Calibration"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Concept statement */}
      <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
        Fluxora stands for technology forged for <span className="text-white font-medium">real humans</span>, not computing grids. Slide the parameter to witness code transition into experience.
      </p>

      {/* Slider Control */}
      <div className="space-y-3">
        <div className="flex justify-between text-[11px] font-mono">
          <span className={humanLevel < 40 ? "text-orange-400" : "text-gray-500"}>
            [0] Automated Grid
          </span>
          <span className={humanLevel >= 40 ? "text-orange-500 font-medium" : "text-gray-500"}>
            [{humanLevel}%] Humane Design
          </span>
        </div>

        {/* Custom Slider Input */}
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={humanLevel}
            onChange={(e) => setHumanLevel(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-ew-resize accent-orange-500 transition-all focus:outline-none"
            style={{
              background: `linear-gradient(to right, rgb(249, 115, 22) 0%, rgb(239, 68, 68) ${humanLevel}%, rgb(31, 41, 55) ${humanLevel}%, rgb(31, 41, 55) 100%)`
            }}
          />
        </div>

        {/* Parameters active checklist */}
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 space-y-2 mt-4 text-[11px] font-mono">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Backdrop Heat:</span>
            <span className="text-orange-400">{humanLevel * 5}K Kelvin</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Typography Mood:</span>
            <span className="text-white">
              {humanLevel > 60 ? 'Playfair Italic Serif' : humanLevel > 30 ? 'Inter Semi-Bold' : 'Courier Sans'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Micro-Amplitudes:</span>
            <span className="text-emerald-400">Stable (1.02x)</span>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex items-center gap-1.5 mt-4 text-[10px] text-gray-400">
        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
        <span>Currently calibrated to {humanLevel > 75 ? 'Humane Synthesis' : 'Technical Utility'}</span>
      </div>
    </motion.div>
  );
}
