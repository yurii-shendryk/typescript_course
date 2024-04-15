// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання.
// Наприклад, тип значення для кожного ключа може бути число | рядок.

interface IIndexUnion {
  [key: string]: number | string;
}

// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями.
// Ключами можуть бути рядки, а значеннями — функції, які приймають будь - які аргументи.

interface IIndexFunciton {
  [key: string]: (...args: unknown[]) => void;
}

// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву.
// Ключі повинні бути числами, а значення - певного типу.

interface IIndexArrayLikeOne {
  [key: number]: string;
}

interface IIndexArrayLikeTwo {
  [key: number]: number;
}

interface IIndexArrayLikeThree<T> {
  [key: number]: T;
}

// Створіть інтерфейс з певними властивостями та індексною сигнатурою.
// Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface IIndexWithProps {
  firsName: string;
  lastName: string;
  age: number;
  [key: string]: string | number;
}

// Створіть два інтерфейси, один з індексною сигнатурою,
// а інший розширює перший, додаючи специфічні властивості.

interface IBaseIndex {
  [key: string]: string | number;
}

interface IExtendedIndex extends IBaseIndex {
  name: string;
  type: string;
  amount: number;
}

// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє,
// чи відповідають значення певних ключів певним критеріям(наприклад, чи всі значення є числами).

interface IIndexSignatureObject {
  [key: string]: number;
}

function areAllValuesNumbers(obj: IIndexSignatureObject): boolean {
  const valuesArray = Object.values(obj);
  return valuesArray.length ? valuesArray.every(value => typeof value === 'number') : false;
}
