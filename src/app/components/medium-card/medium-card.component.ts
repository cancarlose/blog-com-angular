import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent implements OnInit {

  // Decorator para permitir que o pai insira a informação ao chamar o componente
  @Input()
  photo: string = "";

  @Input()
  title: string = "";
  @Input()
  description: string = "";
  @Input()
  newsId:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
