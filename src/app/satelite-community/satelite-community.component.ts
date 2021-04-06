import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satelite-community',
  templateUrl: './satelite-community.component.html',
  styleUrls: ['./satelite-community.component.css']
})
export class SateliteCommunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pageContent = {
    header:{
      title: 'SATELITE COMMUNITY',
      subtitle: 'Welcome, to a warm Family',
      logOutbtn: '',
      img_src: "testheader-bg-overlay-sateliteCommunity",
      audiobtn: '',
      videobtn: ''
    }
  };

}
