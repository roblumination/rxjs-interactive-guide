import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { popUpAnimation } from '@core/animations/common';
import { MarbleData, MarbleTransport } from '@core/models/types/marble';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-classic-marble-block',
  templateUrl: './classic-marble-block.component.html',
  styleUrls: ['./classic-marble-block.component.scss'],
  animations: [popUpAnimation],
})
export class ClassicMarbleBlockComponent implements OnInit, OnDestroy {
  @Input() data$!: Observable<MarbleData>;
  @Input() transport: MarbleTransport = { start: null, stop: null };

  public status: 'pending' | 'active' | 'completed' | 'error' = 'pending';
  private destroyed$ = new Subject<void>();
  private subscription!: Subscription;

  ngOnInit(): void {
    // console.log(this.data$);
    this.watchForTransport();
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  private watchForTransport(): void {
    if (this.transport.start && this.transport.stop) {
      console.log('TRANSPORT OK');
      this.transport.start.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.status = 'active';
        console.log('STARTED!');
        this.watchForStatus();
      });
      this.transport.stop.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.status = 'pending';
        console.log('sstoped!');
        this.subscription.unsubscribe();
      });
    } else {
      this.status = 'active';
      this.watchForStatus();
    }
  }

  private watchForStatus(): void {
    this.subscription = this.data$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: () => {},
      complete: () => {
        console.log('COMPLETED!');
        this.status = 'completed';
      },
      error: () => {
        this.status = 'error';
      },
    });
  }
}
