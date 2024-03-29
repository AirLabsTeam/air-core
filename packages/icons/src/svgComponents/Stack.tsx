import { forwardRef, SVGProps } from 'react';

export interface StackProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Stack = forwardRef<SVGSVGElement, StackProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16 29.75a3.06 3.06 0 01-1.52-.4L4 23.49A2 2 0 014 20l2.19-1.22-2.13-1.25a2 2 0 01-1-1.77 2 2 0 011-1.76l1.77-1-1.78-1a2 2 0 010-3.53l10.43-5.83a3.14 3.14 0 013 0l10.46 5.84a2 2 0 010 3.53l-1.77 1L28 14a2 2 0 011 1.76 2 2 0 01-1 1.77l-2.2 1.23L27.94 20a2 2 0 010 3.53l-10.46 5.83a3.09 3.09 0 01-1.48.39zm-7.72-9.87L5 21.71l10.41 5.9a1.12 1.12 0 001.08 0L27 21.77l-3.29-1.87-6.19 3.46a3.07 3.07 0 01-3 0zm.49-2l6.7 3.75a1.12 1.12 0 001.08 0l6.68-3.74L27 15.78l-2.86-1.63-6.61 3.69a3.09 3.09 0 01-3 0l-6.57-3.7L5 15.74l3.72 2.12zM7 11.37l.19.08 8.24 4.65a1.1 1.1 0 001.07 0l7.11-4L27 10.27 16.53 4.39a1.08 1.08 0 00-1.07 0L5 10.22z" />
  </svg>
));
Stack.displayName = 'Stack';
