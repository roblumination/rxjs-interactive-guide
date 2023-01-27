import { MarbleColorNamesList } from './constants/colors';
import { OperatorGroupNamesList } from './constants/operators';

export type MarbleColor = typeof MarbleColorNamesList[number];
export type MarbleData = { value: string; color: MarbleColor };

export type OperatorGroupName = typeof OperatorGroupNamesList[number];
export type OperatorList = Record<OperatorGroupName, string[]>;
