import type { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#313237"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M10.471 3.529a.667.667 0 0 0-.942 0l-4 4a.667.667 0 0 0 0 .942l4 4a.667.667 0 1 0 .942-.942L6.943 8l3.528-3.529a.667.667 0 0 0 0-.942Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowLeft;
