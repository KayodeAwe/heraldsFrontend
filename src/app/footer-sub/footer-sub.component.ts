import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-sub',
  templateUrl: './footer-sub.component.html',
  styleUrls: ['./footer-sub.component.css']
})
export class FooterSubComponent implements OnInit {

  @Input() public content_footer:any;

  constructor() { }

  ngOnInit(): void {
  }

}
