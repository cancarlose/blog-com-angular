import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // Decorator para permitir que o pai insira a informação ao chamar o componente
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
