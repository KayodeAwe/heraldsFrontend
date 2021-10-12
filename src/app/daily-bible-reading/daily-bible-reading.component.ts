import { Component, OnInit } from '@angular/core';
import { BibleServiceService } from '../services/bible-service.service';

@Component({
  selector: 'app-daily-bible-reading',
  templateUrl: './daily-bible-reading.component.html',
  styleUrls: ['./daily-bible-reading.component.css']
})
export class DailyBibleReadingComponent implements OnInit {

  Bbooks : Array<any> = ['Genesis', 'Exodus', 'Leviticus', 'Numbers',];
  index = 0;

  Cchapter:number = 0;

  constructor(private _bibleService : BibleServiceService) { }

  today: number = Date.now();



  indexC(count:number){

   // if(count == 0){
      //this.Cchapter = count;
    //}else {
      this.Cchapter = (count + 1);
    //}

    console.log(this.Cchapter);
    return this.Cchapter ;
  }

  ngOnInit(): void {
  }

  public pageContent = {
    header:{
      title: 'BIBLE READING',
      subtitle: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-DailyBibleReading",
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
