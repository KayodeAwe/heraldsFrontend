import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AdditionalDetailsService } from '../services/additional-details.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-members-dashbord',
  templateUrl: './members-dashbord.component.html',
  styleUrls: ['./members-dashbord.component.css']
})
export class MembersDashbordComponent implements OnInit {

  heraldName = "";

  constructor( private fb: FormBuilder, private _accessRegisteredUser : RegistrationService, private _otherDetails : AdditionalDetailsService){
    //this.getUsersDetail()
  }

  details = this._accessRegisteredUser.getUserDetails()

  userMail= {
    Email: this.details,
  }

  imageUrl = "";

  getUsersDetail(){

    //console.log('get details', this.userMail)

    this._otherDetails.getInfoUsers(this.userMail)
          .subscribe(
            res => {
              //console.log("Other Details", res.user)

              let str = res.user.Name;
              //this.heraldName = res.user.Name;
              let substrings = str.split(' ');
              //console.log(substrings);
              this.heraldName = substrings[0];

              this.profileForm.patchValue({
                _id : res.user._id,
                Name :  res.user.Name,
                Squad :  res.user.Squad,
                PhoneNumber :  res.user.PhoneNumber,
                Email :  res.user.Email,
                Circuit : res.user.Circuit,
                SatelliteCommunity : res.user.SatelliteCommunity,
                DOB : res.user.DOB,
                avatar : res.user.avatar
              })
              this.imageUrl = this.profileForm.value.avatar;
            },
            err => console.log(err)
          )

    //  this._accessRegisteredUser.getInfoUsers(this.userMail)
    //      .subscribe(
    //        res => {
    //          console.log('Na me be this', res.user.Name);

    //          let fullName = res.user.firstName + "   " + res.user.lastName;
    //          let squad = res.user.squad;
    //          let phoneNumber = res.user.phoneNumber;
    //          let email = res.user.email;

    //          let myFullDetails = {

    //          }

              //this._otherDetails.profileDetails()


    //        },
    //        err => console.log(err)
    //      )


    }


      profileForm = this.fb.group({
        _id  : '',
        Name :  '',
        Squad  : '',
        PhoneNumber : ['',Validators.minLength(11)],
        Circuit : '',
        SatelliteCommunity : '',
        DOB : '',
        Email : ['', [Validators.required]],
        avatar: ''

      })


      upload(event:any){
          if(event.target.files && event.target.files[0]){

            const file = event.target.files[0];
            console.log(file);

            const formdata = new FormData()
            formdata.append("avatar", file)
            formdata.append("_id", this.profileForm.value._id)
            formdata.append("Name", this.profileForm.value.Name)
            formdata.append("Squad", this.profileForm.value.Squad)
            formdata.append("PhoneNumber", this.profileForm.value.PhoneNumber)
            formdata.append("Circuit", this.profileForm.value.Circuit)
            formdata.append("SatelliteCommunity", this.profileForm.value.SatelliteCommunity)
            formdata.append("DOB", this.profileForm.value.DOB)
            formdata.append("Email", this.profileForm.value.Email)

            this._otherDetails.updateUserInfo(formdata)
              .subscribe(
                    res => {
                      console.log('Success!', res)
                      this.getUsersDetail()
                    }
              )


            }

      }

    sendUpdate(){
      this._otherDetails.updateUserInfo(this.profileForm.value)
          .subscribe(
            res => {
              console.log('Success!', res)
            }
          )
    }


    toggleValue = true;

    tgle = true;

    toggleMethod(){
      this.tgle =false;
    }

    saveUpdate(){
      this.tgle = true;
    }

  ngOnInit(): void {
    this.getUsersDetail()
    //console.log('members dashboard', this.userMail)
  }


  public pageContent = {
    header:{
      title: 'MEMBERS DASHBOARD',
      subtitle: 'Members of the Household of Faith',
      logOutbtn: 'logout',
      img_src: "testheader-bg-overlay-MembersDashboard",
      audiobtn: '',
      videobtn: ''
    },
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
