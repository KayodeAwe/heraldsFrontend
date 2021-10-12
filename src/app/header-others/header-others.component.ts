import { Component, OnInit, Input } from '@angular/core';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-header-others',
  templateUrl: './header-others.component.html',
  styleUrls: ['./header-others.component.css']
})
export class HeaderOthersComponent implements OnInit {

  @Input() content:any;

  constructor( private _authService : RegistrationService) { }

  ngOnInit(): void {
  }
 //vidA = true;

}
