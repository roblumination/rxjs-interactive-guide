import { Observable } from 'rxjs';
import { marbleColorNamesList } from './constants/colors';
import { OperatorGroupNamesList } from './constants/operators';

export type MarbleColor = typeof marbleColorNamesList[number];
export type MarbleData = { value: string; color: MarbleColor };
export type MarbleSource = Observable<MarbleData>;

export type OperatorGroupName = typeof OperatorGroupNamesList[number];
export type OperatorList = Record<OperatorGroupName, string[]>;
