import { Component } from '@angular/core';
import { timer } from 'rxjs';
import {
  AbstractOperatorPage,
  OperatorSource,
} from 'src/app/models/operator-page.model';

@Component({
  selector: 'app-interval',
  templateUrl: './timer.component.html',
  styleUrls: ['../../operator-page.scss'],
})
export class TimerComponent extends AbstractOperatorPage {
  public endDate: Date = new Date(Date.now() + 5000);
  public currentDate: Date = new Date();
  private interval!: ReturnType<typeof setInterval>;
  override sources: OperatorSource[] = [
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          timer(1000),
          'random'
        ),
      ],
    },
    {
      inputs: [],
      outputs: [
        this.marbleCreateService.convertToColoredObservable(
          timer(this.endDate),
          'random'
        ),
      ],
    },
  ];

  override ngOnInit(): void {
    this.interval = setInterval(() => (this.currentDate = new Date()), 100);
  }
  override ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public updateEndDate(): void {
    this.endDate = new Date(Date.now() + 5_000);
    this.sources[1].outputs = [
      this.marbleCreateService.convertToColoredObservable(
        timer(this.endDate),
        'random'
      ),
    ];
  }
}
