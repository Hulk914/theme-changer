import { Theme, theme1, theme2, theme3 } from './Theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = theme1;
  private availableThemes: Theme[] = [theme1, theme2, theme3];
  private activeIndex: number = 0;

  changeActiveTheme(): void {
    this.activeIndex = (this.activeIndex + 1) % this.availableThemes.length;
    this.active = this.availableThemes[this.activeIndex];

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
