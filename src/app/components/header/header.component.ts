import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationService } from '../navigation/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private navService: NavigationService) {}

  public openNavigationMenu(): void {
    this.navService.openNavigation();
  }
}
