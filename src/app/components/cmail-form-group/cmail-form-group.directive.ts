import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[cmailFormField]'
})

export class CmailFormFieldDirective implements OnInit {
    constructor(private element: ElementRef) { }

    ngOnInit() {
        const campo = this.element.nativeElement as HTMLInputElement;
        if (campo.name) {
            campo.id = campo.name;
            campo.setAttribute('placeholder', ' ');
            campo.classList.add('mdl-textfield__input');
        }
        else {
            throw new Error('Atributo name é obrigatório');
        }
    }
}