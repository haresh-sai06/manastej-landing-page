# Responsive viewport review matrix

The widths and heights below are **CSS viewport pixels**, not the phone's physical display resolution. Browser chrome, display scaling, zoom, safe areas, and orientation change the usable viewport, so the layout uses fluid widths and a small set of breakpoints rather than device-name-specific rules.

| Device class / representative viewport | Example device range / model names | Layout expectation |
|---|---|---|
| Compact phone — 320 × 568 | iPhone SE (1st gen), narrow Android | Single-column content, compact hero typography, no pinned scenes |
| Small phone — 360 × 800 | Samsung Galaxy S20/S21/S22, compact Android | Single-column cards and scrollable sections; hero header directly below brain logo |
| Mainstream phone — 375 × 667 | iPhone SE (2nd/3rd gen) | Full-width flow, no horizontal clipping; hero content fits initial viewport |
| Mainstream phone — 390 × 844 / 393 × 852 | iPhone 12/13/14/15/16, iPhone 14/15/16 Pro | Single-column reading, hero header sits directly beneath brain logo |
| Large phone — 412 × 915 | Google Pixel 7 / Pixel 8 / Galaxy S23+ | Hero content starts immediately below brain mark; CTA buttons visible above fold |
| Extra large phone — 430 × 932 | iPhone 14/15/16 Plus / Pro Max | Fluid text and card widths; hero header directly below brain logo |
| Tablet portrait — 768 × 1024 | Apple iPad Mini (6th gen / classic) | Hero eyebrow and 'Manastej' header slide right below brain logo (~366px top offset) |
| Tablet portrait — 960 × 1440 | Microsoft Surface Pro 10 / Surface Pro series | Hero eyebrow and header positioned right below brain logo (~514px top offset), eliminating vertical void |
| Large tablet portrait — 1032 × 1376 | Apple iPad Pro 13-inch (M4) | Hero eyebrow and header positioned right below brain logo (~501px top offset) |
| Tablet portrait — 820 × 1180 | iPad 10th gen / 11-inch tablet class | Two-column cards only where useful; hero header right below brain logo |
| Tablet landscape — 1180 × 820 | 11-inch tablet landscape | Wider grids and scroll scenes fit comfortably |
| Compact laptop — 1280 × 720 | 13-inch laptops at default scaling | Desktop navigation and restrained motion; short screens retain normal flow |
| Laptop — 1440 × 900 | 14–16-inch laptops | Full desktop composition and motion scenes; hero header balanced below mark |
| Desktop monitor — 1920 × 1080 | Full-HD displays | Max-width content remains centered and readable |
| Wide monitor — 2560 × 1440 | QHD/4K displays at common scaling | Content stays centered; type and reading measure remain bounded |

## Responsive rules applied

- **Hero header & content positioning:** The hero copy container (`.hero-copy`) uses `justify-content: flex-start` with a responsive top offset calculated to place the eyebrow and header directly beneath the brain mark across all device categories:
  - Phone models (`< 768px`): `calc(24svh + min(18vw, 7.5rem) + 0.75rem)` places "Manastej" immediately beneath the mobile brain mark with ~12-16px clearance.
  - Tablets and Desktop (`>= 768px`): `calc(31svh - 3rem + 10vmin + 1.25rem)` aligns the eyebrow and "Manastej" title directly underneath the brain mark across iPad Mini (768×1024), Surface Pro 10 (960×1440), and iPad Pro 13 (1032×1376), removing previous dead space while preserving leaf clearance.
- **Under 640 px:** phone-first single column; compact headings, cards, and spacing.
- **640–767 px:** larger phone / compact tablet spacing, while retaining one-column reading.
- **768–1099 px:** tablet layout; two-column feature/stat grids where they fit, stacked long-form sections.
- **1100 px and wider:** desktop/tablet-landscape motion scenes may run if the viewport is at least 650 px tall and the user has not requested reduced motion.
- **Below 650 px viewport height:** use normal document flow to prevent pinned sections from cropping content on landscape phones or short browser windows.
- Images and SVGs are constrained to their content width, cards use `minmax(0, 1fr)`, and the global page has a 320 px minimum layout width.

These presets cover the target complaint devices (iPad Mini 768×1024, Surface Pro 10 960×1440, iPad Pro 13 1032×1376, and phone models).
