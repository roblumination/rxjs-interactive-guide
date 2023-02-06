import { OperatorGroupNamesList } from '../constants/operators';
import { MarbleSource } from './marble';

export type OperatorSourceMode = 'default' | 'logOnly';

export type OperatorSource = {
  inputs: MarbleSource[];
  outputs: MarbleSource[];
  mode?: OperatorSourceMode;
};

export type OperatorGroupName = typeof OperatorGroupNamesList[number];
export type OperatorList = Record<OperatorGroupName, string[]>;
