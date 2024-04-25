import { IDictionaty } from './interfaces/dictionaty.interface';
import { IStack } from './interfaces/stack.interface';
import { TDictionaryItem } from './types/dictionary.type';
import { TFilterConditionCallback } from './types/filterArray.type';
import { TValidObjectKeys } from './types/validObjectKeys.type';

const filterArray = <T>(array: T[], condition: TFilterConditionCallback<T>): T[] => {
  const filteredArray: T[] = array.filter(condition);
  return filteredArray;
};

class Stack<T> implements IStack<T> {
  private _storage: T[] = [];

  get storage(): T[] {
    return this._storage;
  }

  push(item: T): number {
    return this._storage.push(item);
  }

  pop(): T | null {
    return this._storage.pop() ?? null;
  }

  peek(): T | null {
    return this._storage.length ? this._storage[this._storage.length - 1] : null;
  }
}

class Dictinary<K extends TValidObjectKeys, V> implements IDictionaty<K, V> {
  private _dictionary!: TDictionaryItem<K, V>;

  get dictionary(): TDictionaryItem<K, V> {
    return this._dictionary;
  }

  set(item: TDictionaryItem<K, V>): void {
    this._dictionary = item;
  }

  get(key: K): V | undefined {
    return this._dictionary[key];
  }

  has(key: K): boolean {
    return key in this._dictionary;
  }
}
