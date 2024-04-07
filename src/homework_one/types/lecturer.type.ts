import { ILecturer } from '../interfaces/lecturer.interface';

export type TLecturerContructor = Pick<ILecturer, 'name' | 'surname' | 'position' | 'company' | 'experience'>;
export type TNewLecturer = TLecturerContructor;
