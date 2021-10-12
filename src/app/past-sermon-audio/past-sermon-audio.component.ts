import { Component, OnInit } from '@angular/core';
//import { StreamState } from '../interfaces/stream-state';
import { AudioService } from '../services/audio.service';
//import { CloudService } from '../services/cloud.service';
import { FormBuilder, Validators} from '@angular/forms';

import { AudioIt } from '../interfaces/audio-it';

@Component({
  selector: 'app-past-sermon-audio',
  templateUrl: './past-sermon-audio.component.html',
  styleUrls: ['./past-sermon-audio.component.css']
})
export class PastSermonAudioComponent implements OnInit {

  constructor(private fb: FormBuilder, private audioService_: AudioService ){}

  ngOnInit(){
    this.audioService_.getFiles().subscribe(files =>{
      this.All_song = files.reverse();
    })

    /**New Hide
    this.load_track(this.index_no);
    */

 }

  ngOnDestroy() {
    /**New Hide
    if (this.timer1) {
      clearInterval(this.timer1);
    }
    this.pausesong()
    */
  }



// posting new Audio
hidenewAudio : boolean = true ;

onSubmitAddAudio( ){

  const formdata = new FormData()

  formdata.append("img", this.file)
  formdata.append("name", this.newAudioForm.value.name)
  formdata.append("path", this.newAudioForm.value.path)
  formdata.append("singer", this.newAudioForm.value.singer)


  this.audioService_.addAudio(formdata)
        .subscribe(resNewAudio => {
          this.All_song.push(resNewAudio);
          this.hidenewAudio = true;
          this.selectedAudio = resNewAudio;
        });

  this.newAudioForm.reset();
  this.file = null;
  this.imageSrc = null;
}


newAudioForm = this.fb.group({
  name :  '',
  path  :  '',
  //PhoneNumber : ['',Validators.minLength(11)],
  img :  '',
  singer :  'Pastor Christosin Olalere',
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

newAudio(){
  this.hidenewAudio = false;
}

//Implementing Next click
nextAudio : AudioIt;

onNextClick(clickedIndex:number){

	if(clickedIndex <= (this.All_song.length) - 1 ){

    this.nextAudio = this.All_song[clickedIndex];
    this.onSelectSong(this.nextAudio);

	}else{
		clickedIndex = 0;
    this.nextAudio = this.All_song[clickedIndex];
    this.onSelectSong(this.nextAudio);

	}


};

seeAll : boolean = false;

//toggle all audio

toggle_All_audios(){
 this.seeAll = !this.seeAll;
}

//update Audio Track

onUpdateAudioEvent(audio : any){
  this.audioService_.updateAudio(audio)
        .subscribe(resUpdatedAudio => audio = resUpdatedAudio);
        this.selectedAudio = null;
};

onDeleteAudioEvent( audio : any){
  let audioArray = this.All_song;
  this.audioService_.deleteAudio(audio)
        .subscribe(resDeletedAudio => {
          for (let i = 0 ; i < audioArray.length ; i++)
          {
            if(audioArray[i]._id === audio._id)
            {
              audioArray.splice(i,1);
            }
          }
        })

        this.selectedAudio = null;
}


  // Moving Song between components

  selectedAudio : AudioIt;

  index : number;



  onSelectSong(Aud : AudioIt){

    this.selectedAudio = Aud;
    //console.log(this.selectedAudio.name)
    //console.log(this.All_song.indexOf(Aud.path));
    this.index = this.All_song.findIndex(item => item.name == this.selectedAudio.name);
    //console.log("index", this.index)

    if(this.seeAll == true){
      this.seeAll = !this.seeAll;
    }

  }

  onSearched(messageName:string){
    let searchUser = [];
    if (messageName == ""){
      this.ngOnInit();
    } else{
      this.audioService_.getFiles().subscribe(files =>{
        searchUser = files;
        this.All_song = searchUser.filter(res =>{
          return res.name.toLocaleLowerCase().match(messageName.toLocaleLowerCase())
        })
      })
    }
  }


  //
/**New Hide
  previous_ = '<i class="fa fa-step-backward" aria-hidden="true"></i>';

  play_ = '<i class="fa fa-play" aria-hidden="true"></i>';

  next_ = '<i class="fa fa-step-forward" aria-hidden="true"></i>';

  title1 = "title.mp3";

  artist = "Artist name";

  volume_ : number = 90;
  volume_show : number = 90;

  total:number = 5 ;
  present: number = 1;

  slider:number = 0;

  track_image:string = "";

  auto_play : boolean = false;

timer1:any;
autoplay = 0;

index_no = 0;
Playing_song = false;

*/

//create a audio Element

/**New Hide

private track = new Audio();

myimage = "";
*/

//All songs list

All_song : AudioIt[];



// All functions


// function load the track
/**New Hide
load_track(index_no:number){

	clearInterval(this.timer1);
	this.reset_slider();


	this.track.src = this.All_song[index_no].path;
	this.title1 = this.All_song[index_no].name;
	this.track_image = this.All_song[index_no].img;
  this.artist = this.All_song[index_no].singer;
  this.track.load();

  this.timer1 = setInterval(() => {
    this.range_slider();
  }, 1000);

	//this.timer1 = setInterval( this.range_slider(), 1000);
	this.total = this.All_song.length;
	this.present = index_no + 1;

}
*/


//mute sound function
/**New Hide
  mute_sound(){
	  this.track.volume = 0;
	  this.volume_ = 0;
	  this.volume_show = 0;
  }
*/


// checking.. the song is playing or not
/**New Hide
justplay(){

 	if(this.Playing_song==false){

 		  this.playsong();

 	  }else{
 		this.pausesong();
 	}
}
*/


// reset song slider
/**New Hide
 reset_slider(){
 	this.slider = 0;
 }
*/


// play song
/**New Hide
playsong(){
  this.track.play();
  this.Playing_song = true;
  this.play_ = '<i class="fa fa-pause" aria-hidden="true"></i>';
}
*/

//pause song
/**New Hide
pausesong(){
	this.track.pause();
	this.Playing_song = false;
	this.play_ = '<i class="fa fa-play" aria-hidden="true"></i>';
}
*/

// next song
/**New Hide
next_song(){

	if(this.index_no < this.All_song.length - 1){
		this.index_no += 1;
		this.load_track(this.index_no);
		this.playsong();
	}else{
		this.index_no = 0;
		this.load_track(this.index_no);
		this.playsong();

	}
}
*/


// previous song

/**New Hide
previous_song(){
	if(this.index_no > 0){
		this.index_no -= 1;
		this.load_track(this.index_no);
		this.playsong();

	}else{
		this.index_no = this.All_song.length;
		this.load_track(this.index_no);
		this.playsong();
	}
}
*/


  // change volume
  /**New Hide
volume_change(){

  	this.volume_show = this.volume_;

	  this.track.volume = this.volume_ / 100;

}
*/

// change slider position
/**New Hide
change_duration(){
	let slider_position = this.track.duration * (this.slider / 100);
	this.track.currentTime = slider_position;
}
*/

// autoplay function
/**New Hide
autoplay_switch(){
	if (this.autoplay==1){
       this.autoplay = 0;
       this.auto_play = true;
	}else{
       this.autoplay = 1;
       this.auto_play = false;
	}
}
*/



/**New Hide

range_slider(){
	let position = 0;

        // update slider position
		if(!isNaN(this.track.duration)){
		   position = this.track.currentTime * (100 / this.track.duration);
		    this.slider =  position;
	      }


       // function will run when the song is over
       if(this.track.ended){
       	 this.play_ = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(this.autoplay==1){
              this.index_no += 1;
              this.load_track(this.index_no);
              this.playsong();
           }
	    }
     }

   */

  public pageContent = {
    header:{
      title: 'SERMONS',
      subtitle: 'Did you miss a Sermon? Find previous Sermons here',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-pastSermonAudio",
      audiobtn: 'Audio',
      videobtn: 'Video',
      vidA: true
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
