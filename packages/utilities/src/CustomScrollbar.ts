import { theme } from '@air/zephyr';

// Custom scrollbars
interface ScrollBarParams {
  thumbColor?: string;
  thumbHover?: string;
  trackColor?: string;
  thickness?: number;
  margin?: number;
  vertical?: boolean;
}

export const formatThickness = (vertical: boolean, thickness: number) =>
  `
  ::-webkit-scrollbar {
    ${`${vertical ? 'width' : 'height'}: ${thickness}px`};
  }`;

export const formatTrackColor = (trackColor: string) =>
  `
  ::-webkit-scrollbar-track {
    background: ${trackColor};
  }`;

export const formatThumb = (thumbColor: string, thickness: number, margin: number) =>
  `
  ::-webkit-scrollbar-thumb {
    background: ${thumbColor};
    border: ${margin}px solid transparent;
    border-radius: ${thickness - margin}px;
    background-clip: content-box;
  }`;

export const formatThumbHover = (thumbHover: string, thickness: number, margin: number) =>
  `
  ::-webkit-scrollbar-thumb:hover {
    background: ${thumbHover};
    border: ${margin}px solid transparent;
    border-radius: ${thickness - margin}px;
    background-clip: content-box;
  }`;

// Thumb hover color used for contrast due to lack of hover on custom firefox scrollbar
export const formatFirefoxScrollbar = (thumbHover: string, trackColor: string) => `
  scrollbar-color: ${thumbHover} ${trackColor};
  scrollbar-width: thin;`;

/**
 * @description Returns a string containing CSS for a custom webkit scrollbar.
 *  CSS for a custom firefox scrollbar is also generated albeit limited in style
 * @example
 *  formatScrollBar({})
 *  formatScrollBar({thumbColor: tomato, thumbHover: blue, thickness: 12, vertical: false})
 */
export const formatScrollBar = ({
  thumbColor = theme.colors.pigeon1,
  trackColor = theme.colors.white,
  thumbHover = theme.colors.pigeon2,
  thickness = 12,
  margin = 2,
  vertical = true,
}: ScrollBarParams) => {
  return `
    ${formatThickness(vertical, thickness)}
    ${formatTrackColor(trackColor)}
    ${formatThumb(thumbColor, thickness, margin)}
    ${formatThumbHover(thumbHover, thickness, margin)}
    ${formatFirefoxScrollbar(thumbHover, trackColor)}
  `;
};
