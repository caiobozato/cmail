import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    api = 'http://localhost:3200/emails';
    cabecalho = new HttpHeaders({
        'Authorization': localStorage.getItem('TOKEN')
    });

    constructor(private httpClient: HttpClient) { }

    enviar({ destinatario, assunto, conteudo }) {
        const emailParaApi = {
            to: destinatario,
            subject: assunto,
            content: conteudo
        };

        return this.httpClient
            .post(this.api, emailParaApi, { headers: this.cabecalho })
            .pipe<Email>(
                map(
                    (emailParaApi: any) => {
                        return new Email({
                            destinatario: emailParaApi.to,
                            assunto: emailParaApi.subject,
                            conteudo: emailParaApi.content,
                            dataDeEnvio: emailParaApi.created_at,
                            id: emailParaApi.id
                        });
                    }
                )
            );
    }
    listar() {
        return this.httpClient
            .get(this.api, { headers: this.cabecalho })
            .pipe<Email[]>(
                map(
                    (response: any[]) => {
                        return response
                            .map(
                                emailApi => new Email({
                                    destinatario: emailApi.to,
                                    assunto: emailApi.subject,
                                    conteudo: emailApi.content,
                                    dataDeEnvio: emailApi.created_at,
                                    id: emailApi.id
                                })
                            );
                    })
            );
    }
    deletar(id) {
        return this.httpClient
            .delete(`${this.api}/${id}`, { headers: this.cabecalho });
    }
}
