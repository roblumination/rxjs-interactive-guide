import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { MarbleData, MarbleSource } from 'src/app/models/common.types';
import { AbstractOperatorPage } from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class IntervalComponent extends AbstractOperatorPage {
  override inputs: MarbleSource[] = [];
  override outputs: MarbleSource[] = [
    this.marbleCreateService.convertToColoredObservable(
      interval(1000).pipe(take(100)),
      'random'
    ),
  ];

  replaceInterval(intervalInMs: number): void {
    this.outputs[0] = this.marbleCreateService.convertToColoredObservable(
      interval(intervalInMs).pipe(take(100)),
      'random'
    );
  }
}
