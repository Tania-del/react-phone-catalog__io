import type { SVGProps } from 'react';

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.472 5.529c.26.26.26.682 0 .942l-4 4a.667.667 0 0 1-.943 0l-4-4a.667.667 0 1 1 .942-.942l3.53 3.528 3.528-3.528c.26-.26.682-.26.943 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgArrowDown;
