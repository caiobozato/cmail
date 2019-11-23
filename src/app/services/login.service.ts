import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
    api = 'http://localhost:3200/login';

    constructor(private httpClient: HttpClient) { }

    logar(dadosLogin: object) {
        return this.httpClient
            .post(this.api, dadosLogin)
            .pipe(
                map((response: any) => {
                    localStorage.setItem('TOKEN', response.token);
                    return response;
                })
            );
    }
}
