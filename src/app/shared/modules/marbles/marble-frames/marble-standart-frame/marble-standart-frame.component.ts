import { Component, Input } from '@angular/core';
import { MarbleData, MarbleTransport } from '@core/models/types/marble';
import { OperatorSource } from '@core/models/types/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-marble-standart-frame',
  templateUrl: './marble-standart-frame.component.html',
  styleUrls: ['./marble-standart-frame.component.scss'],
})
export class MarbleStandartFrameComponent {
  @Input() public data: OperatorSource = {
    inputs: [],
    outputs: [],
  };
  public get transport(): MarbleTransport {
    return {
      start: this.start$.asObservable(),
      stop: this.stop$.asObservable(),
    };
  }

  private start$ = new Subject<void>();
  private stop$ = new Subject<void>();

  public start(): void {
    this.start$.next();
  }

  public stop(): void {
    this.stop$.next();
  }
}
