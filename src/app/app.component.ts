import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _isNewEmailFormOpen: boolean = false;
  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isNewEmailFormOpen(): boolean{
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handleNewEmail(FormEmail: NgForm){
    if(FormEmail.invalid) return;

    this.emailList.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    FormEmail.reset();
  }
}
