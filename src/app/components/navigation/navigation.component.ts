import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OperatorList } from 'src/app/models/common.types';
import { operatorsNames } from 'src/app/models/constants/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public operatorList: OperatorList = operatorsNames;
  public filterInput = new FormControl('');
  public filterPhrase: string = '';
  public operatorGroupNames: Array<keyof OperatorList> = Object.keys(
    this.operatorList
  ) as Array<keyof OperatorList>;
  public TMPlist = [
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
  ];

  constructor(private router: Router) {}

  public navigate(route: string): void {
    this.router.navigate([route]);
  }
}
