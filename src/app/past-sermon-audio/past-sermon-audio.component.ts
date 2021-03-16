import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-sermon-audio',
  templateUrl: './past-sermon-audio.component.html',
  styleUrls: ['./past-sermon-audio.component.css']
})
export class PastSermonAudioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public pageContent = {
    header:{
      title: 'SERMONS',
      subtitle: 'Did you miss a Sermon? Find previous Sermons here',
      logOutbtn: '',
      img_src: "../assets/img/past_sermon_video_B.png",
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
