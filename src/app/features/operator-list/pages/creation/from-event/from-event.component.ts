import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './from-event.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class FromEventComponent extends AbstractOperatorPage {
  // override sources: OperatorSource[] = [
  //   {
  //     inputs: [],
  //     outputs: [],
  //   },
  // ];

  override ngOnInit(): void {
    const button = document.getElementById('from-event-button');
    if (button) {
      this.sources[0].outputs.push(
        this.marbleCreateService.convertToColoredObservable(
          fromEvent(button, 'click').pipe(map((event) => 'EV')),
          'random'
        )
      );
    }
  }
}
