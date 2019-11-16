import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { NgModule } from '@angular/core';


const inboxRotas: Routes = [
    {
        path: '', component: CaixaDeEntradaComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(inboxRotas)
    ],
    exports: [RouterModule]
})

export class InboxRoutingModule {}

