import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { NavigationComponent } from '../components/navigation/navigation.component';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private setObservable$ = new ReplaySubject<Observable<any>>(1);
  private navComponent!: NavigationComponent;

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

  public setNavigatiponInstance(instance: NavigationComponent): void {
    this.navComponent = instance;
  }
}
