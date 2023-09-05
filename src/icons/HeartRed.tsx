import type { SVGProps } from 'react';

const SvgHeartRed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#EB5757"
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M11.3 1.299a4.366 4.366 0 0 0-3.088 1.28L8 2.79l-.212-.212a4.368 4.368 0 1 0-6.176 6.177l5.893 5.893a.7.7 0 0 0 .99 0l5.893-5.893A4.366 4.366 0 0 0 11.3 1.299Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHeartRed;
