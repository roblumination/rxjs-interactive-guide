import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MarbleColor, MarbleData } from '../models/common.types';
import { colorPalette, MarbleColorNamesList } from '../models/constants/colors';

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
    const avaliableColors: MarbleColor[] = Object.values(
      MarbleColorNamesList
    ) as MarbleColor[];
    const range: number = avaliableColors.length - 1;
    const index: number = ~~(Math.random() * range);
    return avaliableColors[index];
  }
}
