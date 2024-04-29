export type TUpperCaseKeys<T> = {
  [K in keyof T & string as Uppercase<K>]: T[K];
};
