export type TDeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? TDeepReadonly<T[K]> : T[K];
};
