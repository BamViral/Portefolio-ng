import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(private theme: ThemeService) { }
  currentTheme:string = '';
  ngOnInit(): void {
    this.currentTheme = this.theme.current;
  }

  public switchTheme(): void {
    if (this.theme.current === 'light') {
        this.theme.current = 'dark';
        this.currentTheme ='dark';
    } else {
        this.theme.current = 'light';
        this.currentTheme = 'light';
    }
  }

}
