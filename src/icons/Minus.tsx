import type { SVGProps } from 'react';

const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.667 8c0-.368.298-.667.666-.667h9.334a.667.667 0 1 1 0 1.334H3.332A.667.667 0 0 1 2.666 8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgMinus;
