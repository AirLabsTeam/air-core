import { forwardRef, SVGProps } from 'react';

export interface CopyProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Copy = forwardRef<SVGSVGElement, CopyProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M9.55935 5H19.1482V3H9.55935C7.60432 3 6.01743 4.57613 6 6.52703V24.9137H7.99986V6.55949C7.99986 5.69821 8.69806 5 9.55935 5ZM13.4769 8.8995H23.2582C24.1195 8.8995 24.8177 9.5977 24.8177 10.459V25.4404C24.8177 26.3017 24.1195 26.9999 23.2582 26.9999H13.4769C12.6156 26.9999 11.9174 26.3017 11.9174 25.4404V10.459C11.9174 9.59771 12.6156 8.8995 13.4769 8.8995ZM9.91741 10.459C9.91741 8.49314 11.511 6.8995 13.4769 6.8995H23.2582C25.2241 6.8995 26.8177 8.49314 26.8177 10.459V25.4404C26.8177 27.4063 25.2241 28.9999 23.2582 28.9999H13.4769C11.511 28.9999 9.91741 27.4063 9.91741 25.4404V10.459Z"
      fillRule="evenodd"
    />
  </svg>
));
Copy.displayName = 'Copy';