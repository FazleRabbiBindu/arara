# ArarA - CSS Utility Library

Trying to build a css uitlity library maybe some component style and components.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Core Utilities](#core-utilities)
- [Documentation](#documentation)
- [Build & Development](#build--development)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Utility-First Design** – Build UIs quickly with pre-defined utility classes
- **Responsive Support** – Built-in breakpoints for mobile, tablet, and desktop
- **SCSS-Based** – Modular, maintainable SCSS source with `@use` imports
- **Comprehensive Utilities** – Typography, spacing, borders, colors, grid, and more
- **Semantic Naming** – Intuitive class names for common styling patterns
- **Customizable** – Easy to extend and configure abstract variables
- **Zero Dependencies** – Pure CSS, no JavaScript required

---

## Quick Start

### Option 1: CDN (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.arara.dev/style.css">
```

### Option 2: Local Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/FazleRabbiBindu/arara.git
   cd arara
   ```

2. **Link the compiled stylesheet**
   ```html
   <link rel="stylesheet" href="path/to/dist/css/style.css">
   ```

3. **Start using utility classes**
   ```html
   <div class="border border-primary p-4 rounded-lg">
     <h1 class="text-primary font-bold">Welcome to StyleLib</h1>
     <p class="text-muted">Build responsive layouts with utility classes</p>
   </div>
   ```

---

## Installation

### Requirements
- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build the CSS**
   ```bash
   npm run build
   ```

   The compiled stylesheet will be generated at `dist/css/style.css`.

3. **Link in your HTML**
   ```html
   <link rel="stylesheet" href="dist/css/style.css">
   ```

### Development Mode

For development with file watching:
```bash
npm run watch
```

This will recompile the SCSS automatically when you make changes.

---

## File Structure

```
arara/
├── src/scss/
│   ├── main.scss              # Main entry point
│   ├── abstract/
│   │   ├── _index.scss        # Abstract index
│   │   ├── _variables.scss    # Colors, spacing, breakpoints
│   │   ├── _functions.scss    # SCSS helper functions
│   │   └── _mixins.scss       # Responsive & utility mixins
│   ├── base/
│   │   ├── _reset.scss        # CSS reset
│   │   └── _typography.scss   # Base typography styles
│   ├── components/
│   │   ├── _buttons.scss      # Button component styles
│   │   └── _card.scss         # Card component styles
│   └── utilities/
│       ├── _spacing.scss      # Margin & padding utilities
│       ├── _borders.scss      # Border utilities (width, color, radius, style)
│       ├── _typography.scss   # Font, size, color, alignment utilities
│       └── ...
├── dist/css/
│   └── style.css              # Compiled stylesheet
├── index.html                 # Official documentation site
├── package.json
└── README.md
```

---

## Core Utilities

### Typography

Utilities for controlling text styling, alignment, and transformation.

**Classes:**
- `.font-thin`, `.font-light`, `.font-normal`, `.font-bold`, `.font-black` – Font weights
- `.text-primary`, `.text-secondary`, `.text-danger`, `.text-success` – Text colors
- `.text-left`, `.text-center`, `.text-right` – Text alignment
- `.text-uppercase`, `.text-lowercase`, `.text-capitalize` – Case transformation
- `.text-truncate` – Ellipsis truncation
- `.line-clamp-1`, `.line-clamp-2`, etc. – Line clamping

**Example:**
```html
<p class="font-bold text-primary text-center">Centered bold primary text</p>
```

### Border

Complete border control including width, direction, color, style, and radius.

**Width Classes:**
- `.border` – 1px border (default)
- `.border-2`, `.border-4`, `.border-8` – Various widths
- `.border-0` – Remove border

**Direction Classes:**
- `.border-t`, `.border-r`, `.border-b`, `.border-l` – Single side
- `.border-x`, `.border-y` – Horizontal/vertical

**Color & Style:**
- `.border-primary`, `.border-success`, `.border-danger` – Semantic colors
- `.border-solid`, `.border-dashed`, `.border-dotted` – Line styles

**Radius Classes:**
- `.rounded-none`, `.rounded-sm`, `.rounded`, `.rounded-lg`, `.rounded-full` – All corners
- `.rounded-tl`, `.rounded-tr`, `.rounded-br`, `.rounded-bl` – Individual corners
- `.rounded-t`, `.rounded-r`, `.rounded-b`, `.rounded-l` – Edge sides
- Size suffixes: `.rounded-lg-tl`, `.rounded-lg-b` – Sized variants

**Example:**
```html
<div class="border-2 border-primary rounded-lg p-4">
  Styled box with primary border
</div>
```

### Grid

CSS Grid utilities for building responsive layouts.

**Grid Setup:**
- `.grid` – Create a grid container
- `.inline-grid` – Inline grid container

**Column Control:**
- `.grid-cols-1` through `.grid-cols-12` – Column templates
- `.col-span-1` through `.col-span-12` – Column spanning
- `.col-start-1` through `.col-start-13` – Column line placement

**Row Control:**
- `.grid-rows-1` through `.grid-rows-12` – Row templates
- `.row-span-1` through `.row-span-12` – Row spanning

**Gap & Flow:**
- `.gap-1`, `.gap-2`, `.gap-4`, etc. – Grid gap spacing
- `.grid-flow-row`, `.grid-flow-col`, `.grid-flow-dense` – Auto flow

**Example:**
```html
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Wide item</div>
  <div>Regular item</div>
</div>
```

### Spacing

Utilities for margin and padding.

**Margin Classes:**
- `.m-1`, `.m-2`, `.m-4`, etc. – All sides
- `.mt-4`, `.mr-4`, `.mb-4`, `.ml-4` – Individual sides
- `.mx-4`, `.my-4` – Horizontal/vertical

**Padding Classes:**
- `.p-1`, `.p-2`, `.p-4`, etc. – All sides
- `.pt-4`, `.pr-4`, `.pb-4`, `.pl-4` – Individual sides
- `.px-4`, `.py-4` – Horizontal/vertical

---

## Documentation

### Official Documentation Site

Open `index.html` in your browser to explore interactive examples for:
- Typography utilities
- Border utilities and variants
- Grid layout patterns
- Responsive design techniques

### Viewing Documentation

1. **In your browser:**
   ```bash
   npm run build
   open index.html
   ```

2. **Or serve locally:**
   ```bash
   npx http-server
   # Visit http://localhost:8080
   ```

### Key Documentation Sections

1. **Typography** – Headings, font weights, text colors, alignment, and text transformation
2. **Border** – Width, direction, colors, styles, radius, and corner variants
3. **Grid** – Column/row templates, spanning, placement, and responsive behavior

---

## Build & Development

### Available Commands

```bash
# Build the stylesheet once
npm run build

# Watch for changes and rebuild automatically
npm run watch

# View in browser (requires http-server)
npm start
```

### Customizing Variables

Edit `src/scss/abstract/_variables.scss` to customize:
- **Colors** – Primary, secondary, danger, success, etc.
- **Spacing Scale** – Margin and padding values
- **Border Radii** – Corner rounding sizes
- **Breakpoints** – Responsive breakpoint widths

### Adding New Utilities

1. Create or edit a file in `src/scss/utilities/`
2. Import it in `src/scss/main.scss`
3. Run `npm run build`
4. Add tests and documentation in `index.html`

---

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/FazleRabbiBindu/arara.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/add-new-utility
   ```

3. **Make your changes**
   - Update SCSS files in `src/scss/`
   - Add examples to `index.html` documentation
   - Test in the browser

4. **Build and test**
   ```bash
   npm run build
   ```

5. **Commit and push**
   ```bash
   git commit -m "Add new utility for X"
   git push origin feature/add-new-utility
   ```

6. **Create a Pull Request**

---

## Guidelines

### Naming Conventions

- Use lowercase and hyphens for class names
- Use semantic names (`.text-primary` instead of `.color-blue`)
- Use sides shorthand: `.mt-4` for margin-top, `.px-2` for padding horizontal
- Responsive prefixes: `.md:border-2`, `.lg:grid-cols-3`

### Code Style

- Use 2-space indentation
- Follow SCSS best practices with `@use` and nested selectors
- Keep utilities focused and single-purpose
- Avoid `!important` unless necessary

---

## Version

**Current Version:** 0.0.1 (Alpha)

---

## License

StyleLib is licensed under the MIT License. See the LICENSE file for details.

---

## Credits

Created and maintained by **Md. Fazle Rabbi Bindu**

---

## Support

- **Email:** fazlerabbibindu@gmail.com
- **Bug Reports:** [GitHub Issues]
- **Discussions:** [GitHub Discussions]

---

## Roadmap

- [ ] Complete v0.1.0 with all core utilities
- [ ] Add flexbox utilities
- [ ] Add shadow and opacity utilities
- [ ] Create npm package for distribution
- [ ] Add TypeScript definitions
- [ ] Build interactive component library

---

**Happy styling with StyleLib! **
