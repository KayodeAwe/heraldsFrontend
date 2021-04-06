import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-sermon-video',
  templateUrl: './past-sermon-video.component.html',
  styleUrls: ['./past-sermon-video.component.css']
})
export class PastSermonVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pageContent = {
    header:{
      title: 'SERMONS',
      subtitle: 'Did you miss a Sermon? Find previous Sermons here',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-pastSermonVideo",
      audiobtn: 'Audio',
      videobtn: 'Video'
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
