/* eslint-disable @typescript-eslint/no-explicit-any */

export type TFunctionReturnedWithParamType<T extends (arg: any) => unknown> = T extends (
  ...args: (infer U)[]
) => infer V
  ? [V, U]
  : unknown;
