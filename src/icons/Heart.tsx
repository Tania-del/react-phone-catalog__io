import type { SVGProps } from 'react';

const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fillRule="evenodd"
      // eslint-disable-next-line max-len
      d="M9.628 1.631a4.367 4.367 0 0 1 4.76 7.124l-5.893 5.893a.7.7 0 0 1-.99 0L1.612 8.755a4.368 4.368 0 1 1 6.176-6.177L8 2.79l.212-.212a4.367 4.367 0 0 1 1.416-.947Zm3.77 1.937a2.967 2.967 0 0 0-4.196 0l-.707.707a.7.7 0 0 1-.99 0l-.707-.707a2.968 2.968 0 1 0-4.196 4.197L8 13.163l5.398-5.398a2.967 2.967 0 0 0 0-4.197Z"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgHeart;
