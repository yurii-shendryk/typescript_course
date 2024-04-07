import { IGroup } from '../interfaces/group.interface';

export type TGroupContructor = Pick<IGroup, 'area' | 'directionName' | 'levelName' | 'status'>;
export type TNewGroup = TGroupContructor;
