import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './throw-error.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class ThrowErrorComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          throwError(() => 'error text'),
          'random'
        ),
      ],
    },
  ];
}
