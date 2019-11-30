import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

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

  constructor(private emailService: EmailService) { }

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

  ngOnInit() {
    this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        })
  }
}
