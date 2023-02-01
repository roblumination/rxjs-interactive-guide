import { Component } from '@angular/core';
import { interval, take } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['../../operator-page.scss'],
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
