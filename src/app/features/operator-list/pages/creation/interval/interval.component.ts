import { Component } from '@angular/core';
import { interval, take } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class IntervalComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          interval(1000).pipe(take(3)),
          'random'
        ),
      ],
    },
  ];
}
