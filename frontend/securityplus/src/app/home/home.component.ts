import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';
import { HomeService } from '../services/home';

@Component({
  selector: 'p-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private homeService: HomeService
  ) { }

  produtos:[];
  categorias:[];

  ngOnInit() {
    this.getCategorias();
    this.getProdutos();
  }

  getCategorias() {
    this.homeService.getCategorias().subscribe(ret => {
      this.categorias = ret;
    })
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe(ret => {
      this.produtos = ret;
      console.log(this.produtos);
    });
  }

  detalhesProduto(produto) {
    this.router.navigate(['/produto/', produto.id]);
  }

}
