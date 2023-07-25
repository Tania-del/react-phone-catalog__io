import type { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.942L9.057 8 5.53 4.471a.667.667 0 0 1 0-.942Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowRight;
