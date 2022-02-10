import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Users: any;
  constructor(private userdata: UserdataService) {
    console.warn(userdata.Users());
    this.Users = userdata.Users();
  }

  ngOnInit(): void {
  }

}
