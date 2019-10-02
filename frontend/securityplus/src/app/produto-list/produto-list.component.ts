import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor() { }

  produto = {
    descricao: '',
    fabricante: null,
    classificacao: null
    
  };

  ngOnInit() {
  }

}
