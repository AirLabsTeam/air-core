import { forwardRef, SVGProps } from 'react';

export interface ListProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const List = forwardRef<SVGSVGElement, ListProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M11 8.84a1.22 1.22 0 011.22-1.23h13.56a1.23 1.23 0 010 2.46H12.22A1.22 1.22 0 0111 8.84zM6.8 7A1.84 1.84 0 115 8.84 1.82 1.82 0 016.8 7zm4.2 9a1.21 1.21 0 011.19-1.23h13.62a1.23 1.23 0 010 2.46H12.19A1.21 1.21 0 0111 16zm-4.2-1.84A1.84 1.84 0 115 16a1.82 1.82 0 011.8-1.84zm4.2 9a1.22 1.22 0 011.22-1.23h13.56a1.23 1.23 0 010 2.46H12.22A1.22 1.22 0 0111 23.16zm-4.2-1.84A1.84 1.84 0 115 23.16a1.82 1.82 0 011.8-1.84z" />
  </svg>
));
List.displayName = 'List';