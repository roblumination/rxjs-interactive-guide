import { Component, OnDestroy, OnInit } from '@angular/core';
import { OperatorPage } from 'src/app/core/models/operator.model';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { MarbleConstructionService } from 'src/app/core/services/marble-construction.service';
import { RandomTickService } from 'src/app/core/services/randomTick.service';

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
