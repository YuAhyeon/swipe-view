import { Child } from '@/types';
import { pipe, join } from '@fxts/core';

type SvgProps = {
  width: number;
  height: number;
  viewBox: [number, number, number, number];
  fill?: string;
} & Child;

export default function Svg(props: SvgProps) {
  const { className, width, height, viewBox, fill, children } = props;
  return (
    <svg
      className={className || ''}
      width={width}
      height={height}
      viewBox={pipe(viewBox, join(' '))}
      fill={fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
