import { forwardRef, SVGProps } from 'react';

export interface SoccerProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Soccer = forwardRef<SVGSVGElement, SoccerProps>((props, ref) => (
  <svg ref={ref} {...props} fill="currentColor" aria-hidden="true" viewBox="0 0 32 32">
    <path d="M16.59 10.31a1 1 0 00-1.18 0L10.28 14a1 1 0 00-.36 1.12l2 6a1 1 0 00.95.69h6.34a1 1 0 00.95-.69l2-6a1 1 0 00-.44-1.12zm1.86 9.57h-4.9L12 15.23l4-2.88 4 2.88z" />
    <path d="M27.8 22.55l.27-.53.25-.52c.09-.2.17-.41.25-.61s.11-.31.17-.46.16-.47.23-.71a2.68 2.68 0 01.07-.27 13 13 0 00.43-2.94v-.47a13.38 13.38 0 00-1.71-6.56c-.09-.17-.2-.33-.3-.5l-.32-.51c-.18-.26-.37-.5-.56-.75l-.36-.43c-.21-.25-.43-.5-.66-.73s-.32-.3-.49-.45-.27-.26-.42-.38-.42-.34-.64-.5l-.32-.24c-.26-.18-.52-.34-.78-.5l-.25-.14c-.29-.17-.59-.32-.89-.47l-.19-.09c-.31-.14-.64-.27-1-.4h-.1a13.33 13.33 0 00-8.31-.24l-.76.26-.41.06c-.23.09-.45.19-.68.3L9.89 4l-.63.34-.45.27c-.19.12-.38.24-.56.37l-.46.35c-.17.13-.33.25-.49.39a5.57 5.57 0 00-.51.46l-.38.35c-.28.29-.55.58-.81.89l-.15.2c-.19.24-.37.47-.54.72A13.48 13.48 0 002.5 16a11.15 11.15 0 00.07 1.29 5 5 0 00.07.54c0 .24.06.47.11.7s.09.45.15.67.09.36.14.53.14.48.23.71.11.31.16.46.2.48.31.71.13.28.2.42.24.46.37.69a4.11 4.11 0 00.24.39c.13.22.27.44.42.65s.19.25.28.37.32.42.49.62l.06.08a13.71 13.71 0 005.58 3.82h.08l.93.29.28.07c.28.07.57.14.85.19l.53.08c.22 0 .43.07.65.09.42 0 .83.06 1.25.06s.83 0 1.25-.06c.22 0 .43-.06.65-.09l.53-.08c.29-.05.57-.12.85-.19l.27-.07c.32-.09.64-.19.95-.3h.07a13.57 13.57 0 006-4.28s.23-.31.34-.47.32-.44.47-.67.34-.44.47-.67zm-.66-3.74c-.09.37-.21.73-.33 1.09l-.08.21c-.13.33-.27.65-.43 1l-.09.2c-.2.37-.41.73-.64 1.08l-.37-.27 1.51-4.65h.69c-.06.43-.14.85-.24 1.27a.44.44 0 01-.02.07zM20.82 5.57a13.18 13.18 0 011.33.73h.06a10.54 10.54 0 011.21.9l.12.11a9.77 9.77 0 01.92.9l.2.22a12.18 12.18 0 01.89 1.15L24 10.77 20 7.9zm-8.53 1.1L8.34 9.55l-1.2-.87a12.24 12.24 0 01.92-1l.23-.21c.28-.25.56-.48.86-.7l.21-.16a11.58 11.58 0 012.42-1.32h.06zM6.75 22.8l-.06-.08a11.77 11.77 0 01-1.41-2.58c0-.07 0-.14-.08-.22a12.49 12.49 0 01-.37-1.23 1.46 1.46 0 010-.2 11.51 11.51 0 01-.23-1.43V17h2.22l1.51 4.65zm12.16 4.31a11.44 11.44 0 01-1.27.26 1.81 1.81 0 01-.23 0 11.09 11.09 0 01-2.82 0 1.81 1.81 0 01-.23 0 11.61 11.61 0 01-1.28-.26H13l.52-1.62h4.9L19 27.1zm1.94-.7l-.73-2.23a1 1 0 00-.95-.7h-6.34a1 1 0 00-.95.7l-.73 2.23a11.43 11.43 0 01-3.08-2.1l2-1.47a1 1 0 00.36-1.11l-2-6a1 1 0 00-1-.69h-3A11.42 11.42 0 016 10.33l1.74 1.26a1 1 0 001.17 0l5.14-3.73a1 1 0 00.36-1.12l-.66-2a11.33 11.33 0 015.17.17L17.94 8a1 1 0 00.36 1.12l5.13 3.73a1 1 0 001.18 0l1.93-1.41a11.53 11.53 0 01.93 4H26a1 1 0 00-.95.69l-2 6a1 1 0 00.36 1.12l.88.64a11.28 11.28 0 01-3.44 2.52z" />
  </svg>
));
Soccer.displayName = 'Soccer';