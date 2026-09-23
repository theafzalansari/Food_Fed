# Food Fed 🌱
### From Surplus to Sustenance. From Waste to Renewal.

---

## About

**Food Fed** is a student-led Community Engagement Program (CEP) initiative currently focused on **Nashik, Maharashtra**.

The initiative explores a practical community food-rescue framework designed to connect surplus edible food from homes, restaurants, events, and canteens with people who need it — while giving unavoidable organic waste a second life through appropriate processing such as composting or biogas.

> **Note:** Food Fed is currently an active proposed and developing CEP student initiative. We do not claim past metrics of food rescued or meals served; our goal is to build a safe, scalable, and community-driven model.

---

## The Problem

- **Surplus Food Waste:** Tonnes of edible food are discarded daily from households and commercial kitchens before reaching a table.
- **Persistent Hunger:** Millions of individuals experience food insecurity and undernourishment locally and globally.
- **Safety Triage:** Food that is no longer safe for human consumption must never be redistributed.
- **Nutrient Renewal:** Unfit organic waste can instead be directed toward composting and biogas processing, returning nutrients back to the earth rather than polluting landfills.

---

## Our Proposed Model

Food Fed operates on a **dual-pathway concept** that guarantees zero waste of edible meals while cleanly recycling unconsumable organic matter.

```
Surplus Food
   │
   ▼
Collect & Check (Safety Triage)
   ├── Safe & Edible  ────────► People / Community Partners ──► Nutritious Meals
   │
   └── Unsafe / Unfit ────────► Organic Waste Processing ────► Compost / Biogas ──► Soil 🌱
```

1. **Path 1 (Safe Food):** Edible food is verified and routed directly to community partners and individuals in need.
2. **Path 2 (Organic Renewal):** Food unfit for consumption is safely diverted to composting pits or biogas facilities to enrich local soil ecosystems.

---

## How It Works

1. **01 — Discover:** Identify surplus edible food sources across homes, restaurants, events, and canteens.
2. **02 — Check:** Perform quality and hygiene assessments to determine safety for redistribution.
3. **03 — Redirect:** Safely transport edible food to community partners and shelters.
4. **04 — Renew:** Route unavoidable organic waste to local composting or biogas processing units.

---

## Current Focus

📍 **Nashik, Maharashtra**

The initiative is actively being developed as part of a student Community Engagement Program (CEP) to test local food rescue logistics, community outreach, and partner integrations within Nashik.

---

## Team

### **Afzal Ansari**
Founder & Director – Strategy & Technology

### **Sahil Bhalerao**
Co-Founder & Director – Operations & Community

### **Mahendra**
Community Outreach & Partnerships

### **Siddhesh**
Logistics & Food Safety

### **Rushikesh**
Volunteer & Field Coordination

---

## Website Features

- **Responsive Landing Page:** Fully optimized editorial design built for desktop and mobile viewports.
- **Problem & Impact Data:** Verified statistics from international reports (FAO, Global Hunger Index, UNEP).
- **Interactive Dual-Path Model:** Visual closed-loop flowchart detailing food redistribution vs. organic waste processing.
- **4-Step Workflow:** Clean break-down of the operational discovery and triage pipeline.
- **Nashik Focus:** Clear location indicators and community-driven context.
- **Meet the Team:** Visual cards highlighting student project leads and coordinators.
- **Feedback Integration:** Google Form configuration structure ready for community feedback.
- **Volunteer & Direct WhatsApp Contact:** Instant WhatsApp contact buttons for project coordinators.
- **Official Food Fed Poster:** Interactive visual storytelling frame displaying the initiative's poster.
- **Support & Contribution Scanner:** Interactive QR scanner module with lightbox zoom for UPI contributions.

---

## Tech Stack

- **Core Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Utilities:** `clsx`, `tailwind-merge`

---

## Project Structure

```
Food_Fed/
├── public/
│   ├── favicon.svg          # Favicon graphic
│   ├── logo.jpeg            # Official Food Fed logo
│   ├── poster.jpeg          # Food Fed official proposal poster
│   └── scanner.jpeg         # UPI Contribution QR code scanner
├── src/
│   ├── assets/              # Local design assets
│   ├── components/
│   │   ├── Navbar.jsx       # Glassmorphism header with navigation & logo
│   │   ├── Hero.jsx         # Hero section featuring actual Food Fed poster
│   │   ├── ProblemSection.jsx  # Hunger & food waste stats with verified sources
│   │   ├── OurModelSection.jsx # Interactive closed-loop flowchart
│   │   ├── HowItWorksSection.jsx # Deep green 4-step workflow
│   │   ├── VisionSection.jsx  # Circular nutrient cycle & philosophy
│   │   ├── SupportSection.jsx # QR code scanner & contribution lightbox
│   │   ├── TeamSection.jsx    # 5 student team cards
│   │   ├── FeedbackSection.jsx # Google Form feedback integration
│   │   ├── VolunteerSection.jsx# Direct WhatsApp contact cards
│   │   ├── SafeImage.jsx      # Image fallback handler component
│   │   └── Footer.jsx         # Footer with quick links & Nashik CEP info
│   ├── config/
│   │   └── siteConfig.js    # Centralized configuration (Google Form URL, contacts, team)
│   ├── App.jsx              # Main page assembly
│   ├── main.jsx             # React DOM entry point
│   └── index.css            # Tailwind CSS imports & theme styling
├── index.html               # Main HTML template
├── vite.config.js           # Vite build configuration
└── package.json             # Dependencies and scripts
```

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18+) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/theafzalansari/Food_Fed.git
   cd Food_Fed
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```

---

*Food Fed — Student-Led Community Engagement Program (CEP) Initiative | Currently Serving Nashik, Maharashtra*
