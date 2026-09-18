import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  Search, 
  Cpu, 
  Eye, 
  Shield, 
  Zap, 
  Check, 
  Plus, 
  Sparkles,
  SlidersHorizontal,
  Info,
  ExternalLink
} from 'lucide-react';
import { AUGMENT_CATALOG } from '../data/cyberData';
import { AugmentItem, AugmentCategory } from '../types';
import { cyberAudio } from '../utils/audio';

interface AugmentCatalogProps {
  loadoutIds: string[];
  onToggleLoadout: (item: AugmentItem) => void;
  onOpenLoadoutDrawer: () => void;
}

export const AugmentCatalog: React.FC<AugmentCatalogProps> = ({
  loadoutIds,
  onToggleLoadout,
  onOpenLoadoutDrawer
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AugmentCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedAugment, setInspectedAugment] = useState<AugmentItem | null>(null);

  const categories: { id: AugmentCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'ALL AUGMENTS', icon: Layers },
    { id: 'neural', label: 'NEURAL CORTEX', icon: Cpu },
    { id: 'sensory', label: 'SENSORY & OPTICS', icon: Eye },
    { id: 'biomechanical', label: 'BIOMECHANICS', icon: Zap },
    { id: 'defense', label: 'DERMAL ARMOR', icon: Shield },
    { id: 'locomotion', label: 'LOCOMOTION', icon: SlidersHorizontal },
  ];

  const filteredAugments = useMemo(() => {
    return AUGMENT_CATALOG.filter((item) => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="augment-matrix" className="py-24 relative bg-[#090d16] border-t border-slate-900">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-cyan-400 uppercase tracking-widest mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>// 03. AUGMENTATION CATALOG & SPEC MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide uppercase">
              BIONIC HARDWARE <span className="text-cyan-400">MATRIX</span>
            </h2>
            <p className="text-slate-400 font-tech text-base max-w-xl mt-2">
              Laboratory-tested bio-compatible enhancements. Select augments to calculate total power draw, synaptic strain, and operational classification.
            </p>
          </div>

          {/* Quick Active Loadout Pill */}
          <div className="flex items-center space-x-3 bg-[#0d1422] p-2 px-4 rounded border border-cyan-500/30 cyber-chamfer-sm">
            <span className="text-xs font-mono-tech text-slate-300">
              CONFIGURED: <strong className="text-cyan-400">{loadoutIds.length}</strong> AUGMENTS
            </span>
            <button
              onClick={() => {
                cyberAudio.playClick();
                onOpenLoadoutDrawer();
              }}
              className="text-xs font-mono-tech px-3 py-1 bg-cyan-500 text-black font-bold rounded cyber-chamfer-sm hover:bg-cyan-400 transition-colors"
            >
              FINALIZE LOADOUT &rarr;
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#0a0f1b] p-3 rounded-lg border border-slate-800">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    cyberAudio.playClick();
                    setSelectedCategory(cat.id);
                  }}
                  onMouseEnter={() => cyberAudio.playHover()}
                  className={`px-3 py-1.5 text-xs font-mono-tech rounded cyber-chamfer-sm flex items-center space-x-1.5 transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                      : 'bg-slate-900/80 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 border border-slate-800/80'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH HARDWARE // SERIAL..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#06080e] border border-slate-700/80 rounded text-xs font-mono-tech text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

        </div>

        {/* Augment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAugments.map((item) => {
            const isInstalled = loadoutIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between p-5 rounded-lg cyber-chamfer transition-all duration-300 border bg-[#0a0e19] group hover:-translate-y-1 ${
                  isInstalled
                    ? 'border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.2)] bg-[#0c1424]'
                    : 'border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
                }`}
              >
                {/* Card Top: Serial and Clearance Badge */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-400 mb-3">
                    <span className="text-cyan-400/80 font-bold">{item.serialNumber}</span>
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      item.clearance === 'BLACK-OPS'
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                        : item.clearance === 'OPERATIVE'
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {item.clearance}
                    </span>
                  </div>

                  {/* Thumbnail / High-Tech Visual Container */}
                  <div className="relative h-40 w-full mb-4 rounded overflow-hidden bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        // Fallback in case of network restriction
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/600/400`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e19] via-transparent to-black/30 pointer-events-none" />
                    
                    {/* Corner Tag */}
                    <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[9px] font-mono-tech text-cyan-300 border border-cyan-500/30">
                      SYNC: {item.compatibilityScore}%
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs font-tech text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 bg-[#060910] rounded border border-slate-800/80 text-[10px] font-mono-tech">
                    <div>
                      <span className="text-slate-500 block">POWER DRAIN</span>
                      <span className="text-amber-400 font-bold">
                        {item.powerConsumptionWatts > 0 ? `${item.powerConsumptionWatts}W` : `${item.powerConsumptionWatts}W (GEN)`}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">LATENCY</span>
                      <span className="text-cyan-400 font-bold">{item.synapticLatencyMs} ms</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Inspect Specs & Install Button */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center space-x-2">
                  <button
                    onClick={() => {
                      cyberAudio.playScan();
                      setInspectedAugment(item);
                    }}
                    className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 rounded border border-slate-800 transition-colors"
                    title="View Deep Telemetry Spec"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onToggleLoadout(item);
                    }}
                    onMouseEnter={() => cyberAudio.playHover()}
                    className={`flex-1 py-2 px-3 text-xs font-mono-tech rounded cyber-chamfer-sm font-bold flex items-center justify-center space-x-1.5 transition-all ${
                      isInstalled
                        ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : 'bg-slate-900 hover:bg-cyan-950 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300'
                    }`}
                  >
                    {isInstalled ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>IN LOADOUT</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>INSTALL</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deep Spec Inspection Modal */}
        {inspectedAugment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0a0e19] border border-cyan-500/50 rounded-lg cyber-chamfer p-6 space-y-6 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
              
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono-tech text-cyan-400">
                    // HARDWARE BLUEPRINT: {inspectedAugment.serialNumber}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white uppercase mt-1">
                    {inspectedAugment.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    cyberAudio.playClick();
                    setInspectedAugment(null);
                  }}
                  className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-400 hover:text-white rounded text-xs font-mono-tech"
                >
                  ESC // CLOSE
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={inspectedAugment.imageUrl}
                    alt={inspectedAugment.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover rounded border border-slate-800 mb-4"
                  />
                  <div className="p-3 bg-[#06080e] rounded border border-slate-800 text-xs font-mono-tech space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">CLEARANCE:</span>
                      <span className="text-amber-400 font-bold">{inspectedAugment.clearance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">COMPATIBILITY:</span>
                      <span className="text-cyan-400 font-bold">{inspectedAugment.compatibilityScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">OVERCLOCK BONUS:</span>
                      <span className="text-emerald-400 font-bold">{inspectedAugment.overclockBonus}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-mono-tech text-slate-400 uppercase mb-1">Architecture Summary</h4>
                    <p className="text-sm font-tech text-slate-300 leading-relaxed">
                      {inspectedAugment.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono-tech text-slate-400 uppercase mb-2">Key Specifications</h4>
                    <ul className="space-y-1.5">
                      {inspectedAugment.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs font-mono-tech text-slate-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      cyberAudio.playClick();
                      onToggleLoadout(inspectedAugment);
                    }}
                    className={`w-full py-2.5 text-xs font-mono-tech rounded cyber-chamfer-sm font-bold flex items-center justify-center space-x-2 ${
                      loadoutIds.includes(inspectedAugment.id)
                        ? 'bg-cyan-500 text-black'
                        : 'bg-cyan-950 border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-black'
                    }`}
                  >
                    {loadoutIds.includes(inspectedAugment.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>INSTALLED IN ACTIVE LOADOUT</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>ADD TO ACTIVE LOADOUT</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
