import React from 'react';
import { Cpu, ArrowUp, Shield, Activity, Radio } from 'lucide-react';
import { cyberAudio } from '../utils/audio';

export const CyberFooter: React.FC = () => {
  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-cyan-500/20 text-slate-400 py-16 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-cyan-950/80 border border-cyan-400 flex items-center justify-center cyber-chamfer-sm text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-wider">
                NEXUS // CYBORG SYSTEMS
              </span>
            </div>
            <p className="text-xs font-tech text-slate-400 leading-relaxed max-w-md">
              Pioneering direct quantum neural cortex interfaces, titanium-myomer kinetics, and subdermal ballistic honeycomb meshes for post-biological human augmentation.
            </p>
            <div className="flex items-center space-x-3 text-[10px] font-mono-tech text-cyan-400">
              <span className="flex items-center">
                <Radio className="w-3 h-3 mr-1 text-cyan-400 animate-pulse" />
                ORBITAL RELAY: CONNECTED
              </span>
              <span>|</span>
              <span>CIPHER: QUANTUM-256</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-mono-tech text-white uppercase tracking-widest font-bold">
              // TELEMETRY INDEX
            </div>
            <ul className="space-y-1.5 text-xs font-mono-tech">
              <li><a href="#spec-overview" className="hover:text-cyan-400 transition-colors">// SPEC OVERVIEW</a></li>
              <li><a href="#anatomy-hud" className="hover:text-cyan-400 transition-colors">// ANATOMY HUD</a></li>
              <li><a href="#augment-matrix" className="hover:text-cyan-400 transition-colors">// HARDWARE MATRIX</a></li>
              <li><a href="#neural-lab" className="hover:text-cyan-400 transition-colors">// NEURAL CALIBRATOR</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">// ARCHITECTURE</a></li>
            </ul>
          </div>

          {/* Certifications & Security */}
          <div className="space-y-2">
            <div className="text-xs font-mono-tech text-white uppercase tracking-widest font-bold">
              // COMPLIANCE PROTOCOLS
            </div>
            <div className="p-3 bg-[#080d17] border border-slate-800 rounded text-[11px] font-mono-tech space-y-1">
              <div className="text-cyan-300 font-bold">ISO-CYBER-9004 VALIDATED</div>
              <div className="text-slate-400">Zero bio-rejection warranty. Medical-grade titanium synthesis guaranteed.</div>
              <div className="text-emerald-400 font-semibold pt-1">STATUS: FULL HARMONIC PASS</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-slate-500 gap-4">
          <div>
            &copy; 2026 NEXUS CYBERNETICS LABS. ALL SYNAPTIC RIGHTS RESERVED.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">FIRMWARE: v8.4.2-RELEASE</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 rounded cyber-chamfer-sm transition-colors flex items-center space-x-1"
              title="Return to Top of Deck"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[10px]">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
