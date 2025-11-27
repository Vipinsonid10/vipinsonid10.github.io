# CyberTech Nexus - Next.js Website

A modern, interactive website built with Next.js 14, TypeScript, and Tailwind CSS, featuring a 3D animated background and an interactive world map showing our global team presence.

## 🚀 Features

- **Next.js 14** with App Router and TypeScript
- **Interactive World Map** with animated connections between global offices
- **Dark Theme** using next-themes
- **Glass-morphism UI** with smooth animations
- **Responsive Design** optimized for mobile, tablet, and desktop
- **SEO Optimized** with proper meta tags and semantic HTML

## 📦 Tech Stack

- **Framework:** Next.js 14.2+
- **Language:** TypeScript 5.4+
- **Styling:** Tailwind CSS 3.4+
- **Animations:** Framer Motion 11+
- **Icons:** Lucide React
- **World Map:** dotted-map
- **Theme:** next-themes

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vipinsonid10/V2.labs.git
cd V2.labs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # Theme provider wrapper
│   └── our-team/
│       └── page.tsx        # Our Team page with WorldMap
├── components/
│   └── ui/
│       └── map.tsx         # Interactive WorldMap component
├── styles/
│   └── globals.css         # Global styles and animations
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🗺️ WorldMap Component

The WorldMap component displays an interactive dotted world map with animated connections between global locations.

### Usage

```tsx
import { WorldMap } from "@/components/ui/map";

const connections = [
  {
    start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  // Add more connections...
];

<WorldMap
  dots={connections}
  lineColor="#06b6d4"
  showLabels={true}
  animationDuration={3}
  loop={true}
/>
```

### Props

- `dots` - Array of connection objects with start/end coordinates and labels
- `lineColor` - Color of the connection lines (default: "#06b6d4")
- `showLabels` - Whether to show location labels (default: true)
- `labelClassName` - Additional CSS classes for labels
- `animationDuration` - Duration of line animation in seconds (default: 3)
- `loop` - Whether to loop the animation (default: true)

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  cyan: {
    "400": "#22d3ee",
    "500": "#06b6d4",
  },
}
```

### Glass-morphism Effect

The `.glass-card` class in `styles/globals.css` provides the glass-morphism effect:

```css
.glass-card {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(51, 65, 85, 0.3);
}
```

## 📄 Pages

### Home Page (`/`)
- Hero section with parallax mountain animation
- Featured technology cards
- Navigation to all sections

### Our Team Page (`/our-team`)
- Global team statistics
- Interactive world map with office connections
- Team location cards with details
- Call-to-action section

## 🔧 Configuration

### Image Domains

Add image domains in `next.config.js`:

```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

## 📝 License

All rights reserved © 2025 CyberTech Nexus

## 🤝 Contributing

This is a private project. For any questions or suggestions, please contact the development team.
