# AGENTS.md - Development Guidelines

Guidelines for agentic coding tools working on this static HTML/CSS/JS invitation site for a quinceañera celebration.

## Project Structure

- `index.html` - Main HTML structure (semantic, ES8 HTML5)
- `styles.css` - CSS styles, animations, responsive design
- `script.js` - JavaScript functionality (IIFE module pattern)
- `assets/` - Media files (images, audio)

## Build & Development Commands

### Development Server
```bash
# Python (built-in, no dependencies)
python -m http.server 8000

# Node.js
npx http-server

# Open in browser: http://localhost:8000
```

### Validation
```bash
# HTML validation
npx html-validate index.html

# CSS validation  
npx css-validator styles.css

# JavaScript syntax check
node -c script.js

# Test individual JS functions in browser console
updateCountdown()              # Updates countdown display
toggleMusic()                  # Toggles background music
```

## Code Style Guidelines

### JavaScript
- **Module Pattern**: Wrap code in IIFE (`(function() { 'use strict'; })()`)
- **Variables**: Use `const` by default, `let` for loops; camelCase names
- **Functions**: Prefer named functions; check for null elements before DOM access
- **Async**: Wrap `audio.play()` in Promise handlers; use `.catch()` for browser restrictions
- **Syntax**: ES6+ syntax; no `var`; include null checks for DOM elements

**Example Pattern:**
```javascript
function updateCountdown() {
    const element = document.getElementById('id');
    if (!element) return;  // Always check for null
    element.textContent = 'value';
}
```

### CSS
- **Variables**: Define all colors, fonts, shadows in `:root` using CSS custom properties
- **Naming**: kebab-case classes (`.countdown-item`); use BEM for variants (`.button--primary`)
- **Responsive**: Mobile-first; use `@media (min-width: ...)` breakpoints
- **Breakpoints**: Mobile `≤768px`, Desktop `≥769px`
- **Performance**: Prefer `transform` and `opacity` for animations; use `@keyframes`
- **Animations**: Include `@keyframes` definitions; add `prefers-reduced-motion` fallback

### HTML
- **Semantic**: Use `<section>`, `<main>`, `<header>` elements
- **Attributes**: Include `alt` text for all images; use `loading="lazy"` for gallery images
- **IDs & Classes**: kebab-case (e.g., `id="confetti-container"`, `class="countdown-item"`)
- **Meta Tags**: Maintain viewport and OG meta tags for mobile/sharing
- **Indentation**: Consistent 2-space indentation

## Error Handling

### Asset Loading
- **Images**: Include `onerror` handlers; show placeholder divs when images fail (see gallery)
- **Audio**: Handle browser autoplay restrictions via Promise `.catch()` blocks
- **DOM**: Always null-check elements before accessing (e.g., `if (!element) return`)

### Graceful Degradation
- Provide fallback colors/fonts if custom properties unavailable
- Confetti/flower animations are enhancements; site works without JavaScript

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| CSS Classes | kebab-case | `.section-title`, `.countdown-item` |
| CSS Variables | --kebab-case | `--color-principal`, `--fuente-titulo` |
| JS Variables | camelCase | `eventDate`, `updateCountdown` |
| JS Constants | UPPER_CASE | `ANIMATION_DURATION` |
| HTML IDs | kebab-case | `id="countdown"`, `id="music-toggle"` |

## Testing Checklist

- [ ] Page loads without console errors
- [ ] Countdown updates every second and never goes negative
- [ ] Music toggle works on first click (browser policy)
- [ ] Confetti/flowers animate smoothly on load
- [ ] All images load or show placeholders (check `assets/` exists)
- [ ] Responsive: test at 480px, 768px, 1024px+ widths
- [ ] Links to Google Maps and Waze open correctly
- [ ] HTML/CSS/JS validation passes

## Performance Notes

- Confetti/flower animations use `setInterval` and `setTimeout` for creation; cleaned up after animation
- Images use `loading="lazy"`; gallery items have `onerror` fallbacks
- Music is muted by default (browser autoplay policy); user must click to play
- CSS uses modern features (Grid, Custom Properties); no IE11 support needed
