import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'p-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(
    private produtoService:ProdutoService
  ) { }

  produto = {
    descricao: '',
    fabricante: null,
    classificacao: null
  };

  produtos:[];

  ngOnInit() {
  }

}
