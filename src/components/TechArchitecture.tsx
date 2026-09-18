import React, { useState } from 'react';
import { 
  Cpu, 
  Shield, 
  Flame, 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X as XIcon,
  CheckCircle2
} from 'lucide-react';
import { SYSTEM_SPECS, FAQ_ITEMS } from '../data/cyberData';
import { cyberAudio } from '../utils/audio';

export const TechArchitecture: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    cyberAudio.playClick();
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const comparisonData = [
    { metric: 'Synaptic Reaction Latency', human: '200 – 250 ms', nexus: '0.08 ms (3,000x faster)', advantage: true },
    { metric: 'Skeletal Tensile Load Tolerance', human: '120 MPa (Bone Fracture)', nexus: '14,800 MPa (Graphene Lattice)', advantage: true },
    { metric: 'Visual Spectrum Perception', human: '380 – 700 nm (Visible Only)', nexus: '100 – 14,000 nm (IR/UV/LiDAR/EM)', advantage: true },
    { metric: 'Cardiopulmonary Power Autonomy', human: '8h Fatigue Limit', nexus: '20 Years Continuous (Sub-Fusion)', advantage: true },
    { metric: 'Neural Firewall ICE Protection', human: 'None (Subconscious Vulnerability)', nexus: '256-Bit Quantum Anti-Infiltration', advantage: true },
  ];

  return (
    <section id="architecture" className="py-24 relative bg-[#080b12] border-t border-slate-900">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest px-3 py-1 rounded bg-cyan-950/40 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>// 05. ARCHITECTURAL PILLARS & SCIENTIFIC SPEC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wide">
            BIOMECHANICAL <span className="text-cyan-400">ENGINEERING</span>
          </h2>
          <p className="text-slate-400 font-tech text-base">
            Eliminating biological bottlenecks with bio-inert vitreous carbon electrodes, micro-fusion energy synthesis, and aerospace titanium frameworks.
          </p>
        </div>

        {/* 4 Architectural Spec Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEM_SPECS.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg cyber-chamfer bg-[#0a0e19] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 space-y-3 group hover:-translate-y-1"
            >
              <div className="text-xs font-mono-tech text-slate-500 uppercase tracking-wider">
                {spec.label}
              </div>
              <div className="text-3xl sm:text-4xl font-mono-tech font-bold text-cyan-400 group-hover:text-cyan-300">
                {spec.value}
              </div>
              <h3 className="text-base font-display font-bold text-white">
                {spec.title}
              </h3>
              <p className="text-xs font-tech text-slate-400 leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparative Matrix: Biological Human vs NEXUS MK-VII Cyberware */}
        <div className="p-6 sm:p-8 rounded-lg cyber-chamfer bg-[#0a0e17] border border-cyan-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono-tech text-cyan-400">BENCHMARK EVALUATION</span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white uppercase mt-0.5">
                ORGANIC BASELINE VS. NEXUS MK-VII
              </h3>
            </div>
            <span className="text-[10px] font-mono-tech text-slate-400">
              AUDITED BY CYBER-LAB STANDARDS
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-tech">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4">PERFORMANCE METRIC</th>
                  <th className="py-3 px-4">BIOLOGICAL HUMAN</th>
                  <th className="py-3 px-4 text-cyan-400">NEXUS MK-VII CYBORG</th>
                  <th className="py-3 px-4 text-right">QUANTUM DELTA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white">{row.metric}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.human}</td>
                    <td className="py-3.5 px-4 text-cyan-300 font-bold">{row.nexus}</td>
                    <td className="py-3.5 px-4 text-right text-emerald-400 flex items-center justify-end space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>SUPERIOR</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bio-Integration FAQ */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
              // FREQUENTLY RESOLVED PROTOCOLS
            </span>
            <h3 className="text-2xl font-display font-bold text-white uppercase mt-1">
              SURGICAL & OPERATIONAL FAQ
            </h3>
          </div>

          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-800 rounded cyber-chamfer-sm bg-[#090d16] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between text-white font-display font-semibold text-base hover:text-cyan-300 transition-colors"
                >
                  <span>{item.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs font-tech text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
