import type { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#333"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M2.667 7.333a4.667 4.667 0 1 1 8.027 3.238.67.67 0 0 0-.123.123 4.667 4.667 0 0 1-7.904-3.361Zm8.412 4.688a6 6 0 1 1 .943-.943l2.45 2.45a.667.667 0 1 1-.943.943l-2.45-2.45Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgSearch;
