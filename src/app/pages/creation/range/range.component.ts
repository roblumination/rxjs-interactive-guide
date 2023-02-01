import { Component } from '@angular/core';
import { range } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './range.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class RangeComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          range(1, 8),
          'random'
        ),
      ],
    },
  ];
}
