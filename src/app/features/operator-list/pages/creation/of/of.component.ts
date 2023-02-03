import { Component } from '@angular/core';
import { of } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './of.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
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
