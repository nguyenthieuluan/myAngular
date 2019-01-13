import { Component } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {


  constructor(public auth: AuthService) { }

}
