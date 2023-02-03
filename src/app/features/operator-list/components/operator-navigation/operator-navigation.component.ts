import { Component, HostBinding, OnInit } from '@angular/core';
import { OperatorNavigationService } from './services/operator-navigation.service';

@Component({
  selector: 'app-operator-navigation',
  templateUrl: './operator-navigation.component.html',
  styleUrls: ['./operator-navigation.component.scss'],
})
export class OperatorNavigationComponent implements OnInit {
  @HostBinding('class.hidden') isHidden: boolean = true;

  constructor(private navService: OperatorNavigationService) {}

  ngOnInit(): void {
    this.navService.setNavigationInstance(this);
  }

  public open(): void {
    this.isHidden = false;
  }

  public close(): void {
    this.isHidden = true;
  }
}
