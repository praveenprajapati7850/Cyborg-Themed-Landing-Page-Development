import { AugmentItem, AnatomyNode } from '../types';

export const AUGMENT_CATALOG: AugmentItem[] = [
  {
    id: 'nx-cortex-v9',
    serialNumber: 'NX-9011-CTX',
    name: 'Neural Cortex Link Gen-IV',
    category: 'neural',
    tagline: 'Direct quantum synaptic bridge with 100 Tbps bandwidth',
    description: 'Bypasses chemical synaptic lag by anchoring micro-graphene neural filaments directly into the cerebral cortex and motor strip. Enables instant thought-to-network telepathy, encrypted data streaming, and synthetic memory recall.',
    clearance: 'OPERATIVE',
    compatibilityScore: 99.2,
    powerConsumptionWatts: 14,
    synapticLatencyMs: 0.08,
    overclockBonus: '+420% Cognition Speed',
    features: [
      'Sub-millisecond thought transmission',
      'Quantum-encrypted neural firewall',
      'Instant reflex motor bypass',
      'Photographic digital memory retention'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    accentColor: '#00f0ff'
  },
  {
    id: 'nx-ocular-iris',
    serialNumber: 'NX-4102-EYE',
    name: 'Multispectral Ocular HUD Array',
    category: 'sensory',
    tagline: 'Hyper-resolution synthetic iris with LiDAR & thermal overlays',
    description: 'Replaces organic ocular apparatus with sapphire-lens micro-sensors providing 240Hz refresh, infrared night vision, tactical telemetry tracking, and predictive optical target ballistics.',
    clearance: 'CIVILIAN',
    compatibilityScore: 98.6,
    powerConsumptionWatts: 8,
    synapticLatencyMs: 0.12,
    overclockBonus: '360° Threat Vector Prediction',
    features: [
      'Thermal, Ultraviolet & EM Spectrum Vision',
      'Integrated 40x Optical Zoom with Gyro Stabilization',
      'Real-time Optical Character & Biometric ID Scan',
      'Cornea Polarized HUD Overlay with Zero Glare'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    accentColor: '#00f0ff'
  },
  {
    id: 'nx-arm-myomer',
    serialNumber: 'NX-7720-ARM',
    name: 'Titanium-Myomer Kinetic Arm',
    category: 'biomechanical',
    tagline: 'Carbon fiber artificial muscles delivering 4,500 Nm torque',
    description: 'Forged from aerotitanium and layered artificial electro-active polymer bundles. Features sub-micron finger force sensors capable of either crushing solid granite or manipulating delicate nanotech filaments.',
    clearance: 'OPERATIVE',
    compatibilityScore: 97.4,
    powerConsumptionWatts: 65,
    synapticLatencyMs: 0.15,
    overclockBonus: '+300% Hydraulic Punch Force',
    features: [
      '4,500 Nm peak rotational torque',
      'Sub-micron tactile feedback fingertips',
      'Subdermal magnetic tool docking wrist',
      'Self-healing silicone-carbon dermis cover'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ffb000'
  },
  {
    id: 'nx-spinal-conduit',
    serialNumber: 'NX-3040-SPN',
    name: 'Graphene Vertebral Exoskeleton',
    category: 'biomechanical',
    tagline: 'Reinforced spinal column with automated shock dissipation',
    description: 'An external-internal spinal sheath that reinforces the central nervous system against high-G impacts, heavy load distribution, and spinal trauma while channeling power lines between cranial and limb augments.',
    clearance: 'CIVILIAN',
    compatibilityScore: 99.0,
    powerConsumptionWatts: 18,
    synapticLatencyMs: 0.05,
    overclockBonus: '2.5 Ton Axial Load Tolerance',
    features: [
      'Active magnetic dampeners for fall protection',
      'High-velocity sensory bus backbone',
      'Sub-second spinal alignment correction',
      'Dual redundant auxiliary power routing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    accentColor: '#00f0ff'
  },
  {
    id: 'nx-dermal-weave',
    serialNumber: 'NX-8822-DRM',
    name: 'Subdermal Graphene Honeycomb Armor',
    category: 'defense',
    tagline: 'Liquid shear-thickening ballistic mesh under epidermis',
    description: 'Microscopic carbon nanotube honeycomb embedded 2mm beneath skin layers. Remains completely soft and flexible during daily movement, but instantly crystallizes diamond-hard upon kinetic impact or thermal flash.',
    clearance: 'OPERATIVE',
    compatibilityScore: 96.8,
    powerConsumptionWatts: 12,
    synapticLatencyMs: 0.00,
    overclockBonus: 'Class-IV Ballistic Dispersion',
    features: [
      'Instantaneous non-Newtonian hardening',
      'Electrostatic bleed-off against EMP weapons',
      'Integrated subdermal heat dissipation grid',
      'Complete flexibility with zero mobility loss'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ff2a5f'
  },
  {
    id: 'nx-legs-locomotion',
    serialNumber: 'NX-5501-LEG',
    name: 'Pneumatic Cheetah-Drive Locomotion',
    category: 'locomotion',
    tagline: 'Shock-absorbing titanium legs engineered for 90 km/h sprint',
    description: 'Kinetic energy capture spring actuators and titanium tibia struts. Absorbs 10-meter vertical drop impacts with zero strain while multiplying top sprinting velocity and jump height fourfold.',
    clearance: 'BLACK-OPS',
    compatibilityScore: 95.5,
    powerConsumptionWatts: 80,
    synapticLatencyMs: 0.18,
    overclockBonus: '90 km/h Sprint Velocity',
    features: [
      'Kinetic regenerative energy harvesting',
      'Hydraulic fall arrest suspension',
      'Silent acoustic dampening footpads',
      'Micro-spike grip deployment for sheer vertical inclines'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ffb000'
  },
  {
    id: 'nx-fusion-heart',
    serialNumber: 'NX-0010-HRT',
    name: 'Sub-Cellular Micro-Fusion Core',
    category: 'biomechanical',
    tagline: 'Thermo-electric bio-battery with 20-year uncharged lifespan',
    description: 'Replaces organic cardiopulmonary fatigue with an ultra-compact magnetohydrodynamic power generator. Synthesizes ambient glucose and body heat to sustain 1,200 Watts of continuous cybernetic peak load.',
    clearance: 'BLACK-OPS',
    compatibilityScore: 94.2,
    powerConsumptionWatts: -850, // Negative means produces energy!
    synapticLatencyMs: 0.01,
    overclockBonus: 'Infinite Operational Autonomy',
    features: [
      'Perpetual bio-thermal glucose conversion',
      'Internal defibrillator & adrenaline injector',
      '1,200W surplus power bus for heavy cyberware',
      'Radiation-shielded titanium housing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    accentColor: '#ff2a5f'
  },
  {
    id: 'nx-neural-firewall',
    serialNumber: 'NX-1109-SEC',
    name: 'Aegis Quantum Neural Firewall',
    category: 'neural',
    tagline: 'Autonomous AI intrusion prevention for cortical links',
    description: 'Hardware co-processor that monitors neural packet traffic, detects hostile ICE (Intrusion Countermeasure Electronics), and terminates unauthorized synaptic breaches with zero cognitive disruption.',
    clearance: 'CIVILIAN',
    compatibilityScore: 99.8,
    powerConsumptionWatts: 5,
    synapticLatencyMs: 0.02,
    overclockBonus: 'Zero Synaptic Vulnerability',
    features: [
      'Zero-day cyber attack auto-isolation',
      'Quantum encrypted handshake protocols',
      'Psychological stress dampening buffer',
      'Subconscious biometric authentication lock'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    accentColor: '#00f0ff'
  }
];

export const ANATOMY_NODES: AnatomyNode[] = [
  {
    id: 'node-cortex',
    label: 'CEREBRAL CORTEX',
    category: 'Neural Bus v9.4',
    system: 'Cognitive & Telepathic Mesh',
    xPercent: 50,
    yPercent: 12,
    status: 'SYNCED',
    telemetry: {
      syncRate: '99.98%',
      powerDrain: '14.2 W',
      thermal: '309.8 K',
      bandwidth: '104.2 Tbps'
    },
    details: 'Direct nano-fiber weave interfacing with parietal and frontal lobes. Real-time cognitive overclocking and sub-conscious query processing active.',
    schematicCode: 'CRX-09-ALPHA',
    firmware: 'CYBER-OS v8.4.2-PRO'
  },
  {
    id: 'node-ocular',
    label: 'OCULAR APERTURE',
    category: 'Sensory Suite',
    system: 'Multispectral Retina Matrix',
    xPercent: 57,
    yPercent: 16,
    status: 'NOMINAL',
    telemetry: {
      syncRate: '100.0%',
      powerDrain: '8.4 W',
      thermal: '304.1 K',
      bandwidth: '32.0 Gbps'
    },
    details: 'Sapphire ocular crystal with dual IR/UV photodiodes. Target acquisition reticle calibrated with 0.02 milliradian accuracy.',
    schematicCode: 'OPT-77-RETINA',
    firmware: 'SPECTRUM-HD v3.1'
  },
  {
    id: 'node-spine',
    label: 'SPINAL EXOSHEATH',
    category: 'Skeletal Reinforcement',
    system: 'Carbon-Graphene Vertebrae',
    xPercent: 50,
    yPercent: 32,
    status: 'OVERCLOCKED',
    telemetry: {
      syncRate: '98.7%',
      powerDrain: '22.0 W',
      thermal: '312.4 K',
      bandwidth: '88.5 Tbps'
    },
    details: 'Active magnetic spine stabilizer. Distributes kinetic concussion from explosions or high falls evenly into dermal absorption grid.',
    schematicCode: 'SPN-V4-TITAN',
    firmware: 'GRAV-MITIGATE v2.9'
  },
  {
    id: 'node-core',
    label: 'MICRO-FUSION HEART',
    category: 'Core Metabolism',
    system: 'Magnetohydrodynamic Cell',
    xPercent: 50,
    yPercent: 42,
    status: 'NOMINAL',
    telemetry: {
      syncRate: '100.0%',
      powerDrain: '-850 W (GEN)',
      thermal: '318.2 K',
      bandwidth: '4.8 Gbps'
    },
    details: 'Perpetual metabolic generator producing high-amperage current for all synthetic implants while sustaining biological homeostasis.',
    schematicCode: 'FUS-CELL-88',
    firmware: 'CORE-REGULATOR v5.0'
  },
  {
    id: 'node-arm-left',
    label: 'TACTICAL MANIPULATOR',
    category: 'Musculoskeletal',
    system: 'Titanium-Polymer Myomer Arm',
    xPercent: 24,
    yPercent: 46,
    status: 'SYNCED',
    telemetry: {
      syncRate: '99.4%',
      powerDrain: '45.8 W',
      thermal: '308.6 K',
      bandwidth: '12.4 Gbps'
    },
    details: 'High-tensile carbon muscle weave with integrated high-frequency blade and micro-hydraulic gripping pistons.',
    schematicCode: 'ARM-KIN-45',
    firmware: 'TORQUE-SYNC v4.1'
  },
  {
    id: 'node-dermal',
    label: 'SUBDERMAL CARAPACE',
    category: 'Defensive Integument',
    system: 'Non-Newtonian Hex-Weave',
    xPercent: 50,
    yPercent: 58,
    status: 'STANDBY',
    telemetry: {
      syncRate: '97.2%',
      powerDrain: '11.5 W',
      thermal: '305.5 K',
      bandwidth: '1.2 Gbps'
    },
    details: 'Sub-cutaneous lattice absorbs up to 7,500 Joules of localized kinetic shock, dispersing force radially across skeletal truss.',
    schematicCode: 'DRM-HEX-99',
    firmware: 'AEGIS-SHEAR v1.8'
  },
  {
    id: 'node-legs',
    label: 'SPRINT LOCOMOTION',
    category: 'Locomotive Actuators',
    system: 'Hydraulic Carbon Springs',
    xPercent: 42,
    yPercent: 82,
    status: 'NOMINAL',
    telemetry: {
      syncRate: '99.1%',
      powerDrain: '62.0 W',
      thermal: '314.0 K',
      bandwidth: '18.0 Gbps'
    },
    details: 'High-density electro-active calves capable of vertical leaps up to 6 meters and 90 km/h burst sprinting with micro-pneumatic dampeners.',
    schematicCode: 'ACT-CHEETAH-01',
    firmware: 'KINETIC-BOOST v3.4'
  }
];

export const INITIAL_LOGS = [
  { id: '1', timestamp: '09:24:01', type: 'system' as const, text: 'NEXUS CYBERNETIC KERNEL v8.4.2 INITIALIZED' },
  { id: '2', timestamp: '09:24:02', type: 'info' as const, text: 'Quantum neural bridge established: 104.2 Tbps bandwidth' },
  { id: '3', timestamp: '09:24:04', type: 'success' as const, text: 'All 7 bio-mechanical chassis nodes operating at NOMINAL' },
  { id: '4', timestamp: '09:24:07', type: 'warn' as const, text: 'Overclock tolerance calibrated to +340% max threshold' },
  { id: '5', timestamp: '09:24:10', type: 'info' as const, text: 'HUD optical overlay sync verified. Zero synaptic latency detected' },
];

export const SYSTEM_SPECS = [
  {
    title: 'Zero Latency Synaptic Bus',
    value: '0.08ms',
    label: 'Reaction Latency',
    desc: 'Faster than biological nerve conduction by a factor of 40x'
  },
  {
    title: 'Titanium-Graphene Chassis',
    value: '14.8 GPa',
    label: 'Tensile Strength',
    desc: 'Withstands extreme ballistic, thermal, and atmospheric pressure'
  },
  {
    title: 'Continuous Autonomy',
    value: '20 YRS',
    label: 'Sub-Fusion Lifespan',
    desc: 'Biochemical thermo-electric kinetic harvesting without external plugs'
  },
  {
    title: 'Neural Firewall ICE',
    value: '256-BIT',
    label: 'Quantum Encryption',
    desc: 'Guarantees sovereign consciousness against digital intrusion'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does neural cortex integration prevent rejection?',
    a: 'NEXUS implants utilize bio-inert vitreous carbon and peptide-coated graphene electrodes that promote organic cellular adhesion. The immune system recognizes the cyberware as endogenous cellular scaffolding, eliminating the need for immunosuppressive medication.'
  },
  {
    q: 'What happens during a complete external EMP strike?',
    a: 'All NEXUS systems are encased within internal Faraday sub-meshes and optical light-pipe data buses. An EMP induces passive decoupling within 3 nanoseconds, redirecting the surge harmlessly to the ground via subdermal graphene bleed paths.'
  },
  {
    q: 'Can augments be overclocked without permanent tissue damage?',
    a: 'Yes. Our adaptive cryo-capillary cooling network dynamically vents excess thermal energy into the micro-fusion heat sink. The system operates within safe biological margins (under 314K) even during 300% burst outputs.'
  },
  {
    q: 'What is the procedure for obtaining Class-IV Operative clearance?',
    a: 'Operative clearance requires synaptic compatibility evaluation (minimum 95% score), psychological biometric stabilization review, and calibration at an authorized NEXUS cyber-clinic.'
  }
];
