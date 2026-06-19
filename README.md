# Challenge RIU Angular

Responsive Angular implementation for the RIU layout challenge.

This project recreates the provided Figma design across mobile, tablet, and desktop breakpoints, with attention to layout accuracy, semantic HTML, accessibility, responsive behavior, and maintainable Angular structure.

## Repository

Delivery branch:

```bash
layout
```

Repository link:

```text
https://github.com/aldodager/challenge-riu-angular/tree/layout
```

## Tech Stack

* Angular 18+
* Standalone Angular component structure
* TypeScript
* Semantic HTML5
* CSS with responsive `rem`, `%`, `calc()` and breakpoint-based layout rules
* Tailwind CSS 4 configured in the project
* Local fonts through `@fontsource`
* SonarQube for IDE review in Visual Studio Code

## Main Goals

The implementation focuses on:

* Responsive layout based on the Figma reference.
* Mobile, tablet and desktop breakpoints.
* Clean Angular structure without unnecessary repeated markup.
* Semantic HTML and accessibility basics.
* Real image elements ready for dynamic content replacement.
* Avoiding layout hacks such as extreme `z-index` values.
* A maintainable structure that could later connect to a CMS, API or backend data source.

## Responsive Breakpoints

The layout was reviewed using these viewport widths:

```text
Mobile: 460px
Tablet: 768px
Desktop: 1680px
```

The design adapts across these breakpoints:

* Mobile: single-column layout.
* Tablet: two-column article grid and larger content spacing.
* Desktop: horizontal hero card, three-column article grid and four visible carousel cards.

## Dynamic Content Structure

The page was not built by copying and pasting each card manually in the HTML.

Instead, the content is defined in typed data structures inside:

```text
src/app/app.ts
```

The template renders repeated content using Angular control flow with `@for` inside:

```text
src/app/app.html
```

This approach was used for:

* Article cards.
* Carousel cards.
* Image sources.
* Alternative text.
* Text content.
* Links.

This makes the layout easier to maintain and prepares the project for a future connection to dynamic content from a CMS, API or external data source.

## Image Handling

Images are implemented as real `<img>` elements, not only as CSS backgrounds or visual placeholders.

Each image receives its source and accessible alternative text from the component data:

```html
<img
  class="content-image"
  [src]="article.imageSrc"
  [alt]="article.altText"
/>
```

This makes it easier for a development team to replace the current placeholder assets with real dynamic image URLs later.

The placeholder image is stored under:

```text
public/assets/images/placeholder-image.svg
```

Icons are stored under:

```text
public/assets/icons/
```

## Search Form Behavior

The search box was implemented as a real accessible form control.

Current behavior:

* The input uses `type="search"`.
* Pressing `Enter` submits the form.
* The magnifying glass is implemented as a real submit button.
* The form prevents a page reload.
* The submitted value is stored in the Angular component.
* A hidden `aria-live` message is included for assistive technologies.

The search form is ready for future integration with filtering logic, a CMS, an API endpoint or a search service.

## Accessibility Work

The implementation includes several accessibility improvements:

* Main content landmark through `<main>`.
* Section headings connected with `aria-labelledby`.
* Skip link to jump directly to the main content.
* Accessible form labeling.
* Submit button for the search icon.
* Decorative icons marked with empty `alt` and `aria-hidden="true"`.
* Informative image alternative text without redundant words such as “image”.
* Visible keyboard focus states.
* Semantic use of headings, sections, articles and forms.
* `aria-live` feedback for search submission.

## Styling Approach

The styling was adjusted to be more scalable and responsive.

Instead of relying only on fixed pixels, the layout uses:

* `rem` units for spacing and sizing.
* `%` for flexible widths.
* `calc()` for balanced desktop columns.
* CSS variables for repeated values.
* Breakpoint-specific rules for mobile, tablet and desktop.

This helps the interface scale more predictably across screen sizes while staying close to the Figma reference.

## Compatibility and Code Quality Fixes

The project was reviewed using Visual Studio Code Problems and SonarQube for IDE.

Corrections included:

* Explicit `rootDir` in `tsconfig.app.json`.
* Standard `line-clamp` added alongside `-webkit-line-clamp`.
* Accessible image alternative text adjustments.
* Search input improved from a visual element into a semantic form.
* General HTML structure improvements.
* Focus and skip-link accessibility support.

## Project Structure

Relevant files:

```text
src/app/app.ts
src/app/app.html
src/app/app.css
src/styles.css
src/index.html
tsconfig.app.json
public/assets/icons/
public/assets/images/
```

## Run Locally

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm start
```

Build the project:

```bash
npm run build
```

## Validation

The project was checked with:

```bash
npm run build
```

It was also reviewed through:

* Visual Studio Code Problems panel.
* SonarQube for IDE.
* Manual responsive review at 460px, 768px and 1680px.
* Manual interaction review for the search input, Enter key submit and magnifying glass submit button.

## Notes

This delivery prioritizes a clean and maintainable Angular implementation that can be extended later by replacing the static data arrays with dynamic data from a CMS, API or backend service.
