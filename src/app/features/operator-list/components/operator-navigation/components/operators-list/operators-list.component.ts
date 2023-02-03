import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperatorList } from '@core/models/types/operators';
import { Observable, switchMap, take } from 'rxjs';
import { operatorsNames } from 'src/app/core/models/constants/operators';
import { OperatorNavigationService } from '../../services/operator-navigation.service';

@Component({
  selector: 'app-operators-list',
  templateUrl: './operators-list.component.html',
  styleUrls: ['./operators-list.component.scss'],
})
export class OperatorsListComponent implements OnInit {
  public operatorList: OperatorList = operatorsNames;
  public operatorGroupNames: Array<keyof OperatorList> = Object.keys(
    this.operatorList
  ) as Array<keyof OperatorList>;
  public searchQuery$!: Observable<any>;

  constructor(
    private navService: OperatorNavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navService
      .getInputObservable()
      .pipe(take(1))
      .subscribe((obs) => {
        this.searchQuery$ = obs;
        obs.subscribe(console.log);
      });
  }

  public navigate(operatorName: string, groupName: string): void {
    const finalRoute = ['/list', groupName, operatorName].join('/');
    this.router.navigate([finalRoute]);
    this.close();
  }

  public close(): void {
    this.navService.closeNavigation();
  }
}
