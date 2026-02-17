# Auralis Suite

A premium, modular SaaS Product Suite website designed with "Google-level" polish and radical whitespace.

## Overview
Auralis Suite exemplifies a high-performance, clean, and modern web application interface.  This project is built using vanilla HTML, CSS, and JavaScript, focusing on performance, accessibility, and a refined design system.

## Project Structure
```
/project-root
│
├── index.html           # Homepage (The Story Page)
├── products.html        # Product Catalog with Filtering
├── product-detail.html  # Immersive Product Feature Page
├── pricing.html         # Pricing Comparison
├── about.html           # Brand Story & Leadership
├── careers.html         # Careers & Culture
├── resources.html       # Blog & Case Studies
├── contact.html         # Contact Form
├── security.html        # Trust Center
│
├── header.html          # Dynamically loaded Header
├── footer.html          # Dynamically loaded Footer
│
├── /assets
│ ├── /css
│ │   ├── styles.css     # Global styles, variables, reset
│ │   ├── typography.css # Font definitions, hierarchy
│ │   ├── components.css # Reusable UI components
│ │
│ ├── /js
│ │   ├── main.js        # Core logic, dynamic content loader
│ │   ├── animations.js  # IntersectionObserver, Scroll animations
│ │   ├── filter.js      # Product filtering logic
│ │
│ ├── /images            # Project images (simulated via CSS/SVG)
│ └── /videos            # Background videos
```

## Features
- **Radical Whitespace & Typography**: A clean layout emphasizing content hierarchy.
- **Micro-Interactions**: Smooth hover effects and scroll-based animations.
- **Dynamic Content Loading**: Modular header and footer injected via JavaScript.
- **Responsive Design**: Mobile-first approach ensuring perfect rendering on all devices.
- **Performance Optimized**: Lazy loading, modern formats, and minimal DOM nesting.

## How to Deploy
1. **GitHub Pages**:
   - Push this repository to GitHub.
   - Go to Settings > Pages.
   - Select `main` branch and `/` root.
   - Save.

## Lighthouse Optimization
- **Images**: Use WebP format and explicit width/height attributes.
- **Contrast**: Ensuring text colors meet WCAG AA standards.
- **Performance**: Preloading key fonts and using `defer` for scripts.
