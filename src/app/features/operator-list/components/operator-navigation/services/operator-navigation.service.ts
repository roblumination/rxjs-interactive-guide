import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { OperatorNavigationComponent } from '../operator-navigation.component';

@Injectable({
  providedIn: 'root',
})
export class OperatorNavigationService {
  private setObservable$ = new ReplaySubject<Observable<any>>(1);
  private navComponent!: OperatorNavigationComponent;

  constructor() {}

  public openNavigation() {
    if (this.navComponent) this.navComponent.open();
  }

  public closeNavigation() {
    if (this.navComponent) this.navComponent.close();
  }

  public linkInputObservable(obs$: Observable<any>): void {
    this.setObservable$.next(obs$);
  }

  public getInputObservable(): Observable<Observable<any>> {
    return this.setObservable$;
  }

  public setNavigationInstance(instance: OperatorNavigationComponent): void {
    this.navComponent = instance;
  }
}
