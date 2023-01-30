import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarbleConstructionService } from '../services/marble-construction.service';
import { RandomTickService } from '../services/randomTick.service';
import { MarbleSource } from './common.types';

export interface OperatorPage {
  inputs: MarbleSource[];
  outputs: MarbleSource[];
}

@Component({
  template: '',
})
export class AbstractOperatorPage implements OperatorPage, OnInit {
  inputs: MarbleSource[] = [];
  outputs: MarbleSource[] = [];

  constructor(
    protected marbleCreateService: MarbleConstructionService,
    protected randomTickService: RandomTickService
  ) {}

  ngOnInit(): void {}
}
