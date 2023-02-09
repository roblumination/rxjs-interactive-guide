import { Component } from '@angular/core';
import { alphabet$ } from '@core/models/constants/observables';
import { MarbleSource } from '@core/models/types/marble';
import {
  combineLatest,
  from,
  map,
  Observable,
  range,
  withLatestFrom,
  zip,
} from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './combine-latest.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class CombineLatestComponent extends AbstractOperatorPage {
  public customInputs: Observable<string | number>[] = [
    zip(range(1, 30), this.randomTickService.randomTick1$).pipe(
      map(([num]) => num)
    ),
    zip(alphabet$, this.randomTickService.randomTick2$).pipe(
      map(([num]) => num)
    ),
  ];
  override sources: OperatorSource[] = [
    {
      inputs: [
        this.marbleCreateService.convertToColoredObservable(
          this.customInputs[0],
          'red'
        ),
        this.marbleCreateService.convertToColoredObservable(
          this.customInputs[1],
          'blue'
        ),
      ],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          combineLatest(this.customInputs).pipe(
            map(([num, string]) => num.toString() + string)
          ),
          'purple'
        ),
      ],
    },
  ];
}
