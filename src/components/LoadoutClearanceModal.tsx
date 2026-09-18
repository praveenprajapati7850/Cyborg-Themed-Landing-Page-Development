import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Shield, 
  Cpu, 
  Zap, 
  QrCode, 
  Sparkles, 
  Check, 
  Download,
  Copy,
  Flame,
  Fingerprint
} from 'lucide-react';
import { AugmentItem, SecurityClearance } from '../types';
import { cyberAudio } from '../utils/audio';

interface LoadoutClearanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  loadoutItems: AugmentItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const LoadoutClearanceModal: React.FC<LoadoutClearanceModalProps> = ({
  isOpen,
  onClose,
  loadoutItems,
  onRemoveItem,
  onClearAll
}) => {
  const [callsign, setCallsign] = useState('OPERATIVE_ALPHA_01');
  const [clearanceTier, setClearanceTier] = useState<SecurityClearance>('OPERATIVE');
  const [isScanningBiometric, setIsScanningBiometric] = useState(false);
  const [tokenGenerated, setTokenGenerated] = useState(false);
  const [copiedToken, setCopiedToken] = useState(false);

  if (!isOpen) return null;

  // Calculate totals
  const totalPowerWatts = loadoutItems.reduce((acc, item) => acc + item.powerConsumptionWatts, 0);
  const avgLatency = loadoutItems.length > 0 
    ? (loadoutItems.reduce((acc, item) => acc + item.synapticLatencyMs, 0) / loadoutItems.length).toFixed(2)
    : '0.08';
  const avgCompatibility = loadoutItems.length > 0
    ? (loadoutItems.reduce((acc, item) => acc + item.compatibilityScore, 0) / loadoutItems.length).toFixed(1)
    : '98.5';

  const neuralStrain = Math.min(100, Math.max(15, loadoutItems.length * 18));

  const handleGeneratePass = () => {
    cyberAudio.playScan();
    setIsScanningBiometric(true);
    setTimeout(() => {
      setIsScanningBiometric(false);
      setTokenGenerated(true);
      cyberAudio.playOverclock();
    }, 1200);
  };

  const handleCopyPassToken = () => {
    cyberAudio.playClick();
    navigator.clipboard.writeText(`NEXUS-TOKEN::${callsign}::${clearanceTier}::77F2-990A-CCB4`);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/50 rounded-lg cyber-chamfer p-6 md:p-8 space-y-8 shadow-[0_0_60px_rgba(0,240,255,0.25)] my-8">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-cyan-400">
              <Cpu className="w-4 h-4" />
              <span>// LOADOUT ASSEMBLER & CLEARANCE PROTOCOL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase mt-1">
              CYBORG LOADOUT <span className="text-cyan-400">CLEARANCE PASS</span>
            </h2>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Installed Augment List & Telemetry Totals */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Telemetry Summary Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-[#05080e] rounded-lg border border-slate-800 text-center">
              <div>
                <div className="text-[10px] font-mono-tech text-slate-400">NET POWER DRAIN</div>
                <div className={`text-lg font-mono-tech font-bold ${
                  totalPowerWatts < 0 ? 'text-emerald-400' : 'text-amber-400'
                }`}>
                  {totalPowerWatts > 0 ? `+${totalPowerWatts}W` : `${totalPowerWatts}W (GEN)`}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono-tech text-slate-400">AVG LATENCY</div>
                <div className="text-lg font-mono-tech font-bold text-cyan-400">
                  {avgLatency} ms
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono-tech text-slate-400">NEURAL SYNC</div>
                <div className="text-lg font-mono-tech font-bold text-emerald-400">
                  {avgCompatibility}%
                </div>
              </div>
            </div>

            {/* Neural Strain Meter */}
            <div className="space-y-1.5 p-3 bg-slate-950/60 rounded border border-slate-800">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-400">NEURAL CORTEX STRAIN:</span>
                <span className={`font-bold ${neuralStrain > 80 ? 'text-rose-400' : 'text-cyan-400'}`}>
                  {neuralStrain}% {neuralStrain > 80 ? '(HIGH CAPACITY)' : '(OPTIMAL)'}
                </span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    neuralStrain > 80 ? 'bg-rose-500' : 'bg-cyan-400'
                  }`}
                  style={{ width: `${neuralStrain}%` }}
                />
              </div>
            </div>

            {/* Installed List */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono-tech">
                <span className="text-slate-400">
                  CONFIGURED HARDWARE ({loadoutItems.length}):
                </span>
                {loadoutItems.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="text-rose-400 hover:text-rose-300 text-[10px]"
                  >
                    RESET LOADOUT
                  </button>
                )}
              </div>

              {loadoutItems.length === 0 ? (
                <div className="p-6 text-center border border-dashed border-slate-800 rounded text-xs font-mono-tech text-slate-500">
                  NO AUGMENTS INSTALLED YET.<br />
                  Select hardware from the matrix or inspect anatomical nodes.
                </div>
              ) : (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {loadoutItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2.5 bg-[#070b14] border border-slate-800/80 rounded text-xs font-mono-tech"
                    >
                      <div>
                        <div className="text-white font-bold">{item.name}</div>
                        <div className="text-[10px] text-slate-400">
                          {item.serialNumber} // {item.clearance} // {item.powerConsumptionWatts}W
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          cyberAudio.playHover();
                          onRemoveItem(item.id);
                        }}
                        className="p-1 text-slate-500 hover:text-rose-400 rounded"
                        title="Uninstall from Loadout"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Identity Customizer Inputs */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  OPERATIVE CALLSIGN:
                </label>
                <input
                  type="text"
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value)}
                  className="w-full px-3 py-2 bg-[#05080e] border border-slate-700 rounded text-xs font-mono-tech text-white focus:outline-none focus:border-cyan-400 uppercase"
                />
              </div>

              <div>
                <label className="text-xs font-mono-tech text-slate-400 block mb-1">
                  CLEARANCE AUTHORIZATION TIER:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['CIVILIAN', 'OPERATIVE', 'BLACK-OPS'] as SecurityClearance[]).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => {
                        cyberAudio.playClick();
                        setClearanceTier(tier);
                      }}
                      className={`py-1.5 px-2 text-[10px] font-mono-tech rounded transition-all ${
                        clearanceTier === tier
                          ? 'bg-cyan-500 text-black font-bold'
                          : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Holographic ID Card Preview */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Holographic Security Pass Card */}
            <div className="relative p-6 rounded-xl cyber-chamfer-lg bg-gradient-to-br from-[#0e1628] via-[#09101f] to-[#050810] border-2 border-cyan-400 shadow-[0_0_35px_rgba(0,240,255,0.2)] overflow-hidden">
              
              {/* Shimmer holographic gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/5 to-purple-500/10 pointer-events-none" />
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Pass Card Header */}
              <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Fingerprint className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <span className="font-display font-bold text-white text-sm tracking-wider">
                    NEXUS CYBORG IDENTIFICATION PASS
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono-tech bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                  {clearanceTier}
                </span>
              </div>

              {/* Operative Specs & Biometrics */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-2 space-y-2 font-mono-tech">
                  <div>
                    <span className="text-[9px] text-slate-400 block">CALLSIGN</span>
                    <span className="text-base font-bold text-white tracking-widest">{callsign || 'UNKNOWN'}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block">ENCRYPTED CIPHER</span>
                    <span className="text-[10px] text-cyan-400 break-all font-mono-tech">
                      0x77F2...990A::MK-VII
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block">INSTALLED NODES</span>
                    <span className="text-xs text-slate-200">
                      {loadoutItems.length} Subsystems Synchronized
                    </span>
                  </div>
                </div>

                {/* QR Code / Chip visualization */}
                <div className="flex flex-col items-center justify-center p-2 bg-black/70 border border-cyan-500/40 rounded">
                  <QrCode className="w-14 h-14 text-cyan-300" />
                  <span className="text-[8px] font-mono-tech text-slate-400 mt-1">NEXUS-VERIFIED</span>
                </div>
              </div>

              {/* Pass Footer Status Bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[9px] font-mono-tech text-slate-400">
                <span>STARDATE: 2026.09</span>
                <span className="text-emerald-400 font-bold">AUTHENTICATION: VALIDATED</span>
              </div>

              {/* Laser Scanning Line Animation during generate */}
              {isScanningBiometric && (
                <div className="absolute top-0 left-0 w-full h-1.5 bg-cyan-400 shadow-[0_0_20px_#00f0ff] animate-scanline" />
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleGeneratePass}
                disabled={isScanningBiometric}
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-mono-tech text-xs tracking-wider uppercase font-bold rounded cyber-chamfer transition-all flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(0,240,255,0.35)]"
              >
                {isScanningBiometric ? (
                  <span>BIOMETRIC SYNAPSE ENGAGING...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>AUTHORIZE & GENERATE CLEARANCE TOKEN</span>
                  </>
                )}
              </button>

              {tokenGenerated && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded flex items-center justify-between text-xs font-mono-tech text-emerald-300">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>TOKEN GENERATED: NEXUS-MK7-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <button
                    onClick={handleCopyPassToken}
                    className="p-1 hover:text-white text-slate-400"
                    title="Copy Token"
                  >
                    {copiedToken ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
