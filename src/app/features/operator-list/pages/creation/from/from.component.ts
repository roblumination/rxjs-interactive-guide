import { Component } from '@angular/core';
import { from } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './from.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
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
