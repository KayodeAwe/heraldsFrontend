import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-dashbord',
  templateUrl: './members-dashbord.component.html',
  styleUrls: ['./members-dashbord.component.css']
})
export class MembersDashbordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pageContent = {
    header:{
      title: 'MEMBERS DASHBOARD',
      subtitle: 'Members of the Household of Faith',
      logOutbtn: 'logout',
      img_src: "../assets/img/Members_dashboard_B.png",
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
