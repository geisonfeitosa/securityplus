import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoService } from './services/produto.service';
import { HttpClientModule } from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import pt from '@angular/common/locales/pt';
import { HomeService } from './services/home';
 
registerLocaleData(pt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    ProdutoListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ProdutoService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
