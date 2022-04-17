import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkMode: boolean|string = false;
  toggleButtonValue = '';
  
  ngOnInit(){
    if('darkMode' in localStorage){
      this.isDarkMode =  JSON.parse(localStorage['darkMode'])
    }
    if('displayState' in localStorage){
      this.toggleButtonValue =  localStorage['displayState'];
    }
  }

  changeTheme(){
    this.isDarkMode = !this.isDarkMode
    localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode))
    console.log(localStorage['darkMode'])
  }

  changeDisplayState(state:string){
    localStorage.setItem('displayState', state)
  }
}
