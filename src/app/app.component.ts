import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service in Angular 12';
  Users: any;
  constructor(private userdata: UserdataService) {
    console.warn(userdata.Users());
    this.Users = userdata.Users();
  }

}
