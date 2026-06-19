# Challenge RIU Angular

Implementación responsive en Angular para el challenge de RIU.

Este proyecto replica el diseño entregado en Figma para mobile, tablet y desktop, cuidando la precisión del layout, HTML semántico, accesibilidad, comportamiento responsive y una estructura Angular mantenible.

## Repositorio

Rama utilizada para la entrega:

```bash
layout
```

Link del repositorio:

```text
https://github.com/aldodager/challenge-riu-angular/tree/layout
```

## Tecnologías

* Angular 18+
* Estructura con componente standalone de Angular
* TypeScript
* HTML5 semántico
* CSS con reglas responsive usando `rem`, `%`, `calc()` y breakpoints
* Tailwind CSS 4 configurado en el proyecto
* Fuentes locales mediante `@fontsource`
* Revisión con SonarQube for IDE en Visual Studio Code

## Objetivos Principales

La implementación se enfocó en:

* Layout responsive basado en la referencia de Figma.
* Breakpoints para mobile, tablet y desktop.
* Estructura Angular limpia sin repetir markup innecesariamente.
* HTML semántico y bases de accesibilidad.
* Imágenes reales listas para ser reemplazadas dinámicamente.
* Evitar hacks de layout como valores extremos de `z-index`.
* Una estructura mantenible que luego pueda conectarse a un CMS, API o backend.

## Breakpoints Responsive

El layout fue revisado usando estos anchos de viewport:

```text
Mobile: 460px
Tablet: 768px
Desktop: 1680px
```

El diseño se adapta en cada breakpoint:

* Mobile: layout de una sola columna.
* Tablet: grilla de artículos en dos columnas y mayor espaciado.
* Desktop: hero horizontal, grilla de artículos en tres columnas y cuatro cards visibles en el carrusel.

## Estructura de Contenido Dinámico

La página no está construida copiando y pegando manualmente cada card en el HTML.

En su lugar, el contenido está definido en estructuras de datos tipadas dentro de:

```text
src/app/app.ts
```

El template renderiza el contenido repetido usando el control flow de Angular con `@for` dentro de:

```text
src/app/app.html
```

Este enfoque se aplicó para:

* Cards de artículos.
* Cards del carrusel.
* Fuentes de imagen.
* Textos alternativos.
* Contenido textual.
* Links.

Esto hace que el layout sea más fácil de mantener y deja el proyecto preparado para conectarse más adelante a contenido dinámico desde un CMS, API o fuente externa.

## Manejo de Imágenes

Las imágenes están implementadas como elementos reales `<img>`, no solo como backgrounds de CSS o placeholders visuales.

Cada imagen recibe su fuente y texto alternativo accesible desde la data del componente:

```html
<img
  class="content-image"
  [src]="article.imageSrc"
  [alt]="article.altText"
/>
```

Esto facilita que el equipo de desarrollo reemplace los assets actuales por URLs dinámicas reales en el futuro.

La imagen placeholder está ubicada en:

```text
public/assets/images/placeholder-image.svg
```

Los íconos están ubicados en:

```text
public/assets/icons/
```

## Comportamiento del Search Form

El search box fue implementado como un control de formulario real y accesible.

Comportamiento actual:

* El input usa `type="search"`.
* Presionar `Enter` envía el formulario.
* La lupa está implementada como un botón real de submit.
* El formulario evita la recarga de la página.
* El valor enviado se guarda en el componente de Angular.
* Se incluye un mensaje oculto con `aria-live` para tecnologías asistivas.

El formulario de búsqueda queda preparado para una futura integración con lógica de filtrado, CMS, API o servicio de búsqueda.

## Trabajo de Accesibilidad

La implementación incluye varias mejoras de accesibilidad:

* Landmark principal mediante `<main>`.
* Secciones con headings asociados mediante `aria-labelledby`.
* Skip link para saltar directamente al contenido principal.
* Labels accesibles en el formulario.
* Botón submit para el ícono de búsqueda.
* Íconos decorativos marcados con `alt` vacío y `aria-hidden="true"`.
* Textos alternativos informativos sin palabras redundantes como “imagen”.
* Estados visibles de foco con teclado.
* Uso semántico de headings, sections, articles y forms.
* Feedback con `aria-live` para el envío del search.

## Enfoque de Estilos

Los estilos fueron ajustados para ser más escalables y responsive.

En lugar de depender solo de pixeles fijos, el layout usa:

* Unidades `rem` para espaciados y tamaños.
* `%` para anchos flexibles.
* `calc()` para columnas desktop balanceadas.
* Variables CSS para valores reutilizables.
* Reglas específicas por breakpoint para mobile, tablet y desktop.

Esto ayuda a que la interfaz escale de forma más predecible en distintos tamaños de pantalla, manteniéndose cercana a la referencia de Figma.

## Correcciones de Compatibilidad y Calidad

El proyecto fue revisado usando el panel Problems de Visual Studio Code y SonarQube for IDE.

Las correcciones incluyeron:

* `rootDir` explícito en `tsconfig.app.json`.
* Propiedad estándar `line-clamp` agregada junto con `-webkit-line-clamp`.
* Ajustes de textos alternativos accesibles para imágenes.
* Search input mejorado de elemento visual a formulario semántico.
* Mejoras generales de estructura HTML.
* Soporte de foco visible y skip link.

## Estructura del Proyecto

Archivos relevantes:

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

## Ejecutar Localmente

Instalar dependencias:

```bash
npm install
```

Ejecutar servidor local:

```bash
npm start
```

Generar build:

```bash
npm run build
```

## Validación

El proyecto fue validado con:

```bash
npm run build
```

También fue revisado mediante:

* Panel Problems de Visual Studio Code.
* SonarQube for IDE.
* Revisión responsive manual en 460px, 768px y 1680px.
* Revisión manual de interacción del search input, envío con Enter y botón submit de la lupa.

## Notas

Esta entrega prioriza una implementación Angular limpia y mantenible que puede extenderse más adelante reemplazando los arrays estáticos de data por información dinámica desde un CMS, API o servicio backend.
