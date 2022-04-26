import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewDisplayService } from './services/viewDisplay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode: boolean | string = false;
  constructor(public viewDisplayS: ViewDisplayService) {}

  ngOnInit() {
    if ('darkMode' in localStorage) {
      this.isDarkMode = JSON.parse(localStorage['darkMode']);
    }
    if ('displayState' in localStorage) {
      this.viewDisplayS.toggleButtonValue = localStorage['displayState'];
    }
  }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode));
  }

  changeDisplayState(state: string) {
    localStorage.setItem('displayState', state);
  }
}
