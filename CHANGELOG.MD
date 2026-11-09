# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2026-11-09

### Changed
- Enhanced visual realism by introducing detailed crystalline snowflake shapes (❄, ❅, ❆) instead of simple circles.
- Adjusted flake dimensions and falling velocities to mimic natural aerodynamic drag (simulating 0.5 m/s to 1.5 m/s).
- Added a depth-of-field visual effect by combining sharp foreground crystals with out-of-focus blurred background flakes.
- Improved wind and swing animation logic to create a more natural, floating drift motion.

## [1.0.0] - 2026-11-09

### Added
- Initial release of the `snowfall` package.
- Plug-and-play snowfall renderer using HTML5 Canvas and vanilla JavaScript.
- Auto-initialization feature (snow starts immediately upon import or script tag inclusion).
- Universal compatibility for complex frameworks (React, Vue, Next.js) and basic static `index.html` files.
- Transparent canvas overlay with `pointer-events: none` to ensure underlying website interactions remain fully functional.
- Dynamic resize event listener to adjust canvas dimensions automatically on screen changes.