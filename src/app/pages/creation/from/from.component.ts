import { Component } from '@angular/core';
import { from } from 'rxjs';
import { MarbleSource } from 'src/app/models/common.types';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './from.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class FromComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          from(['A', 'B', 'C', 'D', 'E', 'F']),
          'random'
        ),
      ],
    },
  ];
}
