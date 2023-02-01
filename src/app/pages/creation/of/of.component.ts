import { Component } from '@angular/core';
import { of } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './of.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class OfComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          of('A', 'B', 'C', 'D', 'E', 'F'),
          'random'
        ),
      ],
    },
  ];
}
