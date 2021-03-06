import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component({
  selector: 'app-cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  private _isNewEmailFormOpen = false;
  mensagemErro;

  emailList = [];
  email = { destinatario: '', assunto: '', conteudo: '' };
  termoParaFiltro = '';

  constructor(private emailService: EmailService, private pageService: PageDataService, private headerService: HeaderDataService) { }

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      return;
    }

    this.emailService.enviar(this.email)
      .subscribe(
        emailApi => {
          this.emailList.push(emailApi);
          this.email = { destinatario: '', assunto: '', conteudo: '' };
          formEmail.reset();
        },
        (erro: HttpErrorResponse) => {
          this.mensagemErro = erro.error;
        }
      );
    formEmail.reset();
  }

  handleRemoveEmail(eventoVaiRemover, emailId) {
    if (eventoVaiRemover.status === 'removing') {
      this.emailService
        .deletar(emailId)
        .subscribe(
          res => {
            console.log(res);
            this.emailList = this.emailList.filter(email => email.id !== emailId);
          },
          err => console.error(err)
        );
    }
  }

  filtrarEmailsPorAssunto() {
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter(email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltroEmMinusculo);
    });
  }

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        });
    this.pageService.defineTitulo('Caixa de entrada - Cmail');
    this.headerService
        .valorDoFiltro
        .subscribe(novoValor => this.termoParaFiltro = novoValor);
  }
}
