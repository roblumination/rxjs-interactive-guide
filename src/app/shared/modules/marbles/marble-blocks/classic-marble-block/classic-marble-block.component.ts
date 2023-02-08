import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { popUpAnimation } from '@core/animations/common';
import { MarbleData, MarbleTransport } from '@core/models/types/marble';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { AbstractMarbleBlock } from '../marble-block';

@Component({
  selector: 'app-classic-marble-block',
  templateUrl: './classic-marble-block.component.html',
  styleUrls: ['./classic-marble-block.component.scss'],
  animations: [popUpAnimation],
})
export class ClassicMarbleBlockComponent extends AbstractMarbleBlock {
  @Input() public logOnly: boolean = false;
}
