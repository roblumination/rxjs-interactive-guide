import { Component } from '@angular/core';
import { iif, of } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './iif.component.html',
  styleUrls: ['../../operator-page.scss'],
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
