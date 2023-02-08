import { Component, Input } from '@angular/core';
import { MarbleTransport } from '@core/models/types/marble';
import { OperatorSource } from '@core/models/types/operators';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class MarbleAbstractFrame {
  @Input() public data: OperatorSource = {
    inputs: [],
    outputs: [],
  };
  @Input() public showTransport: boolean = true;
  @Input() public stopButton: boolean = true;
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
