import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contentTitle: string = "";
  contentDescription: string = "";
  contentImage: string = "";

  // Criando id para a content page (necessário aceitar null por exigência da route.paramMap.subscribe abaixo)
  private contentId: string | null = "0";

  // Adiciona parâmetro para gerenciar rotas no método construtor do componente
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    // Passando a id passada ao clicar no card para a id da content page
    this.route.paramMap.subscribe(value => {
      this.contentId = value.get("id")
    })

    // Chamando método para puxar informações do dataFake a partir do id carregado do componente anterior
    this.setValuesToComponent(this.contentId);
  }

  // Cria função para setar informações do componente de forma dinâmica a partir do dataFake importado
  setValuesToComponent(id: string | null) {

    // Filtra o artigo (dataFake) de acordo com o id que foi armazenado nesta página de conteúdo (content page) e foi passado pelo componente anterior
    const result = dataFake.filter(article => article.id == id)[0]

    // Atribuindo às variáveis dessa páginas as informações extraídas do dataFake
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentImage = result.image;

  }

}
