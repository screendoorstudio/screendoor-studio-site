# Screendoor Studio Website

Minimal, cryptic digital business card for Screendoor Studio.

## Live Site
- **Production**: https://screendoorstudio.com
- **Vercel Dashboard**: https://vercel.com/screenteam/screendoor-studio-site
- **GitHub Repo**: https://github.com/screendoorstudio/screendoor-studio-site

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **Font**: VT323 (Google Fonts) for "make things" tagline

## Project Structure
```
screendoor-studio-site/
├── app/
│   ├── globals.css      # Tailwind + custom animations
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main (only) page
│   └── icon.svg         # Favicon (screen door mesh)
├── components/
│   ├── Particles.tsx    # Interactive particle system
│   └── ScreenDoor.tsx   # Interactive screen door with sound effects
├── public/
│   ├── logo.png         # 2025 logo (footer)
│   ├── door-creak.mp3   # Creaky door opening sound
│   └── door-slam.mp3    # Door slam closing sound
└── tailwind.config.ts   # Custom colors from logo
```

## Design Details

### Color Palette
- Background: `#0a0a0a` (near-black)
- Foreground: `#f5f5f5` (off-white)
- Accent: `#3BB4E5` (cyan blue from logo)
- Muted: `#4a4a4a` (charcoal grey)

### Visual Effects
- **Interactive Screen Door**: SVG door with 3D hinge animation, click to open/close with sound effects
- **Particles**: Canvas-based, mouse-reactive floating particles with connecting lines
- **Gradient mesh**: Animated radial gradients shifting in background
- **Grid overlay**: Faint pulsing cyan grid
- **Scan lines**: Subtle CRT monitor effect
- **Noise texture**: Barely visible grain overlay
- **Glitch effect**: Hover over title for RGB split glitch
- **Tagline glow**: "make things" pulses with cyan glow

### Screen Door Component
- SVG-based door matching the logo design (gray frame, cyan diamond mesh)
- CSS 3D transforms for realistic hinge animation (opens to 70 degrees)
- Sound effects from BigSoundBank.com (CC0 public domain):
  - `door-creak.mp3` - Creaky door sound on open (slow animation)
  - `door-slam.mp3` - Door slam on close (fast animation)
- Hover glow effect, click instruction text below

### Content
- Title: SCREENDOOR STUDIO
- Tagline: "make things" (VT323 pixel font)
- Services: words, music, video, design, products, marketing, business, non-profits, consulting, AI, research
- Contact: jake@screendoorstudio.com
- Footer: 2025 logo, Birmingham Alabama, © 2026 Screendoor Studio Inc.

## Commands
```bash
# Development
npm run dev

# Build
npm run build

# Deploy to production
npx vercel --yes --prod

# Push changes
git add . && git commit -m "message" && git push
```

## DNS Configuration
Domain managed via FatCow nameservers, pointing to Vercel:
- A Record: `screendoorstudio.com` → `76.76.21.21`
- A Record: `www.screendoorstudio.com` → `76.76.21.21`

## Logo Files
Located in parent `logos/` folder:
- `Screendoor-Studio_Birmingham-AL_2025.png` - Current logo (used on site)
- `ScreendoorStudio_logo_Jake-Waitzman_Birmingham.jpg` - Original logo

## Session Notes

### Dec 29, 2024 (Evening)
- Added interactive ScreenDoor component with 3D hinge animation
- Integrated real audio files for creaky door open and slam close sounds
- Sound effects sourced from BigSoundBank.com (CC0 public domain)
- Door positioned above title as main interactive element

### Dec 29, 2024 (Earlier)
- Created site from scratch with Next.js + Tailwind
- Deployed to Vercel, configured custom domain
- Added interactive particle system with mouse reactivity
- Implemented layered visual effects (gradient, grid, scan lines, noise)
- Added "make things" tagline in retro pixel font
- Updated to 2025 logo
- Created custom SVG favicon with screen door mesh pattern
