import { ILevel } from '../interfaces/level.interface';

export type TLevelContructor = Pick<ILevel, 'name' | 'description'>;
export type TNewLevel = TLevelContructor;
