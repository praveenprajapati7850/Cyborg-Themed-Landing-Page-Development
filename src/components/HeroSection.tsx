import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Crosshair, 
  ChevronRight, 
  Flame,
  Radio,
  Eye,
  Disc3,
  Cpu
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface HeroSectionProps {
  onOpenLoadout: () => void;
  onExploreAnatomy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenLoadout,
  onExploreAnatomy,
}) => {
  const [overclocked, setOverclocked] = useState(false);
  const [activeSensor, setActiveSensor] = useState<'visual' | 'synaptic' | 'kinetic'>('synaptic');

  const toggleOverclock = () => {
    cyberAudio.playOverclock();
    setOverclocked(!overclocked);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid"
    >
      {/* Ambient background glow & particles */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
        overclocked ? 'bg-amber-500/15' : 'bg-cyan-500/12'
      }`} />
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      {/* Decorative HUD Corner Bracket Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Operational Status Pill & Overclock Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#0e1422]/80 border border-cyan-500/30 rounded cyber-chamfer-sm text-xs font-mono-tech text-cyan-300">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-slate-400">PROJECT:</span>
            <span className="font-semibold text-white">MK-VII // BIOMECHANICAL SYNTHESIS</span>
            <span className="text-cyan-500 font-bold hidden sm:inline">[CLEARANCE LEVEL 4]</span>
          </div>

          {/* Overclock Mode Toggle */}
          <button
            id="hero-overclock-toggle"
            onClick={toggleOverclock}
            onMouseEnter={() => cyberAudio.playHover()}
            className={`flex items-center space-x-2 px-3 py-1.5 text-xs font-mono-tech rounded cyber-chamfer-sm transition-all border ${
              overclocked 
                ? 'bg-amber-950/60 border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(255,176,0,0.4)] animate-pulse' 
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-cyan-500/60 hover:text-cyan-300'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${overclocked ? 'text-amber-400' : 'text-slate-500'}`} />
            <span>OVERCLOCK PROTOCOL:</span>
            <span className={`font-bold ${overclocked ? 'text-amber-300' : 'text-slate-500'}`}>
              {overclocked ? 'ENGAGED (+340%)' : 'STANDBY (100%)'}
            </span>
          </button>
        </div>

        {/* Hero Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="h-px w-8 bg-cyan-400"></span>
                <span className="text-xs font-mono-tech tracking-widest uppercase text-cyan-400 font-bold">
                  Next-Generation Cyberware Architecture
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold tracking-tight text-white uppercase leading-[1.1]">
                TRANSCEND THE <br />
                <span className={`relative inline-block transition-colors duration-300 ${
                  overclocked ? 'text-amber-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-200 to-cyan-300'
                }`}>
                  BIOLOGICAL LIMIT.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-tech leading-relaxed max-w-2xl">
              NEXUS fuses direct quantum cortical transceivers, synthetic myomer musculature, and non-Newtonian subdermal armor. Engineered for symbiotic synthesis between human cognition and autonomous synthetic power.
            </p>

            {/* Live Telemetry Bar */}
            <div className="grid grid-cols-3 gap-3 p-3 bg-[#0d111a]/80 border border-slate-800 rounded cyber-chamfer-sm">
              <div className="border-r border-slate-800/80 pr-2">
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase">Synaptic Latency</div>
                <div className="text-base sm:text-lg font-mono-tech font-bold text-cyan-400">
                  {overclocked ? '0.02 ms' : '0.08 ms'}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">40x Organic Speed</div>
              </div>

              <div className="border-r border-slate-800/80 px-2">
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase">Power Autonomy</div>
                <div className="text-base sm:text-lg font-mono-tech font-bold text-emerald-400">
                  {overclocked ? '12 YRS' : '20 YRS'}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Micro-Fusion Cell</div>
              </div>

              <div className="pl-2">
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase">Tensile Strength</div>
                <div className="text-base sm:text-lg font-mono-tech font-bold text-amber-400">
                  {overclocked ? '19.4 GPa' : '14.8 GPa'}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Titanium-Graphene</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-init-loadout-btn"
                onClick={() => {
                  cyberAudio.playClick();
                  onOpenLoadout();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className={`relative px-6 py-3 font-mono-tech text-sm font-bold tracking-wider uppercase cyber-chamfer transition-all duration-300 flex items-center space-x-2 group ${
                  overclocked
                    ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-[0_0_30px_rgba(255,176,0,0.5)]'
                    : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                }`}
              >
                <span>INITIALIZE LOADOUT</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-scan-anatomy-btn"
                onClick={() => {
                  cyberAudio.playScan();
                  onExploreAnatomy();
                }}
                onMouseEnter={() => cyberAudio.playHover()}
                className="px-6 py-3 font-mono-tech text-sm tracking-wider uppercase cyber-chamfer border border-cyan-500/50 hover:border-cyan-400 bg-slate-900/60 hover:bg-cyan-950/40 text-cyan-300 transition-all duration-300 flex items-center space-x-2"
              >
                <Crosshair className="w-4 h-4 text-cyan-400" />
                <span>INSPECT ANATOMY HUD</span>
              </button>
            </div>

            {/* Compliance Guarantee Ticker */}
            <div className="flex items-center space-x-6 text-xs font-mono-tech text-slate-400 pt-2">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Immune Rejection</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Kinetic Energy Recovery</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Holographic Cyborg HUD Display */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual HUD Container */}
            <div className="relative p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800/40 to-cyan-500/10 rounded-lg cyber-chamfer-lg shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              <div className="relative bg-[#0a0e17] rounded-lg cyber-chamfer-lg p-5 overflow-hidden border border-cyan-500/20">
                
                {/* Scanline & Grid Effect */}
                <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/40 shadow-[0_0_15px_#00f0ff] animate-scanline pointer-events-none" />

                {/* HUD Top Diagnostics Bar */}
                <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4 text-[10px] font-mono-tech text-cyan-400">
                  <div className="flex items-center space-x-2">
                    <Crosshair className="w-3.5 h-3.5 animate-spin text-cyan-400" style={{ animationDuration: '10s' }} />
                    <span className="font-bold tracking-widest">LIVE HUD // MK-VII TARGETING</span>
                  </div>
                  <div className="text-slate-400 font-mono-tech">
                    FREQ: {overclocked ? '4.80 GHz' : '2.40 GHz'}
                  </div>
                </div>

                {/* Main Visual: Futuristic Cyborg Schematic / Cyberware Composite */}
                <div className="relative aspect-[4/4.5] rounded bg-[#06080d] border border-slate-800 flex items-center justify-center overflow-hidden group">
                  
                  {/* Rotating Tactical Compass Circles */}
                  <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 animate-radar pointer-events-none flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
                  </div>
                  <div className="absolute w-52 h-52 rounded-full border border-dashed border-cyan-500/30 animate-spin pointer-events-none" style={{ animationDuration: '24s' }} />
                  
                  {/* Interactive Visual Graphic */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
                    
                    {/* Stylized Cyborg Core Illustration via SVG */}
                    <svg viewBox="0 0 300 360" className="w-full h-full max-h-[320px] drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                      <defs>
                        <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={overclocked ? '#ffb000' : '#00f0ff'} stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#0a2540" stopOpacity="0.2" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {/* Head / Cranial Cortex Grid */}
                      <polygon points="120,40 180,40 200,80 185,125 150,145 115,125 100,80" fill="url(#cyberGrad)" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="1.5" />
                      {/* Ocular Visor line */}
                      <line x1="125" y1="85" x2="175" y2="85" stroke="#ffffff" strokeWidth="2.5" filter="url(#glow)" />
                      <circle cx="160" cy="85" r="4" fill="#00f0ff" className="animate-ping" />

                      {/* Neck & Cervical Spinal Sheath */}
                      <line x1="150" y1="145" x2="150" y2="200" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="3" strokeDasharray="4 2" />
                      <rect x="142" y="155" width="16" height="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />
                      <rect x="142" y="170" width="16" height="8" fill="#1e293b" stroke="#00f0ff" strokeWidth="1" />

                      {/* Chest / Titanium Ribs Chassis */}
                      <polygon points="80,180 220,180 205,250 150,270 95,250" fill="#0a121e" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="1.5" />
                      
                      {/* Heart Core Arc Reactor */}
                      <circle cx="150" cy="225" r="18" fill="#050a12" stroke={overclocked ? '#ff2a5f' : '#00f0ff'} strokeWidth="2" />
                      <circle cx="150" cy="225" r="10" fill={overclocked ? '#ffb000' : '#00f0ff'} className="animate-pulse" filter="url(#glow)" />
                      <circle cx="150" cy="225" r="4" fill="#ffffff" />

                      {/* Shoulders and Arms Trusses */}
                      <line x1="80" y1="185" x2="40" y2="210" stroke="#00f0ff" strokeWidth="2" />
                      <line x1="220" y1="185" x2="260" y2="210" stroke="#00f0ff" strokeWidth="2" />
                      <circle cx="40" cy="210" r="6" fill="#1e293b" stroke="#00f0ff" strokeWidth="1.5" />
                      <circle cx="260" cy="210" r="6" fill="#1e293b" stroke="#00f0ff" strokeWidth="1.5" />

                      {/* Forearm & Kinetic Hydraulic Pistoning */}
                      <line x1="40" y1="210" x2="25" y2="290" stroke={overclocked ? '#ffb000' : '#38bdf8'} strokeWidth="3" />
                      <line x1="260" y1="210" x2="275" y2="290" stroke={overclocked ? '#ffb000' : '#38bdf8'} strokeWidth="3" />

                      {/* Spinal Channel Lines */}
                      <path d="M 110,250 L 120,330 L 140,350" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 190,250 L 180,330 L 160,350" fill="none" stroke="#00f0ff" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Target Reticle Crosshairs */}
                      <circle cx="150" cy="85" r="14" fill="none" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="0.8" strokeDasharray="2 2" />
                      <line x1="110" y1="85" x2="190" y2="85" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="0.5" />
                      <line x1="150" y1="65" x2="150" y2="105" stroke={overclocked ? '#ffb000' : '#00f0ff'} strokeWidth="0.5" />
                    </svg>

                    {/* Dynamic Floating Telemetry Badges */}
                    <div className="absolute top-4 left-4 bg-black/80 border border-cyan-500/40 px-2 py-1 rounded text-[9px] font-mono-tech text-cyan-300">
                      <div>TARGET: SYNTH_ALPHA</div>
                      <div className="text-slate-400">LOCK: 100% // 0.02ms</div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/80 border border-emerald-500/40 px-2 py-1 rounded text-[9px] font-mono-tech text-emerald-400">
                      <div>HEAT: {overclocked ? '324K (PEAK)' : '308K (NORM)'}</div>
                      <div className="text-slate-400">DISSIPATION: PASSIVE</div>
                    </div>
                  </div>
                </div>

                {/* Sub-selector tabs: Visual, Synaptic, Kinetic */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[10px] font-mono-tech text-slate-400">SENSOR SUITE:</div>
                  <div className="flex space-x-1">
                    {[
                      { id: 'synaptic', label: 'SYNAPTIC', icon: Cpu },
                      { id: 'visual', label: 'OPTICAL', icon: Eye },
                      { id: 'kinetic', label: 'KINETIC', icon: Disc3 },
                    ].map((mode) => {
                      const Icon = mode.icon;
                      const active = activeSensor === mode.id;
                      return (
                        <button
                          key={mode.id}
                          onClick={() => {
                            cyberAudio.playClick();
                            setActiveSensor(mode.id as 'visual' | 'synaptic' | 'kinetic');
                          }}
                          className={`px-2 py-1 text-[10px] font-mono-tech flex items-center space-x-1 rounded transition-colors ${
                            active
                              ? 'bg-cyan-500 text-black font-bold'
                              : 'bg-slate-900 text-slate-400 hover:text-cyan-300 border border-slate-800'
                          }`}
                        >
                          <Icon className="w-2.5 h-2.5" />
                          <span>{mode.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
