# `@air/icons`

Air's iconography exported as JSX functions for both React and React Native.

Note: In time we'll be revamping this package to convert `.svg` files directly rather than only accepting path data.

## Installation

`yarn add @air/icons`

## Adding a new icon

Get the icon code from the design team, it will look something like this:

```
M28,28H4V4H28Zm-5-4.92H
```

Add the new icon name to `type IconName` in `src/Icons.ts`, then add the icon name and its code to the `Icons` object.
