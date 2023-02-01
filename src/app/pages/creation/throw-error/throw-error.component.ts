import { Component } from '@angular/core';
import { of, throwError } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './throw-error.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class ThrowErrorComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          throwError(() => new Error('A')),
          'random'
        ),
      ],
    },
  ];
}
