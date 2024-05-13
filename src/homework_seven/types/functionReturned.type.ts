// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FunctionReturnedType<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer U
  ? U
  : unknown;
