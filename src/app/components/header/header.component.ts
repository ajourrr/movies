import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change['isDarkMode'].currentValue)
    
    
    // localStorage.setItem('isDarkMode', this.isDarkMode.toString())
    // console.log()
    // this.isDarkMode = localStorage.getItem('isDarkMode');
  }

}
