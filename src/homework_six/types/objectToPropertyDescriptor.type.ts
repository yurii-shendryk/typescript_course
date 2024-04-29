export type TObjectToPropertyDescriptor<T> = {
  [K in keyof T]: PropertyDescriptor;
};
