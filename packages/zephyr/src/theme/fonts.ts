export type FontName = 'display' | 'copy' | 'monospace';

export const fonts: { [key in FontName]: string } = {
  display: `display, Georgia, serif`,

  // Cross-platform font stacks found here: github.com/csstools/sanitize.css#typography
  copy: `system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  monospace: `Menlo, Consolas, Roboto Mono, "Ubuntu Monospace", "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace`,
};
