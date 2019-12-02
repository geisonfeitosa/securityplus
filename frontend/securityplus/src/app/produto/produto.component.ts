import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'p-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  produto = {
    id: '',
    nome: '',
    descricao: '',
    fabricante: null,
    classificacao: null,
    categoria: {nome: ''},
    valor: Number
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id) {
        this.produtoService.getProduto(id).subscribe(ret => {
          this.produto = ret;
          console.log(this.produto);
        })
      }
    });
  }

}
