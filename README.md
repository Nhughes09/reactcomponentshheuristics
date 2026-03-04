# React Components HHeuristics

A curated collection of **premium, production-ready React components** built with **Next.js**, **shadcn/ui**, **Tailwind CSS**, and **TypeScript**. Designed for professional development and AI-assisted coding workflows.

> **Live Demo**: This project is deployed as the [Economic Diffusion](https://economicdiffusion.hheuristics.com/) research showcase — demonstrating every component in a real-world academic context.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Component Registry](#component-registry)
- [Font Strategy](#font-strategy)
- [Architecture & Design Patterns](#architecture--design-patterns)
- [Professional React Strategies](#professional-react-strategies)
- [Integration Guide for AI Agents](#integration-guide-for-ai-agents)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Nhughes09/reactcomponentshheuristics.git
cd reactcomponentshheuristics

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the full showcase.

---

## Component Registry

All components live in `src/components/ui/` and follow shadcn/ui conventions.

### 1. InteractiveGlobe (`interactive-globe.tsx`)

**Canvas-rendered, draggable 3D globe** with Fibonacci sphere dot distribution, arc connections between cities, pulsing markers with labels, and pointer-drag rotation.

```tsx
import { InteractiveGlobe } from "@/components/ui/interactive-globe";

<InteractiveGlobe
  size={460}
  dotColor="rgba(100, 180, 255, ALPHA)"
  arcColor="rgba(100, 180, 255, 0.5)"
  markerColor="rgba(100, 220, 255, 1)"
  autoRotateSpeed={0.002}
/>;
```

| Prop              | Type                                 | Default                   | Description                                  |
| ----------------- | ------------------------------------ | ------------------------- | -------------------------------------------- |
| `size`            | `number`                             | `600`                     | Canvas size in pixels                        |
| `dotColor`        | `string`                             | `rgba(100,180,255,ALPHA)` | Dot color with `ALPHA` placeholder for depth |
| `arcColor`        | `string`                             | `rgba(100,180,255,0.5)`   | Connection arc stroke color                  |
| `markerColor`     | `string`                             | `rgba(100,220,255,1)`     | Marker and label color                       |
| `autoRotateSpeed` | `number`                             | `0.002`                   | Rotation speed (rad/frame)                   |
| `connections`     | `{from: [lat,lng], to: [lat,lng]}[]` | 9 global routes           | Arc connections                              |
| `markers`         | `{lat, lng, label?}[]`               | 10 world cities           | Globe markers                                |

**Dependencies**: None (pure Canvas API)

---

### 2. GlowingEffect (`glowing-effect.tsx`)

**Mouse-tracking glow border** that follows cursor movement around card edges. Uses `motion/react` for smooth animation.

```tsx
import { GlowingEffect } from "@/components/ui/glowing-effect";

<div className="relative rounded-2xl border p-2">
  <GlowingEffect
    spread={40}
    glow
    proximity={64}
    inactiveZone={0.01}
    borderWidth={3}
  />
  <div className="relative rounded-xl bg-white p-6">{/* Card content */}</div>
</div>;
```

| Prop           | Type      | Default | Description                   |
| -------------- | --------- | ------- | ----------------------------- |
| `blur`         | `number`  | `0`     | Blur radius of the glow       |
| `spread`       | `number`  | `20`    | Spread radius                 |
| `proximity`    | `number`  | `64`    | Activation distance from edge |
| `glow`         | `boolean` | `false` | Enable glow effect            |
| `inactiveZone` | `number`  | `0.7`   | Dead zone ratio (center)      |
| `borderWidth`  | `number`  | `1`     | Border thickness              |

**Dependencies**: `motion`

---

### 3. ContainerScroll (`container-scroll-animation.tsx`)

**3D perspective scroll animation** that creates a cinematic tilt-and-scale reveal as the user scrolls.

```tsx
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

<ContainerScroll titleComponent={<h2>Title</h2>}>
  <Image src="..." alt="..." width={1400} height={720} />
</ContainerScroll>;
```

| Prop             | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| `titleComponent` | `ReactNode` | Header content above the scroll container |
| `children`       | `ReactNode` | Content that gets the 3D transform        |

**Dependencies**: `framer-motion`

---

### 4. AnimatedHero (`animated-hero.tsx`)

**Hero section** with spring-physics animated title that cycles through words, plus CTA buttons.

```tsx
import { Hero as AnimatedHero } from "@/components/ui/animated-hero";

<AnimatedHero />;
```

The component cycles through configurable words (`["amazing", "new", "wonderful", "beautiful", "smart"]`) with spring-based enter/exit animations.

**Dependencies**: `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority`

---

### 5. DisplayCards (`display-cards.tsx`)

**Stacked, skewed card layout** with grayscale-to-color hover reveals and smooth transforms.

```tsx
import DisplayCards from "@/components/ui/display-cards";

<DisplayCards
  cards={[
    {
      icon: <Wand2 className="size-4 text-violet-300" />,
      title: "AI Powered",
      description: "Built for Claude & Cursor",
      date: "New",
      titleClassName: "text-violet-400",
      className: "[grid-area:stack] hover:-translate-y-10 ...",
    },
    // ...more cards
  ]}
/>;
```

**Dependencies**: `lucide-react`

---

### 6. SplineScene (`splite.tsx`)

**Lazy-loaded 3D scene wrapper** for [Spline](https://spline.design/). Accepts any Spline scene URL.

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>;
```

**Dependencies**: `@splinetool/react-spline`, `@splinetool/runtime`

---

### 7. PulseBeams (`pulse-beams.tsx`)

**Animated SVG beam paths** with gradient pulses flowing between connection points. Used for dramatic CTAs or network visualizations.

```tsx
import { PulseBeams } from "@/components/ui/pulse-beams";

<PulseBeams
  beams={beamConfig}
  gradientColors={{ start: "#18CCFC", middle: "#6344F5", end: "#AE48FF" }}
  className="bg-slate-950"
>
  <button>Connect</button>
</PulseBeams>;
```

**Dependencies**: `framer-motion`

---

### 8. Spotlight (`spotlight.tsx`)

**SVG-based animated spotlight effect** for dramatic hero sections. Fades in with scale animation.

```tsx
import { Spotlight } from "@/components/ui/spotlight";

<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />;
```

**Dependencies**: None

---

### 9. BorderBeam (`border-beam.tsx`)

**Animated beam** that travels along element borders with configurable gradient colors.

```tsx
import { BorderBeam } from "@/components/ui/border-beam";

<div className="relative rounded-2xl">
  <BorderBeam size={250} duration={12} colorFrom="#0ea5e9" colorTo="#8b5cf6" />
  {/* Content */}
</div>;
```

| Prop        | Type     | Default   | Description                  |
| ----------- | -------- | --------- | ---------------------------- |
| `size`      | `number` | `200`     | Beam size                    |
| `duration`  | `number` | `15`      | Animation duration (seconds) |
| `colorFrom` | `string` | `#ffaa40` | Gradient start color         |
| `colorTo`   | `string` | `#9c40ff` | Gradient end color           |

**Dependencies**: None (CSS animation)

---

### 10. RetroGrid (`retro-grid.tsx`)

**Animated perspective grid background** with vanishing-point effect. Great for hero sections.

```tsx
import { RetroGrid } from "@/components/ui/retro-grid";

<div className="relative overflow-hidden">
  <RetroGrid angle={65} />
  {/* Content on top */}
</div>;
```

**Dependencies**: None (CSS animation)

---

### 11. Card (`card.tsx`)

**Versatile shadcn card component** with `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` subcomponents.

**Dependencies**: None

---

## Font Strategy

### Primary: **Playfair Display** (serif)

- Used for: All headings, section titles, numerical displays
- Weight: 400–700
- Purpose: Establishes authority and editorial sophistication
- Loaded via Google Fonts `link` tag in `layout.tsx`

### Secondary: **Inter** (sans-serif)

- Used for: Body text, UI labels, navigation, descriptions
- Weight: 300–700
- Purpose: Maximum readability at small sizes, clean interface text

### Monospace: **Geist Mono** (via Next.js)

- Used for: Code snippets, file paths, dependency tags
- Purpose: Technical content differentiation

### Implementation Pattern

```tsx
// Define shared style object for serif headings
const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };

// Apply to headings
<h2 style={{ ...playfair, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
  Section Title
</h2>

// Body text inherits Inter from the <body> element
<p className="text-[14.5px] text-slate-500 leading-relaxed">
  Body content
</p>
```

### Why This Pairing Works

- **Contrast**: Serif headings create visual hierarchy against sans-serif body text
- **Readability**: Inter is optimized for screen rendering at all sizes
- **Authority**: Playfair Display conveys academic/editorial credibility
- **Performance**: Both fonts are loaded via Google Fonts CDN with `preconnect`

---

## Architecture & Design Patterns

### Component Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, animations, utilities
│   ├── layout.tsx         # Root layout with fonts, meta, SEO
│   └── page.tsx           # Main page assembling all sections
├── components/
│   └── ui/                # All reusable components (shadcn convention)
│       ├── animated-hero.tsx
│       ├── border-beam.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── container-scroll-animation.tsx
│       ├── display-cards.tsx
│       ├── glowing-effect.tsx
│       ├── interactive-globe.tsx
│       ├── pulse-beams.tsx
│       ├── retro-grid.tsx
│       ├── splite.tsx
│       └── spotlight.tsx
└── lib/
    └── utils.ts           # cn() utility for class merging
```

### Section-Based Architecture

The page is organized as **self-contained section components**:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <DefinitionSection />
      <ConceptsSection />
      <TheorySection />
      <CaseStudiesSection />
      <StagesSection />
      <PolicySection />
      <PathForwardSection />
      <Footer />
    </div>
  );
}
```

Each section is self-contained: owns its data, styling, and animation logic. No prop-drilling between sections.

---

## Professional React Strategies

### 1. Animation Wrappers (Don't Repeat Yourself)

Instead of adding `motion` props to every element, create reusable animation wrappers:

```tsx
// Scroll-triggered fade-up for entire sections
function AnimatedSection({ children, className, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Stagger children for lists/grids
function StaggerChildren({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual staggered child
function FadeChild({ children, className }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### 2. Type-Safe Ease Curves

Framer Motion's TypeScript types require explicit tuples for cubic bezier easing:

```tsx
// ❌ Bad — TypeScript error: number[] not assignable to Easing
transition={{ ease: [0.22, 1, 0.36, 1] }}

// ✅ Good — explicit 4-tuple type assertion
transition={{ ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
```

### 3. Shared Style Objects (Not Inline Repetition)

```tsx
// ❌ Bad — repeating font-family on every heading
<h2 style={{ fontFamily: "'Playfair Display', serif" }}>...</h2>
<h3 style={{ fontFamily: "'Playfair Display', serif" }}>...</h3>

// ✅ Good — define once, spread everywhere
const playfair = { fontFamily: "'Playfair Display', Georgia, serif" };
<h2 style={playfair}>...</h2>
<h3 style={playfair}>...</h3>
```

### 4. Section Headers (Centralized Component)

```tsx
// ❌ Bad — copy-pasting header markup in every section
// ✅ Good — single reusable component
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <p className="text-[12px] font-semibold tracking-[0.18em] uppercase text-sky-500 mb-3">
        {eyebrow}
      </p>
      <h2 style={playfair} className="text-3xl font-bold text-blue-900 mb-3">
        {title}
      </h2>
      <p className="text-slate-400 text-[15px] max-w-lg mx-auto">{subtitle}</p>
    </div>
  );
}
```

### 5. Data-Driven Rendering

```tsx
// ❌ Bad — hardcoded JSX for each card
<div className="card">Green Revolution</div>
<div className="card">Mobile Money</div>
<div className="card">Industrial Clusters</div>

// ✅ Good — data array + .map()
const cases = [
  { icon: <Leaf />, title: "Green Revolution", desc: "..." },
  { icon: <Smartphone />, title: "Mobile Money", desc: "..." },
  // ...
];

{cases.map((cs) => (
  <div key={cs.title} className="card">
    {cs.icon} <h3>{cs.title}</h3> <p>{cs.desc}</p>
  </div>
))}
```

### 6. CSS Design Tokens (Not Magic Numbers)

All animations, gradients, and utilities are defined in `globals.css` as reusable classes:

```css
/* Reusable gradient text — apply via className="gradient-text" */
.gradient-text {
  background-image: linear-gradient(135deg, #0ea5e9, #8b5cf6, #0ea5e9);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 4s ease infinite;
}

/* Reusable section divider */
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
}
```

### 7. Background Depth with Gradient Shaders

Instead of flat white backgrounds, use layered gradient "shaders":

```tsx
<section className="relative">
  {/* Background shader — creates subtle depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white pointer-events-none" />

  {/* Content on top */}
  <div className="relative max-w-[1100px] mx-auto">{/* ... */}</div>
</section>
```

### 8. Performance: Lazy Loading Heavy Components

```tsx
// Spline 3D scenes are heavy — lazy-load them
const Spline = lazy(() => import("@splinetool/react-spline"));

export function SplineScene({ scene, className }) {
  return (
    <Suspense fallback={<div className="loader" />}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}
```

---

## Integration Guide for AI Agents

This repository is structured for easy consumption by AI coding assistants (Claude, Cursor, Copilot, etc.).

### Copy a Single Component

```bash
# Copy the component file
cp src/components/ui/interactive-globe.tsx your-project/src/components/ui/

# Ensure you have the cn() utility
cp src/lib/utils.ts your-project/src/lib/
```

### Required Peer Dependencies

```bash
# Core animation libraries (install all for full compatibility)
npm install motion framer-motion

# Icons
npm install lucide-react

# shadcn/ui base
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge

# Spline (only if using SplineScene)
npm install @splinetool/react-spline @splinetool/runtime
```

### Component Dependency Map

| Component        | External Dependencies                                                               |
| ---------------- | ----------------------------------------------------------------------------------- |
| InteractiveGlobe | _none_                                                                              |
| GlowingEffect    | `motion`                                                                            |
| ContainerScroll  | `framer-motion`                                                                     |
| AnimatedHero     | `framer-motion`, `lucide-react`, `@radix-ui/react-slot`, `class-variance-authority` |
| DisplayCards     | `lucide-react`                                                                      |
| SplineScene      | `@splinetool/react-spline`, `@splinetool/runtime`                                   |
| PulseBeams       | `framer-motion`                                                                     |
| Spotlight        | _none_                                                                              |
| BorderBeam       | _none_ (CSS)                                                                        |
| RetroGrid        | _none_ (CSS)                                                                        |
| Card             | _none_                                                                              |

---

## Dependencies

```json
{
  "next": "^16.x",
  "react": "^19.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "framer-motion": "^12.x",
  "motion": "^12.x",
  "lucide-react": "^0.47x",
  "@splinetool/react-spline": "^4.x",
  "@radix-ui/react-slot": "^1.x",
  "class-variance-authority": "^0.7.x",
  "clsx": "^2.x",
  "tailwind-merge": "^3.x"
}
```

---

## License

MIT — Built by [@Nhughes09](https://github.com/Nhughes09) for [HHeuristics](https://hheuristics.com).
