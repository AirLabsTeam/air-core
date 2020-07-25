import React from 'react';
// @ts-ignore
import Svg, { Path } from 'svgs';
import { colors } from '@air/zephyr/src/theme/colors';
import Icons, { IconName } from './Icons';

export { IconName };

export interface IconProps {
  viewBox?: string;
  size?: number;
  width?: number;
  height?: number;
  name?: IconName;
  title?: string;
  d?: string;
  fill?: string;
  stroke?: string;
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'round' | 'bevel' | 'miter';
  border?: boolean;
  borderWidth?: number;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  borderColor?: string;
  borderRadius?: number;
  padding?: number;
  backgroundColor?: string;
  strokeWidth?: number;
  style?: object;
  className?: string;
}

const Icon = ({
  viewBox = '0 0 32 32',
  size = 32,
  width = size,
  height = size,
  name = 'Info',
  title = name,
  d = Icons[name],
  fill = 'none',
  stroke = colors.black,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  border = false,
  borderWidth = border ? size / 16 : 0,
  borderStyle = 'solid',
  borderColor = border ? stroke : colors.transparent,
  borderRadius = border ? 512 : 0,
  padding = border ? size / 8 : 0,
  backgroundColor = colors.transparent,
  strokeWidth = border ? 2 * 1.5 : 2,
  style = {
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0,
    width,
    height,
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    padding,
    backgroundColor,
  },
  className,
}: Partial<IconProps>) => {
  const iconWidth = width - (padding + borderWidth) * 2;
  const iconHeight = height - (padding + borderWidth) * 2;
  return (
    <div {...{ style, className }}>
      <Svg {...{ width: iconWidth, height: iconHeight, viewBox, title }}>
        <Path {...{ d, fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin }} />
      </Svg>
    </div>
  );
};

export { Icons };

// eslint-disable-next-line import/no-default-export
export default Icon;
