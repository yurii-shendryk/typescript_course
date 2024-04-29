export type TDeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: T[K] extends object ? TDeepRequireReadonly<T[K]> : T[K];
};
