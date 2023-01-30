import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  delay,
  delayWhen,
  from,
  fromEvent,
  interval,
  map,
  Observable,
  take,
} from 'rxjs';
import { MarbleData } from 'src/app/models/common.types';
import { AbstractOperatorPage } from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './from-event.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class FromEventComponent extends AbstractOperatorPage {
  override inputs: Observable<MarbleData>[] = [];
  override outputs: Observable<MarbleData>[] = [];

  override ngOnInit(): void {
    const button = document.getElementById('from-event-button');
    if (button) {
      this.outputs.push(
        this.marbleCreateService.convertToColoredObservable(
          fromEvent(button, 'click').pipe(map((event) => 'EV')),
          'random'
        )
      );
    }
  }
}
