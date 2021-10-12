import { Component, OnInit, EventEmitter } from '@angular/core';
import {AudioIt} from  '../interfaces/audio-it'

@Component({
  selector: 'audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css'],
  inputs : ['All_song'],
  outputs : ['SelectSong','Search_filter']
})
export class AudioListComponent implements OnInit {

  public SelectSong = new EventEmitter();
  public Search_filter = new EventEmitter();
  p: number = 1

  All_song :AudioIt[];
  messageName: string;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect( Aud : AudioIt[]){
    this.SelectSong.emit( Aud )
  }

  SearchfromDetail(){
     this.Search_filter.emit(this.messageName);
 }



}
