import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-others',
  templateUrl: './header-others.component.html',
  styleUrls: ['./header-others.component.css']
})
export class HeaderOthersComponent implements OnInit {

  @Input() content:any;

  constructor() { }

  ngOnInit(): void {
  }

}
