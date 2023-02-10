import { Component } from '@angular/core';
import { alphabet$ } from '@core/models/constants/observables';
import { concat, forkJoin, map, range, take, zip } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './fork-join.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class ForkJoinComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [
        this.marbleCreateService.convertToColoredObservable(
          zip(range(1, 3), this.randomTickService.randomTick1$).pipe(
            map(([num]) => num)
          ),
          'red'
        ),
        this.marbleCreateService.convertToColoredObservable(
          zip(
            alphabet$.pipe(take(3)),
            this.randomTickService.randomTick2$
          ).pipe(map(([num]) => num)),
          'blue'
        ),
      ],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          forkJoin([
            zip(range(1, 3), this.randomTickService.randomTick1$).pipe(
              map(([num]) => num)
            ),
            zip(
              alphabet$.pipe(take(3)),
              this.randomTickService.randomTick2$
            ).pipe(map(([num]) => num)),
          ]).pipe(map(([val1, val2]) => `[${val1}, ${val2}]`)),
          'green'
        ),
      ],
    },
  ];
}
