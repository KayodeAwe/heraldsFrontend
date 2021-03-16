import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-sub',
  templateUrl: './footer-sub.component.html',
  styleUrls: ['./footer-sub.component.css']
})
export class FooterSubComponent implements OnInit {

  @Input() content:any;

  constructor() { }

  ngOnInit(): void {
  }

}
