import { TDictionaryItem } from '../types/dictionary.type';
import { TValidObjectKeys } from '../types/validObjectKeys.type';

export interface IDictionaty<K extends TValidObjectKeys, V> {
  dictionary: TDictionaryItem<K, V>;
  set(item: { [key in K]: V }): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
}
