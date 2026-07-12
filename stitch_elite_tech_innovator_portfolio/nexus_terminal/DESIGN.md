---
name: Nexus Terminal
colors:
  surface: '#0e131f'
  surface-dim: '#0e131f'
  surface-bright: '#343946'
  surface-container-lowest: '#080e1a'
  surface-container-low: '#161c28'
  surface-container: '#1a202c'
  surface-container-high: '#242a36'
  surface-container-highest: '#2f3542'
  on-surface: '#dde2f3'
  on-surface-variant: '#c5c6d2'
  inverse-surface: '#dde2f3'
  inverse-on-surface: '#2b303d'
  outline: '#8e909c'
  outline-variant: '#444650'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#0d2c6e'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#435b9f'
  secondary: '#ffffff'
  on-secondary: '#003737'
  secondary-container: '#00fbfb'
  on-secondary-container: '#007070'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#32007d'
  on-tertiary-container: '#9f77ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#00fbfb'
  secondary-fixed-dim: '#00dddd'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0e131f'
  on-background: '#dde2f3'
  surface-variant: '#2f3542'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
  stack-xl: 120px
---

## Brand & Style

This design system embodies the intersection of high-stakes cybersecurity and cutting-edge software engineering. It targets an audience of technical stakeholders, executive leadership, and enterprise partners who value precision, security, and forward-thinking innovation.

The aesthetic is **Futuristic Minimalism** mixed with **Glassmorphism**. It leverages the "Developer-Luxury" aesthetic pioneered by industry leaders like Vercel and Linear—characterized by deep ink-black backgrounds, vibrant translucent layers, and microscopic attention to detail. The UI should feel like a high-end command center: calm, hyper-organized, and technologically superior.

## Colors

The palette is anchored in a "True Dark" environment to emphasize depth and luminescence. 

- **Primary (Deep Royal Blue):** Used for structural depth and brand presence. It acts as the "ink" behind the glass.
- **Secondary (Cyan):** Represents active data, connectivity, and ICT precision. Use for success states, code highlights, and primary data points.
- **Accent (Electric Purple):** Reserved for "encryption," "security," or high-action focal points. It provides a sophisticated counterpoint to the cyan.
- **Neutrals:** The background uses Charcoal Black (#030712) to ensure OLED-perfect blacks, while Dark Gray is utilized for subtle borders and surface elevation.

## Typography

The typography strategy employs a "Geist-centric" feel: technical and utilitarian yet refined. 

**Space Grotesk** is used for headlines to provide a subtle geometric "tech" quirk that feels futuristic. **Inter** handles the heavy lifting for body copy, ensuring maximum readability for complex technical documentation. **Geist** (or a similar technical mono/sans) is used for labels and code snippets to reinforce the engineering pedigree of the expert. 

Maintain generous tracking for uppercase labels and tight tracking for large display headlines.

## Layout & Spacing

This design system uses a **Fluid 12-Column Grid** with high-contrast structural hierarchy. 

- **Desktop:** 12 columns, 24px gutters, 80px+ horizontal margins. Use asymmetrical layouts to create a sense of movement.
- **Mobile:** 4 columns, 16px gutters, 20px margins.
- **Rhythm:** Use a strict 8px base grid. Sections should be separated by "Breathable" whitespace (`stack-xl`) to signify a transition between distinct domains (e.g., shifting from Software Engineering to ICT Management).

## Elevation & Depth

Depth is created through **Subtractive Layering** and **Optical Blurs** rather than traditional drop shadows.

- **Level 1 (Base):** Deep Charcoal Black (#030712).
- **Level 2 (Glass Surfaces):** Semi-transparent layers (White 5% opacity) with a 20px - 40px Backdrop Blur. 
- **Level 3 (Interactive):** Surfaces that "lift" on hover, increasing the blur intensity and adding a 1px inner stroke (the "Glass Edge") at 15% opacity white.
- **Gradients:** Subtle, large-radius background blurs of Deep Royal Blue and Electric Purple should sit *behind* the glass layers to provide a sense of atmospheric depth without compromising text legibility.

## Shapes

The shape language is "Enterprise-Soft"—not fully rounded like a social app, but not sharp like a brutalist site. 

Use **Soft (4px - 12px)** radii for most containers. This maintains a professional, systematic feel while the glass effects soften the overall visual impact. Buttons and interactive tags should lean towards the higher end of the scale (12px) to provide a clear tactile affordance.

## Components

### Buttons
- **Magnetic Action:** Primary buttons use a solid Cyan-to-Purple gradient with white text. Apply a CSS "magnetic" hover effect where the button follows the cursor slightly.
- **Ghost Buttons:** 1px Cyan border, transparent background, becomes a frosted glass surface on hover.

### Glass Cards
The primary container for projects and service offerings. Features a 1px border using a linear gradient (White 10% to White 0%) to simulate light hitting the top edge of the glass. 

### Modern Sticky Navigation
The header is a floating pill-shaped container or a full-width bar with `backdrop-filter: blur(12px)`. It should appear nearly invisible until the user scrolls, at which point it gains a subtle bottom border.

### Chips & Tags
Used for "Tech Stack" or "Security Certifications." Small, monochromatic (Dark Gray background, White text), with high-precision `label-caps` typography.

### Input Fields
Dark backgrounds with a focus state that illuminates the entire border in Cyan and adds a subtle outer "glow" (0px 0px 8px Cyan at 30% opacity).

### Code Blocks
Custom-styled "Editor" windows with a traffic-light control UI (red/yellow/green dots) to emphasize the Software Engineering theme.