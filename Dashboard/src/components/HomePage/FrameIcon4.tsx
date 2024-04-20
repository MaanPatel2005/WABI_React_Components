import { memo, SVGProps } from 'react';

const FrameIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M3.33333 10H16.6667' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.33333 5H16.6667' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.33333 15H16.6667' stroke='#200A5C' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(FrameIcon4);
export { Memo as FrameIcon4 };
