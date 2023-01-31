import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  public filterInput = new FormControl('');

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navService.linkInputObservable(this.filterInput.valueChanges);
  }

  close(): void {
    this.navService.closeNavigation();
  }
}
