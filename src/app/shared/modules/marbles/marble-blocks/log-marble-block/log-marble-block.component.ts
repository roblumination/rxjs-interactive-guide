import { Component } from '@angular/core';
import { popUpAnimation } from '@core/animations/common';
import { AbstractMarbleBlock } from '../marble-block';

@Component({
  selector: 'app-log-marble-block',
  templateUrl: './log-marble-block.component.html',
  styleUrls: ['./log-marble-block.component.scss'],
  animations: [popUpAnimation],
})
export class LogMarbleBlockComponent extends AbstractMarbleBlock {}
