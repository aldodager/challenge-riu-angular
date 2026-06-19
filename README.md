# Challenge RIU Angular

Pixel-perfect responsive implementation of the RIU mobile layout based on the provided Figma design.

## Context

During the technical conversation, Claudia mentioned avoiding extreme layering practices such as `z-index: 9999`. This project keeps that in mind by using clean layout structure, natural document flow, and controlled overlays only where needed, such as the carousel gradient.

## Tech stack

* Angular
* Standalone components
* Tailwind CSS
* CSS3
* HTML5 semantic markup
* Inter and Figtree font assets

## Project goal

The goal of this challenge is to reproduce the provided Figma layout with attention to:

* Mobile-first structure
* Visual consistency with the design reference
* Clean semantic HTML
* Maintainable CSS organization
* Responsive behavior
* Accessibility basics

## Styling approach

The project uses Tailwind CSS as part of the build setup, but the main layout styles are organized in component CSS to keep the HTML readable and maintainable.

Global styles are handled in:

```text
src/styles.css
```

Main layout styles are handled in:

```text
src/app/app.css
```

This keeps the structure close to how a larger Angular project would scale, where styles can later be separated into standalone components.

## Responsive strategy

The mobile layout is based on the 460px Figma frame.

The internal content width follows the Figma structure:

```text
460px frame
20px left padding
20px right padding
420px content area
```

Typography uses scalable units where appropriate, while fixed layout measurements from Figma are preserved for pixel-level accuracy.

## Accessibility notes

The markup uses semantic HTML elements such as:

* `main`
* `section`
* `article`
* `figure`
* `h1`, `h2`, `h3`
* `button`
* `a`

Decorative icons use empty `alt` attributes and `aria-hidden="true"`.

Form controls include accessible labels.

## Placeholder images

The grey image blocks are placeholders prepared to be replaced later by CMS or dynamic content.

The placeholder label uses the Figtree font to match the Figma reference.

## Development

Install dependencies:

```bash
npm install
```

Run local server:

```bash
npm start
```

Build project:

```bash
npm run build
```

## Build status

The project builds successfully with Angular.

## Notes

The carousel overlay is implemented with CSS gradients instead of image assets, so future CMS images can be replaced without needing to regenerate overlay files.

No extreme layering values such as `z-index: 9999` are used.
