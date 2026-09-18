import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Menu, 
  X, 
  Layers,
  Terminal as TerminalIcon,
  Activity
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';

interface CyberHeaderProps {
  loadoutCount: number;
  onOpenLoadout: () => void;
  onOpenTerminal: () => void;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({
  loadoutCount,
  onOpenLoadout,
  onOpenTerminal
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateTimer = () => {
      const d = new Date();
      setCurrentTime(d.toTimeString().split(' ')[0] + ' UTC');
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const handleAudioToggle = () => {
    const muted = cyberAudio.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { label: '// 01. SPEC', href: '#spec-overview' },
    { label: '// 02. ANATOMY-HUD', href: '#anatomy-hud' },
    { label: '// 03. AUGMENT-MATRIX', href: '#augment-matrix' },
    { label: '// 04. NEURAL-LAB', href: '#neural-lab' },
    { label: '// 05. ARCHITECTURE', href: '#architecture' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#07090ecf] backdrop-blur-md border-b border-cyan-500/20 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,240,255,0.1)]' : 'bg-[#07090e90] backdrop-blur-sm border-b border-white/5 py-4'
    }`}>
      {/* Top micro telemetry bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex items-center justify-between text-[10px] font-mono-tech tracking-widest text-slate-400 border-b border-white/5 pb-1.5 mb-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-cyan-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse mr-1.5 inline-block"></span>
              SYS.KERNEL: STABLE v8.4
            </span>
            <span className="text-slate-500">|</span>
            <span>LATENCY: 0.08ms</span>
            <span className="text-slate-500">|</span>
            <span>BANDWIDTH: 104 TBPS</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span>STARDATE: 2026.09</span>
            <span className="text-slate-500">|</span>
            <span className="text-cyan-400/80 font-mono-tech">{currentTime || '12:00:00 UTC'}</span>
            <span className="text-slate-500">|</span>
            <span className="text-emerald-400 flex items-center">
              <ShieldCheck className="w-3 h-3 mr-1" />
              FIREWALL: ACTIVE
            </span>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#" 
            id="brand-logo"
            className="flex items-center space-x-3 group"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
          >
            <div className="relative w-10 h-10 bg-cyan-950/60 border border-cyan-400/50 flex items-center justify-center cyber-chamfer-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Cpu className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 bg-cyan-400"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  NEXUS
                </span>
                <span className="text-cyan-400 font-mono-tech text-xs tracking-widest">//</span>
                <span className="font-tech text-xs tracking-widest text-slate-400 uppercase font-semibold">
                  CYBORG
                </span>
              </div>
              <span className="text-[9px] font-mono-tech text-cyan-500/70 tracking-widest uppercase">
                Neural Augment Systems
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                id={`nav-link-${idx}`}
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="text-xs font-mono-tech tracking-wider text-slate-300 hover:text-cyan-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            {/* Audio FX Toggle */}
            <button
              id="audio-toggle-btn"
              onClick={handleAudioToggle}
              title={isMuted ? 'Unmute Cybernetic Sound FX' : 'Mute Cybernetic Sound FX'}
              className="p-2 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 bg-slate-900/40 rounded transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />}
            </button>

            {/* Quick Terminal CLI launch */}
            <button
              id="header-terminal-btn"
              onClick={() => {
                cyberAudio.playClick();
                onOpenTerminal();
              }}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono-tech text-slate-300 hover:text-cyan-300 bg-slate-900/60 border border-slate-700/60 hover:border-cyan-500/50 rounded transition-all"
              title="Open Command Deck Terminal"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
            </button>

            {/* Loadout Clearance Drawer / Cart Button */}
            <button
              id="header-loadout-btn"
              onClick={() => {
                cyberAudio.playClick();
                onOpenLoadout();
              }}
              onMouseEnter={() => cyberAudio.playHover()}
              className="relative flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/60 hover:border-cyan-400 text-cyan-300 font-mono-tech text-xs tracking-wider cyber-chamfer-sm transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)] group"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">LOADOUT</span>
              <span className="w-5 h-5 flex items-center justify-center rounded bg-cyan-500 text-black font-bold text-[10px]">
                {loadoutCount}
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white lg:hidden border border-slate-800 rounded bg-slate-900/50"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-cyan-500/20 bg-[#0a0d14]/95 backdrop-blur-xl p-4 rounded-b-lg space-y-3">
            <div className="text-[10px] font-mono-tech text-cyan-400 mb-2">// QUICK TELEMETRY: ALL SYSTEMS SYNCED</div>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => {
                  cyberAudio.playClick();
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-mono-tech text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex items-center space-x-2 text-xs font-mono-tech text-slate-300 hover:text-cyan-400"
              >
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span>OPEN TERMINAL CLI</span>
              </button>
              <button
                onClick={handleAudioToggle}
                className="flex items-center space-x-2 text-xs font-mono-tech text-slate-400"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                <span>{isMuted ? 'MUTED' : 'AUDIO ACTIVE'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
