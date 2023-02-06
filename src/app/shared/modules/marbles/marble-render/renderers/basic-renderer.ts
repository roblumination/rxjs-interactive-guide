import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  MarbleColor,
  MarbleData,
  MarbleTransport,
  MarbleType,
} from '@core/models/types/marble';
import { Observable, Observer, Subject, Subscription, takeUntil } from 'rxjs';
import { BasicItemComponent } from '../items/basic-item.component';
import { DotComponent } from '../items/dot/dot.component';

@Component({
  template: '',
})
export class BasicRenderer implements OnInit, OnDestroy {
  @Input() public data$!: Observable<MarbleData>;
  @Input() public transport: MarbleTransport = { start: null, stop: null };
  @ViewChild('itemContainer', { read: ViewContainerRef })
  public viewContainerRef!: ViewContainerRef;

  protected itemClass: Type<BasicItemComponent> = DotComponent;
  protected itemLifeTime: number | null = null;

  private subscription!: Subscription;
  private destroyed$ = new Subject<void>();
  private observer: Observer<MarbleData> = {
    next: (data: MarbleData) => {
      this.addNewItem('normal', data.value, data.color);
    },
    error: (error) => {
      this.addNewItem('error', error);
    },
    complete: () => {
      this.chDetRef.markForCheck();
      this.addNewItem('complete');
    },
  };

  constructor(private chDetRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.watchForTranport();
  }

  ngOnDestroy(): void {
    if (this.viewContainerRef) this.viewContainerRef.clear();
    this.destroyed$.next();
  }

  public clear(): void {
    this.viewContainerRef.clear();
  }

  private addNewItem(
    type: MarbleType,
    value: string = '',
    color: MarbleColor = 'red'
  ): void {
    console.log('ADD ITEM!');
    // const item = this.viewContainerRef.createComponent(this.itemClass);
    const item = this.viewContainerRef.createComponent(DotComponent);
    item.instance.setType(type);
    item.instance.fill(color, value);
    if (this.itemLifeTime)
      setTimeout(() => {
        item.destroy();
      }, this.itemLifeTime);
  }

  private start(): void {
    this.subscription = this.data$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(this.observer);
  }

  private stop(): void {
    this.subscription.unsubscribe();
  }

  private watchForTranport(): void {
    if (this.transport.start && this.transport.stop) {
      this.transport.start
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.start());
      this.transport.stop
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => this.stop());
    } else this.start();
  }
}
