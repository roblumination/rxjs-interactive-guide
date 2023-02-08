import { Component } from '@angular/core';
import { OperatorNavigationService } from './components/operator-navigation/services/operator-navigation.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.scss'],
})
export class OperatorListComponent {
  constructor(private navService: OperatorNavigationService) {}

  public open() {
    this.navService.openNavigation();
  }
}
