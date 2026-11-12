# snowfall-renderer

Snowfall renderer for any website. Whether you have a complex React/Next.js application or a single `index.html` file, this package will bring a realistic, crystalline winter effect to your project instantly. 

## Features
* **Zero Configuration:** Just install/import, and the snow starts falling.
* **Realistic Physics & Visuals:** Features detailed crystalline snowflake shapes (❄, ❅, ❆) and depth-of-field effects with natural aerodynamic drag and wind sway.
* **Universal Compatibility:** Works on complex frameworks (React, Vue, Angular, Next.js) and basic static HTML projects.
* **Click-Through Design:** Uses `pointer-events: none` so it never blocks your buttons, links, or inputs.
* **Responsive:** Automatically adjusts to window resize events.
* **Lightweight:** Pure HTML5 Canvas and vanilla JavaScript with zero external dependencies.

## Installation

You can install it using your favorite package manager:

```bash
npm install snowfall-renderer

```

```bash
pnpm add snowfall-renderer

```

```bash
yarn add snowfall-renderer

```

## Usage

### In Frameworks & Bundlers (React, Next.js, Vue, Vite, etc.)

Simply import the package into your main entry file (like `index.js`, `App.jsx`, or `layout.tsx`). The snow will start falling automatically.

```javascript
import 'snowfall-renderer';

```

*To stop the snow, simply remove the import statement and uninstall the package.*

### In Basic HTML Projects (No Package Manager)

If you just have an `index.html` file, add the following CDN link right before your closing `</body>` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Winter Website</title>
</head>
<body>
    
    <h1>Welcome to my website!</h1>

    <script src="[https://unpkg.com/snowfall-renderer@1.1.0](https://unpkg.com/snowfall-renderer@1.1.0)"></script>
</body>
</html>

```

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
<strong>A Sabtain Ali production</strong>
</p>
