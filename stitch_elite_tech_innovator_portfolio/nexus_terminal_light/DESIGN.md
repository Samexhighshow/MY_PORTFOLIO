---
name: Nexus Terminal Light
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#444653'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#76dcff'
  on-secondary-container: '#006077'
  tertiary: '#440098'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f00d1'
  on-tertiary-container: '#c9aeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#6cd3f7'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style

The design system is a sophisticated evolution of technical interfaces, pivoting from traditional dark "hacker" aesthetics to a high-clarity, professional light mode. It targets developers, engineers, and data scientists who require a workspace that feels like a precision instrument. 

The aesthetic is **Technical Minimalism with Glassmorphism**. It combines the structured, geometric rigor of aerospace software with the airy, premium feel of modern editorial design. By utilizing clean off-white foundations and crisp white glass layers, the UI maintains a sense of "physical" depth and organized complexity without visual fatigue. The emotional response is one of clarity, high-performance, and structural integrity.

## Colors

This color palette adapts the "Nexus" identity for high-ambient light environments. 

- **Foundations:** The primary background is `#F8FAFC`, providing a cool, sterile base that avoids the harshness of pure white. Secondary utility areas use `#F1F5F9`.
- **Accents:** The **Deep Royal Blue** (`#1E40AF`) serves as the primary action color, ensuring WCAG AA compliance for text and UI elements. **Cyan** (`#0891B2`) is used for technical indicators and data visualization, while **Electric Purple** (`#7C3AED`) highlights specialized features and logic flows.
- **Typography:** All primary text is rendered in **Midnight Blue** (`#0F172A`) to maintain a strong contrast ratio while feeling more integrated than a neutral black.

## Typography

The typographic hierarchy balances technical precision with readable flow. 

- **Space Grotesk** is used for all headlines and display text. Its geometric quirks reinforce the technical "terminal" theme.
- **Inter** provides the functional backbone for body copy, chosen for its exceptional legibility and neutral tone in professional SaaS environments.
- **JetBrains Mono** is utilized for labels, metadata, and status indicators, providing a "code-adjacent" feel that signals technical data points.

Scale headlines down by approximately 25% for mobile viewports to ensure they remain within the container boundaries.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **Rhythm:** All spacing (padding, margins, gaps) must be multiples of the 4px base unit. 
- **Containers:** Content is housed in a centered container with a maximum width of 1440px. 
- **Density:** Maintain "Technical Breathing Room." While the interface is information-dense, use generous gutters (24px) to prevent data clusters from feeling overwhelming. Elements should be grouped logically using varying increments of the 4px scale (e.g., 8px for related items, 24px for distinct sections).

## Elevation & Depth

Depth is achieved through **White Glassmorphism** and intentional layering rather than heavy shadows.

1.  **Level 0 (Base):** The off-white background (`#F8FAFC`).
2.  **Level 1 (Card/Surface):** Pure white (`#FFFFFF`) with 80% opacity and a 12px backdrop-blur. Apply a very subtle 1px stroke in `#E2E8F0` to define edges.
3.  **Level 2 (Active/Floating):** Same as Level 1, but with a soft, diffused shadow: `0 10px 15px -3px rgba(15, 23, 42, 0.05)`.
4.  **Level 3 (Modals/Overlays):** Pure white, 100% opacity, with a sharper shadow to indicate immediate focus.

Avoid heavy black shadows; instead, use shadows tinted with the Midnight Blue (`#0F172A`) at very low opacities (5-8%) to maintain the "light" feel.

## Shapes

The shape language is "Soft-Technical." By using a **Soft (0.25rem)** base roundedness, the system avoids the aggressiveness of sharp 90-degree corners while remaining more disciplined and "engineered" than a fully rounded pill-based system.

- **Buttons & Inputs:** 4px (0.25rem) radius.
- **Cards & Panes:** 8px (0.5rem) radius.
- **Large Modals:** 12px (0.75rem) radius.

## Components

- **Buttons:** 
    - *Primary:* Solid Deep Royal Blue (`#1E40AF`) with white text. No shadow, 1px inset border for crispness.
    - *Secondary:* Ghost style with a 1px border of `#CBD5E1` and Midnight Blue text.
- **Cards:** White glassmorphic surfaces. Headers should have a subtle bottom border (`1px solid #F1F5F9`) to separate title areas from content.
- **Input Fields:** Background should be `#FFFFFF`. On focus, the border transitions to Deep Royal Blue with a subtle 2px outer glow (0.15 opacity blue). Use JetBrains Mono for placeholder text.
- **Chips/Status:** High-saturation backgrounds at 10% opacity with 100% opacity text for the label (e.g., Cyan background at 10% for "Active" status).
- **Data Grids:** Use "Zebra striping" with `#F1F5F9` on even rows. Column headers use `label-sm` typography and a light grey bottom border.
- **Scrollbars:** Minimalist 4px wide tracks in `#E2E8F0` with a `#CBD5E1` thumb, ensuring they don't distract from the primary content.