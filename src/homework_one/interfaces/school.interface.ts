import { TNewLecturer } from '../types/lecturer.type';
import { IArea } from './area.interface';
import { ILecturer } from './lecturer.interface';

export interface ISchool {
  areas: IArea[];
  lecturers: ILecturer[];
  addArea: (name: string) => void;
  removeArea: (name: string) => void;
  addLecturer: (lecturer: TNewLecturer) => void;
  removeLecturer: (name: string) => void;
}
