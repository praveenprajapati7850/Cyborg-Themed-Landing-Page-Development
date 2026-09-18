export type AugmentCategory = 'all' | 'neural' | 'sensory' | 'biomechanical' | 'defense' | 'locomotion';

export type SecurityClearance = 'CIVILIAN' | 'OPERATIVE' | 'BLACK-OPS' | 'PROTOTYPE';

export interface AugmentItem {
  id: string;
  serialNumber: string;
  name: string;
  category: 'neural' | 'sensory' | 'biomechanical' | 'defense' | 'locomotion';
  tagline: string;
  description: string;
  clearance: SecurityClearance;
  compatibilityScore: number; // e.g. 98%
  powerConsumptionWatts: number;
  synapticLatencyMs: number;
  overclockBonus: string;
  features: string[];
  imageUrl: string;
  accentColor: string;
  installed?: boolean;
}

export interface AnatomyNode {
  id: string;
  label: string;
  category: string;
  system: string;
  xPercent: number; // 0-100% position on anatomy canvas
  yPercent: number;
  status: 'NOMINAL' | 'OVERCLOCKED' | 'SYNCED' | 'STANDBY';
  telemetry: {
    syncRate: string;
    powerDrain: string;
    thermal: string;
    bandwidth: string;
  };
  details: string;
  schematicCode: string;
  firmware: string;
}

export interface SystemTelemetry {
  neuralLatency: number; // ms
  coreIntegrity: number; // percentage
  batteryLifeHours: number;
  overclockPercent: number;
  thermalKelvin: number;
  synapticBandwidthTbps: number;
}

export interface UserLoadout {
  callsign: string;
  clearanceLevel: SecurityClearance;
  selectedAugments: AugmentItem[];
  totalPowerWatts: number;
  avgCompatibility: number;
  neuralLoadIndex: number;
}

export interface TerminalLog {
  id: string;
  timestamp: string;
  type: 'info' | 'warn' | 'success' | 'system' | 'error';
  text: string;
}
