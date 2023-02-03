import { OperatorGroupNamesList } from '../constants/operators';
import { MarbleSource } from './marble';

export type OperatorSource = {
  inputs: MarbleSource[];
  outputs: MarbleSource[];
};

export type OperatorGroupName = typeof OperatorGroupNamesList[number];
export type OperatorList = Record<OperatorGroupName, string[]>;
