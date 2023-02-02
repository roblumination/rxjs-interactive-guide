import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [DatePipe],
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnDestroy {
  public currentTime = new Date();
  private interval: ReturnType<typeof setInterval> = setInterval(() => {
    this.currentTime = new Date();
  }, 200);

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
