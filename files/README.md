# Files
Files which i might need

# Permanently included
- [resets.css](https://raw.githubusercontent.com/FuchsCrafter/FuchsCrafter/main/files/resets.css) [`doc`](#resets) A css file for resetting default values
- [pixijs-base.js](https://raw.githubusercontent.com/FuchsCrafter/FuchsCrafter/main/files/pixijs-base.js) [`doc`](#pixijs-base) My pixijs starter file



# Documentation
## resets
[resets.css](https://raw.githubusercontent.com/FuchsCrafter/FuchsCrafter/main/files/resets.css)

A css file for resetting default values, like margin, padding, colors, etc.

## pixijs-base
[pixijs-base.js](https://raw.githubusercontent.com/FuchsCrafter/FuchsCrafter/main/files/pixijs-base.js)

My base setup for every pixijs app I write

Includes:
- App Stage (size can be adjusted)
- Update Loop
- List with all keys that are currenty pressed

**Useful functions**: 
- `distance2d(x1, y1, x2, y2)` to get distances between coordinates
- `isColliding(sprite1, sprite2)` to check if two sprites are colliding
- `randomFromInterval(min, max)` for generating a random number between two numbers (including `min` and `max`)
