ArarA — Fintech Point UI Design System

Utility-first CSS toolkit and Sass source for Fintech Point products.

Short summary

- Sass source: `src/scss/` (mixins, variables, components, utilities).
- Compiled distributable: `dist/css/style.css` (production-ready, minified).
- Documentation: `documentation/` (examples, usage, component demos).

Requirements

- Node.js v14+ and npm
- Development dependency: `sass` (already declared in `devDependencies`)

Quick start

Clone and install:

```bash
git clone <repo-url>
cd <repo>
npm install
```

Development build (expanded with source maps):

```bash
npm run build:dev
```

Production build (minified):

```bash
npm run build
```

Watch mode (auto-rebuild on save):

```bash
npm run watch
```

After building you will find the compiled CSS at:

```
dist/css/style.css
```

Usage examples

Via CDN (after publishing):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/<package>@<version>/dist/css/style.css">
```

Via NPM (after publishing):

```bash
npm install <package-name>
```

Then include `dist/css/style.css` in your app or import it via your bundler.

Publishing notes

- Ensure the `name` in `package.json` is unique on npm. For organizational publishing prefer a scoped name such as `@fintech-point/arara`.
- `package.json` includes `prepare` / `prepublishOnly` scripts that run `npm run build` so `dist/` is present when publishing.
- Typical publish workflow:

```bash
npm login
npm version patch
npm publish --access public
```

Test package locally before publishing:

```bash
npm pack
npm install ../arara-0.1.0.tgz  # install the generated tarball in a test project
```

Contributing

1. Fork and create a branch.
2. Run `npm install` and `npm run build:dev` to preview changes.
3. Open a PR with screenshots or examples when relevant.

License

This project is licensed under the MIT License — see the `LICENSE` file.

Contact

For issues and support contact `support@fintech-point.com` or open an issue on the repository.
 
## Credits

- **Author:** Md. Fazla Rabbi Bindu <fazlerabbibindu@gmail.com>
- **Maintainer:** Fintech Point (support@fintech-point.com)
