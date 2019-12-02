import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export const SERVICE = environment.apiUrl;

@Injectable()
export class ProdutoService {

    constructor(private http: HttpClient) {}

    getProdutos(): Observable<any> {
        return this.http.get(`${SERVICE}/produto`);
    }

    getProduto(id): Observable<any> {
        return this.http.get(`${SERVICE}/produto/${id}`);
    }

}