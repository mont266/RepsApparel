import React from 'react';

const TiktokIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8.11V4h-3v10.5A2.5 2.5 0 0 1 10.5 17 2.5 2.5 0 0 1 8 14.5V4h-3v10a6 6 0 0 0 11 4V8.11z" />
  </svg>
);

export default TiktokIcon;
