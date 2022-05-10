import { forwardRef, SVGProps } from 'react';

export interface SlackProps extends Omit<SVGProps<SVGSVGElement>, 'css'> {}

export const Slack = forwardRef<SVGSVGElement, SlackProps>((props, ref) => (
  <svg ref={ref} {...props} fill="none" aria-hidden="true" viewBox="0 0 32 32">
    <path
      fill="#E01E5A"
      d="M8.463 19.43C8.463 20.933 7.235 22.161 5.731 22.161 4.228 22.161 3 20.933 3 19.43 3 17.927 4.228 16.699 5.731 16.699H8.463V19.43ZM9.839 19.43C9.839 17.927 11.067 16.699 12.57 16.699 14.073 16.699 15.301 17.927 15.301 19.43V26.269C15.301 27.772 14.073 29 12.57 29 11.067 29 9.839 27.772 9.839 26.269V19.43Z"
    />
    <path
      fill="#36C5F0"
      d="M12.57 8.463C11.067 8.463 9.839 7.235 9.839 5.731 9.839 4.228 11.067 3 12.57 3 14.073 3 15.301 4.228 15.301 5.731V8.463H12.57ZM12.57 9.839C14.073 9.839 15.301 11.067 15.301 12.57 15.301 14.074 14.073 15.302 12.57 15.302H5.731C4.228 15.302 3 14.074 3 12.57 3 11.067 4.228 9.839 5.731 9.839H12.57Z"
    />
    <path
      fill="#2EB67D"
      d="M23.538 12.57C23.538 11.067 24.766 9.839 26.269 9.839 27.772 9.839 29 11.067 29 12.57 29 14.074 27.772 15.302 26.269 15.302H23.538V12.57ZM22.161 12.57C22.161 14.073 20.933 15.301 19.43 15.301 17.927 15.301 16.699 14.073 16.699 12.57V5.731C16.699 4.228 17.927 3 19.43 3 20.933 3 22.161 4.228 22.161 5.731V12.57Z"
    />
    <path
      fill="#ECB22E"
      d="M19.43 23.537C20.933 23.537 22.161 24.765 22.161 26.269 22.161 27.772 20.933 29 19.43 29 17.927 29 16.699 27.772 16.699 26.269V23.537H19.43ZM19.43 22.161C17.927 22.161 16.699 20.933 16.699 19.43 16.699 17.927 17.927 16.699 19.43 16.699H26.269C27.772 16.699 29 17.927 29 19.43 29 20.933 27.772 22.161 26.269 22.161H19.43Z"
    />
  </svg>
));
Slack.displayName = 'Slack';