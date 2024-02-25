import { Component, OnInit } from '@angular/core';

import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Criando array de notícias para armazenar todos os valores da dataFake
  newsArray: Array<{ id: string, image: string, title: string, description: string }> = [];

  // Criando array de notícias para armazenar o número de notícias de cada card
  mediumCardNews: Array<{ id: string, image: string, title: string, description: string }> = [];

  textCardNews: Array<{ id: string, image: string, title: string, description: string }> = [];

  smallCardNews: Array<{ id: string, image: string, title: string, description: string }> = [];

  constructor() { }

  ngOnInit(): void {
    // Chamando método para incrementar array de notícias
    this.setNewsToArray();
  }

  // Criando método para armazenar valores do dataFake em um array
  setNewsToArray() {
    // Para cada objeto de notícia dentro do dataFake incrementa o valor dentro do array desta página
    dataFake.forEach((news) => {
      this.newsArray.push(news)
    });

    // Armazenando número específico de notícia dentro do mediumCardNews
    this.mediumCardNews = this.newsArray.slice(0, 5);

    // Armazenando número específico de notícia dentro do textCardNews
    this.textCardNews = this.newsArray.slice(0, 3);

    // Armazenando número específico de notícia dentro do smallCardNews
    this.smallCardNews = this.newsArray.slice(0, 8);
  }

}
