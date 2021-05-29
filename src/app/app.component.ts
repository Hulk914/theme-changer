import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}

  changeTheme() {
    this.themeService.changeActiveTheme();
  }
}
