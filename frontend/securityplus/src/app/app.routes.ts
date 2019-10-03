import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'produto/:id', component: ProdutoComponent},
    {path: '**', component: HomeComponent}
]