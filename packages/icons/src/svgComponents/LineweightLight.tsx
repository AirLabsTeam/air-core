import { forwardRef, SVGProps } from 'react';

export interface LineweightLightProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const LineweightLight = forwardRef<SVGSVGElement, LineweightLightProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M8.05,28.1a1,1,0,0,1-.61-.19,1.1,1.1,0,0,1-.3-1.53c.25-.36-.12-.92-1-2S3.74,21.46,5,19.68s3.88-.27,6.61,1.48c1.25.8,3.86,2.46,4.48,2.19.21-.89-3.69-3.62-5.56-4.94-3.72-2.6-7.22-5.06-7.55-7.61a3,3,0,0,1,.71-2.33c2.16-2.54,6.7.48,12,4a71,71,0,0,0,6.41,4c1.91,1,3.46.71,4.2.2a1.56,1.56,0,0,0,.69-1.56c-.22-2.13-3.41-5.62-11.69-9A1.09,1.09,0,1,1,16,4c10.82,4.47,12.81,8.71,13,10.84a3.77,3.77,0,0,1-1.62,3.6A6.38,6.38,0,0,1,21,18.37a70.5,70.5,0,0,1-6.64-4.09c-3-2-8.16-5.45-9.06-4.39a.75.75,0,0,0-.21.63c.21,1.59,3.77,4.09,6.64,6.1,4.06,2.85,7.57,5.31,6.25,7.74a2.24,2.24,0,0,1-1.42,1.12c-1.66.43-3.86-1-6.19-2.48a15.49,15.49,0,0,0-3.67-2C6.6,21.39,7,22,7.8,23c1,1.22,2.37,2.88,1.16,4.66A1.09,1.09,0,0,1,8.05,28.1Z" />
  </svg>
));
LineweightLight.displayName = 'LineweightLight';