import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-transport-buttons',
  templateUrl: './transport-buttons.component.html',
  styleUrls: ['./transport-buttons.component.scss'],
})
export class TransportButtonsComponent {
  @Output() public requestStart = new EventEmitter<void>();
  @Output() public requestStop = new EventEmitter<void>();
  public isStarted = false;

  public start(): void {
    this.isStarted = true;
    this.requestStart.emit();
  }

  public stop(): void {
    this.isStarted = false;
    this.requestStop.emit();
  }
}
