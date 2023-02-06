import { Component, Input } from '@angular/core';
import { MarbleData, MarbleTransport } from '@core/models/types/marble';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-classic-marble-block',
  templateUrl: './classic-marble-block.component.html',
  styleUrls: ['./classic-marble-block.component.scss'],
})
export class ClassicMarbleBlockComponent {
  @Input() data$!: Observable<MarbleData>;
  @Input() transport: MarbleTransport = { start: null, stop: null };
}
