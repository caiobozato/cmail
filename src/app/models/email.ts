export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataDeEnvio = '';
    id ='';

    constructor({ destinatario, assunto, conteudo, dataDeEnvio, id }:
        {destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string, id: string}) {
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.conteudo = conteudo;
        this.dataDeEnvio = dataDeEnvio;
        this.id = id;
    }

    get introducaoDoConteudo() {
        return this.conteudo.substr(0, 140) + '...';
    }
}
