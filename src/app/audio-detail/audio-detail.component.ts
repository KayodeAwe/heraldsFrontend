import { Component, OnInit, EventEmitter } from '@angular/core';
import {AudioIt } from '../interfaces/audio-it';

@Component({
  selector: 'audio-detail',
  templateUrl: './audio-detail.component.html',
  styleUrls: ['./audio-detail.component.css'],
  inputs : ['SongFD', 'index_no'],
  outputs : ['updateAudioEvent', 'deleteAudioEvent', 'nextAudioEvent']
})
export class AudioDetailComponent implements OnInit {

  index_no: number;
  timer1:any;
  total:number = 5 ;
  present: number = 1;
  title1 = "title.mp3";
  artist = "Artist name";
  track_image:string = "";
  slider:number = 0;


  adminAccess = false;

  public nextAudioEvent = new EventEmitter();


  previous_ = '<i class="fa fa-step-backward" aria-hidden="true"></i>';

  play_ = '<i class="fa fa-play" aria-hidden="true"></i>';

  next_ = '<i class="fa fa-step-forward" aria-hidden="true"></i>';

  autoplay = 0;

  Playing_song = false;

  SongFD : AudioIt;

  auto_play : boolean = false;

  volume_ : number = 90;
  volume_show : number = 90;




  editTitle : boolean = false;

  private updateAudioEvent = new EventEmitter();
  private deleteAudioEvent = new EventEmitter();





  constructor() { }

  ngOnInit(): void {
    this.load_track(this.index_no);
  }



//New information


//create a audio Element

private track = new Audio();

// function load the track
load_track(index_no:number){

	clearInterval(this.timer1);
	this.reset_slider();


	this.track.src = this.SongFD.path;
	this.title1 = this.SongFD.name;
	this.track_image = this.SongFD.img;
  this.artist = this.SongFD.singer;
  this.track.load();
  this.playsong();

  this.timer1 = setInterval(() => {
    this.range_slider();
  }, 1000);

	//this.timer1 = setInterval( this.range_slider(), 1000);

	/** hide_total this.total = this.SongFD.length;**/
	this.present = index_no + 1;

}


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


playsong(){
  this.track.play();
  this.Playing_song = true;
  this.play_ = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


// reset song slider
reset_slider(){
  this.slider = 0;
}

// previous song
previous_song(){


  this.index_no--

  this.nextAudioEvent.emit(this.index_no);


  /** Hide this
	if(this.index_no > 0){
		this.index_no -= 1;
		this.load_track(this.index_no);
		this.playsong();

	}else{*/
		/**hide_this_now this.index_no = this.SongFD.length;**/
		//this.load_track(this.index_no);
		//this.playsong();
	}


// checking.. the song is playing or not

justplay(){

  if(this.Playing_song==false){

      this.playsong();

    }else{
    this.pausesong();
  }
}


//pause song
pausesong(){
	this.track.pause();
	this.Playing_song = false;
	this.play_ = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
next_song(){

  this.index_no++

  this.nextAudioEvent.emit(this.index_no);
  console.log("emitted_value_still_in_Audio_detail", this.index_no );
  /** Hide this now
	if(this.index_no < this.SongFD.length - 1){
		this.index_no += 1;
		this.load_track(this.index_no);
		this.playsong();
	}else{
		this.index_no = 0;
		this.load_track(this.index_no);
		this.playsong();

	}
  */
}

// change slider position
change_duration(){
	let slider_position = this.track.duration * (this.slider / 100);
	this.track.currentTime = slider_position;
}


// autoplay function
autoplay_switch(){
	if (this.autoplay==1){
       this.autoplay = 0;
       this.auto_play = true;
	}else{
       this.autoplay = 1;
       this.auto_play = false;
	}
}

// change volume
  volume_change(){

  	this.volume_show = this.volume_;

	  this.track.volume = this.volume_ / 100;

}

//mute sound function

mute_sound(){
  this.track.volume = 0;
  this.volume_ = 0;
  this.volume_show = 0;
}

//Previous button control
check_previous_button = false;

checkPreviousButton(){
  if (this.index_no <= 0){
    this.check_previous_button = true;
  }
  else{
    this.check_previous_button = false;
  }
}



  ngOnChanges(){
    this.editTitle = false;
    this.load_track(this.index_no);
    this.checkPreviousButton();
  }

  ngOnDestroy() {
    if (this.timer1) {
      clearInterval(this.timer1);
    }
    this.pausesong()
  }


  onTitleClick(){
    this.editTitle = true;
  }


  updateAudio(){
    this.updateAudioEvent.emit(this.SongFD)
  }

  deleteVideo(){
    this.deleteAudioEvent.emit(this.SongFD)
  }

}
