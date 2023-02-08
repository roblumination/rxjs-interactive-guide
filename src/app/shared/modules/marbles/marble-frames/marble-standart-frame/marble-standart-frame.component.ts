import { Component, Input } from '@angular/core';
import { MarbleAbstractFrame } from '../marble-frame';

@Component({
  selector: 'app-marble-standart-frame',
  templateUrl: './marble-standart-frame.component.html',
  styleUrls: ['./marble-standart-frame.component.scss'],
})
export class MarbleStandartFrameComponent extends MarbleAbstractFrame {
  @Input() public logOnly: boolean = false;
}
