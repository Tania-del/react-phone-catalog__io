import type { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M8.666 3.333a.667.667 0 1 0-1.333 0v4h-4a.667.667 0 0 0 0 1.334h4v4a.667.667 0 0 0 1.333 0v-4h4a.667.667 0 1 0 0-1.334h-4v-4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPlus;
