import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-transport-buttons',
  imports: [NgIf],
  templateUrl: './transport-buttons.component.html',
  styleUrls: ['./transport-buttons.component.scss'],
})
export class TransportButtonsComponent {
  @Output() public requestStart = new EventEmitter<void>();
  @Output() public requestStop = new EventEmitter<void>();
  @Input() public stopButton: boolean = true;
  public isStarted = false;

  public start(): void {
    if (this.isStarted) return;
    this.requestStart.emit();
    if (!this.stopButton) return;
    this.isStarted = true;
  }

  public stop(): void {
    if (!this.isStarted) return;
    this.requestStop.emit();
    if (!this.stopButton) return;
    this.isStarted = false;
  }
}
