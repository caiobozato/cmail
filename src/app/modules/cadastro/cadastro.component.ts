import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required)
  });

  validarTodosOsCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro.value);
      alert('Beleza campeão');
    }
    else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
