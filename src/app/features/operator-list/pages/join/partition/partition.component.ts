import { Component } from '@angular/core';
import { map, partition, range, zip } from 'rxjs';
import { OPERATOR_STYLE_PATH } from 'src/app/core/models/constants/common';
import { OperatorSource } from 'src/app/core/models/types/operators';
import { AbstractOperatorPage } from '../../../components/operator-page/operator-page';

@Component({
  selector: 'app-interval',
  templateUrl: './partition.component.html',
  styleUrls: [OPERATOR_STYLE_PATH],
})
export class PartitionComponent extends AbstractOperatorPage {
  override sources: OperatorSource[] = [
    {
      inputs: [
        this.marbleCreateService.convertToColoredObservable(
          zip(range(1, 20), this.randomTickService.randomTick1$).pipe(
            map(([num]) => num)
          ),
          'random'
        ),
      ],
      outputs: [
        ...partition(
          zip(range(1, 20), this.randomTickService.randomTick1$).pipe(
            map(([num]) => num)
          ),
          (num) => num % 2 === 0
        ).map((obs) =>
          this.marbleCreateService.convertToColoredObservable(obs, 'random')
        ),
      ],
    },
  ];
}
