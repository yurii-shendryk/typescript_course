import { TNewGroup } from '../types/group.type';
import { IGroup } from './group.interface';

export interface ILevel {
  groups: IGroup[];
  name: string;
  description: string;
  addGroup: (group: TNewGroup) => void;
  removeGroup: (groupName: string) => void;
}
