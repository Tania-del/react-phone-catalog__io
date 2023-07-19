import type { SVGProps } from 'react';

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#B4BDC4"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M3.529 10.471a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.943 0l4 4a.667.667 0 0 1-.943.942L8 6.943 4.472 10.47a.667.667 0 0 1-.943 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowUp;
