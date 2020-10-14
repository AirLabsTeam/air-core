import React from 'react';
// @ts-ignore
import Svg, { Path } from 'svgs';
import { Icons, IconName } from './Icons';

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

export const Icon = ({
  viewBox = '0 0 32 32',
  size = 32,
  width,
  height,
  name = 'Info',
  title,
  d,
  fill = 'none',
  stroke = '#000000',
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  border = false,
  borderWidth,
  borderStyle = 'solid',
  borderColor,
  borderRadius,
  padding,
  backgroundColor = 'transparent',
  strokeWidth,
  style,
  className,
}: IconProps) => {
  const iconPadding = padding ?? border ? size / 8 : 0;
  const iconBorderWidth = borderWidth ?? border ? size / 16 : 0;
  const divBorderColor = borderColor ?? border ? stroke : 'transparent';
  const divBorderRadius = borderRadius ?? border ? 512 : 0;

  const iconWidth = (width ?? size) - (iconPadding + iconBorderWidth) * 2;
  const iconHeight = (height ?? size) - (iconPadding + iconBorderWidth) * 2;

  const baseStyle: object = {
    boxSizing: 'border-box',
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0,
    width,
    height,
    borderWidth,
    borderStyle,
    borderColor: divBorderColor,
    borderRadius: divBorderRadius,
    padding,
    backgroundColor,
  };

  return (
    <div className={className} style={{ ...baseStyle, ...style }}>
      <Svg width={iconWidth} height={iconHeight} viewBox={viewBox} title={title ?? name}>
        <Path
          d={d ?? Icons[name]}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth ?? border ? 2 * 1.5 : 2}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      </Svg>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export { Icon as default, Icons, IconName };
