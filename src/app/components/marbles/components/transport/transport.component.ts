import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent {
  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
}
