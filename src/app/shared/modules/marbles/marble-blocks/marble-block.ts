import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MarbleData, MarbleTransport } from '@core/models/types/marble';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  template: '',
})
export class AbstractMarbleBlock implements OnInit, OnDestroy {
  @Input() data$!: Observable<MarbleData>;
  @Input() transport: MarbleTransport = { start: null, stop: null };

  public status: 'pending' | 'active' | 'completed' | 'error' = 'pending';
  protected destroyed$ = new Subject<void>();
  private subscription!: Subscription;

  ngOnInit(): void {
    this.watchForTransport();
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  private watchForTransport(): void {
    if (this.transport.start && this.transport.stop) {
      this.transport.start.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.status = 'active';
        this.watchForStatus();
      });
      this.transport.stop.pipe(takeUntil(this.destroyed$)).subscribe(() => {
        this.status = 'pending';
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
        this.status = 'completed';
      },
      error: () => {
        this.status = 'error';
      },
    });
  }
}
