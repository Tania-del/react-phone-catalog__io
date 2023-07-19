import type { SVGProps } from 'react';

const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.467.933A.667.667 0 0 1 4 .667h8c.21 0 .408.098.533.266l2 2.667a.667.667 0 0 1 .134.4v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V4c0-.144.047-.285.134-.4l2-2.667ZM4.333 2 2.667 4.222v9.111a.667.667 0 0 0 .666.667h9.334a.666.666 0 0 0 .666-.667v-9.11L11.667 2H4.333Z"
      clipRule="evenodd"
    />
    <path
      fill="#313237"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M1.333 4c0-.368.299-.667.667-.667h12a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 4ZM5.333 6c.368 0 .667.298.667.667a2 2 0 1 0 4 0 .667.667 0 1 1 1.333 0 3.333 3.333 0 0 1-6.666 0c0-.369.298-.667.666-.667Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgShoppingBag;
