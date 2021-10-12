import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from '../interfaces/video';

@Component({
  selector: 'video-details-latest',
  templateUrl: './video-details-latest.component.html',
  styleUrls: ['./video-details-latest.component.css']
})
export class VideoDetailsLatestComponent implements OnInit {

  url=""

  editTitle : boolean = false;

  constructor( private _videoService : VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
    .subscribe(
      resVideoData => this.url = resVideoData.reverse().shift().url

      );

      console.log("see it oooooo", this.url)


  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }


}
