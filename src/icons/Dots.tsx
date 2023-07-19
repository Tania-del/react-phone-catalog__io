import type { SVGProps } from 'react';

const SvgDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={24}
    fill="none"
    viewBox="0 0 80 24"
    {...props}
  >
    <path fill="#313237" d="M5 10h14v4H5z" />
    <path fill="#E2E6E9" d="M33 10h14v4H33zM61 10h14v4H61z" />
  </svg>
);

export default SvgDots;
