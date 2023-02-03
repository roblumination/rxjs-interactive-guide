import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OperatorNavigationService } from '../../services/operator-navigation.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  public filterInput = new FormControl('');

  constructor(private navService: OperatorNavigationService) {}

  ngOnInit(): void {
    this.navService.linkInputObservable(this.filterInput.valueChanges);
  }

  close(): void {
    this.navService.closeNavigation();
  }
}
