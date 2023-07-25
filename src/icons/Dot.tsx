import type { SVGProps } from 'react';

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={4}
    fill="none"
    viewBox="0 0 14 4"
    {...props}
  >
    <path d="M0 0h14v4H0z" />
  </svg>
);

export default SvgDot;
