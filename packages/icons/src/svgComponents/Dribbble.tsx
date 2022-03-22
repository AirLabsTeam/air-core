import { forwardRef, SVGProps } from 'react';

export interface DribbbleProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Dribbble = forwardRef<SVGSVGElement, DribbbleProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 3.5A12.5 12.5 0 1028.5 16 12.5 12.5 0 0016 3.5zm8.26 5.76a10.67 10.67 0 012.41 6.65 25 25 0 00-7.43-.34c-.08-.18-.15-.37-.23-.56-.22-.51-.46-1-.71-1.55a14.27 14.27 0 005.96-4.2zM16 5.34A10.67 10.67 0 0123.08 8a12.13 12.13 0 01-5.6 3.85 58 58 0 00-4-6.25A10.85 10.85 0 0116 5.34zm-4.54 1a68.77 68.77 0 014 6.17 40.5 40.5 0 01-9.87 1.3 10.72 10.72 0 015.87-7.46zM5.32 16v-.32a39.11 39.11 0 0011-1.52c.32.6.6 1.21.87 1.82l-.42.12a17 17 0 00-8.67 7A10.61 10.61 0 015.32 16zM16 26.68a10.59 10.59 0 01-6.55-2.25c.19-.39 2.36-4.57 8.38-6.67h.07a45.17 45.17 0 012.28 8.09 10.45 10.45 0 01-4.18.83zm6-1.83a46.44 46.44 0 00-2.07-7.6 15.6 15.6 0 016.64.46A10.56 10.56 0 0122 24.85z" />
  </svg>
));
Dribbble.displayName = 'Dribbble';
