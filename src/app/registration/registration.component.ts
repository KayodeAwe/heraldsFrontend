import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AdditionalDetailsService } from '../services/additional-details.service';
import { RegistrationService } from '../services/registration.service';

import { SquadCategoryService } from '../services/squad-category.service';


interface SquadCategory{
  squadCode : string;
  description : string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm = this.fb.group({
    firstName : ['', [Validators.required, Validators.minLength(3)]],
    lastName : '',
    email : ['', [Validators.required]],
    squad : '',
    phoneNumber : '08032XXXXXX',
    churchUnit : '',
    passWord : ['', [Validators.required, Validators.minLength(5)]],
  })

  public errorMsg;

  public SquadCategories$ = [];
  public ChurchUnitCategories = [];
  constructor( private fb: FormBuilder, private squad : SquadCategoryService, private _registrationService : RegistrationService, private _router : Router, private _otherDetails : AdditionalDetailsService) { }

  ngOnInit(): void {
    this.squad.getSquad()
      .subscribe(data => this.SquadCategories$ = data,
        error => this.errorMsg = error);

    console.log( this.SquadCategories$ )

    this.squad.getUnit()
      .subscribe(data => this.ChurchUnitCategories = data,
        error => this.errorMsg = error);
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


  onSubmit(){
    console.log(this.registrationForm.value.firstName);


    this._registrationService.register(this.registrationForm.value)
        .subscribe(
          response => {
            console.log('Success!', response),
            localStorage.setItem('token', response.token)
            localStorage.setItem('userDetails', response.registeredNewUser.email);


            let fullName = this.registrationForm.value.firstName + "   " + this.registrationForm.value.lastName;
            let squad = this.registrationForm.value.squad;
            let phoneNumber = this.registrationForm.value.phoneNumber;
            let email = this.registrationForm.value.email;

            let myFullDetails = {
              Name : fullName.toLocaleUpperCase(),
              Squad: squad.toLocaleUpperCase(),
              PhoneNumber: phoneNumber,
              Email: email
            }

            this._otherDetails.profileDetails(myFullDetails)
                .subscribe(
                  response => {
                    console.log('Others', response)
                  },
                  error => console.error('Error', error)
                );



            this._router.navigate(['/membersDashbord'])
          },

          error => console.error('Error', error)
        );
  }


}
