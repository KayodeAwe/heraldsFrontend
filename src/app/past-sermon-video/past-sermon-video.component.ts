import { Component, OnInit } from '@angular/core';
import { Video } from '../interfaces/video';
import { VideoService } from '../services/video.service';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-past-sermon-video',
  templateUrl: './past-sermon-video.component.html',
  styleUrls: ['./past-sermon-video.component.css']
})
export class PastSermonVideoComponent implements OnInit {

  videos : Array <Video>;

  /**[
    {"_id":"1", "topic" : "God's Eternal Plan 1", "Preacher" : "Pastor Christosin 1", "Series" : "Doctrine 1", "Date_" : "1/2/2021", "url" : "https://www.youtube.com/embed/Zzz8Pf82DTI?list=RDwrnoBMHUg1s", "Summary" : "Doctrine of Sin 1"},
    {"_id":"2", "topic" : "God's Eternal Plan 2", "Preacher" : "Pastor Christosin 2", "Series" : "Doctrine 2", "Date_" : "2/2/2021", "url" : "https://www.youtube.com/embed/Yf60JcDia1E", "Summary" : "Doctrine of Sin 2"},
    {"_id":"3", "topic" : "God's Eternal Plan 3", "Preacher" : "Pastor Christosin 3", "Series" : "Doctrine 3", "Date_" : "3/2/2021", "url" : "https://www.youtube.com/embed/rT3zu3rN_sU", "Summary" : "Doctrine of Sin 3"},
    {"_id":"4", "topic" : "God's Eternal Plan 4", "Preacher" : "Pastor Christosin 4", "Series" : "Doctrine 4", "Date_" : "4/2/2021", "url" : "https://www.youtube.com/embed/ksJTns7Kl90", "Summary" : "Doctrine of Sin 4"},
    {"_id":"5", "topic" : "God's Eternal Plan 5", "Preacher" : "Pastor Christosin 5", "Series" : "Doctrine 5", "Date_" : "5/2/2021", "url" : "https://www.youtube.com/embed/l3vnDvVunLE", "Summary" : "Doctrine of Sin 5"},
    {"_id":"6", "topic" : "God's Eternal Plan 6", "Preacher" : "Pastor Christosin 6", "Series" : "Doctrine 6", "Date_" : "6/2/2021", "url" : "https://www.youtube.com/embed/4pqml82RR8c", "Summary" : "Doctrine of Sin 6"},
  ];

  **/

  selectedVideo : Video;
  hidenewVideo : boolean = true;

  onSelectVideo(video : any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
    this.hidenewVideo = true;
  }

  constructor(private fb: FormBuilder, private _videoService : VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
      .subscribe(
        resVideoData => this.videos = resVideoData.reverse()
        );

  }


newVideoForm = this.fb.group({
  topic :  '',
  Preacher  :  '',
  //PhoneNumber : ['',Validators.minLength(11)],
  Series :  '',
  Date_ :  '',
  url :  '',
  Summary :  '',
  thumbnail : ''
})


imageSrc : string;

file: any;

upload(event:any){
  if(event.target.files && event.target.files[0]){
    this.file = event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result.toString();
    };
    reader.readAsDataURL(this.file);
  }

}





  onSubmitAddVideo(){

    const formdata = new FormData()

    formdata.append("thumbnail", this.file)
    formdata.append("topic", this.newVideoForm.value.topic)
    formdata.append("Preacher", this.newVideoForm.value.Preacher)
    formdata.append("Series", this.newVideoForm.value.Series)
    formdata.append("Date_", this.newVideoForm.value.Date_)
    formdata.append("url", this.newVideoForm.value.url)
    formdata.append("Summary", this.newVideoForm.value.Summary)


    this._videoService.addVideo(formdata)
          .subscribe(resNewVideo => {
            this.videos.push(resNewVideo);
            this.hidenewVideo = true;
            this.selectedVideo = resNewVideo;
          })

    this.newVideoForm.reset();
    this.file = null;
    this.imageSrc = null;

  }

  onUpdateVideoEvent(video : any){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo);
        this.selectedVideo = null;
  }

  onDeleteVideoEvent(video : any){
    let videoArray = this.videos;
    this._videoService.deleteVideo(video)
      .subscribe(resDeletedVideo =>{
        for (let i = 0; i < videoArray.length; i++)
        {
          if (videoArray[i]._id === video._id)
          {
            videoArray.splice(i, 1);
          }
        }
      })
      this.selectedVideo = null;
  };

  newVideo(){
    this.hidenewVideo = false;
  }

  onSearchedVideo(messageName:string){
    let searchUser = [];
    if (messageName == ""){
      this.ngOnInit();
    } else{
      this._videoService.getVideos().subscribe(files =>{
        searchUser = files;
        this.videos = searchUser.filter(res =>{
          return res.topic.toLocaleLowerCase().match(messageName.toLocaleLowerCase())
        })
      })
    }
  }


  public pageContent = {
    header:{
      title: 'SERMONS',
      subtitle: 'Did you miss a Sermon? Find previous Sermons here',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-pastSermonVideo",
      audiobtn: 'Audio',
      videobtn: 'Video',
      vidA : false
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
