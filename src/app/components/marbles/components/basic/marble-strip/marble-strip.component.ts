import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable, startWith, Subject, Subscription, takeUntil } from 'rxjs';
import { MarbleColor, MarbleData } from 'src/app/models/common.types';
import { MarbleDotComponent } from '../marble-dot/marble-dot.component';
import { MarbleLogItemComponent } from '../marble-log-item/marble-log-item.component';

@Component({
  selector: 'app-marble-strip',
  templateUrl: './marble-strip.component.html',
  styleUrls: ['./marble-strip.component.scss'],
})
export class MarbleStripComponent implements OnInit, OnDestroy {
  @Input() obs!: Observable<MarbleData>;
  @Input() startObs: Observable<void> | null = null;
  @Input() stopObs: Observable<void> | null = null;

  @ViewChild('dotsContainer', { read: ViewContainerRef })
  dotsContainer!: ViewContainerRef;
  @ViewChild('logItemsContainer', { read: ViewContainerRef })
  logItemsContainer!: ViewContainerRef;
  public completed: boolean = false;
  public started: boolean = false;

  private subscription!: Subscription;
  private destroyed$ = new Subject<void>();
  private observer = {
    next: (data: MarbleData) => {
      this.createItems(data.value, data.color);
      console.log(data);
    },
    complete: () => {
      this.completed = true;
      this.started = false;
    },
  };

  constructor() {}

  ngOnInit(): void {
    this.watchForTranport();
  }

  ngOnDestroy(): void {
    this.dotsContainer.clear();
    this.destroyed$.next();
  }

  public clearLog(): void {
    this.logItemsContainer.clear();
  }

  private start(): void {
    this.started = true;
    this.completed = false;
    this.subscription = this.obs
      .pipe(takeUntil(this.destroyed$))
      .subscribe(this.observer);
  }

  private stop(): void {
    this.started = false;
    this.subscription.unsubscribe();
  }

  private createItems(value: string, color: MarbleColor) {
    const newDot = this.dotsContainer.createComponent(MarbleDotComponent);
    const newLogItem = this.logItemsContainer.createComponent(
      MarbleLogItemComponent
    );
    newDot.instance.data = value;
    newDot.instance.setColor(color);
    newLogItem.instance.data = value;
    newLogItem.instance.setColor(color);
    setTimeout(() => {
      newDot.destroy();
    }, 10000);
  }

  private watchForTranport(): void {
    if (this.startObs && this.stopObs) {
      this.startObs
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.start());
      this.stopObs
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.stop());
    } else this.start();
  }
}
