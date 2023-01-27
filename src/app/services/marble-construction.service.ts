import { Injectable } from '@angular/core';
import { MarbleColor, MarbleData } from '@core/models/common.types';
import { colorPalette } from '@core/models/constants/colors';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarbleConstructionService {
  private colorIndexHistory = [];
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
    const avaliableColors = Object.values(colorPalette);
    const range = avaliableColors.length - 1;
    const index = ~~(Math.random() * range);
    return avaliableColors[index];
  }
}
