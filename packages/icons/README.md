# `@air/icons`

Source of truth for SVG icons used at Air. Published as an NPM library for React consumers.

## Installation

`yarn add @air/icons`

## How do I add new icons to this collection?

1. Put your SVG icon into a folder in `src/svgs` (`src/svgs/uncategorized` unless otherwise stated by design)
2. Run `yarn workspace @air/icons run format:svgs:all` to format the source code. Unfortunately, currently this updates other SVGs ([see here for more context](https://github.com/svg/svgo/issues/1133)), so just discard the changes to the SVGs you're not working on.
3. Add the correct props to the `<path>` tag:

- If the `<path>` has no `stoke` or `fill`, you need to add `fill="currentColor"` to it.
- If the `<path>` has a defined `fill` and it's value isn't `"currentColor"`, change it to that.
- If the `<path>` has a defined `stroke` or other `stroke-*` properties, set `stroke`'s value to `"currentColor"`

4. Run `yarn build` to map the newly added icons
5. `yarn storybook` to go and see the result of your work in Storybook.

### How should I describe the commit via commitizen?

- If you've added a new icon, that should be a "minor" version commit (usually "feature").
- If you've edited an existing icon, that should be a "patch" version commit (usually "fix").
- If you've removed an existing icon, that be a "major" version commit (usually "fix" and "breaking").

## How do I use the icons in my React application?

Every component accepts all props that you'd expect an inlined `svg` to accept in a React environment. This includes `className`, `style`, `fill`, `width`, `height`, etc.

```JS
import { Check } from '@air/icons';

// ... later on, in some render method

<Check fill="#000000" width="24px" height="24px" />
```

### Considerations when deciding if your icon belongs here

1. If you want the icon to express meaning by itself (without text)...

Please render the SVG inline into your application. Be sure that `aria-hidden="false"` and also apply an `id` to the `<title>` aspect of the SVG. Lastly, give the value of that `id` to the attribute `aria-labelledby` on the actual `<svg>`.

---

2. If you don't want the icon to be customizable (fill, stroke, etc.) via props...
3. If you want the paths of the icon to be controllable in animations...

This repository is for uniformly behaving, customizable icon sets. Please [deal with the SVGs yourself](#Dealing-With-SVGs-Yourself).

---

4. If you want the paths of the icon to be customizeable...

You'll want to make a custom component in your application. Please [deal with the SVGs yourself](#Dealing-With-SVGs-Yourself).

---

5. If the icon has a predefined `fill` attribute on the actual `<svg>`...

Note that `fill` is transformed to be `currentColor`. All you'll need to do is ensure the icon is rendered in a parent element whose CSS property `color` is defined.

### Dealing With SVGs Yourself

There are many situations where this repository won't help, as outlined above. If instructed to deal with SVGs yourself (in your application context), you have two options.

1. Render SVGs inline - nothing wrong with that! Consider still using SVGO to optimize your SVG.

2. Integrate [svgr](https://github.com/gregberge/svgr) into your application, steal [our SVGO "format" config](./svgo.config.format.js), and simply manage the implementation yourself. Why the "format" config in a webpack tool? In this repo, we use the format config to minify IDs because it has the context of the filename for prefixing the IDs and keeping them unique. Our bundle config doesn't minify IDs because it assumes they've already been prefixed properly to ensure there are no ID collisions for consumption of multiple SVGs on one page.

3. Using React Native? Import the SVG files inside your components using a package like [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer).
