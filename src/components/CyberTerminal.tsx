import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  X, 
  Maximize2, 
  Minimize2, 
  Play, 
  Trash2,
  Cpu,
  CornerDownLeft
} from 'lucide-react';
import { cyberAudio } from '../utils/audio';
import { TerminalLog } from '../types';
import { INITIAL_LOGS, AUGMENT_CATALOG } from '../data/cyberData';

interface CyberTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOverclockTrigger: () => void;
}

export const CyberTerminal: React.FC<CyberTerminalProps> = ({
  isOpen,
  onClose,
  onOverclockTrigger
}) => {
  const [logs, setLogs] = useState<TerminalLog[]>(INITIAL_LOGS);
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    cyberAudio.playClick();
    const time = new Date().toTimeString().split(' ')[0];

    // Add user command to logs
    const newLogs: TerminalLog[] = [
      ...logs,
      { id: Date.now().toString(), timestamp: time, type: 'info', text: `> ${inputVal}` }
    ];

    if (cmd === 'help') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'system',
        text: 'AVAILABLE PROTOCOLS: [status] [augments] [scan] [overclock] [clear] [ping] [exit]'
      });
    } else if (cmd === 'status') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'success',
        text: 'SYS_STATUS: OPTIMAL | KERNEL: v8.4.2 | NEURAL BUS: 104.2 Tbps | SYNAPTIC DRIFT: 0.00%'
      });
    } else if (cmd === 'augments') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'info',
        text: `TOTAL CATALOG: ${AUGMENT_CATALOG.length} AUGMENTS DEPLOYED. ALL SYSTEMS COMPATIBLE.`
      });
    } else if (cmd === 'overclock') {
      cyberAudio.playOverclock();
      onOverclockTrigger();
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'warn',
        text: 'CRITICAL OVERCLOCK TRIGGERED: +340% HARMONIC BUS ENGAGED.'
      });
    } else if (cmd === 'scan') {
      cyberAudio.playScan();
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'system',
        text: 'DIAGNOSTIC SWEEP COMPLETE: 0 REJECTIONS DETECTED // QUANTUM BRIDGE SECURE.'
      });
    } else if (cmd === 'ping') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'success',
        text: 'PONG: 0.08ms TO LOCAL NEURAL INTERFACE.'
      });
    } else if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        timestamp: time,
        type: 'error',
        text: `UNRECOGNIZED COMMAND: "${cmd}". TYPE "help" FOR PROTOCOLS.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <div className={`fixed z-50 transition-all duration-300 ${
      isExpanded 
        ? 'inset-4 md:inset-10' 
        : 'bottom-4 right-4 left-4 sm:left-auto sm:w-[540px] h-[400px]'
    }`}>
      <div className="w-full h-full flex flex-col bg-[#06080e]/95 backdrop-blur-xl border border-cyan-500/60 rounded-lg cyber-chamfer shadow-[0_0_40px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0f1b] border-b border-cyan-500/30 select-none">
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono-tech font-bold text-white tracking-widest">
              NEXUS // CYBER_DECK_CLI [v8.4]
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-slate-400 hover:text-white"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              className="p-1 text-slate-400 hover:text-rose-400"
              title="Close Terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Logs Output */}
        <div className="flex-1 p-4 overflow-y-auto font-mono-tech text-xs space-y-1.5 bg-black/60">
          <div className="text-slate-500 text-[11px] pb-2 border-b border-slate-800">
            NEXUS CYBERNETICS CONSOLE TERMINAL [ESTABLISHED DIRECT CORTEX SHELL]<br />
            Type <span className="text-cyan-400 font-bold">help</span> for available commands or <span className="text-amber-400 font-bold">overclock</span> to trigger boost.
          </div>

          {logs.map((log) => (
            <div key={log.id} className="flex items-start space-x-2 leading-relaxed">
              <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
              <span className={`shrink-0 uppercase font-bold text-[10px] px-1 rounded ${
                log.type === 'system'
                  ? 'bg-cyan-950 text-cyan-300'
                  : log.type === 'warn'
                  ? 'bg-amber-950 text-amber-300'
                  : log.type === 'success'
                  ? 'bg-emerald-950 text-emerald-300'
                  : log.type === 'error'
                  ? 'bg-rose-950 text-rose-300'
                  : 'text-slate-400'
              }`}>
                {log.type}
              </span>
              <span className={`${
                log.type === 'error' ? 'text-rose-300' : log.type === 'warn' ? 'text-amber-300' : 'text-slate-200'
              }`}>
                {log.text}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommand} className="flex items-center px-3 py-2 bg-[#090d16] border-t border-slate-800">
          <span className="text-cyan-400 font-mono-tech text-xs mr-2 font-bold select-none">
            nexus@cyborg:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type command (e.g. help, overclock, status)..."
            className="flex-1 bg-transparent text-xs font-mono-tech text-white focus:outline-none placeholder-slate-600"
            autoFocus
          />
          <button type="submit" className="text-slate-400 hover:text-cyan-400 p-1">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
};
