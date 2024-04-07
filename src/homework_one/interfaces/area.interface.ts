import { ILevel } from './level.interface';

export interface IArea {
  levels: ILevel[];
  name: string;
  addLevel: (level: ILevel) => void;
  removeLevel: (levelName: string) => void;
}
