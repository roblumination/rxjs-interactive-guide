import { Component } from '@angular/core';
import { iif, of } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './iif.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class IifComponent extends AbstractOperatorPage {
  public myBoolean = false;
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        iif(
          () => this.myBoolean,
          this.marbleCreateService.convertToColoredObservable(of('A'), 'red'),
          this.marbleCreateService.convertToColoredObservable(of('B'), 'blue')
        ),
      ],
    },
  ];

  public toggle(): void {
    this.myBoolean = !this.myBoolean;
  }
}
