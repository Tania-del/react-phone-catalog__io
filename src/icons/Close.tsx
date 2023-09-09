import type { SVGProps } from 'react';

const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.472 4.471a.667.667 0 0 0-.943-.942L8 7.057 4.472 3.53a.667.667 0 1 0-.943.942L7.057 8 3.53 11.529a.667.667 0 1 0 .943.942L8 8.943l3.529 3.528a.667.667 0 0 0 .943-.942L8.943 8l3.529-3.529Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgClose;
