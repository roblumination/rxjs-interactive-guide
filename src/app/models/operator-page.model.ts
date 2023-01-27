import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MarbleConstructionService } from '../services/marble-construction.service';
import { RandomTickService } from '../services/randomTick.service';
import { MarbleData } from './common.types';

export interface OperatorPage {
  inputs: Observable<MarbleData>[];
  outputs: Observable<MarbleData>[];
  operatorSample: string;
}

@Component({
  template: '',
})
export class AbstractOperatorPage implements OperatorPage {
  inputs: Observable<MarbleData>[] = [];
  outputs: Observable<MarbleData>[] = [];
  operatorSample: string = '';

  constructor(
    protected marbleCreateService: MarbleConstructionService,
    protected randomTickService: RandomTickService
  ) {}
}
