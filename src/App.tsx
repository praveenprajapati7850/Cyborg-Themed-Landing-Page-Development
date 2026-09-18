import React, { useState } from 'react';
import { CyberHeader } from './components/CyberHeader';
import { HeroSection } from './components/HeroSection';
import { InteractiveAnatomyHUD } from './components/InteractiveAnatomyHUD';
import { AugmentCatalog } from './components/AugmentCatalog';
import { NeuralCalibrator } from './components/NeuralCalibrator';
import { TechArchitecture } from './components/TechArchitecture';
import { CyberTerminal } from './components/CyberTerminal';
import { LoadoutClearanceModal } from './components/LoadoutClearanceModal';
import { CyberFooter } from './components/CyberFooter';
import { AugmentItem, AnatomyNode } from './types';
import { AUGMENT_CATALOG } from './data/cyberData';
import { cyberAudio } from './utils/audio';

export default function App() {
  // Initialize with 2 default augments to provide immediate tactile engagement
  const [loadoutItems, setLoadoutItems] = useState<AugmentItem[]>([
    AUGMENT_CATALOG[0], // Cortex Link
    AUGMENT_CATALOG[1], // Multispectral Ocular HUD
  ]);

  const [isLoadoutModalOpen, setIsLoadoutModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Toggle an item in or out of loadout
  const handleToggleLoadout = (item: AugmentItem) => {
    setLoadoutItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const handleRemoveFromLoadout = (id: string) => {
    setLoadoutItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearAllLoadout = () => {
    cyberAudio.playHover();
    setLoadoutItems([]);
  };

  // Add augment matching an anatomical node
  const handleSelectAugmentFromNode = (node: AnatomyNode) => {
    const matchingAugment = AUGMENT_CATALOG.find((a) => {
      if (node.id === 'node-cortex') return a.id === 'nx-cortex-v9';
      if (node.id === 'node-ocular') return a.id === 'nx-ocular-iris';
      if (node.id === 'node-arm-left') return a.id === 'nx-arm-myomer';
      if (node.id === 'node-spine') return a.id === 'nx-spinal-conduit';
      if (node.id === 'node-dermal') return a.id === 'nx-dermal-weave';
      if (node.id === 'node-legs') return a.id === 'nx-legs-locomotion';
      if (node.id === 'node-core') return a.id === 'nx-fusion-heart';
      return false;
    });

    if (matchingAugment) {
      if (!loadoutItems.some((i) => i.id === matchingAugment.id)) {
        setLoadoutItems((prev) => [...prev, matchingAugment]);
      }
      setIsLoadoutModalOpen(true);
    }
  };

  // Load recommended batch from Neural Calibrator
  const handleLoadRecommendedAugments = (augments: AugmentItem[]) => {
    setLoadoutItems(augments);
    setIsLoadoutModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* HUD Header */}
      <CyberHeader
        loadoutCount={loadoutItems.length}
        onOpenLoadout={() => setIsLoadoutModalOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenLoadout={() => setIsLoadoutModalOpen(true)}
          onExploreAnatomy={() => scrollToSection('anatomy-hud')}
        />

        {/* Section 02: Interactive Anatomy HUD (Cyborg Inspector) */}
        <InteractiveAnatomyHUD
          onSelectAugmentFromNode={handleSelectAugmentFromNode}
        />

        {/* Section 03: Hardware & Augment Matrix */}
        <AugmentCatalog
          loadoutIds={loadoutItems.map((i) => i.id)}
          onToggleLoadout={handleToggleLoadout}
          onOpenLoadoutDrawer={() => setIsLoadoutModalOpen(true)}
        />

        {/* Section 04: Neural Reflex Calibrator & Compatibility Lab */}
        <NeuralCalibrator
          onLoadRecommendedAugments={handleLoadRecommendedAugments}
        />

        {/* Section 05: Biomechanical Engineering & Specs */}
        <TechArchitecture />
      </main>

      {/* Interactive Command Line Terminal (CLI) */}
      <CyberTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOverclockTrigger={() => {
          // Play sound and notification
          cyberAudio.playOverclock();
        }}
      />

      {/* Interactive Loadout Clearance & Pass Modal */}
      <LoadoutClearanceModal
        isOpen={isLoadoutModalOpen}
        onClose={() => setIsLoadoutModalOpen(false)}
        loadoutItems={loadoutItems}
        onRemoveItem={handleRemoveFromLoadout}
        onClearAll={handleClearAllLoadout}
      />

      {/* Footer */}
      <CyberFooter />

    </div>
  );
}
