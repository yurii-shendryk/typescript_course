import { IStudent } from '../interfaces/student.interface';

export type TStudentContructor = Pick<IStudent, 'firstName' | 'lastName' | 'birthYear'>;
export type TNewStudent = TStudentContructor;
