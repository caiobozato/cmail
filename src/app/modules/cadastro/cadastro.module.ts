import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from '../cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from '../cmail-form-group/cmail-form-group.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRouting } from './cadastro-routing.module';

@NgModule({
    declarations: [
        CadastroComponent,
        CmailFormGroupComponent,
        CmailFormFieldDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedComponentModule,
        CadastroRouting
    ]
})

export class CadastroModule { }