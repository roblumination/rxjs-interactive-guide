import { Observable, Subject } from 'rxjs';
import { marbleColorNamesList } from '../constants/colors';

export type MarbleColor = typeof marbleColorNamesList[number];
export type MarbleData = { value: string; color: MarbleColor };
export type MarbleSource = Observable<MarbleData>;
export type MarbleType = 'normal' | 'complete' | 'error';
export type MarbleTransportControl = Observable<void> | Subject<void> | null;
export type MarbleTransport = {
  start: MarbleTransportControl;
  stop: MarbleTransportControl;
};
