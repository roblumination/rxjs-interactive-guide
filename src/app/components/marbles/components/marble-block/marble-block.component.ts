import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-marble-block',
  templateUrl: './marble-block.component.html',
  styleUrls: ['./marble-block.component.scss'],
})
export class MarbleBlockComponent implements OnInit {
  @Input() inputs: Observable<any>[] = [];
  @Input() text: string = '';
  @Input() outputs: Observable<any>[] = [];

  public start$ = new Subject<void>();
  public stop$ = new Subject<void>();

  constructor() {}

  ngOnInit(): void {}

  public start(): void {
    this.start$.next();
  }

  public stop(): void {
    this.stop$.next();
  }
}
