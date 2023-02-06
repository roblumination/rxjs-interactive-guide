import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MarbleColor, MarbleData, MarbleType } from '@core/models/types/marble';
import { Observable, Observer, Subject, Subscription, takeUntil } from 'rxjs';
import { MarbleDotComponent } from '../marble-dot/marble-dot.component';
import { MarbleLogItemComponent } from '../marble-log-item/marble-log-item.component';

@Component({
  selector: 'app-marble-strip',
  templateUrl: './marble-strip.component.html',
  styleUrls: ['./marble-strip.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarbleStripComponent implements OnInit, OnDestroy {
  @Input() obs!: Observable<MarbleData>;
  @Input() startObs: Observable<void> | null = null;
  @Input() stopObs: Observable<void> | null = null;
  @Input() createDots: boolean = true;

  @ViewChild('dotsContainer', { read: ViewContainerRef })
  dotsContainer!: ViewContainerRef;
  @ViewChild('logItemsContainer', { read: ViewContainerRef })
  logItemsContainer!: ViewContainerRef;

  public completed: boolean = false;
  public started: boolean = false;
  @HostBinding('class.activated') activated: boolean = false;

  private readonly DOT_LIFE_TIME = 10_000;
  private subscription!: Subscription;
  private destroyed$ = new Subject<void>();
  private observer: Observer<MarbleData> = {
    next: (data: MarbleData) => {
      this.createMarble(data.value, data.color);
    },
    error: (error) => {
      console.log(error);
      this.started = false;
      this.activated = false;
      this.createUtilMarble('error', error);
    },
    complete: () => {
      this.activated = false;
      this.started = false;
      this.completed = true;
      this.chDetRef.markForCheck();
      this.createUtilMarble('complete');
    },
  };

  constructor(private chDetRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.watchForTranport();
  }

  ngOnDestroy(): void {
    if (this.dotsContainer) this.dotsContainer.clear();
    this.destroyed$.next();
  }

  public clearLog(): void {
    this.logItemsContainer.clear();
  }

  private start(): void {
    this.started = true;
    this.completed = false;
    this.activated = true;
    this.subscription = this.obs
      .pipe(takeUntil(this.destroyed$))
      .subscribe(this.observer);
    // this.chDetRef.detectChanges();
  }

  private stop(): void {
    this.started = false;
    this.activated = false;
    this.completed = false;
    this.subscription.unsubscribe();
  }

  private createMarble(value: string, color: MarbleColor) {
    if (this.createDots) this.createDot('normal', value, color);
    this.createLogItem('normal', value, color);
  }

  private createUtilMarble(type: MarbleType, value: string = ''): void {
    if (this.createDots) this.createDot(type);
    this.createLogItem(type, value);
  }

  private createDot(
    type: MarbleType,
    value: string = '',
    color: MarbleColor = 'red'
  ): void {
    const dot = this.dotsContainer.createComponent(MarbleDotComponent);
    dot.instance.setType(type);
    dot.instance.fill(color, value);

    setTimeout(() => {
      dot.destroy();
    }, this.DOT_LIFE_TIME);
  }

  private createLogItem(
    type: MarbleType,
    value: string = '',
    color: MarbleColor = 'red'
  ): void {
    const logItem = this.logItemsContainer.createComponent(
      MarbleLogItemComponent
    );
    logItem.instance.setType(type);
    logItem.instance.fill(color, value);
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
