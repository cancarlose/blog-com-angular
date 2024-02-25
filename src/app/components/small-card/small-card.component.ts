import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  image: string = "";
  @Input()
  title: string = "";
  @Input()
  description: string = "";
  @Input()
  newsId:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
