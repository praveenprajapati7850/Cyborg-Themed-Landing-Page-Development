import React, { useState, useRef } from 'react';
import { 
  Zap, 
  Target, 
  Activity, 
  Award, 
  RotateCcw, 
  CheckCircle,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';
import { AugmentItem } from '../types';
import { AUGMENT_CATALOG } from '../data/cyberData';

interface NeuralCalibratorProps {
  onLoadRecommendedAugments: (augments: AugmentItem[]) => void;
}

type ReflexState = 'idle' | 'waiting' | 'ready' | 'result' | 'early';

export const NeuralCalibrator: React.FC<NeuralCalibratorProps> = ({
  onLoadRecommendedAugments
}) => {
  const [reflexState, setReflexState] = useState<ReflexState>('idle');
  const [reactionTimeMs, setReactionTimeMs] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<'combat' | 'cognitive' | 'stealth' | 'endurance'>('cognitive');
  const [overclockStrain, setOverclockStrain] = useState<number>(75);

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const startReflexTest = () => {
    cyberAudio.playClick();
    setReflexState('waiting');
    setReactionTimeMs(null);

    const randomDelay = Math.floor(Math.random() * 2000) + 1500; // 1.5s to 3.5s
    timerRef.current = window.setTimeout(() => {
      cyberAudio.playOverclock();
      startTimeRef.current = Date.now();
      setReflexState('ready');
    }, randomDelay);
  };

  const handleBoxClick = () => {
    if (reflexState === 'waiting') {
      // Clicked too early
      if (timerRef.current) clearTimeout(timerRef.current);
      setReflexState('early');
      cyberAudio.playHover();
    } else if (reflexState === 'ready') {
      const timeElapsed = Date.now() - startTimeRef.current;
      setReactionTimeMs(timeElapsed);
      setReflexState('result');
      cyberAudio.playScan();
    }
  };

  const getCompatibilityScore = () => {
    let baseScore = 92;
    if (reactionTimeMs) {
      if (reactionTimeMs < 200) baseScore += 6;
      else if (reactionTimeMs < 250) baseScore += 4;
      else if (reactionTimeMs < 300) baseScore += 2;
    }
    const strainBonus = Math.floor(overclockStrain / 25);
    return Math.min(99.8, baseScore + strainBonus);
  };

  const handleLoadRecommended = () => {
    cyberAudio.playClick();
    let recommended: AugmentItem[] = [];
    if (selectedRole === 'combat') {
      recommended = AUGMENT_CATALOG.filter(a => a.category === 'biomechanical' || a.category === 'defense');
    } else if (selectedRole === 'cognitive') {
      recommended = AUGMENT_CATALOG.filter(a => a.category === 'neural' || a.category === 'sensory');
    } else if (selectedRole === 'stealth') {
      recommended = AUGMENT_CATALOG.filter(a => a.id === 'nx-neural-firewall' || a.id === 'nx-ocular-iris' || a.id === 'nx-dermal-weave');
    } else {
      recommended = AUGMENT_CATALOG.filter(a => a.category === 'locomotion' || a.id === 'nx-fusion-heart' || a.id === 'nx-spinal-conduit');
    }
    onLoadRecommendedAugments(recommended);
  };

  return (
    <section id="neural-lab" className="py-24 relative bg-[#070a10] border-t border-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>// 04. NEURAL CALIBRATION & REFLEX LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wide">
            SYNAPTIC COMPATIBILITY <span className="text-cyan-400">LAB</span>
          </h2>
          <p className="text-slate-400 font-tech text-base">
            Test your real biological reflex latency to calibrate cortical bus frequencies and compute your personalized Cybernetic Operative Classification.
          </p>
        </div>

        {/* Diagnostic Testing Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Reflex Latency Test */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-lg cyber-chamfer border border-slate-800 bg-[#090e18] shadow-xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono-tech font-bold text-white tracking-widest uppercase">
                  MODULE 01: BIOLOGICAL REFLEX IMPULSE BENCHMARK
                </span>
              </div>
              <span className="text-[10px] font-mono-tech text-slate-400">SAMPLE FREQ: 1,000 Hz</span>
            </div>

            {/* Reflex Click Target Arena */}
            <div 
              onClick={handleBoxClick}
              className={`relative cursor-pointer min-h-[260px] rounded-lg cyber-chamfer flex flex-col items-center justify-center p-6 text-center select-none transition-all duration-200 border ${
                reflexState === 'idle'
                  ? 'bg-[#060a12] border-cyan-500/30 hover:border-cyan-400'
                  : reflexState === 'waiting'
                  ? 'bg-amber-950/40 border-amber-500 animate-pulse'
                  : reflexState === 'ready'
                  ? 'bg-cyan-500 text-black border-white shadow-[0_0_40px_#00f0ff]'
                  : reflexState === 'result'
                  ? 'bg-emerald-950/40 border-emerald-500'
                  : 'bg-rose-950/40 border-rose-500'
              }`}
            >
              {reflexState === 'idle' && (
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-full border border-cyan-400/40 bg-cyan-950/60 flex items-center justify-center mx-auto text-cyan-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-display font-bold text-white uppercase">
                    CLICK "ARM TEST" TO BEGIN REFLEX PROBE
                  </div>
                  <p className="text-xs font-mono-tech text-slate-400 max-w-sm mx-auto">
                    When the screen turns electric cyan, click as quickly as possible.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startReflexTest();
                    }}
                    className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-mono-tech text-xs font-bold rounded cyber-chamfer-sm transition-all"
                  >
                    ARM TEST NOW
                  </button>
                </div>
              )}

              {reflexState === 'waiting' && (
                <div className="space-y-2">
                  <div className="text-2xl font-display font-bold text-amber-300 animate-pulse uppercase">
                    CALIBRATING SENSORS...
                  </div>
                  <p className="text-xs font-mono-tech text-amber-200/80">
                    WAIT FOR CYAN FLASH. DO NOT CLICK PREMATURELY.
                  </p>
                </div>
              )}

              {reflexState === 'ready' && (
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-display font-extrabold text-black uppercase tracking-widest animate-bounce">
                    STRIKE NOW!
                  </div>
                  <p className="text-xs font-mono-tech text-black font-bold">
                    CLICK ANYWHERE INSIDE BOX!
                  </p>
                </div>
              )}

              {reflexState === 'result' && (
                <div className="space-y-3">
                  <div className="text-xs font-mono-tech text-emerald-400 uppercase">
                    SYNAPTIC IMPULSE CAPTURED:
                  </div>
                  <div className="text-4xl sm:text-5xl font-mono-tech font-bold text-white">
                    {reactionTimeMs} <span className="text-lg text-emerald-400 font-normal">ms</span>
                  </div>
                  <p className="text-xs font-tech text-slate-300">
                    Organic Baseline: ~250 ms. With NEXUS Cortex Link: <strong className="text-cyan-400">0.08 ms</strong>.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startReflexTest();
                    }}
                    className="flex items-center space-x-1.5 px-4 py-1.5 bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 rounded text-xs font-mono-tech mx-auto transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>RE-TEST LATENCY</span>
                  </button>
                </div>
              )}

              {reflexState === 'early' && (
                <div className="space-y-3">
                  <div className="text-xl font-display font-bold text-rose-400 uppercase">
                    PREMATURE SYNAPSE DISCHARGE!
                  </div>
                  <p className="text-xs font-mono-tech text-slate-300">
                    You clicked before the trigger signal. Relax mental tension.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      startReflexTest();
                    }}
                    className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-black font-mono-tech text-xs font-bold rounded cyber-chamfer-sm transition-all"
                  >
                    RESET & TRY AGAIN
                  </button>
                </div>
              )}
            </div>

            {/* Test Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 pt-4 border-t border-slate-800">
              <span>HARDWARE JITTER: &lt; 0.001 ms</span>
              <span className="text-cyan-400 font-semibold">DIRECT SYNAPTIC SAMPLING</span>
            </div>

          </div>

          {/* Right Column: Operative Profile & Classification Result */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-lg cyber-chamfer border border-cyan-500/30 bg-[#090d16] shadow-xl space-y-6">
            
            <div className="border-b border-slate-800 pb-3">
              <span className="text-xs font-mono-tech text-cyan-400">
                MODULE 02: DEPLOYMENT PROFILE
              </span>
              <h3 className="text-xl font-display font-bold text-white uppercase mt-1">
                OPERATIONAL CLASSIFICATION
              </h3>
            </div>

            {/* Focus Directive Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono-tech text-slate-400 block">
                CHOOSE TACTICAL SPECIALIZATION:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cognitive', label: 'CORTICAL ANALYST' },
                  { id: 'combat', label: 'TACTICAL ASSAULT' },
                  { id: 'stealth', label: 'GHOST INFILTRATION' },
                  { id: 'endurance', label: 'SURVIVAL RIG' },
                ].map((role) => (
                  <button
                    key={role.id}
                    onClick={() => {
                      cyberAudio.playClick();
                      setSelectedRole(role.id as 'combat' | 'cognitive' | 'stealth' | 'endurance');
                    }}
                    className={`p-2 text-xs font-mono-tech rounded cyber-chamfer-sm text-left transition-all ${
                      selectedRole === role.id
                        ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Overclock Tolerance Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-400">OVERCLOCK STRAIN TOLERANCE:</span>
                <span className="text-amber-400 font-bold">+{overclockStrain}%</span>
              </div>
              <input
                type="range"
                min="25"
                max="150"
                step="5"
                value={overclockStrain}
                onChange={(e) => setOverclockStrain(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono-tech text-slate-500">
                <span>CONSERVATIVE</span>
                <span>MAX PROTOCOL (+150%)</span>
              </div>
            </div>

            {/* Computed Score Display */}
            <div className="p-4 bg-[#05080e] rounded border border-cyan-500/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono-tech">
                <span className="text-slate-400">SYNAPTIC COMPATIBILITY:</span>
                <span className="text-cyan-400 font-mono-tech font-bold text-lg">
                  {getCompatibilityScore().toFixed(1)}%
                </span>
              </div>

              <div className="flex items-center space-x-2 pt-1 border-t border-slate-800">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-mono-tech text-slate-400">ASSIGNED RATING:</div>
                  <div className="text-sm font-display font-bold text-white">
                    {getCompatibilityScore() > 96 ? 'CLASS-S TRANSCENDENT' : 'CLASS-A CYBERNETIC'}
                  </div>
                </div>
              </div>
            </div>

            {/* Load Recommendation Button */}
            <button
              onClick={handleLoadRecommended}
              onMouseEnter={() => cyberAudio.playHover()}
              className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono-tech text-xs tracking-wider uppercase font-bold rounded cyber-chamfer transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <CheckCircle className="w-4 h-4" />
              <span>INSTALL RECOMMENDED {selectedRole.toUpperCase()} SUITE</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
