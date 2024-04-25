import { TValidObjectKeys } from './validObjectKeys.type';

export type TDictionaryItem<K extends TValidObjectKeys, V> = {
  [key in K]: V;
};
