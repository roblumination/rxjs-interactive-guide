import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarbleConstructionService } from '../services/marble-construction.service';
import { RandomTickService } from '../services/randomTick.service';
import { MarbleSource } from './common.types';

export type OperatorSource = {
  inputs: MarbleSource[];
  outputs: MarbleSource[];
};

export interface OperatorPage {
  sources: OperatorSource[];
}

@Component({
  template: '',
})
export class AbstractOperatorPage implements OperatorPage, OnInit, OnDestroy {
  sources: OperatorSource[] = [];

  constructor(
    protected marbleCreateService: MarbleConstructionService,
    protected randomTickService: RandomTickService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
