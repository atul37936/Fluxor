/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  value: number;
  suffix: string;
  metricCode: string;
  label: string;
  colorTheme: 'warm' | 'maroon';
}

export default function StatCard({ value, suffix, metricCode, label, colorTheme }: StatCardProps) {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const duration = 1.6; // seconds
    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(timer);
        setCurrentVal(end);
      } else {
        setCurrentVal(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  const cardStyle = colorTheme === 'maroon' 
    ? 'card-glow-bg-2 hover:border-orange-500/30' 
    : 'card-glow-bg-1 hover:border-white/20';

  const glowDotColor = colorTheme === 'maroon' ? 'bg-orange-500' : 'bg-white/40';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full sm:w-[220px] aspect-[4/3] rounded-[24px] p-6 pb-5 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${cardStyle}`}
    >
      {/* Background ambient subtle circle */}
      <div className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-20 ${
        colorTheme === 'maroon' ? 'bg-red-500' : 'bg-amber-500'
      }`} />

      {/* Top section: Asterisk & Ambient element */}
      <div className="flex justify-between items-start">
        <span className="text-gray-400 font-mono text-[10px] tracking-widest">{metricCode}</span>
        {/* Asterisk / Star icon */}
        <span className="text-gray-400 font-mono text-lg font-light leading-none transition-transform duration-500 group-hover:rotate-180 select-none">
          *
        </span>
      </div>

      {/* Middle/Bottom section: Value and Label */}
      <div className="flex flex-col items-start mt-4">
        {/* Big Number */}
        <div className="text-[2.8rem] font-bold tracking-tight text-white font-display leading-none mb-4 flex items-baseline">
          <span>{currentVal}</span>
          <span className="text-2xl text-orange-500 ml-0.5">{suffix}</span>
        </div>

        {/* Mini code tag in brackets */}
        <div className="text-[9px] font-mono text-orange-400/80 mb-0.5 select-none tracking-wider">
          [{metricCode}]
        </div>
        
        {/* Plain text label */}
        <div className="text-sm font-sans font-light text-gray-300 group-hover:text-white transition-colors">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
