import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MarbleColor, MarbleData } from '../models/common.types';
import { colorPalette, marbleColorNamesList } from '../models/constants/colors';

@Injectable({
  providedIn: 'root',
})
export class MarbleConstructionService {
  private avaliableColorNames = marbleColorNamesList;
  private colorHistory: MarbleColor[] = [];
  private readonly COLOR_HISTORY_LIMIT: number = 5;
  constructor() {}

  public convertToColoredObservable(
    observable$: Observable<number | string>,
    color: MarbleColor | 'random'
  ): Observable<MarbleData> {
    return observable$.pipe(
      map((value) => ({
        value: value.toString(),
        color: color == 'random' ? this.getRandomColor() : color,
      }))
    );
  }

  private getRandomColor(): MarbleColor {
    const newColor = this.avaliableColorNames[this.getRandomColorIndex()];
    if (this.colorHistory.includes(newColor)) return this.getRandomColor();
    this.storeNewColor(newColor);
    return newColor;
  }

  private getRandomColorIndex(): number {
    const range: number = this.avaliableColorNames.length - 1;
    const index: number = ~~(Math.random() * range);
    return index;
  }

  private storeNewColor(color: MarbleColor): void {
    if (this.colorHistory.length > this.COLOR_HISTORY_LIMIT)
      this.colorHistory.shift();
    this.colorHistory.push(color);
  }
}
