import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationService } from '../services/registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private fb : FormBuilder, private _loginRegister: RegistrationService, private _router : Router) { }

  loginForm = this.fb.group({
    email : ['',[Validators.required]],
    passWord : ['',[Validators.required, Validators.minLength(5)]]
  })


  loginSubmit(){
    //console.log(this.loginForm.value);
    this._loginRegister.loginUser(this.loginForm.value)
        .subscribe(
          res => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('userDetails', res.user.email);
            this._router.navigate(['/membersDashbord'])
          },
            err => console.log(err)
        )
  }

  ngOnInit(): void {
  }

  public pageContent = {

    subfooter:{
      title: 'ONLINE SERVICE TIMES',
      subtitle: 'Join us online during the service times listed below.',
      worshipService_main: 'SUNDAY',
      worshipService_span: ':  8:30AM - 10:00AM',
      weeklyService_main: 'WEDNESDAY',
      weeklyService_span: ':  5:30PM - 7:00PM',
      heraldsLiveLink: 'heralds/media/live',
      mixlrLink: '../../assets/img/Mixlr_logo_link.svg',
      facebookLiveLink: '../../assets/img/facebook_link.svg',
      youtubeLink: '../../assets/img/youtube_icon.svg',
      pastorImg_link: '../../assets/img/Online_Service_times_B.png'
    }
  };

}
