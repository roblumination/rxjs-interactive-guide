import { Observable } from 'rxjs';
import { MarbleData } from './common.types';

export interface OperatorPage {
  inputs: Observable<MarbleData>[];
  outputs: Observable<MarbleData>[];
  operatorSample: string;
}
