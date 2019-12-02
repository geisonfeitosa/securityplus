import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export const SERVICE = environment.apiUrl;

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) {}

    getCategorias(): Observable<any> {
        return this.http.get(`${SERVICE}/categoria`);
    }

}