import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  hostname?: string;
  owner?: string = 'Miguel Vaquero';
  ownerMail?: string = 'miguelvaquero234@gmail.com';

  constructor( ) { }
  
  ngAfterViewInit() {
    this.hostname = window.location.host;
  }

}
