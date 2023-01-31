import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { OperatorList } from 'src/app/models/common.types';
import { operatorsNames } from 'src/app/models/constants/operators';
import { NavigationService } from '../../services/navigation.service';

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

  constructor(private navService: NavigationService, private router: Router) {}

  ngOnInit(): void {
    this.navService
      .getInputObservable()
      .pipe(take(1))
      .subscribe((obs) => {
        this.searchQuery$ = obs;
        obs.subscribe(console.log);
      });
  }

  public navigate(route: string): void {
    this.router.navigate([route]);
  }

  public close(): void {
    this.navService.closeNavigation();
  }
}
