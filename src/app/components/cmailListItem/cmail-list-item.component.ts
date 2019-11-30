import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {
  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter();

  constructor() { }

  removeEmail(click: Event) {
    console.log('Clicou');
    if (confirm('Tem certeza que deseja remover?')) {
      this.vaiRemover.emit({ status: 'removing' });
    }
  }

  ngOnInit() {
  }

}
