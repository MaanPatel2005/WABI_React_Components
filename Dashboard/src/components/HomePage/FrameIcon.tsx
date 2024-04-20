import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.33333 10H10' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.33333 15V5' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 15V5' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14.1667 10L16.6667 8.33333V15'
      stroke='#200A5C'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };
