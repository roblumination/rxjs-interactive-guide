import { Component } from '@angular/core';
import { range } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './range.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
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
