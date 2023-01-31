import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @HostBinding('class.hidden') isHidden: boolean = true;

  constructor(private navService: NavigationService) {}

  ngOnInit(): void {
    this.navService.setNavigatiponInstance(this);
  }

  public open(): void {
    this.isHidden = false;
  }

  public close(): void {
    this.isHidden = true;
  }
}
