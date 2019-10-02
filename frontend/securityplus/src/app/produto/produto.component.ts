import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  produto = {
    descricao: '',
    fabricante: null,
    classificacao: null
  };

  ngOnInit() {
  }

}
