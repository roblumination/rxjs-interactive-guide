import { Component } from '@angular/core';
import { MarbleRenderer } from '../marble-renderer/marble-renderer.component';

@Component({
  selector: 'app-marble-strip-renderer',
  templateUrl: './marble-strip-renderer.component.html',
  styleUrls: ['./marble-strip-renderer.component.scss'],
})
export class MarbleStripRendererComponent extends MarbleRenderer {}
