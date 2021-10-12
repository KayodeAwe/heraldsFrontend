import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Video } from '../interfaces/video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs : ['videos', 'hideSelectionClass'],
  outputs : ['SelectVideo', 'Search_filter']
})
export class VideoListComponent implements OnInit {

  @Input() videos : any;
  VideoName : string;
  index = 0;


  hideSelectionClass:boolean;

  highlight=true;
  seleted:false;


  public SelectVideo = new EventEmitter();
  public Search_filter = new EventEmitter();

  constructor() { }



  ngOnInit(): void {


  }

  onSelect(vid:Video){
    this.SelectVideo.emit(vid);
    this.seleted = this.videos.indexOf(vid)
    console.log("index is - ", this.seleted)
    console.log("check video content", this.videos)
  }

  SearchfromDetail(){
    this.Search_filter.emit(this.VideoName);
  }

}
