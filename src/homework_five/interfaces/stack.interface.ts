export interface IStack<T> {
  storage: T[];
  push(item: T): number;
  pop(): T | null;
  peek(): T | null;
}
