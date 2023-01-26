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

@Component({
  selector: 'app-marble-strip',
  templateUrl: './marble-strip.component.html',
  styleUrls: ['./marble-strip.component.scss'],
})
export class MarbleStripComponent implements OnInit, OnDestroy {
  @Input() obs!: Observable<MarbleData>;
  @Input() startObs?: Observable<void>;
  @Input() stopObs?: Observable<void>;

  @ViewChild('dotsContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  public completed: boolean = false;
  public started: boolean = false;

  private subscription!: Subscription;
  private destroyed$ = new Subject<void>();
  private observer = {
    next: (data: MarbleData) => {
      this.createNewDot(data.value, data.color);
      console.log(data.value);
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
    this.container.clear();
    this.destroyed$.next();
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

  private createNewDot(value: string, color: MarbleColor) {
    const newDot = this.container.createComponent(MarbleDotComponent);
    newDot.instance.data = value;
    newDot.instance.setColor(color);
  }

  private watchForTranport(): void {
    this.startObs
      ?.pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.start());
    this.stopObs?.pipe(takeUntil(this.destroyed$)).subscribe(() => this.stop());
  }
}
