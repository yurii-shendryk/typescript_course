import { IStudent } from './student.interface';

export interface IGroup {
  name: string;
  area: string;
  status: GroupStatusEnum;
  students: IStudent[];
  directionName: string;
  levelName: string;
  showPerformance: () => IStudent[];
  addStudent: (student: IStudent) => void;
  removeStudent: (student: IStudent) => void;
}

export const enum GroupStatusEnum {
  EMPTY,
  OPEN,
  FULL,
}
