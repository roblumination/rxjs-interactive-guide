import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MarbleData } from 'src/app/models/common.types';
import { OperatorPage } from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class IntervalComponent implements OperatorPage {
  inputs: Observable<MarbleData>[] = [];
  outputs: Observable<MarbleData>[] = [];
  operatorSample: string = '';
}
