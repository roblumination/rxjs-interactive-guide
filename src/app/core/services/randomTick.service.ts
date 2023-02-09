import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomTickService {
  public randomTick1$ = new Subject<void>();
  public randomTick2$ = new Subject<void>();
  public randomTick3$ = new Subject<void>();

  private readonly DELAY_MIN = 1000;
  private readonly DELAY_MAX = 3000;
  private isGenerationStoped: boolean = false;

  constructor() {
    this.startTickGeneration();
  }

  private startTickGeneration(): void {
    [this.randomTick1$, this.randomTick2$, this.randomTick3$].forEach(
      (tick$) => {
        this.makeRandomDelayStep(tick$);
      }
    );
  }

  private getRandomDelay(): number {
    const randomRange = ~~(Math.random() * (this.DELAY_MAX - this.DELAY_MIN));
    return randomRange + this.DELAY_MIN;
  }

  private makeRandomDelayStep(obs$: Subject<void>): void {
    setTimeout(() => {
      obs$.next();
      if (!this.isGenerationStoped) this.makeRandomDelayStep(obs$);
    }, this.getRandomDelay());
  }
}
