import { IUser } from './interfaces/user.interface';
import { FunctionReturnedType } from './types/functionReturned.type';
import { TFunctionReturnedWithParamType } from './types/functionReturnedWithParam.type';

/*  
Вам потрібно створити умовний тип, що служить для встановлення типу, що повертається з функції. 
Як параметр типу повинен обов'язково виступати функціональний тип.
*/
function getUserName(user: IUser): string {
  return user.name;
}
function getUserAge(user: IUser): number {
  return user.age;
}

function log(): void {
  // eslint-disable-next-line no-console
  console.log('hello');
}

function logUser(user: IUser): void {
  // eslint-disable-next-line no-console
  console.log(user);
}

type TFuncitonReturnedOne = FunctionReturnedType<typeof getUserName>; // string
type TFuncitonReturnedTwo = FunctionReturnedType<typeof getUserAge>; // number
type TFuncitonReturnedThree = FunctionReturnedType<() => void>; // void
type TFuncitonReturnedFour = FunctionReturnedType<any>; // any
type TFuncitonReturnedFive = FunctionReturnedType<never>; // never
type TFuncitonReturnedSix = FunctionReturnedType<string>; // error
type TFuncitonReturnedSeven = FunctionReturnedType<0>; // error

/*
Вам потрібно створити умовний тип, 
який приймає функціональний тип з одним параметром (або задовільним) та повертає кортеж, 
де перше значення - це тип, що функція повертає, а другий - тип її параметру.
*/

type TFuncitonReturnedWithParamOne = TFunctionReturnedWithParamType<typeof getUserName>; // [string, IUser]
type TFuncitonReturnedWithParamTwo = TFunctionReturnedWithParamType<typeof getUserAge>; // [number, IUser]
type TFuncitonReturnedWithParamThree = TFunctionReturnedWithParamType<typeof log>; // [void, never]
type TFuncitonReturnedWithParamFour = TFunctionReturnedWithParamType<typeof logUser>; // [void, never]
type TFuncitonReturnedWithParamFive = TFunctionReturnedWithParamType<any>; // any
type TFuncitonReturnedWithParamSix = TFunctionReturnedWithParamType<never>; // never
type TFuncitonReturnedWithParamSeven = TFunctionReturnedWithParamType<string>; // error
type TFuncitonReturnedWithParamEight = TFunctionReturnedWithParamType<0>; // error
