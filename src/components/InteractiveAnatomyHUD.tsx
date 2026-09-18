import React, { useState } from 'react';
import { 
  Crosshair, 
  Activity, 
  Thermometer, 
  Zap, 
  Wifi, 
  CheckCircle2, 
  Plus, 
  AlertTriangle,
  Eye,
  Layers,
  Sparkles
} from 'lucide-react';
import { ANATOMY_NODES } from '../data/cyberData';
import { AnatomyNode } from '../types';
import { cyberAudio } from '../utils/audio';

interface InteractiveAnatomyHUDProps {
  onSelectAugmentFromNode: (node: AnatomyNode) => void;
}

type ViewMode = 'standard' | 'wireframe' | 'thermal' | 'overclock';

export const InteractiveAnatomyHUD: React.FC<InteractiveAnatomyHUDProps> = ({
  onSelectAugmentFromNode,
}) => {
  const [selectedNode, setSelectedNode] = useState<AnatomyNode>(ANATOMY_NODES[0]);
  const [viewMode, setViewMode] = useState<ViewMode>('standard');
  const [isScanning, setIsScanning] = useState(false);

  const handleNodeClick = (node: AnatomyNode) => {
    cyberAudio.playScan();
    setSelectedNode(node);
  };

  const triggerFullScan = () => {
    cyberAudio.playOverclock();
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1800);
  };

  const getModeStyles = () => {
    switch (viewMode) {
      case 'wireframe':
        return {
          bg: 'bg-[#050b14]',
          accent: '#38bdf8',
          textAccent: 'text-sky-400',
          borderAccent: 'border-sky-500',
          glow: 'rgba(56, 189, 248, 0.3)',
        };
      case 'thermal':
        return {
          bg: 'bg-[#150a18]',
          accent: '#ff2a5f',
          textAccent: 'text-rose-400',
          borderAccent: 'border-rose-500',
          glow: 'rgba(255, 42, 95, 0.3)',
        };
      case 'overclock':
        return {
          bg: 'bg-[#181105]',
          accent: '#ffb000',
          textAccent: 'text-amber-400',
          borderAccent: 'border-amber-500',
          glow: 'rgba(255, 176, 0, 0.3)',
        };
      default:
        return {
          bg: 'bg-[#070b12]',
          accent: '#00f0ff',
          textAccent: 'text-cyan-400',
          borderAccent: 'border-cyan-500',
          glow: 'rgba(0, 240, 255, 0.25)',
        };
    }
  };

  const currentTheme = getModeStyles();

  return (
    <section id="anatomy-hud" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest mb-2">
              <Crosshair className="w-3.5 h-3.5" />
              <span>// 02. BIOMECHANICAL SCHEMATIC DECK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase">
              INTERACTIVE ANATOMY <span className="text-cyan-400">HUD</span>
            </h2>
            <p className="text-slate-400 font-tech text-base max-w-xl mt-2">
              Select anatomical telemetry nodes to examine direct cortical interfaces, sub-fusion metabolic outputs, and titanium tensile load distributions.
            </p>
          </div>

          {/* View Mode Controllers */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0c101a] p-1.5 rounded-lg border border-slate-800 cyber-chamfer-sm">
            {[
              { id: 'standard', label: 'STANDARD HUD' },
              { id: 'wireframe', label: 'X-RAY WIREFRAME' },
              { id: 'thermal', label: 'THERMAL FLUX' },
              { id: 'overclock', label: 'OVERCLOCK' },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setViewMode(mode.id as ViewMode);
                }}
                className={`px-3 py-1.5 text-xs font-mono-tech rounded transition-all ${
                  viewMode === mode.id
                    ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {mode.label}
              </button>
            ))}

            <button
              onClick={triggerFullScan}
              className="px-3 py-1.5 text-xs font-mono-tech rounded bg-slate-800 text-cyan-300 hover:bg-cyan-950 border border-cyan-500/40 flex items-center space-x-1.5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>DIAGNOSTIC SWEEP</span>
            </button>
          </div>
        </div>

        {/* Interactive Main HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Center: Interactive Cyborg Silhouette Canvas */}
          <div className="lg:col-span-7 relative min-h-[540px] flex flex-col justify-between p-6 rounded-lg cyber-chamfer border border-slate-800 bg-[#070b12] overflow-hidden shadow-2xl">
            
            {/* Viewport scanline overlay */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isScanning ? 'opacity-100' : 'opacity-30'}`}>
              <div className="w-full h-full bg-cyber-dots" />
              {isScanning && (
                <div className="absolute top-0 left-0 w-full h-2 bg-cyan-400 shadow-[0_0_20px_#00f0ff] animate-scanline" />
              )}
            </div>

            {/* Canvas Header Ticker */}
            <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-400 border-b border-slate-800 pb-3 relative z-10">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-white font-bold tracking-widest">SPECIMEN // MK-VII OPERATIVE CHASSIS</span>
              </div>
              <div className="text-cyan-400">
                MODE: <span className="uppercase font-bold">{viewMode}</span>
              </div>
            </div>

            {/* Cyborg Anatomical Vector Visualization & Interactive Nodes */}
            <div className="relative flex-1 flex items-center justify-center my-4 select-none">
              
              {/* Central Schematic Silhouette */}
              <div className="relative w-full max-w-[340px] aspect-[1/1.6] flex items-center justify-center">
                
                {/* Visual SVG Human-Cyborg Anatomy Figure */}
                <svg viewBox="0 0 200 320" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                  {/* Grid Lines */}
                  <line x1="100" y1="10" x2="100" y2="310" stroke="#1f293d" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="20" y1="160" x2="180" y2="160" stroke="#1f293d" strokeWidth="0.5" strokeDasharray="4 4" />

                  {/* Body Wireframe Path */}
                  <g stroke={currentTheme.accent} strokeWidth={viewMode === 'wireframe' ? '1.5' : '1'} fill="none" opacity="0.85">
                    
                    {/* Head / Helmet */}
                    <path d="M 85,25 C 85,15 115,15 115,25 L 122,45 L 115,62 L 85,62 L 78,45 Z" fill="#0a1322" />
                    <line x1="88" y1="38" x2="112" y2="38" stroke="#ffffff" strokeWidth="1.5" />

                    {/* Neck */}
                    <rect x="94" y="62" width="12" height="14" fill="#111c30" />
                    
                    {/* Torso / Titanium Rib Matrix */}
                    <path d="M 65,76 L 135,76 L 125,145 L 100,165 L 75,145 Z" fill="#0b1424" />
                    <line x1="72" y1="92" x2="128" y2="92" strokeDasharray="2 2" />
                    <line x1="76" y1="108" x2="124" y2="108" strokeDasharray="2 2" />
                    <line x1="80" y1="124" x2="120" y2="124" strokeDasharray="2 2" />

                    {/* Spine Channel */}
                    <line x1="100" y1="76" x2="100" y2="165" stroke="#00f0ff" strokeWidth="2" />

                    {/* Left & Right Arms (Myomer) */}
                    <path d="M 65,76 L 40,110 L 32,165 L 26,190" strokeWidth="2" />
                    <path d="M 135,76 L 160,110 L 168,165 L 174,190" strokeWidth="2" />

                    {/* Pelvis & Core Frame */}
                    <polygon points="75,145 125,145 115,180 85,180" fill="#0a1220" />

                    {/* Legs & Hydraulic Struts */}
                    <path d="M 85,180 L 80,240 L 75,305 L 68,310" strokeWidth="2.5" />
                    <path d="M 115,180 L 120,240 L 125,305 L 132,310" strokeWidth="2.5" />

                    {/* Knee Joint Nodes */}
                    <circle cx="80" cy="240" r="4" fill="#00f0ff" />
                    <circle cx="120" cy="240" r="4" fill="#00f0ff" />

                    {/* Thermal or Overclock Glowing Core */}
                    <circle 
                      cx="100" 
                      cy="118" 
                      r="12" 
                      fill={viewMode === 'thermal' ? '#ff2a5f' : viewMode === 'overclock' ? '#ffb000' : '#00f0ff'} 
                      opacity="0.6"
                      className="animate-pulse"
                    />
                  </g>
                </svg>

                {/* Hotspot Target Nodes with Ping Animations */}
                {ANATOMY_NODES.map((node) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => handleNodeClick(node)}
                      style={{
                        top: `${node.yPercent}%`,
                        left: `${node.xPercent}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      className="absolute z-20 group focus:outline-none"
                      title={node.label}
                    >
                      <div className="relative flex items-center justify-center">
                        {/* Outer Pulse ring */}
                        <span className={`absolute w-7 h-7 rounded-full transition-all duration-300 ${
                          isSelected 
                            ? 'bg-cyan-400/40 animate-ping' 
                            : 'bg-cyan-500/20 group-hover:scale-125'
                        }`} />

                        {/* Node button */}
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-cyan-400 border-white text-black shadow-[0_0_15px_#00f0ff] scale-125'
                            : 'bg-[#080d1a] border-cyan-500/60 text-cyan-400 hover:border-cyan-300'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-cyan-400'}`} />
                        </div>

                        {/* Floating Node Label */}
                        <div className={`absolute left-7 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-mono-tech border backdrop-blur-md transition-all ${
                          isSelected
                            ? 'bg-cyan-950/90 border-cyan-400 text-cyan-300 shadow-lg scale-105'
                            : 'bg-black/70 border-slate-800 text-slate-400 opacity-0 group-hover:opacity-100'
                        }`}>
                          {node.label}
                        </div>
                      </div>
                    </button>
                  );
                })}

              </div>

            </div>

            {/* Canvas Bottom Coordinates Readout */}
            <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-500 border-t border-slate-800/80 pt-3 relative z-10">
              <div>BIO-LOC: 37°46'N // 122°25'W</div>
              <div className="text-cyan-400 font-semibold">CLICK ANY NODE TO ENGAGE TELEMETRY</div>
              <div>STABILIZATION: 99.9%</div>
            </div>

          </div>

          {/* Right Column: Live Telemetry & Node Diagnostic Readout Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-lg cyber-chamfer border border-cyan-500/30 bg-[#0a0e17] shadow-xl space-y-6">
            
            {/* Active Node Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono-tech text-cyan-400 tracking-wider">
                  // NODE ID: {selectedNode.schematicCode}
                </span>
                <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded font-bold ${
                  selectedNode.status === 'OVERCLOCKED' 
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-500/50' 
                    : selectedNode.status === 'SYNCED'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                    : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50'
                }`}>
                  {selectedNode.status}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white tracking-wide uppercase">
                {selectedNode.label}
              </h3>
              <div className="text-xs font-mono-tech text-slate-400">
                SUBSYSTEM: <span className="text-slate-200">{selectedNode.system}</span>
              </div>
            </div>

            {/* Oscilloscope Waveform Frequency Simulation */}
            <div className="p-3 bg-[#05080e] rounded border border-slate-800">
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400 mb-1.5">
                <span className="flex items-center space-x-1 text-cyan-400">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SYNAPTIC OSCILLOSCOPE WAVEFORM</span>
                </span>
                <span>FIRMWARE: {selectedNode.firmware}</span>
              </div>
              
              <svg viewBox="0 0 300 50" className="w-full h-12 stroke-cyan-400 fill-none">
                <path
                  d="M 0,25 Q 25,5 50,25 T 100,25 T 130,5 T 150,45 T 170,10 T 200,25 T 250,25 T 300,25"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line x1="0" y1="25" x2="300" y2="25" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#080d17] border border-slate-800 rounded cyber-chamfer-sm">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-tech text-slate-400 mb-1">
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>NEURAL SYNC</span>
                </div>
                <div className="text-xl font-mono-tech font-bold text-cyan-300">
                  {selectedNode.telemetry.syncRate}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Zero Quantum Drift</div>
              </div>

              <div className="p-3 bg-[#080d17] border border-slate-800 rounded cyber-chamfer-sm">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-tech text-slate-400 mb-1">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>POWER FLUX</span>
                </div>
                <div className="text-xl font-mono-tech font-bold text-amber-300">
                  {selectedNode.telemetry.powerDrain}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Optimized Current</div>
              </div>

              <div className="p-3 bg-[#080d17] border border-slate-800 rounded cyber-chamfer-sm">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-tech text-slate-400 mb-1">
                  <Thermometer className="w-3 h-3 text-rose-400" />
                  <span>THERMAL RUN</span>
                </div>
                <div className="text-xl font-mono-tech font-bold text-rose-300">
                  {selectedNode.telemetry.thermal}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Cryo-Cooled</div>
              </div>

              <div className="p-3 bg-[#080d17] border border-slate-800 rounded cyber-chamfer-sm">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono-tech text-slate-400 mb-1">
                  <Wifi className="w-3 h-3 text-indigo-400" />
                  <span>BUS BANDWIDTH</span>
                </div>
                <div className="text-xl font-mono-tech font-bold text-indigo-300">
                  {selectedNode.telemetry.bandwidth}
                </div>
                <div className="text-[9px] font-mono-tech text-slate-500">Fiber Channels</div>
              </div>
            </div>

            {/* Node Narrative Details */}
            <div className="p-4 bg-slate-900/50 border-l-2 border-cyan-400 rounded-r text-xs font-tech text-slate-300 leading-relaxed">
              {selectedNode.details}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => {
                cyberAudio.playClick();
                onSelectAugmentFromNode(selectedNode);
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/60 hover:border-cyan-400 text-cyan-300 hover:text-black font-mono-tech text-xs tracking-wider uppercase rounded cyber-chamfer transition-all flex items-center justify-center space-x-2 font-bold group"
            >
              <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
              <span>CONFIGURE AUGMENT FROM THIS NODE</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
