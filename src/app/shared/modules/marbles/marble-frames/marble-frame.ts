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
  @Input() public stopButton: boolean = true;
  @Input() public set showTransport(value: boolean) {
    if (!value) setTimeout(() => this.start());
    this._showTransport = value;
  }
  get showTransport(): boolean {
    return this._showTransport;
  }

  public get transport(): MarbleTransport {
    return {
      start: this.start$.asObservable(),
      stop: this.stop$.asObservable(),
    };
  }

  private start$ = new Subject<void>();
  private stop$ = new Subject<void>();
  private _showTransport: boolean = true;

  public start(): void {
    this.start$.next();
  }

  public stop(): void {
    this.stop$.next();
  }
}
