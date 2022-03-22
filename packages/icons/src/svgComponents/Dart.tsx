import { forwardRef, SVGProps } from 'react';

export interface DartProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Dart = forwardRef<SVGSVGElement, DartProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M20.58 14.08l1.52-1.39a7.72 7.72 0 11-2.67-2.89l-1.52 1.39A5.69 5.69 0 1021 16.25a5.6 5.6 0 00-.42-2.17zm5.73-5.25l-1.48 1.36a11.14 11.14 0 011.79 6.06 11.35 11.35 0 11-4.46-8.95L23.64 6a13.15 13.15 0 102.67 2.88zM27.54 5L27 2.5l-2.13 2.17v1.49l-9.07 8.31a2 2 0 00-.49-.07 1.86 1.86 0 101.86 1.85 2 2 0 000-.34l9-8.26h1.68L30 5.45zM15.3 16.25" />
  </svg>
));
Dart.displayName = 'Dart';