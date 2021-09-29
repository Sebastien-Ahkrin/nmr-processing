declare module 'ml-levenberg-marquardt' {
  import type { DataXY } from 'cheminfo-types';

  export default function levenbergMarquardt(
    data: DataXY,
    parametrizedFunction: (p: number[]) => (t: number) => number,
    options?: any,
  ): {
    parameterValues: Array<number>;
    parameterError: number;
    iterations: number;
  };
}
