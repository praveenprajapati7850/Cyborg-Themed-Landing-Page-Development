# ⚡ NEXUS // CYBORG — Neural Augmentation Systems

<div align="center">

[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00f0ff?style=for-the-badge)](LICENSE)

**Transcending the Biological Limit.**  
A high-tech, fully responsive cyborg landing page featuring interactive telemetry HUDs, real-time synaptic reflex benchmarking, procedural Web Audio sound synthesis, and a holographic security pass generator.

[🌐 **Live Demo (GitHub Pages)**](https://praveenprajapati7850.github.io/Cyborg-Themed-Landing-Page-Development/) &nbsp;•&nbsp; [⚡ **Cloud Run Preview**](https://ais-pre-klmbse2g2w25qubbsueq4c-807849025208.asia-southeast1.run.app)

</div>

---

## 📸 Overview & Design Philosophy

**NEXUS // CYBORG** is engineered around a tactile, futuristic aesthetic:
- **Matte Carbon & Obsidian Palette**: Deep `#07090e` black canvas paired with electric cyan (`#00f0ff`), hazard amber (`#ffb000`), and cyber crimson (`#ff2a5f`) telemetry accents.
- **Sci-Fi Angular Chamfers**: Precision polygon cuts (`clip-path: polygon(...)`) with high-contrast borders and subtle grid scanline effects.
- **Auditory Immersion**: Procedural Web Audio API sound synthesis providing tactile UI feedback (blips, scanning sweeps, overclock surges) without external audio dependencies.

---

## ✨ Key Interactive Features

### 🧬 1. Interactive Anatomy HUD (Cyborg Body Inspector)
- **Clickable Anatomical Hotspots**: Inspect the Cerebral Cortex, Ocular HUD, Spinal Conduit, Myoelectric Hand, Subdermal Carapace, and Cheetah Locomotive Calves.
- **Multi-Spectrum Diagnostics**: Toggle between **Standard HUD**, **X-Ray Wireframe**, **Thermal Flux**, and **Overclock** visualization modes.
- **Real-Time Oscilloscope**: Visualizes live synaptic frequency waveforms matching active telemetry nodes.

### ⚡ 2. Neural Reflex & Compatibility Lab
- **Millisecond Reaction Benchmark**: A real-time reaction speed test measuring human synaptic reflex against organic baselines (~250ms) and cyborg targets (0.08ms).
- **Tactical Profile Matcher**: Choose operational specializations (Cortical Analyst, Tactical Assault, Ghost Infiltration, Survival Rig) to calculate your assigned Cyborg Rating (e.g. *Class-S Transcendent*).

### 🗂️ 3. Bionic Hardware Matrix
- **Categorized Hardware Catalog**: Filter augments across Neural, Sensory, Biomechanical, Defense, and Locomotion categories.
- **Deep Spec Sheets**: Inspect power consumption (Watts), synaptic latency (ms), bio-compatibility percentages, and overclock thresholds.
- **Loadout Integration**: Add or remove hardware components directly into your active operational loadout.

### 🪪 4. Holographic Clearance Pass Generator
- **Real-Time Loadout Balancer**: Calculates total wattage, average latency, and cortical strain index.
- **Customizable Operative Credentials**: Set custom callsigns (`OPERATIVE_ALPHA_01`) and clearance tiers (*Civilian*, *Operative*, *Black-Ops*).
- **Holographic Security Pass**: Shimmering holographic card with animated biometric fingerprint verification, QR matrix, and cryptographic token generator.

### 💻 5. Cyberpunk Command-Line Terminal (CLI)
- Built-in interactive command console accessible anywhere on the page.
- Supports commands: `help`, `status`, `augments`, `scan`, `overclock`, `ping`, `clear`, and `exit`.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component-driven UI architecture |
| **TypeScript** | Strict static type checking and interface contracts |
| **Tailwind CSS v4** | Next-generation utility-first styling and theme variables |
| **Lucide React** | Consistent, futuristic iconography |
| **Motion** | Fluid layout and route transitions |
| **Web Audio API** | Zero-asset procedural audio generation |
| **Vite 8** | High-speed ESM build system and bundling |

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm (or yarn / pnpm / bun)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/praveenprajapati7850/Cyborg-Themed-Landing-Page-Development.git
   cd Cyborg-Themed-Landing-Page-Development
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be placed in the `/dist` directory.

---

## 📂 Project Structure

```text
├── .github/workflows/
│   └── deploy.yml            # Automated GitHub Actions Pages deployment
├── public/                   # Static public assets
├── src/
│   ├── components/
│   │   ├── AugmentCatalog.tsx         # Bionic hardware catalog & filter
│   │   ├── CyberFooter.tsx            # Telemetry footer & status bar
│   │   ├── CyberHeader.tsx            # Navigation bar, audio toggle & clock
│   │   ├── CyberTerminal.tsx          # Interactive in-browser CLI deck
│   │   ├── HeroSection.tsx            # Hero visual with live targeting HUD
│   │   ├── InteractiveAnatomyHUD.tsx  # Cybernetic body inspector
│   │   ├── LoadoutClearanceModal.tsx  # Holographic pass generator & loadout
│   │   ├── NeuralCalibrator.tsx       # Reflex reaction time benchmark
│   │   └── TechArchitecture.tsx       # Comparative specs & FAQ accordion
│   ├── data/
│   │   └── cyberData.ts      # Augmentation specs, anatomy nodes & FAQs
│   ├── utils/
│   │   └── audio.ts          # Procedural Web Audio API sound synthesizer
│   ├── types.ts              # TypeScript interfaces and data models
│   ├── index.css             # Tailwind CSS v4 directives & custom chamfers
│   ├── App.tsx               # Main application orchestration
│   └── main.tsx              # React entry point with diagnostic ErrorBoundary
├── .npmrc                    # npm legacy peer dependencies flag
├── package.json              # Project dependencies & scripts
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite build configuration (base: './')
```

---

## 🌐 Deployment

### GitHub Pages (Automated)
This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the application:
1. Go to **Settings** &rarr; **Actions** &rarr; **General** &rarr; **Workflow permissions** and select **"Read and write permissions"**.
2. Go to **Settings** &rarr; **Pages** &rarr; set **Source** to **"GitHub Actions"**.
3. Push to `main` — GitHub will build and publish your site automatically.

### Vercel / Netlify
1. Import your GitHub repository into [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/).
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for details.
