import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export const SERVICE = "http://localhost:8080/securityplus/rest";

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