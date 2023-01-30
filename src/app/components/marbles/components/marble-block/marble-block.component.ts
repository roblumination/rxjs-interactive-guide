import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marble-block',
  templateUrl: './marble-block.component.html',
  styleUrls: ['./marble-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarbleBlockComponent implements OnInit, OnChanges {
  @Input() inputs: Observable<any>[] = [];
  @Input() outputs: Observable<any>[] = [];
  @Input() transport: boolean = false;

  public start$: Subject<void> | null = null;
  public stop$: Subject<void> | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    [this.start$, this.stop$] = changes['transport'].currentValue
      ? [new Subject<void>(), new Subject<void>()]
      : [null, null];
  }

  public start(): void {
    if (this.start$) this.start$.next();
  }

  public stop(): void {
    if (this.stop$) this.stop$.next();
  }
}
